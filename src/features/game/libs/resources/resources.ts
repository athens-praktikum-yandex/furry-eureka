type ResourceCache = Record<string, CanvasImageSource>;

export class Resources {
  private readyCallbacks: any[] = [];

  private resourceCache: ResourceCache = {};

  private static __instance: Resources;

  private arrayLength: number = 0;

  fullyLoaded: boolean = false;

  constructor() {
    if (Resources.__instance) {
      return Resources.__instance;
    }
    Resources.__instance = this;
  }

  load(urlOrArr: string | string[]) {
    if (urlOrArr instanceof Array) {
      this.arrayLength = urlOrArr.length;
      urlOrArr.forEach((url) => {
        this._load(url);
      });
    } else {
      this._load(urlOrArr);
    }
  }

  _load(url: string) {
    if (this.resourceCache[url]) {
      return this.resourceCache[url];
    }
    const img = new Image();
    img.onload = () => {
      this.resourceCache[url] = img;
      if (this.isReady()) {
        this.fullyLoaded = true;
        this.readyCallbacks.forEach((func) => {
          func();
        });
      }
    };
    img.src = url;
    return this;
  }

  get(url: string) {
    return this.resourceCache[url];
  }

  isReady() {
    let ready = true;
    const aUrls = Object.keys(this.resourceCache);

    if (aUrls.length !== this.arrayLength) {
      ready = false;
    }
    aUrls.forEach((url) => {
      if (aUrls.includes(url) && !this.resourceCache[url]) {
        ready = false;
      }
    });
    return ready;
  }

  onReady(func: () => void) {
    this.readyCallbacks.push(func);
  }
}
