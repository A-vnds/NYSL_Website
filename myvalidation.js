/*
function validateForm() {
    
var name = document.getElementById('name').value;
var surname = document.getElementById('surname').value;
var address = document.getElementById('address').value;
var city = document.getElementById('city').value;
var zip_code = document.getElementById('zip_code').value;
var birthday = document.getElementById('birthday').value;
var parent = document.getElementById('parent').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var signature = document.getElementById('signature').value;
var date = document.getElementById('date').value;
    
    
    
    
if (name=='' || surname=='' || address=='' || city=='' || zip_code=='' || birthday=='' || parent=='' || phone== '' || email =='' || signature=='' || date=='' )
{
    document.getElementById("eresult").innerHTML = "All fields Required";
    return false;
}
else if(phone.length<9 && phone.length>10){
    document.getElementById("eresult").innerHTML = "Phone number must be 10 characters";
    return false;
}
else {
    return true;
}
    
}   */


function alphanumeric() {

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var zip_code = document.getElementById('zip_code').value;
    var parent = document.getElementById('parent').value;
    var phone = document.getElementById('phone').value;
    var signature = document.getElementById('signature').value;
    var letters = /^[0-9a-zA-Z]+$/;


    if (!(name).match(letters) || !(surname).match(letters) || !(address).match(letters) || !(city).match(letters) || !(zip_code).match(letters) || !(parent).match(letters) || !(phone).match(letters) || !(signature).match(letters)) {
        document.getElementById("eresult").innerHTML = "Please input alphanumeric characters only";
        return false;
    } else if (phone.length != 10) {
        document.getElementById("eresult").innerHTML = "";
        document.getElementById("phoneresult").innerHTML = "Phone number must be 10 characters";
        return false;
    } else {
        return true;
    }
}





function currentDate() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("today_date").value = today;


}

currentDate()
//
//document.forms[0].addEventListener("submit", function (e) {
//    e.preventDefault()
//    alphanumeric()
//    
//})
