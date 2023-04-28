const ipElement = document.getElementById("ip");

fetch("https://api.ipify.org/?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ip = data.ip;
    ipElement.textContent = ip;
  })
  .catch((error) => {
    console.log(error);
  });
