
// get the values from all the fields
const mortage_form = document.getElementById("mortage__form");

document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    // const form_data = new FormData(mortage_form);
    // console.log(form_data);    

    // show the form values
    const formData = new FormData(mortage_form);
    let data = {};
    for(let[key,value] of formData) { 
        data[key] = parseInt(value);
    }

    const p = data.principal;
    const r  = data.interest_rate;
    const n  = data.Number_Of_Years;

    const mortage_value = p * ((r*(1+r)^n) / (((1+r)^n)-1))

    document.getElementById("Mortage__viewer").innerHTML = String(mortage_value);

})





