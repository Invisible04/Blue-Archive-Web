const __Variable = {
    UserInteract: false,
}

///////////////////////////////////////////////////////////////////// OBJECT /////////////////////////////////////////////////////////////////////

// _Status fuction is configuration for client
const _Status = {
    config: {
        mode: "Normal",     // Ex: Basic Mode => Mode Normal, Developer, Debug. Extra Mode => Game Master Mode, Management Mode, Security Mode (Default: Normal)
        version: 1.0,       // Version to keep system stability and balance (Default: v1.0)
        status: "Player",   // Status for account status. For example, if mode is Debug Mode, acoount will in Debug Status (Default: Player)
        log: []             // Every Progress, Alert, Warning, Error and Information will add into Log. (Max Limit: 100 Log)
    },
    progress: {
        infomation: false,
        permission: false,
        preloader: false,
        splashScreen: false,
        load: false,
    },
    action: {
        clearLog: (Confirmation) => {
            if(Confirmation === true){
                if(confirm("Do you really want to <b>delete</b> log data?") === true){
                    _Status.config.log = [];
                    localStorage.setItem("_ClientStatus",JSON.stringify(_Status.config));
                }else{
                    _Status.action.addLog([
                        "Info",
                        "Log Delete Action",
                        "Log deleting action has been cancelled in confimation mode by clicked cancel button!",
                        "Main.js > _Status > action > clearLog > if > if/else > addLog()",
                    ]);
                }
            }else if(Confirmation === false){
                _Status.config.log = [];
                localStorage.setItem("_ClientStatus",JSON.stringify(_Status.config));
            }
        },
        addLog: (Data = [type,title,message,location]) => {
            _Status.config.log.push({
                type: [0],
                title: [1],
                message: [2],
                location: [3],
            })
        }
    },
    create: (CONFIG) => {    // Create status for client
        let StatusExist = localStorage.getItem("_ClientStatus");

        if(StatusExist === null){
            localStorage.setItem("_ClientStatus",JSON.stringify(CONFIG));
        }else{
            _Status.action.addLog([
                "Info",
                "Status Create",
                "Status create cancelled because of status already exist!",
                "Main.js > _Status > create > else > addLog()",
            ]);
        }
    },
    check: (CONFIG) => {     // Check structure, version, mode, status and others
        
    },
    upgrade: (CONFIG) => {   // Change structure, version and others
        
    },
    modify: (CONFIG) => {    // Change mode, version and status
        
    },
};

//////////////////////////////////////////////////////////////////// FUNCTION ////////////////////////////////////////////////////////////////////

function PlayBgm(Path){
    const playAudio = setInterval(() => {
        const audio = new Audio(Path);

        audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audio.play()
            .then(() => {
                clearInterval(playAudio);
                return true;
            })
            .catch(error => {
                console.info('User has not interacted with this web yet.');
            });
    }, 1000);
}

function PlayMedia(){
    setTimeout(() => {
        __Element.splashScreen.style.display = "none";
        PlayBgm("Assets/Media/Preload/Audio/Videos/pv-a.ogg");
    },2000);
}

function ChangeUI(Mode){
    if(Mode == "START"){
        __Element.downloadBar.style.opacity = "0";
        __Element.loadingText.style.opacity = "0";
        __Element.loadingAni.style.opacity = "0";
        __Element.startText.style.opacity = "1";
        __Element.menuButton.style.display = "inherit";
    }else if(Mode == "DOWNLOAD"){
        __Element.downloadBar.style.opacity = "1";
        __Element.loadingText.style.opacity = "1";
        __Element.loadingAni.style.opacity = "1";
        __Element.startText.style.opacity = "0";
        __Element.menuButton.style.display = "none";
    }
}

function Fullscreen(){
    if(__Element.mainScreen.requestFullscreen) {
        __Element.mainScreen.requestFullscreen();
    }else if (__Element.mainScreen.webkitRequestFullscreen) { // Safari
        __Element.mainScreen.webkitRequestFullscreen();
    }else if (__Element.mainScreen.msRequestFullscreen) { // IE11
        __Element.mainScreen.msRequestFullscreen();
    }
};

///////////////////////////////////////////////////////////////////// EVENT /////////////////////////////////////////////////////////////////////

__Element.menuButton.addEventListener("click",() => {
    
});

__Element.fullScreenButton.addEventListener("click",() => {
    Fullscreen();
});

$("#ilbi-interface-box").on("click",function (e) { 
    if(e.target === this && _Status.progress.load === true){
        window.location.href = "home.html";
    }
});

$("#il-center-interface").on("click",function (e) { 
    if(e.target === this && _Status.progress.load === true){
        window.location.href = "home.html";
    }
});

$("#ilbitb-start-info-box").on("click",function (e) { 
    if(e.target === this && _Status.progress.load === true){
        window.location.href = "home.html";
    }
});

$("#ilbitb-start-info-box").on("click",function (e) { 
    if(e.target === this && _Status.progress.load === true){
        window.location.href = "home.html";
    }
});

$("#ilbiib-downloading-box").on("click",function (e) { 
    if(_Status.progress.load === true){
        window.location.href = "home.html";
    }
});

__Element.menuButton.addEventListener("click",() => {
    __Element.additionalLayer.classList.add("show");
    __Element.additionalLayer.classList.remove("hide");
});

__Element.menuCloseTab.addEventListener("click",() => {
    __Element.additionalLayer.classList.add("hide");
    __Element.additionalLayer.classList.remove("show");
});

__Element.ccBtn.addEventListener("click",() => {
    
});

__Element.igsiBtn.addEventListener("click",() => {
    
});

__Element.criBtn.addEventListener("click",() => {
    
});

__Element.diBtn.addEventListener("click",() => {
    
});

/////////////////////////////////////////////////////////////////////// RUN ///////////////////////////////////////////////////////////////////////

function RUN_MAIN(){
    __Element.mainScreen.style.display = "inherit";
    __Element.splashScreen.style.display = "none";
    __Element.videoOpening.playbackRate = 0.7;

    ChangeUI("DOWNLOAD");

    const ASSETS_TOOLS = {
        fixResources: () => {},
        updateResources: () => {},
        checkResources: () => {},
        loadResources: () => {
            const GAME_ENGINE = new GameEngine();
            const ASSET_MANAGER = new AssetManager();

            $.getJSON("System/Config/Data/AssetsLoad.json", {},
                function (data) {
                    let count = 0;

                    for (var key in data) {
                        if (!data.hasOwnProperty(key)) continue;

                        ASSET_MANAGER.queueDownload(data[key]);
                        count++;

                        if(Object.keys(data).length == count){
                            ASSET_MANAGER.downloadAll(() => {
                                const canvas = document.getElementById("_altar");
                                const ctx = canvas.getContext("2d");
                    
                                GAME_ENGINE.init(ctx);
                    
                                GAME_ENGINE.start();
                    
                                if(ASSET_MANAGER.isDone() === true){
                                    ChangeUI("START");
                                    _Status.progress.load = true;
                                }
                            });
                        }
                    }
                }
            );
        },
    }

    ASSETS_TOOLS.loadResources();
}

////////////////////////////////////////////////////////////////////// DEBUG //////////////////////////////////////////////////////////////////////
