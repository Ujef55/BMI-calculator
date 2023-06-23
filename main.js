const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if ((height || weight) === '' || (height || weight) < 0 || isNaN(height || weight)) {
        result.innerHTML = `Provided Information is not correct!`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `You are Underweight with BMI <span>${bmi}</span>`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `You are Healthy with BMI <span>${bmi}</span>`;
        } else if (bmi > 24.9) {
            result.innerHTML = `You are Overweight with BMI <span>${bmi}</span>`;
        } else {
            result.innerHTML = `<span>${bmi}</span>`;
        }
    }
    
})
























