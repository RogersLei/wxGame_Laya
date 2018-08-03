const Loader = laya.net.Loader;
const Handler = laya.utils.Handler;
const WebGL = laya.webgl.WebGL;

const GameStartUI = ui.GameStartUI;
// const GameStartUI = ui.GameStartUI;
// const GameStartUI = ui.GameStartUI;
// const GameStartUI = ui.GameStartUI;

class Main {
    constructor() {
        init();
    }

    init() {
        Laya.MiniAdpter.init();
        Laya.init(480, 800, WebGL);
        Laya.stage.scaleMode = "showall";

        Laya.loader.load("res/atlas/images.atlas",Handler.create(this,this.gameStart))
    }

    gameStart(){
        const startPage = new GameStartUI();
        // startPage.
        Laya.stage.addChild(startPage);
    }
}

new Main()