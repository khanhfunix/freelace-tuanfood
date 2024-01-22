const emailInputElement = document.getElementById("email");

const fetchEmailToBackend = async function () {
  const response = await fetch("URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emailInputElement.value),
  });
  try {
    const data = await response.json();
    window.alert(data.message);
  } catch (err) {
    throw err;
  }
};
const submitForm = () => {
  fetchEmailToBackend();
  console.log(emailInputElement.value);
};

const switchToHomePage = () => {
  window.location.href = "./index.html";
};

const switchToProductPage = () => {
  window.location.href = "./product.html";
};

const switchToContactPage = () => {
  window.location.href = "./contact.html";
};

const switchToRicePage = () => {
  window.location.href = "./rice.html";
};
const switchToJuicePage = () => {
  window.location.href = "./juice.html";
};
const switchToFrozenFoodPage = () => {
  window.location.href = "./frozenfood.html";
};
const switchToServicePage = () => {
  window.location.href = "./service.html";
};
