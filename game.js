class Game{
    constructor(){

    }
    getState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState = data.val();
    });    

    }
    update(state){
      database.ref('/').update({
          gameState:state
      });
    
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getcount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("GAME START",120,100)
        Player.getplayerinfo();

        if(allplayers!== undefined){
         
            var position = 130;
          for(var plr in allplayers){
              if(plr==="player"+ player.index){
              fill("red");
              }
              else {
              fill("black");
              }
          
        
          
          position += 20
          text(allplayers[plr].name+ ":" + allplayers[plr].distance,120,position)
        }
        }
        if(keyIsDown(UP_ARROW)){
            player.distance+=50
            player.update();
            
        }
    }
    

   }    
   

