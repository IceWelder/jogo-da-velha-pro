// Variáveis para acompanhar o jogador atual e se o jogo terminou
let currentPlayer = 'X'; // Começa com 'X'
let gameEnded = false;

// Função chamada quando um quadrado é clicado
function play(square) {
    if (gameEnded) {
      return;
    }
  
    if (square.innerText === '') {
      square.innerText = currentPlayer;
      if (checkWin()) {
        // Alguém ganhou
        alert(`Jogador ${currentPlayer} venceu!`);
        gameEnded = true;
        // Adicione a classe de vencedor ao elemento vencedor
        square.classList.add(`winner-${currentPlayer}`);
      } else if (checkDraw()) {
        // Empate
        alert('Empate! O jogo terminou sem vencedor.');
        gameEnded = true;
        // Adicione a classe de empate a todos os elementos
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.classList.add('draw'));
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  

// Função para verificar se alguém venceu
function checkWin() {
  const squares = document.querySelectorAll('.square');
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (squares[a].innerText && squares[a].innerText === squares[b].innerText && squares[a].innerText === squares[c].innerText) {
      return true; // Temos um vencedor
    }
  }

  return false; // Ninguém venceu ainda
}

// Função para verificar se há um empate
function checkDraw() {
  const squares = document.querySelectorAll('.square');
  for (const square of squares) {
    if (square.innerText === '') {
      return false; // Ainda há espaços vazios, o jogo não terminou em empate
    }
  }
  return true; // Todos os espaços estão preenchidos, é um empate
}
