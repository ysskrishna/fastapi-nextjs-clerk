# Backend

This is the FastAPI backend for the project. It provides API endpoints and verifies Clerk JWTs for authentication.

## Framework

- FastAPI

## Entry Point

- `main.py`

## Dependencies

Install dependencies with:

```sh
pip install -r requirements.txt
```

## API Endpoints

- `GET /api/dashboard/public` — Public endpoint, no authentication required
- `GET /api/dashboard/private` — Requires Clerk JWT in Authorization header
- `GET /api/dashboard/greet` — Requires Clerk JWT, returns personalized greeting

## Clerk JWT Verification

The backend uses Clerk's JWKS and issuer for JWT validation. You must set the following environment variables (e.g., in a `.env` file):

- `CLERK_JWKS_URL`
- `CLERK_ISSUER`

## Running the Backend

You can run the backend with:

```sh
python main.py
```

Or use Docker Compose from the project root.