document.getElementById("myButton").addEventListener("click",function(){
    var result = confirm("This site wants to use your camera.");
    if(result){
        alert("Just kidding.");
    } else{
        alert("Sike!");
    }
});