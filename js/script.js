let arr=[]

const zero=()=>{
    arr.push(0);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}
const one=()=>{
    arr.push(1);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const two=()=>{
    arr.push(2);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const three=()=>{
    arr.push(3);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const four=()=>{
    arr.push(4);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const five=()=>{
    arr.push(5);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const six=()=>{
    arr.push(6);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const seven=()=>{
    arr.push(7);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const eight=()=>{
    arr.push(8);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const nine=()=>{
    arr.push(9);
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const dot=()=>{
    arr.push('.');
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const add=()=>{
    arr.push('+');
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const subtract=()=>{
    arr.push('-')
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const multiply=()=>{
    arr.push('*');
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const divide=()=>{
    arr.push('/')
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const percentage=()=>{
    arr.push('%')
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const brackets=()=>{
    arr.push('()')
    document.getElementById('calculator-display').innerHTML=arr.join('');
}


const ac=()=>{
    location.reload();
}

const back=()=>{
    arr.pop()
    document.getElementById('calculator-display').innerHTML=arr.join('');
}

const equal=()=>{
    document.getElementById('calculator-display').innerHTML=eval(arr.join('').toString());
}

