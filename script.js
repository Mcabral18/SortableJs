setTimeout(function () {
  alert("Welcome !!");
}, 1000);

// setTimeout(function () {
//   window.onload(alert("ola"))
// });

/*===== DRAG and DROP =====*/
const dropItems = document.querySelector("#drop_items");
new Sortable(dropItems, {
  animation: 350,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
});
