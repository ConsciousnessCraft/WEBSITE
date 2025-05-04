from flask import Blueprint, request, jsonify

churn_bp = Blueprint('churn', __name__)

@churn_bp.route('/api/churn', methods=['POST'])
def predict_churn():
    data = request.get_json()
    age = data.get('age', 0)
    frequency = data.get('frequency', 0)

    
    if frequency < 2 and age < 30:
        prob = 0.85
        prediction = "Churn"
    elif frequency < 2:
        prob = 0.65
        prediction = "Churn"
    else:
        prob = 0.2
        prediction = "Not Churn"

    return jsonify({
        'prediction': prediction,
        'churn_probability': round(prob, 2)
    })
