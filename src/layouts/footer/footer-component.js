class ComponentFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="foot">
      <section class="temporaryfoot">
        <div class="container">
          <div class="temporaryfoot-container">
            <h3>Stay Cool, Stay Hydrated, Stay Stylish</h3>
            <p>
              At Hydrate, our mission is to keep you cool, hydrated, and stylish
              no matter where life takes you. Our tumblers are designed with
              your active lifestyle in mind, so you can take your favorite
              drinks with you wherever you go. Join the Hydrate community today
              and find your perfect tumbler.
            </p>
          </div>
        </div>
      </section>
        <div class="container footer-container">
            <section class="footer-up">
                <div>
                    <img src="../../assets/icons/footer/icons8-lock.svg"></img>
                    <p>Secure Payment</p>
                </div>
                |
                <div>
                    <img src="../../assets/icons/footer/icons8-shipping-24.png"></img>
                    <p>Secure Payment</p>
                </div>
                |
                <div>
                    <img src="../../assets/icons/footer/return.png"></img>
                    <p>Secure Payment</p>
                </div>
            </section>
            <p class="line-break"></p>
            <section class="footer-down">
                <div class="box1">
                    <p class="footer-title">hydrate</p>
                    <p class="details">Stay up-to-date with the latest from Hydrate by following us on social media. We can't wait to see where your Hydrate tumbler takes you!</p>
                    <div class="footer-icons">
                        <img src="../../assets/icons/footer/icons8-instagram.svg"></img>
                        <img src="../../assets/icons/footer/icons8-pinterest.svg"></img>
                        <img src="../../assets/icons/footer/icons8-facebook.svg"></img>
                        <img src="../../assets/icons/footer/icons8-twitter.svg"></img>
                    </div>
                </div>
                <div>
                    <p class="footer-title">Shop</p>
                    <ul>
                        <a href="" class="link">Cruiser</a>
                        <a href="" class="link">Canteen</a>
                        <a href="" class="link">Tumbler</a>
                        <a href="" class="link">Commuter Cup</a>
                    </ul>
                </div>
                <div>
                    <p class="footer-title">About</p>
                    <ul>
                        <a href="" class="link">Home</a>
                        <a href="#" class="link">Contact</a>
                        <a href="#" class="link">Privacy Policy</a>
                    </ul>
                </div>
                <div>
                    <p class="footer-title">Need Help?</p>
                    <ul>
                        <a href="" class="link">My account</a>
                        <a href="../../../admin/pages/dashboard/dashboard.html" class="link">Go to Admin</a>
                    </ul>
                </div>
            </section>
        </div>
    </footer>
    `;
  }
}

customElements.define("component-footer", ComponentFooter);
