# WhatsAppOrigV2

This project helps you run a local server for WhatsAppOrigV2. Follow the steps below to set up and run the project on your machine.

---

## 🚀 Getting Started

### 1. Clone the Repository
Open your terminal (bash) and clone the repository:
bash
git clone https://github.com/keshavsoft/WhatsAppOrigV2


### 2. Install Dependencies
Navigate into the project folder and install all required packages:
bash
cd WhatsAppOrigV2
npm install


### 3. Update Package Scripts
Open the package.json file and **remove -env-file=.env** from the scripts section.

---

## ▶ Running the Server

### 4. Start the Server
Run the server with:
bash
npm run start

The server will start on *http://localhost:3000*.

### 5. (Optional) Using Environment File
If you want to run the server with environment variables:
1. Copy the contents of .env.local.
2. Paste them into a new file named .env.
3. Start the server again:
   bash
   npm run start
   

---

## ✅ Summary
1. Clone repo  
2. Install packages  
3. Remove -env-file=.env in package.json  
4. Run npm run start (server runs at port 3000)  
5. (Optional) Use .env.local → .env for environment setup  

---
