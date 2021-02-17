class Core {
  constructor() {
    document.querySelector("#max").addEventListener("click", (e) => {
      document.querySelector("canvas").requestFullscreen();
    });
  }
  static createApp<T extends typeof Core>(): InstanceType<T> {
    return new this() as InstanceType<T>;
  }
}

export default Core;
