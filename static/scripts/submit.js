function genericValidator(id, invalid) {
  const el = $(id);
  el.removeClass("is-invalid");
  if (!el.val() || invalid) {
    el.addClass("is-invalid");
    return false;
  }
  return true;
}

function validateName() {
  return genericValidator("#name");
}

function validateEmail() {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const validEmail = emailRegex.test($("#email").val());
  return genericValidator("#email", !validEmail);
}

function configureToasts(toasts) {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  return toastList;
}

function configureForm(toasts) {
  const fields = {
    name: { valid: false, validator: validateName, validateOnChange: true },
    email: { valid: false, validator: validateEmail, validateOnChange: true },
  };

  for (let fieldKey of Object.keys(fields)) {
    const field = fields[fieldKey];
    if (field.validateOnChange === true) {
      $("#" + fieldKey).on("keyup", field.validator);
    }
  }

  function validateForm() {
    let valid = true;
    for (let fieldKey of Object.keys(fields)) {
      const field = fields[fieldKey];

      field.valid = field.validator();
      if (!field.valid) {
        valid = false;
      }
    }
    return valid;
  }

  $("#submit").submit(function (event) {
    if (validateForm()) {
      try {
        toasts[0].show();
      } catch {
        console.error("Toast object was not found");
      }
    }
    event.preventDefault();
  });
}

$(document).ready(function () {
  const toasts = configureToasts();
  configureForm(toasts);
});
