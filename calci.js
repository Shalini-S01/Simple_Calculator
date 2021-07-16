function show(val) {
    var a=document.querySelector("#ip"); // accessing element using it's id
    a.value+=val;
}

function clr() {
    b=document.querySelector("#ip")
    b.value="";
    
}
function bcksp() {
        var  value= document.getElementById("ip").value;
      /*  console.log(typeof(value)) //string
          console.log(value) //what value we've pressed upto now like 637
          console.log(value.length) //for 637, it shows 3.so for backspace we've to remove last number
          thus, console.log(value.length -1)--> 2 [in display 63]  */
        document.getElementById("ip").value=value.substr(0, value.length - 1);
}
function find() {
    var y=document.querySelector("#ip");
    ans=eval(y.value);
    y.value=ans;
}
 
    

