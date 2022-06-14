# Predicts hair length (Short or Long) using yolov5 model
# The file paths may be different
import torch
import PIL
import matplotlib.pyplot as plt
import numpy as np
import cv2
model = torch.hub.load('ultralytics/yolov5', 'custom', path='/PATH-TO-PT-FILE/best.pt', force_reload=True)
img = PIL.Image.open("PATH-TO-IMAGE")
results = model(img)

def final_pred(pred_output):
  pred = {"Short": 0, "Long": 0}
  for i in pred_output["name"]:
   if (i == "Short"):
     pred["Short"] += 1
   elif (i == "Long"):
     pred["Long"] += 1

  if pred["Short"] > pred["Long"]:
    print("Short")
  elif pred["Short"] < pred["Long"]:
   print("Long")
  else:
   print("Inconclusive")

final_pred(results.pandas().xyxy[0]) # Result to be used