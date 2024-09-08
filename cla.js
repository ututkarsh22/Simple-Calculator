const tap = document.getElementsByClassName("display")[0]

function pressed(input){
    
    tap.value += input;
    
}

function Clear(){
    tap.value = "";
}
function cross(input){
    
}

function calculate()
{
    try{
        tap.value = eval(tap.value);
    }
    catch(error){
        tap.value = "ERROR";
    }
    
}