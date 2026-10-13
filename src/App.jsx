import { computed, onUnmounted, ref, watch } from "vue";

const products = [
  {
    id: 1,
    name: "Espresso No. 1",
    category: "Espresso",
    description: "Dark chocolate, hazelnut, and a hint of caramel.",
    price: 14,
    size: "30 ml",
    tag: "House classic",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "espresso",
  },
  {
    id: 2,
    name: "Oat Milk Latte",
    category: "With milk",
    description: "Smooth espresso, oat milk, and notes of biscuit.",
    price: 22,
    size: "250 ml",
    tag: "Your favorite",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "latte",
  },
  {
    id: 3,
    name: "Flat White",
    category: "With milk",
    description: "Double espresso, silky microfoam, and a bold taste.",
    price: 20,
    size: "180 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    tone: "flat",
  },
  {
    id: 4,
    name: "Cold Brew Tonic",
    category: "Iced",
    description: "18-hour cold brew, floral tonic, and fresh orange.",
    price: 24,
    size: "300 ml",
    tag: "New on the menu",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "cold",
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "With milk",
    description: "The perfect balance of espresso and silky foam.",
    price: 19,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    tone: "cappuccino",
  },
  {
    id: 6,
    name: "Matcha Cloud",
    category: "Specialties",
    description: "Ceremonial-grade matcha, cold milk, and natural vanilla.",
    price: 25,
    size: "280 ml",
    tag: "Coffee-free",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
    tone: "matcha",
  },
  {
    id: 7,
    name: "Caramel Macchiato",
    category: "With milk",
    description: "Velvety milk, rich espresso, and house-made caramel.",
    price: 23,
    size: "250 ml",
    tag: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    tone: "macchiato",
  },
  {
    id: 8,
    name: "Vanilla Cappuccino",
    category: "With milk",
    description: "Classic cappuccino with a touch of fragrant vanilla.",
    price: 21,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    tone: "vanilla",
  },
  {
    id: 9,
    name: "Caramel Latte",
    category: "With milk",
    description: "A mellow latte finished with buttery caramel.",
    price: 24,
    size: "280 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "caramel",
  },
  {
    id: 10,
    name: "Mocha",
    category: "With milk",
    description: "Double espresso, dark chocolate, and steamed milk.",
    price: 24,
    size: "250 ml",
    tag: "Chocolate lover",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=85",
    tone: "mocha",
  },
  {
    id: 11,
    name: "Cortado",
    category: "With milk",
    description: "Equal parts espresso and warm, silky milk.",
    price: 17,
    size: "120 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "cortado",
  },
  {
    id: 12,
    name: "Ristretto",
    category: "Espresso",
    description: "A short, concentrated shot with a sweet finish.",
    price: 14,
    size: "20 ml",
    tag: "Bold & bright",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "ristretto",
  },
  {
    id: 13,
    name: "Americano",
    category: "Espresso",
    description: "Espresso topped with hot water for a smooth finish.",
    price: 16,
    size: "220 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=900&q=85",
    tone: "americano",
  },
  {
    id: 14,
    name: "Honey Cinnamon Latte",
    category: "With milk",
    description: "Espresso, steamed milk, local honey, and cinnamon.",
    price: 24,
    size: "250 ml",
    tag: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "honey",
  },
  {
    id: 15,
    name: "Iced Vanilla Latte",
    category: "Iced",
    description: "Chilled espresso, fresh milk, and natural vanilla.",
    price: 23,
    size: "300 ml",
    tag: "Cool favorite",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "iced-vanilla",
  },
  {
    id: 16,
    name: "Espresso on Ice",
    category: "Iced",
    description: "A double shot poured over ice. Crisp and refreshing.",
    price: 18,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "iced-espresso",
  },
  {
    id: 17,
    name: "Iced Matcha Latte",
    category: "Iced",
    description: "Stone-ground matcha shaken with cold, creamy milk.",
    price: 25,
    size: "300 ml",
    tag: "Plant-powered",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
    tone: "iced-matcha",
  },
  {
    id: 18,
    name: "Dirty Chai",
    category: "Specialties",
    description: "Spiced chai and a shot of espresso, served over ice.",
    price: 26,
    size: "280 ml",
    tag: "Barista's pick",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "chai",
  },
];

