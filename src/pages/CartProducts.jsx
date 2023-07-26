import BlueWhiteBtn from "../components/BlueWhiteBtn";
import ProductCart from "../components/Product";

const CartProducts = () => {
  return (
    <main>
      <section className="cart-products">
        <div className="container">
          <div className="row">
            <div className="cart-info">
              <div className="h5">Cart</div>
              <ProductCart />
              <ProductCart />
              <ProductCart />
            </div>
            <div className="last-check">
              <div className="check-cart">
                <h4 className="title">Order Summary</h4>
                <div className="general-info">
                  <p className="text">Shipping</p>
                  <p className="text">Free</p>
                </div>
                <div className="general-info">
                  <div className="text-group">
                    <p className="text">Shipping</p>
                  </div>
                  <p className="text">Free</p>
                </div>
                <div className="general-info">
                  <h4 className="total-title">Subtotal</h4>
                  <h4 className="total-price">250$</h4>
                </div>
                <BlueWhiteBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartProducts;
