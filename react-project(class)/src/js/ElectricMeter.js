import Canvas from "./Canvas";

class ElectricMeter extends Canvas {
  constructor(ref) {
    super(ref);

    this.x = this.canvas.width / 2;
    this.y = Math.min(this.canvas.width, this.canvas.height) / 2;

    this.ctx.translate(this.x, this.y);
    this.ctx.font = "bold 16px sans-serif";
    this.ctx.textBaseline = "middle";

    this.radius = this.y;
    this.innerRadius = this.radius * 0.8;
    this.rotateAngle = 0;
    this.dividedCount = 0;
    this.dividedAngle = 0;
    this.KWs = [];
  }

  setRotateAngle(angle = 105) {
    this.rotateAngle = (angle * Math.PI) / 180;
  }

  convertToRadian(angle) {
    return (Math.PI / 180) * angle;
  }

  drawCircle() {
    this.dividedCount = 12;
    this.dividedAngle = Math.PI / (12 / 2);
    const {
      ctx: CTX,
      radius: RADIUS,
      rotateAngle: ROTATE_ANGLE,
      innerRadius: INNER_RADIUS,
      dividedAngle: ANGLE,
    } = this;
    const COLORS = [
      "#3ff9ba",
      "#56ffc2",
      "#6eff93",
      "#9eff86",
      "#ccfd84",
      "#fff575",
      "#fcd371",
      "#fc8375",
      "#ea5b69",
      "#f0166b",
    ];

    const LENGTH_COLOR = COLORS.length;

    for (let i = 0; i < 10; i += 1) {
      const START = ANGLE * i + ROTATE_ANGLE;
      const END = ANGLE * (i + 1) + ROTATE_ANGLE;
      CTX.fillStyle = COLORS[i % LENGTH_COLOR];

      CTX.beginPath();
      CTX.arc(0, 0, RADIUS, START, END);
      CTX.arc(0, 0, INNER_RADIUS, END, START, true);
      CTX.fill();
    }

    CTX.beginPath();
    CTX.arc(0, 0, INNER_RADIUS * 0.15, 0, Math.PI * 2);
    CTX.fillStyle = "#eee";
    CTX.fill();
  }

  drawText() {
    const {
      ctx: CTX,
      innerRadius: INNER_RADIUS,
      dividedAngle: ANGLE,
      rotateAngle: ROTATE_ANGLE,
    } = this;
    const KWS = Array.from({ length: 11 }, (value, idx) => idx);
    const KWS_LENGTH = KWS.length;
    CTX.fillStyle = "#818688";

    CTX.beginPath();

    for (let i = 0; i < KWS_LENGTH; i += 1) {
      const TEXT_ANGLE = this.convertToRadian(270 / 10) * i + ROTATE_ANGLE;
      const TEXT_WIDTH = CTX.measureText(KWS[i]).width;
      const TEXT_DISTANCE = INNER_RADIUS * 0.9;
      const TEXT_X =
        Math.cos(ANGLE + TEXT_ANGLE) * TEXT_DISTANCE - TEXT_WIDTH / 2;
      const TEXT_Y = Math.sin(ANGLE + TEXT_ANGLE) * TEXT_DISTANCE;

      CTX.fillText(KWS[i], TEXT_X, TEXT_Y);
    }

    const KW_WIDTH = CTX.measureText("KW").width / 2;

    CTX.fillText("KW", 0 - KW_WIDTH, INNER_RADIUS * 0.3);
  }

  init() {
    const { ctx: CTX, x: X, y: Y } = this;
    const { width, height } = this.canvas;

    CTX.clearRect(-X, -Y, width, height);
  }

  drawArrow(value) {
    const {
      ctx: CTX,
      innerRadius: INNER_RADIUS,
      dividedAngle: ANGLE,
      rotateAngle: ROTATE_ANGLE,
    } = this;

    const ARROW_LENGTH = INNER_RADIUS * 0.7;
    CTX.lineWidth = "2";

    CTX.beginPath();

    CTX.strokeStyle = "#818688";
    const VAL_X =
      Math.cos(
        ANGLE + (this.convertToRadian(270 / 10) * value + ROTATE_ANGLE)
      ) * ARROW_LENGTH;
    const VAL_Y =
      Math.sin(
        ANGLE + (this.convertToRadian(270 / 10) * value + ROTATE_ANGLE)
      ) * ARROW_LENGTH;

    CTX.moveTo(0, 0);
    CTX.lineTo(VAL_X, VAL_Y);
    CTX.stroke();
  }

  drawMeter(val) {
    this.init();
    this.setRotateAngle();
    this.drawCircle();
    this.drawText();
    this.drawArrow(val);
  }
}

export default ElectricMeter;
