var el = document.getElementById("screen");
el.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert(eval(el.value))
    }
});

function calculate(value)
{
    switch(value){
        case "+":
            el.value += "+"
            break
        case "/":
            el.value += "/"
            break
        case "*":
            el.value += "*"
            break
        case "-":
            el.value += "-"
            break
        case "0":
            el.value += "0"
            break
        case "1":
            el.value += "1"
            break
        case "2":
            el.value += "2"
            break
        case "3":
            el.value += "3"
            break
        case "4":
            el.value += "4"
            break
        case "5":
            el.value += "5"
            break
        case "6":
            el.value += "6"
            break
        case "7":
            el.value += "7"
            break
        case "8":
            el.value += "8"
            break
        case "9":
            el.value += "9"
            break
        case "=":
            alert(eval(el.value))
            break
        case ".":
            el.value += "."
            break
        case "d":
            el.value = el.value.toString().substring(0, el.value.length - 1);;
            break
        case "c":
            el.value = ""
            break
    }

}
