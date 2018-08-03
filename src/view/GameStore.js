class GameStore extends ui.GameStoreUI{
    constructor(parentPage){
        super();
        this.parentPage = parentPage
        this._init();
    }

    _init(){
        Laya.stage.addChild(this);
        console.log(this.parentPage)
        
        this.btn_back.on(Event.MOUSE_UP,this,()=>{
            this.removeSelf();
            this.parentPage === "GameStart" ? new GameStart() : new GameOver2();
        })
    }
    
}