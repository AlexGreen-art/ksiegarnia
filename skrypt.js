/* Brakujące zdjęcia pokazują zastępnik zamiast zepsutej ikony */
document.querySelectorAll(".ph img").forEach(function (img) {
  var brak = function () { img.closest(".ph").classList.add("brak"); };
  img.addEventListener("error", brak);
  if (img.complete && img.naturalWidth === 0) brak();
});

/* Pasek "Dziś" — dzień i godziny liczone z zegara odwiedzającego,
   żeby w niedzielę nie pisało, że jest piątek. */
(function () {
  var godziny = {0:[12,18], 1:[10,20], 2:[10,20], 3:[10,20], 4:[10,20], 5:[10,20], 6:[10,18]};
  var nazwy = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
  var teraz = new Date(), d = teraz.getDay(), g = godziny[d];
  var dzien = document.getElementById("dzis-dzien");
  var zakres = document.getElementById("dzis-godziny");
  var znacznik = document.getElementById("dzis-naglowek");
  if (dzien) dzien.textContent = nazwy[d];
  if (zakres) zakres.textContent = g[0] + ":00 – " + g[1] + ":00";
  if (znacznik) {
    var h = teraz.getHours() + teraz.getMinutes() / 60;
    if (h < g[0])       znacznik.textContent = "Dziś otwieramy o " + g[0] + ":00";
    else if (h < g[1])  znacznik.textContent = "Dziś otwarte do " + g[1] + ":00";
    else                znacznik.textContent = "Dziś już zamknięte";
  }
})();
