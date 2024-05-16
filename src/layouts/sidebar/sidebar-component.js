class ComponentSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside>
      <section class="aside-nav">
        <nav>
          <ul>
            <li>
              <a href="../../pages/account/profile.html">My Account</a>
            </li>
            <li>
              <a href="../../pages/orders/orders.html">My Orders</a>
            </li>
            <li>
              <a href="../../pages/returns/returns.html">My Returns</a>
            </li>
            <li>
              <a href="../../pages/favorites/favorites.html">My Favorites</a>
            </li>
            <li>
              <a href="../../pages/trade-in-forms/trade-in-forms.html">My Trade-In Forms</a>
            </li>
            <li>
              <a href="../../pages/address/address.html">Address Book</a>
            </li>
            <li>
              <a href="../../pages/acc-info/acc-info.html">Account Information</a>
            </li>
            <li>
              <a href="../../pages/payment-methods/payment-methods.html">Stored Payment in Methods</a>
            </li>
            <li>
              <a href="../../pages/registry/registry.html">Gift Registry</a>
            </li>
          </ul>
        </nav>
      </section>
      <section class="aside-info">
        <h1>We're here for you</h1>
        <div class="info">
          <div class="logo">
            <img
              src="../../assets/icons/aside/icons8-chat-bot-50.png"
              alt=""
            />
          </div>
          <div class="info-text">
            <p>Coming soon you will be able to chat with us.</p>
          </div>
        </div>
        <div class="info">
          <div class="logo">
            <img src="../../assets/icons/aside/icons8-faq-50.png" alt="" />
          </div>
          <div class="info-text">
            <p>
              Explore our knowledge base and see everything we have to offer.
            </p>
          </div>
        </div>
        <div class="info">
          <div class="logo">
            <img src="../../assets/icons/aside/icons8-email-64.png" alt="" />
          </div>
          <div class="info-text">
            <p>
              Jot us a note and we'll get back to you as quick as possible.
            </p>
          </div>
        </div>
        <button>Write Us</button>
      </section>
    </aside>
    `;
  }
}

customElements.define("component-sidebar", ComponentSidebar);
