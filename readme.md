# Todo List API

This is a simple Todo List API with JWT authentication.

## Table of Contents

-   [Introduction](#introduction)
-   [Authentication](#authentication)
-   [Endpoints](#endpoints)
    -   [Get All Todos](#get-all-todos)
    -   [Get Todo by ID](#get-todo-by-id)
    -   [Create Todo](#create-todo)
    -   [Update Todo](#update-todo)
    -   [Delete Todo](#delete-todo)
    -   [User Logout](#user-logout)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

This API allows users to manage their todo list. Users need to authenticate using JWT before accessing the todo-related endpoints.

## Authentication

To access protected endpoints, you need to include a valid JWT token in the Authorization header with the "Bearer" prefix.

## Endpoints

### Get All Todos

-   **Endpoint:** `/todos`
-   **Method:** `GET`
-   **Description:** Retrieve all todos for the authenticated user.
-   **Authentication:** Required

### Get Todo by ID

-   **Endpoint:** `/todos/:id`
-   **Method:** `GET`
-   **Description:** Retrieve a specific todo by its ID.
-   **Authentication:** Required

### Create Todo

-   **Endpoint:** `/todos`
-   **Method:** `POST`
-   **Description:** Create a new todo.
-   **Authentication:** Required

### Update Todo

-   **Endpoint:** `/todos/:id`
-   **Method:** `PUT`
-   **Description:** Update a specific todo by its ID.
-   **Authentication:** Required

### Delete Todo

-   **Endpoint:** `/todos/:id`
-   **Method:** `DELETE`
-   **Description:** Delete a specific todo by its ID.
-   **Authentication:** Required

### User Logout

-   **Endpoint:** `/logout`
-   **Method:** `GET`
-   **Description:** Logout the authenticated user and invalidate the JWT token.
-   **Authentication:** Required

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up environment variables, including `DATABASE_URL`, `JWT_SECRET`, etc.
4. Run the application: `npm start`

## Usage

1. Obtain a JWT token by authenticating using the `/login` endpoint.
2. Include the obtained token in the Authorization header for protected endpoints.
3. Use the provided endpoints to manage your todo list.

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
