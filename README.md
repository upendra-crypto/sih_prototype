# 📱 Mobile-based EHR Companion for ASHA Workers in Low-Internet Areas

**Problem Statement ID:** 25219  
**Organization:** Ministry of Science and Technology  
**Department:** Department of Science and Technology (DST)  
**Theme:** MedTech / BioTech / HealthTech  
**Category:** Software

---

## 🧠 Overview
ASHA workers and PHC staff play a crucial role in India’s primary healthcare system, especially in rural areas. However, poor internet connectivity often limits their ability to maintain and update Electronic Health Records (EHRs) in real time.  

This project aims to develop a **lightweight, offline-first mobile application** that allows ASHA workers to **collect, store, and sync patient data seamlessly**, even in areas with little or no internet. The app supports **multilingual interfaces**, **voice-based data entry**, and **automatic synchronization** when connectivity is restored.

---

## ✨ Key Features
- 📴 **Offline-First Architecture** – Store patient data locally during field visits and sync automatically once the device reconnects to the internet.  
- 🌐 **Multilingual Support** – Regional language support for better accessibility.  
- 🗣️ **Voice Input** – Enable faster data entry through speech-to-text in local languages.  
- ⏰ **Reminders & Alerts** – Automated reminders for vaccination, ANC check-ups, and scheduled follow-ups.  
- 🧍 **Role-Based Dashboards** – Separate interfaces for ASHA workers and PHC staff.  
- 🔒 **Secure Data Storage** – All patient data is stored locally with encryption and synced securely.

---

## 🏗️ Tech Stack

| Component             | Technology / Framework        |
|-----------------------|-------------------------------|
| Frontend (Mobile)     | React Native / Flutter       |
| Backend               | Node.js / Express            |
| Database (Offline)    | SQLite / IndexedDB          |
| Database (Online)     | MongoDB / PostgreSQL        |
| Sync Mechanism        | Service Workers / Background Sync |
| Voice Input           | Web Speech API / Native SDK |
| Language Support      | i18n, Google Translate API (for prototyping) |

---

## 📲 Core Workflows
1. **Patient Registration (Offline)** – ASHA enters patient details via form or voice; data is stored locally in SQLite.  
2. **Data Sync (Online)** – When internet is restored, background service syncs data to the central server and updates sync status.  
3. **Reminders & Notifications** – Alerts for upcoming vaccinations or ANC check-ups.  
4. **Reports for PHC Staff** – Aggregated reports and logs accessible for PHC.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)  
- npm or yarn  
- Android Studio / Xcode (for mobile builds)  
- Git
