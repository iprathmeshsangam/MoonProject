//Write the script here


document.body.style.backgroundColor = "black"
const MoonPic = document.getElementById("MoonPic")
const MoonOptions  = document.getElementById("Moons")


function changeMoon(e){
    if(e.value == "Moon-1080p"){
        document.body.style.backgroundColor = "pink"
        MoonPic.style.width = "200px"

    }
    document.querySelector("#MoonPic").src  = "./Assets/Moons/" + e.value + ".png" 

}


