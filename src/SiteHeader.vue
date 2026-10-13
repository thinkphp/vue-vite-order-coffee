<script lang="jsx">
export default {
  props: {
    itemCount: { type: Number, required: true },
    theme: { type: String, required: true },
  },
  emits: ["toggleTheme"],
  setup(props, { emit }) {
    return () => (
      <header class="topbar">
        <a class="brand" href="#acasa" aria-label="Fifth and Bean, home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M7 15h19l-2 15H9L7 15Z" fill="currentColor" />
              <path d="M26 18h2.5a3.5 3.5 0 0 1 0 7H25M12 11V7h4v8m2-4V4h5v11m-14 4h16M11 33h14" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
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
          aria-checked={props.theme === "dark"}
          aria-label="Schimbă tema"
          onClick={() => emit("toggleTheme")}
        >
          <span class="theme-toggle-icon" aria-hidden="true">{props.theme === "dark" ? "☾" : "☀"}</span>
          <span>{props.theme === "dark" ? "Dark" : "Light"}</span>
          <span class="switch-track" aria-hidden="true"><span /></span>
        </button>
        <a class="nav-cart" href="#cos">
          <span>Your order</span>
          <span class="cart-count">{props.itemCount}</span>
        </a>
      </header>
    );
  },
};
</script>
