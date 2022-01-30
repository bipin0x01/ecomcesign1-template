// function to check form validation
function sendContact(){
    // Get the form data
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    // Form validation
    if (fname == "" || lname == "" || email == "" || message == "") {
        alert("Please Fill All the fields!");   // Display an alert box
        return false;
    } else {
       return true;
    }        
};


var showmore = document.getElementById("show-more");

showmore.addEventListener("click", function(){
document.getElementById("hidden-products").classList.toggle("hidden");
});

