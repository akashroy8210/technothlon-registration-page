const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

// Load countries
fetch("https://countriesnow.space/api/v0.1/countries/states")
.then(res => res.json())
.then(data => {
  data.data.forEach(c => {
    country.innerHTML += `<option value="${c.name}">${c.name}</option>`;
  });

  // when country changes
  country.addEventListener("change", () => {
    state.innerHTML = "";
    city.innerHTML = "";

    const selected = data.data.find(c => c.name === country.value);

    selected.states.forEach(s => {
      state.innerHTML += `<option value="${s.name}">${s.name}</option>`;
    });
  });

  // when state changes
  state.addEventListener("change", () => {
    city.innerHTML = "";

    fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        country: country.value,
        state: state.value
      })
    })
    .then(res=>res.json())
    .then(data=>{
      data.data.forEach(ct=>{
        city.innerHTML += `<option>${ct}</option>`;
      });
    });
  });

});

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