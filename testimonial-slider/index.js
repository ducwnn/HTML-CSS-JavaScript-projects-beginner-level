const testimonials = [
  {
    name: "Odie P",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "No matter where you go, samsung is the coolest, most happening thing around! Not able to tell you how happy I am with samsung. I couldn't have asked for more than this.",
  },
  {
    name: "Inga B",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "Samsung is awesome! I would gladly pay over 600 dollars for samsung. Wow what great service, I love it! Thanks guys, keep up the good work!",
  },
  {
    name: "Merry F",
    photoUrl:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "We've used samsung for the last five years. Samsung was worth a fortune to my company. Definitely worth the investment. It's exactly what I've been looking for.",
  },
  {
    name: "Cordelia X",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    text: "It's just amazing. ",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  idx++;
  if(idx=== testimonials.length){
    idx = 0;
  }
  setTimeout(()=>{
    updateTestimonial();
  }, 7000);
}
