# Docker Using for Web Development Demo

This project is prepared for a classroom demo in 7 steps:

1. Basic Node.js + Express app
2. Build image with Dockerfile
3. Run with `docker run -p 3000:3000`
4. Open `http://localhost:3000`
5. Live reload with bind mount + nodemon
6. Run app + PostgreSQL with docker-compose (DB host is `db`)
7. Clean up with `docker compose down`

## Project Structure

- `src/index.js`: Express app and PostgreSQL connection endpoints
- `Dockerfile`: Image definition
- `docker-compose.yml`: `app` + `db` services
- `nodemon.json`: Live reload settings

## Step-by-step Commands

### 1) Run app locally (optional quick check)

```bash
npm install
npm run start
```

### 2) Build Docker image

```bash
docker build -t web-demo:1.0 .
```

### 3) Run container with docker run

```bash
docker run --name web-demo-basic -p 3000:3000 web-demo:1.0
```

Stop and remove:

```bash
docker stop web-demo-basic
docker rm web-demo-basic
```

### 4) Browser check

Open:

- `http://localhost:3000`
- `http://localhost:3000/info`

### 5) Live reload with bind mount + nodemon

```bash
docker run --name web-demo-dev -p 3000:3000 -e DB_ENABLED=false -v ${PWD}/src:/app/src web-demo:1.0 npm run dev
```

Edit `src/index.js` message on `/` route and refresh browser.

Stop and remove:

```bash
docker stop web-demo-dev
docker rm web-demo-dev
```

### 6) Compose: app + PostgreSQL

```bash
docker compose up --build
```

Check in browser:

- `http://localhost:3000/info`
- `http://localhost:3000/db-time`

Important: app connects to PostgreSQL with host `db` (service name), not `localhost`.

### 7) Big cleanup

```bash
docker compose down
```

If you also want to remove DB data volumes (if you add volumes later):

```bash
docker compose down -v
```
