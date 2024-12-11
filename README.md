# Student Management Backend

This is a **Node.js** backend application that connects to a **PostgreSQL** database. The project includes an API documented with **Swagger**.

## Requirements

- **Node.js** 
- **PostgreSQL**

## Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rahul-Purohit1/student-mgmt-backend.git
   cd <project-directory>
   
2. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration
create a .env file in the root directory with the following content:
```bash
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=studentdb
DB_USER=your-db-username
DB_PASSWORD=your-db-password
```


## Running the Project
To start the server, run:
```bash
npm run start
```

## API Documentation
Once the server is running, you can access the Swagger documentation for the API at the following URL:
```bash
http://localhost:3001/api-docs
```

## Database Setup
The project uses Sequelize ORM to connect to the PostgreSQL database. Upon starting the server, the database will be synced automatically.
The connection settings are defined in the .env file.



