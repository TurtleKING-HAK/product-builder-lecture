// 1. 테마 관리 로직
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// 초기 테마 설정
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// 2. 로또 번호 생성 로직
const generateBtn = document.getElementById('generate-btn');
const lottoContainer = document.getElementById('lotto-numbers');

function getBallColor(num) {
  if (num <= 10) return '#fbc02d'; // 노랑
  if (num <= 20) return '#42a5f5'; // 파랑
  if (num <= 30) return '#ef5350'; // 빨강
  if (num <= 40) return '#9e9e9e'; // 회색
  return '#66bb6a'; // 초록
}

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  
  // 정렬 후 화면에 표시
  numbers.sort((a, b) => a - b);
  
  lottoContainer.innerHTML = '';
  numbers.forEach((num, index) => {
    setTimeout(() => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.backgroundColor = getBallColor(num);
      ball.textContent = num;
      lottoContainer.appendChild(ball);
    }, index * 100); // 0.1초 간격으로 순차적으로 등장
  });
}

generateBtn.addEventListener('click', generateLottoNumbers);

// 초기 실행 시 번호 한 세트 생성
generateLottoNumbers();
