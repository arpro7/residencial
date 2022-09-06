<script>
import { SimpleBar } from "simplebar-vue3";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: { SimpleBar },

  computed: {
    ...mapState("cart", ["itemsCart"]),
    ...mapState("cart", ["totalCart"]),
    ...mapState("cart", ["qtyCart"]),
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),

    incrementItem(data) {
      this.$store.dispatch("cart/addToCart", { id: data });
    },

    decrementItem(data) {
      this.$store.dispatch("cart/decrementItem", { id: data });
    },

    removeItem(data) {
      this.$store.dispatch("cart/removeFromCart", { id: data });
    },

    clearItems() {
      this.$store.dispatch("cart/clearItems");
    },
  },
};
</script>

<template>
  <div class="dropdown topbar-head-dropdown ms-1 header-item">
    <button
      type="button"
      class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
      id="page-header-cart-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="bx bx-shopping-bag fs-22"></i>
      <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-info"
        >{{ qtyCart }}<span class="visually-hidden">unread messages</span></span
      >
    </button>
    <div
      class="dropdown-menu dropdown-menu-end p-0"
      aria-labelledby="page-header-cart-dropdown"
      style="min-width: 500px"
    >
      <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
        <div class="row align-itemsCart-center">
          <div class="col">
            <h6 class="m-0 fs-16 fw-semibold">My Cart</h6>
          </div>

          <div class="col">
            <b-button class="btn" size="sm" type="button" @click="clearItems">
              <i class="ri-shopping-cart-2-line "></i> Vaciar
            </b-button>
          </div>

          <div class="col-auto">
            <span class="badge badge-soft-warning fs-13"> {{ qtyCart }} itemsCart</span>
          </div>
        </div>
      </div>
      <SimpleBar data-simplebar style="max-height: 350px">
        <div>
          <div class="d-block dropdown-item text-wrap px-3 py-2" v-for="item in itemsCart" :key="item.productId">
            <div class="d-flex align-itemsCart-center">
              <img :src="item.image" class="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
              <div class="flex-1 me-5">
                <h6 class="mt-0 mb-2 fs-14">
                  <router-link
                    class="text-reset"
                    :to="{
                      name: 'product-detail',
                      params: { id: item.productId },
                    }"
                    >{{ item.title }}</router-link
                  >
                </h6>

                <ul class="list-inline hstack gap-2 mb-0">
                  <li class="list-inline-item">Cant:</li>
                  <li class="list-inline-item">
                    <button
                      type="button"
                      class="btn btn-soft-secondary btn-sm dropdown"
                      @click="decrementItem(item.productId)"
                    >
                      –
                    </button>
                  </li>
                  <li class="list-inline-item">
                    <div>{{ item.qtyCart }}</div>
                  </li>
                  <li class="list-inline-item">
                    <button
                      type="button"
                      class="btn btn-soft-secondary btn-sm dropdown"
                      @click="incrementItem(item.productId)"
                    >
                      +
                    </button>
                  </li>
                  <li class="list-inline-item">x</li>
                  <li class="list-inline-item">
                    {{ $n(item.price, "currency", "en-US") }}
                  </li>
                  <li class="list-inline-item">=</li>
                  <li class="list-inline-item">
                    <h5 class="m-0">{{ $n(item.qtyCart * item.price, "currency", "en-US") }}</h5>
                  </li>
                  <li class="list-inline-item">
                    <button
                      type="button"
                      class="btn btn-icon btn-sm btn-ghost-secondary"
                      @click="removeItem(item.productId)"
                    >
                      <i class="ri-close-fill fs-16"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
      <div class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border d-grid">
        <div class="d-flex justify-content-between align-itemsCart-center pb-3">
          <h5 class="m-0 text-muted">Total:</h5>
          <div class="px-2" v-if="this.totalCart <= 0">
            <h5 class="m-0">$0</h5>
          </div>
          <div v-else>
            <h5 class="m-0">{{ $n(totalCart, "currency", "en-US") }}</h5>
          </div>
        </div>
        <router-link to="/" class="btn btn-secondary text-center"> Checkout </router-link>
      </div>
    </div>
  </div>
</template>
