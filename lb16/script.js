var i;

// для завдання 1
let pictures = document.getElementsByClassName("task1");
i = 0;

for (i = 0; i < pictures.length; i++) {
    let pic = pictures[i];
    pic.onclick = function() {
        console.log("Завдання 1 | width: "+pic.getAttribute("width"));
    };
};

// для завдання 2
let links = document.getElementsByClassName("task2");
i = 0;

for (i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener("pointerenter", function func(e) {
        link.removeEventListener("pointerenter", func) // в addListener є опція once
        console.log("Завдання 2 | додано EventListener для "+link.getAttribute("href"))
        link.setAttribute("title", link.getAttribute("href"))
    })
};

// для завдань 3 та 4
let allInputs = document.getElementsByTagName("input")
i = 0

for (i = 0; i < allInputs.length; i++) {
    let input = allInputs[i]
    let shouldAlert = false
    input.onclick = function() {
        let value = input.getAttribute("value")

        // 3
        if (input.className == "task3") {
            document.getElementById("demo").innerText = input.getAttribute("value")
        }
        
        // 4
        if (shouldAlert) {
            alert(value)
        } else {
            console.log("Завдання 4 | " + value)
            shouldAlert = true
        }
    }
}

// для завдання 5
let paragraphs = document.getElementsByClassName("task5")
i = 0

for (i = 0; i < paragraphs.length; i++) {
    let paragraph = paragraphs[i];
    paragraph.onclick = function() {
        paragraph.innerHTML = Math.pow(parseInt(paragraph.id), 2)
    }
};

// для завдання 6
let divs = document.getElementsByTagName("div")
let states = []
i = 0

for (i = 0; i < divs.length; i++) {
    let div = divs[i];

    states[i] = true;
    let state = states[i]

    div.onclick = function() {
        state = !state
        let color
        if (state) {
            color = "lime"
        } else {
            color = "red"
        }
        div.setAttribute("style", "background-color: "+color)
    }
};
