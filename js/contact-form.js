document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = this.name.value.trim();
  var email = this.email.value.trim();
  var message = this.message.value.trim();

  var subject = 'NAAI contact form: ' + name;
  var body = message + '\n\nFrom: ' + name + ' (' + email + ')';

  var mailto = 'mailto:info@fireflight.ai'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);

  window.location.href = mailto;
});
