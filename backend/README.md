# Backend

This directory contains the backend code for the datapoints visualization application, built with Python and FastAPI.

## Setup and Installation

This project uses `uv` for package management. Make sure you have `uv` installed.

1.  **Install Dependencies:**
    Navigate to the `backend` directory and install the necessary packages using `uv`.

    ```shell
    uv sync
    ```

## Running the Development Server

To start the backend development server, run the following command:

```shell
uv run uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`. You can access the OpenAPI documentation at `http://localhost:8000/docs`.
