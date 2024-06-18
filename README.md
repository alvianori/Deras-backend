# Deras Backend

================

## Prerequisites

---

- **Linux or WSL**: This project requires a Linux environment to run, as `@tensorflow/tfjs-node` may encounter errors when run directly in a Windows terminal.
- **Node.js**: Install Node.js using NVM (Node Version Manager) if you haven't already. Run the following commands:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 18
nvm use 18
```

Restart your terminal after installing NVM.

## Getting Started

---

### Clone the Repository

Clone this repository using the following command:

```bash
git clone https://github.com/alvianori/Deras-backend.git
```

### Install Dependencies

Install the required dependencies by running the following command in the project directory:

```bash
npm i
```

### Start the Application

Start the application by running the following command:

```bash
npm run start
```

## Prediction API

---

To make predictions, send a **POST** request to `http://localhost:3000/predict` with a **form-data** body containing the image.
