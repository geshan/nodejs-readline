import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
try {
  const answer = await rl.question('What is 4x4 equals? ');

  const correctOrNot = answer.trim() === '16' ? 'correct!' : 'incorrect. Try again.';
  console.log(`${answer.trim()} is ${correctOrNot}`);
} catch(err) {
  console.log(`Error: `, err);
} finally {
  rl.close();
}
process.exit(1);
