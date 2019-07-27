<template>
  <div>
    <canvas id="myCanvas" width="500" height="500"></canvas>
  </div>
</template>
<script>
export default {
  name: "Clock",
  mounted() {
    this.myCanvas();
  },
  methods: {
    myCanvas() {
      // < !--取出Canvas元素 -->
      var myCanvas = document.getElementById("myCanvas");
      // 设置canvas执行期上下文  相当于设置画笔
      var ctx = myCanvas.getContext("2d");
      // 定义基本颜色值  画笔大小 阴影颜色 阴影半径
      // 画笔颜色
      ctx.strokeStyle = "#00ffff";
      // 画笔宽度
      ctx.lineWidth = 10;
      // 阴影半径
      ctx.shadowBlur = 9;
      // 阴影颜色
      ctx.shadowColor = "#ffffff";
      // 渲染时间
      function renderTime() {
        // 获取当前时间
        var date = new Date();
        // 年月日
        var today = date.toDateString();
        // 当前时间
        var time = date.toLocaleDateString();
        // 时分秒
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        // 获得毫秒
        var ms = date.getMilliseconds();
        // 秒数为当前秒数加上毫秒除以1000
        var smoothsec = s + ms / 1000;
        // 分钟为获取到当前分加上描述/60
        var smoothmin = m + smoothsec / 60;
        // 背景
        // createRadialGradient() 方法创建放射状/圆形渐变对象
        this.gradient = ctx.createRadialGradient(150, 150, 5, 150, 150, 200);
        // addColorStop() 方法规定渐变对象中的颜色和位置 0 ~ 1
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(1, "#fff");
        // 将设置好的渐变背景作为填充背景
        ctx.fillStyle = gradient;
        // 绘制正方形
        ctx.fillRect(0, 0, 300, 300);
        // 小时
        ctx.beginPath();
        // 每一个格代表 360 /12 = 30  画弧 代表圆心开始弧度  结束角度
        ctx.arc(150, 150, 120, degToRad(270), degToRad(h * 30 - 90));
        // 描边
        ctx.stroke();
        // 分钟
        ctx.beginPath();
        // 每一个格代表 360 / 59 = 6
        ctx.arc(150, 150, 100, degToRad(270), degToRad(smoothmin * 6 - 90));
        ctx.stroke();
        //  秒
        ctx.beginPath();
        // 每一个格代表 360 / 60 = 6
        ctx.arc(150, 150, 80, degToRad(270), degToRad(smoothsec * 6 - 90));
        ctx.stroke();
        //Date   填写日期
        ctx.font = "15px Helvetica";
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillText(today, 100, 150);
        //Time   填写时间
        ctx.font = "15px Helvetica Bold";
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        var h = ("0" + h).slice(-2);
        var m = ("0" + m).slice(-2);
        var s = ("0" + s).slice(-2);
        ctx.fillText(h + ":" + m + ":" + s + ":" + ms, 175, 280);
      }
      // 每隔40ms渲染canvas
      setInterval(renderTime, 40);
      // 角度转弧度  弧度 = 角度 * Math.PI / 180
      function degToRad(degree) {
        var factor = Math.PI / 180;
        return degree * factor;
      }
    }
  }
};
</script>
<style scoped>
canvas {
  /* position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -250px;
		margin-left: -250px; */
}
</style>

