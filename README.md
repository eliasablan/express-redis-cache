# Redis Cache API with Express

Lightweight API caching layer for Rick and Morty API using Redis and Bun.

## 📦 Core Stack
- **Bun 1.1.x** - JavaScript runtime
- **Express 4.x** - Web framework
- **Redis 4.x** - In-memory database

## 🗄️ Redis Configuration
```bash
docker-compose up -d  # Starts Redis container
```

Connection setup (`index.js`):
```javascript:index.js
// ... existing code ...
const client = createClient({
  host: "localhost",
  port: 6379,
});
// ... existing code ...
```

## 🚀 Quick Start
```bash
bun install    # Install dependencies
bun index.js   # Start development server
```

Test cached endpoint:
```bash
curl http://localhost:3000/characters
```

## ⚡ Key Features
- Cache-Aside pattern implementation
- 1-hour automatic cache expiration
- Dockerized Redis environment
- Single endpoint architecture

## 🔄 Data Flow
1. First request → External API → Store in Redis → JSON response  
2. Subsequent requests → Redis cache → Immediate response  
3. Cache expiration → Repeat cycle 