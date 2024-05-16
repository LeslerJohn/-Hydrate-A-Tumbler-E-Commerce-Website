class ComponentNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <div class="header-nav">
                <ul>
                    <li>
                        <a href="">
                        <img src="../../assets/icons/icons8-bell-50.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="../../assets/icons/icons8-messages-32.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="" alt="" class="profile-pic">
                        </a>
                    </li>
                    <li>
                        <div class="box">
                            <span class="admin-name">Daniela Alpez</span>
                            <span>Admin</span>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
        <nav onmouseover="hover()" onmouseout="notHover()">
            <ul>
                <li>
                    <a href="#" class="logo">
                        <img src="../../assets/icons/LOGO.png" alt="">
                        <span class="nav-title">hydrate</span>
                    </a>
                </li>
                <li><span class="nav-header">Main Home</span></li>
                <li>
                    <a href="../../pages/dashboard/dashboard.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-dashboard-layout-24.png" alt="">
                        <span class="nav-item">Dashboard</span>
                    </a>
                </li>
                <li><span class="nav-header">All Page</span></li>
                <li class="menu">
                    <a href="#" class="row">
                        <img class="fas" src="../../assets/icons/icons8-cart-48.png" alt="">
                        <span class="nav-item">Ecommerce</span>
                        <img class="fas arrow" src="../../assets/icons/icons8-arrow-30.png" alt="">
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="../../pages/ecommerce/productList.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Product List</span>
                            </a>
                        </li>
                        <li>
                            <a href="../../pages/ecommerce/addProduct.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Add Product</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu">
                    <a href="#" class="row">
                        <img class="fas" src="../../assets/icons/icons8-bursts-32.png" alt="">
                        <span class="nav-item">Category</span>
                        <img class="fas arrow" src="../../assets/icons/icons8-arrow-30.png" alt="">
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="../../pages/category/categoryList.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Category List</span>
                            </a>
                        </li>
                        <li>
                            <a href="../../pages/category/addCategory.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Add Category</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu">
                    <a href="#" class="row">
                        <img class="fas" src="../../assets/icons/icons8-order-80.png" alt="">
                        <span class="nav-item">Order</span>
                        <img class="fas arrow" src="../../assets/icons/icons8-arrow-30.png" alt="">
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="../../pages/order/orderList.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Order List</span>
                            </a>
                        </li>
                        <li>
                            <a href="../../pages/order/orderDetails.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Order Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="../../pages/order/orderTracking.html">
                                <img src="../../assets/icons/icons8-square-30.png" alt="">
                                <span>Order Tracking</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="../../pages/gallery/gallery.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-gallery-48.png" alt="">
                        <span class="nav-item">Gallery</span>
                    </a>
                </li>
                <li>
                    <a href="../../pages/report/report.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-exclamation-50.png" alt="">
                        <span class="nav-item">Report</span>
                    </a>
                </li>
                <li><span class="nav-header">Setting</span></li>
                <li>
                    <a href="../../pages/setting/setting.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-setting-24.png" alt="">
                        <span class="nav-item">Setting</span>
                    </a>
                </li>
                <li><span class="nav-header">Support</span></li>
                <li>
                    <a href="../../pages/admin-faq/faq.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-headset-50.png" alt="">
                        <span class="nav-item">FAQs</span>
                    </a>
                </li>
                <li>
                    <a href="../../pages/policy/policy.html" class="row">
                        <img class="fas" src="../../assets/icons/icons8-privacy-50.png" alt="">
                        <span class="nav-item">Privacy Policy</span>
                    </a>
                </li>
                <li><span class="nav-header">Connect Us</span></li>
                <li>
                    <div class="media">
                        <a href=""><img src="../../assets/icons/icons8-facebook-50.png" alt="" class="media-logo"></a>
                        <a href=""><img src="../../assets/icons/icons8-instagram-50.png" alt="" class="media-logo"></a>
                        <a href=""><img src="../../assets/icons/icons8-linkedin-50.png" alt="" class="media-logo"></a>
                        <a href=""><img src="../../assets/icons/icons8-twitter-50.png" alt="" class="media-logo"></a>
                    </div>
                </li>
            </ul>
        </nav>
        `;
  }
}

customElements.define("admin-navigation-component", ComponentNavigation);

let menu = document.querySelectorAll(".menu");
console.log(menu);

menu.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

function hover() {
  document.body.classList.add("hovered");
  console.log("On hover");
}

function notHover() {
  document.body.classList.remove("hovered");
  console.log("not hover");
}
