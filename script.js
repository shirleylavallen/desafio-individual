var URL = " https://jsonplaceholder.typicode.com/users";

const data = {nombre: "",
              apellido: "",
              data: ""}
              
              
document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("button");
    submit.addEventListener("click", function(ev) {
        ev.preventDefault();
    const userName = document.getElementById("name").value;
    const userlastName = document.getElementById("lastname").value;
    const start = document.getElementById("start").value;

    data.nombre = userName;
    data.apellido = userlastName;
    data.data = start;

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(Response => console.log(data, Response))    
    .catch(error => console.error("error", error))
  })
})