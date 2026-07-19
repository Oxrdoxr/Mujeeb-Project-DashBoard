
# Mujeeb Project Dashboard
An Automatic Rescue Detection for Vehicle Emergencies 
## Overview

Mujeeb is an automatic emergency response system designed to detect vehicle accidents and notify emergency teams in real time.

This repository contains the Emergency Dashboard web application, built with React.js, which displays accident alerts and incident details for emergency responders.

## What the project is

Mujeeb is an integrated system composed of:

- **Detection Device**: An Arduino-based device installed in vehicles with sensors such as accelerometers and collision detectors.
- **Cloud Communication**: The device sends alerts to a cloud server using GSM or Wi-Fi when an accident is detected.
- **Emergency Dashboard**: A React.js dashboard used by emergency teams to monitor accident alerts, view incident status, and track locations on a live map.

## Main objective

The goal is to automate accident notification and improve emergency response without using artificial intelligence.

The system relies on programmed sensor readings and real-time communication to provide faster incident detection and response.

## Quick README Summary

Mujeeb Dashboard is a React.js web application that supports the Mujeeb automatic emergency response system by displaying car accident alerts in real time to emergency teams.

## Features implemented

- Login page and signup flow for dashboard access
- Dashboard with incident status cards
- Incident list filtered by status (new, responding, resolved)
- Incident detail panel with status controls
- Live map rendering incident markers using Leaflet
- Firebase Realtime Database integration for incident data

## Tech stack

- React
- React Router
- Firebase Realtime Database
- Leaflet and react-leaflet
- React Icons
- Create React App

## Project structure

- `src/App.jsx`: app routing and dashboard layout
- `src/components/`: header, status cards, incident list, incident details, live map
- `src/pages/`: `Login.jsx`, `Signup.jsx`
- `src/firebase/firebaseConfig.js`: Firebase initialization
- `src/styles/`: CSS styles

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open the app at:
   ```bash
   http://localhost:3000
   ```

## Notes

- Current authentication is UI-based and does not use Firebase Auth yet.
- The app reads and updates incident data from Firebase Realtime Database.
- Ensure `src/firebase/firebaseConfig.js` contains your real Firebase project credentials.
- If using source control, do not commit sensitive Firebase configuration.
>>>>>>> master
=======
Mujeeb: Automatic Emergency Response System
Mujeeb is an integrated automatic system designed to detect car accidents through sensors and immediately notify emergency teams using a cloud-connected dashboard platform.
The system operates without artificial intelligence, relying on programmed sensor readings and real-time communication to ensure fast response.

Project Components:
Detection Device:
An Arduino-based device installed in vehicles, equipped with sensors (such as accelerometers and collision detectors) that automatically detect accidents.

Cloud Communication:
Upon detecting an accident, the device instantly sends an alert to a cloud server using GSM or Wi-Fi.

Emergency Dashboard (Web Application):
A React.js-based web dashboard used by emergency responders to monitor and receive accident alerts and view incident details.

Main Objective:
To automate the accident notification process, ensuring quick emergency response and improving post-accident management without the use of AI.

🔥 Quick README Summary Version:
Mujeeb Dashboard is a React.js web application that supports the Mujeeb automatic emergency response system by displaying car accident alerts in real-time to emergency teams.

>>>>>>> 5cdb2c7faf9da5d176eacef5dec503b74d4e2fd6
