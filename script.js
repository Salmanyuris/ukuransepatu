
function result() {
    let input = document.getElementById("inputNumber").value;
    let output = document.getElementById('result');
    let x = Number(input);
    // let y = x * 0.24 + 0.42;
    let y = x * 0.23 + 2.37;
    output.innerHTML = Math.round(y);
    console.info(input);
}