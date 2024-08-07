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

//Animation
function HomeAnimation(){
    //Event Icon
    const slider = __ELEMENT.EIItemBox();
    const slides = __ELEMENT.EIItems();
    const dotSlide = __ELEMENT.EIDot();

    let currentSlide = 0;
    let isDragging = false;
    let startY = 0;

    function showSlide(n) {
        let slideSize = 100;
        let counter = 0;
        let dotCounter = 0;
        
        slides[n].style.opacity = '1';
        dotSlide[n].classList.add("dot-selected");
        

        if(n == 0){
            slider.style.opacity = "0";
            slider.style.transition = "0s";
            slider.style.transform = "translateX(100%)";

            setTimeout(() => {
                slider.style.transition = "0.5s ease-out";
                slider.style.opacity = "1";
                slider.style.transform = "translateX(-" + (slideSize*n) + "%)";
            }, 300);
        }else{
            slider.style.transform = "translateX(-" + (slideSize*n) + "%)";
            slider.style.opacity = "1";
        }

        slides.forEach((slide) => {
            if(counter !== n){
                slide.style.opacity = "0";
            }
            counter++;
        });

        dotSlide.forEach((dot) => {
            if(dotCounter !== n){
                dot.classList.remove("dot-selected");
            }
            dotCounter++;
        });

        currentSlide = n;
    }

    function transitionSlide(direction) {
        const nextSlide = currentSlide + direction;
        if (nextSlide >= 0 && nextSlide < slides.length) {
            if(slides.length == (nextSlide + 1)){
                showSlide(nextSlide);
                return currentSlide = -1;
            }else{
                showSlide(nextSlide);
            }
        }
    }

    slider.addEventListener("mousedown", (eventMD) => {
        isDragging = false;
        let minPosition = 50;
        let maxPosition = 180;
        let slidePositionStart = document.body.offsetWidth - eventMD.clientX;
        
        window.addEventListener("mousemove", (eventMM) => {
            /*let slidePositionEnd = document.body.offsetWidth - eventMM.clientX;
            
            if(slidePositionStart >= minPosition && slidePositionStart <= maxPosition){
                console.log(slidePositionEnd - slidePositionStart);
                window.removeEventListener("mousemove",() => {});
            }*/
        });
        /*window.addEventListener("mousemove", (moveEvent) => {
            
        });
        
        window.addEventListener("mouseup", () => {
            
        });*/
    });

    function autoSlide() {
        setTimeout(() => {
            transitionSlide(1);
            autoSlide();
        },2000); // Change *000 for desired interval in milliseconds
    }


    showSlide(currentSlide);
    autoSlide();
}

HomeAnimation();

//Tools
function checkPopupType(Type,Layer){
    if(Layer == 1){
        if(Type == "window"){
            __ELEMENT.PS_CL_Window().style.display = "flex";
            __ELEMENT.PS_CL_Fullscreen().style.display = "none";
            __ELEMENT.PS_CL_Window().style.transform = "translateY(0%)"
        }else if(Type == "fullscreen"){
            __ELEMENT.PS_CL_Window().style.display = "none";
            __ELEMENT.PS_CL_Fullscreen().style.display = "inherit";
            __ELEMENT.PS_CL_Window().style.transform = "translateY(0%)"
        }
    }else if(Layer == 2){
        if(Type == "window"){
            __ELEMENT.PS_CL_Fullscreen().style.display = "inherit";
            __ELEMENT.PS_CL_Window().style.display = "flex";
            __ELEMENT.PS_CL_Window().style.transform = "translateY(-100%)"
        }else if(Type == "fullscreen"){
            //__ELEMENT.PS_CL_Window().style.display = "none";
            //__ELEMENT.PS_CL_Fullscreen().style.display = "inherit";
        }
    }
}

