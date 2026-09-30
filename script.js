let display = document.getElementById("display");

// Number aur operator display karna
function calculate(value) {
   // display.value = display.value + value;      
                            // Left side: display ko update karo
                            // Right side: purana display + naya value
   display.value += value;
}

// Result nikalna
function result() {
    try {
        display.value = eval(display.value);      //expression calculate 
    } 
    catch (error) {
        display.value = "Error";
    }
}

// Sab clear karna
function clearDisplay() {
    display.value = "";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);    //last character hata dena
//     0 → starting position
// -1 → last character ko exclude karo
}