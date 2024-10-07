const inputName=document.querySelector('#inputName');
const button = document.querySelector('#nameBtn');
const displayName=document.querySelector('#displayName');

//Funktionen som ger versaler
function toUpperCase(input){
    return input.toUpperCase();
}

//lyssnaren för knappen
document.querySelector('#nameBtn').addEventListener('click',()=> {
    const inputName=document.querySelector('#inputName').value;

if (inputName.trim()===""){
    alert('You must write something');
    return;
}

const inputNameChanged = toUpperCase(inputName);

document.querySelector('#displayName').textContent=inputNameChanged;

console.log(inputNameChanged);

});
