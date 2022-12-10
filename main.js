var check = function() {
    if (document.getElementById('password').value ==
    document.getElementById('confirm-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'passwords match';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = "passwords don't match";
    }
  }

letters = document.getElementById('8letters');
capital = document.getElementById('capital');
number = document.getElementById('number');
special = document.getElementById('special');

var requirements = function() {
    password = document.getElementById('password').value;

    password.length < 4
    ? (letters.textContent = '- at least 4 characters', letters.style.color = 'red')
    : (letters.textContent = '- at least 4 characters ✓', letters.style.color = 'green');

    password.search(/[A-Z]/) < 0 
    ? (capital.textContent = '- password needs a capital letter', capital.style.color = 'red')
    : (capital.textContent = '- password has a capital letter ✓', capital.style.color = 'green');

    password.search(/[0-9]/) < 0 
    ? (number.textContent = '- password needs a number', number.style.color = 'red')
    : (number.textContent = '- password has a number ✓', number.style.color = 'green');

    }



  // Make another function for password requirments