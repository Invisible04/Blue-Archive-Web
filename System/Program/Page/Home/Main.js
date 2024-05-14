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

///////////////////////////////////////////////////////////////////// EVENT /////////////////////////////////////////////////////////////////////


// Navigation Tab Action
//Energy Action
__Elmnt.NavMainAddBtn[0].addEventListener("click", () => {
    __Elmnt.CustomLayer.style.display = "flex";
    __Elmnt.CustomBox.classList.add("ap-purchase-box");
    __Elmnt.CustomTitle.classList.add("appb-title");
    __Elmnt.CustomContainer.classList.add("appb-container");
    __Elmnt.CustomAPContainer.style.display = "grid";
    __Elmnt.CustomCloseBtn.addEventListener("click", () => {
        __Elmnt.CustomLayer.style.display = "none";
        __Elmnt.CustomBox.classList.remove("ap-purchase-box");
        __Elmnt.CustomTitle.classList.remove("appb-title");
        __Elmnt.CustomContainer.classList.remove("appb-container");
        __Elmnt.CustomAPContainer.style.display = "none";
    });
    __Elmnt.CustomAPCancelBtn.addEventListener("click", () => {
        __Elmnt.CustomLayer.style.display = "none";
        __Elmnt.CustomBox.classList.remove("ap-purchase-box");
        __Elmnt.CustomTitle.classList.remove("appb-title");
        __Elmnt.CustomContainer.classList.remove("appb-container");
        __Elmnt.CustomAPContainer.style.display = "none";
    });
});

//Pyroxene Shop Action
__Elmnt.NavMainAddBtn[1].addEventListener("click", () => {
    __Elmnt.CustomLayer.style.display = "flex";
    __Elmnt.CustomBox.classList.add("buy-pyroxene-box");
    __Elmnt.CustomTitle.classList.add("bpb-title");
    __Elmnt.CustomContainer.classList.add("bpb-container");
    __Elmnt.CustomPyroxeneShop.style.display = "inherit";
    __Elmnt.CustomCloseBtn.addEventListener("click", () => {
        __Elmnt.CustomLayer.style.display = "none";
        __Elmnt.CustomBox.classList.remove("buy-pyroxene-box");
        __Elmnt.CustomTitle.classList.remove("bpb-title");
        __Elmnt.CustomContainer.classList.remove("bpb-container");
        __Elmnt.CustomPyroxeneShop.style.display = "none";
    });
});

__Elmnt.CustomPSPyroxeneBtn.addEventListener("click", () => {
    __Elmnt.CustomPSPyroxeneBtn.classList.add("psnb-tab-selected");
    __Elmnt.CustomPSPackagesBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSSpecialsBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSPyroxeneBox.style.display = "inherit";
    __Elmnt.CustomPSPackagesBox.style.display = "none";
    __Elmnt.CustomPSSpecialsBox.style.display = "none";
});

__Elmnt.CustomPSPackagesBtn.addEventListener("click", () => {
    __Elmnt.CustomPSPackagesBtn.classList.add("psnb-tab-selected");
    __Elmnt.CustomPSPyroxeneBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSSpecialsBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSPyroxeneBox.style.display = "none";
    __Elmnt.CustomPSSpecialsBox.style.display = "none";
    __Elmnt.CustomPSPackagesBox.style.display = "inherit";
});

__Elmnt.CustomPSSpecialsBtn.addEventListener("click", () => {
    __Elmnt.CustomPSPackagesBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSPyroxeneBtn.classList.remove("psnb-tab-selected");
    __Elmnt.CustomPSSpecialsBtn.classList.add("psnb-tab-selected");
    __Elmnt.CustomPSPyroxeneBox.style.display = "none";
    __Elmnt.CustomPSSpecialsBox.style.display = "inherit";
    __Elmnt.CustomPSPackagesBox.style.display = "none";
});

//Select Duty Action
__Elmnt.NavRecollectionBtn.addEventListener("click", () => {
    __Elmnt.CustomLayer.style.display = "flex";
    __Elmnt.CustomBox.classList.add("select-duty-box");
    __Elmnt.CustomTitle.classList.add("sdb-title");
    __Elmnt.CustomContainer.classList.add("sdb-container");
    __Elmnt.CustomCloseBtn.addEventListener("click", () => {
        __Elmnt.CustomLayer.style.display = "none";
        __Elmnt.CustomBox.classList.remove("select-duty-box");
        __Elmnt.CustomTitle.classList.remove("sdb-title");
        __Elmnt.CustomContainer.classList.remove("sdb-container");
    });
});

//Menu Action
__Elmnt.NavMenuBtn.addEventListener("click", () => {
    __Elmnt.CustomLayer.style.display = "flex";
    __Elmnt.CustomBox.classList.add("menu-box");
    __Elmnt.CustomTitle.classList.add("mb-title");
    __Elmnt.CustomContainer.classList.add("mb-container");
    __Elmnt.CustomMenuContainer.style.display = "flex";
    __Elmnt.CustomCloseBtn.addEventListener("click", () => {
        __Elmnt.CustomLayer.style.display = "none";
        __Elmnt.CustomBox.classList.remove("menu-box");
        __Elmnt.CustomTitle.classList.remove("mb-title");
        __Elmnt.CustomContainer.classList.remove("mb-container");
        __Elmnt.CustomMenuContainer.style.display = "none";
    });
});

//Mail Action
__Elmnt.NavMailBtn.addEventListener("click", () => {
    __Elmnt.CustomLayer.style.display = "flex";
    __Elmnt.CustomLayer.classList.add("mail-layer");
    __Elmnt.CustomLayer.classList.add("custom-layer-full");
    __Elmnt.CustomLayer.classList.remove("custom-layer");
    __Elmnt.CustomBox.style.display = "none";
    __Elmnt.CustomContainer.style.display = "none";
    
    __Elmnt.CustomFullTitleText.classList.add("mail-nav-title-text");

    __Elmnt.CustomFullBackBtn.addEventListener("click", () => {
        const CustomFullLayer = qs(".custom-layer-full");
        CustomFullLayer.style.display = "none";
        CustomFullLayer.classList.remove("mail-layer");
        CustomFullLayer.classList.remove("custom-layer-full");
        CustomFullLayer.classList.add("custom-layer");
        __Elmnt.CustomBox.style.display = "inline";
        __Elmnt.CustomContainer.style.display = "inherit";
        
        __Elmnt.CustomFullTitleText.classList.remove("mail-nav-title-text");
    });
});

/////////////////////////////////////////////////////////////////////// RUN ///////////////////////////////////////////////////////////////////////

/*const tryToPlay = setInterval(() => {
    const audio = new Audio("Assets/Media/Preload/Audio/Bgm/Theme_34.ogg");

    audio.play()
        .then(() => {
            clearInterval(tryToPlay);
        })
        .catch(error => {
            console.info('User has not interacted with document yet.');
        });
}, 5000);*/

////////////////////////////////////////////////////////////////////// DEBUG //////////////////////////////////////////////////////////////////////
