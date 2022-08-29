let playerState = 'duck';
let animation = document.getElementById('animation');
animation.addEventListener('change', function(e){
  playerState = e.target.value;
});

//creta our canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGTH = canvas.height = 300;

//create the image
const playerImage = new Image();
playerImage.src = "images/adventurer.png";

//width and height, stagerFrames, gameFrame
const spriteWidth = 50;
const spriteHeight = 37;
let gameFrame = 0;
let stagerFrames = 15;


//animationStates
const animationStates = [];

//spriteAnimations
const spriteAnimation = [
  {
    name: 'duck',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'twirl',
    frames: 7,
  },
  {
    name: 'slide',
    frames: 7,
  },
  {
    name: 'superMan',
    frames: 7,
  },
  {
    name: 'getSword',
    frames: 7,
  },
  {
    name: 'swing1',
    frames: 7,
  },
  {
    name: 'swing2',
    frames: 7,
  },
  {
    name: 'swing3',
    frames: 7,
  },
  {
    name: 'swing4',
    frames: 7,
  },
  {
    name: 'hideSword',
    frames: 7,
  },
  {
    name: 'superMan2',
    frames: 7,
  },
  {
    name: 'stab',
    frames: 7,
  },
  {
    name: 'swing5',
    frames: 7,
  },
  {
    name: 'swing6',
    frames: 7,
  },
  {
    name: 'swing7',
    frames: 4,
  },
  {
    name: 'twirl2',
    frames: 7,
  },
  {
    name: 'twirl3',
    frames: 5,
  }
];

//spriteAnimation For each
spriteAnimation.forEach((state, index) =>{
  let frames = {
    loc : [],
 }
  for (let i = 0; i < state.frames; i++ ){
    let positionX = i * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({x: positionX, y: positionY});
  }
  animationStates[state.name] = frames; 
});

console.log(animationStates);

//create the animation function
function animate(){
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGTH);
  
  //create the position
  let position = Math.floor(gameFrame/stagerFrames) % animationStates[playerState].loc.length;
  //create our framX and framY
  let frameX = spriteWidth * position;
  let frameY = animationStates[playerState].loc[position].y;
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
  
  gameFrame++;
  requestAnimationFrame(animate);
}; 
animate();
