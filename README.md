# WeatherWise


<img width="1467" height="811" alt="weatherwise" src="https://github.com/user-attachments/assets/0ae19585-421e-49c4-8191-ee98c496f56c" />

---

## 🚀 Overview

**WeatherWise** is a real-time weather forecasting application that provides accurate, interactive, and visually intuitive weather insights. It delivers hourly forecasts, wind speed, atmospheric pressure, and a 5-day outlook with dynamic charts and a seamless user experience.

The application supports **Dark and Light themes**, ensuring accessibility and comfortable viewing across different environments. Built with performance and scalability in mind, WeatherWise leverages modern frontend architecture and optimized API fetching strategies for fast and reliable weather updates.

---

## ✨ Features

### 🌤️ Real-Time Weather Data
- Current temperature and weather conditions  
- Feels-like temperature  
- Wind speed and direction  
- Atmospheric pressure  
- Humidity levels  

### 📊 Hourly Forecast Graphs
- Interactive hourly temperature charts  
- Smooth visualizations using Recharts  
- Clear daily trend breakdown  

### 📅 5-Day Forecast
- Extended forecast overview  
- Daily temperature summaries  
- Weather condition indicators  

### 🔎 Smart City Search
- Search weather by city name  
- Dynamic API fetching  
- Graceful handling of invalid locations  

### ⚡ Optimized Data Fetching
- Intelligent caching via TanStack React Query  
- Reduced redundant API calls  
- Background data refetching  

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **State & Data Fetching:** TanStack React Query  
- **Charts:** Recharts  
- **Styling:** Tailwind CSS  
- **UI Components:** Shadcn/UI  
- **Weather API:** OpenWeatherMap API  
- **Deployment:** Vercel 

---

## 🧩 Technical Challenges & Solutions

### 1️⃣ API Rate Limiting

**Challenge:**  
Prevent excessive API calls and handle rate limits effectively.

**Solution:**  
Configured React Query’s `staleTime` and caching mechanisms to limit redundant requests.

---

### 2️⃣ Complex API Data Structure

**Challenge:**  
OpenWeatherMap responses contain deeply nested data not directly suitable for charts.

**Solution:**  
Created transformation utilities to extract and normalize required data before rendering.

---

### 4️⃣ Handling Loading & Error States

**Challenge:**  
Maintaining smooth UX during network delays or invalid searches.

**Solution:**  
Integrated loading indicators and structured error handling using React Query states.

---

## ⚖️ Engineering Tradeoffs

- Used **Tanstack Query** over manual fetch logic for better scalability.
- Chose **Recharts** instead of custom chart implementation to accelerate development.
- Kept architecture fully client-side to simplify deployment.

---

## 🚀 Future Improvements

- Geolocation-based weather detection  
- Weather alerts & notifications  
- Historical weather analytics  
- Backend proxy layer for improved API key protection  
- PWA support for offline caching  

---

## 📚 What I Learned

- Advanced client-side caching strategies  
- Handling third-party API limitations  
- Building scalable UI architecture  
- Implementing global dark/light theme systems  
- Designing clean data transformation layers  
- Improving UX with intelligent loading and state management  

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/your-username/WeatherWise.git
cd WeatherWise
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```
