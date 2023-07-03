function keyFunction(index) {
  console.log(event.keyCode);

  //concatenando e selecionando elemento com base no index/ser digitado
  let valor = document.getElementById("input" + index).value;
  let res = document.getElementById("resultado");
  res.innerHTML = valor
/*   const element = document.createElement("p");
  res.appendChild(element);
  element.innerHTML = valor; */
} 
