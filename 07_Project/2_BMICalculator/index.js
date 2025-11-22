const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent form from submitting

    const height = parseInt(document.querySelector('#height').value) //parseInt to convert string to number and .value is used to get the value of input field
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter a valid Height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please Enter a valid weight ${weight}`
    }else{
        // BMI Calculation = weight (kg) / [height (m)]2
         const bmi = (weight / ((height * height) / 10000)).toFixed(2); // toFixed(2) is used to limit the decimal points to 2
         let weightguide;
         if(bmi<18.6){
            weightguide = "Under Weight"
         }else if(bmi>24.9){
            weightguide ="Over Weight"
         }else{
            weightguide = "Normal"
         }
         result.innerHTML = `BMI: ${bmi}, ${weightguide}`
    }

    
})