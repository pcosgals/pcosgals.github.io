document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("generate-btn");
  const output = document.getElementById("story-output");

  button.addEventListener("click", () => {
    output.textContent = "Loading...";

    fetch("https://pcosgals-backend.onrender.com/generate", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        output.textContent = data.text;
      })
      .catch((err) => {
        console.error("Error:", err);
        output.textContent = "Something went wrong. Please try again.";
      });
  });
});
