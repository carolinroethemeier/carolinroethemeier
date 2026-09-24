// Sends the contact form to Formspree without leaving the page.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      status.dataset.state = 'error';
      status.textContent = 'The contact form is not connected yet. Please email carolin.roethemeier@tum.de instead.';
      return;
    }
    button.disabled = true;
    button.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('send failed');
        form.hidden = true;
        document.getElementById('form-sent').hidden = false;
        document.getElementById('form-sent').focus();
      })
      .catch(function () {
        status.dataset.state = 'error';
        status.textContent = 'Your message could not be sent. Please try again, or email carolin.roethemeier@tum.de.';
        button.disabled = false;
        button.textContent = 'Send message';
      });
  });
})();
