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
    explanation = "Gejala utamanya adalah bercak merah atau bengkak pada kulit yang gatal. Biasanya disebabkan oleh reaksi alergi terhadap makanan, obat-obatan, atau faktor lingkungan.";
    suggestion = "Hindari pemicu yang diketahui, seperti makanan tertentu atau paparan dingin.";
  }

  if (label === "Photodermatitis") {
    explanation = "Dikenal sebagai dermatitis fototoksik atau fotodermatitis, adalah reaksi kulit yang disebabkan oleh paparan sinar matahari setelah penggunaan produk tertentu.";
    suggestion = "Gunakan tabir surya dengan SPF tinggi dan hindari paparan langsung ke sinar matahari.";
  }
  if (label === "Dyshidrotic Dermatitis") {
    explanation = "Gangguan kulit yang ditandai oleh munculnya gelembung kecil yang gatal, biasanya terjadi di telapak tangan dan kaki.";
    suggestion = "Hindari faktor pencetus seperti stres atau iritasi kimia, gunakan krim pelembap untuk menjaga kelembapan kulit.";
  }

  if (label === "Atopic Dermatitis") {
    explanation = "Kondisi kronis yang menyebabkan kulit menjadi meradang, kering, dan gatal.";
    suggestion = "Gunakan krim pelembap khusus untuk mengurangi kekeringan, hindari pemicu seperti deterjen keras atau stres";
  }
  if (label === "Seborrheic") {
    explanation = "Terjadi ketika kulit menjadi meradang, biasanya pada area berminyak seperti kulit kepala atau wajah.";
    suggestion = "Gunakan sampo khusus untuk mengendalikan produksi minyak, hindari stress, dan jaga kebersihan kulit.";
  }
  if (label === "Neurodermatitis") {
    explanation = "Kondisi di mana rasa gatal menimbulkan garukan berlebihan, menyebabkan kulit menebal dan memerah.";
    suggestion = "Gunakan teknik relaksasi untuk mengurangi garukan, dan hindari bahan pemicu seperti wol atau deterjen yang keras.";
  }
  if (label === "Angioedema") {
    explanation = "Pembengkakan jaringan di bawah kulit, biasanya pada area mata dan bibir, seringkali akibat reaksi alergi.";
    suggestion = "Hindari alergen yang diketahui, konsultasikan dengan dokter untuk pengobatan yang sesuai.";
  }
  if (label === "Allergic Contact Dermatitis") {
    explanation = "Reaksi alergi kulit yang terjadi setelah kontak langsung dengan alergen tertentu seperti logam atau bahan kimia.";
    suggestion = "Identifikasi dan hindari kontak dengan bahan pemicu, gunakan krim anti-gatal jika diperlukan.";
  }
  if (label === "Eczema") {
    explanation = "Kondisi kronis yang menyebabkan kulit menjadi meradang, kering, dan gatal.";
    suggestion = "Gunakan krim pelembap khusus untuk mengurangi kekeringan, hindari pemicu seperti deterjen keras atau stres";
  }

  return { label, explanation, suggestion };
}

module.exports = predictClassification;
