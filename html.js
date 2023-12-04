window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  window.addEventListener("load", function () {
    const products = document.querySelectorAll(".product");
    products.forEach((product, index) => {
      setTimeout(() => {
        product.style.transform = "scale(1)";
      }, 100 * index);
    });
  });
  const alertButton = document.getElementById("button");
  alertButton.addEventListener("click", function () {
    alert("Kirim ke whatsapp admin untuk menanyakan sesuatu");
  });
  const products = document.querySelectorAll(".product");
