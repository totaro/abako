const navigation = [
  {
    id: 0,
    label: "Yleistä",
    url: "/yleista",
  },
  {
    id: 1,
    label: "Tulipalot",
    url: "/tulipalot",
  },

  {
    id: 2,
    label: "Autokolarit",
    url: "/autokolarit",
  },
  {
    id: 3,
    label: "Onnettomuudet",
    url: "/onnettomuudet",
  },
  {
    id: 4,
    label: "Henkilövahingot",
    url: "/henkilovahingot",
  },
  {
    id: 5,
    label: "Luonnonmullistukset",
    url: "/luonnonmullistukset",
  },
  {
    id: 6,
    label: "Kääntövirheet",
    url: "/kaantovirheet",
  },
  {
    id: 7,
    label: "Murrot",
    url: "/murrot",
  },
];

// import navigation from "./leftNavigation.json" assert { type: "json" };

navigation.map((item) =>
  document.write(
    `<div class="right-navi"><a href=${item.url} key=${item.id}>${item.label}</a></div>`
  )
);