const categories = ["All", "Espresso", "With milk", "Iced", "Specialties"];
const FREE_DELIVERY_THRESHOLD = 50;
const DELIVERY_FEE = 5;
const formatPrice = (amount) =>
  new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    maximumFractionDigits: 0,
  }).format(amount);

function BrandMark() {
  return (
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M7 15h19l-2 15H9L7 15Z"
          fill="currentColor"
        />
        <path
          d="M26 18h2.5a3.5 3.5 0 0 1 0 7H25M12 11V7h4v8m2-4V4h5v11m-14 4h16M11 33h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function App() {
  const category = ref("All");
  const theme = ref("dark");
  const cart = ref([]);
  const notice = ref("");
  const checkoutOpen = ref(false);
  const fulfillment = ref("pickup");
  const orderConfirmation = ref(null);
  const notificationTimer = ref(null);

  const visibleProducts = computed(() => category.value === "All"
    ? products
    : products.filter((product) => product.category === category.value));
  const itemCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0));
  const total = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const deliveryFee = computed(() => fulfillment.value === "delivery" && total.value < FREE_DELIVERY_THRESHOLD
    ? DELIVERY_FEE
    : 0);

  onUnmounted(() => window.clearTimeout(notificationTimer.value));
  function closeOnEscape(event) {
    if (event.key === "Escape") checkoutOpen.value = false;
  }
  watch(checkoutOpen, (isOpen, wasOpen) => {
    if (isOpen) window.addEventListener("keydown", closeOnEscape);
    else if (wasOpen) window.removeEventListener("keydown", closeOnEscape);
  });

  function showNotice(message) {
    notice.value = message;
    window.clearTimeout(notificationTimer.value);
    notificationTimer.value = window.setTimeout(() => notice.value = "", 2600);
  }

  function addToCart(product) {
    cart.value = (() => { const current = cart.value;
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { ...product, quantity: 1 }];
    })();
    showNotice(`${product.name} added to your cart`);
  }

  function changeQuantity(id, amount) {
    cart.value = (() => { const current = cart.value; return current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0); })();
  }

  function checkout(event) {
    event.preventDefault();
    if (!cart.value.length) return;
    const formData = new FormData(event.currentTarget);
    const orderItems = cart.value.map((item) => ({ ...item }));
    const subtotal = total.value;
    const orderFulfillment = formData.get("fulfillment");
    const orderDeliveryFee =
      orderFulfillment === "delivery" && subtotal < FREE_DELIVERY_THRESHOLD
        ? DELIVERY_FEE
        : 0;
    orderConfirmation.value = {
      number: `FNB-${Date.now().toString().slice(-6)}`,
      customerName: formData.get("name").trim(),
      fulfillment: orderFulfillment,
      address: formData.get("address")?.trim() ?? "",
      items: orderItems,
      subtotal,
      deliveryFee: orderDeliveryFee,
      total: subtotal + orderDeliveryFee,
    };
    cart.value = [];
    fulfillment.value = "pickup";
  }

  function openCheckout() {
    orderConfirmation.value = null;
    checkoutOpen.value = true;
  }

  function closeCheckout() {
    checkoutOpen.value = false;
    orderConfirmation.value = null;
  }

  return () => (
    <div class={`site-shell theme-${theme.value}`}>
      <header class="topbar">
        <a class="brand" href="#acasa" aria-label="Fifth and Bean, home">
          <BrandMark />
          <span class="brand-wordmark">
            FIFTH &amp; BEAN<span class="brand-dot">.</span>
            <small>NEW YORK COFFEE</small>
          </span>
        </a>
        <nav class="main-nav" aria-label="Main navigation">
          <a class="nav-link active" href="#meniu">Menu</a>
          <a class="nav-link" href="#poveste">Our story</a>
        </nav>
        <button
          class="theme-toggle"
          type="button"
          role="switch"
          aria-checked={theme.value === "dark"}
          aria-label="Schimbă tema"
          onClick={() => theme.value = theme.value === "dark" ? "light" : "dark"}
        >
          <span class="theme-toggle-icon" aria-hidden="true">{theme.value === "dark" ? "☾" : "☀"}</span>
          <span>{theme.value === "dark" ? "Dark" : "Light"}</span>
          <span class="switch-track" aria-hidden="true"><span /></span>
        </button>
        <a class="nav-cart" href="#cos">
          <span>Your order</span>
          <span class="cart-count">{itemCount.value}</span>
        </a>
      </header>

      <main id="acasa">
        <section class="hero">
          <div class="hero-copy">
            <div class="eyebrow"><span /> SPECIALTY COFFEE · NEW YORK</div>
            <h1>A good moment<br />starts with <em>coffee.</em></h1>
            <p>
              Carefully sourced beans. Slowly roasted. Poured with heart.
              Your favorite coffee, just a click away.
            </p>
            <a class="hero-button" href="#meniu">
              Explore the menu <span aria-hidden="true">↗</span>
            </a>
            <div class="hero-note">
              <span class="note-stars">★★★★★</span>
              <span>4.9 / 5 <i>from 280+ coffee lovers</i></span>
            </div>
          </div>
          <div class="hero-visual" role="img" aria-label="Freshly brewed coffee in a ceramic cup">
            <div class="hero-image" />
            <div class="hero-stamp">
              <span>Roasted</span>
              <strong>with care</strong>
              <span>every day</span>
            </div>
            <div class="hero-caption">
              <span>01 / 06</span><span>Your everyday ritual</span>
            </div>
          </div>
          <div class="hero-number" aria-hidden="true">01</div>
        </section>

        <section class="menu-layout" id="meniu">
          <div class="menu-main">
            <div class="section-heading">
              <div>
                <div class="eyebrow dark-eyebrow">MADE WITH INTENTION</div>
                <h2>Our <em>menu</em></h2>
              </div>
              <p>Good ingredients. Simple recipes.<br />Never rushed.</p>
            </div>

            <div class="menu-toolbar">
              <div class="category-tabs" role="group" aria-label="Filter by category">
                {categories.map((item) => (
                  <button
                    class={`category-tab${category.value === item ? " selected" : ""}`}
                    key={item}
                    onClick={() => category.value = item}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span class="menu-count">{visibleProducts.value.length} drinks</span>
            </div>

            <div class="product-grid">
              {visibleProducts.value.map((product, index) => (
                <article class="product-card" key={product.id} style={{ "--card-index": index }}>
                  <div class={`product-photo ${product.tone}`}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.tag && <span class="product-tag">{product.tag}</span>}
                    <span class="product-size">{product.size}</span>
                  </div>
                  <div class="product-content">
                    <div class="product-meta">{product.category}</div>
                    <div class="product-title-row">
                      <h3>{product.name}</h3>
                      <strong>{formatPrice(product.price)}</strong>
                    </div>
                    <p>{product.description}</p>
                    <button
                      class="add-button"
                      onClick={() => addToCart(product)}
                      type="button"
                    >
                      <span>Add to cart</span>
                      <span class="add-icon" aria-hidden="true">+</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside class="cart-panel" id="cos">
            <div class="cart-heading">
              <div>
                <div class="eyebrow dark-eyebrow">SOMETHING GOOD IS NEXT</div>
                <h2>Your <em>cart</em></h2>
              </div>
              <span class="cart-count panel-count">{itemCount.value}</span>
            </div>
            {cart.value.length === 0 ? (
              <div class="empty-cart">
                <div class="empty-cup" aria-hidden="true">☕</div>
                <strong>A cart full of potential.</strong>
                <p>Choose something delicious and we’ll make it with care.</p>
                <a href="#meniu">Browse the menu <span aria-hidden="true">→</span></a>
              </div>
            ) : (
              <div class="cart-items">
                {cart.value.map((item) => (
                  <div class="cart-item" key={item.id}>
                    <img src={item.image} alt="" />
                    <div class="cart-item-info">
                      <strong>{item.name}</strong>
                      <span>{formatPrice(item.price)}</span>
                      <div class="quantity-control" aria-label={`Cantitate ${item.name}`}>
                        <button
                          aria-label={`Decrease ${item.name}`}
                          onClick={() => changeQuantity(item.id, -1)}
                          type="button"
                        >−</button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label={`Add ${item.name}`}
                          onClick={() => changeQuantity(item.id, 1)}
                          type="button"
                        >+</button>
                      </div>
                    </div>
                    <strong class="line-total">{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
            )}
            <div class="cart-summary">
              <div class="delivery-note">
                <span aria-hidden="true">✳</span>
                {total.value >= FREE_DELIVERY_THRESHOLD ? "Free delivery unlocked!" : `Add ${formatPrice(FREE_DELIVERY_THRESHOLD - total.value)} more for free delivery`}
              </div>
              <div class="delivery-progress">
                <span style={{ width: `${Math.min((total.value / 50) * 100, 100)}%` }} />
              </div>
              <div class="subtotal"><span>Subtotal</span><strong>{formatPrice(total.value)}</strong></div>
              <p class="shipping-copy">Delivery is calculated at the next step.</p>
              <button class="checkout-button" disabled={!cart.value.length} onClick={openCheckout} type="button">
                <span>Proceed to checkout</span><span aria-hidden="true">↗</span>
              </button>
              {cart.value.length > 0 && (
                <button
                  class="clear-cart-button"
                  onClick={() => cart.value = []}
                  type="button"
                >
                  Empty cart
                </button>
              )}
              <div class="secure-note"><span aria-hidden="true">◇</span> Secure payment · Pick up in store</div>
            </div>
          </aside>
        </section>
        <section class="story-section" id="poveste">
          <div class="story-image" role="img" aria-label="A cozy New York coffee shop at sunrise">
            <span class="story-image-note">A little corner of New York</span>
          </div>
          <div class="story-copy">
            <div class="eyebrow dark-eyebrow"><span /> THE STORY BEHIND EVERY CUP</div>
            <h2>Born from a love<br />of <em>good coffee.</em></h2>
            <p>
              Fifth &amp; Bean began with a borrowed espresso machine, a tiny
              counter, and one big idea: even in a city that never slows down,
              everyone deserves a moment to pause.
            </p>
            <p>
              Our first cups were poured before sunrise for neighbors on their
              way to work. They came back for the coffee, stayed for the
              conversation, and soon our little corner felt like a community.
              That feeling is still at the heart of everything we make.
            </p>
            <div class="story-signoff">
              <span class="story-rule" />
              <span>Good coffee. Good people. Always room for one more.</span>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <a class="brand footer-brand" href="#acasa">
          <BrandMark />
          <span class="brand-wordmark">
            FIFTH &amp; BEAN<span class="brand-dot">.</span>
            <small>NEW YORK COFFEE</small>
          </span>
        </a>
        <p>Good coffee changes the rhythm of your day.</p>
        <span>© 2026 Fifth &amp; Bean. Made with care in New York City Adrian Statescu</span>
      </footer>

      {checkoutOpen.value && (
        <div
          class="checkout-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeCheckout();
          }}
        >
          <section
            class="checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
          >
            <button
              class="checkout-close"
              type="button"
              onClick={closeCheckout}
              aria-label="Close checkout"
            >
              ×
            </button>
            {orderConfirmation.value ? (
              <div class="order-success">
                <span class="success-icon" aria-hidden="true">✓</span>
                <div class="eyebrow dark-eyebrow">THANK YOU, {orderConfirmation.value.customerName.toUpperCase()}</div>
                <h2 id="checkout-title">Your order is <em>in.</em></h2>
                <p class="confirmation-number">Order {orderConfirmation.value.number}</p>
                <p class="confirmation-message">
                  {orderConfirmation.value.fulfillment === "pickup"
                    ? "We’ll have your coffee freshly made and ready for pickup shortly."
                    : `We’ll deliver your coffee to ${orderConfirmation.value.address}.`}
                </p>
                <div class="order-summary confirmation-summary">
                  {orderConfirmation.value.items.map((item) => (
                    <div class="summary-line" key={item.id}>
                      <span>{item.quantity} × {item.name}</span>
                      <strong>{formatPrice(item.price * item.quantity)}</strong>
                    </div>
                  ))}
                  {orderConfirmation.value.deliveryFee > 0 && (
                    <div class="summary-line">
                      <span>Delivery</span>
                      <strong>{formatPrice(orderConfirmation.value.deliveryFee)}</strong>
                    </div>
                  )}
                  <div class="summary-line summary-total">
                    <span>Total</span>
                    <strong>{formatPrice(orderConfirmation.value.total)}</strong>
                  </div>
                </div>
                <p class="demo-disclaimer">Demo checkout — no payment has been processed.</p>
                <button class="checkout-button success-done" onClick={closeCheckout} type="button">
                  Back to the menu <span aria-hidden="true">↗</span>
                </button>
              </div>
            ) : (
              <>
                <div class="eyebrow dark-eyebrow">ALMOST TIME FOR COFFEE</div>
                <h2 id="checkout-title">Complete your <em>order.</em></h2>
                <p class="checkout-intro">Add your details and choose how you’d like to enjoy it.</p>
                <form class="checkout-form" onSubmit={checkout}>
                  <label class="form-field">
                    <span>Your name</span>
                    <input autoComplete="name" name="name" placeholder="Alex Morgan" required />
                  </label>
                  <label class="form-field">
                    <span>Email address</span>
                    <input autoComplete="email" name="email" placeholder="alex@example.com" required type="email" />
                  </label>
                  <fieldset class="fulfillment-options">
                    <legend>How would you like your order?</legend>
                    <label class={fulfillment.value === "pickup" ? "fulfillment-option chosen" : "fulfillment-option"}>
                      <input
                        checked={fulfillment.value === "pickup"}
                        name="fulfillment"
                        onChange={() => fulfillment.value = "pickup"}
                        type="radio"
                        value="pickup"
                      />
                      <span><strong>Pick up</strong><small>Ready at Fifth &amp; Bean</small></span>
                    </label>
                    <label class={fulfillment.value === "delivery" ? "fulfillment-option chosen" : "fulfillment-option"}>
                      <input
                        checked={fulfillment.value === "delivery"}
                        name="fulfillment"
                        onChange={() => fulfillment.value = "delivery"}
                        type="radio"
                        value="delivery"
                      />
                      <span><strong>Delivery</strong><small>{total.value >= FREE_DELIVERY_THRESHOLD ? "Free delivery" : `${formatPrice(DELIVERY_FEE)} delivery`}</small></span>
                    </label>
                  </fieldset>
                  {fulfillment.value === "delivery" && (
                    <label class="form-field">
                      <span>Delivery address</span>
                      <input
                        autoComplete="street-address"
                        name="address"
                        placeholder="Street address, New York, NY"
                        required
                      />
                    </label>
                  )}
                  <div class="order-summary">
                    <div class="summary-heading">Your order</div>
                    {cart.value.map((item) => (
                      <div class="summary-line" key={item.id}>
                        <span>{item.quantity} × {item.name}</span>
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </div>
                    ))}
                    {fulfillment.value === "delivery" && (
                      <div class="summary-line">
                        <span>Delivery</span>
                        <strong>{deliveryFee.value ? formatPrice(deliveryFee.value) : "Free"}</strong>
                      </div>
                    )}
                    <div class="summary-line summary-total">
                      <span>Total</span>
                      <strong>{formatPrice(total.value + deliveryFee.value)}</strong>
                    </div>
                  </div>
                  <p class="demo-disclaimer">Demo checkout — no payment is processed.</p>
                  <button class="checkout-button" type="submit">
                    <span>Place demo order</span><span aria-hidden="true">↗</span>
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      <div class={`toast${notice.value ? " visible" : ""}`} role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>{notice.value}
      </div>
    </div>
  );
}

export default { setup: App };
