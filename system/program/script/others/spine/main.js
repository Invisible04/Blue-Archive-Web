let app;
let char;
let audioList = []
let audios;
let isCharacterLoaded = false;
let debug = 0; //set via console

function loadChar(model = "./assets/spine/Students/atsuko_spr.skel") {
    isCharacterLoaded = false;
    // remove previous spine
    if (app.stage.children.length > 0) {
        app.stage.children.pop();
        app.loader.resources = {};
    }
    // remove previous audio
    if (audioList.length != 0) {
        for (var i in audioList) {
            audioList[i].stop();
        }
        audioList = [];
    }
    try {
        app.loader.resources = {};
        // load new spine
        app.loader
            .add('char', `./${model}`)
            .load(onAssetsLoaded);
    } catch (e) {
        console.error(e)
    }
}

function onAssetsLoaded(loader, res) {
    if (audioList.length != 0) {
        for (var i in audioList) {
            audioList[i].stop();
        }
        audioList = [];
    }

    char = new PIXI.spine.Spine(res.char.spineData);

    // console.log(char)
    // console.log(char.spineData.height)
    // console.log(char.spineData.width)

    // Scaler
    //char.scale.x = 0.5;
    //char.scale.y = 0.5;
    char.scale.x = config.scale;
    char.scale.y = config.scale;

    // Centerize
    //char.x = window.innerWidth / 2;
    //char.y = window.innerHeight / 1;
    char.x = config.x;
    char.y = config.y;

    //Set option value
    //config.scale = 0.5;
    //config.x = char.x;
    //config.y = char.y;

    // Insert animations to index.html
    const animations = res.char.spineData.animations;
    let check = 0;
    let numCount = 0;
    config.animations = [];
    for (var i in animations) {
        config.animations[numCount] = animations[i].name;
        numCount++;
        if (animations[i] == "Idle_01")
            check = 1;
    }

    //Play Animation
    if (check) {
        char.state.setAnimation(0, "Idle_01", config.loop);
        config.selectedAni = "Idle_01";
    } else {
        char.state.setAnimation(0, animations[0].name, config.loop);
    }

    // Voiceline Listener / Handler
    char.state.addListener({
        event: function (entry, event) {
            if (debug)
                console.log(event)
            if (event.stringValue == '')
                return;
            if (!option.talkSound.checked)
                return;
            let charName = option.models.options[option.models.selectedIndex].text.replace("_home", "")
            //Camalize
            if (charName.indexOf("_") != -1) {
                charName = charName.toLowerCase().replace(/([-_][a-z])/g, group =>
                    group
                        .toUpperCase()
                        .replace('-', '')
                        .replace('_', '')
                );
            }
            charName = charName.charAt(0).toUpperCase() + charName.slice(1);
            if (debug)
                console.log(charName)
            //Play
            if (charName == 'MashiroSwimsuit')
                charName = 'CH0061';
            if (charName == 'ShirokoRidingsuit')
                charName = 'ShirokoRidingSuit'
            let voice = new Howl({
                src: [audios[event.stringValue]]
            });
            // If already loaded, play it
            if (voice.state() == 'loaded')
                voice.play();
            else if (voice.state() == 'loading') {
                voice.on('load', function () {
                    voice.play();
                })
            }
            audioList.push(voice);
        }
    })
    //Add to main canvas
    app.stage.addChild(char);
    isCharacterLoaded = true;
}
