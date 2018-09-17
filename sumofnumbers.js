let sampleArray1 = [1];
let sampleArray2 = [1,2];
let sampleArray3 = [2,2,2,2,2];

function sumFor(list) {
  let sum = 0;
  for (num of list) {
    sum += num;
  }
  return sum;
}


function sumWhile(list) {
  let sum = 0;
  let iter = 0;
  while (iter < list.length) {
    sum += list[iter];
    iter ++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 1) return list[0];
  else {
    return sumRecursion(list.slice(1, list.length)) + list[0];
  }
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}

console.log(sumFor(sampleArray1));
console.log(sumFor(sampleArray2));
console.log(sumFor(sampleArray3));

console.log(sumWhile(sampleArray1));
console.log(sumWhile(sampleArray2));
console.log(sumWhile(sampleArray3));

console.log(sumRecursion(sampleArray1));
console.log(sumRecursion(sampleArray2));
console.log(sumRecursion(sampleArray3));

console.log(sumTheSimpleWay(sampleArray1));
console.log(sumTheSimpleWay(sampleArray2));
console.log(sumTheSimpleWay(sampleArray3));