window.onload = function (){
    var biggerButton = document.getElementById("bigger");
    biggerButton.onclick=interval;


    var myCheckbox = document.getElementById("bling");
    myCheckbox.onchange=changeBling;

    var myTextArea = document.getElementById("largetx");


    function changeBling(){

        if(myCheckbox.checked) {
            myTextArea.style.fontWeight="bold";
            myTextArea.style.color="green";
            myTextArea.style.textDecoration="underline";
        }else{
            myTextArea.style.removeProperty("font-weight");
        }
    }
    function interval(){
        setInterval(biggerText, 2000);
    }
    function biggerText() {
       console.log(myTextArea.style.fontSize);
       var computedFontsize = window.getComputedStyle(myTextArea).fontSize;
       var fontInPt = parseFloat(computedFontsize)*0.75;
       fontInPt+=2;
        myTextArea.style.fontSize=fontInPt+"pt";
    }

}