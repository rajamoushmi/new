// console.log(`hello`);
// window.alert(`hello codder`);

// document.getElementById("my").textContent=`hello`;
// document.getElementById('h1').textContent='moushmi';

// let x=90;
// let y=89,z=398;

// console.log(`The age is ${x} and the price is ${y} it may be ${z}`);
//----------------------

// let sale=true;
// let b="apple";

// console.log(`The sale is ${sale}`);
// document.getElementById(`h1`).textContent = b;
// -------------------------------

// let uname;
// uname=window.prompt("Enter username");

// console.log(uname);
// ------------


document.getElementById("sub").onclick=function(){
    let uname;
uname=document.getElementById("inp").value;
document.getElementById("myh1").textContent=`Welcome ${uname}`;
console.log(uname);
}