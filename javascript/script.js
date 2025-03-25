let saleTime = 86400;
let Timer = () => {
    let hours = Math.floor(saleTime / 3600);
    let minutes = Math.floor((saleTime % 3600) / 60);
    let seconds = saleTime % 60;
    document.getElementById('timer').innerText = `Sale Starts In: ${hours}h ${minutes}m ${seconds}s`;
    if (saleTime > 0){
        saleTime--;
    }
       
}
setInterval(Timer, 1000);

let slides = document.querySelectorAll(".carousel-item");
let slideIndex = 0;

let showSlide = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

let nextSlide = () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide();
}

setInterval
    (nextSlide, 2000);



let quote=document.querySelector('.blockquote p');
let footer=document.querySelector('.blockquote-footer');


const brands = [
    { name: "Nike", tagline: "Just Do It." },
    { name: "Adidas", tagline: "Impossible Is Nothing." },
    { name: "Puma", tagline: "Forever Faster." },
    { name: "Levi's", tagline: "Quality Never Goes Out of Style." },
    { name: "Gucci", tagline: "Quality is remembered long after price is forgotten." },
    { name: "Zara", tagline: "Love Your Curves." },
    { name: "H&M", tagline: "Fashion and Quality at the Best Price." },
    { name: "Versace", tagline: "Don’t Make Fashion Own You." },
    { name: "Louis Vuitton", tagline: "L'Art de Vivre." },
    { name: "Calvin Klein", tagline: "Between love and madness lies obsession." }
];
  let changeQuote=()=>{
    let index=Math.floor(Math.random()*brands.length);

    quote.textContent=brands[index].name;
    footer.textContent=brands[index].tagline;
  }
  changeQuote();

  setInterval(() => {
    changeQuote();
  }, 2000);
