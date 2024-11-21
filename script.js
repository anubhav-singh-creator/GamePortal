
document.addEventListener("DOMContentLoaded", () => {
    // Array of image paths from the images folder
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // Add as many images as you have
    ];

    let currentImageIndex = 0;
    const slideImage = document.getElementById("slide-image");
    const carouselBackground = document.getElementById("carousel-background");

    // Function to update the current slide
    function showSlide(index) {
        const currentImage = images[index];
        slideImage.src = currentImage;
        carouselBackground.style.backgroundImage = `url(${currentImage})`;

        // Restart the slide animation
        slideImage.style.animation = 'none';
        void slideImage.offsetWidth; // Trigger reflow to restart animation
        slideImage.style.animation = 'slideRightToLeft 3s ease forwards';
    }

    // Start carousel
    function startCarousel() {
        showSlide(currentImageIndex);
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showSlide(currentImageIndex);
        }, 3000); // Slide interval matches animation duration
    }

    startCarousel();
});


/*--------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    // Array of images from the game category folder (you'll load these dynamically)
    const categories = [
        'gamecat/Anime.png',
        'gamecat/Space.png',
        'gamecat/RPG.png',
        'gamecat/Minecraft.png',
        'gamecat/Anime.png',
        'gamecat/Kids.png',
        'gamecat/Shooting.png',
        'gamecat/Fantasy.png',
        // Add more images as needed
    ];

    const gameCategoryContainer = document.getElementById("game-category-container");

    
    // Populate the game category container
    categories.forEach(categoryPath => {
        const categoryName = categoryPath.split('/').pop().split('.')[0]; // Extracts name from file
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("game-category");

        const img = document.createElement("img");
        img.src = categoryPath;
        img.alt = categoryName;

        const label = document.createElement("label");
        label.textContent = categoryName;

        categoryDiv.appendChild(img);
        categoryDiv.appendChild(label);
        gameCategoryContainer.appendChild(categoryDiv);
    });

    // Duplicate categories for infinite scrolling
    categories.forEach(categoryPath => {
        const categoryName = categoryPath.split('/').pop().split('.')[0]; // Extracts name from file
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("game-category");

        const img = document.createElement("img");
        img.src = categoryPath;
        img.alt = categoryName;

        const label = document.createElement("label");
        label.textContent = categoryName;

        categoryDiv.appendChild(img);
        categoryDiv.appendChild(label);
        gameCategoryContainer.appendChild(categoryDiv);
    });

    // Scroll functionality
    let scrollAmount = 0;
    const scrollStep = 160; // Adjust scroll step to match image width

    // Scroll right
    document.getElementById("scroll-right").addEventListener("click", () => {
        scrollAmount += scrollStep;
        gameCategoryContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });

        // Reset to the start if reached the end
        if (scrollAmount >= gameCategoryContainer.scrollWidth / 2) {
            scrollAmount = 0; // Reset to the start for infinite loop
            gameCategoryContainer.scrollTo({ left: scrollAmount, behavior: 'auto' });
        }
    });

    // Scroll left
    document.getElementById("scroll-left").addEventListener("click", () => {
        scrollAmount -= scrollStep;
        gameCategoryContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });

        // Reset to the end if reached the beginning
        if (scrollAmount < 0) {
            scrollAmount = gameCategoryContainer.scrollWidth / 2; // Reset to end for infinite loop
            gameCategoryContainer.scrollTo({ left: scrollAmount, behavior: 'auto' });
        }
    });
});