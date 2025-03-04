document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/whisper-child.jpg",
    "images/whisper-man.jpg",
    "images/whisper-woman.jpg"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Avoid caching by adding a unique query parameter
  const randomImageWithCacheBuster = `${randomImage}?v=${Date.now()}`;

  // Select the .card element and change its background image
  const card = document.querySelector(".card");
  if (card) {
    card.style.backgroundImage = `url(${randomImageWithCacheBuster})`;
    console.log(`Applied image: ${randomImageWithCacheBuster}`);
  } else {
    console.error(".card element not found!");
  }
});