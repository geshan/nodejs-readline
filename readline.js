const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const ac = new AbortController();
const signal = ac.signal;

(async () => {
  const rl = readline.createInterface({ input, output });
  const timeoutInSeconds = 5;
  setTimeout(() => ac.abort(), timeoutInSeconds * 1000);
  try {
    const answer = await rl.question('What is 4x4 equals? ', { signal });

    const correctOrNot = answer === '16' ? 'correct!' : 'incorrect. Try again.';
    console.log(`${answer} is ${correctOrNot}`);
  } catch(err) {
    let message = 'Error: ';
    if(err.code === 'ABORT_ERR') {
      message = `You took too long. Try again within ${timeoutInSeconds} seconds.`;
    }
    
    console.log(message, err.code !== 'ABORT_ERR' ? err : '');
  } finally {
    rl.close();
  }
  process.exit(1);
})();
