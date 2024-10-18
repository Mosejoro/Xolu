document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  var teamCarousel = new bootstrap.Carousel(
    document.getElementById("teamCarousel", "teamCarousels"),
    {
      interval: 3000,
      wrap: true,
      keyboard: false,
    }
  );
});
