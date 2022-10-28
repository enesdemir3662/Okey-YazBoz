let variables = [{ radio_control: "" }, { img: "" }, { hand: 0 }];
let scor = [0, 0, 0, 0];

function radioClick(element) {
  variables[0] = { radio_control: element };
}
function imgClick(element) {
  variables[1].img = element;
  modal();
}
function imgFile(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById(variables[1].img);
  imgtag.title = selectedFile.name;

  reader.onload = function (event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

function startGame() {
  if (
    document.getElementById("textbox-0-4").value != "" &&
    document.getElementById("textbox-0-3").value != "" &&
    document.getElementById("textbox-0-2").value != "" &&
    document.getElementById("textbox-0-1").value != ""
  ) {
    if (document.getElementById("number-of-hands-textbox").value != "") {
      if (variables[0].radio_control != "") {
        // document.querySelectorAll(".radio_button")
        let image_ = [
          document.getElementById("one-img"),
          document.getElementById("two-img"),
          document.getElementById("three-img"),
          document.getElementById("four-img"),
        ];
        document.getElementById("one-radio").innerHTML = "";
        document.getElementById("two-radio").innerHTML = "";
        document.getElementById("three-radio").innerHTML = "";
        document.getElementById("four-radio").innerHTML = "";
        document
          .getElementById("textbox-0-1")
          .setAttribute("readonly", "readonly");
        document
          .getElementById("textbox-0-2")
          .setAttribute("readonly", "readonly");
        document
          .getElementById("textbox-0-3")
          .setAttribute("readonly", "readonly");
        document
          .getElementById("textbox-0-4")
          .setAttribute("readonly", "readonly");
        document
          .getElementById("number-of-hands-textbox")
          .setAttribute("readonly", "readonly");
        image_[0].setAttribute("onclick", "");
        image_[1].setAttribute("onclick", "");
        image_[2].setAttribute("onclick", "");
        image_[3].setAttribute("onclick", "");
        document.getElementById("name-1").innerHTML =
          `<div class="col-12"><img src=${image_[0].src} alt="" style="width: 100px;height: 100px;" id="user-img-1" class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-1").value;
        document.getElementById("name-2").innerHTML =
          `<div class="col-12"><img src=${image_[1].src} alt="" style="width: 100px;height: 100px;" id="user-img-2"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-2").value;
        document.getElementById("name-3").innerHTML =
          `<div class="col-12"><img src=${image_[2].src} alt="" style="width: 100px;height: 100px;" id="user-img-3"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-3").value;
        document.getElementById("name-4").innerHTML =
          `<div class="col-12"><img src=${image_[3].src} alt="" style="width: 100px;height: 100px;" id="user-img-4"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-4").value;
        document.getElementById("name-2-1").innerHTML =
          `<div class="col-12"><img src=${image_[0].src} alt="" style="width: 100px;height: 100px;" id="user-img-1" class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-1").value;
        document.getElementById("name-2-2").innerHTML =
          `<div class="col-12"><img src=${image_[1].src} alt="" style="width: 100px;height: 100px;" id="user-img-2"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-2").value;
        document.getElementById("name-2-3").innerHTML =
          `<div class="col-12"><img src=${image_[2].src} alt="" style="width: 100px;height: 100px;" id="user-img-3"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-3").value;
        document.getElementById("name-2-4").innerHTML =
          `<div class="col-12"><img src=${image_[3].src} alt="" style="width: 100px;height: 100px;" id="user-img-4"class="img-thumbnail"></div> <br>` +
          document.getElementById("textbox-0-4").value;
        tableList_1();
        tableList_2();
        document.getElementById("label-1-1").innerHTML = "-";
        document.getElementById("label-2-2").innerHTML = "-";
        document.getElementById("label-3-3").innerHTML = "-";
        document.getElementById("label-4-4").innerHTML = "-";
        document.getElementById("all-table").hidden = false;
        document.getElementById("all-table-2").hidden = false;
        document.getElementById("game-desks").setAttribute("hidden", "hidden");
        changeOfOrder(0, 0);
      } else {
        alert("Başliyacak Kişiyi Seçin !");
      }
    } else {
      alert("El Sayısını Giriniz !");
    }
  } else {
    alert("Oyuncuları Giriniz !");
  }
}
document.getElementById("number-of-hands-textbox").value;
document.getElementById("textbox-0-4").value;

function modal() {
  var directory = new bootstrap.Modal(document.getElementById("exampleModal"), {
    keyboard: false,
  });
  directory.show();
}

function imgSelectClick(image) {
  document.getElementById("close-modal").click();

  if (image == "img/add-icon-png-2489.png") {
    document.getElementById("imgInp").click();
  } else {
    document.getElementById(variables[1].img).setAttribute("src", `${image}`);
  }
}

function tableList_1() {
  for (
    var i = 0;
    i < parseInt(document.getElementById("number-of-hands-textbox").value);
    i++
  ) {
    const el = document.createElement("tr");
    const tdEl = `
    <td id="${i}-hand" class="text">${i + 1}</td>
    <td> <input id="${i}-input-1" type="number" class="form-control"
        aria-describedby="inputGroup-sizing-default"> </td>
    <td> <input id="${i}-input-2" type="number" class="form-control"
        aria-describedby="inputGroup-sizing-default"> </td>
    <td> <input id="${i}-input-3" type="number" class="form-control"
        aria-describedby="inputGroup-sizing-default"> </td>
    <td> <input id="${i}-input-4" type="number" class="form-control"
        aria-describedby="inputGroup-sizing-default"> </td>
    <td class="text">
      <div class="form-check"><input id="${i}-check" class="form-check-input" type="checkbox"
          name="defaultCheck1" onclick="completeTheTour(${i})"><label class="form-check-label">Turu Tamamla</label></div> </td>
             `;
    el.innerHTML = tdEl;
    document.getElementById("mytable").appendChild(el);
  }
}
function completeTheTour(id) {
  let first = [];
  if (
    document.getElementById(`${id}-input-1`).value != "" &&
    document.getElementById(`${id}-input-2`).value != "" &&
    document.getElementById(`${id}-input-3`).value != "" &&
    document.getElementById(`${id}-input-4`).value != ""
  ) {
    document
      .getElementById(`${id}-input-1`)
      .setAttribute("readonly", "readonly");
    document
      .getElementById(`${id}-input-2`)
      .setAttribute("readonly", "readonly");
    document
      .getElementById(`${id}-input-3`)
      .setAttribute("readonly", "readonly");
    document
      .getElementById(`${id}-input-4`)
      .setAttribute("readonly", "readonly");
    document.getElementById(`${id}-check`).setAttribute("disabled", "true");
    scor[0] =
      parseInt(document.getElementById(`${id}-input-1`).value) +
      parseInt(scor[0]);
    scor[1] =
      parseInt(document.getElementById(`${id}-input-2`).value) +
      parseInt(scor[1]);
    scor[2] =
      parseInt(document.getElementById(`${id}-input-3`).value) +
      parseInt(scor[2]);
    scor[3] =
      parseInt(document.getElementById(`${id}-input-4`).value) +
      parseInt(scor[3]);

    document.getElementById("label-1-2").innerHTML =
      parseInt(scor[0]) - parseInt(scor[1]);
    document.getElementById("label-1-3").innerHTML =
      parseInt(scor[0]) - parseInt(scor[2]);
    document.getElementById("label-1-4").innerHTML =
      parseInt(scor[0]) - parseInt(scor[3]);
    document.getElementById("label-2-1").innerHTML =
      parseInt(scor[1]) - parseInt(scor[0]);
    document.getElementById("label-2-3").innerHTML =
      parseInt(scor[1]) - parseInt(scor[2]);
    document.getElementById("label-2-4").innerHTML =
      parseInt(scor[1]) - parseInt(scor[3]);
    document.getElementById("label-3-1").innerHTML =
      parseInt(scor[2]) - parseInt(scor[0]);
    document.getElementById("label-3-2").innerHTML =
      parseInt(scor[2]) - parseInt(scor[1]);
    document.getElementById("label-3-4").innerHTML =
      parseInt(scor[2]) - parseInt(scor[3]);
    document.getElementById("label-4-1").innerHTML =
      parseInt(scor[3]) - parseInt(scor[0]);
    document.getElementById("label-4-2").innerHTML =
      parseInt(scor[3]) - parseInt(scor[1]);
    document.getElementById("label-4-3").innerHTML =
      parseInt(scor[3]) - parseInt(scor[2]);

    if (document.getElementById("label-1-2").innerHTML == 0) {
      document.getElementById("label-1-2").style.backgroundColor = "black";
    } else if (document.getElementById("label-1-2").innerHTML > 0) {
      document.getElementById("label-1-2").style.backgroundColor = "red";
    } else {
      document.getElementById("label-1-2").style.backgroundColor = "green";
    }

    if (document.getElementById("label-1-3").innerHTML == 0) {
      document.getElementById("label-1-3").style.backgroundColor = "black";
    } else if (document.getElementById("label-1-3").innerHTML > 0) {
      document.getElementById("label-1-3").style.backgroundColor = "red";
    } else {
      document.getElementById("label-1-3").style.backgroundColor = "green";
    }

    if (document.getElementById("label-1-4").innerHTML == 0) {
      document.getElementById("label-1-4").style.backgroundColor = "black";
    } else if (document.getElementById("label-1-4").innerHTML > 0) {
      document.getElementById("label-1-4").style.backgroundColor = "red";
    } else {
      document.getElementById("label-1-4").style.backgroundColor = "green";
    }

    if (document.getElementById("label-2-1").innerHTML == 0) {
      document.getElementById("label-2-1").style.backgroundColor = "black";
    } else if (document.getElementById("label-2-1").innerHTML > 0) {
      document.getElementById("label-2-1").style.backgroundColor = "red";
    } else {
      document.getElementById("label-2-1").style.backgroundColor = "green";
    }

    if (document.getElementById("label-2-3").innerHTML == 0) {
      document.getElementById("label-2-3").style.backgroundColor = "black";
    } else if (document.getElementById("label-2-3").innerHTML > 0) {
      document.getElementById("label-2-3").style.backgroundColor = "red";
    } else {
      document.getElementById("label-2-3").style.backgroundColor = "green";
    }

    if (document.getElementById("label-2-4").innerHTML == 0) {
      document.getElementById("label-2-4").style.backgroundColor = "black";
    } else if (document.getElementById("label-2-4").innerHTML > 0) {
      document.getElementById("label-2-4").style.backgroundColor = "red";
    } else {
      document.getElementById("label-2-4").style.backgroundColor = "green";
    }

    if (document.getElementById("label-3-1").innerHTML == 0) {
      document.getElementById("label-3-1").style.backgroundColor = "black";
    } else if (document.getElementById("label-3-1").innerHTML > 0) {
      document.getElementById("label-3-1").style.backgroundColor = "red";
    } else {
      document.getElementById("label-3-1").style.backgroundColor = "green";
    }

    if (document.getElementById("label-3-2").innerHTML == 0) {
      document.getElementById("label-3-2").style.backgroundColor = "black";
    } else if (document.getElementById("label-3-2").innerHTML > 0) {
      document.getElementById("label-3-2").style.backgroundColor = "red";
    } else {
      document.getElementById("label-3-2").style.backgroundColor = "green";
    }

    if (document.getElementById("label-3-4").innerHTML == 0) {
      document.getElementById("label-3-4").style.backgroundColor = "black";
    } else if (document.getElementById("label-3-4").innerHTML > 0) {
      document.getElementById("label-3-4").style.backgroundColor = "red";
    } else {
      document.getElementById("label-3-4").style.backgroundColor = "green";
    }

    if (document.getElementById("label-4-1").innerHTML == 0) {
      document.getElementById("label-4-1").style.backgroundColor = "black";
    } else if (document.getElementById("label-4-1").innerHTML > 0) {
      document.getElementById("label-4-1").style.backgroundColor = "red";
    } else {
      document.getElementById("label-4-1").style.backgroundColor = "green";
    }

    if (document.getElementById("label-4-2").innerHTML == 0) {
      document.getElementById("label-4-2").style.backgroundColor = "black";
    } else if (document.getElementById("label-4-2").innerHTML > 0) {
      document.getElementById("label-4-2").style.backgroundColor = "red";
    } else {
      document.getElementById("label-4-2").style.backgroundColor = "green";
    }

    if (document.getElementById("label-4-3").innerHTML == 0) {
      document.getElementById("label-4-3").style.backgroundColor = "black";
    } else if (document.getElementById("label-4-3").innerHTML > 0) {
      document.getElementById("label-4-3").style.backgroundColor = "red";
    } else {
      document.getElementById("label-4-3").style.backgroundColor = "green";
    }

    document.getElementById("top-1").innerHTML = scor[0];
    document.getElementById("top-2").innerHTML = scor[1];
    document.getElementById("top-3").innerHTML = scor[2];
    document.getElementById("top-4").innerHTML = scor[3];
    let indexs = [];
    let scor_control = [];
    let new_scor = scor.slice();
    new_scor.sort(function (a, b) {
      return a - b;
    });
    if (scor[0] == new_scor[0]) {
      $("#top-1").css("background-color", "green");
      indexs.push(0);
      scor_control[0] = true;
      first.push(document.getElementById("textbox-0-1").value);
    } else if (scor[1] == new_scor[0]) {
      $("#top-2").css("background-color", "green");
      scor_control[1] = true;
      indexs.push(1);
      first.push(document.getElementById("textbox-0-2").value);
    } else if (scor[2] == new_scor[0]) {
      $("#top-3").css("background-color", "green");
      scor_control[2] = true;
      indexs.push(2);
      first.push(document.getElementById("textbox-0-3").value);
    } else if (scor[3] == new_scor[0]) {
      $("#top-4").css("background-color", "green");
      scor_control[3] = true;
      indexs.push(3);
      first.push(document.getElementById("textbox-0-4").value);
    }

    if (scor[0] == new_scor[1] && scor_control[0] != true) {
      $("#top-1").css("background-color", "yellow");
      indexs.push(0);
      scor_control[0] = true;
    } else if (scor[1] == new_scor[1] && scor_control[1] != true) {
      $("#top-2").css("background-color", "yellow");
      indexs.push(1);
      scor_control[1] = true;
    } else if (scor[2] == new_scor[1] && scor_control[2] != true) {
      $("#top-3").css("background-color", "yellow");
      indexs.push(2);
      scor_control[2] = true;
    } else if (scor[3] == new_scor[1] && scor_control[3] != true) {
      $("#top-4").css("background-color", "yellow");
      indexs.push(3);
      scor_control[3] = true;
    }

    if (scor[0] == new_scor[2] && scor_control[0] != true) {
      $("#top-1").css("background-color", "orange");
      indexs.push(0);
      scor_control[0] = true;
    } else if (scor[1] == new_scor[2] && scor_control[1] != true) {
      $("#top-2").css("background-color", "orange");
      indexs.push(1);
      scor_control[1] = true;
    } else if (scor[2] == new_scor[2] && scor_control[2] != true) {
      $("#top-3").css("background-color", "orange");
      indexs.push(2);
      scor_control[2] = true;
    } else if (scor[3] == new_scor[2] && scor_control[3] != true) {
      $("#top-4").css("background-color", "orange");
      indexs.push(3);
      scor_control[3] = true;
    }

    if (scor[0] == new_scor[3] && scor_control[0] != true) {
      $("#top-1").css("background-color", "red");
      indexs.push(0);
      scor_control[0] = true;
    } else if (scor[1] == new_scor[3] && scor_control[1] != true) {
      $("#top-2").css("background-color", "red");
      indexs.push(1);
      scor_control[1] = true;
    } else if (scor[2] == new_scor[3] && scor_control[2] != true) {
      $("#top-3").css("background-color", "red");
      indexs.push(2);
      scor_control[2] = true;
    } else if (scor[3] == new_scor[3] && scor_control[3] != true) {
      $("#top-4").css("background-color", "red");
      indexs.push(3);
      scor_control[3] = true;
    }

    if (new_scor[2] == new_scor[3]) {
      console.log(3);
      first.push(document.getElementById("textbox-0-4").value);
      document.getElementById(`top-${indexs[2] + 1}`).style.backgroundColor =
        document.getElementById(`top-${indexs[3] + 1}`).style.backgroundColor;
    }
    if (new_scor[1] == new_scor[2]) {
      console.log(2);
      first.push(document.getElementById("textbox-0-3").value);
      document.getElementById(`top-${indexs[1] + 1}`).style.backgroundColor =
        document.getElementById(`top-${indexs[2] + 1}`).style.backgroundColor;
    }
    if (new_scor[0] == new_scor[1]) {
      console.log(1);
      first.push(document.getElementById("textbox-0-2").value);
      document.getElementById(`top-${indexs[0] + 1}`).style.backgroundColor =
        document.getElementById(`top-${indexs[1] + 1}`).style.backgroundColor;
    }

    changeOfOrder(id, 1);
    if (
      id + 1 ==
      parseInt(document.getElementById("number-of-hands-textbox").value)
    ) {
      alert("Oyun Bitti Kazanan " + first);
    }
  } else {
    document.getElementById(`${id}-check`).checked = false;
    console.log(document.getElementById(`${id}+"-check"`));
    alert("Puanları eksik girdiniz.");
  }
}
function changeOfOrder(id, control) {
  if (control != 0) {
    switch (variables[0].radio_control) {
      case "one-radio":
        variables[0].radio_control = "two-radio";
        break;
      case "two-radio":
        variables[0].radio_control = "three-radio";
        break;
      case "three-radio":
        variables[0].radio_control = "four-radio";
        break;
      case "four-radio":
        variables[0].radio_control = "one-radio";
        break;
      default: //anahtar kelime, yoksa çalıştırılacak kodu belirtir
        console.log("hata");
    }
    id += 1;
  }
  if (
    id != parseInt(document.getElementById("number-of-hands-textbox").value)
  ) {
    switch (variables[0].radio_control) {
      case "one-radio":
        document.getElementById(`${id}-input-1`).style =
          "border: 5px solid red;";
        break;
      case "two-radio":
        document.getElementById(`${id}-input-2`).style =
          "border: 5px solid red;";
        break;
      case "three-radio":
        document.getElementById(`${id}-input-3`).style =
          "border: 5px solid red;";
        break;
      case "four-radio":
        document.getElementById(`${id}-input-4`).style =
          "border: 5px solid red;";
        break;
      default: //anahtar kelime, yoksa çalıştırılacak kodu belirtir
        console.log("hata");
    }
  }
}

function tableList_2() {
  for (var i = 1; i < 5; i++) {
    const el = document.createElement("tr");
    const tdEl = `
    <td class="text">${document.getElementById("textbox-0-" + i).value}</td>
    <td id="label-1-${i}" class="text">0</td>
    <td id="label-2-${i}" class="text">0</td>
    <td id="label-3-${i}" class="text">0</td>
    <td id="label-4-${i}" class="text">0</td>
             `;
    el.innerHTML = tdEl;
    document.getElementById("mytable-2").appendChild(el);
  }
}