// Pyroxene Shop Function
function switchTab(TAB){
    if(TAB == "Pyroxene"){
        __ELEMENT.PSC_PS_PyroxeneBtn().classList.add("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PackagesBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_SpecialsBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PyroxeneBox().style.display = "inherit";
        __ELEMENT.PSC_PS_PackagesBox().style.display = "none";
        __ELEMENT.PSC_PS_SpecialsBox().style.display = "none";
    }else if(TAB == "Packages"){
        __ELEMENT.PSC_PS_PackagesBtn().classList.add("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PyroxeneBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_SpecialsBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PyroxeneBox().style.display = "none";
        __ELEMENT.PSC_PS_SpecialsBox().style.display = "none";
        __ELEMENT.PSC_PS_PackagesBox().style.display = "inherit";
    }else if(TAB == "Specials"){
        __ELEMENT.PSC_PS_PackagesBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PyroxeneBtn().classList.remove("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_SpecialsBtn().classList.add("cl5nb-tab-selected");
        __ELEMENT.PSC_PS_PyroxeneBox().style.display = "none";
        __ELEMENT.PSC_PS_SpecialsBox().style.display = "inherit";
        __ELEMENT.PSC_PS_PackagesBox().style.display = "none";
    }
}

///////////////////////////////////////////////////////////////////// EVENT /////////////////////////////////////////////////////////////////////

//Home Action [No Need To Change]
__ELEMENT.HS_UIHideBtn().addEventListener("click", () => {
    if(qs(".pibphb-unhide")){
        __ELEMENT.HS_UIHideBtn().classList.remove("pibphb-unhide");
        __ELEMENT.HS_UIHideBtn().classList.add("pibphb-hide");
        __ELEMENT.HS_UIHBIconHide().style.display = "none";
        __ELEMENT.HS_UIHBIconUnhide().style.display = "inherit";
    }else{
        __ELEMENT.HS_UIHideBtn().classList.remove("pibphb-hide");
        __ELEMENT.HS_UIHideBtn().classList.add("pibphb-unhide");
        __ELEMENT.HS_UIHBIconHide().style.display = "inherit";
        __ELEMENT.HS_UIHBIconUnhide().style.display = "none";
    }
});

__ELEMENT.HS_RecollectionSwitchBtn().addEventListener("click", () => {
    
});

// Navigation Tab Action
// Energy Action
__ELEMENT.HS_Nav_MainAddBtn()[0].addEventListener("click", () => { // Action In Windows Screen
    const config = {
        popup_type: "window",
        layer: 1,
    }

    const WS_EBAB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", WS_EBAB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("app-title-box");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-appurchase-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-ap-purchase");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };

    //Show Popup
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("app-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-appurchase-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.add("container-ap-purchase");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.AP_Purchase;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", WS_EBAB_Close);
});

__ELEMENT.PSF_Nav_EnergyBuyBtn().addEventListener("click", () => { // Action In Full Screen
    const config = {
        popup_type: "window",
        layer: 2,
    }

    const FS_EBAB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", FS_EBAB_Close);
        __ELEMENT.PS_CL_Window().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("app-title-box");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-appurchase-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-ap-purchase");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };

    //Show Popup
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("app-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-appurchase-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.add("container-ap-purchase");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.AP_Purchase;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", FS_EBAB_Close);
});

// Pyroxene Shop Action
__ELEMENT.HS_Nav_MainAddBtn()[1].addEventListener("click", () => { // Action In Windows Screen
    const config = {
        popup_type: "window",
        layer: 1,
    }

    const WS_PSAB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", WS_PSAB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("ps-title-box");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-pyroxene-shop-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-ap-purchase");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };

    //Show Popup
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("ps-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-pyroxene-shop-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-pyroxene-shop");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.Pyroxene_Shop;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", WS_PSAB_Close);
});

__ELEMENT.PSF_Nav_PyroShopBtn().addEventListener("click", () => { // Action In Full Screen
    const config = {
        popup_type: "window",
        layer: 2,
    }

    const FS_PSAB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", FS_PSAB_Close);
        __ELEMENT.PS_CL_Window().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("ps-title-box");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-pyroxene-shop-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-ap-purchase");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };

    //Show Popup
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("ps-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-pyroxene-shop-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-pyroxene-shop");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.Pyroxene_Shop;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", FS_PSAB_Close);
});

//Select Duty Action
__ELEMENT.HS_Nav_RecollectionBtn().addEventListener("click", () => {
    const config = {
        popup_type: "window",
        layer: 1,
    }

    const SelectDuty_AB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", SelectDuty_AB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("sdb-title");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-select-duty-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-select-duty");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };
    
    //Show Select Duty Box
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "flex";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("sdb-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-select-duty-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.add("container-select-duty");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.Select_Duty;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", SelectDuty_AB_Close);
});

