# fastapi-nextjs-clerk

This project demonstrates integration between a FastAPI backend and a Next.js frontend, using Clerk for authentication. The frontend authenticates users with Clerk and sends Clerk-issued JWTs to the backend for protected API access.

## Screenshots

### SignUp Page
<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div>
    <h4>Light Theme</h4>
    <img src="/media/signup.png" alt="SignUp Page Light Theme" width="400"/>
  </div>
  <div>
    <h4>Dark Theme</h4>
    <img src="/media/signup-dark.png" alt="SignUp Page Dark Theme" width="400"/>
  </div>
</div>

### SignIn Page
<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div>
    <h4>Light Theme</h4>
    <img src="/media/signin.png" alt="SignIn Page Light Theme" width="400"/>
  </div>
  <div>
    <h4>Dark Theme</h4>
    <img src="/media/signin-dark.png" alt="SignIn Page Dark Theme" width="400"/>
  </div>
</div>

### Dashboard Page
<div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
  <div>
    <h4>Light Theme</h4>
    <img src="/media/dashboard.png" alt="Dashboard Page Light Theme" width="400"/>
  </div>
  <div>
    <h4>Dark Theme</h4>
    <img src="/media/dashboard-dark.png" alt="Dashboard Page Dark Theme" width="400"/>
  </div>
</div>


## Features

- User authentication with Clerk (sign in, sign up, JWT issuance)
- Protected and public API endpoints in FastAPI
- JWT verification and personalized responses from backend
- Next.js dashboard demonstrating:
  - Fetching Clerk JWT
  - Calling public and protected backend endpoints
  - Displaying personalized content from backend
  - Error handling for unauthorized access
- Responsive UI with Tailwind CSS
- Docker Compose for easy orchestration
- Light/Dark theme support with system preference detection
- Automatic route protection and redirections

## Technology Stack
- Next.js (React, TypeScript)
- Clerk (authentication)
- Tailwind CSS (styling)
- React Icons
- FastAPI
- PyJWT (JWT validation)
- Uvicorn (ASGI server)
- Python-dotenv (env management)
- Docker & Docker Compose

## Project Structure

```
.
├── backend/                # FastAPI backend with Clerk JWT authentication
│   ├── core/               # Core modules (Clerk integration, config)
│   ├── routers/            # API route definitions (dashboard, etc.)
│   ├── main.py             # FastAPI app entrypoint
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .gitignore
│   └── README.md
│
├── client/                 # Next.js frontend with Clerk integration
│   ├── src/
│   │   ├── app/            # App directory (Next.js routing)
│   │   ├── components/     # Reusable React components
│   │   ├── common/         # Shared utilities (API helpers)
│   │   ├── hooks/          # Custom React hooks
│   │   └── middleware.ts
│   ├── public/             # Static assets (SVGs, images)
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .gitignore
│   ├── eslint.config.mjs
│   └── postcss.config.mjs
│
├── docker-compose.yml      # Orchestration for backend and frontend
├── README.md
└── LICENSE
```

- `backend/` contains the FastAPI backend, organized into core modules and routers.
- `client/` contains the Next.js frontend, with a modular structure for components, hooks, and pages.
- `docker-compose.yml` orchestrates both services for local development.
- Other files include project-level documentation and configuration.


## Prerequisites
- Docker
- Docker compose
- Clerk account and project

## Backend `.env` setup
1. Create a `backend/.env` file in the project root using `backend/.env.sample` as reference.
2. Get your project credentials:
   - CLERK_JWKS_URL: Found in `Clerk Dashboard > API Keys > JWKS URL`
   - CLERK_ISSUER: Found in `Clerk Dashboard > API Keys > Frontend API URL`
3. Update these credentials to your `backend/.env` file   


## Client `.env` setup
1. Create a `client/.env` file in the project root using `client/.env.sample` as reference.
2. Get your project credentials: 
  - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: Found in `Clerk Dashboard > API Keys > Publishable Key`
  - CLERK_SECRET_KEY: Found in `Clerk Dashboard > API Keys > Secret Key`

3. Update these credentials to your `client/.env` file   

## Running the Project

This project uses Docker Compose to orchestrate both the backend and frontend.

```sh
docker-compose up --build
```

- The frontend will be available at [http://localhost:3000](http://localhost:3000)
- The backend will be available at [http://localhost:8081](http://localhost:8081)

## More Information

- For backend details, see [`backend/README.md`](backend/README.md)
- For frontend details, see [`client/README.md`](client/README.md)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 