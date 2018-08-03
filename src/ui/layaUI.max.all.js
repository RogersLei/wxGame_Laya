var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameBgUI=(function(_super){
		function GameBgUI(){
			

			GameBgUI.__super.call(this);
		}

		CLASS$(GameBgUI,'ui.GameBgUI',_super);
		var __proto__=GameBgUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameBgUI.uiView);

		}

		GameBgUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/tlodogameplaya-sheet0.png","height":800}},{"type":"Image","props":{"y":-800,"x":0,"width":480,"skin":"images/tlodogameplaya-sheet0.png","height":800}}]};
		return GameBgUI;
	})(View);
var GameIndexUI=(function(_super){
		function GameIndexUI(){
			

			GameIndexUI.__super.call(this);
		}

		CLASS$(GameIndexUI,'ui.GameIndexUI',_super);
		var __proto__=GameIndexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameIndexUI.uiView);

		}

		GameIndexUI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":-2,"x":-2,"width":480,"skin":"images/rotatescreenbg.png","height":800}},{"type":"Label","props":{"y":699,"x":170,"text":"加载中...","fontSize":40,"color":"#342e66"}}]};
		return GameIndexUI;
	})(Dialog);
var GameOver1UI=(function(_super){
		function GameOver1UI(){
			
		    this.btn_skip=null;

			GameOver1UI.__super.call(this);
		}

		CLASS$(GameOver1UI,'ui.GameOver1UI',_super);
		var __proto__=GameOver1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOver1UI.uiView);

		}

		GameOver1UI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/game_bg-sheet0.png","height":800}},{"type":"Image","props":{"y":640,"x":170,"width":140,"var":"btn_skip","skin":"images/btnplay-sheet0.png","height":140}},{"type":"Image","props":{"y":20,"x":30,"skin":"images/scorepanel-sheet0.png"}},{"type":"Image","props":{"y":460,"x":170,"width":140,"skin":"images/pole-sheet0.png","height":140}},{"type":"Image","props":{"y":120,"x":170,"width":140,"skin":"images/pole-sheet0.png","height":140}},{"type":"Image","props":{"y":290,"x":170,"width":140,"skin":"images/pole-sheet0.png","height":140}}]};
		return GameOver1UI;
	})(Dialog);
var GameOver2UI=(function(_super){
		function GameOver2UI(){
			
		    this.btn_play=null;
		    this.btn_home=null;
		    this.btn_store=null;

			GameOver2UI.__super.call(this);
		}

		CLASS$(GameOver2UI,'ui.GameOver2UI',_super);
		var __proto__=GameOver2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOver2UI.uiView);

		}

		GameOver2UI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/tlodogameplaya-sheet0.png","height":800}},{"type":"Image","props":{"y":20,"x":30,"skin":"images/scorepanel-sheet0.png"}},{"type":"Image","props":{"y":640,"x":170,"width":140,"var":"btn_play","skin":"images/btnplay-sheet0.png","height":140}},{"type":"Image","props":{"y":520,"x":190,"width":100,"var":"btn_home","skin":"images/btnbacktomain-sheet0.png","height":100}},{"type":"Image","props":{"y":400,"x":190,"width":100,"var":"btn_store","skin":"images/btnhats-sheet0.png","height":100}}]};
		return GameOver2UI;
	})(Dialog);
var GamePlayUI=(function(_super){
		function GamePlayUI(){
			
		    this.player_move=null;

			GamePlayUI.__super.call(this);
		}

		CLASS$(GamePlayUI,'ui.GamePlayUI',_super);
		var __proto__=GamePlayUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GamePlayUI.uiView);

		}

		GamePlayUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/game_bg-sheet0.png","height":800}},{"type":"Image","props":{"y":20,"x":30,"skin":"images/scorepanel-sheet0.png"}},{"type":"Clip","props":{"y":185,"x":174,"skin":"images/player-sheet0.png","index":0,"clipY":1,"clipX":7,"clipWidth":70,"clipHeight":110},"compId":11}],"animations":[{"nodes":[{"target":11,"keyframes":{"var":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":11,"key":"var","index":0},{"value":"clip_play","tweenMethod":"linearNone","tween":false,"target":11,"key":"var","index":1}],"index":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":1},{"value":2,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":2},{"value":3,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":3},{"value":4,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":4},{"value":5,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":5},{"value":6,"tweenMethod":"linearNone","tween":true,"target":11,"key":"index","index":6}]}}],"name":"player_move","id":1,"frameRate":24,"action":0}]};
		return GamePlayUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.btn_shop=null;
		    this.btn_play=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/coverbackground-sheet0.png","height":800}},{"type":"Image","props":{"y":171,"x":181,"width":139,"skin":"images/wozek-sheet0.png","height":229}},{"type":"Image","props":{"y":270,"x":70,"width":360,"skin":"images/logo-sheet0.png","height":240}},{"type":"Image","props":{"y":690,"x":40,"width":100,"var":"btn_shop","skin":"images/btnhats-sheet0.png","height":100}},{"type":"Image","props":{"y":124,"x":160,"skin":"images/highscore-sheet0.png"}},{"type":"Image","props":{"y":20,"x":140,"skin":"images/scorepanel-sheet0.png"}},{"type":"Image","props":{"y":650,"x":320,"width":140,"var":"btn_play","skin":"images/btnplay-sheet0.png","height":140}},{"type":"Image","props":{"y":110,"x":10,"width":480,"skin":"images/drutynacover-sheet0.png","height":200}}]};
		return GameStartUI;
	})(Dialog);
var GameStoreUI=(function(_super){
		function GameStoreUI(){
			
		    this.btn_back=null;

			GameStoreUI.__super.call(this);
		}

		CLASS$(GameStoreUI,'ui.GameStoreUI',_super);
		var __proto__=GameStoreUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStoreUI.uiView);

		}

		GameStoreUI.uiView={"type":"Dialog","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"images/game_bg-sheet0.png","height":800}},{"type":"Image","props":{"y":20,"x":30,"width":100,"var":"btn_back","skin":"images/btn_back_blue-sheet0.png","height":100}}]};
		return GameStoreUI;
	})(Dialog);