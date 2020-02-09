function validateForm() {
    var firstName = document.form["myForm"]["firstName"].value;
if (firstName ==  null || firstName =""){
    alert('First name is required');
    return false;
}
} 