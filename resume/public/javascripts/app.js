var username = document.querySelector("#name");
var email = document.querySelector("#email");
var comment = document.querySelector("#comments");
var button = document.querySelector(".send");

button.addEventListener("click", addComments);

function addComments(e) {
  e.preventDefault();

  let data = {
    name: username.value,
    email: email.value,
    comment: comment.value,
  };
  console.log(data)

  fetch('http://localhost:5000/users', {
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
