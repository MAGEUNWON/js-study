import gogodan from './gogodan_fuction.js';
import listMaker from './listMake_funtion.js';

const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);

const arr = [];


gogodan(arr, 10, 10);

listMaker(arr,ul, "li",100);