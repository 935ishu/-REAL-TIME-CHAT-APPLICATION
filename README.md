REAL-TIME-CHAT-APPLICATION

COMPANY :CODTECH IT SOLUTIONS

NAME :HARIJANA ISWARYA

INTERN ID :CT04DK692

DOMAIN :MERN STACK WEB DEVELOPMENT

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH

Real-Time Chat Application using MERN and Socket.IO

The goal of Task 1 was to design and develop a Real-Time Chat Application using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.IO for real-time communication. The project allows multiple users to connect, register with a username, join a global chat, and exchange messages instantly — including private messaging between users. This task was a hands-on implementation of how real-time systems work using WebSockets, and it emphasizes event-driven architecture in modern web development.

We started by setting up the backend server using Node.js and Express. Socket.IO was integrated to manage the WebSocket connections. When a user connects, the server listens for events like new-user, send-message, or private-message. All active users are stored in a dictionary to maintain mapping between usernames and socket IDs. This enabled us to broadcast public messages to all users and private messages to specific individuals using their socket IDs. The backend also handled the logic for maintaining an updated list of online users and informing all connected clients whenever a new user joins or someone disconnects.

On the frontend, we used React to build a responsive and interactive user interface. Initially, users are prompted to enter a username to join the chat. Upon registration, their username is shared with the server via a Socket.IO connection, and the main chat interface is displayed. Users can type and send messages, which are broadcast to all users in real-time. The frontend listens for incoming messages and dynamically updates the chat window using React hooks like useEffect and useState. The message format includes the sender’s name, content, and whether it’s public or private.

A key feature in the chat app is the support for private messaging. Users can click on a username from the online users list to initiate a private message. This message is only visible to the sender and the selected recipient. The system uses Socket.IO’s targeted messaging capability to route private messages directly to the recipient's socket.

We also included basic frontend validations — such as not allowing empty usernames or empty messages. Styling was kept minimal but clean using CSS to ensure clarity and responsiveness across screen sizes. We used the local server for development, but the system is fully compatible with deployment to cloud platforms like Render, Vercel, or Heroku.

This task helped solidify concepts of real-time bidirectional communication, event handling, user sessions, and client-server synchronization. It also provided valuable experience integrating multiple technologies (React frontend with a Node.js + Socket.IO backend) in a single working product.

Overall, the Real-Time Chat App demonstrates how to build a collaborative, low-latency system using the MERN stack — an essential skill for full-stack developers. The project can be extended further by adding authentication, message persistence using MongoDB, user avatars, typing indicators, and chat rooms. This foundational task also sets the stage for understanding real-time updates, which can be used in future applications like collaborative editing tools, multiplayer games, or live dashboards.

