// src/services/loadModel/js
require("dotenv").config();
const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
  const modelUrl = process.env.MODEL_URL;
  return tf.loadLayersModel(modelUrl);
}

module.exports = loadModel;
