const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. 초기 테마 설정 확인
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateButtonText(savedTheme);
} else if (prefersDark) {
  body.setAttribute('data-theme', 'dark');
  updateButtonText('dark');
}

// 2. 버튼 클릭 핸들러
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  updateButtonText(nextTheme);
});

// 3. 버튼 텍스트 업데이트 함수
function updateButtonText(theme) {
  themeToggle.textContent = theme === 'dark' ? '화이트 모드로 전환' : '다크 모드로 전환';
}
