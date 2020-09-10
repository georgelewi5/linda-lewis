window.addEventListener("load", function () {
    const loader = document.querySelector(".loadercontainer");
    loader.className += " hidden"; // class "loader hidden"
    alert(getComputedStyle(document.body).marginTop);
});
let script = document.createElement('html');
html.src = "portfolio.html";
document.head.append(script);