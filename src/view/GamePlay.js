class GamePlay extends ui.GamePlayUI{
    constructor(){
        super();
        this._init();
    }

    _init(){
        Laya.stage.addChild(this);
        
        setTimeout(() => {
            this.removeSelf();
            new GameOver1()
        }, 1000);
    }
    
}