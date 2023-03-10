import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartka.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","Cichanoc.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(0,115)
])

add([
   play("muzyka")
])

onUpdate(()=>{
    if(gwiazda.pos.x<600) gwiazda.pos.x ++
})

// keyRelease("space", ()=>{
//     play("muzyka")
// })
