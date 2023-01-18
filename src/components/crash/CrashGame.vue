<template>
  <canvas id="crash"></canvas>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const canvas = document.querySelector('#crash');
      const context = canvas.getContext('2d');

      canvas.width = 820;
      canvas.height = 450;

      const ball = { x: 20, y: canvas.height - 20, speed: 0.001, t: 0, radius: 17 };
      const bezierCurvePoints = [
        { x: ball.x, y: ball.y }, // start point
        { x: 140, y: canvas.height - 20 }, // first point curve
        { x: 600, y: canvas.height }, // second point curve
        { x: 750, y: canvas.height - 300 },
      ];
      const TIME_SCALE = 100;

      function drawBall() {
        const ballGradient = context.createLinearGradient(180, 0, 0, 160);
        ballGradient.addColorStop(0, '#FF4900');
        ballGradient.addColorStop(1, '#FFA480');
        context.fillStyle = ballGradient;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();
      }

      function drawText() {
        context.font = '105px Poppins';
        context.fillStyle = '#FF8C38';
        context.fillText(`${(ball.t * 10).toFixed(1)}x`, 340, 120);

        context.font = '23px Poppins';
        context.fillStyle = '#FFFFFF';
        context.fillText('Current payout', 340, 180);
      }

      function drawCurve() {
        const ballGradient = context.createLinearGradient(180, 0, 0, 160);
        ballGradient.addColorStop(0, '#FF4900');
        ballGradient.addColorStop(1, '#FFA480');
        context.beginPath();
        context.moveTo(20, canvas.height - 20);
        context.bezierCurveTo(ball.x, canvas.height - 20, ball.x, ball.y, ball.x, ball.y);
        context.lineWidth = 10;
        context.strokeStyle = ballGradient;
        context.stroke();
      }

      function moveBallInBezierCurve() {
        let [p0, p1, p2, p3] = bezierCurvePoints;

        let cx = 3 * (p1.x - p0.x);
        let bx = 3 * (p2.x - p1.x) - cx;
        let ax = p3.x - p0.x - cx - bx;

        let cy = 3 * (p1.y - p0.y);
        let by = 3 * (p2.y - p1.y) - cy;
        let ay = p3.y - p0.y - cy - by;

        let t = ball.t;
        ball.t += ball.speed;

        let xt = ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + p0.x;
        let yt = ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + p0.y;

        if (ball.t > 1) {
          ball.t = 1;
        }

        ball.x = xt;
        ball.y = yt;
        drawText();
        drawBall();
        drawCurve();
      }
      animation({
        clear() {
          context.clearRect(0, 0, canvas.width, canvas.height);
        },

        update() {},

        render() {
          moveBallInBezierCurve();
        },
      });

      function animation(obj) {
        const { clear, update, render } = obj;

        let pTimestamp = 0;

        requestAnimationFrame(tick);

        function tick(timestamp) {
          requestAnimationFrame(tick);

          const diff = timestamp - pTimestamp;
          pTimestamp = timestamp;
          const fps = 1000 / diff;
          const secondPart = diff / 1000;

          const params = [timestamp, pTimestamp, diff, fps, secondPart];

          update(secondPart);
          clear();
          render(params);
        }
      }
    });
  },
};
</script>

<style scoped lang="scss">
#crash {
  margin-top: 50px;
}
</style>
