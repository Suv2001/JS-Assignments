let val = "";

function replaceChar(str, find, replace) {
  return str.split(find).join(replace);
}

function evaluateExpression(expression) {
  return eval(replaceChar(expression, "%", "*0.01"));
}

function cal(str) {
  if (str === "1") {
    val += "1";
  } else if (str === "2") {
    val += "2";
  } else if (str === "3") {
    val += "3";
  } else if (str === "4") {
    val += "4";
  } else if (str === "5") {
    val += "5";
  } else if (str === "6") {
    val += "6";
  } else if (str === "7") {
    val += "7";
  } else if (str === "8") {
    val += "8";
  } else if (str === "9") {
    val += "9";
  } else if (str === "0") {
    val += "0";
  } else if (str === "00") {
    val += "00";
  } else if (str === "+") {
    val += "+";
  } else if (str === "-") {
    val += "-";
  } else if (str === "*") {
    val += "*";
  } else if (str === "/") {
    val += "/";
  } else if (str === "%") {
    val += "%";
  } else if (str === "AC") {
    val = "";
  } else if (str === "DEL") {
    val = val.substring(0, val.length - 1);
  } else if (str === "=") {
    try {
      val = evaluateExpression(val).toString();
    } catch (e) {
      alert("Invalid expression");
    }
  } else if (str === ".") {
    val += ".";
  }
  document.getElementById('output1').value = val;
}
