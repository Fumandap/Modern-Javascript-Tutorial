// const content = document.querySelector('p');

// console.log(content.classList);

// // add and remove classes from tags in an HTML page.
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// go through each p tag and add the class success or error if the word is contained.
paras.forEach(p => {
    // get all of the text inside the tag, regardless if it's hidden or not.
    // console.log(p.textContent);
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }

    if(p.textContent.includes('success')){
        p.classList.add('success');
    } 
});

// add or remove by toggling classes.
const title = document.querySelector('.title');

// add class test
title.classList.toggle('test');

// remove class test
title.classList.toggle('test');