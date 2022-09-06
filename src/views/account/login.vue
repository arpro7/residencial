<script>
import { mapState } from "vuex";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


import { authMethods, authFackMethods, notificationMethods } from "@/state/helpers";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Login",
  },
  data() {
    return {
      email: "",
      password: "",
      passwordFieldType: "password",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
    };
  },

  validations: {
    email: {
      required: helpers.withMessage("Este campo es requerido", required),
      email: helpers.withMessage("Por favor introduzca un correo electrónico válido", email),
    },
    password: {
      required: helpers.withMessage("Este campo es requerido", required),
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

    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },

    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToLogIn = true;
          // Reset the authError if it existed.
          this.authError = null;
          return (
            this.logIn({
              email: this.email,
              password: this.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                this.$router.push(
                  this.$route.query.redirectFrom || {
                    name: "default",
                  }
                );
              })
              .catch((error) => {
                this.tryingToLogIn = false;
                this.authError = error ? error : "";
                this.isAuthError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          const { email, password } = this;
          if (email && password) {
            this.login({
              email,
              password,
            });
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
              <p class="mt-3 fs-15 fw-medium">
                Aplicaciones Progresivas y Responsivas
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Bienvenido!</h5>
                  <p class="text-muted">ARPROapp te ayuda a simplificar la gestión<br />
                del negocio, automatizando tareas administrativas.<br />Inicie sesión para continuar.</p>
                </div>
                <div class="p-2 mt-4">
                  <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>

                  <div v-if="notification.message" :class="'alert ' + notification.type">
                    {{ notification.message }}
                  </div>

                  <form @submit.prevent="tryToLogIn">
                    <div class="mb-3">
                      <label for="email" class="form-label">Correo Electrónico</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Ingresar correo electrónico"
                        v-model="email"
                        :class="{
                          'is-invalid': submitted && v$.email.$error,
                        }"
                      />
                      <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted">¿Olvidaste tu contraseña?</router-link>
                      </div>
                      <label class="form-label" for="password-input">Contraseña</label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input
                          :type="passwordFieldType"
                          v-model="password"
                          class="form-control pe-5"
                          :class="{
                            'is-invalid': submitted && v$.password.$error,
                          }"
                          placeholder="Ingresar contraseña"
                          id="password-input"
                        />
                        <label
                          class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                          @click="switchVisibility"
                          id="password-addon"
                        >
                          <i class="ri-eye-fill align-middle" id="togglePassword"></i>
                        </label>
                        <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                          <span v-if="v$.password.required.$message">{{ v$.password.required.$message }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit">Iniciar sesión</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-center">
              <p class="mb-0">
                Aun no tienes una cuenta ?
                <router-link to="/register" class="fw-semibold text-primary text-decoration-underline">
                  Crear cuenta nueva
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
