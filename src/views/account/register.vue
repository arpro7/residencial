<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";

import { authMethods, authFackMethods, notificationMethods } from "@/state/helpers";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Register",
  },
  components: {},
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      username: {
        required: helpers.withMessage("Este campo es requerido", required),
      },
      email: {
        required: helpers.withMessage("Este campo es requerido", required),
        email: helpers.withMessage("Por favor introduzca un correo electrónico válido", email),
      },
      password: {
        required: helpers.withMessage("Este campo es requerido", required),
      },
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToRegister = true;
          // Reset the regError if it existed.
          this.regError = null;
          return (
            this.register({
              username: this.user.username,
              email: this.user.email,
              password: this.user.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToRegister = false;
                this.isRegisterError = false;
                this.registerSuccess = true;
                if (this.registerSuccess) {
                  this.$router.push(
                    this.$route.query.redirectFrom || {
                      name: "default",
                    }
                  );
                }
              })
              .catch((error) => {
                this.tryingToRegister = false;
                this.regError = error ? error : "";
                this.isRegisterError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          const { email, username, password } = this.user;
          if (email && username && password) {
            this.registeruser(this.user);
          }
        }
      }
    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <!-- auth page bg -->
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <img src="@/assets/images/logo-light-arpro.png" alt="" height="20" />
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium">Aplicaciones Progresivas y Responsivas</p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Crear Cuenta Nueva</h5>
                  <p class="text-muted">
                    ARPROapp te ayuda a simplificar la gestión<br />
                    del negocio, automatizando tareas administrativas.
                  </p>
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="tryToRegisterIn">
                    <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible
                      >Registration successfull.</b-alert
                    >

                    <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{
                      regError
                    }}</b-alert>

                    <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div>
                    <div class="mb-3">
                      <label for="useremail" class="form-label"
                        >Correo Electrónico <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        v-model="user.email"
                        id="useremail"
                        :class="{
                          'is-invalid': submitted && v$.user.email.$error,
                        }"
                        placeholder="Ingresar correo electrónico"
                        required
                      />
                      <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label"
                        >Nombre de Usuario <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="user.username"
                        :class="{
                          'is-invalid': submitted && v$.user.username.$error,
                        }"
                        id="username"
                        placeholder="Ingresar nombre de usuario"
                        required
                      />
                      <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                        <span v-if="v$.user.username.required.$message">{{ v$.user.username.required.$message }}</span>
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="userpassword" class="form-label">Contraseña <span class="text-danger">*</span></label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="user.password"
                        :class="{
                          'is-invalid': submitted && v$.user.password.$error,
                        }"
                        id="userpassword"
                        placeholder="Ingresar contraseña"
                        required
                      />
                      <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{ v$.user.password.required.$message }}</span>
                      </div>
                    </div>

                    <div class="mb-4">
                      <p class="mb-0 fs-12 text-muted fst-italic">
                        Al continuar confirmas que aceptas nuestros
                        <a href="#" class="text-primary text-decoration-underline fst-normal fw-medium"
                          >Términos y condiciones</a
                        >
                        ,
                        <a href="#" class="text-primary text-decoration-underline fst-normal fw-medium">
                          Política de Privacidad y Cookies.</a
                        >
                      </p>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit">Registrar Cuenta</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-center">
              <p class="mb-0">
                Tienes una cuenta ?
                <router-link to="/login" class="fw-semibold text-primary text-decoration-underline">
                  Inicie Sesión
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} ARPROapp</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>
