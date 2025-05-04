from flask import Blueprint, request, jsonify
import random

sentiment_bp = Blueprint('sentiment_api', __name__)

@sentiment_bp.route('/api/sentiment', methods=['POST'])
def sentiment():
    data = request.get_json()
    text = data.get('text', '').strip()

    if not text:
        return jsonify({'error': 'Texte vide.'}), 400

    label = random.choice(["Positive", "Negative", "Neutral"])
    score = round(random.uniform(0.6, 0.99), 3)

    return jsonify({
        'label': label.upper(),
        'score': score
    })
