function date_horas(date: Date) {
  // Função que pega as horas e minutos e segundos
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function atualizarHoras() {
  // Pega o elemento com o id horas
  const dateElement = document.getElementById("horas");

  // Se o elemento existir, atualize seu texto interno com a data e hora atuais
  if (dateElement) {
    dateElement.innerHTML = date_horas(new Date());
  }
}

// Atualizar as horas a cada segundo (1000 milissegundos)
// A função setInterval() chama a função passada como primeiro argumento e o tempo que deve esperar para chamar novamente a função passada como segundo argumento
setInterval(atualizarHoras, 1000);

// Chame a função uma vez para exibir as horas imediatamente
atualizarHoras();
