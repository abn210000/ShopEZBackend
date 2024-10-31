# Node.js Server Setup

This project is a Node.js server application that uses Express.js, MSSQL, and JWT for authentication. Follow the steps below to set up and run the server.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MSSQL Server
- Environment variables set up in a `.env` file

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   Run the following command to install all necessary packages:

   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root directory of your project and add the following environment variables:

   ```plaintext
   PORT=8080
   DB_SERVER=<your-database-server>
   DB_NAME=<your-database-name>
   DB_USER=<your-database-username>
   DB_PASSWORD=<your-database-password>
   JWT_SECRET=<your-jwt-secret>
   ```

   Replace the placeholders with your actual database credentials and JWT secret.

## Running the Server

1. **Start the server:**

   Use the following command to start the server:

   ```bash
   node server.js
   ```

   The server will start on the port specified in your `.env` file (default is 8080).

2. **Access the server:**

   Once the server is running, you can access it at `http://localhost:<PORT>`.

## API Endpoints

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login with an existing user.

## Additional Information

- Ensure your MSSQL server is running and accessible with the credentials provided in the `.env` file.
- The server uses JWT for authentication, so ensure your `JWT_SECRET` is secure and not shared publicly.

## Troubleshooting

- If you encounter any issues, check the console logs for error messages.
- Ensure all environment variables are correctly set and the database server is accessible.