//function dragstart_handler(ev) {
//  console.log("dragStart:");
//  // Add the target element's id to the data transfer object
//  ev.dataTransfer.setData("text/plain", ev.target.id);
//
//  // Set the drag effect to move
//  ev.dataTransfer.dropEffect = "move";
//}
//
//function dragover_handler(ev) {
//  console.log("dragover")
//  ev.preventDefault();
//  // Set the dropEffect to move
//  ev.dataTransfer.dropEffect = "move"
//}
//
//function drop_handler(ev) {
//  ev.preventDefault();
//
//  // Get the id of the target and add the moved element to the target's DOM
//  var data = ev.dataTransfer.getData("text");
//
//  if (ev.target.hasAttribute("ondrop")) {
//    ev.target.appendChild(document.getElementById(data));
//  }
//}