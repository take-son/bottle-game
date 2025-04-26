const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
  x: 175,
  y: 500,
  width: 50,
  height: 50,
  color: 'blue'
};

const enemy = {
  x: 175,
  y: 50,
  width: 50,
  height: 50,
  color: 'red',
  hp: 10
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && player.x > 0) {
    player.x -= 20;
  }
  if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) {
    player.x += 20;
  }
  if (e.key === ' ' && enemy.hp > 0) {
    enemy.hp -= 1; // スペースキーで敵のHPを減らす
  }
});

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemy() {
  ctx.fillStyle = enemy.color;
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

function drawEnemyHP() {
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText('Enemy HP: ' + enemy.hp, 10, 30);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
  drawPlayer();
  if (enemy.hp > 0) {
    drawEnemy();
  }
  drawEnemyHP();
  requestAnimationFrame(gameLoop); // ループさせる
}

gameLoop(); // ゲームスタート
