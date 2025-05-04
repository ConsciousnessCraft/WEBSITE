from flask import Blueprint, request, jsonify
from utils.yolo_utils import run_object_detection

object_detection_bp = Blueprint('object_detection', __name__, url_prefix='/api')

@object_detection_bp.route('/object-detection', methods=['POST'])
def object_detection():
    data = request.get_json()
    image_data = data.get('image')

    if not image_data:
        return jsonify({'error': 'No image provided'}), 400

    try:
        result = run_object_detection(image_data)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
