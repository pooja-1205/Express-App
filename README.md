# 🚀 Express.js App Setup & Routing Demo

This project demonstrates a basic backend setup using **Express.js**, including **EJS templating**, **static file handling**, and **dynamic routing**. It's a foundational exercise for understanding server-side rendering with Node.js and Express.

---

## 📦 Setup Steps

### 1️⃣ Initialize the Project

```bash
npm init -y
```
This creates a package.json file which keeps track of your project's metadata, dependencies, and scripts.

### 2️⃣ Install Express
```bash
npm i express
```
Express is a lightweight web framework for Node.js that helps manage routing, requests, and middleware.

### 3️⃣ Create index.js and Write Server Logic
#### Key features implemented in index.js:

1) Enable middleware to parse incoming requests:

```bash
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```
2) Serve static files from the public/ directory:

```bash
app.use(express.static(path.join(__dirname, "public")));
```
3) Set EJS as the view engine for dynamic HTML rendering:

```bash
app.set("view engine", "ejs");
```
4) Define application routes:

  i) Root route / renders index.ejs:

```bash
res.render("index");
```
  ii)Dynamic route /profile/:username returns a personalized response:

```bash
res.send(`Welcome, ${req.params.username}`);
```
### 4️⃣ Start the Server
```bash
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
```
This boots up your app on localhost:3000.

## 📁 Folder Structure
```bash
/project-root
├── public/          # Static assets like CSS, JS, images
├── views/           # EJS templates (e.g. index.ejs)
├── index.js         # Main server file
├── package.json     # Project configuration and dependencies
└── README.md

```
