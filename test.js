const s = [5, 7, 2, 1];
function editInPlace() {
  // Only change code below this line
  const tmp = s[s.length - 1];
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] = s[i - 1];
    if (i === 0) s[i] = tmp;
  }

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
// editInPlace();
// console.log(s);

function reverse() {
  let len = s.length;
  // odd
  const index = Math.floor(len / 2);
  for (let i = 0; i < index; i++) {
    if (i === Math.floor(len / 2) && len % 2 == 1) {
      continue;
    } else {
      [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
    }
  }
}
reverse();
console.log(s);
