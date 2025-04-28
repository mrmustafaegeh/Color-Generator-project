document
  .getElementById("color-generator")
  .addEventListener("click", function () {
    document.getElementById("color-generator").style.backgroundColor =
      generateRandomgpp();
    setInterval(function () {
      var random4 = generateRandomNmuber();
      var random5 = generateRandomNmuber();
      var random6 = generateRandomNmuber();
      document.getElementById("sss").style.backgroundColor =
        generateRandomgpp();
    }, 2000);
  });
function generateRandomNmuber() {
  return Math.random() * 255;
}
function generateRandomgpp() {
  var random1 = generateRandomNmuber();
  var random2 = generateRandomNmuber();
  var random3 = generateRandomNmuber();
  document.querySelector(
    "#tag"
  ).innerText = `rgb(${random1}, ${random2}, ${random3})`;
  return `rgb(${random1},${random2},${random3})`;
}
