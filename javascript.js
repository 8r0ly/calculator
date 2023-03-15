//clearScreen() function clears all the values
function clearScreen() {
    document.getElementById("result").value="";
}
//display(value) function displays values
function display(value) {
    document.getElementById("result").value+=value;
}
//calculate() function evaluates the expression and returns result
function calculate() {
    var p=document.getElementById("result").value;
    var q= eval(p);
    //eval() function evaluates js code and executes it
    document.getElementById("result").value=q;
}