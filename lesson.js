// document.addEventListener("DOMContentLoaded", () => {
//   fetch("https://ghibliapi.herokuapp.com/film")
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
//     .then(parsedRes => {
//       debugger;
//     });
// });
//when we invoke fetch we are making a promise.
//creating a new promise instance.
// --------------------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   let body = document.querySelector("body");
//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then(response => {
//       return response.json();
//     })
//     .then(parsedRes => {
//       parsedRes.forEach(movie => {
//         let newNode = document.createElement("p");
//         newNode.innerText = movie.title;
//         body.appendChild(newNode);
//       });
//     });
// });

// --------------------------------------------------------

document.addEventListener("DOMContentLoaded",() =>{
  let body = document.querySelector("body")
  fetch("https://ghibliapi.herokuapp.com/films")
.then(res => {
  if(res.ok) return res.json();
else{
  throw new Error("Network Problem")
}
})
.then(parsedRes => {
  parsedRes.forEach(movie => {
    let newNode = document.createElement("p");
    newNode.innerText = movie.title;
    body.appendChild(newNode);
  });
}).catch((err) => {
  let newNode = document.createElement("p");
  newNode.innerText = err;
  body.appendChild(newNode)
})
});
// --------------------------------------------------------
