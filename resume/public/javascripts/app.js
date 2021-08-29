const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comments");
const button = document.querySelector(".send");

button.addEventListener("click", addComments);

function addComments(e) {
  e.preventDefault();

  let data = {
    name: fullname.value,
    email: email.value,
    comment: comment.value,
  };

  fetch('http://localhost:3000/users', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    }
  }).then((res) => {
    alert("Saved");
  });
  console.log(data);
}
