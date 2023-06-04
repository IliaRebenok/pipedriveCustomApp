const dropdowns = document.querySelectorAll('.dropdown-wrap');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.input-drop-down')
    const menu = dropdown.querySelector('.dropdown-menu ')
    const options = dropdown.querySelectorAll('.dropdown-menu li')
    const selected = dropdown.querySelector('.input-drop-down')

    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        menu.classList.toggle('dropdown-menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.value = option.innerText;
            menu.classList.toggle('dropdown-menu-open');   
        })
    })
})

const form = document.querySelector('.form-block');
const save = document.getElementById("save-button");

save.addEventListener('click' , (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    console.log(json);
    localStorage.setItem('form', json);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
})

const savedForm = JSON.parse(localStorage.getItem("form"));
const firstName = document.getElementById('firstName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const jobType = document.getElementById('jobType');
const jobSource = document.getElementById('jobSource');
const jobDescription = document.getElementById('jobDescription');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zipCode');
const area = document.getElementById('area');
const startDate = document.getElementById('startDate');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const technician = document.getElementById('technician');

console.log(savedForm)

firstName.value = savedForm.firstName === null || undefined ? "" : savedForm.firstName;
lastName.value = savedForm.lastName  === null || undefined ? "" : savedForm.lastName ;
phone.value = savedForm.phone === null || undefined ? "" : savedForm.phone;
email.value = savedForm.email === null || undefined ? "" : savedForm.email;
jobType.value = savedForm.jobType === null || undefined ? "" : savedForm.jobType;
jobSource.value = savedForm.jobSource === null || undefined ? "" : savedForm.jobSource;
jobDescription.value = savedForm.jobDescription === null || undefined ? "" : savedForm.jobDescription;
address.value = savedForm.address === null || undefined ? "" : savedForm.address;
city.value = savedForm.city === null || undefined ? "" : savedForm.city;
state.value = savedForm.state === null || undefined ? "" : savedForm.state;
zipCode.value = savedForm.zipCode === null || undefined ? "" : savedForm.zipCode;
area.value = savedForm.area === null || undefined ? "" : savedForm.area;
startDate.value = savedForm.startDate === null || undefined ? "" : savedForm.startDate;
startTime.value = savedForm.startTime === null || undefined ? "" : savedForm.startTime;
endTime.value = savedForm.endTime === null || undefined ? "" : savedForm.endTime;
technician.value = savedForm.technician === null || undefined ? "" : savedForm.technician;

