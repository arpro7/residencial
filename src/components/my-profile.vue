<script>

import { mapState } from "vuex";

export default {
  data() {
    return {}
  },
  components: {

},

computed: {
    ...mapState("auth", ["currentUser"]),
  },
}

</script>
<template>
  <div class="dropdown ms-sm-3 header-item topbar-user">
    <button
      type="button"
      class="btn"
      id="page-header-user-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="d-flex align-items-center">
        <img class="rounded-circle header-profile-user" src="@/assets/images/users/user-dummy-img.jpg" alt="Header Avatar" />
        <span class="text-start ms-xl-2">
          <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ currentUser.displayName }}</span>
          <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Admin</span>
        </span>
      </span>
    </button>
    <div class="dropdown-menu dropdown-menu-end">
      <!-- item-->
      <h6 class="dropdown-header">Welcome {{ currentUser.displayName }}!</h6>
      <router-link class="dropdown-item" to="/"
        ><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Profile</span></router-link
      >
      <router-link class="dropdown-item" to="/">
        <i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Messages</span></router-link
      >
      <router-link class="dropdown-item" to="/">
        <i class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Taskboard</span></router-link
      >
      <router-link class="dropdown-item" to="/"
        ><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Help</span></router-link
      >
      <div class="dropdown-divider"></div>
      <router-link class="dropdown-item" to="/"
        ><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Balance : <b>$5971.67</b></span></router-link
      >
      <router-link class="dropdown-item" to="/"
        ><span class="badge bg-soft-success text-success mt-1 float-end">New</span
        ><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Settings</span></router-link
      >
      <router-link class="dropdown-item" to="/"
        ><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle">Lock screen</span></router-link
      >
      <a class="dropdown-item" href="/logout"
        ><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
        <span class="align-middle" data-key="t-logout">Logout</span></a
      >
    </div>
  </div>
</template>
