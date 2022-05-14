const ApiUrl = "https://cesde-f928b-default-rtdb.firebaseio.com/user.json/";
const FormLogin = document.querySelector("#login");
const FormRegister = document.querySelector("#formulario__register");

FormRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(ApiUrl, {
    method: "POST",
    body: JSON.stringify({
      address: FormRegister.querySelector("#direccion").value,
      document: FormRegister.querySelector("#documento").value,
      mail: FormRegister.querySelector("#email").value,
      name: FormRegister.querySelector("#nombres").value,
      password: FormRegister.querySelector("#contraseña").value,
      phone: FormRegister.querySelector("#contacto").value,
      surname: FormRegister.querySelector("#apellido").value,
    }),
  })
    .then((Response) => {
      Response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

FormLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const mail = FormLogin.querySelector("#email__login").value;
  const password = FormLogin.querySelector("#contraseña__login").value;

  fetch(ApiUrl)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      for (let key in data) {
        if (data[key].mail == mail && data[key].password == password) {
          window.open("./home.html", "_self");
        }
        else if (data[key].mail !== mail || data[key].password !== password) {
            console.log("Incorrect");
        }
      }
    })
    .catch((err)=> {
        console.log(err);
    })
});

document
  .getElementById("Btn__Iniciar-Sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("Btn__Registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

//declaración de variables
const contenedor_login_register = document.querySelector(
  ".contenedor__login-registrer"
);
const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const caja_trasera_login = document.querySelector(".caja__trasera-login");
const caja_trasera_register = document.querySelector(".caja__trasera-register");

// cuando se le da clic en el botòn registrarse debe cambiar el bloque
function anchoPagina() {
  if (window.innerWidth > 850) {
    caja_trasera_login.style.display = "block";
    caja_trasera_register.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "block";
    caja_trasera_login.style.opacity = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "none";
    caja_trasera_login.style.opacity = "block";
    caja_trasera_login.style.opacity = "1";
  }
}
