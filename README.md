# Task Timer Website  

## Overview  
Task Timer is a full-stack web application designed to help users track their tasks by adding, starting, pausing, resuming, and deleting timers. The application includes user authentication (signup/login) and stores timer data persistently.

## Features  
- User authentication (Signup, Login, Logout)  
- Add, start, pause, resume, reset, and delete task timers  
- Timers persist even after refreshing the page  
- Responsive and user-friendly UI with a navigation bar  
- Secure API with JWT authentication  

## Technologies Used  
### Frontend:  
- HTML  
- CSS  
- JavaScript  

### Backend:  
- Node.js  
- Express.js  
- MongoDB  
- JWT for authentication  

## Setup Instructions  

### Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/)  

### Installation  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/yourusername/task-timer.git
   cd task-timer
2. **Install dependencies**:
    ```bash
    npm install
3. **Set up environment variables**:
   Create a .env file in the root directory
   Add the following values:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
4. **Start the backend Server**:
   ```bash
   node server.js
5. **Run the frontend**:
    Open index.html in your browser

**Folder Structure**
```bash
/task-timer
│── /frontend
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── styles.css
│   ├── script.js
│   ├── dashboard.js
│── /backend
│   ├── server.js
│   ├── apiRoutes.js
│   ├── models/
│── package.json
│── README.md

