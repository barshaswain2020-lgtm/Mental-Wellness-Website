    const menuBtn = document.getElementById("menuBtn");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});