let emailCollector = document.getElementById("emailCollector");

emailCollector.addEventListener("submit", (event) => {
  // event.preventDefault()
  let formData = new FormData(event.target);
  let userName = formData.get("firstName");
  let email = formData.get("emailAddress");
  let updatedContent = `

  <h2> Congratulations, ${userName}!</h2>
  <p>You're on your way to becoming a BBQ Master!</p>
  <p class="fine-print">
          You will get your weekly BBQ tips sent to: ${email}
  </p>`
  document.getElementById("mainContent").innerHTML = updatedContent
});
