function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((todos) => {
          return `
            <tr>
                <td>${todos.userId}</td>
                <td>${todos.id}</td>
                <td>${todos.title}</td>
                <td><input type="checkbox" id="checkbox" name=${todos.completed}/></td>
            <tr>`;
        })
        .join("");

      document.querySelector("#todos").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();