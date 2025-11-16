# Notes Ideas of implementation

Create and endpoint that will serve information

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class DataPoint(BaseModel):
    lat: float
    lon: float

@app.get("/data_points", response_model=list[DataPoint])
async def get_data_points():
    return [
        DataPoint(lat=37.7749, lon=-122.4194),  # Example point (San Francisco)
        DataPoint(lat=34.0522, lon=-118.2437),  # Example point (Los Angeles)
        # Add more points as needed
    ]
```

What if there are CORS errrors (Middleware errors).
CORS is a mechanism that allows a web page from one domain to make requests
to a server hosted on a different domain.
By default, web browsers block such cross-origin requests for security reasons,
but CORS headers can be configured on the server to allow certain domains
or requests.

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (or specify your frontend URL)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

