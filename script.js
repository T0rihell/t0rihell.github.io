const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const questionInput = document.createElement('input');
questionInput.placeholder = 'Введіть ваше запитання';
container.appendChild(questionInput);

const button = document.createElement('button');
button.textContent = 'Дізнатися відповідь магічної кулі';
container.appendChild(button);

const errorDiv = document.createElement('div');
errorDiv.className = 'error';
container.appendChild(errorDiv);

const ball = document.createElement('div');
ball.className = 'ball';
const ballText = document.createElement('div');
ballText.className = 'ball-text';
ballText.textContent = '?';
ball.appendChild(ballText);
container.appendChild(ball);

button.addEventListener('click', function() {
  const userQuestion = questionInput.value.trim();

  if (!userQuestion) {
    errorDiv.textContent = 'Будь ласка, спочатку введіть запитання!';
    ball.classList.remove('show');
    ballText.classList.remove('show');
    return;
  } else {
    errorDiv.textContent = '';
  }

  const randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  switch(randomNumber) {
    case 0: eightBall = 'Це вирішено.'; break;
    case 1: eightBall = 'Це беззаперечно так.'; break;
    case 2: eightBall = 'Відповідь туманна. Спробуйте ще раз.'; break;
    case 3: eightBall = 'Неможливо передбачити зараз.'; break;
    case 4: eightBall = 'Не розраховуйте на це.'; break;
    case 5: eightBall = 'Мої джерела кажуть ні.'; break;
    case 6: eightBall = 'Перспективи не дуже хороші.'; break;
    case 7: eightBall = 'Знаки вказують на так.'; break;
  }

  ball.classList.add('show');
  ballText.classList.remove('show');
  ball.style.animation = 'shake 0.8s';
  setTimeout(() => {
    ball.style.animation = '';
    ballText.textContent = eightBall;
    ballText.classList.add('show');
  }, 800);
});
