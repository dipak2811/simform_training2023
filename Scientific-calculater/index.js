let x = 1, y = 1, z = 1, w = 1, u = 1;
let memory = [];
let keyboardKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','%','^','(',')','.'];

function sin() {
    if (z == 1) {
        display.value = (Math.sin((Math.PI / 180) * Number(display.value))).toFixed(5);
    }
    else {
        display.value = (Math.sin(display.value)).toFixed(5);
    }
}

function cos() {
    if (z) {
        display.value = (Math.cos(Math.PI / 180 * display.value)).toFixed(5);
    }
    else {
        display.value = Math.cos(display.value).toFixed(5);
    }
}

function tan() {
    if (z) {
        display.value = (Math.tan(Math.PI / 180 * display.value)).toFixed(5);
    }
    else {
        display.value = Math.tan(display.value).toFixed(5);
    }
}

function sec() {
    if (z) {
        display.value = (1 / Math.cos(Math.PI / 180 * display.value)).toFixed(5);
    }
    else {
        display.value = 1 / Math.cos(display.value).toFixed(5);
    }
}

function csc() {
    if (z) {
        display.value = (1 / Math.sin(Math.PI / 180 * display.value)).toFixed(5);
    }
    else {
        display.value = 1 / Math.sin(display.value).toFixed(5);
    }
}

function cot() {
    if (z) {
        display.value = 1 / (Math.tan(Math.PI / 180 * display.value)).toFixed(5);
    }
    else {
        display.value = 1 / Math.tan(display.value).toFixed(5);
    }
}


function asin() {
    if (z) {
        display.value = (Math.PI / 180 * Math.asin(display.value)).toFixed(5);
    }
    else {
        display.value = Math.asin(display.value).toFixed(5);
    }
}

function acos() {
    if (z) {
        display.value = (Math.PI / 180 * Math.acos(display.value)).toFixed(5);
    }
    else {
        display.value = Math.acos(display.value).toFixed(5);
    }
}

function atan() {
    if (z) {
        display.value = (Math.PI / 180 * Math.atan(display.value)).toFixed(5);
    }
    else {
        display.value = Math.atan(display.value).toFixed(5);
    }
}

function asec() {
    if (z) {
        display.value = (Math.PI / 180 * (Math.acos(1 / display.value))).toFixed(5);
    }
    else {
        display.value = 1 / Math.acos(display.value).toFixed(5);
    }
}

function acsc() {
    if (z) {
        display.value = (Math.PI / 180 * (Math.asin(1 / display.value))).toFixed(5);
    }
    else {
        display.value = 1 / Math.asin(display.value).toFixed(5);
    }
}

function acot() {
    if (z) {
        display.value = (Math.PI / 180 * (Math.atan(1 / display.value))).toFixed(5);
    }
    else {
        display.value = 1 / Math.atan(display.value).toFixed(5);
    }
}

function sinh() {
    display.value = (Math.sinh(display.value)).toFixed(5);
}

function cosh() {
    display.value = (Math.cosh(display.value)).toFixed(5);
}

function tanh() {
    display.value = (Math.tanh(display.value)).toFixed(5);
}

function sech() {
    display.value = (1/Math.cosh(display.value)).toFixed(5);
}

function csch() {
    display.value = (1/Math.sinh(display.value)).toFixed(5);
}

function coth() {
    display.value = (1/Math.tanh(display.value)).toFixed(5);
}


function asinh() {
    display.value = (Math.asinh(display.value)).toFixed(5);
}

function acosh() {
    display.value = (Math.acosh(display.value)).toFixed(5);
}

function atanh() {
    display.value = (Math.atanh(display.value)).toFixed(5);
}

function asech() {
    display.value = (1/Math.acosh(display.value)).toFixed(5);
}

function acsch() {
    display.value = (1/Math.asinh(display.value)).toFixed(5);
}

function acoth() {
    display.value = (1/Math.atanh(display.value)).toFixed(5);
}


function backspc() {
    var a = display.value;
    display.value = a.substr(0, a.length - 1);
}

