const students = [
{
    name: "Hosea",
    Age: 22
},
{
    name: "Moses Kuria",
    Age: 44
}
];
console.log(students[1]);

// Events
// The following are examples of eventsit depicts what happens when you click onto an object as 
// it calls a function

function doClick () {
    prompt('Enter your User Name and password');
}

function changeText(){
    let heading = document.getElementById('heading');
    heading.innerHTML = "Change the text above"
}

function ShowDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
    
}