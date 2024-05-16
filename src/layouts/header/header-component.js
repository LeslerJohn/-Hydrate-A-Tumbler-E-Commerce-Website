class ComponentHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class = "header">
            <nav class="container head-con">
                <section class="left-header">
                    <img class="logo" src="../../assets/icons/LOGO.png"/>
                    <p class="title">hydrate</p>
                </section>
                <section class="middle-header">
                    <ul>
                        <li><a href="../../pages/home/index.html">
                            <i class="fas fa-home"></i>
                            <span>Home</span>
                        </a></li>
                        <li><a href="../../pages/drinkware/drinkware.html">
                            <i class="fas fa-shop"></i>
                            <span>Drinkware+</span>
                        </a></li>
                        <li><a href="../../pages/sale/sale.html">
                            <i class="fas fa-features"></i>
                            <span class="header-features">Features <p>HOT</p></span>
                        </a></li>
                        <li><a href="../../pages/faq/faq.html">
                            <i class="fas fa-about"></i>
                            <span>FAQ</span>
                        </a></li>
                        <li><a href="../../pages/contact/contact.html">
                            <i class="fas fa-contact"></i>
                            <span>Contact</span>
                        </a></li>
                    </ul>
                </section>
                <section class="right-header">
                <ul> 
                  <li id="cart-hover">
                    <a id="cart-btn" href="../../pages/cart/cart.html"
                      ><button>
                        <img
                          src="../../assets/icons/header/icons8-cart-48.png"
                          class="buttons"
                        />
                        <span>0</span>
                        </button
                    ></a>
                    <ul id="cart-slidedown">
                    <li><p>Recently added products</p></li>
                    <li>
                      <div class="cart-preview-products">
                        <p>You have no items in your cart.</p>
                      </div>
                    </li>
                    <li class="cart-preview-bottom"><p>0 more products</p><a href="../../pages/cart/cart.html"><button>View cart</button></a></li>
                  </ul>
                  </li>
                  <li id="account-hover">
                    <a id="account-btn" href="../../pages/account/profile.html"
                      ><button>
                        <img
                          src="../../assets/icons/header/icons8-user-48.png"
                          class="buttons"
                        /></button
                    ></a>
                    <ul id="slidedown">
                      <li><a href="../../pages/account/profile.html">My Account</a></li>
                      <li><a href="../../pages/orders/orders.html">My Orders</a></li>
                      <li><a href="../../pages/favorites/favorites.html">My Favorites</a></li>
                      <li class="logout"><a href="../../features/authentication/components/sign-in-up.html">Log out</a></li>
                    </ul>
                  </li>
                  <li> 
                    <button class="menu"> 
                    <img class="buttons menu-button" src="../../assets/icons/header/icons8-hamburger-menu-50.png">
                    </button>
                  </li>
                </ul>
              </section>
            </nav>
        </header>
        `;
  }
}

customElements.define("component-header", ComponentHeader);

const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    headerEl.classList.add("header-scrolled");
  } else if (window.scrollY <= 20) {
    headerEl.classList.remove("header-scrolled");
  }
});

const accountBtn = document.getElementById("account-btn");
const slideDown = document.getElementById("slidedown");
const accountHover = document.getElementById("account-hover");
const cartSlideDown = document.getElementById("cart-slidedown");
const cartHover = document.getElementById("cart-hover");

/* accountBtn.addEventListener("mouseover", () => {
  slideDown.style.display = "block";
});

accountBtn.addEventListener("mouseout", () => {
  slideDown.style.display = "none";
});

slideDown.addEventListener("mouseover", () => {
  slideDown.style.display = "block";
});

slideDown.addEventListener("mouseout", () => {
  slideDown.style.display = "none";
}); */

accountHover.addEventListener("mouseover", () => {
  slideDown.style.display = "flex";
});

accountHover.addEventListener("mouseout", () => {
  slideDown.style.display = "none";
});

cartHover.addEventListener("mouseover", () => {
  cartSlideDown.style.display = "flex";
});

cartHover.addEventListener("mouseout", () => {
  cartSlideDown.style.display = "none";
});

const menu = document.querySelector(".right-header ul li .menu");
let navbar = document.querySelector(".middle-header ul");

menu.onclick = () => {
  navbar.classList.toggle("open");
};

const Imgmenu = document.querySelector(".right-header ul li .menu-button");

Imgmenu.addEventListener("click", function () {
  const currentSrc = this.getAttribute("src");
  const newSrc =
    currentSrc === "../../assets/icons/header/icons8-hamburger-menu-50.png"
      ? "../../assets/icons/header/icons8-x-48.png"
      : "../../assets/icons/header/icons8-hamburger-menu-50.png";
  this.setAttribute("src", newSrc);
});
