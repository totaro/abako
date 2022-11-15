import navigation from "../json/leftNavigation.json" assert { type: "json" };

let navigationrows = "";
navigation.map(
  (item) =>
    (navigationrows += `<a href=${item.url} key=${item.id}><div class="right-navi">${item.label}</div></a>`)
);

document.getElementById("leftnavigation").innerHTML = navigationrows;
