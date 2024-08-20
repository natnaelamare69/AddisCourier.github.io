function shipnowform() {
  const fNameInput = document.getElementById('from-name');
  const fCompanyInput = document.getElementById('from-company');
  const fCountryInput = document.getElementById('from-country');
  const fAddressInput = document.getElementById('from-address');
  const fPhoneInput = document.getElementById('from-phone');
  const fEmailInput = document.getElementById('from-email');
  const fTaxIdInput = document.getElementById('from-tax-id');

  const tNameInput = document.getElementById('to-name');
  const tCompanyInput = document.getElementById('to-company');
  const tCountryInput = document.getElementById('to-country');
  const tAddressInput = document.getElementById('to-address');
  const tPhoneInput = document.getElementById('to-phone');
  const tEmailInput = document.getElementById('to-email');
  const tTaxIdInput = document.getElementById('to-tax-id');

  let isValid = true;
  let errorMessage = ''; //string array
  if (fNameInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s name.\n';
    isValid = false;
  }
  if (fCompanyInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s company.\n';
    isValid = false;
  }
  if (fCountryInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s country.\n';
    isValid = false;
  }
  if (fAddressInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s address.\n';
    isValid = false;
  }
  if (fPhoneInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s phone number.\n';
    isValid = false;
  }
  if (fEmailInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s email address.\n';
    isValid = false;
  }

  if (fTaxIdInput.value.trim() === '') {
    errorMessage += '- Please enter the sender\'s tax ID.\n';
    isValid = false;
  }
  if (tNameInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s name.\n';
    isValid = false;
  }

  if (tCompanyInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s company.\n';
    isValid = false;
  }

  if (tCountryInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s country.\n';
    isValid = false;
  }

  if (tAddressInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s address.\n';
    isValid = false;
  }

  if (tPhoneInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s phone number.\n';
    isValid = false;
  }
   if (tEmailInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s email address.\n';
    isValid = false;
  }
  if (tTaxIdInput.value.trim() === '') {
    errorMessage += '- Please enter the recipient\'s tax ID.\n';
    isValid = false;
  }
  const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!namePattern.test(fNameInput.value.trim())) {
    errorMessage += '- Please enter a valid full name (first and last name) for the sender.\n';
    isValid = false;
  }
  if (!namePattern.test(tNameInput.value.trim())) {
    errorMessage += '- Please enter a valid full name (first and last name) for the recipient.\n';
    isValid = false;
  }
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(fPhoneInput.value.trim())) {
    errorMessage += '- Please enter a valid 10-digit phone number for the sender.\n';
    isValid = false;
  }
 if (!phonePattern.test(tPhoneInput.value.trim())) {
    errorMessage += '- Please enter a valid 10-digit phone number for the recipient.\n';
    isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(fEmailInput.value.trim())) {
    errorMessage += '- Please enter a valid email address for the sender.\n';
    isValid = false;
  }
  if (!emailPattern.test(tEmailInput.value.trim())) {
    errorMessage += '- Please enter a valid email address for the recipient.\n';
    isValid = false;
  }

  if (!isValid) {
    alert('error:\n\n' + errorMessage);
  } else {
    alert('Form submitted successfully!');
  }

  return isValid;
}