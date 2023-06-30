let arr = [];

function add() {
  let input = document.getElementById("input");
  arr.push(parseFloat(input.value));
  document.getElementById("outputNums").innerHTML = arr.join(",");
}

function ex1() {
  let sumNums = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumNums += arr[i];
    }
  }
  document.getElementById("output1").innerHTML = "Tổng số dương: " + sumNums;
}

function ex2() {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("output2").innerHTML = "Đếm số dương: " + count;
}

function ex3() {
  let min = Math.min(...arr);
  document.getElementById("output3").innerHTML = "Số nhỏ nhất: " + min;
}

function ex4() {
  let Positive_nums = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      Positive_nums = arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] < Positive_nums) {
      Positive_nums = arr[i];
    }
  }
  document.getElementById("output4").innerHTML =
    "Số dương nhỏ nhất: " + Positive_nums;
}

function ex5() {
  let lastEven = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      lastEven = arr[i];
    }
  }
  if (lastEven !== null) {
    document.getElementById("output5").innerHTML =
      "Số chẵn cuối cùng: " + lastEven;
  } else {
    document.getElementById("output5").innerHTML =
      "Không có số chẵn cuối cùng ";
  }
}

function ex6() {
  let order1 = +document.getElementById("order1").value;
  let order2 = +document.getElementById("order2").value;

  let temp = arr[order1];
  arr[order1] = arr[order2];
  arr[order2] = temp;

  document.getElementById("output6").innerHTML = arr;
}

function ex7() {
  arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("output7").innerHTML = "Sắp xếp tăng dần: " + arr;
}
function ex8() {
  function isPrime(n) {
    if (n < 2) {
      return false;
    }

    if (n === 2) {
      return true;
    }

    if (n % 2 === 0) {
      return false;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let primNum = null;
  for (i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primNum = arr[i];
      break;
    }
  }
  if (primNum !== null) {
    document.getElementById("output8").innerHTML =
      "Số nguyên tố đầu tiên trong mảng: " + primNum;
  } else {
    document.getElementById("output8").innerHTML =
      "Không tìm thấy số nguyên tố trong mảng.";
  }
}
let arrEx9 = [];
function addEx9() {
  let inputEx9 = document.getElementById("inputEx9");
  arrEx9.push(parseFloat(inputEx9.value));
  document.getElementById("outputEx9").innerHTML = arrEx9.join(",");
}

function ex9() {
  let countInteger = 0;
  for (i = 0; i < arrEx9.length; i++) {
    if (Number.isInteger(arrEx9[i]) === true) {
      countInteger++;
    }
  }
  document.getElementById("output9").innerHTML = "Số nguyên: " + countInteger;
}

function ex10() {
  let positiveCount = 0;
  let negativeCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }

  if (positiveCount > negativeCount) {
    document.getElementById("output10").innerHTML = "Số dương > số âm";
  } else if (positiveCount < negativeCount) {
    document.getElementById("output10").innerHTML = "Số dương < số âm";
  } else {
    document.getElementById("output10").innerHTML = "Số dương = số âm";
  }
}
