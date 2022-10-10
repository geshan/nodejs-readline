import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk';

const rl = readline.createInterface({ input, output });
try {
  const answer = await rl.question('What is 4x4 equals? ');

  const correct = chalk.green.bgGray.underline.bold;
  const incorrect = chalk.red.bgWhite.bold;
  const isCorrect = answer.trim() === '16';
  const output = isCorrect ? correct(`${answer.trim()} is correct!`) : incorrect(`${answer.trim()} is incorrect. Try again.`);
  
  console.log(output);
} catch(err) {
  console.log(`Error: `, err);
} finally {
  rl.close();
}
process.exit(1);
