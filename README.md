💬 LAN Chat Application

A real-time chat application built with Python, Flask, and Flask-SocketIO that allows multiple users to communicate over a Local Area Network (LAN) using any modern web browser.

✨ Features

- 🚀 Real-time messaging
- 🌐 Works over a Local Area Network (LAN)
- 👥 Multiple users can chat simultaneously
- 💻 Simple and responsive web interface
- ⚡ Lightweight and easy to deploy
- 📱 Accessible from desktops, laptops, tablets, and smartphones
- 🔒 No internet connection required (same network only)

🛠️ Technologies Used

- Python 3
- Flask
- Flask-SocketIO
- Eventlet
- HTML
- CSS
- JavaScript
- Socket.IO

📂 Project Structure

LAN-Chat-App/
│── app.py
│── requirements.txt
│── README.md
└── templates/
    └── index.html

📦 Installation

Clone the repository:

git clone https://github.com/your-username/LAN-Chat-App.git
cd LAN-Chat-App

Install dependencies:

pip install -r requirements.txt

Or install manually:

pip install flask flask-socketio eventlet

▶️ Running the Application

Start the server:

python app.py

The application will be available at:

http://localhost:5000

🌐 Access from Other Devices

1. Connect all devices to the same Wi-Fi or LAN.
2. Find the host computer's IP address.

Windows:

ipconfig

Linux/macOS:

ifconfig

or

ip addr

Suppose the local IP address is:

192.168.1.25

Other devices can join by opening:

http://192.168.1.25:5000

📸 Screenshots

Add screenshots of the application here after deployment.

🚀 Future Improvements

- User authentication
- Private messaging
- Multiple chat rooms
- File sharing
- Emoji support
- Message history
- Notifications
- Dark mode
- Online users list

🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a feature branch, and submit a pull request.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Developed by Krish Hada.# LAN-Chat-App
A real-time LAN chat application built with Python, Flask, and Socket.IO that enables multiple users on the same local network to communicate instantly through a web browser without requiring an internet connection.
