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