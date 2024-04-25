// Удали все нечетные цифры в двухмерном массиве. Полученный результат выведи в консоль

let numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
];

const removeOddDigits = (arr) => {
  return arr.map((subArr) =>
    subArr
      .map((num) => {
        let numStr = num.toString();
        let filterNumStr = "";
        for (let char of numStr) {
          let digit = parseInt(char);
          if (digit % 2 === 0) {
            filterNumStr += char;
          }
        }
        return filterNumStr.length > 0 ? parseInt(filterNumStr) : null;
      })
      .filter((n) => n !== null)
  );
};

console.log(removeOddDigits(numbers));
