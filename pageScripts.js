var n = document.querySelectorAll(".bz_buglist tbody tr");

for (var i = 0; i < n.length; ++i) {
  var item = n[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
console.log(item.getAttribute("id"));
}