//Declaration Element, Variable, Class, Function
const __Element = {
    splashScreen:  qs("#splash-screen"),
    mainScreen:  qs("#main-screen"),
    videoOpening:  qs("#ml-vid-op"),
    videoOpeningSrc:  qs("#ml-vid-op-src"),
    audioOpening:  qs("#ml-aud-op"),
    fullScreenButton:  qs("#ml-fullscreen-btn"),
    touchEnter:  qs("#ilbi-top-box"),
    loadingText:  qs("#ilbiibdbdt-loading-text"),
    loadingData:  qs("#ilbiibdbdt-loading-text-data"),
    loaderBar: qs("#ilbiibdb-downloading-in"),
    downloadBar:  qs("#ilbiibdb-downloading-out"),
    loadingAni:  qs("#ilbiibdbdt-loading-ani"),
    startText:  qs("#ilbi-top-box"),
    menuButton:  qs("#ilbiib-menu-btn"),
    additionalLayer: qs("#additional-layer"),
    menuCloseTab: qs("#menu-close-btn"),
    ccBtn: qs(".cc-btn"),
    igsiBtn: qs(".igsi-btn"),
    criBtn: qs(".cri-btn"),
    diBtn: qs(".di-btn")
}

const _Config = {
    language: "en",
    debug: false
}

const Language = {
    list: ["en","ms","id","ja","ko","th","tw"],
    current: navigator.languages,
    change: () => {
        
    }
}

/////////////////////////////////////////////////////////////////// SETUP ////////////////////////////////////////////////////////////////////

__Element.splashScreen.style.display = "inherit";
__Element.mainScreen.style.display = "none";

////////////////////////////////////////////////////////////////// FUNTION ///////////////////////////////////////////////////////////////////

function PreloadConfirmation(){
    Swal.fire({
        width: 550,
        title:"PRELOAD",
        html:`<div id="loader-box">
                <div id="loader-in"></div>
            </div>
            <p id="load-text">0%</p>`,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCloseButton: true,
        didOpen: () => {
            preloadAssets();
        },
    }).then((result) => {
        setTimeout(() => {
            RUN_MAIN();
        },2000);
        PlayMedia();
    });
}

/////////////////////////////////////////////////////////////////// RUN ///////////////////////////////////////////////////////////////////

//Set default view
setTimeout(() => {
    window.scrollTo(0, 0);
},100);

Swal.fire({
    width: 550,
    html: `<h2><b>INFO<b/></h2>
           <br>
           <h3>This web game is not an official Yostar game but it was built by myself (<u><a href="http://localhost/_Project/Invisible%20Official/#">Shadow77198</a></u>) as a prototype for fun. For play official game please download on <i>Play store</i> or <i>Apps Store</i></h3>
           <br>
           <h3>This web game need <u>stable connection</u> and <u>data cosume</u>.</h3>
           <br>
           <h3>Some of game feature may <i>restricted</i> by <i>browser policy</i>. This game need <i>permission</i> from user to allow listed feature</h3>`,
    confirmButtonText: "Okey",
    allowOutsideClick: false,
    allowEscapeKey: false
}).then((result1) => {
    Swal.fire({
        html: `<h2><b>PERMISSION LIST<b/></h2>
               <br/>
               <h4>Audio Autoplay<h4/>`,
        confirmButtonText: "Allow",
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then((result2) => {
        PreloadConfirmation();
    });
});

/////////////////////////////////////////////////////////////////// DEBUG ///////////////////////////////////////////////////////////////////
