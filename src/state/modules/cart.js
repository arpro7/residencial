export const state = {
  itemsCart: [],
  totalCart: 0,
  qtyCart: 0
};

export const getters = {
  getCartItems(state) {
    return state.itemsCart;
  },

  getotalCartSum(state) {
    return state.totalCart;
  },

  getQuantity(state) {
    return state.qtyCart;
  }

};

export const mutations = {
  addProductToCart(state, payload) {

    const productData = payload

    const productInCartIndex = state.itemsCart.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {

      state.itemsCart[productInCartIndex].qtyCart++;

    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.picture,
        price: productData.price,
        qtyCart: 1,
        brand : productData.brand,
        partnumber: productData.partnumber
      };
      state.itemsCart.push(newItem);
    }
    state.qtyCart++;
    state.totalCart += productData.price
  },

  removeProductFromCart(state, payload) {

    const prodId = payload

    const productInCartIndex = state.itemsCart.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.itemsCart[productInCartIndex];
    state.itemsCart.splice(productInCartIndex, 1);

    state.qtyCart -= prodData.qtyCart;

    state.totalCart -= prodData.price * prodData.qtyCart;
  },

  decrementItemFromCart(state, payload) {

    const prodId = payload

    const productInCartIndex = state.itemsCart.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.itemsCart[productInCartIndex];

    if (prodData.qtyCart <= 1) {
      state.itemsCart.splice(productInCartIndex, 1);

      state.qtyCart -= prodData.qtyCart;

      state.totalCart -= prodData.price * prodData.qtyCart;

    } else {
      state.itemsCart[productInCartIndex].qtyCart--;

      state.qtyCart--;

      state.totalCart -= prodData.price;
    }
  },

  clearItemsFromCart(state) {
    state.itemsCart = [];
    state.qtyCart = 0;
    state.totalCart = 0;
  }

};

export const actions = {
  addToCart(context, payload) {
    const prodId = payload.id
    const products = context.rootGetters['product/getProductss'];
    const product = products.find(prod => prod.id === prodId)
    context.commit('addProductToCart', product)
  },

  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload.id)
  },

  decrementItem(context, payload) {
    context.commit('decrementItemFromCart', payload.id)
  },

  clearItems(context) {
    context.commit('clearItemsFromCart')
  }

};
