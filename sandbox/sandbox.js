class Sandbox {

  constructor() {

    let fakewindow = Object.create(null);
    let rawWindow = window;

    // 沙箱新增的全局变量
    this.addedPropsMapInSandbox = new Map();
    // 沙箱期间更新的全局变量
    this.modifiedPropsMapInSandbox = new Map();
    // 沙箱期间新增和修改的全局变量map，用于任意时刻的 snapshot
    this.currentUpdatesMapInSandbox = new Map();

    let target = this;

    this.proxy = new Proxy(fakewindow, {
      set(_, property, value) {

        //window 上不存在的属性，视为新增
        if (!rawWindow[property]) {
          target.addedPropsMapInSandbox.set(property, value);
        }

        //window 上存在的属性，视为修改
        if (rawWindow.hasOwnProperty(property)) {
          target.modifiedPropsMapInSandbox.set(property, value);
        }

        //记录当前状态的快照，以便任何是个还原沙箱状态
        target.currentUpdatesMapInSandbox.set(property, value);

        rawWindow[property] = value;
        return true;
      },
      get(_, property) {
        return window[property];
      },
    });
  }

  active(){
    this.currentUpdatesMapInSandbox.forEach((value, key) => {
      window[key] = value;
    });
  }

  inActive(){
    this.addedPropsMapInSandbox.forEach((value, key) => {
      delete window[key];
    });
    this.modifiedPropsMapInSandbox.forEach((value, key) => {
      delete window[key];
    });
  }
}
