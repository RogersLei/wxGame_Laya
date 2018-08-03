class GameStart extends ui.GameStartUI{
    constructor(){
        super();
        this._init();
    }

    _init(){
        Laya.stage.addChild(this);
        
        this.btn_play.on(Event.MOUSE_UP,this,()=>{
            this.removeSelf();
            new GamePlay();
        })
        this.btn_shop.on(Event.MOUSE_UP,this,()=>{
            let parentPage = "GameStart";
            this.removeSelf();
            new GameStore(parentPage);
        })
    }
    
}