const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height <= 0 || height === '') {
        result.innerHTML = 'The Information you provided is not correct!';
    } else if (isNaN(weight) || weight <= 0 || weight === '') {
        result.innerHTML = 'The Information you provided is not correct!';
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
});
