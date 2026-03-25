from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
# Настраиваем простую базу данных SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///speedtests.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Модель для хранения результатов
class SpeedTestResult(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    download_mbps = db.Column(db.Float, nullable=False)
    upload_mbps = db.Column(db.Float, nullable=False)
    ping_ms = db.Column(db.Float, nullable=False)
    lat = db.Column(db.Float, nullable=True)  # Широта
    lon = db.Column(db.Float, nullable=True)  # Долгота
    is_public = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


with app.app_context():
    db.create_all()


@app.route('/')
def index():
    # Главная страница с тестом и картой
    return render_template('index.html')


@app.route('/api/save_result', methods=['POST'])
def save_result():
    data = request.json

    # Создаем новую запись в БД
    new_result = SpeedTestResult(
        download_mbps=data.get('download'),
        upload_mbps=data.get('upload'),
        ping_ms=data.get('ping'),
        lat=data.get('lat'),
        lon=data.get('lon'),
        is_public=data.get('is_public', False)
    )

    db.session.add(new_result)
    db.session.commit()
    return jsonify({"status": "success", "message": "Результат сохранен!"})


@app.route('/api/public_results', methods=['GET'])
def get_public_results():
    # Отдаем только те результаты, которыми пользователи разрешили поделиться
    results = SpeedTestResult.query.filter_by(is_public=True).all()
    output = []
    for r in results:
        if r.lat and r.lon:  # Отдаем только если есть координаты
            output.append({
                "download": r.download_mbps,
                "ping": r.ping_ms,
                "lat": r.lat,
                "lon": r.lon
            })
    return jsonify(output)


if __name__ == '__main__':
    app.run(debug=True)