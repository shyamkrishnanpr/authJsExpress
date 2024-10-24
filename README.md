# auth.Js express API with React.js


This project consists of two main components:

  Backend: An authentication and protected API service built with Express, MongoDB, and OAuth providers using Auth.js/Express.
  Frontend: A React application using Vite as the build tool for a fast development experience.

  Both components are designed to work together, with OAuth authentication on the backend and a client-side user interface for interacting with protected routes.

Technologies Used
   Backend
   - Express: A web framework for Node.js.
   - Auth.js/Express: Simplifies OAuth authentication.
   - MongoDB: NoSQL database for storing user information.
   - Mongoose: ODM library for MongoDB.
   - CORS: Middleware for enabling cross-origin requests.
   - Bun: Fast JavaScript runtime and package manager.

   Frontend
   - React: Frontend JavaScript library for building user interfaces.
   - Vite: Build tool for fast development with React.


Installation

  1. Clone the repository:

  ```bash
  git clone https://github.com/shyamkrishnanpr/authJsExpress.git
  ```
  2. Navigate to project directory:

  ```bash
  cd authJsExpress
  ```
  3. Install dependencies for the backend using Bun:

   ```bash
   bun install
   ```
  4. Navigate to the frontend directory:

  ```bash
  cd client
  ```
  5. Install the frontend dependencies using npm:

  ```bash
  npm install
  ```

Environment Variables
  
  Rename the sample.env to env and the variables




To run backend:

```bash
bun run index.ts || bun start
```

To run frontend:

```bash
npm run dev
```


