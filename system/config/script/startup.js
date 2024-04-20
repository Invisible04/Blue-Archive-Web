const splashScreen = qs("#splash-screen");

//Set Default scroll point
setTimeout(() => {
    window.scrollTo(0, 0);
},100);

//Get Web Language
//alert(navigator.languages);

switch(navigator.languages){
    case "ms":
        
        break;

    case "en":
        
        break;

    case "id":
        
        break;
    
    default:
        break;
}

//Setting Configuration

//Start Up
/**/
function PreloadStartUp(){
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
        splashScreen.style.display = "inherit";
        setTimeout(() => {
            _MainScript();
        },2000);
        mediaRun();
    });
}



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
        PreloadStartUp()
    });
});/**/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DEBUG ZONE

/**
 * 
 * @param {*} MODE Turn ON or OFF debug mode (Use: ON or OFF)
  */
const __DEBUGMOD = (MODE) => {
    if(MODE == "ON"){
        sessionStorage.setItem("DEBUG MODE","ON");
    }else if(MODE == "OFF"){
        sessionStorage.setItem("DEBUG MODE","OFF");
    }else{
        console.log("DEBUG MODE NOT UNDEFINED");
    }
};