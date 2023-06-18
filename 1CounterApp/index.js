console.log("Welcome To Counter");

document.getElementById("btn1").addEventListener("click", function (e) {
    
    let currentValue = parseInt(document.getElementById("value").innerHTML);
    let IncrementValue = currentValue+1;
    document.getElementById("value").innerHTML = String(IncrementValue);

})



document.getElementById("btn2").addEventListener("click", function (e) {
    
    let currentValue = parseInt(document.getElementById("value").innerHTML);
    let DecrementValue = currentValue-1;
    document.getElementById("value").innerHTML = String(DecrementValue);

})




