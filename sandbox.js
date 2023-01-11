const link = document.querySelector('a');

// change an attribute to something else
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

// get class attribute
console.log(mssg.getAttribute('class'));

// change class error to success
mssg.setAttribute('class', 'success');
// attribute doesn't need to exist, you can just create it.
mssg.setAttribute('style', 'color: green');