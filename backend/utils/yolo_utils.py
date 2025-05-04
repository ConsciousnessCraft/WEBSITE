import base64
import io
from PIL import Image
import cv2
import numpy as np
from ultralytics import YOLO

model = YOLO("models/yolov8n.pt")

def run_object_detection(image_base64):
    image_bytes = base64.b64decode(image_base64)
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    results = model(image)
    boxes = results[0].boxes
    names = results[0].names

    detected_objects = []
    img_np = np.array(image)

    for box in boxes:
        b = box.xyxy[0].cpu().numpy().astype(int)
        cls = int(box.cls[0].item())
        label = names[cls]
        detected_objects.append(label)
        cv2.rectangle(img_np, (b[0], b[1]), (b[2], b[3]), (0, 255, 0), 2)
        cv2.putText(img_np, label, (b[0], b[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    _, buffer = cv2.imencode('.jpg', img_np)
    jpg_as_text = base64.b64encode(buffer).decode('utf-8')

    return {'detected_objects': detected_objects, 'image_with_boxes': jpg_as_text}
