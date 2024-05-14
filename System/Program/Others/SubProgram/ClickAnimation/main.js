let box = document.createElement("div");

box.id = "mouse_effects_box";
document.body.append(box);

window.document.onclick = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    let circle = document.createElement("div");

    circle.classList.add("click_effect");

    circle.style.top = y + "px";
    circle.style.left = x + "px";

    document.getElementById("mouse_effects_box").append(circle);
    
    setTimeout(() => {
        circle.remove();
    },300);
}
