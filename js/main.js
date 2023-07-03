/* function key(index) {
  console.log(event.keyCode);

  //concatenando e selecionando elemento com base no index/ser digitado
  let valor = document.getElementById("input" + index).value;

  let res = document.getElementById("inputResultado")[0];
  const element = document.createElement("p");

  res.appendChild(element);
  element.innerHTML = valor;
} */

function num(a) {
  console.log(event.keyCode);

  let valor = document.getElementById("v"+a).value;

  var res = document.getElementsById("resultado")[0];

  valor.addEventListener("OnChange", () => {
    res.innerHTML = valor;
  });

  res.innerHTML = valor;

  if (event.keyCode == 17) {
    alert("Tecla CTRL pressionada");
  }
}
