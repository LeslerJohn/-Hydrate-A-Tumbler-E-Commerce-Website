class ComponentCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <div class="card-image">
            <img
            src="../../assets/images/Products/4.png"
            alt="Tumbler"
            />
            <a href="../../pages/product/product.html"><button>Quick View</button></a>
        </div>
        <div class="card-content">
            <div class="card-details">
            <h3>24oz Cruiser with Handle</h3>
            <img class="card-heart" src="../../assets/icons/icons8-heart-50.png" alt="" />
            </div>
            <p>&#8369 699</p>
        </div>
        </div>
      `;
  }
}
customElements.define("component-card", ComponentCard);

const cardImages = document.querySelectorAll(".card-image");
const cardButtons = document.querySelectorAll(".card-image button");
const cardHearts = document.querySelectorAll(".card-heart");

cardImages.forEach((cardImage, index) => {
  cardImage.addEventListener("mouseover", () => {
    cardButtons[index].classList.add("card-active");
  });

  cardImage.addEventListener("mouseout", () => {
    cardButtons[index].classList.remove("card-active");
  });

  cardHearts[index].addEventListener("click", () => {
    cardHearts[index].src = "../../assets/icons/icons8-heart2-50.png";
    setTimeout(
      () => (cardHearts[index].src = "../../assets/icons/icons8-heart-50.png"),
      3000
    );
  });
});
