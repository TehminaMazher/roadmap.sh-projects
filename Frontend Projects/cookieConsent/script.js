const popup = document.getElementById("cookie-popup")
const acceptButton = document.getElementById("accept-cookies")

popup.style.display =
  localStorage.getItem("cookieConsent") === "true" ? "none" : "flex"

acceptButton.addEventListener("click", () => {
  //localStorage.setItem("cookieConsent", "true")
  popup.style.display = "none"
})
