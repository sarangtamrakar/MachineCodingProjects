
// adding event listner to submit button


AddNotes();

function AddNotes() {
    document.getElementById("submit_btn").addEventListener("click", function (e) {
        e.preventDefault();
        // get the current text from text field
        let text = document.getElementById("text_editor").value;

        html = `<li>
                <span>${text}</span>
                <button class='delete_btn'>Delete</button>
                </li>
                `
        
        node = HTMLToNode(html);
        document.getElementById("todo_container").appendChild(node);
        document.getElementById("text_editor").value = "";

        // whenever new element will come into container we will iterate over all the delete btns & add the event listener to them.
        DeleteNotes();


    })
}




// now adding event listener to delete btn
function DeleteNotes() { 
    let delete_btns = document.getElementsByClassName('delete_btn');
    Array.from(delete_btns).forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log("detected delete");
            e.target.parentElement.remove();
        })
    })   
}


// helper function
function HTMLToNode(str) {
    let el = document.createElement('div');
    el.innerHTML = str;
    return el.firstElementChild;
}

