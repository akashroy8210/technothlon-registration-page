let step=0;
let pages=document.querySelectorAll(".student")

function showStep(){
    pages.forEach(page=>page.classList.remove("active"));
    pages[step].classList.add("active");
}
function nextStep(){
    if(step<pages.length-1){
        step++;
        showStep();
    }
}
function prevStep(){
    if(step>0){
        step--;
        showStep();
    }
}