document.querySelector(".hesapla").addEventListener("click" , function(){
    const aDeger = document.querySelector(".a").value;
    const bDeger = document.querySelector(".b").value;
    const cDeger = document.querySelector(".c").value;
    const x1Deger = document.querySelector(".x1");
    const x2Deger = document.querySelector(".x2");
    const resultx1 = (-bDeger+Math.sqrt(bDeger*bDeger-4*aDeger*cDeger))/(2*aDeger);
    const resultx1Fix = resultx1.toFixed(2);
    const resultx2 = (-bDeger-Math.sqrt(bDeger*bDeger-4*aDeger*cDeger))/(2*aDeger);
    const resultx2Fix = resultx2.toFixed(2);
    x1Deger.textContent ="x1 = " + resultx1Fix;
    x2Deger.textContent ="x2 = " + resultx2Fix;
    if (aDeger == 0) {
        alert("a Değeri 0 Olamaz")
    }
    if (isNaN(resultx1Fix)) {
        x1Deger.textContent = "x1= Gerçek Kök Yok.";
        x1Deger.style.fontSize="50px";
        x1Deger.style.transform="translateY(-700%)"
    }
    if (isNaN(resultx2Fix)) {
        x2Deger.textContent = "x2= Gerçek Kök Yok.";
        x2Deger.style.fontSize="50px";
        x2Deger.style.transform="translateY(-700%)"
    };
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".a").value = "";
    document.querySelector(".b").value = "";
    document.querySelector(".c").value = "";
    document.querySelector(".x1").textContent = " x1 =";
    document.querySelector(".x2").textContent = " x2 =";

})
