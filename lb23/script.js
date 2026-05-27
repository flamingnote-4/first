let tileCount = 25
let picsRemaining = tileCount
let gameRunning = false

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
}

function initialize() {
    let matchPic = $("#matchPic")
    matchPic.draggable({
        containment: "body",
        snap: ".gamegrid > *",
        snapMode: "inner",

    })
    matchPic.position({
        at: "center",
        of: ".matchPicDock"
    })

    $(".statusbar p").hide()

    let gridSize = parseInt($("#gridsize").val())
    let category = $("#category").val()
    console.log(category)
    tileCount = gridSize**2

    let array = Array.from(Array(50).keys())
    shuffle(array)
    
    $(".gamegrid").css("grid-template-columns", `repeat(${gridSize}, minmax(30px, 1fr))`)

    picsRemaining = tileCount

    $(".gamegrid").empty()

    for (i = 1; i <= tileCount; i++) {
        let rng = Math.ceil(Math.random()*50)
        let element = $("<img>")
        element.attr("id", array[i])
        element.attr("src", `./assets/${category}/${element.attr("id")}.png`)
        element.css("order",rng)
        element.droppable({
            drop: function(event) {
                let n = $(event.target).attr("id")
                if (n == array[picsRemaining]) {
                    picsRemaining--
                    console.log("Found a pic")
                    $(event.target).attr("src", "./assets/empty.png")

                    if (picsRemaining == 0) {
                        matchPic.attr("src", "")
                        victory()
                    } else {
                        matchPic.position({
                            at: "center",
                            of: ".matchPicDock"
                        })
                        matchPic.attr("src", `./assets/${category}/${array[picsRemaining]}.png`)
                    }
                }
                $()
            }
        })
        $(".gamegrid").append(element)
    }

    matchPic.attr("src", `./assets/${category}/${array[picsRemaining]}.png`)
    matchPic.css("height", `${$(`#${array[1]}`).height()}px`)

    gameRunning = true
}
 
function victory() {
    $("#statusmsg").text("Ви виграли!")
    $("#statusmsg").addClass("win")
    $("#statusmsg").show()
    gameRunning = false
}

$(document).ready(function(){
    initialize()
})