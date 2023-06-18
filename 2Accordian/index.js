let btns = document.getElementsByClassName("section_btn");


console.log(btns);


Array.from(btns).forEach((btn) => { 
    btn.addEventListener("click", function(){
        btn.classList.toggle("active");

        let panel = btn.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
})

