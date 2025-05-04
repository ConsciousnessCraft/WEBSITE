from flask import Flask
from flask_cors import CORS

from routes.object_detection import object_detection_bp
from routes.sentiment import sentiment_bp
from routes.churn import churn_bp

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(object_detection_bp)
app.register_blueprint(sentiment_bp)
app.register_blueprint(churn_bp)

if __name__ == '__main__':
    app.run(debug=True)
