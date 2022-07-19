function calculate() {
  nume = document.getElementById("a").value;
  sexul = document.getElementById("b").value;
  greutate = parseInt(document.getElementById("c").value);
  var img_men_2 = document.getElementById("img_men_2");

  if (nume === "" || sexul === "" || greutate === "") {
    // alert("Nu ai introdus valori");
    img_men_2.style = "display:flex";
    img_women_1.style = "display:none";
    img_men_1.style = "display:none";
    img_men.style = "display:none";
    img_women.style = "display:none";
    console.log("please input your data");
  } else if (greutate <= 18) {
    return (
      (document.getElementById("show_john").style = "display:flex"),
      (z = document.getElementById("name_john").innerHTML = nume),
      (x = document.getElementById("identiti").innerHTML = sexul),
      (c = document.getElementById("weight").innerHTML = greutate),
      (v = document.getElementById("nutrition_rezult").innerHTML =
        "Underweight"),
      console.log(nume + " your bodyweight it falls within underweight ")
    );
  } else if (greutate >= 18.5 && greutate < 25) {
    return (
      (document.getElementById("show_john").style = "display:flex"),
      (document.getElementById("name_john").innerHTML = nume),
      (document.getElementById("identiti").innerHTML = sexul),
      (document.getElementById("weight").innerHTML = greutate),
      (document.getElementById("nutrition_rezult").innerHTML = "Normal weight"),
      console.log(nume + " your bodyweight it falls within normal ")
    );
  } else if (greutate >= 25.5 && greutate < 30) {
    return (
      (document.getElementById("show_john").style = "display:flex"),
      (document.getElementById("name_john").innerHTML = nume),
      (document.getElementById("identiti").innerHTML = sexul),
      (document.getElementById("weight").innerHTML = greutate),
      (document.getElementById("nutrition_rezult").innerHTML = "Overweight"),
      console.log(nume + " your bodyweight it falls within overweight ")
    );
  } else {
    return (
      (document.getElementById("show_john").style = "display:flex"),
      (document.getElementById("name_john").innerHTML = nume),
      (document.getElementById("identiti").innerHTML = sexul),
      (document.getElementById("weight").innerHTML = greutate),
      (document.getElementById("nutrition_rezult").innerHTML = "Obese"),
      console.log(nume + " Your bodyweight it falls within obese ")
    );
  }
}
function open_john() {
  var show_display = document.getElementById("show_john");
  document.getElementById("a").value = "John Doe";
  document.getElementById("b").value = "M";
  document.getElementById("c").value = "24";
  show_display.style = "display:none";
}

function open_mary() {
  document.getElementById("a").value = "Mary Anne";
  document.getElementById("b").value = "F";
  document.getElementById("c").value = "30";
  document.getElementById("show_mary").style = "display:none";
}

var btn_first = document.getElementById("btn_john");
var img_men = document.getElementById("img_men");
const calcu = document.getElementById("btn_calc");

btn_first.addEventListener("click", function () {
  if (btn_john.click && calcu.click) {
    img_men.style = "display:flex";
    img_men_2.style = "display:none";
    img_women.style = "display:none";
    img_men_1.style = "display:none";
  } else {
    console.log("nimic");
  }
});

var btn_seccond = document.getElementById("btn_mary");
var img_women = document.getElementById("img_women");
const calcu_first = document.getElementById("btn_calc");

btn_seccond.addEventListener("click", function () {
  if (btn_mary.click && calcu_first.click) {
    img_women.style = "display:flex";
    img_men_2.style = "display:none";
    img_men.style = "display:none";
    img_men_1.style = "display:none";
  } else {
    console.log("nimic");
  }
});

var btn_calculate = document.getElementById("btn_calc");
var img_men_1 = document.getElementById("img_men_1");
var img_women_1 = document.getElementById("img_women_1");

btn_calculate.addEventListener("click", function () {
  var text_input = document.getElementById("b").value;
  if (
    text_input === "men" ||
    text_input === "Men" ||
    text_input === "male" ||
    text_input === "Male"
  ) {
    img_men_1.style = "display:flex";
    img_men_2.style = "display:none";
    img_men.style = "display:none";
    img_women.style = "display:none";
    img_women_1.style = "display:none";
    console.log(text_input);
  } else if (
    text_input === "women" ||
    text_input === "Women" ||
    text_input === "female" ||
    text_input === "Female"
  ) {
    img_women_1.style = "display:flex";
    img_men_1.style = "display:none";
    img_men_2.style = "display:none";
    img_men.style = "display:none";
    img_women.style = "display:none";

    console.log(text_input);
  }
});

var aEnter = document.getElementById("a");

aEnter.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
  } else {
  }
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function (reset) {
  location.reload();
});
