const func1 = (num) => {
  return Math.pow(num, 3);
};
console.log(func1(2));
let zp = 1100;
const nalog = (zp) => {
  if (zp === String) {
    return "Не число";
  } else {
    return (zp * 13) / 100;
  }
};
console.log(nalog(1100));

const findMax = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};
console.log(findMax(1, 5, 3));

const sum = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  } else if (num1 < num2) {
    return num2 - num1;
  } else {
    return 0;
  }
};
const div = (num1, num2) => {
  if (num1 > num2) {
    return num1 / num2;
  } else if (num1 < num2) {
    return num2 / num1;
  } else {
    return 1;
  }
};
const mul = (num1, num2) => {
  return num1 * num2;
};
console.log(sum(1, 2));
console.log(div(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
