const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
