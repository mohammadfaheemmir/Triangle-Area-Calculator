function calculateArea(){
    let A = parseInt(document.getElementById("sideA").value);
    let B = parseInt(document.getElementById("sideB").value);
    let C = parseInt(document.getElementById("sideC").value);
    let area, semiPerimeter;

    semiPerimeter = (A + B + C) / 2;
    area = Math.sqrt(semiPerimeter*(semiPerimeter - A)*(semiPerimeter - B)*(semiPerimeter - C));

    document.getElementById("result").textContent = area.toFixed(2);

}