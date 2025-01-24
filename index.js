document.querySelector(".profile").addEventListener("click", () => {
  location.href = "https://www.linkedin.com/in/michaelkforde/";
});

document.getElementById("email").addEventListener("click", function () {
  let name = "michael.kenneth.forde";
  let domain = "gmail.com";
  let email = name + "@" + domain;
  window.location.href = "mailto:" + email;
});
