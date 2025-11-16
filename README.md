# Visualizing DataPoints via Deck.gl

Sample project to visualize datapoints via FastAPI and Deck.gl

## Install dependencies

**Requirements**: Node (22.12+), Python(3.13+)

To run this project install [bun](https://bun.sh)

```shell
npm install -g bun
```

To run the backend install `uv`

```shell
python -m pip install uv 
```

## Install the project

Frontend

```shell
bun install
```

Backend

```shell
uv sync
```

## Run the project

Run the backend

```shell
uv run uvicorn app.main:app --reload --port 8000
```

Run the front end

```shell
bun run dev 
```
