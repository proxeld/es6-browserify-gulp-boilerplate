import bo, * as operations from './modules/code.es6';

let root = document.getElementById('root');
let ulElem = document.createElement('ul');

for(let str of operations.pretty) {
    let liElem = document.createElement('li');
    liElem.innerHTML = str;
    ulElem.appendChild(liElem);
}

root.appendChild(ulElem);

// Library API
// To set
export const hello = () => 'Hello World!';