//Mail Action
__ELEMENT.HS_Nav_MailBtn().addEventListener("click", () => {
    const config = {
        popup_type: "fullscreen",
        layer: 1,
    }

    const Mailbox_AB_Close = () => {
        __ELEMENT.PSF_Nav_CloseBtn().removeEventListener("click", Mailbox_AB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSF_Nav_TitleBox().classList.remove("mb-title-box");
        __ELEMENT.PSF_CAPPB_Box().classList.remove("clfb-mail-container");
        __ELEMENT.PSF_CAPPB_Box().innerHTML = "";
    };
    
    //Show Mail Box
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSF_Nav_TitleBox().classList.add("mb-title-box");
    __ELEMENT.PSF_CAPPB_Box().classList.add("clfb-mail-container");
    __ELEMENT.PSF_CAPPB_Box().innerHTML = STARTUP_PopupPage_Template.Mail;

    __ELEMENT.PSF_Nav_CloseBtn().addEventListener("click", Mailbox_AB_Close);
});

//Menu Action
__ELEMENT.HS_Nav_MenuBtn().addEventListener("click", () => {
    const config = {
        popup_type: "window",
        layer: 1,
    }

    const Menubox_AB_Close = () => {
        __ELEMENT.PSW_Nav_CloseBtn().removeEventListener("click", Menubox_AB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSW_Nav_TitleBox().classList.remove("mb2-title-box");
        __ELEMENT.PSW_CAPPB_Box().classList.remove("clwb-menu-box");
        __ELEMENT.PSW_CAPPB_ContentBox().classList.remove("container-menu");
        __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = "";
    };

    //Show Menu Box
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "flex";
    __ELEMENT.PSW_Nav_TitleBox().classList.add("mb2-title-box");
    __ELEMENT.PSW_CAPPB_Box().classList.add("clwb-menu-box");
    __ELEMENT.PSW_CAPPB_ContentBox().classList.add("container-menu");
    __ELEMENT.PSW_CAPPB_ContentBox().innerHTML = STARTUP_PopupPage_Template.Menu;

    __ELEMENT.PSW_Nav_CloseBtn().addEventListener("click", Menubox_AB_Close);
});

//Profile Action
__ELEMENT.HS_ProfileBtn().addEventListener("click", () => {
    const config = {
        popup_type: "fullscreen",
        layer: 1,
    }
    
    const Profile_AB_Close = () => {
        __ELEMENT.PSF_Nav_CloseBtn().removeEventListener("click", Profile_AB_Close);
        __ELEMENT.PS_CustomLayer().style.display = "none";
        __ELEMENT.PSF_Nav_TitleBox().classList.remove("pb-title-box");
        __ELEMENT.PSF_CAPPB_Box().classList.remove("clfb-profile-container");
        __ELEMENT.PSF_CAPPB_Box().innerHTML = "";
    };

    //Show Mail Box
    checkPopupType(config.popup_type,config.layer);
    __ELEMENT.PS_CustomLayer().style.display = "inherit";
    __ELEMENT.PSF_Nav_TitleBox().classList.add("pb-title-box");
    __ELEMENT.PSF_CAPPB_Box().classList.add("clfb-profile-container");
    //__ELEMENT.PSF_CAPPB_Box().innerHTML = STARTUP_PopupPage_Template.Profile;

    __ELEMENT.PSF_Nav_CloseBtn().addEventListener("click", Profile_AB_Close);

    /**__ELEMENT.CustomLayer().style.display = "inherit";
    __ELEMENT.CustomLayer().classList.add("profile-layer");
    __ELEMENT.CustomLayer().classList.add("custom-layer-full");
    __ELEMENT.CustomLayer().classList.remove("custom-layer");
    __ELEMENT.CustomFullProfileContainer().style.display = "flex";
    __ELEMENT.CustomBox().style.display = "none";
    __ELEMENT.CustomContainer().style.display = "none";
    __ELEMENT.CustomFullProfileContainer().display = "inherit";
    
    __ELEMENT.CustomFullTitleText().classList.add("profile-title-text");

    __ELEMENT.PSF_Nav_CloseBtn().addEventListener("click", () => {
        __ELEMENT.PSF_Nav_CloseBtn().removeEventListener("click", () => {});
        const CustomFullLayer = qs(".custom-layer-full");
        CustomFullLayer.style.display = "none";
        CustomFullLayer.classList.add("custom-layer");
        CustomFullLayer.classList.remove(tab_name + "-layer");
        CustomFullLayer.classList.remove("custom-layer-full");
        __ELEMENT.CustomBox.style.display = "inline";
        __ELEMENT.CustomContainer.style.display = "inherit";
        __ELEMENT.CustomFullProfileContainer.display = "none";
        __ELEMENT.CustomFullMailContainer.display = "none";
        
        __ELEMENT.CustomFullTitleText.classList.remove(tab_name + "-title-text");

        __ELEMENT.CustomFullBackBtn.removeEventListener("click", () => {});
    });**/
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
