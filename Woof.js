document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".mybutton");
  let newDogeImage = document.createElement("img");
  let body = document.querySelector("body")
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {
    if(res.ok) return res.json();
  else{
    throw new Error("Network Problem")
  }
  })

  button.addEventListener("click", () => {
    console.log("clicked!");
    function getRandomImage() {
      let dogeArray = JSON.parse(message.response);
      console.log(dogeArray);
      newDogeImage["src"] = dogeArray.message;
      document.body.appendChild(newDogeImage);

    }
    getRandomImage();
  });
});
