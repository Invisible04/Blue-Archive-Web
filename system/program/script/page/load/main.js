const mainScreen = qs("#main-screen");
const MLVideoOpening = qs("#ml-vid-op");
const MLAudioOpening = qs("#ml-aud-op");
const MLVideoOpeningSrc = qs("#ml-vid-op-src");
const fullScreenModeBtn = qs("#ml-fullscreen-btn");
const UI_LoadingText = document.getElementById("ilbiibdbdt-loading-text");
const UI_LoadingTextData = document.getElementById("ilbiibdbdt-loading-text-data");

const checkStatus = () => {
    /**
     * FUNCTIONS
     * - Check Resources
     * - Check Update/New Resources
     * - Check Corrupt Resources
     */
    let configData = {
        "log":[],
        "status":"",
        "version":"",
        "corrupt":[]
    };

    configData.log = ["System: Checking Data => [COMPLETE]"];
    configData.status = "DOWNLOAD"; //or START
    configData.version = "1.0.0";
    configData.corrupt = [];

    return configData;
};

let resConfig = checkStatus();

const createAudio = (audioPath) => {
    const playAudio = setInterval(() => {
        const audio = new Audio(audioPath);

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

const mediaRun = () => {
    setTimeout(() => {
        splashScreen.style.display = "none";
        createAudio("assets/media/preload/Audio/Videos/pv-a.ogg");
        setTimeout(() => {
            mainScreen.style.display = "inherit";
            checkStatus();
        },300);
    },2000);
};

const setInterface = (_DEBUG_STATUS) => {
    const UI_DownloadBar = document.getElementById("ilbiibdb-downloading-out");
    const UI_LoadingAni = document.getElementById("ilbiibdbdt-loading-ani");
    const UI_StartText = document.getElementById("ilbi-top-box");
    const UI_MenuBtn = document.getElementById("ilbiib-menu-btn");

    //DEBUG SECTION
    if(_DEBUG_STATUS == "START"){
    
        UI_DownloadBar.style.opacity = "0";
        UI_LoadingText.style.opacity = "0";
        UI_LoadingAni.style.opacity = "0";
        UI_StartText.style.opacity = "1";
        UI_MenuBtn.style.display = "inherit";
    }else if(_DEBUG_STATUS == "DOWNLOAD"){
    
        UI_DownloadBar.style.opacity = "1";
        UI_LoadingText.style.opacity = "1";
        UI_LoadingAni.style.opacity = "1";
        UI_StartText.style.opacity = "0";
        UI_MenuBtn.style.display = "none";
    }
/*
        if(resConfig.status == "START"){
            console.log(resConfig.status);
    
            UI_DownloadBar.style.opacity = "0";
            UI_LoadingText.style.opacity = "0";
            UI_LoadingAni.style.opacity = "0";
            UI_StartText.style.opacity = "1";
            UI_MenuBtn.style.display = "inherit";
        }else if(resConfig.status == "DOWNLOAD"){
            console.log(resConfig.status);
    
            UI_DownloadBar.style.opacity = "1";
            UI_LoadingText.style.opacity = "1";
            UI_LoadingAni.style.opacity = "1";
            UI_StartText.style.opacity = "0";
            UI_MenuBtn.style.display = "none";
        }
*/
};

const enterHome = () => {
    document.body.addEventListener("click",() => {
        window.location.href = "home.html";
    });
};

function _MainScript(){
    let userTouchCheck = false;

    //Setup
    mainScreen.style.display = "none";
    splashScreen.style.display = "none";
    MLVideoOpening.playbackRate = 0.7;

    setInterface("DOWNLOAD");

    //Function
    /**/function openFullscreen(){
        if(mainScreen.requestFullscreen) {
            mainScreen.requestFullscreen();
        }else if (mainScreen.webkitRequestFullscreen) { // Safari
            mainScreen.webkitRequestFullscreen();
        }else if (mainScreen.msRequestFullscreen) { // IE11
            mainScreen.msRequestFullscreen();
        }
    };

    fullScreenModeBtn.addEventListener("click",() => {
        openFullscreen();
    });/**/

    const fixCorruptRes = () => {

    };

    const getNewUpdateRes = () => {

    };

    const loadImgAssets = () => {
        const gameEngine = new GameEngine();
        const ASSET_MANAGER = new AssetManager();

        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_AronaRoom_In.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_AronaRoom.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_Black.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_BuildingFrontGate.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CityDowntown.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CityOffice_kr.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CityOffice.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CityTown_kr.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CityTown.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CraftChamber_Night.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CraftChamber.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Abydos_01_Letter.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona_01.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona_02.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona_03.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona_04.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona_05.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona2_01.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona2_02.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona2_03.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona2_04.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Arona3_01.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Gehenna_01_Letter.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Gehenna_02_Letter.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Gehenna_03_Letter.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_00.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_01.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_02_kr.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_02.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_07.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_08.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_09.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_10.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_11.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_12.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_13_1.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_13_2.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_16.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_PR_19.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_CS_Trinity_01.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_DesertResidence_Night.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_MainOffice.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_ReceptionRoom_kr.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_ReceptionRoom.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_SchoolRooftop.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_UpperOffice.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_View_Kivotos.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_View_Schale.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_White.jpg");
        ASSET_MANAGER.queueDownload("assets/media/preload/UIs/03_Scenario/01_Background/BG_Wilderness_Night.jpg");

        ASSET_MANAGER.downloadAll(() => {
        	const canvas = document.getElementById("_altar");
        	const ctx = canvas.getContext("2d");

        	gameEngine.init(ctx);

        	gameEngine.start();

            if(ASSET_MANAGER.isDone() === true){
                setInterface("START");
                enterHome();
            }
        });
    };

    loadImgAssets()

    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DEBUG ZONE
/*

//Start
_MainScript();

//Block Splash Screen (TEMPORARY)
splashScreen.style.display = "none";
mainScreen.style.display = "inherit";

*/
