// Verifica se há contador salvo no localStorage
let reviewCount = localStorage.getItem("reviewCount");

// Se não houver, inicia com 0
if (!reviewCount) {
  reviewCount = 0;
}

// Incrementa o contador
reviewCount++;

// Atualiza o localStorage
localStorage.setItem("reviewCount", reviewCount);

// Mostra na página
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("review-count").textContent = reviewCount;
});