function square() {
    display.value = Math.pow(display.value, 2);
}

function tenpow() {
    display.value = Math.pow(10, display.value);
}

function twopow() {
    display.value = Math.pow(2, display.value);
}

function ceil() {
    display.value = Math.ceil(display.value);
}

function floor() {
    display.value = Math.floor(display.value);
}

function rand() {
    display.value = Math.random();
}

function onebyx() {
    display.value = 1 / (display.value);
}

function modx() {
    display.value = Math.abs(display.value);
}

function cubed() {
    display.value = Math.pow(display.value, 3);
}

function sqrt2() {
    display.value = Math.pow(display.value, 1 / 2);
}

function sqrt3() {
    display.value = Math.pow(display.value, 1 / 3);
}

function element(value) {
    display.value += value;
}

function remv() {
    display.value = " ";
}

function exp(value) {
    display.value += value;
}

function ln() {
    display.value = Math.log(display.value);
}

function log() {
    display.value = Math.log10(display.value);
}

function signalt() {
    display.value = (-1) * (display.value);
}

function yroot(value) {
    let z = value.search("yroot");
    let y = value.substring(0, z);
    let x = value.substring(z + 5, value.length);
    return [x, y]
}

function logy(value) {
    let z = value.search("ylog");
    let y = value.substring(0, z);
    let x = value.substring(z + 4, value.length);
    return [x, y]
}

function ythlog(val1, val2) {
    display.value = (Math.log(val1) / Math.log(val2)).toString();
}

function ythrroot(val1, val2) {
    display.value = Math.pow(val2, 1 / val1).toString();
}

function equal() {
    if (display.value.includes("yroot")) {
        let y = yroot(display.value);
        ythrroot(y[0], y[1]);

    }
    if (display.value.includes("ylog")) {
        let y = logy(display.value);
        ythlog(y[0], y[1]);

    }
    display.value = display.value.replaceAll("^", "**");
    display.value = eval(display.value);
}

function pivalue() {
    if (Number(display.value.substring(-1))) {
        display.value = Math.PI;
    }
    else {
        display.value += Math.PI;
    }
}

function getFactorialForLoop(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}

function factorial() {
    display.value = getFactorialForLoop(parseInt(display.value)).toString();
}

function epsilon() {
    if (Number(display.value.substring(-1))) {
        display.value = Math.exp(1);
    }
    else {
        display.value += Math.exp(1);
    }
}

