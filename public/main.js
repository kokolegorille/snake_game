// START OF GAME

import { World, Direction } from "snake_game"

const CELL_SIZE = 10
const WORLD_WIDTH = 32
const snakeSpawnIdx = Date.now() % (WORLD_WIDTH * WORLD_WIDTH)

const world = World.new(WORLD_WIDTH, snakeSpawnIdx)
const worldWidth = world.width()

const canvas = document.getElementById("snake-canvas")
const ctx = canvas.getContext("2d")

canvas.height = worldWidth * CELL_SIZE
canvas.width = worldWidth * CELL_SIZE

document.addEventListener("keydown", e => {
  switch(e.code) {
    case "ArrowUp":
      world.change_snake_dir(Direction.Up)
      break
    case "ArrowDown":
      world.change_snake_dir(Direction.Down)
      break
    case "ArrowRight":
      world.change_snake_dir(Direction.Right)
      break
    case "ArrowLeft":
      world.change_snake_dir(Direction.Left)
      break
  }
})

const drawWorld = () => {
  ctx.beginPath();

  // for (let x = 0; x < worldWidth + 1; x++) {
  //   ctx.moveTo(CELL_SIZE * x, 0)
  //   ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)
  // }

  // for (let y = 0; y < worldWidth + 1; y++) {
  //   ctx.moveTo(0, CELL_SIZE * y)
  //   ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y)
  // }

  [...Array(worldWidth + 1)].forEach((_, x) => {
    ctx.moveTo(CELL_SIZE * x, 0)
    ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)
  });

  [...Array(worldWidth + 1)].forEach((_, y) => {
    ctx.moveTo(0, CELL_SIZE * y)
    ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y)
  });

  ctx.stroke();
}

const drawSnake = () => {
  const snakeIdx = world.snake_head_idx()
  const col = snakeIdx % worldWidth
  const row = Math.floor(snakeIdx / worldWidth)

  ctx.beginPath()
  ctx.fillRect(
    col * CELL_SIZE,
    row * CELL_SIZE,
    CELL_SIZE,
    CELL_SIZE
  )
  ctx.stroke()
}

const paint = () => {
  drawWorld()
  drawSnake()
}

const update = () => {
  const fps = 10
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    world.update()
    paint()
    requestAnimationFrame(update)
  }, 1000 / fps)
}

paint()
update()



// THIS WORKS WITHOUT ADDING PKG TO PACKAGE.JSON

// async function init() {
//     let rustApp = null
//     try {
//       rustApp = await import('../pkg')
//     } catch(err) {
//       console.error(err)
//       return;
//     }
//     console.log(rustApp)
// }  
// init()


// THIS WORKS WITH ADDING PKG TO PACKAGE.JSON

// import { greet } from "snake_game"
// greet("Koko")