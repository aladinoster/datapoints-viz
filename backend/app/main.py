import random
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

@app.get('/api/random-arc-in-paris')
def get_random_arc_in_paris():
    # Bounding box for Paris
    min_lon, max_lon = 2.2241, 2.4699
    min_lat, max_lat = 48.8156, 48.9021
    
    points = []
    for _ in range(10):
        lon = random.uniform(min_lon, max_lon)
        lat = random.uniform(min_lat, max_lat)
        points.append({"lon": lon, "lat": lat})
    return points
