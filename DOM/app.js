// const ul = document.querySelector('ul');

// const secondListItem = ul.children[1];

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click',()=>{

    section.classList.toggle('invisible');

})