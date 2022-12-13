const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    if ((height === '') && (weight === '')){
        //validating the height and weight 
        results.innerHTML = "please provide valid Height and Weight";
    
    } else if((isNaN(height)) || (height ===  0) || (height <  0)){
        //NaN !== NaN, validating the height 
        results.innerHTML = "please provide a valid height";
        
//    } else if((height === '') && (weight > 0)){
//        //NaN !== NaN, validating the height 
//        results.innerHTML = "please provide a valid height";
//        
//    } else if((weight === '') && (height > 0)){
//        //NaN !== NaN, validating the height 
//        results.innerHTML = "please provide a valid weight";
        
    } else if (height > 247) {
        //validating the height 
        results.innerHTML = "too high! please provide a valid height";
    
    } else if (weight > 799) {
        //validating the height 
        results.innerHTML = "too high! please provide a valid weight";
    
    } else if ((weight < 0) || (weight === 0) || (isNaN(weight))){
        //validating the weight 
        results.innerHTML = "Please provide a valid weight";
    
    } else if (bmi > 200) {
        //validating the weight 
        results.innerHTML = "Please provide valid height and weight";
    
    } else if ((bmi > 0) && (bmi <= 14.9)) {
        //display the results - Highly Underweight
        results.innerHTML = `<span>${bmi} - deadly! rush to Hospital</span>`;

    } else if ((bmi > 14.9) && (bmi < 18.6)) {
        //display the results - Underweight = Less than 18.6
        results.innerHTML = `<span>${bmi} - Underweight! Go to Hospital</span>`;
        
    } else if ((bmi > 24.9) && (bmi <= 30)) {
        //display the results - Overweight!
        results.innerHTML = `<span>${bmi} - Overweight! Go to Hospital</span>`;

    } else if (bmi > 30) {
        //display the results - Highly Overweight!
        results.innerHTML = `<span>${bmi} - deadly! rush to Hospital</span>`;
        
    } else {
        //Normal Range = 18.6 and 24.9, display the normal BMI results
        ((bmi >= 18.6) && (bmi <= 24.9));
        results.innerHTML = `<span>${bmi} - normal range, great shape!</span>`;               
    }
    
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

