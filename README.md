# AI Safety Incident Log Service

This is a simple RESTful API built with **Node.js**, **Express**, and **SQLite** to log and manage hypothetical AI safety incidents. The project supports basic CRUD operations and stores incidents in a SQLite database.



---

## 📌 Features
- Log new AI safety incidents.
- View all logged incidents.
- View a specific incident by ID.
- Delete incidents by ID.
- Basic validation and error handling.

---

## 🧠 Data Model

Each incident has the following fields:
- `id`: Auto-generated unique ID.
- `title`: A short summary of the incident.
- `description`: A more detailed explanation.
- `severity`: Must be one of `"Low"`, `"Medium"`, or `"High"`.
- `reported_at`: Automatically generated timestamp when the incident is created.

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **SQLite3** (for database)
- **Knex.js** (for migrations and seed data)

---

## 🚀 How to Set Up and Run

### 1. Clone the Repository
```bash
git clone https://github.com/DeveloperTiwariji/Assignment.git
cd Assignment
