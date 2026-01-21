# Product Management Dashboard

A simple and clean **Product Management Dashboard** built with **React (Vite)** and **Tailwind CSS**.  
The application demonstrates full **CRUD operations**, state management using **custom hooks**, and a modular architecture designed for easy backend integration in the future.

---

## 🚀 Tech Stack

- **React** (Functional Components & Hooks)
- **Vite** (Fast development build tool)
- **Tailwind CSS** (Utility-first styling)
- **JavaScript (ES6+)**
- **Mock data (No backend)**

---

## 📂 Project Structure
src/
│
├── components/

│ ├── layout/

│ │ ├── Sidebar.jsx

│ │ ├── Navbar.jsx

│ │ └── DashboardLayout.jsx

│ ├── common/

│ │ ├── Button.jsx

│ │ ├── Modal.jsx

│ │ └── Input.jsx

│ ├── dashboard/

│ │ └── SummaryCard.jsx

│ └── products/

│ ├── ProductTable.jsx

│ ├── ProductForm.jsx

│ └── ProductFilter.jsx

├── pages/

│ └── Dashboard.jsx

├── data/

│ └── mockProducts.js

├── hooks/

│ └── useProducts.js

├── App.jsx

└── main.jsx


---

## ✨ Features

### 📊 Dashboard Overview
- Total products count
- In-stock products
- Out-of-stock products

### 📦 Product Management (CRUD)
- Add new product (modal form)
- Edit existing product
- Delete product
- Real-time UI updates

### 📋 Product Table
- Name
- Category
- Price
- Stock
- Status (In Stock / Out of Stock)
- Edit & Delete actions

### 🔍 Filtering & Search
- Search by product name
- Filter by product category

### ✅ Form Validation
- Required fields
- Numeric validation for price and stock

---

## 🧠 Architecture & Logic

- **Custom Hook (`useProducts`)**
  - Manages product state
  - Handles Create, Read, Update, Delete logic
- **Separation of Concerns**
  - UI components are separated from business logic
- **Scalable Design**
  - Easy to replace mock data with a real backend API

---

## 🛠️ Installation & Running the Project

### 1️⃣ Clone the Repository
```
git clone https://github.com/YOUR_USERNAME/product-management-dashboard.git
```
### 2️⃣ Install Dependencies
 ```
 npm install
```
### 3️⃣ Run Development Server
```
 npm run dev
``` 

The app will run at:

http://localhost:5173

## 📌 Future Improvements

Connect to a REST API or backend service

Add authentication & authorization

Pagination and sorting

Persist data using a database

