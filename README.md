
https://github.com/user-attachments/assets/1cd719c1-fd3a-494b-8f2e-86d98003a02a
# 🫁 Lung Lens – AI-Powered Lung Disease Detection

[![Live Demo](https://img.shields.io/badge/View-Demo-blue)](https://lung-lens.vercel.app/)
[![Hackathon Submission](https://img.shields.io/badge/Hackathon-Project-orange)](https://lung-lens.vercel.app/)

Lung Lens is a hackathon project built to democratize access to expert-level lung disease screening. By combining powerful computer vision models with generative AI, we provide users with rapid, reliable interpretations of chest X-rays — even in rural or resource-constrained environments.




---

## 🔍 Overview

Early detection of diseases like **tuberculosis, pneumonia, and lung cancer** can save lives — but a shortage of trained radiologists often delays diagnosis. Lung Lens leverages **Vision Transformers (ViTs)** to detect conditions in chest X-rays and uses **OpenAI’s GPT API** to explain the results in human-friendly language.

This repository contains the **frontend landing page** for the project — a clean, mobile-responsive React app designed to:

- Upload and preview chest X-rays
- Display AI-predicted disease classifications and confidence scores
- Generate non-technical explanations using GPT
- Serve as an MVP interface for doctors, health workers, or patients

---

## 🧪 Live Demo

🌐 **Try it here:** [https://lung-lens.vercel.app](https://lung-lens.vercel.app)

You can test the working prototype by uploading a sample X-ray image and viewing the AI diagnosis and GPT-generated interpretation.

---

## 🧠 How It Works

1. **User uploads a chest X-ray image**
2. The image is sent to our backend (powered by Vision Transformers)
3. If any disease is detected above the threshold, it's passed to GPT
4. GPT generates a plain-language explanation of the result
5. The frontend displays predictions, confidence scores, and interpretation

> Note: This repo includes only the frontend UI. Backend code (model inference & GPT integration) is hosted separately.

---

## 🛠️ Tech Stack

- **React.js** – UI Framework
- **Tailwind CSS** – Styling
- **Vercel** – Deployment
- **OpenAI GPT API** – Generative explanation
- **ViT model (backend)** – X-ray image classification (via FastAPI)

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
git clone https://github.com/Aryamitra95/lung-lens.git
cd lung-lens
npm install
