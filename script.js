const container = document.querySelector(".container")
/* Answers Variables */
const answer1 = document.querySelector(".a1")
const answer2 = document.querySelector(".a2")
const answer3 = document.querySelector(".a3")
const answer4 = document.querySelector(".a4")

/* Plus Icon Variables */
const plus1 = document.querySelector(".q1-fig")
const plus2 = document.querySelector(".q2-fig")
const plus3 = document.querySelector(".q3-fig")
const plus4 = document.querySelector(".q4-fig")

/* Minus Icon Variables */
const minus1 = document.querySelector(".minus1-icon")
const minus2 = document.querySelector(".minus2-icon")
const minus3 = document.querySelector(".minus3-icon")
const minus4 = document.querySelector(".minus4-icon")

plus1.addEventListener("click", () =>{
  answer1.classList.remove("hidden1");
  plus1.style.display = "none";
  minus1.style.zIndex = "0";
} )
minus1.addEventListener("click", () =>{
  answer1.classList.add("hidden1");
  minus1.style.zIndex = "-1";
  plus1.style.display = "block"
})

plus2.addEventListener("click", () =>{
  answer2.classList.remove("hidden2");
  plus2.style.display = "none";
  minus2.style.zIndex = "0";
} )
minus2.addEventListener("click", () =>{
  answer2.classList.add("hidden2");
  minus2.style.zIndex = "-1";
  plus2.style.display = "block"
})

plus3.addEventListener("click", () =>{
  answer3.classList.remove("hidden3");
  plus3.style.display = "none";
  minus3.style.zIndex = "0";
} )
minus3.addEventListener("click", () =>{
  answer3.classList.add("hidden3");
  minus3.style.zIndex = "-1";
  plus3.style.display = "block"
})

plus4.addEventListener("click", () =>{
  answer4.classList.remove("hidden4");
  plus4.style.display = "none";
  minus4.style.zIndex = "0";
} )
minus4.addEventListener("click", () =>{
  answer4.classList.add("hidden4");
  minus4.style.zIndex = "-1";
  plus4.style.display = "block"
})