class Canvas {
  constructor(ref) {
    this.canvas = ref.current;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const { width: WIDTH, height: HEIGHT } = this.canvas;

    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
}

export default Canvas;
