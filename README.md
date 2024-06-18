Gunakan linux untuk menjalankan/wsl pada windows karena @tensorflow/tfjs-node akan error jika dijalankan langsung di terminal windows

1. Install node.js via nvm jika belum diinstall
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   nvm install 18
   nvm use 18

setelah NVM berhasil terinstal, restart terminal baru install npmnya

2. clone repository
   git clone https://github.com/alvianori/Deras-backend.git

3. masuk ke project yang ada package.json nya, lalu ketik diterminal
   npm i

4. setelah dependensi terinstal, jalankan aplikasi dengan perintah
   npm run start

untuk prediksi gunakan method POST http://localhost:3000/predict dengan body form-data berisi image
