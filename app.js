/* ELEMENTS */
const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const productsWrapper = document.querySelector(".products-wrapper");
const menProductsWrapper = document.querySelector(".men-products-wrapper");
const womenProductsWrapper = document.querySelector(".women-products-wrapper");
const kidsProductsWrapper = document.querySelector(".kids-products-wrapper");
const header = document.querySelector("header");
const slider = document.querySelector(".slider");

/* PRODUCTS */
const productsData = [
  {
    id: 1,
    title: "Men's Casual Button-Up Shirt",
    price: 29.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/buttonupshirts-2048px-DSCF0679_nocap.jpg",
    description: "A stylish and comfortable casual shirt for men.",
    category: "Men",
  },
  {
    id: 2,
    title: "Women's Summer Dress",
    price: 39.99,
    image:
      "https://www.pinkvilla.com/files/styles/large/public/summer_dresses_for_women_4.jpg?itok=H-PzWEyR",
    description: "A lightweight and trendy summer dress for women.",
    category: "Women",
  },
  {
    id: 3,
    title: "Unisex Hoodie Sweatshirt",
    price: 49.99,
    image:
      "https://static-01.daraz.com.bd/p/5e0c3114849ebbc1913ed31e4cbc2ad7.jpg",
    description:
      "A cozy and versatile hoodie sweatshirt for both men and women.",
    category: "Unisex",
  },
  {
    id: 4,
    title: "Kids' Denim Jacket",
    price: 34.99,
    image: "https://www.gapcanada.ca/webcontent/0015/466/421/cn15466421.jpg",
    description: "A trendy denim jacket for kids, perfect for layering.",
    category: "Kids",
  },
  {
    id: 5,
    title: "Men's Winter Parka",
    price: 89.99,
    image:
      "https://static-01.daraz.com.bd/p/dfdc987dedd8c0313350166b88f3720b.jpg_720x720.jpg_.webp",
    description: "A warm and durable parka for men, ideal for cold weather.",
    category: "Men",
  },
  {
    id: 6,
    title: "Women's High-Waisted Jeans",
    price: 59.99,
    image:
      "https://i1.adis.ws/i/lucky/7W15019_411_2/UNI-FIT-HIGH-RISE-SKINNY-JEAN-411?sm=aspect&aspect=2:3&w=437&qlt=100",
    description:
      "A trendy pair of high-waisted jeans for women, perfect for everyday wear.",
    category: "Women",
  },
  {
    id: 7,
    title: "Kids' Printed T-shirt",
    price: 19.99,
    image:
      "https://images-platform.99static.com//1ttyCCvOO18CzCAnEEtuGw1KeGs=/0x134:960x1094/fit-in/590x590/projects-files/43/4363/436368/7b63bff6-f038-4d77-90a5-05ed82376382.jpg",
    description: "A fun and colorful printed t-shirt for kids.",
    category: "Kids",
  },
  {
    id: 8,
    title: "Men's Sports Shorts",
    price: 24.99,
    image: "https://cpimg.tistatic.com/05983110/b/4/Mens-Sports-Shorts.jpg",
    description:
      "Comfortable and breathable sports shorts for men, suitable for workouts.",
    category: "Men",
  },
  {
    id: 9,
    title: "Women's Yoga Leggings",
    price: 39.99,
    image:
      "https://images.asos-media.com/products/asos-4505-icon-yoga-legging/200245579-1-black?$n_480w$&wid=476&fit=constrain",
    description:
      "Stretchy and comfortable yoga leggings for women, perfect for fitness activities.",
    category: "Women",
  },
  {
    id: 10,
    title: "Kids' Hooded Sweatshirt",
    price: 29.99,
    image:
      "https://contents.mediadecathlon.com/p2116527/217b59b3e951601568b3c9badedf227a/p2116527.jpg",
    description:
      "A cozy and stylish hooded sweatshirt for kids, perfect for casual wear.",
    category: "Kids",
  },
  {
    id: 11,
    title: "Men's Formal Suit",
    price: 149.99,
    image: "https://sc04.alicdn.com/kf/Hf99cc002769340e68a5c5fc13efa20ca1.jpg",
    description:
      "A classic and sophisticated formal suit for men, suitable for special occasions.",
    category: "Men",
  },
  {
    id: 12,
    title: "Women's Cocktail Dress",
    price: 79.99,
    image: "https://www.stjohnknits.com/media/wysiwyg/1/8/18_0018_2x.png",
    description:
      "A chic and elegant cocktail dress for women, perfect for parties or special events.",
    category: "Women",
  },
];

/* SLIDER */
let curSlide = 0;

prevBtn.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = 2;
    frame.style.transform = `translateX(-200vw)`;
  } else {
    curSlide--;
    frame.style.transform = `translateX(-${100 * curSlide}vw)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (curSlide === 2) {
    curSlide = 0;
    frame.style.transform = `translateX(0vw)`;
  } else {
    curSlide++;
    frame.style.transform = `translateX(-${100 * curSlide}vw)`;
  }
});

/* PRODUCTS LISTING */

function generateTemplate(product) {
  const template = `
      <div class="product-card w-[20rem] rounded-lg shadow-md overflow-hidden">
        <div class="product-img w-full h-[20rem] overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src=${product.image}
            alt=${product.title}
          />
        </div>

        <div class="product-texts p-5 flex flex-col gap-3">
          <span class="product-category uppercase text-xs font-semibold tracking-widest text-sky-500">Men</span>
          <h3 class="product-title text-2xl h-[4rem]">
          ${product.title}
          </h3>
          <p class="product-description text-gray-500 h-[4.5rem]">
            ${product.description}
          </p>
          <div class="product-lower flex justify-between items-center">
            <p class="product-price text-2xl text-rose-500">${product.price.toLocaleString(
              "en-US",
              { style: "currency", currency: "USD" }
            )}</p>
            <button
              data-id=${product.id}
              class="btn add-to-cart-btn bg-sky-500 text-sky-50 py-2 px-5 rounded-md text-medium hover:bg-sky-600 duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
  `;

  return template;
}

/* ALL PRODUCTS */
productsData.forEach((product) => {
  const template = generateTemplate(product);
  productsWrapper.insertAdjacentHTML("afterbegin", template);
});

/* MEN PRODUCTS */
productsData
  .filter((product) => product.category === "Men")
  .forEach((product) => {
    const template = generateTemplate(product);
    menProductsWrapper.insertAdjacentHTML("afterbegin", template);
  });

/* WOMEN PRODUCTS */
productsData
  .filter((pr) => pr.category === "Women")
  .forEach((pr) => {
    const template = generateTemplate(pr);
    womenProductsWrapper.insertAdjacentHTML("afterbegin", template);
  });

/* KIDS PRODUCTS */
productsData
  .filter((product) => product.category === "Kids")
  .forEach((product) => {
    const template = generateTemplate(product);
    kidsProductsWrapper.insertAdjacentHTML("afterbegin", template);
  });

/* NAVABR FIXED */
const headerHeight = header.getBoundingClientRect().height;

function fixedHeader(entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    header.classList.add("myNavFixed");
    slider.classList.add(`mt-[${headerHeight}px]`); // mt-[80px]
  } else {
    header.classList.remove("myNavFixed");
    slider.classList.remove(`mt-[${headerHeight}px]`);
  }
}

const sliderObserver = new IntersectionObserver(fixedHeader, {
  root: null, // viewport
  threshold: 0,
  rootMargin: `-${headerHeight}px`, // -80px
});

sliderObserver.observe(slider);
