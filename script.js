const display=document.getElementById("pinDisplay");
const buttons=document.querySelectorAll(".btn");
console.log(buttons)

let num="";
buttons.forEach(btn => {
    console.log(num.length)
    
    btn.addEventListener("click",(e)=> {
        if (num.length<4){
            console.log(e.target.id);
            num=num+e.target.id;
            display.innerHTML=num;
            console.log(num);
            if (num=3947){
                console.log("congratulations");
                document.getElementById("result").innerHTML="<a href='/Dash/'>Go to homepage</a>";

            }
    }else{
        num="";
        
    }
    });

    
    

});