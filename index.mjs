import * as fs from "fs/promises";
import * as readline from "readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = JSON.parse(await fs.readFile("data.json"));
let question = data;
while (true) {
  if (question.answer) {
    console.log(question.answer);
    process.exit();
    break;
  }
  const res = await rl.question(question.question);
  if (res == "y") {
    question = question.yes;
  } else if (res === "n") {
    question = question.no;
  } else {
    console.log("Invalid input. Please enter 'y' or 'n'.");
  }
}
