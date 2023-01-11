const para =  document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';
// para.innerText += 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// print each p to the console using a foreach
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// change inner html of the div content
const content = document.querySelector('.content');

// console.log(content.innerHTML);

//replace html inside
content.innerHTML = '<h2>THIS IS A NEW H2</h2>';

// append the content
content.innerHTML += '<h2>THIS IS A NEW H2</h2>';


// Cycle through data and output
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

