fetch("http://localhost:5000/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let groceries = document.getElementById("products");
    data.forEach((item) => {
      let items = document.createElement("li");
      items.innerText = `${item.name}`;
      groceries.appendChild(items);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });

fetch('http://localhost:5000/products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let groceries= document.getElementById("products");
    data.forEach((item) => {
      let items = document.createElement("li");
      items.innerText = `${item.name}`;
      groceries.appendChild(items);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });

fetch('http://localhost:5000/products/fruits')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let groceries = document.getElementById("fruList");
    data.forEach((item) => {
      let items = document.createElement("li");
      items.innerText = `${item.name}`;
      groceries.appendChild(items);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });

fetch('http://localhost:5000/products/vegetables')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let groceries = document.getElementById("vegList");
    data.forEach((item) => {
      let items = document.createElement("li");
      items.innerText = `${item.name}`;
      groceries.appendChild(items);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });
