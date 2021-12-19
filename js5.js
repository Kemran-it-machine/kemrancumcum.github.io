function click1() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");
    let result = document.getElementById("result");
    let toPrice = price[0].value;
    let toCount = count[0].value;
    let dag = toCount.match(/^\d+$/);
    let che = toPrice.match(/^\d+$/);
    if(che !== null && dag !== null) {
    result.innerHTML = parseInt(price[0].value) * parseInt(count[0].value);
    }
    else if(che === null && dag !== null ){
    alert("Введите число в поле - цена !");
    }
    else if(dag === null && che !== null) {
      alert("Введите число в поле - количество !");
    }
    else if(che === null && dag === null) {
      alert("Вводите числа в оба поля !");
    }
    return false;
  }

 function onClick() {
    alert("Стоимость найдена");
  }
  
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calculateResult");
    b.addEventListener("click", onClick);
  });
