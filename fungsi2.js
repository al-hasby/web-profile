function navMobile(){
    var x = document.getElementById("myNav");
    if(x.className ==="top-nav"){
        x.className = "respon";

    }else{
        x.className="top-nav";
    }

}


const togglbtn = document.getElementById('darknlight');

togglbtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
togglbtn.textContent="🌙 Dark Mode ";
    }else{
        togglbtn.textContent="☀️ Light Mode";
    }
})