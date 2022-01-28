# KEY VALUE store

A basic hello world application for `express.js` server and mongodb as database

## Running

-   Install dependencies

```
npm install
```

-   (Optional) Run mongo db server as a docker (needs docker installation)

```
docker run -p 27017:27017 --name mongo-database -d mongo
```

-   Copy env.example to .env and change the mongo URI to mongo db uri.

-   Run server

```
npm start
```

## Routes

-   `/api/get/:key`: get value corresponding to `key` if it exists else returns 401 error
-   `/api/save`: Pass `{key: key, value: value}` as body to this route, if key exists it will result in error
