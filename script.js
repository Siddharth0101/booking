localStorage.setItem("name", "bob");
localStorage.removeItem("name");

sessionStorage.setItem("name", "john");
sessionStorage.setItem("name", "bob");

document.cookie = "name=Kyle; expires=" + new Date(9999, 0, 1).tooUTCString();

document.cookie =
  "lastName=Smith; expires" + new Date(9999, 0, 1).tooUTCString();

console.log(document.cookie);