function eresx() {
    display.value = Math.exp(display.value);
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function mc() {
    memory = [];
    console.log(memory);
    document.getElementById('mc').disabled = true;
    document.getElementById('mr').disabled = true
}

function mr() {
    display.value = memory[memory.length - 1].toString();
}

function mplus() {
    enblecr();
    if (memory.length == 0) {
        memory.push(parseFloat(display.value));
    }
    else {
        memory[memory.length - 1] += parseFloat(display.value);
    }

}

function mminus() {
    enblecr();
    if (memory.length == 0) {
        memory.push((-1) * parseFloat(display.value));
    }
    else {
        memory[memory.length - 1] -= parseFloat(display.value);
    }
}

function ms() {
    enblecr();
    memory.push(parseFloat(display.value));
}

function enblecr() {
    document.getElementById('mc').disabled = false;
    document.getElementById('mr').disabled = false;
}

function trigonometry2nd() {
    if (x) {
        x = 0;
        for (let element of document.getElementsByClassName("tribtn2nd")) {
            element.style.backgroundColor = "rgb(146, 199, 214)";
        }
    }
    else {
        x = 1;
        for (let element of document.getElementsByClassName("tribtn2nd")) {
            element.style.backgroundColor = "rgb(221, 218, 218)";
        }
    }
    hyp2nd();
}
function hyp2nd() {
    if (x == 0 && u == 1) {
        document.getElementById('trigonometry1').style.display = "none";
        document.getElementById('trigonometry2').style.display = "inline-block";
        document.getElementById('trigonometry3').style.display = "none";
        document.getElementById('trigonometry4').style.display = "none";
    }
    else if (x == 1 && u == 1) {
        document.getElementById('trigonometry1').style.display = "inline-block";
        document.getElementById('trigonometry2').style.display = "none";
        document.getElementById('trigonometry3').style.display = "none";
        document.getElementById('trigonometry4').style.display = "none";
    }
    else if (x == 0 && u === 0) {
        document.getElementById('trigonometry1').style.display = "none";
        document.getElementById('trigonometry2').style.display = "none";
        document.getElementById('trigonometry3').style.display = "none";
        document.getElementById('trigonometry4').style.display = "inline-block";
    }
    else {
        document.getElementById('trigonometry1').style.display = "none";
        document.getElementById('trigonometry2').style.display = "none";
        document.getElementById('trigonometry3').style.display = "inline-block";
        document.getElementById('trigonometry4').style.display = "none";
    }
}
function trigonometry3rd() {
    if (u) {
        u = 0;
        for (let element of document.getElementsByClassName("hypbtn2nd")) {
            element.style.backgroundColor = "rgb(146, 199, 214)";
        }
    } else {
        u = 1;
        for (let element of document.getElementsByClassName("hypbtn2nd")) {
            element.style.backgroundColor = "rgb(221, 218, 218)";

        }
    }
    hyp2nd();
}
function function2nd() {
    if (y) {
        for (let element of document.getElementsByClassName('show1')) {
            element.style.display = "none";
        }
        for (let element of document.getElementsByClassName('show2')) {
            element.style.display = "inline-block";
        }
        y = 0;
    }
    else {
        for (let element of document.getElementsByClassName('show2')) {
            element.style.display = "none";
        }
        for (let element of document.getElementsByClassName('show1')) {
            element.style.display = "inline-block";
        }
        y = 1;
    }
}

function rad() {
    if (z == 1) {
        document.getElementById('degree').innerHTML = "RAD";
        z = 0;
    }
    else {
        document.getElementById('degree').innerHTML = "DEG";
        z = 1;
    }
}

function FE() {
    if (w) {
        display.value = Number(display.value).toFixed(5).toString();
        w = 0;
    }
    else {
        display.value = Number(display.value).toExponential().toString();
        w = 1;
    }
}
let sclick = 1;
function fcolor() {
    if (sclick == 1) {
        document.getElementById("s-button").style.backgroundColor = "rgb(146, 199, 214)"
        sclick = 0;
    }
    else {
        document.getElementById("s-button").style.backgroundColor = " rgb(221, 218, 218)";
        sclick = 1;
    }
}
let FEval = 0;
function fecolor() {
    if (FEval == 1) {
        document.getElementById("fe-button").style.backgroundColor = "rgb(146, 199, 214)"
        FEval = 0;
    }
    else {
        document.getElementById("fe-button").style.backgroundColor = " rgb(221, 218, 218)";
        FEval = 1;
    }
}

function degtodms() {
    let deg = Number(display.value);
    let minutes = (deg - parseInt(deg)) * 60;
    let seconds = (minutes - parseInt(minutes)) * 60;
    display.value = parseFloat(`${parseInt(deg)}.${parseInt(minutes)}${parseInt(seconds)}`).toFixed(4).toString();
}

function dmstodeg() {
    let dms = Number(display.value);
    let deg = parseInt(dms);
    let sec = (dms.toFixed(4) - dms.toFixed(2))*10000;
    let min = (dms.toFixed(2) - deg)*100;
    console.log(sec +" "+min);
    deg = deg + min / 60 + sec / 3600;
    display.value = deg.toFixed(2).toString();
}

document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    console.log(keyName);   
    if(keyName=='|')
    {
        modx();
    }
    if(keyName=='Delete'){
        remv();
    }
    if(keyName=='Backspace'){
        backspc();
    }
    if(keyName=='Enter'||keyName=='='){
        if(display.value)
          equal();
    }
    if (keyboardKeys.includes(keyName)) {
        display.value += keyName ;
    }
  }, false);