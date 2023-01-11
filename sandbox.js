const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

// add a new property with no overwriting.
title.style.margin = '50px';

// update color
title.style.color = 'crimson';

// font-size becomes fontSize, all become camelcased if hyphen included.
title.style.fontSize = '60px';

title.style.margin = '';