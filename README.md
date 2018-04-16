# backend
Backend


To build:
```
$ docker build -t db/api .
```

To run:
```
$ docker run -p 3145:3145 --rm -it --name db-backend --link some-mysql:mysql db/api
```