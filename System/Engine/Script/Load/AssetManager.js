class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
        this.log = [];
        this.logNum = 0;
        this.doneSave = 0;
    };

    queueDownload(path) {
        this.log[this.logNum] = "Queueing " + path;
        this.logNum++;
        this.downloadQueue.push(path);
    };

    isDone() {
        if(this.downloadQueue.length === this.successCount + this.errorCount && this.doneSave == 0){
            this.doneSave++;
            
            $.ajax({
                type: "post",
                url: "System/Program/Others/Tools/FileWriter.php",
                data: {
                    log: JSON.stringify(this.log),
                    path: "../../../Config/Log/LoadData.txt"
                },
                success: function (response) {
                    console.log(response);
                }
            });
        }
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (var i = 0; i < this.downloadQueue.length; i++) {
            var that = this;
            let maxNumLoad = this.downloadQueue.length;

            var path = this.downloadQueue[i];
            that.log[that.logNum] = path;
            that.logNum++;
            var ext = path.substring(path.length - 3);

            switch (ext) {
                case 'jpg':
                case 'png':
                    var img = new Image();
                    img.addEventListener("load", function () {
                        that.log[that.logNum] = "Loaded " + this.src;
                        this.logNum++;
                        that.successCount++;
                        let Percent = Math.round((that.successCount/maxNumLoad) * 100);
                        
                        __Element.loaderBar.style.width = "calc(" + Percent + "% - 4px)";
                        __Element.loadingText.innerText = "Download in progress. [" + that.successCount + "/" + maxNumLoad + "] " + Percent + "%";
                        if (that.isDone()) callback();
                    });

                    img.addEventListener("error", function () {
                        that.log[that.logNum] = "Error Load " + this.src;
                        this.logNum++;
                        that.errorCount++;
                        if (that.isDone()) callback();
                    });

                    img.src = path;
                    this.cache[path] = img;
                    break;
                case 'wav':
                case 'mp3':
                case 'mp4':
                    var aud = new Audio();
                    aud.addEventListener("loadeddata", function () {
                        that.log[that.logNum] = "Loaded " + this.src;
                        this.logNum++;
                        that.successCount++;
                        if (that.isDone()) callback();
                    });

                    aud.addEventListener("error", function () {
                        that.log[that.logNum] = "Error Load " + this.src;
                        this.logNum++;
                        that.errorCount++;
                        if (that.isDone()) callback();
                    });

                    aud.addEventListener("ended", function () {
                        aud.pause();
                        aud.currentTime = 0;
                    });

                    aud.src = path;
                    aud.load();

                    this.cache[path] = aud;
                    break;
            }
        }
    };

    getAsset(path) {
        return this.cache[path];
    };

    playAsset(path) {
        let audio = this.cache[path];
        if (audio.currentTime != 0) {
            let bak = audio.cloneNode();
            bak.currentTime = 0;
            bak.volume = audio.volume;
            bak.play();
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    };

    muteAudio(mute) {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.muted = mute;
            }
        }
    };

    adjustVolume(volume) {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.volume = volume;
            }
        }
    };

    pauseBackgroundMusic() {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.pause();
                asset.currentTime = 0;
            }
        }
    };

    autoRepeat(path) {
        var aud = this.cache[path];
        aud.addEventListener("ended", function () {
            aud.play();
        });
    };
};

