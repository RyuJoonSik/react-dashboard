import Canvas from "./Canvas";

class LineChart extends Canvas {
  static instance;

  constructor(ref) {
    if (LineChart.instance) {
      return LineChart.instance;
    }

    super(ref);
    this.ctx.font = "bold 16px sans-serif";
    this.ctx.fillStyle = "#aaa";

    this.rectX = this.canvas.width * 0.05;
    this.rectY = this.canvas.height * 0.1;
    this.rectW = this.canvas.width * 0.9;
    this.rectH = this.canvas.height * 0.7;

    this.row = 4;
    this.spaceY = this.rectH / this.row;
    this.col = 24;
    this.spaceX = this.rectW / this.col;

    LineChart.instance = this;
  }

  drawRect() {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      rectW: RECT_W,
      rectH: RECT_H,
    } = this;

    CTX.strokeStyle = "#ddd";
    CTX.lineWidth = 2;

    CTX.beginPath();
    CTX.rect(RECT_X, RECT_Y, RECT_W, RECT_H);
    CTX.stroke();
  }

  drawHorizon() {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      rectW: RECT_W,
      rectH: RECT_H,
      row: ROW,
    } = this;
    const SPACE_Y = RECT_H / ROW;

    CTX.beginPath();

    for (let i = 1; i < ROW; i += 1) {
      CTX.moveTo(RECT_X, RECT_Y + SPACE_Y * i);
      CTX.lineTo(RECT_X + RECT_W, RECT_Y + SPACE_Y * i);
    }

    CTX.stroke();
  }

  drawVertical() {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      rectW: RECT_W,
      rectH: RECT_H,
      col: COL,
    } = this;
    const SPACE_X = RECT_W / COL;

    CTX.beginPath();

    for (let i = 1; i < COL; i += 1) {
      CTX.moveTo(RECT_X + SPACE_X * i, RECT_Y);
      CTX.lineTo(RECT_X + SPACE_X * i, RECT_Y + RECT_H);
    }

    CTX.stroke();
  }

  drawValueText() {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      spaceY: SPACE_Y,
      row: ROW,
    } = this;
    const VALUES = Array.from(
      { length: 4 },
      (value, idx) => (idx + 1) * 4
    ).reverse();
    CTX.textBaseline = "middle";

    CTX.beginPath();

    for (let i = 0; i < ROW; i += 1) {
      const VALUE = CTX.measureText(VALUES[i]);

      CTX.fillText(VALUES[i], RECT_X - VALUE.width - 5, RECT_Y + SPACE_Y * i);
    }
  }

  drawTimeText() {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      rectH: RECT_H,
      spaceX: SPACE_X,
      col: COL,
    } = this;
    const TIMES = Array.from({ length: 24 }, (value, idx) => idx);
    CTX.textBaseline = "top";

    CTX.beginPath();

    for (let i = 0; i < COL; i += 1) {
      const TIME = CTX.measureText(TIMES[i]);

      CTX.fillText(
        TIMES[i],
        RECT_X + SPACE_X * i - TIME.width / 2,
        RECT_Y + RECT_H + 5
      );
    }
  }

  drawChart() {
    this.drawRect();
    this.drawHorizon();
    this.drawVertical();
    this.drawValueText();
    this.drawTimeText();
  }

  drawDot(time, value) {
    const {
      ctx: CTX,
      rectX: RECT_X,
      rectY: RECT_Y,
      rectW: RECT_W,
      rectH: RECT_H,
    } = this;
    const totalX = RECT_W;
    const totalY = RECT_H;
    const dotX = (totalX / 86400) * time + RECT_X;
    const dotY = totalY - (value * totalY) / 16 + RECT_Y;

    CTX.fillStyle = "#389fca";
    CTX.beginPath();
    CTX.arc(dotX, dotY, 2, 0, Math.PI * 2);
    CTX.fill();
  }
}

export default LineChart;
