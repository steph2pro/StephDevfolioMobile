// document.addEventListener("DOMContentLoaded", function() {
//     var envoyerButton = document.querySelector('.contact__button');
//     envoyerButton.addEventListener("click", envoyerMessage);
//   });
// function envoyerMessage() {
//     var nom = document.querySelector('#nameInput').value;
//     var email = document.querySelector('#emailInput').value;
//     var message = document.querySelector('#messageInput').value;
  
//     var lien = "mailto:stephane2004kamga@gmail.com" +
//                "?subject=" + encodeURIComponent("Nouveau message de " + nom) +
//                "&body=" + encodeURIComponent("Email: " + email + "\n\nMessage: " + message);
  
//     window.location.href = lien;
//   }

document.addEventListener("DOMContentLoaded", function() {
    var envoyerButton = document.querySelector('.contact__button');
    envoyerButton.addEventListener("click", envoyerMessage);
  });

function envoyerMessage() {
    var nom = document.querySelector('#nameInput').value;
    var email = document.querySelector('#emailInput').value;
    var message = document.querySelector('#messageInput').value;
  
    var templateParams = {
      from_name: nom,
      to_name: 'Recipient Name',
      message: message,
      reply_to: email
    };
  
    emailjs.send('service_jcgfph9', 'template_hmjbyw2', templateParams)
      .then(function(response) {
        console.log('Le courriel a été envoyé avec succès !', response.status, response.text);
      }, function(error) {
        console.log('Une erreur est survenue lors de l\'envoi du courriel :', error);
      });
  }