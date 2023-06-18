
function StartApp() {
    document.getElementById("html_btn").classList.add("active_btn");
    document.getElementById("HTML__content").style.display = "block";
    document.getElementById("CSS__content").style.display = "none";
    document.getElementById("JS__content").style.display = "none";
}
// start the aaplication
StartApp();



// now adding event listeners to other btns

document.getElementById("html_btn").addEventListener("click", HTMLListener);
document.getElementById("css_btn").addEventListener("click", CSSListener);
document.getElementById("js_btn").addEventListener("click", JSListener);



function CSSListener() {
    console.log("css listener called");
    
    btns = document.getElementsByClassName("btn");
    Array.from(btns).forEach((element) => {
        if (element.classList.contains("active_btn")) { 
            element.classList.remove("active_btn");
        }
    })

    document.getElementById("css_btn").classList.add("active_btn");
    document.getElementById("HTML__content").style.display = "none";
    document.getElementById("CSS__content").style.display = "block";
    document.getElementById("JS__content").style.display = "none";
}


function JSListener() {
    console.log("js listener called");


    btns = document.getElementsByClassName("btn");
    Array.from(btns).forEach((element) => {
        if (element.classList.contains("active_btn")) { 
            element.classList.remove("active_btn");
        }
    })

    document.getElementById("js_btn").classList.add("active_btn");
    document.getElementById("HTML__content").style.display = "none";
    document.getElementById("CSS__content").style.display = "none";
    document.getElementById("JS__content").style.display = "block";
}


function HTMLListener() {
    console.log("HTNL listener called");

    btns = document.getElementsByClassName("btn");
    Array.from(btns).forEach((element) => {
        if (element.classList.contains("active_btn")) { 
            element.classList.remove("active_btn");
        }
    })

    document.getElementById("html_btn").classList.add("active_btn");
    document.getElementById("HTML__content").style.display = "block";
    document.getElementById("CSS__content").style.display = "none";
    document.getElementById("JS__content").style.display = "none";
}






