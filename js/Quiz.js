class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("lightyellow");
    //write code to show a heading for showing the result of Quiz
    var result = createElement("h3");
    result.html("Quiz Results");
    result.position(425, 50);
    //call getContestantInfo( ) here
    allContestants.getPlayerInfo();
    if(allContestants !== undefined) {
      fill("blue");
      textSize(20);
      text("NOTE: Contestants who answered correctly are highlighted in green!", 130, 230);
      for(var plr in allContestants) {
        var correctAns = "2";
        var score = 0;
        if(correctAns === allContestants[plr].answer) {
          fill("green");
          score = 0;
        } else {
          fill("red");
          score = 2;
        }
        text(allContestants[plr].name + ": " + score, 350, 200);
      }
    }

    //write condition to check if contestantInfor is not undefined
    
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}


