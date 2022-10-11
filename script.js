function switchOFF(){
    document.getElementById("angle").src=
    "vector-illustration-little-red-devil-boy-20447853-removebg-preview.png"
    document.getElementById("SwitchOff").textContent="Switch Off";
    document.getElementById("SwitchOffBtn").style.backgroundColor="Red";
    document.getElementById("buldOnImg").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("switchOnBtn").style.backgroundColor = "#cbd2d9";
}
function switchOn(){
    document.getElementById("angle").src="/513-5136851_cartoon-angel-transparent-background-hd-png-download-removebg-preview.png"
    document.getElementById("SwitchOff").textContent="Switch On";
    document.getElementById("switchOnBtn").style.backgroundColor="Green";
    document.getElementById("buldOnImg").src=
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("SwitchOffBtn").style.backgroundColor = "#cbd2d9";
}