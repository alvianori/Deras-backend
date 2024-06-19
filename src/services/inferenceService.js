const tf = require("@tensorflow/tfjs-node");

async function predictClassification(model, image) {
  const tensor = tf.node.decodeJpeg(image).resizeNearestNeighbor([224, 224]).expandDims().toFloat();

  const prediction = model.predict(tensor);
  const score = await prediction.data();

  console.log(score);

  const classes = ["Urticaria Hives", "Photodermatitis", "Dyshidrotic Dermatitis", "Atopic Dermatitis", "Seborrheic", "Neurodermatitis", "Angioedema", "Eczema", "Allergic Contact Dermatitis"];

  const classResult = tf.argMax(prediction, 1).dataSync()[0];
  const label = classes[classResult];

  let explanation, suggestion;

  if (label === "Urticaria Hives") {
    explanation = "The main symptoms are red or swollen patches on the skin that itch. It is usually caused by an allergic reaction to food, medications, or environmental factors.";
    suggestion = "Avoid known triggers, such as certain foods or cold exposure.";
  }

  if (label === "Photodermatitis") {
    explanation = "Also known as phototoxic dermatitis, it is a skin reaction caused by sun exposure after using certain products.";
    suggestion = "Use a high SPF sunscreen and avoid direct sun exposure.";
  }
  if (label === "Dyshidrotic Dermatitis") {
    explanation = "A skin condition characterized by the appearance of small, itchy blisters, usually on the palms of the hands and soles of the feet.";
    suggestion = "Avoid triggers such as stress or chemical irritation, and use moisturizing creams to keep the skin hydrated.";
  }

  if (label === "Atopic Dermatitis") {
    explanation = "A chronic condition that causes the skin to become inflamed, dry, and itchy, often due to a combination of genetic and environmental factors.";
    suggestion = "Use gentle, fragrance-free cleansers and moisturizers, and avoid triggers such as harsh soaps or stress.";
  }
  if (label === "Seborrheic") {
    explanation = "It occurs when the skin becomes inflamed, usually in oily areas such as the scalp or face.";
    suggestion = "Use specialized shampoos to control oil production, avoid stress, and maintain good skin hygiene.";
  }
  if (label === "Neurodermatitis") {
    explanation = "A condition in which excessive scratching leads to thickening and reddening of the skin.";
    suggestion = "Use relaxation techniques to reduce scratching, and avoid triggers such as wool or harsh detergents.";
  }
  if (label === "Angioedema") {
    explanation = "Swelling of the tissue beneath the skin, usually around the eyes and lips, often due to an allergic reaction.";
    suggestion = "Avoid known allergens, and consult a doctor for appropriate treatment.";
  }
  if (label === "Allergic Contact Dermatitis") {
    explanation = "An allergic skin reaction that occurs after direct contact with certain allergens such as metals or chemicals.";
    suggestion = "Identify and avoid contact with trigger substances, and use anti-itch creams if necessary.";
  }
  if (label === "Eczema") {
    explanation = "A general term for a group of skin conditions that cause inflammation, dryness, and itchiness, often accompanied by a family history of allergies.";
    suggestion = "Keep the skin moisturized with gentle, non-comedogenic products, and avoid irritants such as harsh soaps or fragrances.";
  }

  return { label, explanation, suggestion };
}

module.exports = predictClassification;
