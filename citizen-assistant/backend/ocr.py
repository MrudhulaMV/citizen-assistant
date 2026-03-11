import pytesseract
import cv2
import numpy as np

def read_document(image_bytes):

    nparr = np.frombuffer(image_bytes, np.uint8)

    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    text = pytesseract.image_to_string(img)

    return text