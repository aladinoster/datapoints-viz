from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow the frontend dev server to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Point(BaseModel):
    lon: float
    lat: float

@app.get('/')
def read_root():
    return {"message": "Hello from FastAPI"}

@app.get('/points')
def get_points():
    # example points around downtown Paris
    return [
        {"lon": 2.3522, "lat": 48.8566},
        {"lon": 2.3499, "lat": 48.8530},
        {"lon": 2.3333, "lat": 48.8600}
    ]
