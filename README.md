# node-myfirstrestfulserver
Dit is een kleine Nodejs voorbeeldserver. De server draait op [Heroku](http://node-myfirstrestfulserver.herokuapp.com/).

## Gebruik
Clone deze repo naar een directory op je eigen laptop. Je kunt de server lokaal starten:

Vanaf de command line:
```
npm install
npm start
```

## API
De server biedt een aantal *API endpoints*
- [/api/hello](http://node-myfirstrestfulserver.herokuapp.com/api/hello)
- [/api/jsonresult](http://node-myfirstrestfulserver.herokuapp.com/api/jsonresult)
- [/api/output?first_name=jouw%20voornaam&last_name=jouw%20achternaam](http://node-myfirstrestfulserver.herokuapp.com/api/output?first_name=jouw%20voornaam&last_name=jouw%20achternaam)

## POST
Je kunt het `/api/hello` endpoint ook als POST request benaderen. Gebruik daarvoor bijvoorbeeld [Postman](https://www.getpostman.com).