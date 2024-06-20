// src/server/server.js

require("dotenv").config();

const Hapi = require("@hapi/hapi");
const routes = require("../server/routes");
const loadModel = require("../services/loadModel");

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  const model = await loadModel();
  if (model) {
    console.log("Model berhasil dimuat!");
  } else {
    console.error("Gagal memuat model!");
  }
  server.app.model = model;

  server.route(routes);

  await server.start();
  console.log(`Server start at: ${server.info.uri}`);
})();
