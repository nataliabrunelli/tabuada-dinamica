function calcular(){
  var n1 = Number(document.getElementById("n1").value);
  var n2 = Number(document.getElementById("n2").value);
  var res = document.getElementById("resposta")
  var r = " "

  if(n1 == 0 || n2 == 0){
    res.innerHTML = "ERRO"
  }else {
  for (var i = 1; i <= n2; i++){
   r += `${n1} x ${i} = ${n1 * i}<br>`;
  }
  res.innerHTML = "A tabuada do " + n1 + " é: <br>" + r
}
}

function limparCampos() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  
  document.getElementById("resposta").innerHTML = "Preencha os números acima.";
}