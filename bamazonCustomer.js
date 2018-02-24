var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function showGoods() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to buy?",
      choices: [
        "Find items by id",
        "Shop by department"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Find items by ID":
          idSearch();
          break;

        case "Shop by department":
          multiSearch();
          break;
      }
    });
}
