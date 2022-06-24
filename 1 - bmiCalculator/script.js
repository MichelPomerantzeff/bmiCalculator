const calculate = document.getElementById('calculate')

function imc () {
    const name = document.getElementById('name').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const result = document.getElementById('id_result')
    if(name !== '' && height !== '' && weight !== '') {
        const BMIvalue = (weight / (height * height))
        let status = ''
        if (BMIvalue < 18.5) {
            status = 'underweight.'
        } else if (BMIvalue < 25) {
            status = 'ideal weight. Well done !!!'
        } else if(BMIvalue < 30) {
            status = 'slightly overweight.'
        } else if(BMIvalue < 35) {
            status = 'obesity class I.'
        } else if(BMIvalue < 40) {
            status = 'obesity class II.'
        } else {
            status = 'obesity class III. Be carefull !!!'
        }
        result.textContent = `${name}, your BMI is ${BMIvalue.toFixed(1)}, indicating you are in the category of ${status}`
    } else {
        result.textContent = 'Fill in all the fields above!'
    }    
}
calculate.addEventListener('click', imc)