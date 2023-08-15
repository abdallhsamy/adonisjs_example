# Adonis Example



A dockerized adonis js application 

## tech stack
- [AdonisJS](https://adonisjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Docker](https://docs.docker.com/compose/)

## usage 

run using docker-compose
```bash
docker-compose up -d --build
```

### attach to adonis app
```bash
npm run docker-attach
```
or
```bash
docker-compose exec -it api /bin/sh
```

### attach to redis
```bash
npm run docker-attach-redis
```
or
```bash
docker-compose exec -it redis /bin/sh
```


### attach to postgres
```bash
npm run docker-attach-postgres
```
or
```bash
docker-compose exec -it postgres /bin/sh
```

### check migration status
```bash
docker-compose exec -it api node ace migration:status
```

### run migrations
```bash
docker-compose exec -it api node ace migration:run
```

### add new controller
```bash
docker-compose exec -it api node ace make:controller Article
```

