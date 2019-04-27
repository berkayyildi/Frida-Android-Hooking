Java.perform(function(){
	Activity = Java.use("com.noplay.myapplication");	//uygulama.paket.ismi.AktiviteAdi
	Activity.fonksiyonismi.implementation = function(v){	//fonksiyonismi kısmı aktivite içerisindeki fonksiyonun ismi
        send("Function Hook");					
        return false;						//Fonksiyon return değerini false yap
    }
});

