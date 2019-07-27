# mevnexample

[FR] : Projet NoSQL utilisant les technologies MongoDB, Express.js, Vue.js et Node.js : "MEVN"

Projet ticketing avec la caractéristique suivante : Les utilisateurs gagnent des points en fonctions du nombre de tickets qu'ils ont effectués. 
Leur salaire grandit en fonction de leur nombre de points (donc de leur nombre de tickets validés).

## Project setup

Default : Database is hosted on mlab, you can modify the connection in the file /api/DB.js


## Download the folder : 
Go to the path you want to download the project and run : 
```
git clone https://github.com/WDcontrol/Projet-no-sql.git
cd  Projet-no-sql

# Running api backend :
cd api 
npm install && npm run serve

# Running client frontend : 
cd mevnexample
npm install && npm run serve
```

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

<!-- 
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
 -->



--------------------------

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

# Create a directory named data on your root hard drive, and another named db in data :
example : C:\data\db
# Open a cmd prompt in your mongodb bin directory (where mongod.exe is, path look like  'C:\Program Files\MongoDB\Server\4.0\bin") 
# enter thoses commands :
mongod.exe --dbpath C:\data\db

# Open another cmd prompt and go to your mongodb bin directory : "C:\Program Files\MongoDB\Server\4.0\bin"
#run :
mongo.exe
```
