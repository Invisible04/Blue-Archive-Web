//Random Minimal Number ~ Maximum Number
/**
 * Get Random Int Number 
 * @param {*} min : int
 * @param {*} max : int
 * @returns : int
 */
function random(min,max){
    var Value = min-1;
    while(Value <= min){
        Value = Math.floor(Math.random()*max+1);
        if(Value >= min){
            return Value;
        }
    }
}

function numFloor(num){
    return Math.floor(num);
}

function numRound(num){
    return Math.round(num);
}

function numTrunc(num){
    return Math.trunc(num);
}

//Add Path Cache
/**
 * Add Path To Cache For Improve Performance
 * @param {*} path : string 
 */
function addCache(path){
    caches.open("CartoonWarsLoad").then((cache) => {
        cache.add(path);
    });
}

//Check if data url or not
function isDataURL(DataURL) {
    return !!DataURL.match(isDataURL.regex);
}
isDataURL.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

function isFloat(n) {
    return n === +n && n !== (n|0);
}

function isInteger(n) {
    return n === +n && n === (n|0);
}

function isFunction(variable){
    return typeof variable === 'function';
}

function isString(variable){
    return typeof variable === 'string';
}

function isBoolean(variable){
    return typeof variable === 'boolean';
}

function isObject(variable){
    return typeof variable === 'object';
}

function isNumber(variable){
    return typeof variable === 'number';
}

function isBigInt(variable){
    return typeof variable === 'bigint';
}

function isSymbol(variable){
    return typeof variable === 'symbol';
}

var Base64={
    _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode:function(e){
        var t="";var n,r,i,s,o,u,a;
        var f=0;e=Base64._utf8_encode(e);
        while(f<e.length){
            n=e.charCodeAt(f++);
            r=e.charCodeAt(f++);
            i=e.charCodeAt(f++);
            s=n>>2;o=(n&3)<<4|r>>4;
            u=(r&15)<<2|i>>6;a=i&63;
            if(isNaN(r)){
                u=a=64
            }else if(isNaN(i)){
                a=64
            }
            t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)
        }
        return t
    },
    decode:function(e){
        var t="";
        var n,r,i;
        var s,o,u,a;
        var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");
        while(f<e.length){
            s=this._keyStr.indexOf(e.charAt(f++));
            o=this._keyStr.indexOf(e.charAt(f++));
            u=this._keyStr.indexOf(e.charAt(f++));
            a=this._keyStr.indexOf(e.charAt(f++));
            n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);
            if(u!=64){
                t=t+String.fromCharCode(r)
            }
            if(a!=64){
                t=t+String.fromCharCode(i)
            }
        }
        t=Base64._utf8_decode(t);
        return t
    },
    _utf8_encode:function(e){
        e=e.replace(/\r\n/g,"\n");
        var t="";
        for(var n=0;n<e.length;n++){
            var r=e.charCodeAt(n);
            if(r<128){
                t+=String.fromCharCode(r)
            }else if(r>127&&r<2048){
                t+=String.fromCharCode(r>>6|192);
                t+=String.fromCharCode(r&63|128)
            }else{
                t+=String.fromCharCode(r>>12|224);
                t+=String.fromCharCode(r>>6&63|128);
                t+=String.fromCharCode(r&63|128)
            }
        }
        return t
    },
    _utf8_decode:function(e){
        var t="";
        var n=0;
        var r=c1=c2=0;
        while(n<e.length){
            r=e.charCodeAt(n);
            if(r<128){
                t+=String.fromCharCode(r);
                n++
            }else if(r>191&&r<224){
                c2=e.charCodeAt(n+1);
                t+=String.fromCharCode((r&31)<<6|c2&63);
                n+=2
            }else{
                c2=e.charCodeAt(n+1);
                c3=e.charCodeAt(n+2);
                t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);
                n+=3
            }
        }
        return t
    }
}

const qs = (value) => { return document.querySelector(value) };

const qsa = (value) => { return document.querySelectorAll(value) };

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function checkFile(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.status == 200;
}

function camelCase(obj) {
    var newObj = {};
    for (d in obj) {
        if (obj.hasOwnProperty(d)) {
            newObj[d.replace(/(\_\w)/g, function (k) {
                return k[1].toUpperCase();
            })] = obj[d];
        }
    }
    return newObj;
}
