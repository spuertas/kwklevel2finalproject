let distance = -40
let blocks = 0
const SCENE = document.querySelector("a-scene")

const colors = [
  "red",
  "powderblue",
  "blue",
  "yellow",
  "pink", 
  "green", 
  "dodgerblue",
  "grey"
]

//let start = false;
function startButton() {
    var startGame = document.getElementById("start");
    startGame.setAttribute("visible","false");
}

function makeBlocksRight(){
    //create new box
    console.log("here")
    const newBlock = document.createElement('a-box')
    // const color = "blue"
    // const coords = {x: 2.709, y: 1, z: -100}
    
    newBlock.setAttribute("height", "10")
    newBlock.setAttribute("depth", "20")
    newBlock.setAttribute("color", colors[Math.floor(Math.random()*colors.length)]) //RANDOMLY SELECTING COLORS
    //newBlock.setAttribute("src", "tree.jpg")
    newBlock.object3D.position.set(2.709, 1, -100);
    newBlock.setAttribute("visible", "true")
    document.querySelector('a-scene').appendChild(newBlock)
    return newBlock
}



function addAnimation(thingabob){
    //add animation to box
    const newAnim = document.createElement('a-animation')
    newAnim.setAttribute("attribute", "position")
    newAnim.setAttribute("dur", "25000")
    newAnim.setAttribute("from", [2.709, 1, distance].join(" "))
    newAnim.setAttribute("to", [3.306, 1, 200].join(" "))
    newAnim.setAttribute("repeat", "indefinite")
    return thingabob.appendChild(newAnim)
}



 while (blocks < 100){
    addAnimation(makeBlocksRight())
    distance-=25
    blocks++
}
console.log("Helloaosfiosidf")

// addAnimation(makeBlocks())
// distance-=50
// addAnimation(makeBlocks())


// TREADMILL GROUP
// Video Sphere
// -https://www.youtube.com/watch?v=G3uILsX2dYA
// 30 min work out video
// -https://www.youtube.com/watch?v=dCjt9eptadI
// Manually code in blocks
// -code in atom