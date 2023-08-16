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

### create a new model
```bash
node ace make:model <ModelName> -m
```

## Examples
pagination example :
```json
{
  "meta": {
    "total": 58,
    "per_page": 3,
    "current_page": 2,
    "last_page": 20,
    "first_page": 1,
    "first_page_url": "/?page=1",
    "last_page_url": "/?page=20",
    "next_page_url": "/?page=3",
    "previous_page_url": "/?page=1"
  },
  "data": [
    {
      "id": 5,
      "title": "suscipit minus aspernatur saepe aspernatur iusto"
    },
    {
      "id": 6,
      "title": "recusandae quia accusantium consequatur magnam saepe"
    },
    {
      "id": 7,
      "title": "vitae exercitationem distinctio aliquid maxime natus"
    }
  ]
}
```
