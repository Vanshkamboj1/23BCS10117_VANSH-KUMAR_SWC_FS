const bt = ["btn1","btn2","btn3","btn6","btn9","btn8","btn7","btn4"];
let or=[1,2,3,6,9,8,7,4];

const b = document.getElementById("btn5");

b.addEventListener('click',()=>{
    const a = [0,0,0,0,0,0,0,0];
    
    for(let i=0;i<8;i++){
        let target = (i+1)%8;
        a[target] = or[i];
    }
    or = a;
    
    for(let i=0;i<8;i++){
        const r = document.getElementById(bt[i]);
        r.innerHTML=or[i];
    }
});