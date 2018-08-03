class GameOver2 extends ui.GameOver2UI{
    constructor(){
        super();
        this._init();
    }

    _init(){
        Laya.stage.addChild(this);
        
        this.btn_home.on(Event.MOUSE_UP,this,()=>{
            new GameStart();
        })  
        this.btn_play.on(Event.MOUSE_UP,this,()=>{
            this.removeSelf();
            new GamePlay();
        })
        this.btn_store.on(Event.MOUSE_UP,this,()=>{
            let parentPage = "GameOver2"
            this.removeSelf();
            new GameStore(parentPage);
        })      
        
    }
    
}