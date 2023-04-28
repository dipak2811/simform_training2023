type htmlTags = HTMLInputElement | HTMLButtonElement | null;
let x = 1,
  y = 1,
  z = 1,
  w = 1,
  u = 1;
let memory: number[] = [];
let keyboardKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  "%",
  "^",
  "(",
  ")",
  ".",
];
let display = <htmlTags>document.getElementById("display");
function sin(): void {
  if (z === 1) {
    display!.value = Math.sin((Math.PI / 180) * Number(display!.value)).toFixed(
      5
    );
  } else {
    display!.value = Math.sin(Number(display!.value)).toFixed(5);
  }
}

function cos(): void {
  if (z === 1) {
    display!.value = Math.cos((Math.PI / 180) * Number(display!.value)).toFixed(
      5
    );
  } else {
    display!.value = Math.cos(Number(display!.value)).toFixed(5);
  }
}

function tan(): void {
  if (z === 1) {
    display!.value = Math.tan((Math.PI / 180) * Number(display!.value)).toFixed(
      5
    );
  } else {
    display!.value = Math.tan(Number(display!.value)).toFixed(5);
  }
}

function sec(): void {
  if (z === 1) {
    display!.value = (
      1 / Math.cos((Math.PI / 180) * Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = (1 / Math.cos(Number(display!.value))).toFixed(5);
  }
}

function csc(): void {
  if (z === 1) {
    display!.value = (
      1 / Math.sin((Math.PI / 180) * Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = (1 / Math.sin(Number(display!.value))).toFixed(5);
  }
}

function cot(): void {
  if (z === 1) {
    display!.value = (
      1 / Math.tan((Math.PI / 180) * Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = (1 / Math.tan(Number(display!.value))).toFixed(5);
  }
}

function asin(): void {
  if (z === 1) {
    display!.value = (
      (180 / Math.PI) *
      Math.asin(Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = Math.asin(Number(display!.value)).toFixed(5);
  }
}

function acos(): void {
  if (z === 1) {
    display!.value = (
      (180 / Math.PI) *
      Math.acos(Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = Math.acos(Number(display!.value)).toFixed(5);
  }
}

function atan(): void {
  if (z === 1) {
    display!.value = (
      (180 / Math.PI) *
      Math.atan(Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = Math.atan(Number(display!.value)).toFixed(5);
  }
}

function asec(): void {
  if (z === 1) {
    display!.value = (
      (180 / Math.PI) *
      Math.acos(1 / Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = (1 / Math.acos(Number(display!.value))).toFixed(5);
  }
}

function acsc(): void {
  if (z === 1) {
    display!.value = (
      (180 / Math.PI) *
      Math.asin(1 / Number(display!.value))
    ).toFixed(5);
  } else {
    display!.value = (1 / Math.asin(Number(display!.value))).toFixed(5);
  }
}

function acot() {
  const num = Number(display!.value);
  if (num) {
    display!.value = ((180 / Math.PI) * Math.atan(1 / num)).toFixed(5);
  } else {
    display!.value = (1 / Math.atan(num)).toFixed(5);
  }
}

function sinh() {
  const num = Number(display!.value);
  display!.value = Math.sinh(num).toFixed(5);
}

function cosh() {
  const num = Number(display!.value);
  display!.value = Math.cosh(num).toFixed(5);
}

function tanh() {
  const num = Number(display!.value);
  display!.value = Math.tanh(num).toFixed(5);
}

function sech() {
  const num = Number(display!.value);
  display!.value = (1 / Math.cosh(num)).toFixed(5);
}

function csch() {
  const num = Number(display!.value);
  display!.value = (1 / Math.sinh(num)).toFixed(5);
}

function coth() {
  const num = Number(display!.value);
  display!.value = (1 / Math.tanh(num)).toFixed(5);
}

function asinh() {
  const num = Number(display!.value);
  display!.value = Math.asinh(num).toFixed(5);
}

function acosh() {
  const num = Number(display!.value);
  display!.value = Math.acosh(num).toFixed(5);
}

function atanh() {
  const num = Number(display!.value);
  display!.value = Math.atanh(num).toFixed(5);
}

function asech() {
  const num = Number(display!.value);
  display!.value = (1 / Math.acosh(num)).toFixed(5);
}

function acsch() {
  const num = Number(display!.value);
  display!.value = (1 / Math.asinh(num)).toFixed(5);
}

function acoth() {
  const num = Number(display!.value);
  display!.value = (1 / Math.atanh(num)).toFixed(5);
}

function backspc() {
  var a = display!.value;
  display!.value = a.substr(0, a.length - 1);
}

function square(): void {
  display!.value = Math.pow(Number(display!.value), 2).toString();
}

function tenpow(): void {
  display!.value = Math.pow(10, Number(display!.value)).toString();
}

function twopow(): void {
  display!.value = Math.pow(2, Number(display!.value)).toString();
}

function ceil(): void {
  display!.value = Math.ceil(Number(display!.value)).toString();
}

function floor(): void {
  display!.value = Math.floor(Number(display!.value)).toString();
}

function rand(): void {
  display!.value = Math.random().toString();
}

function onebyx(): void {
  display!.value = (1 / Number(display!.value)).toString();
}

function modx(): void {
  display!.value = Math.abs(Number(display!.value)).toString();
}

function cubed(): void {
  display!.value = Math.pow(Number(display!.value), 3).toString();
}

function sqrt2(): void {
  display!.value = Math.pow(Number(display!.value), 1 / 2).toString();
}

function sqrt3(): void {
  display!.value = Math.pow(Number(display!.value), 1 / 3).toString();
}

function element(value: string): void {
  display!.value += value;
}

function remv(): void {
  display!.value = "";
}

function exp(value: string): void {
  display!.value += value;
}

function ln(): void {
  display!.value = Math.log(Number(display!.value)).toString();
}

function log(): void {
  display!.value = Math.log10(Number(display!.value)).toString();
}

function signalt(): void {
  display!.value = (-1 * Number(display!.value)).toString();
}

function yroot(value: string): [string, string] {
  let z: number = value.search("yroot");
  let y: string = value.substring(0, z);
  let x: string = value.substring(z + 5, value.length);
  return [x, y];
}

function logy(value: string): [string, string] {
  let z: number = value.search("ylog");
  let y: string = value.substring(0, z);
  let x: string = value.substring(z + 4, value.length);
  return [x, y];
}

function ythlog(val1: number, val2: number): void {
  display!.value = (Math.log(val1) / Math.log(val2)).toString();
}

function ythrroot(val1: number, val2: number): void {
  display!.value = Math.pow(val2, 1 / val1).toString();
}

function equal(): void {
  if (display!.value.includes("yroot")) {
    let y: [string, string] = yroot(display!.value);
    ythrroot(Number(y[0]), Number(y[1]));
  }
  if (display!.value.includes("ylog")) {
    let y: [string, string] = logy(display!.value);
    ythlog(Number(y[0]), Number(y[1]));
  }
  display!.value = display!.value.replace(/\^/g, "**");
  display!.value = eval(display!.value);
}

function pivalue(): void {
  if (Number(display!.value.substring(-1))) {
    display!.value = String(Math.PI);
  } else {
    display!.value += Math.PI;
  }
}

function getFactorialForLoop(n: number): number | string {
  let result = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  } else {
    return "n has to be positive";
  }
}

function factorial(): void {
  display!.value = getFactorialForLoop(parseInt(display!.value)).toString();
}

function epsilon(): void {
  if (Number(display!.value.substring(-1))) {
    display!.value = String(Math.exp(1));
  } else {
    display!.value += Math.exp(1).toString();
  }
}

function eresx(): void {
  display!.value = Math.exp(Number(display!.value)).toString();
}
function myFunction(): void {
  document.getElementById("myDropdown")!.classList.toggle("show");
}

function myFunction1(): void {
  document.getElementById("myDropdown1")!.classList.toggle("show");
}

function mc(): void {
  memory = [];
  (document.getElementById("mc") as HTMLInputElement).disabled = true;
  (document.getElementById("mr") as HTMLInputElement).disabled = true;
}

function mr(): void {
  display!.value = memory[memory.length - 1].toString();
}

function mplus(): void {
  enblecr();
  if (memory.length == 0) {
    memory.push(parseFloat(display!.value));
  } else {
    memory[memory.length - 1] += parseFloat(display!.value);
  }
}

function mminus(): void {
  enblecr();
  if (memory.length == 0) {
    memory.push(-1 * parseFloat(display!.value));
  } else {
    memory[memory.length - 1] -= parseFloat(display!.value);
  }
}

function ms(): void {
  enblecr();
  memory.push(parseFloat(display!.value));
}

function enblecr() {
  (document.getElementById("mc") as HTMLInputElement).disabled = false;
  (document.getElementById("mr") as HTMLInputElement).disabled = false;
}

function trigonometry2nd(): void {
  if (x) {
    x = 0;
    for (let element of document.getElementsByClassName("tribtn2nd")) {
      (element as HTMLElement).style.backgroundColor = "rgb(146, 199, 214)";
    }
  } else {
    x = 1;
    for (let element of document.getElementsByClassName("tribtn2nd")) {
      (element as HTMLElement).style.backgroundColor = "rgb(221, 218, 218)";
    }
  }
  hyp2nd();
}
function hyp2nd(): void {
  if (x == 0 && u == 1) {
    document.getElementById("trigonometry1")!.style.display! = "none";
    document.getElementById("trigonometry2")!.style.display! = "inline-block";
    document.getElementById("trigonometry3")!.style.display! = "none";
    document.getElementById("trigonometry4")!.style.display! = "none";
  } else if (x == 1 && u == 1) {
    document.getElementById("trigonometry1")!.style.display! = "inline-block";
    document.getElementById("trigonometry2")!.style.display! = "none";
    document.getElementById("trigonometry3")!.style.display! = "none";
    document.getElementById("trigonometry4")!.style.display! = "none";
  } else if (x == 0 && u === 0) {
    document.getElementById("trigonometry1")!.style.display! = "none";
    document.getElementById("trigonometry2")!.style.display! = "none";
    document.getElementById("trigonometry3")!.style.display! = "none";
    document.getElementById("trigonometry4")!.style.display! = "inline-block";
  } else {
    document.getElementById("trigonometry1")!.style.display! = "none";
    document.getElementById("trigonometry2")!.style.display! = "none";
    document.getElementById("trigonometry3")!.style.display! = "inline-block";
    document.getElementById("trigonometry4")!.style.display! = "none";
  }
}
function trigonometry3rd(): void {
  if (u) {
    u = 0;
    for (let element of document.getElementsByClassName("hypbtn2nd")) {
      (element as HTMLElement).style.backgroundColor = "rgb(146, 199, 214)";
    }
  } else {
    u = 1;
    for (let element of document.getElementsByClassName("hypbtn2nd")) {
      (element as HTMLElement).style.backgroundColor = "rgb(221, 218, 218)";
    }
  }
  hyp2nd();
}
function function2nd(): void {
  if (y) {
    for (let element of document.getElementsByClassName("show1")) {
      (element as HTMLElement).style.display! = "none";
    }
    for (let element of document.getElementsByClassName("show2")) {
      (element as HTMLElement).style.display! = "inline-block";
    }
    y = 0;
  } else {
    for (let element of document.getElementsByClassName("show2")) {
      (element as HTMLElement).style.display! = "none";
    }
    for (let element of document.getElementsByClassName("show1")) {
      (element as HTMLElement).style.display! = "inline-block";
    }
    y = 1;
  }
}

function rad(): void {
  if (z == 1) {
    document.getElementById("degree")!.innerHTML = "RAD";
    z = 0;
  } else {
    document.getElementById("degree")!.innerHTML = "DEG";
    z = 1;
  }
}

function FE(): void {
  if (w) {
    display!.value = Number(display!.value).toFixed(5).toString();
    w = 0;
  } else {
    display!.value = Number(display!.value).toExponential().toString();
    w = 1;
  }
}
let sclick = 1;
function fcolor(): void {
  if (sclick == 1) {
    document.getElementById("s-button")!.style.backgroundColor =
      "rgb(146, 199, 214)";
    sclick = 0;
  } else {
    document.getElementById("s-button")!.style.backgroundColor =
      " rgb(221, 218, 218)";
    sclick = 1;
  }
}
let FEval = 0;
function fecolor(): void {
  if (FEval == 1) {
    document.getElementById("fe-button")!.style.backgroundColor =
      "rgb(146, 199, 214)";
    FEval = 0;
  } else {
    document.getElementById("fe-button")!.style.backgroundColor =
      " rgb(221, 218, 218)";
    FEval = 1;
  }
}

function degtodms(): void {
  let deg: number = Number(display!.value);
  let minutes: number = (deg - parseInt(deg.toString())) * 60;
  let seconds: number = (minutes - parseInt(minutes.toString())) * 60;
  display!.value = parseFloat(
    `${parseInt(deg.toString())}.${parseInt(minutes.toString())}${parseInt(
      seconds.toString()
    )}`
  )
    .toFixed(4)
    .toString();
}

function dmstodeg(): void {
    let dms: number = parseFloat(display!.value);
    let deg: number = parseInt(dms.toString());
    let sec: number = (Number(dms.toFixed(4)) - Number(dms.toFixed(2))) * 10000;
    let min: number = (Number(dms.toFixed(2)) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    display!.value = deg.toFixed(2).toString();
}

document.addEventListener(
  "keydown",
  (event: KeyboardEvent) => {
    let keyName: string = event.key;
    if (keyName == "|") {
      modx();
    }
    if (keyName == "Delete") {
      remv();
    }
    if (keyName == "Backspace") {
      backspc();
    }
    if (keyName == "Enter" || keyName == "=") {
      if (display!.value) equal();
    }
    if (keyboardKeys.includes(keyName)) {
      display!.value += keyName;
    }
  },
  false
);
