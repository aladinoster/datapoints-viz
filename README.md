# Datapoints Visualization

This is a sample project to visualize datapoints on a map using Deck.gl for the frontend and FastAPI for the backend.

## Project Structure

-   `frontend/`: Contains the React frontend application. See `frontend/README.md` for more details.
-   `backend/`: Contains the Python backend API. See `backend/README.md` for more details.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

-   **Node.js:** v20.19+ or v22.12+
-   **Bun:** A fast JavaScript all-in-one toolkit. [Installation guide](https://bun.sh/docs/installation).
-   **Python:** 3.10+
-   **uv:** A fast Python package installer. [Installation guide](https://github.com/astral-sh/uv).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aladinoster/datapoints-viz.git
    cd datapoints-viz
    ```

2.  **Install backend dependencies:**
    Navigate to the `backend` directory and use `uv` to install the packages.
    ```bash
    cd backend
    uv sync
    cd ..
    ```

3.  **Install frontend dependencies:**
    Navigate to the `frontend` directory and use `bun` to install the packages.
    ```bash
    cd frontend
    bun install
    cd ..
    ```

### Running the Application

You will need two terminals to run both the backend and frontend servers.

1.  **Run the backend server:**
    In your first terminal, navigate to the `backend` directory and run the following command:
    ```bash
    cd backend
    uv run uvicorn app.main:app --reload --port 8000
    ```
    The backend API will be running at `http://localhost:8000`.

2.  **Run the frontend server:**
    Before starting the frontend, you need to set up your Mapbox access token. See the `frontend/README.md` for detailed instructions.

    In your second terminal, navigate to the `frontend` directory and run the following command:
    ```bash
    cd frontend
    bun dev
    ```
    The frontend application will be available at `http://localhost:5173`.
