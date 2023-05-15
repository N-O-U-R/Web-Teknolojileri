
const form = document.getElementById('form');
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const email = document.getElementById('email');
const mesaj = document.getElementById('mesaj');
const tel = document.getElementById('tel');

form.addEventListener('submit', e => {
    e.preventDefault();

    const adValue = ad.value;
    const soyadValue = soyad.value;
    const emailValue = email.value;
    const mesajValue = mesaj.value;
    const telValue = tel.value;

    validateInputs(adValue, soyadValue, emailValue, mesajValue, telValue);
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidTel = tel => {
    const re = /^(((\+|00)?(90)|0|)(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2}))$/;
    return re.test(String(tel));
}

const validateInputs = (adValue, soyadValue, emailValue, mesajValue, telValue) => {

    if (adValue === '') {
        setError(ad, 'Ad boş bırakılamaz');
    } else {
        setSuccess(ad);
    }

    if (soyadValue === '') {
        setError(soyad, 'Soyad boş bırakılamaz');
    } else {
        setSuccess(soyad);
    }

    if (emailValue === '') {
        setError(email, 'Email boş bırakılamaz');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Geçerli bir email adresi giriniz');
    } else {
        setSuccess(email);
    }

    if (mesajValue === '') {
        setError(mesaj, 'Mesaj boş bırakılamaz');
    } else {
        setSuccess(mesaj);
    }

    if (telValue === '') {
        setError(tel, 'Telefon boş bırakılamaz');
    } else if (!isValidTel(telValue)) {
        setError(tel, 'Geçerli bir telefon numarası giriniz');
    }
    else {
        setSuccess(tel);
    }
}
