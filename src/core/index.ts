class Core {
  constructor() {
    alert("teste");
  }
  static createApp<T extends typeof Core>(): InstanceType<T> {
    return new this() as InstanceType<T>;
  }
}

export default Core;
