let check='s';
function simple(letter){
    document.getElementById("color").innerHTML="Coral";
    check=letter;//it helps us to identify we are in simple section ,we are storing s letter
    document.getElementById("box").style.backgroundColor="Coral";//whenever user clicks on simple,default background color
    document.getElementById("sim").style.backgroundColor="gold";//if we click on simple button  background color changes
    document.getElementById("hex").style.backgroundColor="white";// hex color changes to white

}
function hex(letter){
    check=letter;
    document.getElementById("box").style.backgroundColor="Coral";
    document.getElementById("color").innerHTML="#FF7F50";
    document.getElementById("hex").style.backgroundColor="gold";//if we click on hex button  background color changes
    document.getElementById("sim").style.backgroundColor="white";// hex color changes to white
}
function change(){
    let name=document.getElementById("color");
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    const colors = [
        "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White",
        "Gray", "Cyan", "Magenta", "Teal", "Lavender", "Turquoise", "Peach", "Maroon", "Navy", "Olive",
        "Lime", "Coral", "Aqua", "Beige", "Crimson", "Gold", "Indigo", "Ivory", "Khaki", "Mint"
      ];
    let newcolor="";
    if(check=='h'){
        
        newcolor='#';
        for(let i=0;i<6;i++){
            newcolor+=hex[Math.floor(Math.random()* 16)];
        }
    }
    if(check=='s'){
       
        newcolor=colors[Math.floor(Math.random()* 30)];
    }
    name.innerHTML=newcolor;
    document.getElementById("box").style.backgroundColor=newcolor;
    
}