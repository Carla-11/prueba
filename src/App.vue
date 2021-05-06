<template>
  <div id="app" class="body">
    <Nav></Nav>
    <div class="text-center">
      <img class="" src="./assets/logo_club_tottus.png" alt="" />
      <h4 class="my-1">
        Se parte de nuestro club y sorpréndete con todo lo que tenemos para ti.
      </h4>

      <h1 class="my-2">REGISTRATE AQUÍ</h1>
      <form class="container" @submit.prevent="agregarRespuesta">
        <p class="text-dark">Campos Obligatorios*</p>
        <div class="row justify-content-center">
          <div class="col-12 col-md-4">
            <div class="form-group">
              <input
               id="snombre"
                v-model="nombre"
                type="text"
                class="form-control icon-placeholder-name rounded-pill"
                placeholder="Nombre*"
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group in">
              <input
               id="snombre"
                v-model="apellido"
                type="text"
                class="form-control icon-placeholder-name rounded-pill"
                placeholder="Apellido"
              />
            </div>
          </div>
        </div>

        <div class="row justify-content-center my-2">
          <div class="col-12 col-md-4">
            <div class="form-group">
              <input
               id="snombre"
                v-model="rut"
                type="text"
                class="form-control icon-placeholder-rut rounded-pill"
                placeholder="RUT*"
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group in">
              <input
                id="snombre"
                v-model="telefono"
                type="text"
                class="form-control icon-placeholder-tlf rounded-pill"
                placeholder="Telefono Celular*"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center my-2">
          <div class="col-12 col-md-4">
            <div class="form-group">
              <input
               id="snombre"
                v-model="direccion"
                type="text"
                class="form-control icon-placeholder rounded-pill"
                placeholder="Direccion*"
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group in">
              <input
               id="snombre"
                v-model="region"
                type="text"
                class="form-control icon-placeholder rounded-pill"
                placeholder="Region*"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center my-2">
          <div class="col-12 col-md-4">
            <div class="form-group">
              <input
               id="snombre"
                v-model="comuna"
                type="text"
                class="form-control icon-placeholder rounded-pill"
                placeholder="Comuna*"
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group in ">
              <input
               id="snombre"
                v-model="email"
                type="text"
                class="form-control icon-placeholder-mail rounded-pill "
                placeholder="E-mail*"
              />
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-md-4">
            <div class="form-group">
              <div class="my-2">
                <input
                 id="snombre"
                  v-model="cemail"
                  type="text"
                  class="form-control icon-placeholder-mail rounded-pill"
                  placeholder="Confirmacion E-mail*"
                />
              </div>

              <div class="form-check my-1">
                <input
                  v-model="acepto"
                  class="form-check-input"
                  type="checkbox"
                  id="Check"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  <a href="#" class="link"
                    >Acepto los términos y condiciones del programa Club de los
                    que probaron y se quedaron</a
                  >
                </label>
              </div>
              <div class="form-check">
                <input
                  v-model="acepto1"
                  class="form-check-input"
                  type="checkbox"
                  id="Check"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Quiero participar en las pruebas de productos.
                </label>
              </div>
              <button type="submit" class="my-2 rounded-pill">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },

  data() {
    return {
      nombre: "",
      apellido: "",
      rut: "",
      telefono: "",
      direccion: "",
      region: "",
      comuna: "",
      email: "",
      cemail: "",
      acepto: "",
      acepto1: "",
    };
  },
  methods: {
    agregarRespuesta() {
      if (
        this.apellido &&
        this.nombre &&
        this.rut.length > 1 &&
        this.telefono.length > 1 &&
        this.region &&
        this.comuna &&
        this.direccion &&
        this.email == this.cemail &&
        this.acepto == true &&
        this.acepto1 == true
      ) {
        firebase
          .firestore()
          .collection("clientes")
          .add({
            apellido: this.apellido,
            nombre: this.nombre,
            rut: this.rut,
            telefono: this.telefono,
            region: this.region,
            comuna: this.comuna,
            direccion: this.direccion,
            email: this.email,
            cemail: this.cemail,
          })
          .then((resp) => {
            console.log(resp);
            alert("Datos enviados con exito");
            
          })
          .catch((error) => console.error(error));
        console.log("listo");
        console.log(this.acepto);
      } else {
        alert("COMPLETAR TODOS LOS CAMPOS");
      }
    },
  },
};
</script>                                                                                                                                                                                     

<style>
@font-face {
  font-family: metropolis-black;
  src: url(./assets/Metropolis-Black.otf);
}
@font-face {
  font-family: metropolis-bold;
  src: url(./assets/Metropolis-Bold.otf);
}
@font-face {
  font-family: metropolis-semibold;
  src: url(./assets/Metropolis-SemiBold.otf);
}

* {
  margin: 0;
  padding: 0;
}

#app {
  background-image: url(./assets/fondo-encuesta-registro-clubtottus.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #edf3ec;
  height: 800px;
  color: #79a52b;
}

h1 {
  font-family: metropolis-black;
}

h4 {
  font-family: metropolis-bold;
}

img {
  max-width: 100%;

  width: 300px;
}

 #snombre::placeholder{
            color: #79a52b;
           
            

          }

.icon-placeholder {
  background-image: url(./assets/icono-direccion-club-mmpp.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right center;

}

.icon-placeholder-name {
  background-image: url(./assets/icono-nombre-club-mmpp.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right center;
}
.icon-placeholder-rut {
  background-image: url(./assets/icono-rut-club-mmpp.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right center;
}
.icon-placeholder-mail {
  background-image: url(./assets/icono-mail-club-mmpp.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right center;
}
.icon-placeholder-tlf {
  background-image: url(./assets/icono-tlf-club-mmpp.png);
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: right center;
}
.icon-placeholder-tlf::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
}
  
  

.link {
  color: black;
  font-family: metropolis-semibold;
}

button {
  background-color: #79a52b;
  color: white;
  height: 40px;
  border: none;
  font-family: metropolis-semibold;
  width: 150px;
}

#Check {
  background-color: #79a52b;
}

label {
  font-family: metropolis-semibold;
}
@media only screen and (max-width: 600px) {
  #app {
    background-image: url(./assets/encuesta-productostottus-mob.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #edf3ec;

    color: #79a52b;
  }

  img {
    width: 200px;
    height: 100px;
  }

  .form-group {
    align-items: center;

    width: 300px;
  }
}
</style>
