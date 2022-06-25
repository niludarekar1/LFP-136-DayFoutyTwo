const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const salaryerror = document.querySelector('.salary-output');
salaryerror.textContent = salary.value;
salary.addEventListener('input', function () {
    salaryerror.textContent = salary.value;
});