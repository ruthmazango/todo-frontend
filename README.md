# CRUD Todo Angular App

This is a simple CRUD (Create, Read, Update, Delete) Todo application built using Angular on the frontend and a Spring-based RESTful API on the backend to manage the Todo items (Located here -> https://github.com/ruthmazango/todoApi). The frontend consumes the backend API to perform operations on the Todo items.

## Features

- View a list of existing Todo items.
- Add new Todo items.
- Edit existing Todo items.
- Delete Todo items.

## Technologies Used

- Angular (Frontend)
- Spring Boot (Backend)
- Spring Data JPA
- MySQL (Database, optional)
- Bootstrap (Styling)

## Prerequisites

Before running the application, make sure you have the following tools installed:

- Node.js (https://nodejs.org/)
- Angular CLI (https://cli.angular.io/)
- Java 8 JDK (https://www.oracle.com/java/technologies/javase-downloads.html)
- Maven (https://maven.apache.org/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ruthmazango/todoApi
   cd todoApi
   ```

2. **Frontend Setup:**

   ```bash
   git clone https://github.com/ruthmazango/todo-frontend
   cd todo-frontend
   npm install
   ng serve
   ```

   The Angular app should now be running at `http://localhost:4200`.


## Configuration

- To configure the backend's database connection, modify the `application.properties` file in the `src/main/resources` directory.

## API Endpoints Implemented

- **GET /api/todos**: Get a list of all Todo items.
- **GET /api/todos/{id}**: Get details of a specific Todo item.
- **POST /api/todos**: Create a new Todo item.
- **PUT /api/todos/{id}**: Update details of a specific Todo item.
- **DELETE /api/todos/{id}**: Delete a specific Todo item.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Still to come
- **Pagination of list todos**: Right now one has to scroll through the list of all Tasks
- **Reload page after delete**: Right now one has to reload the page after completing a delete action
- **Using HTTP Patch Update instead of HTTP Put update**: It can only perform HTTP Put, which means all fields have to be updated otherwise it will return the unedited fields as NULL
