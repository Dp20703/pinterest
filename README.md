# 📌 Pinterest Clone

A full-stack Pinterest-style web application built with **Node.js**, **Express.js**, **MongoDB**, **EJS**, **HTML/CSS**, and **Bootstrap**.

This app allows users to create accounts, upload and view images, browse a feed of all posts, and view personal profiles—mimicking the core features of Pinterest.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🖼️ Image Upload with Descriptions
- 🏠 Global Feed Displaying All Posts
- 👤 User Profiles with Uploaded Posts
- 📱 Responsive Design with Bootstrap
- 🖥️ Server-side Templating with EJS

---

## 🛠️ Tech Stack

| Tech       | Description                    |
| ---------- | ------------------------------ |
| Node.js    | Runtime environment            |
| Express.js | Web framework for Node.js      |
| MongoDB    | NoSQL database                 |
| EJS        | Templating engine              |
| Bootstrap  | Responsive styling framework   |
| HTML & CSS | Frontend structure and styling |

---

## 📂 Project Structure

```
pinterest-clone/
├── bin/
├── config/
├── models/
│   ├── post.model.js
│   └── user.model.js
├── node_modules/
├── public/
│   ├── images/uploads/
│   ├── javascripts/
│   │   └── feed.js
│   └── stylesheets/
│       ├── feed.css
│       ├── login.css
│       ├── profile.css
│       └── style.css
├── routes/
│   ├── post.route.js
│   └── user.routes.js
├── views/
│   ├── error.ejs
│   ├── feed.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── profile.ejs
│   └── register.ejs
├── .env
├── .gitignore
├── app.js
├── multer.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Dp20703/pinterest
   cd pinterest-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB.
   - Create a `.env` file and add:
     ```env
     MONGODB_URI=your-mongodb-uri
     PORT=4000
     BACKEND_URL=http://localhost:4000
     ```

4. **Run the app:**

   ```bash
   npm start
   ```

5. **Visit:**
   ```
   http://localhost:4000
   ```

---

## 📸 Screenshots

![Login Page](login.png)
![Registration Page](registration.png)
![User Profile Page](profile.png)
![Post Feed Page](post_feed.png)

---

## 🙌 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.
