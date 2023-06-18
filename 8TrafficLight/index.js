

function ShowLight(colorArray) {
    document.getElementById(colorArray[0]).style.display = "block";
    document.getElementById(colorArray[1]).style.display = "none";
    document.getElementById(colorArray[2]).style.display = "none";
}


// here using the concept of callback function..
// first run one iteration till then wait for 9 sec , because ShowRed takes 9 sec to run & then start Interval for repeatition...
ShowRed(ShowYello);

setInterval(() => {
    ShowRed(ShowYello); 
},9000)









function ShowRed(showYellow) { 
    ShowLight(["red", "yellow", "green"]);

    setTimeout(() => { 
        showYellow(showGreen)
    },4000)
}



function ShowYello(showGreen) { 
    
    ShowLight(["yellow", "green", "red"]);
    
    setTimeout(() => { 
        showGreen();
    },2000)
}


function showGreen(){ 
    ShowLight(["green", "red","yellow"]);
}














