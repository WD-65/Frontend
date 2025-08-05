const calcCartCount = (cart) => cart.reduce((acc, item) => acc + item.count, 0);

const calcCartCost = (cart) =>
  cart.reduce((acc, item) => acc + item.price * item.count, 0);

const checkInCart = (cart, product) => {
  return cart.find((item) => item.id === product.id);
};

const addToCart = (cart, product) => {
  const isInCart = checkInCart(cart, product);
  let updatedCart = [];

  if (!isInCart) {
    const newItem = { ...product, count: 1 };
    updatedCart = [...cart, newItem];
  } else {
    //find item and increment count
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  }
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

const removeFromCart = (cart, product) => {
  const prodInCart = checkInCart(cart, product);
  let updatedCart = [];

  if (prodInCart.count === 1) {
    updatedCart = cart.filter((item) => product.id !== item.id);
  } else {
    //find item and reduce count
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count - 1 } : item
    );
  }
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export { addToCart, calcCartCost, calcCartCount, checkInCart, removeFromCart };
