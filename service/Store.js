const Store = {
  menu: null,
  cart: [],
};

// Create a proxy for the store

const proxyStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;

    if (property === "menu") {
      console.log("menu property updated:", value);
      window.dispatchEvent(new Event("appmenuchange"));
    }

    if (property === "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export default proxyStore;
