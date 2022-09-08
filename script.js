'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!!';

// document.querySelector('.number ').textContent = 20;

// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 100;

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //............... When there is no number ...........
  if (!guess) {
    displayMessage('No Numbers!');

    //.............. When guess is correct ...........
  } else if (guess === SecretNumber) {
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // ............. When guess is Wrong ......................
  else if (guess !== SecretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess > SecretNumber ? 'Your Number is High!' : 'Your Number is Low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Ouchiee! You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// ............When guess is higher ........................
//   } else if (guess > SecretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Higher than Secret Number!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Ouchiee! You Lost!';
//       document.querySelector('.score').textContent = 0;
//     }
//
//     // .........When guess is lower............
//   } else if (guess < SecretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent =
//       'Lower than Secret Number!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Ouchiee! You Lost!';
//     document.querySelector('.score').textContent = 0;
//   }
//
