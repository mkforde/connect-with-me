document.querySelector(".profile").addEventListener("click", () => {
  location.href = "https://www.linkedin.com/in/michaelkforde/";
});

document.querySelector(".container").addEventListener("click", (e) => {
  // Check if the clicked element has the class 'social' and the expected id
  if (e.target.closest(".social")) {
    const target = e.target.closest(".social"); // Find the closest social div
    const id = target.id; // Get the ID of the clicked social div

    switch (id) {
      case "blog":
        window.location = "https://blog.michaelforde.com";
        break;
      case "github":
        window.location = "https://github.com/mkforde";
        break;
      case "email":
        let name = "michael.kenneth.forde";
        let domain = "gmail.com";
        let email = name + "@" + domain;
        window.location = "mailto:" + email;
        break;
      case "insta":
        window.location = "https://www.instagram.com/_michaelforde/";
        break;
      default:
        break;
    }
  }
});
