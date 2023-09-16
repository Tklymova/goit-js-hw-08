import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form  textarea'),
};

let formData = {};


refs.form.addEventListener('submit', handelFormSubmit);
refs.form.addEventListener('input', throttle(handelInput, 500));

function handelInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


populateTextarea();
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedMessageParse = JSON.parse(savedMessage);
try {
    if (savedMessageParse.email) {
        refs.input.value = savedMessageParse.email;
        formData.email = savedMessageParse.email;
    }; } catch (error) {}
try {
    if (savedMessageParse.message) {
        refs.textarea.value = savedMessageParse.message;
        formData.message = savedMessageParse.message;
    };
} catch (error) {}
}


function handelFormSubmit(event) {

    event.preventDefault();

    if (!formData.email || !formData.message) {
        return
    } else {
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
        formData = {};
    }
}
