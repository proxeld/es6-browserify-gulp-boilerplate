import bo, * as opr from './modules/code.es6';

let root = document.getElementById('root');


bo(5, 9, opr.sum);
bo(5, 9, opr.diff);
bo(5, 9, opr.mul);
bo(5, 9, opr.div);

let ulElem = document.createElement('ul');

for(let str of opr.pretty) {
    let liElem = document.createElement('li');
    liElem.innerHTML = str;
    ulElem.appendChild(liElem);
}

root.appendChild(ulElem);

// Library API
export const hello = () => 'Hello World!';