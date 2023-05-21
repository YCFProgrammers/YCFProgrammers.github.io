function onSignIn(googleUser) {
    // Manejar la respuesta de inicio de sesión de Google aquí
    var id_token = googleUser.getAuthResponse().id_token;
    // Hacer algo con el token, como enviarlo al servidor para autenticación del lado del servidor
  }
  window.onload = function() {
    // Cargar la biblioteca de Google Sign-In
    google.accounts.id.initialize({
      client_id: '316828881159-am9to51ntud4ed0re72rbc4k93ifo8s1.apps.googleusercontent.com',
      callback: onSignIn,
      auto_prompt: false
    });
  
    // Mostrar el botón de inicio de sesión de Google
    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  };
  // auth2 is initialized with gapi.auth2.init() and a user is signed in.
  

if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  
}
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);