# Book App

A book management application built using Node.js and TypeScript.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Book App allows users to manage a collection of books, including adding new books, updating book information, deleting books, and retrieving details of existing books. This application is built with Node.js and TypeScript to ensure type safety and scalability.

## Features

- Add new books to the collection
- Update details of existing books
- Delete books from the collection
- Retrieve details of a specific book
- List all books in the collection

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Language**: TypeScript

## Installation

1. **Clone the repository**
    ```bash
    https://github.com/MadhurChaturvedi/Book-App-Node-MERN-TS-V1.git
 
    ```
    ```bash
       cd BOOK-MERN
    ```

2. **Install dependencies**
    ```bash
    npm install --force
    ```

3. **Set up environment variables**
    Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    ```

4. **Build the TypeScript code**
    ```bash
    npm run build
    ```

5. **Start the server**
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can use Postman or any other API client to interact with the API.

## API Endpoints

### Get all books
- **URL**: `/api/books`
- **Method**: `GET`
- **Description**: Retrieve a list of all books.

### Get a book by ID
- **URL**: `/api/books/:id`
- **Method**: `GET`
- **Description**: Retrieve details of a specific book by its ID.

### Add a new book
- **URL**: `/api/books`
- **Method**: `POST`
- **Description**: Add a new book to the collection.
- **Body**: 
    ```json
    {
        "title": "Book Title",
        "author": "Author Name",
        "publishedDate": "YYYY-MM-DD",
        "genre": "Genre",
        "summary": "Book Summary"
    }
    ```

### Update a book by ID
- **URL**: `/api/books/:id`
- **Method**: `PUT`
- **Description**: Update details of an existing book by its ID.
- **Body**: 
    ```json
    {
        "title": "Updated Book Title",
        "author": "Updated Author Name",
        "publishedDate": "YYYY-MM-DD",
        "genre": "Updated Genre",
        "summary": "Updated Book Summary"
    }
    ```

### Delete a book by ID
- **URL**: `/api/books/:id`
- **Method**: `DELETE`
- **Description**: Delete a specific book by its ID.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License.
