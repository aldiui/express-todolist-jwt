# Todo List API

Api ini menggunakan teknologi express js dan sequelize sebagai ORM serta authentifikasi dengan menggunakan JWT

## Content

- [Introduction](#introduction)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Installation](#installation)
- [Usage](#usage)

## Intrduction

API ini memungkinkan pengguna untuk mengelola daftar tugas mereka. Pengguna perlu mengautentikasi menggunakan JWT sebelum mengakses titik akhir terkait tugas.

## Authentication

Untuk mengakses titik akhir yang dilindungi, Anda perlu menyertakan token JWT yang valid di header Otorisasi dengan awalan "Pembawa".To access protected endpoints, you need to include a valid JWT token in the Authorization header with the "Bearer" prefix pada beberapa endpoint yaitu todo dan user.

## Endpoints

### Register

- **Endpoint:** `/register`
- **Method:** `POST`
- **Deskripisi:** Register user denga memasukan data name, email, password dan konfirmasi_password.
- **Authentication:** Tidak ada

### Login

- **Endpoint:** `/login`
- **Method:** `POST`
- **Deskripisi:** Login user denga memasukan data name, dan password.
- **Authentication:** Tidak ada

### Logout

- **Endpoint:** `/logout`
- **Method:** `GET`
- **Deskripisi:** Logout user yang diautentikasi dan membatalkan token JWT
- **Authentication:** Wajib ada token

### Get User by Token

- **Endpoint:** `/user`
- **Method:** `GET`
- **Deskripisi:** Mengambil data user berdasarkan token JWT
- **Authentication:** Wajib ada token

### Get All Todo

- **Endpoint:** `/todo`
- **Method:** `GET`
- **Deskripsi:**:Mengambil data todo berdasarkan user dari token JWT
- **Authentication:** Wajib ada token

### Get Todo by ID

- **Endpoint:** `/todo/:id`
- **Method:** `GET`
- **Deskripsi:** Mengambil data todo user berdasarkan id pada todo.
- **Authentication:** Wajib ada token

### Create Todo

- **Endpoint:** `/todo`
- **Method:** `POST`
- **Deskripsi:** Menambahkan todo  dengan  memasukan data title dan is_completed.
- **Authentication:** Wajib ada token

### Update Todo

- **Endpoint:** `/todo/:id`
- **Method:** `PUT`
- **Deskripsi:** Mengubah todo berdarkan id dengan  memasukan data title dan is_completed..
- **Authentication:** Wajib ada token

### Delete Todo

- **Endpoint:** `/todo/:id`
- **Method:** `DELETE`
- **Deskripsi:** Menghapus todo berdasarkan id.
- **Authentication:** Wajib ada token

## Delete All Todo

- **Endpoint:** `/todo`
- **Method:** `DELETE`
- **Deskripsi:** Menghapus semua todo.
- **Authentication:** Wajib ada token

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
