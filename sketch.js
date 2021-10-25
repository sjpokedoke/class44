var luna, lunastartimg;
var livesimg, life1, life2, life3, life4, life5;
var pumpkinsr, pumpkinsl, pumpkinsd, pumpkingroupr, pumpkingroupl, pumpkingroupd;
var lives = 5;
var score = 0;

function preload() {
  livesimg = loadImage("Images/Lives.png")

  lunastartimg = loadAnimation("Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png",  "Images/Luna 2.png", "Images/Luna 2.png", "Images/Luna 2.png")
}

function setup() {
  createCanvas(1400, 800);

  pumpkingroupr = new Group();
  pumpkingroupl = new Group();
  pumpkingroupd = new Group();

  luna = createSprite(700, 400);
  luna.addAnimation("lunastart", lunastartimg)

  life1 = createSprite(50, 30);
  life1.addImage("life1", livesimg)

  life2 = createSprite(100, 30);
  life2.addImage("life2", livesimg)

  life3 = createSprite(150, 30);
  life3.addImage("life3", livesimg)

  life4 = createSprite(200, 30);
  life4.addImage("life4", livesimg)

  life5 = createSprite(250, 30);
  life5.addImage("life5", livesimg)
}

function draw() {
  background("blue");
  pumpkin();

  if (pumpkinsr!== undefined) {
    if (pumpkinsr.x<600) {
      pumpkinsr.x = pumpkinsr.x+10;
    }
  }

  if (pumpkinsl!== undefined) {
    if (pumpkinsl.x>800) {
      pumpkinsl.x = pumpkinsl.x-10;
    }
  }

  if (pumpkinsd!== undefined) {
    if (pumpkinsd.y>500) {
      pumpkinsd.y = pumpkinsd.y-10;
    }
  }

  if (pumpkinsr!==undefined) {
    if(pumpkinsr.x>500&&pumpkinsr.x<800){
      for(var a=0; a<pumpkingroupr.length; a++){
           if(pumpkingroupr.isTouching(luna)){
             pumpkingroupr.get(a).destroy();
             lives = lives-1;
           }
       }
    }
    console.log(lives)
  }

  if (pumpkinsl!==undefined) {
    if(pumpkinsl.x>500&&pumpkinsl.x<820){
      for(var b=0; b<pumpkingroupl.length; b++){
        if(pumpkingroupl.isTouching(luna)){
          pumpkingroupl.get(b).destroy();
          lives = lives-1;
        }
    }
    }
  }

  if (pumpkinsd!==undefined) {
    console.log(pumpkinsd.y)
    if(pumpkinsd.y<550&&pumpkinsd.y>500){
      for(var c=0; c<pumpkingroupd.length; c++){
           if(pumpkingroupd.isTouching(luna)){
             pumpkingroupd.get(c).destroy();
             lives = lives-1;
           }
       }
    }
  }

  drawSprites();

  textSize(20);
  fill("white");
  textFont("Comic Sans")
  text("Score: "+score, 1250, 30)
}

function pumpkin() {
  if (frameCount%100===0) {
    var position = Math.round(random(1,3));
    console.log(position)

    if (position === 1) {
      pumpkinsr = createSprite(30, random(350, 500));
      pumpkinsr.shapeColor = "red";
      pumpkingroupr.add(pumpkinsr);
    }

    if (position === 2) {
      pumpkinsl = createSprite(1370, random(350, 500));
      pumpkinsl.shapeColor = "green";
      pumpkingroupl.add(pumpkinsl);
    }

    if (position === 3) {
      pumpkinsd = createSprite(random(640, 760), 750);
      pumpkinsd.shapeColor = "yellow";
      pumpkingroupd.add(pumpkinsd);
    }
  }
}



//link to game: https://www.google.com/doodles/halloween-2020
//Classes 43 onwards List of game ideas Thecodingtrain.com Codepen.io GitHub.com Gane assests Itch.io Shutter stock.com Vector stock.com Edit images Resize Webresizer.com Background to transparent Transparent.imageonline.co Photoscissors.com Cut sprite sheets Ezgif.com/sprite-cutter Sound 99sounds.org/free-sound-effects/ Soundable.com/royalty-free-sounds-1.html Freesound.org Game burp.com/free-game-sound-fx/