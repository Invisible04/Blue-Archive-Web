/* //DEFAULT
let config = {
    models: [],
    animations: [],
    selectedAni: "",
    loop: false,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    scale: 1
}
*/

let config = {
    models: [],
    animations: [],
    selectedAni: "",
    loop: false,
    width: 1366,
    height: 607,
    x: 646,
    y: 491,
    scale: 0.31
}

async function main() {
    // Init models
    let dataModels = await fetch("./system/program/script/others/spine/data/students.json").then(r => r.json());
    let counter = 0;

    for (var i in dataModels) {
        config.models[counter] = dataModels[i];
        counter++;
    }

    // Draggable Canvas
    let canvasScreen = document.getElementById("canvas-screen")
    let isDragging = false;
    let nowMouseX, nowMouseY;
    let lastMouseX, lastMouseY;
    let canvasX, canvasY;
    
    function updatePos() {
        if (isDragging)
            window.requestAnimationFrame(updatePos)
        if (!isCharacterLoaded)
            return;
        if (!nowMouseX || !nowMouseY)
            return;
        if ((nowMouseX == lastMouseX) && (nowMouseY == lastMouseY))
            return;
        // console.log(nowMouseX, lastMouseX, nowMouseY, lastMouseY)
        char.x = canvasX += parseInt(nowMouseX - lastMouseX)
        char.y = canvasY += parseInt(nowMouseY - lastMouseY)
        lastMouseX = nowMouseX
        lastMouseY = nowMouseY
    }

    function handleMove(e) {
        nowMouseX = e.clientX
        nowMouseY = e.clientY
    }

    function handleTouch(e) {
        handleMove(e.touches[0])
    }

    function handleMoveStart(e, type = "mousemove", func = handleMove) {
        // console.log("start", e)
        isDragging = true;
        canvasX = char.x;
        canvasY = char.y;
        nowMouseX = lastMouseX = e.clientX
        nowMouseY = lastMouseY = e.clientY
        window.requestAnimationFrame(updatePos)
        canvasScreen.addEventListener(type, func, { passive: true })
    }

    canvasScreen.onmousedown = handleMoveStart;

    canvasScreen.ontouchstart = function (e) {
        handleMoveStart(e.touches[0], "touchmove", handleTouch)
    }

    function handleMoveEnd(e, type = "mousemove", func = handleMove) {
        // console.log("end", e)
        isDragging = false;
        canvasScreen.removeEventListener(type, func)
        config.x = canvasX
        config.y = canvasY
    }

    canvasScreen.onmouseup = canvasScreen.onmouseout = handleMoveEnd

    canvasScreen.ontouchend = function (e) {
        handleMoveEnd(e.touches[0], "touchmove", handleTouch)
    }

    canvasScreen.onwheel = function (e) {
        char.scale.x = char.scale.y = config.scale = (config.scale - e.deltaY / 10000)
    }

    // Start
    async function updateCanvas(width, height) {
        width = width ? width : window.innerWidth;
        height = height ? height : window.innerHeight;
        //localStorage.setItem("blue-archive-res-width", width)
        //localStorage.setItem("blue-archive-res-height", height)
        config.width = width;
        config.height = height;

        if (!app) {
            audios = await fetch("./system/program/script/others/spine/data/studentsAudio.json").then(r => r.json())
            app = new PIXI.Application(
                {
                    width: width,
                    height: height,
                    backgroundColor: 0x000000,
                    transparent: true,
                    view: document.getElementById("canvas-screen")
                }
            );
        }
    }
    await updateCanvas(localStorage.getItem("blue-archive-res-width"), localStorage.getItem("blue-archive-res-height"));
    loadChar(config.models[8]);
}

main();
