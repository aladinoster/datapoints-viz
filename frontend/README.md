# Frontend

This directory contains the frontend code for the datapoints visualization application, built with React and Vite.

## Setup and Installation

1.  **Install Dependencies:**
    Navigate to the `frontend` directory and install the necessary packages using `bun`.

    ```bash
    bun install
    ```

2.  **Environment Variables:**
    You will need a Mapbox access token to display the map. Create a file named `.env` in the `frontend` directory.

    ```bash
    touch .env
    ```

    Add your Mapbox access token to the `.env` file like this:

    ```
    VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
    ```
    > **Note:** The `VITE_` prefix is important. Vite only exposes environment variables prefixed with `VITE_` to the client-side code.

## Running the Development Server

To start the frontend development server, run the following command:

```bash
bun dev
```

The application will be available at `http://localhost:5173`.

### Understanding the `bun dev` command

-   `bun dev` is a shorthand for `bun run dev`.
-   `bun run dev` executes the `dev` script defined in the `package.json` file.
-   In this project, the `dev` script runs `vite`, which is the development server.

You might notice that the `dev` script is defined as `"dev": "vite"`. Running `bun dev` is the recommended way to start the development server because `bun` ensures that the correct environment variables from your `.env` file are loaded.
