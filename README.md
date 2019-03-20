# mevnexample

## Project setup

MongoDB : https://www.mongodb.com/download-center/community

### Start MongoDB 
```
sudo service mongod start
```
### Add users to MongoDB
```
sudo service mongod start
mongo

> use mevnexample
> db.users.insert({"name":"Bastien","email":"bastien@project.com","password":"bastien123","score":1000.0,"net_salary":1150.0})
> db.users.insert({"name":"Sean","email":"sean@project.com","password":"sean123","score":100.0,"net_salary":5000.0})
> db.users.insert({"name":"Jérôme Celebi","email":"jerome.celebi@ynov.com","password":"1234","score":10.0,"net_salary":100000.0})
```


### Compiles and hot-reloads for development // on Projet NoSQL/mevn.normalized/mevnexample 
```
npm install
npm run serve
```
### Launch the API server // on Projet NoSQL/mevn.normalized/api 
```
nmp install
nodemon server
```




## Compiles and minifies for production
```
npm run build
```

## Run your tests
```
npm run test
```

## Lints and fixes files
```
npm run lint

# EDIT 

1- There's a bug creating post without user
2- It looks like external database (ex:MLab) don't use the same structure, will be fixed soon.
```
<!-- 
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
 -->
