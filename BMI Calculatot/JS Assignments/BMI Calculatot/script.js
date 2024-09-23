document.getElementById("girl").classList.add("dispnone");
document.getElementById("bmi-range").classList.add("dispnone");
document.getElementById("line").classList.add("dispnone");
document.getElementById("outputdiv").classList.add("dispnone");

let selectedValue;

document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener('change', () => {
        selectedValue = document.querySelector('input[name="gender"]:checked').value;
        console.log(selectedValue);
        
    if(selectedValue === 'female'){
        document.getElementById("girl").classList.remove("dispnone");
        document.getElementById("boy").classList.add("dispnone");
        // document.getElementById("doctor").classList.add("dispnone");
    }
    else{
        // document.getElementById("doctor").classList.add("dispnone");
        document.getElementById("boy").classList.remove("dispnone");
        document.getElementById("girl").classList.add("dispnone");
    }
  });
});



function show(){
let height = document.getElementById("feet").value;
let weight = document.getElementById("weight").value;

let bmi = weight / (height*height);
document.getElementById("output").value = bmi.toFixed(2);



if (bmi <= 18.9) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi ) + "deg)";
  } else if (bmi >= 19 && bmi <= 24.9) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi + 37) + "deg)";

  } else if (bmi >= 25 && bmi <= 29.9) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi + 80) + "deg)";

  } else if (bmi >= 30 && bmi <= 34.9) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi + 115) + "deg)";

  } else if (bmi >= 35 && bmi <= 39.9) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi + 130) + "deg)";
    
document.getElementById("line").style.transition = "10s";

  } else if (bmi >= 40) { 
    document.getElementById("line").style.transform = "rotate(" + (90 + bmi + 150) + "deg)";

  }
  



    document.getElementById("inputarea").classList.add("dispnone");
    
    document.getElementById("bmi-range").classList.remove("dispnone");
    document.getElementById("line").classList.remove("dispnone");
    document.getElementById("outputdiv").classList.remove("dispnone");
}
