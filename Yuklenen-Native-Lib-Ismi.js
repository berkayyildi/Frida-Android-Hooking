Java.perform(function(){
    MainActivity = Java.use("five.dkhos.mob.nfc_pay.MainActivity");
    MainActivity.ffnd.implementation = function(v){
        send("securityCheck hooked");
        return false;
    }
});

var securityCheck = undefined;
    exports = Module.enumerateExportsSync("libnative-lib.so");
    for(i=0; i<exports.length; i++){
        if(exports[i].name == "Java_five_dkhos_mob_nfc_1pay_MainActivity_check"){
            securityCheck = exports[i].address;
            send("securityCheck is at " + securityCheck);

            break;
        }
    }