const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById(
  "btnNavbarDeco"
) as HTMLButtonElement;
const signoutBtn2 = document.getElementById(
  "btn2NavbarDeco"
) as HTMLButtonElement;
const signoutBtn3 = document.getElementById(
  "btn3NavbarDeco"
) as HTMLButtonElement;

function getRole() {
  return getCookie(RoleCookieName);
}

signoutBtn.addEventListener("click", signout);
signoutBtn2.addEventListener("click", signout);
signoutBtn3.addEventListener("click", signout);

function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  window.location.replace("/");
}

function setToken(token: any) {
  setCookie(tokenCookieName, token, 7);
}
function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name: string, value: string, days: number) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name: string) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

/*
disconnected
connected (admin / vet / employe)
  -admin
  -veto
  -employe
*/

function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    if (element instanceof HTMLElement && element.dataset.show) {
      switch (element.dataset.show) {
        case "disconnected":
          if (userConnected) {
            element.classList.add("d-none");
          }
          break;
        case "connected":
          if (!userConnected) {
            element.classList.add("d-none");
          }
          break;
        case "admin":
          if (!userConnected || role != "admin") {
            element.classList.add("d-none");
          }
          break;
        case "veto":
          if (!userConnected || role != "veto") {
            element.classList.add("d-none");
          }
          break;
        case "employe":
          if (!userConnected || role != "employe") {
            element.classList.add("d-none");
          }
          break;
      }
    }
  })
}
