#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Pin Number",
  },
]);

if (pinAns.pin === myPin) {
  console.log("Valid pin");

  let optAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select one option",
      choices: ["Fast Cash", "Withdraw", "Check Balance"],
    },
  ]);

  // Fast Cash Option

  if (optAns.operation === "Fast Cash") {
    let fcAns = await inquirer.prompt([
      {
        name: "fastcash",
        type: "list",
        message: "Select your Amount",
        choices: ["5000", "10000", "15000", "20000", "25000"],
      },
    ]);

    if (fcAns.fastcash <= myBalance) {
      let remBalance = (myBalance -= fcAns.fastcash);
      console.log(`your remaining Balance is ${remBalance}`);
    } else if (fcAns.fastcash >= myBalance) {
      console.log("Insufficient Balance");
    }
  }

  // WithDraw Option

  if (optAns.operation === "Withdraw") {
    let wdAns = await inquirer.prompt([
      {
        name: "withdraw",
        type: "number",
        message: "Enter your Amount",
      },
    ]);

    if (wdAns.withdraw <= myBalance) {
      let remBal = (myBalance -= wdAns.withdraw);
      console.log(`your remaining Balance is ${remBal}`);
    } else if (wdAns.withdraw >= myBalance) {
      console.log("Insufficient Balance");
    }
  }

  // Check Balance Option

  if (optAns.operation === "Check Balance") {
    console.log(`Your Balance is ${myBalance}`);
  }
} else {
  console.log("Invalid pin");
}
