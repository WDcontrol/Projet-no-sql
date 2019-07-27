# mevnexample

## Project setup

MongoDB : https://www.mongodb.com/download-center/community

### Start MongoDB 
```
sudo service mongod start

# On Windows : Check if the mongodb is already running : 
sc query mongodb
```
### Add users to MongoDB
```
On linux : 
sudo service mongod start
mongo

On windows :

- Create a directory named data on your root hard drive, and another named db in data :
example : C:\data\db
- Open a cmd prompt in your mongodb bin directory (where mongod.exe is, path look like  'C:\Program Files\MongoDB\Server\4.0\bin") 
- enter thoses commands :
mongo.exe --dbpath C:\data\db

- Open another cmd prompt and go to your mongodb bin directory : "C:\Program Files\MongoDB\Server\4.0\bin"
run :
```
mongo.exe
```
It should open mongo terminal, run thoses commands : 

> use mevnexample
> db.users.insert({"name":"Bastien","email":"bastien@project.com","password":"bastien123","score":1000.0,"net_salary":1150.0})
> db.users.insert({"name":"Sean","email":"sean@project.com","password":"sean123","score":100.0,"net_salary":5000.0})
> db.users.insert({"name":"Jérôme Celebi","email":"jerome.celebi@ynov.com","password":"1234","score":10.0,"net_salary":100000.0})
```


## Download the folder : 
```
git clone https://github.com/WDcontrol/Projet-no-sql.git
cd  Projet-no-sql
start cmd

# first terminal :
cd api 
npm install && npm run serve

# second terminal : 
cd mevnexample
npm install && npm run serve


--------------------------

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
```
# EDIT 

1- There's a bug creating post without user
2- It looks like external database (ex:MLab) don't use the same structure, will be fixed soon.

<!-- 
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
 -->
