# Todo List API

Api ini menggunakan teknologi express js dan sequelize sebagai ORM serta authentifikasi dengan menggunakan JWT

## Content


- [Intrdduction](#introduction)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Installation](#installation)
- [Usage](#usage)

## Intrduction

API ini memungkinkan pengguna untuk mengelola daftar tugas mereka. Pengguna perlu mengautentikasi menggunakan JWT sebelum mengakses titik akhir terkait tugas.

## Authentication

Untuk mengakses titik akhir yang dilindungi, Anda perlu menyertakan token JWT yang valid di header Otorisasi dengan awalan "Pembawa".To access protected endpoints, you need to include a valid JWT token in the Authorization header with the "Bearer" prefix pada beberapa endpoint yaitu todo dan user.

## Endpoints

### Get All Todo

- **Endpoint:** `/todo`
- **Method:** `GET`
- **Description:** Retrieve all todos for the authenticated user.
- **Authentication:** Required

### Get Todo by ID

- **Endpoint:** `/todo/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific todo by its ID.
- **Authentication:** Required

### Create Todo

- **Endpoint:** `/todo`
- **Method:** `POST`
- **Description:** Create a new todo.
- **Authentication:** Required

### Update Todo

- **Endpoint:** `/todo/:id`
- **Method:** `PUT`
- **Description:** Update a specific todo by its ID.
- **Authentication:** Required

### Delete Todo

- **Endpoint:** `/todo/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific todo by its ID.
- **Authentication:** Required

### User Logout

- **Endpoint:** `/logout`
- **Method:** `GET`
- **Description:** Logout the authenticated user and invalidate the JWT token.
- **Authentication:** Required

## Installation

* Clone repositori.
* Instal dependensi: `npm install` dan sequelize-cli secara global : `npm install -g sequelize-cli`
* Membuat database denagn perintah : `sequelize-cli db:create
* Migrasi table denagn perintah : `sequelize-cli db:migrate`
* Jalankan aplikasi: `npm start`

## Usage

* Dapatkan token JWT dengan mengautentikasi menggunakan endpoint `/login`.
* Sertakan token yang diperoleh di header Otorisasi untuk endpoint yang dilindungi.
* Gunakan endpoint yang disediakan untuk mengelola daftar tugas Anda pada `/todo` dan `/user`.
