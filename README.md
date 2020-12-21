# Workout-Tracker

![picture](public/assets/images/workoutTracker.png)

[App Live on Heroku](https://)

---

### Table of Contents

- [Description](#description)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

The goal of this project is to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Following the MVC design pattern, using Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

#### Technologies

- JavaScript
- NPM Modules
- Visual Studio Code
- Node.js
- Package.json
- MySQL
- Express
- Handlebars

##### Code sample - JavaScript - Connection to a Databse 
#

```js
var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "********",
  database: "burgers_db"
});


// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("Connected as id " + connection.threadId + "\n");
});

module.exports = connection;

```
##### Code sample - package.json
#
```json
 {
  "name": "burger",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/CesarAugustoMartinez/Burger.git"
  },
  "author": "Cesar A Martinez",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/CesarAugustoMartinez/Burger/issues"
  },
  "homepage": "https://github.com/CesarAugustoMartinez/Burger#readme",
  "dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "mysql": "^2.18.1"
  }
}

```

##### Code sample - javaScript - Functions to interact with the Database using orm.js
#
```js
 var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

```
---
##### Code sample - Handelbars - burger-block.handlebars file
#
```handlebars
<li class="list-group-item d-flex justify-content-between align-items-center">
    {{burger_name}}
    {{#if devoured}}
    <button class="devourButton badge badge-primary badge-pill" id="devourButton" data-id="{{id}}" data-newdevour="{{devoured}}">Devour It!</button>
    {{else}}
    <span class="badge badge-primary badge-pill" data-id="{{id}}" data-newdevour="{{devoured}}">Devoured!</span>
    {{/if}} 
</li>
```
---
## How To Use

This application is running on a webpage. It has a principal page where it lets users input the name of burgers they would like to eat. Whenever a user submits a burger's name, the app will display the burger name on the left side of the page, waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. The app store all data in a database.

[Back To The Top](#Workout-Tracker)
 
## Screenshots

- Waiting Bugers List. 

![picture](public/assets/images/waitingList.png)

- Devoured Burger List. 

![picture](public/assets/images/devouredList.png)

- Form to enter the burger to be devoured and submit button.

![picture](public/assets/images/form.png)


[Back To The Top](#Workout-Tracker)

---

## References

- w3school -- [Node.js NPM](https://www.w3schools.com/nodejs/nodejs_npm.asp)
- NPM -- [Node Package Managment](https://www.npmjs.com/)
- Inquirer -- [Inquirer module](https://www.npmjs.com/package/inquirer)
- Node.js -- [About Node.js](https://nodejs.org/en/)
- json -- [The package.json guide](https://nodejs.dev/learn/the-package-json-guide)
- Mysql -- [Mysql module](https://www.npmjs.com/package/mysql)
- Handlebars -- [Handlebars.js module](https://www.npmjs.com/package/handlebars)
- Express -- [express module](https://www.npmjs.com/package/express)


[Back To The Top](#Workout-Tracker)

---

## License

Copyright (c) [2020] [Cesar A Martinez]

[Back To The Top](#Workout-Tracker)

---

## Author Info

- Twitter -- [@cesaguma](https://twitter.com/cesaguma)
- Linkedin -- [Cesar A Martinez](https://www.linkedin.com/in/cesar-augusto-martinez-auquilla-03934a16b/)
- GitHub -- [CesarAugustoMartinez](https://github.com/CesarAugustoMartinez)

[Back To The Top](#Workout-Tracker)
