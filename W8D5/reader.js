const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Wrong way
/*
function teaAndBiscuits() {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);
  });

  reader.question('Would you like some biscuits?', (res) => {
    second = res;
    console.log(`You replied ${res}.`);
  });

  const firstRes = (first === 'yes') ? 'do' : 'don\'t';
  const secondRes = (second === 'yes') ? 'do' : 'don\'t';
  console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
  reader.close();
}
*/

// Correct way
function teaAndBiscuits () {
  reader.question("Would you like some tea?", (res1) => {
    // first = response;
    console.log(`You replied ${res1}`);
    reader.question("Would you like some biscuits?", (res2) => {
      console.log(`You replied ${res2}`);
      const teaRes = (res1 === 'yes') ? 'do' : 'don\'t';
      const bisRes = (res2 === 'yes') ? 'do' : 'don\'t';
      
      console.log(`So you ${teaRes} want tea and you ${bisRes} want biscuits`);
      reader.close();
    });
  });
}

teaAndBiscuits();