let sequence=[]
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) -80;
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) -80;




const startEvent = event =>  {
    sequence.push(event.key);
    n= sequence.toString("").search("ArrowUp,ArrowLeft,ArrowRight,ArrowDown,ArrowDown")
    console.log(sequence.toString(""));
    console.log(n)
    if (n>=0){
        document.bgColor=("black");
        document.getElementById("text").style.display=("none");
        document.getElementById("ghost").style.display=("block")
        document.removeEventListener("keydown", startEvent);
        document.addEventListener('keydown', moveGhost)
    }
    else{}

};


const moveGhost = event => {
    
    var val = parseInt(document.getElementById("ghost").style.left); 
    
    switch (event.key) {
        case "ArrowLeft": 
        var val = parseInt(document.getElementById("ghost").style.left); 
        if (val >= 10) {
            document.getElementById("ghost").style.left = (val -10) + "px";
        }else{
            document.getElementById("ghost").style.left = (10) + "px";
        }
        break;

        case "ArrowRight": 
        var val = parseInt(document.getElementById("ghost").style.left); 
        if (val < vw) {
            document.getElementById("ghost").style.left = (val +10) + "px";
        }else{
            document.getElementById("ghost").style.left = (vw -20) + "px";
        }
        break;
        
        case "ArrowUp": 
        var val = parseInt(document.getElementById("ghost").style.top); 
        if (val >= 10) {
            document.getElementById("ghost").style.top = (val -10) + "px";
        }else{
            document.getElementById("ghost").style.top = (10) + "px";
        }
        break;
        
        case "ArrowDown": 
        var val = parseInt(document.getElementById("ghost").style.top); 
        if (val < vh) {
            document.getElementById("ghost").style.top = (val +10) + "px";
        }else{
            document.getElementById("ghost").style.top = (vh -20) + "px";
        }
        break;
    }
}    


document.addEventListener('keydown', startEvent)