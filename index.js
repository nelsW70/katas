// https://www.codewars.com/kata/583af10620dda4da270000c5/javascript
const mergeArrays = (a, b) => {
  const result = [];
  Array(a.length < b.length ? b.length : a.length)
    .fill()
    .map((_, i) => result.push(a[i], b[i]));

  return result.filter(Boolean);
};

const mergeArrays1 = (a, b) => {
  let result = [];
  let longest = a.length > b.length ? a : b;

  for (let i = 0; i < longest.length; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }

  return result;
};

const mergeArrays2 = (array1, array2) => {
  let result = [];

  let l = Math.min(array1.length, array2.length);

  for (i = 0; i < l; i++) {
    result.push(array1[i], array2[i]);
  }
  result.push(...array1.slice(l), ...array2.slice(l));

  return result;
};

// https://www.codewars.com/kata/59b844528bcb7735560000a0
const isNice = arr =>
  Boolean(arr.length) &&
  arr.every(item => arr.includes(item - 1) || arr.includes(item + 1));

// https://www.codewars.com/kata/59c7e477dcc40500f50005c7
const isOddHeavy = n => {
  const odds = n.filter(item => item % 2);
  const evens = n.filter(item => !(item % 2));

  return !!odds.length && Math.min(...odds) > Math.max(...evens);
};

const isOddHeavy1 = arr => {
  const split = arr.reduce(
    (acc, curr) => {
      curr % 2 ? acc['odd'].push(curr) : acc['even'].push(curr);
      return acc;
    },
    { odd: [], even: [] }
  );

  return !Boolean(arr.length) || !Boolean(split.odd.length)
    ? false
    : Math.min(...split.odd) > Math.max(...split.even);
};

// https://www.codewars.com/kata/5547929140907378f9000039/javascript
const shortcut = str => str.replace(/[aeiou]/g, '');

// https://www.codewars.com/kata/57a37f3cbb99449513000cd8
const getNumberFromString = s => Number(s.replace(/\D/g, ''));

// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript
const getMiddle = s => s.slice((s.length - 1) / 2, s.length / 2 + 1);

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
const stray = numbers =>
  numbers.find(item => numbers.indexOf(item) === numbers.lastIndexOf(item));

const stray1 = numbers => {
  const sorted = numbers.sort();
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
};

// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
const sumDigits = number =>
  Array.from(String(Math.abs(number)), Number).reduce(
    (acc, curr) => acc + curr,
    0
  );

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
const stringCase = string => {
  const lowerCount = [...string]
    .map(item => /^[a-z]*$/.test(item))
    .filter(Boolean);

  return lowerCount.length >= string.length / 2
    ? string
        .split(' ')
        .map(item => item.toLowerCase())
        .join('')
    : string
        .split(' ')
        .map(item => item.toUpperCase())
        .join('');
};

// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
const inAscOrder = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
const findNextSquare = sq =>
  Number.isInteger(Math.sqrt(sq))
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;

// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
const printerError = str => `${str.replace(/[a-m]/g, '').length}/${str.length}`;

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
const bus = busStops => busStops.reduce((acc, [on, off]) => acc + on - off, 0);

// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
const removeConsecutiveDuplicates = string =>
  string
    .split(' ')
    .filter((item, index, array) => item !== array[index + 1])
    .join(' ');

// https://www.codewars.com/kata/556196a6091a7e7f58000018
const largestPairSum = numbers => {
  const result = numbers.sort((a, b) => b - a);

  return result[0] + result[1];
};

// https://www.codewars.com/kata/56bdf9d50d0b6433df001074/train/javascript
Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

// https://www.codewars.com/kata/558ffec0f0584f24250000a0/train/javascript
const decode1 = str => {
  if (typeof str !== 'string') return 'Input is not a string';
  return str.replace(/[a-zA-Z]/g, v => {
    const lower = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      .split``.reverse().join``;
    return upper[lower.indexOf(v)];
  });
};

// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];

// https://www.codewars.com/kata/5594463eaf1701909c0000d4
const arraySum = arr =>
  arr
    .flat(Infinity)
    .filter(item => !isNaN(item))
    .reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
const alphabetWar = str => {
  const leftPoints = { w: 4, p: 3, b: 2, s: 1 };
  const rightPoints = { m: 4, q: 3, d: 2, z: 1 };

  const allVals = {
    left: [...str].filter(item => ['w', 'p', 'b', 's'].includes(item)),
    right: [...str].filter(item => ['m', 'q', 'd', 'z'].includes(item)),
  };

  const leftTally = allVals.left.reduce(
    (acc, curr) => acc + leftPoints[curr],
    0
  );
  const rightTally = allVals.right.reduce(
    (acc, curr) => acc + rightPoints[curr],
    0
  );

  return leftTally > rightTally
    ? 'Left side wins!'
    : leftTally < rightTally
    ? 'Right side wins!'
    : "Let's fight again!";
};

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
const findEvenIndex = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i).reduce((acc, curr) => acc + curr, 0) ===
      arr.slice(i + 1, arr.length).reduce((acc, curr) => acc + curr, 0)
    )
      return i;
  }
  return -1;
};

// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
const digitalRoot = n => {
  const result = Array.from(String(n), Number).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return result > 9 ? digitalRoot(result) : result;
};

const digitalRoot2 = n => ((n - 1) % 9) + 1;

// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
const findUniq = arr => {
  let temp = arr.map(a => {
    return [...new Set(a.toLowerCase())].sort().join('');
  });
  for (let i = 0; i < temp.length; i++) {
    if (temp.indexOf(temp[i]) === temp.lastIndexOf(temp[i])) return arr[i];
  }
};

// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript
const extend = function (...args) {
  const result = args.reverse().reduce((acc, curr) => {
    return typeof curr === 'object' ? Object.assign(acc, curr) : acc;
  }, {});
  return result;
};

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
const encryptThis = text =>
  text
    .split(' ')
    .map(item => {
      if (item.length === 1) return item.charCodeAt(0);
      if (item.length === 2) return `${item[0].charCodeAt(0)}${item[1]}`;
      if (item.length === 3)
        return `${item[0].charCodeAt(0)}${item.slice(-1)}${item[1]}`;
      if (item.length > 3)
        return `${item[0].charCodeAt(0)}${item.slice(-1)}${item.slice(2, -1)}${
          item[1]
        }`;
    })
    .join(' ');

// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
const encode = str => {
  const obj = { a: '1', e: '2', i: '3', o: '4', u: '5' };

  for (const x in obj) {
    str = str.replace(new RegExp(x, 'g'), obj[x]);
  }
  return str;
};

const decode = str => {
  const obj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (const x in obj) {
    str = str.replace(new RegExp(x, 'g'), obj[x]);
  }
  return str;
};

// https://www.codewars.com/kata/58223370aef9fc03fd000071
const dashatize = num =>
  num
    .toString()
    .replace(/([13579])/g, '-$1-')
    .replace(/\-+/g, '-')
    .replace(/^\-/, '')
    .replace(/\-$/, '');

// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript
const numObj = nums =>
  nums.map(item => ({ [item]: String.fromCharCode(item) }));

// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
const evenChars = string =>
  [...string].length < 2 || [...string].length > 100
    ? 'invalid string'
    : [...string].filter((_, index) => index % 2);

// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd
const scrollingText = text => {
  text = text.toUpperCase();

  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
};

// https://www.codewars.com/kata/57fe50d000d05166720000b1
const sabb = (s, val, happiness) =>
  [...s].filter(item => [...new Set([...'sabbatical'])].includes(item)).length +
    val +
    happiness >
  22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';

//https://www.codewars.com/kata/58f8b35fda19c0c79400020f
const allNonConsecutive = arr =>
  arr
    .map((item, index) =>
      index > 0 && arr[index - 1] !== item - 1 ? { i: index, n: item } : null
    )
    .filter(Boolean);

// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014
const numInString = str => Math.max(...str.match(/\d+|$/g));

const numInString1 = str =>
  Math.max(
    ...str
      .replace(/\D/g, ' ')
      .split(' ')
      .filter(Boolean)
      .map(item => Number(item))
  );

// https://www.codewars.com/kata/59557b2a6e595316ab000046
const convertHashToArray = hash => Object.entries(hash).sort();

// https://www.codewars.com/kata/5a6225e5d8e145b540000127
const common = (arr1, arr2, arr3) => {
  let intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1 && arr3.indexOf(arr1[i]) !== -1) {
      intersection.push(arr1[i]);
    }
  }
  return intersection.reduce((acc, curr) => acc + curr, 0);
};

const common1 = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
};

const common2 = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

const common3 = (a, b, c) => {
  const intersection = [];

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i]) && c.includes(a[i])) {
      intersection.push(a[i]);
      b.splice(b.indexOf(a[i]), 1);
      c.splice(c.indexOf(a[i]), 1);
    }
  }

  return intersection.reduce((acc, curr) => acc + curr, 0);
};

const common4 = (a, b, c) => {
  return a.reduce((acc, curr) => {
    if (b.includes(curr) && c.includes(curr)) {
      b.splice(b.indexOf(curr), 1);
      c.splice(c.indexOf(curr), 1);
      return (acc += curr);
    }
    return acc;
  }, 0);
};

const common5 = (a, b, c) => {
  [a, b, c] = [a, b, c].map(item =>
    item.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
  );

  return Object.keys(a).reduce(
    (acc, curr) =>
      acc + Math.min(a[curr] || 0, b[curr] || 0, c[curr] || 0) * curr,
    0
  );
};

const common6 = (a, b, c) => {
  [a, b, c] = [a, b, c].map(item =>
    item.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  );

  return Object.keys(a).reduce(
    (acc, curr) =>
      acc + Math.min(a[curr] || 0, b[curr] || 0, c[curr] || 0) * curr,
    0
  );
};

// https://www.codewars.com/kata/5a04133e32b8b998dc000089
const dominant = arr =>
  arr.filter((item, index) => item > Math.max(...arr.slice(index + 1)));

const dominant1 = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > Math.max(...array.slice(i + 1))) result.push(array[i]);
  }
  return result;
};

// https://www.codewars.com/kata/5f55ecd770692e001484af7d
const mirror = data => {
  let temp = [...data];
  return data.length < 1
    ? temp
    : [...temp.sort((a, b) => a - b), ...temp.sort((a, b) => b - a).slice(1)];
};

// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript
const doubleEveryOther = arr =>
  arr.map((item, index) => (index % 2 !== 0 ? item * 2 : item));

// https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1
const binRota = arr =>
  arr.map((item, index) => (index % 2 ? item.reverse() : item)).flat();

// https://www.codewars.com/kata/56069d0c4af7f633910000d3
const search = (budget, prices) =>
  prices
    .filter(item => item <= budget)
    .sort((a, b) => a - b)
    .join(',');

// https://www.codewars.com/kata/56a24b4d9f3671584d000039
const doubleCheck = str => /(.)\1/i.test(str);

const doubleCheck1 = str =>
  Array.from(str.toLowerCase()).some(
    (item, index) =>
      item.localeCompare(Array.from(str.toLowerCase())[index + 1]) === 0 ||
      item.localeCompare(Array.from(str.toLowerCase())[index - 1]) === 0
  );

// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
const getNiceNames = arr =>
  arr.filter(({ wasNice }) => wasNice).map(({ name }) => name);

const getNaughtyNames = arr =>
  arr.filter(({ wasNice }) => !wasNice).map(({ name }) => name);

// https://www.codewars.com/kata/57f7796697d62fc93d0001b8
const trouble = (x, t) =>
  x.reduce((acc, curr) => {
    if (!acc.length || curr + acc[acc.length - 1] !== t) acc.push(curr);
    return acc;
  }, []);

const trouble1 = (x, t) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
};

// https://www.codewars.com/kata/5784c89be5553370e000061b
const maxProduct = a => {
  let largest = Math.max(...a);
  a.splice(a.indexOf(largest), 1);
  return largest * Math.max(...a);
};

const maxProduct1 = a => {
  let largest = a.splice(a.indexOf(Math.max(...a)), 1);
  let secondLargest = a.splice(a.indexOf(Math.max(...a)), 1);
  return largest * secondLargest;
};

// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819
const combine = (...objects) =>
  objects.reduce((acc, curr) => {
    for (const key in curr) {
      if (acc[key]) {
        acc[key] += curr[key];
      } else acc[key] = curr[key];
    }

    return acc;
  }, {});

const combine1 = (objA, objB) =>
  [...Object.entries(objA), ...Object.entries(objB)].reduce((acc, curr) => {
    acc[curr[0]]
      ? (acc[curr[0]] = acc[curr[0]] + curr[1])
      : (acc[curr[0]] = curr[1]);
    return acc;
  }, {});

const combine2 = (...objects) =>
  objects
    .map(item => Object.entries(item))
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, [currKey, currValue]) => {
      acc[currKey]
        ? (acc[currKey] = acc[currKey] + currValue)
        : (acc[currKey] = currValue);
      return acc;
    }, {});

const combine3 = (...objects) =>
  []
    .concat(...objects.map(item => Object.entries(item)))
    .reduce((acc, [currKey, currValue]) => {
      acc[currKey]
        ? (acc[currKey] = acc[currKey] + currValue)
        : (acc[currKey] = currValue);
      return acc;
    }, {});

// https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript
const matchArrays = (a, b) => a.filter(item => b.indexOf(item) !== -1).length;

const matchArrays1 = (a, b) => {
  let count = 0;

  a.map(item1 => b.map(item2 => (item1 === item2 ? count++ : null)));

  return count;
};

// https://www.codewars.com/kata/55d2aee99f30dbbf8b000001
const scoreTest = (str, right, omit, wrong) => {
  const scoring = [right, omit, -wrong];
  return str.reduce((sum, score) => sum + scoring[score], 0);
};

const scoreTest1 = (arr, right, omit, wrong) => {
  const gradingCard = {
    0: right,
    1: omit,
    2: -wrong,
  };

  const results = arr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  return Object.entries(results).reduce(
    (acc, [currKey, currVvalue]) => acc + gradingCard[currKey] * currVvalue,
    0
  );
};

// https://www.codewars.com/kata/52705ed65de62b733f000064
const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);

// https://www.codewars.com/kata/594093784aafb857f0000122
const diff = (a, b) =>
  [
    ...new Set([
      ...a.filter(item => !b.includes(item)),
      ...b.filter(item => !a.includes(item)),
    ]),
  ].sort();

const diff1 = (a, b) => {
  const setA = [...new Set(a)];
  const setB = [...new Set(b)];

  return [
    ...setA.filter(item => !setB.includes(item)),
    ...setB.filter(item => !setA.includes(item)),
  ].sort();
};

// https://www.codewars.com/kata/5840586b5225616069000001
const highestValue = (a, b) =>
  [...a].map(item => item.charCodeAt()).reduce((acc, curr) => acc + curr, 0) >=
  [...b].map(item => item.charCodeAt()).reduce((acc, curr) => acc + curr, 0)
    ? a
    : b;

// https://www.codewars.com/kata/58308360aeb69a460b0002b2
const unique = arr => arr.filter((item, index) => arr.indexOf(item) === index);

// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea
const OrderPeople = people => people.sort((a, b) => a.age - b.age);

// https://www.codewars.com/kata/59b2963132779166d2001018/train/javascript
const arrMultiply = ([a, b]) => String(Number(a) * Number(b));

// https://www.codewars.com/kata/55c9fb1b407024afe6000055
const employees = [
  { firstName: 'Dipper', lastName: 'Pines', role: 'Boss' },
  { firstName: 'Frank', lastName: 'Jones', role: 'Dev' },
  { firstName: 'Jameson', lastName: 'Dave', role: 'Designer' },
];

const findEmployeesRole = name => {
  for (let i = 0; i < employees.length; i++) {
    if (`${employees[i].firstName} ${employees[i].lastName}` === name)
      return employees[i].role;
  }
  return 'Does not work here!';
};

// https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
const avg = a => a.reduce((acc, curr) => acc + curr, 0) / a.length;

// https://www.codewars.com/kata/56044de2aa75e28875000017
const compoundArray = (a, b) => {
  let result = [];
  let longest = a.length > b.length ? a : b;

  for (let i = 0; i < longest.length; i++) {
    result.push(a[i], b[i]);
  }

  return result.filter(item => item !== undefined);
};

// https://www.codewars.com/kata/57fb79784e2d0639c9000066
const sortItOut = array => [
  ...array.filter(item => Math.floor(item) % 2).sort((a, b) => a - b),
  ...array.filter(item => Math.floor(item) % 2 === 0).sort((a, b) => b - a),
];

// https://www.codewars.com/kata/5a1cb5406975987dd9000028
const sortArray = arr => {
  const odd = arr.filter(item => item % 2).sort((a, b) => a - b);
  const even = arr.filter(item => item % 2 === 0).sort((a, b) => b - a);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result.push(even.shift());
    else result.push(odd.shift());
  }
  return result;
};

// https://www.codewars.com/kata/586a3270c66d18ad810001d4
Array.prototype.only = function (k) {
  return this.filter((e, i) => k.includes(i));
};

// https://www.codewars.com/kata/5ba38ba180824a86850000f7
const singleRemove = arr =>
  arr.filter((item, index) => arr.lastIndexOf(item) === index);

// https://www.codewars.com/kata/5904d222e1bfd3354e000026
const removeDuplication = arr =>
  arr.filter(
    (item, index) =>
      index == arr.indexOf(item) && index == arr.lastIndexOf(item)
  );

// https://www.codewars.com/kata/5963caa2cb97be79630000c0
function eqAll() {
  return [...this].every(el => el === this[0]);
}
Object.defineProperty(Object.prototype, 'eqAll', { value: eqAll });

// https://www.codewars.com/kata/583ebb9328a0c034490001ba
const duplicateElements = (m, n) => m.some(item => n.includes(item));

const duplicateElements1 = (m, n) =>
  Boolean(m.filter(item => n.includes(item)).length);

// https://www.codewars.com/kata/6161847f52747c0025d0349a
const createNDimensionalArray = (n, size) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr = Array(size).fill(`level ${n}`);
    } else {
      arr = Array(size).fill(arr);
    }
  }
  return arr;
};

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
const findMissingLetter = arr => {
  let missing;
  arr.map((item, index) =>
    index !== 0 && item.charCodeAt() - 1 !== arr[index - 1].charCodeAt()
      ? (missing = String.fromCharCode(arr[index - 1].charCodeAt() + 1))
      : item
  );
  return missing;
};

// https://www.codewars.com/kata/58f6000bc0ec6451960000fd
const selReverse = (arr, chunkSize) => {
  if (chunkSize > arr.length) return arr.reverse();
  if (chunkSize === 0) return arr;
  let selectArray = [];
  while (arr.length > 0) {
    selectArray.push(arr.splice(0, chunkSize).reverse());
  }
  return selectArray.flat();
};

// https://www.codewars.com/kata/59590976838112bfea0000fa
const beggars = (values, n) => {
  let total = Array(n).fill(0);

  for (let i = 0; i < values.length; i++) total[i % n] += values[i];

  return total;
};

const beggars1 = (values, n) => {
  const total = Array(n).fill(0);
  values.forEach((value, index) => {
    total[index % n] += value;
  });
  return total;
};

// https://www.codewars.com/kata/596f72bbe7cd7296d1000029
const deepCount = arr =>
  arr.reduce(
    (acc, curr) => acc + (Array.isArray(curr) ? deepCount(curr) : 0),
    arr.length
  );

// https://www.codewars.com/kata/52a112d9488f506ae7000b95
const isIntArray = arr =>
  Array.isArray(arr) && arr.every(item => Math.floor(item) === item);

// https://www.codewars.com/kata/554ca54ffa7d91b236000023
const deleteNth = (arr, n) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.filter(item => item === arr[i]).length < n) result.push(arr[i]);
  }

  return result;
};

const deleteNth1 = (arr, n) => {
  let tally = [];

  for (let i = 0; i < arr.length; i++) {
    const count = tally.filter(item => item === arr[i]).length;
    if (count && count === n) {
      continue;
    } else {
      tally.push(arr[i]);
    }
  }
  return tally;
};

// https://www.codewars.com/kata/583203e6eb35d7980400002a
const countSmileys = arr =>
  arr.filter(v => v.match(/(:|;)(-|~)?(\)|D)/)).length;

// https://www.codewars.com/kata/5202ef17a402dd033c000009
const titleCase = (title, minorWords) => {
  const minWords = Boolean(minorWords)
    ? minorWords.toLowerCase().split(' ')
    : [];
  return title
    .toLowerCase()
    .split(' ')
    .map((item, index) => {
      if (item != '' && (minWords.indexOf(item) === -1 || index == 0)) {
        item = item.split('');
        item[0] = item[0].toUpperCase();
        item = item.join('');
      }
      return item;
    })
    .join(' ');
};

// https://www.codewars.com/kata/57a6633153ba33189e000074
const orderedCount = str => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j][0] === str[i]) {
        count++;
      }
    }
    if (count === 0) {
      for (let j = i; j < str.length; j++) {
        if (str[j] === str[i]) {
          count++;
        }
      }
      result.push([str[i], count]);
    }
  }
  return result;
};

// https://www.codewars.com/kata/586d6cefbcc21eed7a001155
const longestRepetition = str => {
  if (str.length < 1) return ['', 0];

  let s = str.match(/(.)\1*/g) || [];

  const result = s
    .map(item => [item.charAt(0), item.length])
    .reduce((acc, curr) => (acc = acc[1] >= curr[1] ? acc : curr));

  return result;
};

// https://www.codewars.com/kata/5566b0dd450172dfc4000005
const lengthOfSequence = (arr, n) =>
  arr.includes(n) &&
  arr.length > 1 &&
  arr.filter(item => item === n).length === 2
    ? arr.lastIndexOf(n) - arr.indexOf(n) + 1
    : 0;

// https://www.codewars.com/kata/586560a639c5ab3a260000f3
const rotate = str =>
  str.split('').map(_ => (str = str.slice(1) + str.slice(0, 1)));

const rotate1 = str =>
  str.length < 1
    ? []
    : [...[...str].map((_, i) => str.slice(i) + str.slice(0, i)).slice(1), str];

// https://www.codewars.com/kata/554e52e7232cdd05650000a0
const lowestProduct = input => {
  let vals = [];
  if (input.length < 4) return 'Number is too small';
  for (let i = 0; i < input.length - 3; i++) {
    vals.push(
      input
        .slice(i, i + 4)
        .split('')
        .map(item => +item)
        .reduce((a, b) => a * b, 1)
    );
  }
  return Math.min(...vals);
};

// https://www.codewars.com/kata/56a946cd7bd95ccab2000055
const lowercaseCount = str =>
  [...str].filter(item => item.match(/[a-z]/)).length;

const lowerCaseCount1 = str => str.replace(/[^a-z]/g, '').length;

// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);

// https://www.codewars.com/kata/567bf4f7ee34510f69000032/javascript
String.prototype.digit = function () {
  return /^\d$/.test(this);
};

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
const rps = (p1, p2) => {
  if (p1 == p2) {
    return 'Draw!';
  } else if (
    (p1 == 'scissors' && p2 == 'paper') ||
    (p1 == 'paper' && p2 == 'rock') ||
    (p1 == 'rock' && p2 == 'scissors')
  ) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

// https://www.codewars.com/kata/51f082ba7297b8f07f000001
const findInArray = (array, iterator) => array.findIndex(iterator);

const findInArray1 = (array, iterator) =>
  array.map((item, index) => iterator(item, index)).indexOf(true);

// https://www.codewars.com/kata/513fa1d75e4297ba38000003
const flatten = (...args) =>
  args.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(...curr) : curr),
    []
  );

// https://www.codewars.com/kata/56cac350145912e68b0006f0
const arrange = strng => {
  let arr = strng.split(' ');
  let compare = [(a, b) => a.length > b.length, (a, b) => a.length < b.length];
  for (let i = 0; i < arr.length - 1; i++) {
    if (compare[i % 2](arr[i], arr[i + 1])) {
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    }
  }

  return arr
    .map((item, index) => (index % 2 ? item.toUpperCase() : item.toLowerCase()))
    .join(' ');
};

// https://www.codewars.com/kata/55ccdf1512938ce3ac000056
const isLockNessMonster = s => /3.50|tree fiddy|three fifty/gi.test(s);

// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript
const validateCode = code => /^[1-3]/.test(code);

// https://www.codewars.com/kata/585b1fafe08bae9988000314
const explode = s =>
  s
    .split('')
    .map(item => item.repeat(Number(item)))
    .join('');

// https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript
const makeString = s =>
  s
    .split(' ')
    .map(item => item.charAt(0))
    .join('');

// https://www.codewars.com/kata/567bed99ee3451292c000025
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};

// https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript
String.prototype.isLetter = function () {
  return /^[a-z]$/i.test(this);
};

// https://www.codewars.com/kata/567de8823fa5eee02100002a
String.prototype.whitespace = function () {
  return /^\s*$/i.test(this);
};

// https://www.codewars.com/kata/525d9b1a037b7a9da7000905
const searchNames = logins => logins.filter(item => item[0].endsWith('_'));

// https://www.codewars.com/kata/593b1909e68ff627c9000186
const nicknameGenerator = name =>
  name.length < 4
    ? 'Error: Name too short'
    : !/[aeiou]/.test(name.charAt(2))
    ? name.slice(0, 3)
    : name.slice(0, 4);

// https://www.codewars.com/kata/5a4331b18f27f2b31f000085
const replaceLetters = str => {
  const alphaCircle = ltr => [
    ...alphabet.slice(alphabet.indexOf(ltr)),
    ...alphabet.slice(0, alphabet.indexOf(ltr)),
  ];

  return str
    .split('')
    .map(item =>
      vowels.includes(item)
        ? alphaCircle(item)
            .reverse()
            .find(item => consonants.includes(item))
        : alphaCircle(item).find(item => vowels.includes(item))
    )
    .join('');
};

// https://www.codewars.com/kata/56a921fa8c5167d8e7000053
const password = str =>
  str.length >= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);

const password1 = str => {
  const length = str.length > 7;
  const num = str.match(/[0-9]/);
  const low = str.match(/[a-z]/);
  const upp = str.match(/[A-Z]/);

  return length && num && low && upp ? true : false;
};

// https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d
const removeChars = s => s.replace(/[^a-z\s]/gi, '');

// https://www.codewars.com/kata/5545f847bd94d050be00011d/train/javascript
const wordSearch = (word, text) => text.search('\\b' + word + '\\b') > -1;

// https://www.codewars.com/kata/54b81566cd7f51408300022d
const wordSearch1 = (query, seq) => {
  const result = seq.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return Boolean(result.length) ? result : ['Empty'];
};

// https://www.codewars.com/kata/56833b76371e86f8b6000015/train/javascript
String.prototype.toCents = function () {
  if (/^\$\d+\.\d{2}$/.test(this)) return this.replace(/[^0-9]/g, '') * 1;
  return null;
};

// https://www.codewars.com/kata/569b5cec755dd3534d00000f
const newAvg = (arr, newavg) => {
  const result =
    newavg * (arr.length + 1) - arr.reduce((acc, curr) => acc + curr, 0);
  if (result <= 0) throw 'Expected New Average is too low';
  return Math.ceil(result);
};

// https://www.codewars.com/kata/58356a94f8358058f30004b5
const flyBy = (lamps, drone) =>
  [...lamps].map((_, index) => (index < drone.length ? 'o' : 'x')).join('');

// https://www.codewars.com/kata/5970fce80ed776b94000008b
const lettersToNumbers = s => {
  const key = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 2,
    B: 4,
    C: 6,
    D: 8,
    E: 10,
    F: 12,
    G: 14,
    H: 16,
    I: 18,
    J: 20,
    K: 22,
    L: 24,
    M: 26,
    N: 28,
    O: 30,
    P: 32,
    Q: 34,
    R: 36,
    S: 38,
    T: 40,
    U: 42,
    V: 44,
    W: 46,
    X: 48,
    Y: 50,
    Z: 52,
  };

  return [...s.replace(/\W/g, '')].reduce(
    (acc, curr) => acc + (/\d/.test(curr) ? Number(curr) : key[curr]),
    0
  );
};

// https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
const mergedArrays = (a, b) => [...new Set([...a, ...b])].sort((c, d) => c - d);

const mergedArrays1 = (a, b) => {
  const temp = [...a, ...b].sort((valA, valB) => valA - valB);
  return [...new Set(temp)];
};

// https://www.codewars.com/kata/57642a90dee2da8dd3000161
const arr2bin = arr =>
  arr
    .reduce((acc, curr) => (typeof curr === 'number' ? acc + curr : acc), 0)
    .toString(2);

// https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript
const gridMap = (fn, a) => a.map(item => item.map(subItem => fn(subItem)));

// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9
const countWins = (winnerList, country) =>
  winnerList.filter(item => item.country === country).length;

// https://www.codewars.com/kata/57cf50a7eca2603de0000090
const moveTen = s => {
  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return s
    .split('')
    .map(item => alpha[(alpha.indexOf(item) + 10) % alpha.length])
    .join('');
};

// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001
const findDup = arr => arr.find((item, index) => arr.indexOf(item) !== index);

const findDup1 = arr =>
  arr.find(
    (item, index) =>
      index == arr.indexOf(item) && index !== arr.lastIndexOf(item)
  );

// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2
const smallEnough = (a, l) => a.every(x => x <= l);

// https://www.codewars.com/kata/57cc91a458a06b1492000318
const smallEnoughShort = (a, b) => !a.some(e => e > b);

// https://www.codewars.com/kata/no-loops-3-copy-within
const copy = (array, start, stop, place) =>
  array.copyWithin(place, start, stop);

// https://www.codewars.com/kata/56d5166ec87df55dbe000063
const sumAverage = arr =>
  Math.floor(
    arr
      .map(item => item.reduce((acc, curr) => acc + curr, 0) / item.length)
      .reduce((acc, curr) => acc + curr, 0)
  );

// https://www.codewars.com/kata/557dd2a061f099504a000088
const listToArray = list => {
  let resultArr = [];
  for (let node = list; node; node = node.next) resultArr.push(node.value);
  return resultArr;
};

// https://www.codewars.com/kata/56414fdc6488ee99db00002c
const absentVowel = x => [...'aeiou'].findIndex(ltr => !x.includes(ltr));

const absentVowel1 = x =>
  ['a', 'e', 'i', 'o', 'u'].indexOf(
    ['a', 'e', 'i', 'o', 'u'].find(
      item => ![...new Set(x.replace(/[^aeiou]/g, '').split(''))].includes(item)
    )
  );

// https://www.codewars.com/kata/57d1f36705c186d018000813
const gordon = a =>
  a
    .toUpperCase()
    .replace(/[A]/g, '@')
    .replace(/[EIOU]/g, '*')
    .split(` `)
    .map(item => `${item}!!!!`)
    .join(' ');

// https://www.codewars.com/kata/52ab60b122e82a6375000bad
const sortReindeer = reindeerNames =>
  reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));

const sortReindeer1 = reindeerNames =>
  reindeerNames
    .map(item => item.split(' '))
    .sort((a, b) => (a[1] === b[1] ? a[1] : a[1].localeCompare(b[1])))
    .map(item => item.join(' '));

// https://www.codewars.com/kata/57ef016a7b45ef647a00002d
const filterHomogenous = arr =>
  arr.filter(
    item =>
      Boolean(item.length) &&
      item.every(subItem => typeof item[0] == typeof subItem)
  );

// https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a/train/javascript
const golfScoreCalculator = (parList, scoreList) => {
  const par = Array.from(parList.split(''), Number);
  const score = Array.from(scoreList.split(''), Number);

  return score
    .map((_, index) => [score[index], par[index]])
    .reduce((acc, curr) => acc + (curr[0] - curr[1]), 0);
};

// https://www.codewars.com/kata/55eca815d0d20962e1000106
const generateRange = (min, max, step) =>
  Array.from({ length: (max - min) / step + 1 }, (_, i) => min + i * step);

// https://www.codewars.com/kata/55ed875819ae85ca8b00005c
const multiplyAndFilter = (array, multiplier) =>
  array.filter(item => typeof item === 'number').map(item => item * multiplier);

// https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb
const findMissingNumbers = arr => {
  let missing = [];
  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  return missing;
};

const findMissingNumbers1 = arr => {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index + 1] > arr[index] + 1)
      result.push(
        Array.from(
          { length: arr[index + 1] - arr[index] },
          (_, i) => arr[index] + i
        )
      );
  }

  return [...new Set(result.flat())].filter(item => !arr.includes(item));
};

// https://www.codewars.com/kata/59778cb1b061e877c50000cc
const arrAdder = arr => {
  let temp = [];
  const total = [].concat(...arr).length;

  while (temp.length < total) {
    arr.map(item => {
      temp.push(item[0]);
      item.shift();
    });
  }

  if (temp.length === total) {
    let chunked = [];
    while (temp.length > 0) {
      chunked.push(temp.splice(0, arr.length));
    }
    return chunked.map(item => item.join('')).join(' ');
  }
};

// https://www.codewars.com/kata/559cc2d2b802a5c94700000c
const consecutive = arr => {
  let missing = [];
  const sorted = [...arr].sort((a, b) => a - b);

  for (var i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    if (sorted.indexOf(i) === -1) {
      missing.push(i);
    }
  }
  return missing.length;
};

// https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e
const withoutLast = arr => arr.slice(0, -1);

// https://www.codewars.com/kata/5a84d485742ba347b90006b7
const howManyGifts = (maxBudget, gifts) => {
  const sorted = gifts.sort((a, b) => a - b);

  let giftBag = [];
  let giftBill = 0;

  for (let i = 0; i < sorted.length; i++) {
    if ((giftBill += sorted[i]) <= maxBudget) {
      giftBag.push(sorted[i]);
    }
  }

  return giftBag.length;
};

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
const match = (job, candidates) =>
  candidates.filter(
    item =>
      (job.equityMax > 0 || !item.desiresEquity) &&
      job.locations.some(
        subItem =>
          item.currentLocation === subItem ||
          item.desiredLocations.includes(subItem)
      )
  );

// https://www.codewars.com/kata/57ee31c5e77282c24d000024
const paul = x => {
  const score = x.reduce(
    (acc, curr) =>
      acc + { kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[curr],
    0
  );

  return score < 40
    ? 'Super happy!'
    : score < 70
    ? 'Happy!'
    : score < 100
    ? 'Sad!'
    : 'Miserable!';
};

const paul1 = x => {
  let result = '';

  const score = x.reduce(
    (acc, curr) =>
      acc + { kata: 5, 'Petes kata': 10, life: 0, eating: 1 }[curr],
    0
  );

  if (score > 100) result = 'Miserable!';
  if (score >= 70 && score < 100) result = 'Sad!';
  if (score >= 40 && score < 70) result = 'Happy!';
  if (score < 40) result = 'Super happy!';

  return result;
};

// https://www.codewars.com/kata/56c2a067585d9ac8280003c9
const match3 = (candidate, job) =>
  job.skills.every(
    skill =>
      candidate.skills.every(
        c => c.name !== skill.name || c.preference !== 'avoid'
      ) &&
      candidate.skills.some(
        c =>
          skill.substitutions
            .map(sub => sub.name)
            .concat(skill.name)
            .indexOf(c.name) !== -1 &&
          skill.idealYears <=
            c.experience * (c.preference === 'desired' ? 1.5 : 1)
      )
  );

// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7
const unscrambleEggs = word => word.replaceAll('egg', '');

// https://www.codewars.com/kata/5783ef69202c0ee4cb000265
const searchArray = (arrayToSearch, query) =>
  Array.isArray(query) &&
  query.length === 2 &&
  arrayToSearch[0].constructor === Array &&
  arrayToSearch.every(item => item.length === 2)
    ? arrayToSearch.findIndex(
        item => JSON.stringify(item) === JSON.stringify(query)
      )
    : (function () {
        throw Error;
      })();

// https://www.codewars.com/kata/5822d89270ca28c85c0000f3
const scramble = (str, arr) => {
  const unscramble = Array(str.length).fill('x');

  str.split('').map((item, index) => unscramble.splice(arr[index], 1, item));

  return unscramble.join('');
};

// https://www.codewars.com/kata/5849169a6512c5964000016e
const greatestCommonFactor = array => {
  const factors = array.map(item =>
    Array.from(Array(item + 1), (_, i) => i).filter(i => item % i === 0)
  );

  return Math.max(
    ...factors
      .shift()
      .filter(item => factors.every(subItem => subItem.indexOf(item) !== -1))
  );
};

// https://www.codewars.com/kata/564871e795df155582000013
const fill_gaps = timesheet => {
  if (timesheet.length < 3 || timesheet.every(item => item === timesheet[0]))
    return timesheet;

  let gaps = [];

  for (let i = 0; i < timesheet.length; i++) {
    [
      ...timesheet.slice(0, i).filter(item => item !== null),
      'x',
      ...timesheet.slice(i + 1, timesheet.length).filter(item => item !== null),
    ]
      .map((item, index, arr) =>
        item === 'x' ? gaps.push([arr[index - 1], arr[index + 1]]) : null
      )
      .filter(Boolean);
  }

  return timesheet.map((item, index) =>
    item == null && gaps[index][0] == gaps[index][1] ? gaps[index][0] : item
  );
};

// https://www.codewars.com/kata/586e1d458cb711f0a800033b
const processData = data =>
  data.map(item => item[0] - item[1]).reduce((acc, curr) => acc * curr);

// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
const well = x => {
  let good = 0;

  x.flat().map(item =>
    typeof item === 'string' && item.toLowerCase() === 'good' ? good++ : item
  );

  return good > 2 ? 'I smell a series!' : good > 0 ? 'Publish!' : 'Fail!';
};

// https://www.codewars.com/kata/53d6387b83db278202000802
const liftoff = instructions =>
  instructions.sort((a, b) => b - a).join(' ') + ' liftoff!';

// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff
const minMinMax = array => {
  let minAbsent = Math.min(...array);

  while (array.includes(minAbsent) == true) minAbsent += 1;

  return [Math.min(...array), minAbsent, Math.max(...array)];
};

const minMinMax1 = array => {
  let minAbsent = Math.min(...array);

  for (let i = 0; i < array.length; i++) {
    if (array.includes(minAbsent)) minAbsent++;
  }

  return [Math.min(...array), minAbsent, Math.max(...array)];
};

// https://www.codewars.com/kata/56f3a1e899b386da78000732
const partlist = arr =>
  arr
    .map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
    .slice(1);

// https://www.codewars.com/kata/54592a5052756d5c5d0009c3
const head = arr => +arr.slice(0, 1);
const tail = arr => arr.slice(1);
const init = arr => arr.slice(0, arr.length - 1);
const last = arr => +arr.slice(arr.length - 1);

// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d
const isFlush = cards =>
  cards.every(item => cards[0].slice(-1) === item.slice(-1));

const isFlush1 = cards => {
  const result = cards.map(item1 => item1[item1.length - 1]);

  return result.every(item => item === result[0]);
};

// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018
const arithmeticSequenceElements = (a, d, n) =>
  Array.from({ length: n }, (_, i) => a + i * d).join(', ');

// https://www.codewars.com/kata/58999425006ee3f97c00011f
const passed = list => {
  const passed = list.filter(item => item <= 18);

  return !Boolean(passed.length)
    ? 'No pass scores registered.'
    : Math.round(passed.reduce((acc, curr) => acc + curr) / passed.length);
};

// https://www.codewars.com/kata/565b112d09c1adfdd500019c
const nthChar = words =>
  words.map((item, index) => item.charAt(index)).join('');

// https://www.codewars.com/kata/5af15a37de4c7f223e00012d
const menFromBoys = arr => [
  ...new Set(arr.filter(item => item % 2 === 0).sort((a, b) => a - b)),
  ...new Set(arr.filter(item => item % 2).sort((a, b) => b - a)),
];

// https://www.codewars.com/kata/5bdcd20478d24e664d00002c
const wheatFromChaff = values => {
  for (let head = 0, tail = values.length - 1; head < tail; ) {
    while (values[head] < 0) head++;
    while (values[tail] > 0) tail--;
    if (head < tail)
      [values[tail], values[head]] = [values[head], values[tail]];
  }
  return values;
};

// https://www.codewars.com/kata/54b81566cd7f51408300022d
const wordSearch2 = (query, seq) => {
  const result = seq.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return Boolean(result.length) ? result : ['Empty'];
};

// https://www.codewars.com/kata/5729fa716c7d26dc84000040
const arrayLowerCase = arr =>
  arr.map(item => (typeof item === 'string' ? item.toLowerCase() : item));

// https://www.codewars.com/kata/5808c8eff0ed4210de000008
const part = x => {
  const count = x.filter(item =>
    [
      'Partridge',
      'PearTree',
      'Chat',
      'Dan',
      'Toblerone',
      'Lynn',
      'AlphaPapa',
      'Nomad',
    ].includes(item)
  ).length;

  return count > 0
    ? "Mine's a Pint" + '!'.repeat(count)
    : "Lynn, I've pierced my foot on a spike!!";
};

// https://www.codewars.com/kata/57ee24e17b45eff6d6000164
const catMouse = x => (x.length <= 5 ? 'Caught!' : 'Escaped!');

// https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf
const catMouse2 = (x, j) => {
  const cat = x.indexOf('C');
  const dog = x.indexOf('D');
  const mouse = x.indexOf('m');
  const dogBlock =
    x
      .split('')
      .filter(item => item !== '.')
      .indexOf('D') === 1;

  if (dog === -1 || cat === -1 || mouse === -1)
    return 'boring without all three';

  if (Math.abs(cat - mouse) > j) return 'Escaped!';

  if (Math.abs(cat - mouse) <= j && !dogBlock) return 'Caught!';

  return 'Protected!';
};

// https://www.codewars.com/kata/5b6dac711db5cef31100005b
const canBake = (available, recipe) => {
  const availableConvert = Object.entries(available)
    .map(item => ({
      ingredient: item[0],
      amount: Number(item[1].split(' ')[0]),
      type: item[1].split(' ')[1],
    }))
    .map(subItem => ({
      ingredient: subItem.ingredient,
      amount:
        subItem.type === 'g'
          ? subItem.amount / 200
          : subItem.type === 'ml'
          ? subItem.amount / 220
          : subItem.amount,
    }))
    .reduce(
      (obj, item) => Object.assign(obj, { [item.ingredient]: item.amount }),
      {}
    );

  const recipeConvert = Object.entries(recipe)
    .map(item => ({
      ingredient: item[0],
      amount: eval(item[1].split(' ')[0]) * 1,
      type: item[1].split(' ')[1],
    }))
    .map(subItem => ({
      ingredient: subItem.ingredient,
      amount:
        subItem.type === 'tbsp'
          ? subItem.amount / 16
          : subItem.type === 'tsp'
          ? subItem.amount / 48
          : subItem.amount,
    }))
    .reduce(
      (obj, item) => Object.assign(obj, { [item.ingredient]: item.amount }),
      {}
    );

  let missing = [];

  for (const item in recipeConvert) {
    if (
      availableConvert[item] == undefined ||
      availableConvert[item] < recipeConvert[item]
    )
      missing.push(item);
  }

  return Boolean(missing.length)
    ? `Not enough ingredients: need ${missing.join(', ').trim()}`
    : 'You can bake';
};

// https://www.codewars.com/kata/57658f3dedc6f7a751000e7b
const robot = skinScan =>
  skinScan.map(item => item.map(subItem => (subItem === 'X' ? '*' : subItem)));

// https://www.codewars.com/kata/57fa9bc99610ce206f000330
const shoot = x => {
  let peteScore = 0;
  let philScore = 0;

  for (let i = 0; i < x.length; i++) {
    x[i][0].P1.replace(/X/g, v => (x[i][1] ? (peteScore += 2) : peteScore++));
    x[i][0].P2.replace(/X/g, v => (x[i][1] ? (philScore += 2) : philScore++));
  }
  return peteScore > philScore
    ? 'Pete Wins!'
    : peteScore < philScore
    ? 'Phil Wins!'
    : 'Draw!';
};

const shoot2 = x => {
  const [pete, phil] = x.reduce(
    (result, [{ P1, P2 }, doublePoints]) => {
      result[0] += (P1.match(/X/g) || []).length * (doublePoints ? 2 : 1);
      result[1] += (P2.match(/X/g) || []).length * (doublePoints ? 2 : 1);
      return result;
    },
    [0, 0]
  );
  return pete > phil ? 'Pete Wins!' : phil > pete ? 'Phil Wins!' : 'Draw!';
};

// https://www.codewars.com/kata/565b3542af398bfb50000003
const strCount2 = obj => {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
};

// https://www.codewars.com/kata/5925acf31a9825d616000e74
const killcount = (counselors, jason) =>
  counselors.map(item => (item[1] < jason ? item[0] : null)).filter(Boolean);

// https://www.codewars.com/kata/57d2807295497e652b000139
const averages = numbers => {
  if (!Boolean(numbers) || numbers.length < 2) return [];
  let avg = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    avg.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return avg;
};

// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript
const assembleString = array => {
  if (!Boolean(array.length)) return '';
  let temp = Array(array[0].length).fill('#');
  array.map(item =>
    item
      .split('')
      .map((sub, subIndex) => (sub !== '*' ? (temp[subIndex] = sub) : sub))
  );

  return temp.join('');
};

// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
const crap = (array, bags, capacity) => {
  if (array.flat().includes('D')) return 'Dog!!';

  return array.flat().filter(item => item === '@').length > bags * capacity
    ? 'Cr@p'
    : 'Clean';
};

// https://www.codewars.com/kata/5aaae0f5fd8c069e8c00016e/train/javascript
const compoundMatch = (words, target) => {
  let temp = {};

  words.map((item1, index1) =>
    words.map((item2, index2) =>
      item1 + item2 === target
        ? (temp = { [item1]: index1, [item2]: index2 })
        : null
    )
  );

  if (JSON.stringify(temp) === '{}') return null;

  const sorted = [...Object.entries(temp)]
    .sort((a, b) => a[1] - b[1])
    .map(item => item[0]);

  return [...sorted, Object.values(temp)];
};

const compoundMatch1 = (words, target) => {
  const dict = {};

  for (let i = 0; i < words.length; i++) {
    dict[words[i]] = i;
  }

  for (let i = 1; i < target.length; i++) {
    const start = target.slice(0, i);
    const startIdx = dict[start];

    if (startIdx !== undefined) {
      const end = target.slice(i);
      const endIdx = dict[end];

      if (endIdx !== undefined) {
        const [first, second] = startIdx < endIdx ? [start, end] : [end, start];
        return [first, second, [startIdx, endIdx]];
      }
    }
  }

  return null;
};

// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
const addBinary = (a, b) => (a + b).toString(2);

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
const DNAStrand = dna => {
  const swap = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return dna
    .split('')
    .map(item => swap[item])
    .join('');
};

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
const removeUrlAnchor = url => url.split('#')[0];

// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
const reverseLetter = str =>
  str
    .replace(/[^a-z]/gi, '')
    .split('')
    .reverse()
    .join('');

// https://www.codewars.com/kata/59cfc000aeb2844d16000075
const capitalize = s => [
  s
    .split('')
    .map((item, index) => (index % 2 === 0 ? item.toUpperCase() : item))
    .join(''),
  s
    .split('')
    .map((item, index) => (index % 2 ? item.toUpperCase() : item))
    .join(''),
];

// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
const largest5inSeries = digits =>
  [...digits].reduce(
    (acc, _, index) => Math.max(acc, digits.slice(index, index + 5)),
    0
  );

// https://www.codewars.com/kata/5b39e3772ae7545f650000fc
const removeDuplicateWords = str => [...new Set(str.split(' '))].join(' ');

// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
const mxdiflg = (a1, a2) =>
  !Boolean(a1.length) || !Boolean(a2.length)
    ? -1
    : Math.max(
        Math.max(...a1.map(str => str.length)) -
          Math.min(...a2.map(str => str.length)),
        Math.max(...a2.map(str => str.length)) -
          Math.min(...a1.map(str => str.length))
      );
// https://www.codewars.com/kata/57f759bb664021a30300007d/solutions/javascript
const switcheroo = str =>
  str.replace(/[ab]/g, item => (item == 'a' ? 'b' : 'a'));

const switcheroo1 = str =>
  [...str]
    .map(item => (item === 'a' ? 'b' : item === 'b' ? 'a' : item))
    .join('');

// https://www.codewars.com/kata/5ce6728c939bf80029988b57
const consec = str => {
  const sorted = [...str].sort();

  if (sorted.length < 2) return true;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].charCodeAt() + 1 !== sorted[i + 1].charCodeAt()) return false;
  }

  return true;
};

// https://www.codewars.com/kata/5356ad2cbb858025d800111d
const capMe = names =>
  names.map(val => val[0].toUpperCase() + val.slice(1).toLowerCase());

// https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript
const counterEffect = hitCount =>
  Array.from(String(hitCount), Number).map(item =>
    Array.from({ length: item + 1 }, (_, i) => i)
  );

// https://www.codewars.com/kata/580a4001d6df740d61000301
const completeSeries = arr =>
  new Set(arr).size !== arr.length
    ? [0]
    : Array.from({ length: Math.max(...arr) + 1 }, (_, i) => i);

const completeSeries1 = arr =>
  Boolean(arr.filter((item, index) => arr.indexOf(item) !== index).length)
    ? [0]
    : Array.from({ length: Math.max(...arr) + 1 }, (_, i) => i);

// https://www.codewars.com/kata/563b1f55a5f2079dc100008a
const getLargerNumbers = (arr1, arr2) => {
  let largest = [];

  for (let i = 0; i < arr1.length; i++) {
    largest.push(Math.max(arr1[i], arr2[i]));
  }
  return largest;
};

const getLargerNumbers1 = (arr1, arr2) => {
  let largest = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) largest.push(arr1[i]);
    else largest.push(arr2[i]);
  }
  return largest;
};

// https://www.codewars.com/kata/5c7254fcaccda64d01907710
const file = arr => {
  const tally = arr
    .map(item => item.split('.').pop())
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});

  return Object.entries(tally)
    .reduce((acc, curr) => {
      acc[1] > curr[1]
        ? acc
        : acc[1] == curr[1]
        ? (acc = [...acc, ...curr])
        : (acc = curr);
      return acc;
    }, [])
    .filter(item => !Number(item))
    .map(item => `.${item}`)
    .sort();
};

// https://www.codewars.com/kata/514b92a657cdc65150000006
const multiples3or5 = number =>
  Array.from({ length: number }, (_, i) => i).reduce((acc, curr) => {
    if (curr % 3 === 0 || curr % 5 === 0) {
      acc = acc + curr;
    }
    return acc;
  }, 0);

// https://www.codewars.com/kata/54da539698b8a2ad76000228
const isValidWalk = walk => {
  const n = walk.filter(item => item === 'n').length;
  const s = walk.filter(item => item === 's').length;
  const e = walk.filter(item => item === 'e').length;
  const w = walk.filter(item => item === 'w').length;

  return walk.length === 10 && n === s && e === w;
};

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
const persistence = num => {
  let count = 0;

  while (Array.from(String(num), Number).length > 1) {
    num = Array.from(String(num), Number).reduce((acc, curr) => acc * curr);
    count++;
  }
  return count;
};

// https://www.codewars.com/kata/5287e858c6b5a9678200083c
const narcissistic = value =>
  Array.from(String(value), Number).reduce(
    (acc, curr, _, arr) => acc + curr ** arr.length,
    0
  ) === value;

// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
const decodeMorse = morseCode => {
  return morseCode
    .split(' ')
    .map((v, i) => (MORSE_CODE[v] != undefined ? MORSE_CODE[v] : 1))
    .join('')
    .replace(/11/g, ' ')
    .replace(/1/g, ' ')
    .trim();
};

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
const solution = s => (s + '_').match(/.{2}/g) || [];

const solution1 = str => {
  let temp = [];

  for (let i = 0; i < [...str].length; i += 2) {
    temp.push([...str].slice(i, i + 2).join(''));
  }

  return temp.map(item => (item.length === 1 ? item.concat('_') : item));
};

// https://www.codewars.com/kata/valid-parentheses-1
const validParentheses = parens => {
  while (/\(\)/.test(parens)) parens = parens.replace(/\(\)/, '');
  return !parens;
};

// https://www.codewars.com/kata/5262119038c0985a5b00029f
const isPrime = num => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  const maxDiv = Math.sqrt(num) + 1;
  for (let i = 2; i < maxDiv; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
const validBraces = braces => {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
  }
  return !braces.length;
};

// https://www.codewars.com/kata/51b62bf6a9c58071c600001b
const romanEncoder = number => {
  let result = '';
  const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  dec.map((value, index) => {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });

  return result;
};

// https://www.codewars.com/kata/51b6249c4612257ac0000005
const romanDecoder = roman => {
  const dict = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  return roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((acc, curr) => acc + dict[curr], 0);
};

// https://www.codewars.com/kata/587731fda577b3d1b0001196
String.prototype.camelCase = function () {
  let arg = this.toString().trim().split(' ');
  let arr = arg.map(item =>
    item ? item.slice(0, 1).toUpperCase() + item.slice(1) : item
  );
  return arr.join('');
};

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
const isPangram = string => {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(item => string.indexOf(item) !== -1);
};

// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
const kebabize = str =>
  str
    .replace(/[0-9]/g, '')
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();

// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
const getLengthOfMissingArray = arrayOfArrays => {
  const lengths = (arrayOfArrays || [])
    .map(a => (a ? a.length : 0))
    .sort((a, b) => a - b);

  if (lengths.includes(0)) {
    return 0;
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1;
    }
  }

  return 0;
};

// https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = str =>
  str
    .replace(/\d+/g, item => String.fromCharCode(item * 1))
    .split(' ')
    .map(item =>
      item.length > 2
        ? item.slice(0, 1) +
          item.slice(-1) +
          item.slice(2, -1) +
          item.slice(1, 2)
        : item
    ).join` `;

// https://www.codewars.com/kata/576bb3c4b1abc497ec000065
const compare = (s1, s2) =>
  /^[a-zA-Z]+$/.test(s1) && Boolean(s1)
    ? s1
        .toUpperCase()
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt(), 0)
    : 0 == /^[a-zA-Z]+$/.test(s2) && Boolean(s2)
    ? s2
        .toUpperCase()
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt(), 0)
    : 0;

// https://www.codewars.com/kata/58e0cb3634a3027180000040
const sortByValueAndIndex = array =>
  array
    .map((item, index) => ({
      idx: (index + 1) * item,
      el: item,
    }))
    .sort((a, b) => a.idx - b.idx)
    .map(item => item.el);

// https://www.codewars.com/kata/56853c44b295170b73000007
const isSquare2 = arr =>
  Boolean(arr.length)
    ? arr.every(item => Math.sqrt(item) % 1 === 0)
    : undefined;

// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a
const replaceAll = (seq, find, replace) =>
  seq.constructor === Array
    ? seq.map(item => (item === find ? replace : item))
    : seq.replaceAll(find, replace);

// https://www.codewars.com/kata/57efab9acba9daa4d1000b30
const bald = x => {
  const hairCount = x.split('/').length - 1;
  const clean = Array(x.length).fill('-').join('');

  if (hairCount < 1) return [clean, 'Clean!'];
  if (hairCount < 2) return [clean, 'Unicorn!'];
  if (hairCount < 3) return [clean, 'Homer!'];
  if (hairCount < 6) return [clean, 'Careless!'];

  return [clean, 'Hobo!'];
};

// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
const save = (sizes, hd) => {
  let fileCount = 0;

  sizes.reduce((acc, curr) => {
    if ((acc += curr) <= hd) fileCount += 1;
    return acc;
  }, 0);

  return fileCount;
};

const save1 = (sizes, hd) => {
  for (var i = 0; i < sizes.length; i++) {
    if (sizes.slice(0, 1 + i).reduce((a, b) => a + b, 0) > hd) return i;
  }
  return i;
};

// https://www.codewars.com/kata/5892595f190ca40ad0000095
const mispelled = (word1, word2) => {
  if (word1.length < word2.length) {
    let temp = word1;
    word1 = word2;
    word2 = temp;
  }
  let count = 0;
  for (let i = 0, j = 0; i < word1.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      if (word1.length > word2.length) {
        i++;
      }
    }
  }
  return count < 2;
};

// https://www.codewars.com/kata/586a1af1c66d18ad81000134
const driver = data => {
  const name = (data[2].slice(0, 5).toUpperCase() + '99999').slice(0, 5); // 5
  const dob = new Date(data[3]);
  const dec =
    dob.getYear().toString().length == 2
      ? dob.getYear().toString()[0]
      : dob.getYear().toString()[1]; // 1
  const month =
    data[4] == 'M'
      ? ('0' + (dob.getMonth() + 1).toString()).slice(-2)
      : dob.getMonth() + 51;
  const day = ('0' + dob.getDate().toString()).slice(-2);
  const yearDig = dob.getYear().toString().slice(-1);
  const inits = data[0][0] + (data[1] == '' ? '9' : data[1][0]);
  const arb1 = '9';
  const arb2 = 'AA';
  return name + dec + month + day + yearDig + inits + arb1 + arb2;
};

// https://www.codewars.com/kata/5805ed25c2799821cb000005
const cake = (x, y) =>
  y
    .split('')
    .reduce(
      (acc, curr, index) =>
        index % 2
          ? acc + 'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(curr) + 1
          : acc + curr.charCodeAt(),
      0
    ) >
  x * 0.7
    ? 'Fire!'
    : 'That was close!';

// https://www.codewars.com/kata/54589f3b52756d34d6000158
Array.prototype.all = function (p) {
  return this.filter(p).length == this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length == 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};

// https://www.codewars.com/kata/5258b272e6925db09900386a
const numbers = (...nums) => nums.every(item => typeof item === 'number');

// https://www.codewars.com/kata/559d7951ce5e0da654000073
const alternateSqSum = arr =>
  Boolean(arr.length)
    ? arr.reduce((acc, curr, index) => acc + (index % 2 ? curr ** 2 : curr), 0)
    : 0;

// https://www.codewars.com/kata/56606694ec01347ce800001b
const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
const isAnagram = (test, original) =>
  original.toLowerCase().split('').sort().join('') ==
  test.toLowerCase().split('').sort().join('');

// https://www.codewars.com/kata/5aba780a6a176b029800041c
const maxMultiple = (divisor, bound) => bound - (bound % divisor);

const maxMultiple1 = (divisor, bound) =>
  Math.max(
    ...Array.from({ length: bound }, (_, i) => i + 1).filter(
      item => item % divisor === 0
    )
  );

// https://www.codewars.com/kata/5a090c4e697598d0b9000004
const maxMin = arr => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push([...arr].sort((a, b) => b - a)[i]);
    result.push([...arr].sort((a, b) => a - b)[i]);
  }

  return [...new Set(result)];
};

const maxMin1 = arr => {
  arr = arr.sort((a, b) => b - a);
  const length = arr.slice().length;
  const arr1 = [];

  for (let i = 0; i < length; i++) {
    arr1.push(arr.shift());
    arr1.push(arr.pop());
  }
  return arr1.filter(v => v != undefined);
};

// https://www.codewars.com/kata/5a1a9e5032b8b98477000004
const evenLast = numbers =>
  !numbers.length
    ? 0
    : numbers
        .filter((_, index) => index % 2 == 0)
        .reduce((acc, curr) => acc + curr, 0) * numbers[numbers.length - 1];

// https://www.codewars.com/kata/5299413901337c637e000004
const getMissingElement = arr => {
  for (i = 0; i < 10; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
};

const getMissingElement1 = arr =>
  arr
    .sort((a, b) => a - b)
    .filter((item, index, array) => array[index + 1] - item !== 1)[0] + 1;

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
const accum = str =>
  str
    .toUpperCase()
    .split('')
    .map((item, index) => item + item.toLowerCase().repeat(index))
    .join('-');

// https://www.codewars.com/kata/54da5a58ea159efa38000836
const findOdd = arr =>
  arr.find(item => arr.filter(subItem => subItem == item).length % 2);

const findOdd1 = arr => {
  let foundOdd;

  const result = arr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  for (const item in result) {
    if (result[item] % 2) foundOdd = item;
  }
  return Number(foundOdd);
};

// https://www.codewars.com/kata/52c31f8e6605bcc646000082
const twoSum = (numbers, target) => {
  let sumPair = [];
  numbers.map((item1, index1) =>
    numbers.map((item2, index2) =>
      index1 !== index2 && item1 + item2 === target
        ? (sumPair = [index1, index2])
        : null
    )
  );

  return sumPair;
};

const twoSum1 = (numbers, target) => {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
};

// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b
const stantonMeasure = arr =>
  arr.filter(item => item == arr.filter(subItem => subItem === 1).length)
    .length;

// https://www.codewars.com/kata/57cc79ec484cf991c900018d
const dbSort = arr => [
  ...arr.filter(item => typeof item == 'number').sort((a, b) => a - b),
  ...arr.filter(item => typeof item == 'string').sort(),
];

const dbSort1 = arr => {
  let numbers = [];
  let letters = [];

  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === 'string' ? letters.push(arr[i]) : numbers.push(arr[i]);
  }
  return [...numbers.sort((a, b) => a - b), ...letters.sort()];
};

// https://www.codewars.com/kata/59f7fc109f0e86d705000043
Array.prototype.numberOfOccurrences = function (search) {
  return this.filter(function (num) {
    return search === num;
  }).length;
};

// https://www.codewars.com/kata/57e8fba2f11c647abc000944
const fireFight = str => str.replace(/Fire/g, '~~');

const fireFight1 = str =>
  str.split(' ').includes('Fire')
    ? str
        .split(' ')
        .map(item => (item === 'Fire' ? '~~' : item))
        .join(' ')
    : str;

// https://www.codewars.com/kata/5a39d21cb6cfd70767000086
const cut = (len, num) =>
  [...Array(num)].map((_, i) => ((len / num) | 0) + (len % num > i));

const cut1 = (len, num) => {
  let result = [];
  let temp = 0;
  for (let i = 1; i <= num; i++) {
    result.push(Math.floor(len / num));
    temp += (len / num) % 1;
    if (temp >= 1) {
      temp--;
      result[i - 1]++;
    }
  }
  if (result.reduce((a, b) => a + b, 0) !== len) result[0]++;
  return result;
};

// https://www.codewars.com/kata/609eee71109f860006c377d1
const lastSurvivor = (letters, coords) =>
  coords.reduce(
    (acc, curr) => acc.slice(0, curr) + acc.slice(curr + 1),
    letters
  );

// https://www.codewars.com/kata/56d19b2ac05aed1a20000430
const betweenExtremes = nums => Math.max(...nums) - Math.min(...nums);

// https://www.codewars.com/kata/589ebcb9926baae92e000001
const convert = num => {
  const numArr = num.split('');
  let ascArr = [];
  while (numArr.length > 0) {
    ascArr.push(numArr.splice(0, 2).join(''));
  }

  return ascArr.map(item => String.fromCharCode(Number(item))).join('');
};

// https://www.codewars.com/kata/57a083a57cb1f31db7000028
const powersOfTwo = n => {
  let result = [];
  for (i = 0; i <= n; i++) {
    let step = 2 ** i;
    result.push(step);
  }
  return result;
};

// https://www.codewars.com/kata/577ff15ad648a14b780000e7
const greet = language => {
  const data = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };

  return data[language] || data['english'];
};

// https://www.codewars.com/kata/5a023c426975981341000014
const otherAngle = (a, b) => 180 - a - b;

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
const isPalindrome = x =>
  x.toLowerCase().split('').reverse().join('') === x.toLowerCase();

// https://www.codewars.com/kata/582e0e592029ea10530009ce
const duckDuckGoose = (players, goose) =>
  players[(goose - 1) % players.length].name;

// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b
const sakuraFall = v => (v > 0 ? (5 * 80) / v : 0);

// https://www.codewars.com/kata/5bb0c58f484fcd170700063d
const pillars = (numPill, dist, width) =>
  numPill == 1 ? 0 : (numPill - 2) * width + 100 * dist * (numPill - 1);

// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
const elevator = (left, right, call) =>
  Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';

// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
const flip = (d, a) =>
  d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

// https://www.codewars.com/kata/643af0fa9fa6c406b47c5399
const quadrant = (x, y) => {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
};

// https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(item =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join('');
};

// https://www.codewars.com/kata/58261acb22be6e2ed800003a
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// https://www.codewars.com/kata/5875b200d520904a04000003
const enough = (cap, on, wait) => (on + wait <= cap ? 0 : on + wait - cap);

// https://www.codewars.com/kata/542ebbdb494db239f8000046
const nextItem = (xs, item) => {
  array = xs[Symbol.iterator]();
  for (let element of array) if (element === item) return array.next().value;
};

// https://www.codewars.com/kata/5a21e090f28b824def00013c
const switchDict = dic =>
  Object.entries(dic).reduce((acc, [key, value]) => {
    if (!acc[value]) acc[value] = [];
    acc[value].push(key);
    return acc;
  }, {});

const switchDict1 = dic =>
  Object.assign(
    {},
    ...[...new Set(Object.values(dic))].map(item => ({
      [item]: [
        ...Object.entries(dic)
          .map(([key, value]) => (value === item ? key : null))
          .filter(Boolean),
      ],
    }))
  );

// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
const leastLarger = (arr, idx) =>
  arr.indexOf(Math.min(...arr.filter(item => item > arr[idx])));

// https://www.codewars.com/kata/5a430359e1ce0e35540000b1
const averageLength = arr => {
  const average = Math.round(
    arr.map(item => item.length).reduce((acc, curr) => acc + curr, 0) /
      arr.length
  );

  return arr.map(item => item.charAt(0).repeat(average));
};

// https://www.codewars.com/kata/5a91a7c5fd8c061367000002
const minimumSteps = (numbers, limit) => {
  const sorted = numbers.sort((a, b) => a - b);
  let tally = 0;

  for (let i = 0; i < sorted.length; i++) {
    tally += sorted[i];
    if (tally >= limit) return i;
  }
  return tally;
};

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca
const minValue = numbers =>
  Number([...new Set(numbers)].sort((a, b) => a - b).join(''));

// https://www.codewars.com/kata/5a905c2157c562994900009d
const productArray = numbers =>
  numbers.map(item => numbers.reduce((acc, curr) => acc * curr) / item);

// https://www.codewars.com/kata/5a7893ef0025e9eb50000013
const maxGap = arr => {
  const result = arr
    .sort((a, b) => b - a)
    .map((item, index, arrSorted) => item - arrSorted[index + 1])
    .filter(Boolean);

  return !Boolean(result.length) ? 0 : Math.max(...result);
};

// https://www.codewars.com/kata/5a651865fd56cb55760000e0
const arrayLeaders = nums =>
  nums.filter(
    (item, index) =>
      item > nums.slice(index + 1).reduce((acc, curr) => acc + curr, 0)
  );

// https://www.codewars.com/kata/5aa1bcda373c2eb596000112
const maxTriSum = numbers => {
  const sorted = [...new Set(numbers.sort((a, b) => b - a))];
  return sorted[0] + sorted[1] + sorted[2];
};

// https://www.codewars.com/kata/517abf86da9663f1d2000003
const toCamelCase = str =>
  str
    .split(/[-_]/g)
    .map((item, index) =>
      index === 0
        ? item.charAt(0) === item.charAt(0).toUpperCase()
          ? item.toLowerCase().charAt(0).toUpperCase() + item.slice(1)
          : item.toLowerCase().charAt(0) + item.slice(1)
        : item.toLowerCase().charAt(0).toUpperCase() + item.slice(1)
    )
    .join('');

// https://www.codewars.com/kata/55960bbb182094bc4800007b
const insertDash = num =>
  Array.from(String(num), Number)
    .map((item, index, arr) =>
      item % 2 && arr[index + 1] % 2 ? `${item}-` : item
    )
    .join('');

// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
const switcher = x => {
  const alphaRev = ' zyxwvutsrqponmlkjihgfedcba!? ';
  return x.map(item => alphaRev[item]).join('');
};

// https://www.codewars.com/kata/55b080eabb080cd6f8000035
const oddOneOut = str => {
  const tally = {};
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (tally[str[i]]) tally[str[i]]++;
    else tally[str[i]] = 1;

    if (str.lastIndexOf(str[i]) === i && tally[str[i]] % 2 !== 0)
      result.push(str[i]);
  }

  return result;
};

// https://www.codewars.com/kata/55d6a0e4ededb894be000005
const switcheroo2 = str =>
  [...str]
    .map(item =>
      item.toLowerCase().charCodeAt() - 96 < 1
        ? item
        : item.toLowerCase().charCodeAt() - 96
    )
    .join('');

// https://www.codewars.com/kata/55d5434f269c0c3f1b000058
const tripledouble = (num1, num2) => {
  for (let i = 0; i < 10; i++) {
    const tripleReg = new RegExp(`${i}{3}`);
    const doubleReg = new RegExp(`${i}{2}`);

    if (tripleReg.test(num1) && doubleReg.test(num2)) {
      return 1;
    }
  }
  return 0;
};

// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0
const oddOnesOut = nums =>
  nums.filter(
    item => nums.filter(subItem => subItem === item).length % 2 === 0
  );

const oddOnesOut1 = arr => {
  const result = Object.entries(
    arr.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  )
    .filter(([_, value]) => value % 2 === 0)
    .map(([key, _]) => Number(key));

  return arr.map(item => (result.includes(item) ? item : null)).filter(Boolean);
};

// https://www.codewars.com/kata/55d410c492e6ed767000004f
const vowel2index = str => str.replace(/[aeiou]/gi, (_, i) => i + 1);

// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b
const meeting = (x, need) => {
  if (need === 0) return 'Game On';

  let chairsTaken = [];

  x.map(item =>
    chairsTaken.push(
      item[1] - item[0].length >= 0 ? item[1] - item[0].length : 0
    )
  );

  for (let i = 0; i <= chairsTaken.length; i++) {
    if (chairsTaken.slice(0, i).reduce((a, b) => a + b, 0) >= need) {
      chairsTaken = chairsTaken.slice(0, i);
      break;
    }
  }

  while (chairsTaken.reduce((a, b) => a + b, 0) > need) {
    chairsTaken[chairsTaken.length - 1]--;
  }

  if (chairsTaken.reduce((acc, curr) => acc + curr, 0) < need)
    return 'Not enough!';

  return chairsTaken;
};

// https://www.codewars.com/kata/5834315e06f227a6ac000099
const elimination = arr => {
  const result = arr.filter((item, index) => arr.indexOf(item) !== index);

  return Boolean(result.length) ? result[0] : null;
};

// https://www.codewars.com/kata/57f604a21bd4fe771b00009c
const officeIV = arr =>
  arr.findIndex(item => item === 'O') === -1
    ? 'None available!'
    : arr.findIndex(item => item === 'O');

// https://www.codewars.com/kata/57ed56657b45ef922300002b
const broken = str => [...str].map(item => (item === '0' ? '1' : '0')).join('');

// https://www.codewars.com/kata/5a87449ab1710171300000fd
const tidyNumber = n =>
  [...n.toString()]
    .map(Number)
    .every((item, index, arr) => !index || item >= arr[index - 1]);

// https://www.codewars.com/kata/577bd026df78c19bca0002c0
const correct = string =>
  string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
const cockroachSpeed = kmph => Math.floor((kmph * 100000) / 3600);

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb
const checkForFactor = (base, factor) => base % factor === 0;

// https://www.codewars.com/kata/57ed4cef7b45ef8774000014
const boredom = staff => {
  const scoreCard = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };

  const result = Object.values(staff).reduce(
    (acc, curr) => acc + scoreCard[curr],
    0
  );

  return result <= 80
    ? 'kill me now'
    : result >= 100
    ? 'party time!!'
    : 'i can handle this';
};

// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
const outed = (meet, boss) =>
  Object.entries(meet).reduce((acc, curr) => {
    curr[0] === boss ? (acc = acc + curr[1] * 2) : (acc = acc + curr[1]);
    return acc;
  }, 0) /
    Object.values(meet).length <=
  5
    ? 'Get Out Now!'
    : 'Nice Work Champ!';

// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4
const rotateArr = (array, n) => {
  n = n % array.length;
  return array.slice(-n).concat(array.slice(0, -n));
};

const rotateArr1 = (arr, n, m = n % arr.length) => [
  ...arr.slice(-m),
  ...arr.slice(0, -m),
];

// https://www.codewars.com/kata/5a3e1319b6486ac96f000049
const pairs = arr =>
  arr.reduce(
    (acc, curr, index) =>
      acc + (++index % 2 && Math.abs(curr - arr[index]) === 1),
    0
  );

const pairs1 = (array, count = 0) => {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
  return count;
};

// https://www.codewars.com/kata/580dda86c40fa6c45f00028a
const cubeOdd = arr =>
  arr.some(isNaN)
    ? undefined
    : arr.reduce(
        (acc, curr) => (curr % 2 ? (acc = acc + Math.pow(curr, 3)) : acc),
        0
      );

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
const rowSumOddNumbers = n => n ** 3;

// https://www.codewars.com/kata/63f96036b15a210058300ca9
const secondSymbol = (string, subString) => {
  const result = string.split(subString, 2).join(subString).length;

  return result >= string.length ? -1 : result;
};

// https://www.codewars.com/kata/58e3ffb01f878507e00005b0
const empty = array => {
  array.length = 0;
  return array;
};

// https://www.codewars.com/kata/550554fd08b86f84fe000a58
const inArray = (array1, array2) =>
  array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort();

const inArray1 = (arr1, arr2) => {
  let inArray = [];
  arr1 = arr1.sort();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].indexOf(arr1[i]) !== -1) {
        inArray.push(arr1[i]);
        break;
      }
    }
  }

  return inArray;
};

// https://www.codewars.com/kata/5b5097324a317afc740000fe
const binaryCleaner = arr =>
  arr.reduce(
    (acc, curr, index) => (
      curr < 2 ? acc[0].push(curr) : acc[1].push(index), acc
    ),
    [[], []]
  );

const binaryCleaner1 = arr => {
  let lessThanTwo = [];
  let indexGreaterOne = [];

  arr.map((item, index) => {
    if (item < 2) {
      lessThanTwo.push(item);
    }
    if (item > 1) {
      indexGreaterOne.push(index);
    }
  });

  return [lessThanTwo, indexGreaterOne];
};

// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150
const makeParts = (arr, chunkSize) =>
  arr.reduce((acc, curr, i) => {
    acc[Math.floor(i / chunkSize)] = [].concat(
      acc[Math.floor(i / chunkSize)] || [],
      curr
    );
    return acc;
  }, []);

// https://www.codewars.com/kata/569d488d61b812a0f7000015
const dataReverse = data =>
  data
    .reduce((acc, curr, i) => {
      const segment = Math.floor(i / 8);
      acc[segment] = [].concat(acc[segment] || [], curr);
      return acc;
    }, [])
    .reverse()
    .flat();

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
const switchItUp = num => {
  const responses = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];

  return responses[num % 10];
};

// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

// https://www.codewars.com/kata/56f6ad906b88de513f000d96
const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

// https://www.codewars.com/kata/5a63948acadebff56f000018
const maxProductArr = (nums, size) =>
  nums
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, curr) => acc * curr);

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((acc, curr) => acc + curr * arr.pop(), 0);

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
const howMuchILoveYou = numPetals => {
  const pedalTalk = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ];
  return pedalTalk[numPetals % 6];
};

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArrayOdd = array => {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
};

const sortArrayOdd1 = arr => {
  let odd = [];
  let oddIndex = -1;

  const result = arr.map(item => {
    if (item % 2) {
      odd.push(item);
      odd.sort((a, b) => a - b);
      return 'odd';
    } else {
      return item;
    }
  });

  const knit = result.map(item => {
    if (item === 'odd') {
      oddIndex = oddIndex + 1;
      return odd[oddIndex];
    } else {
      return item;
    }
  });

  return knit;
};

// https://www.codewars.com/kata/56786a687e9a88d1cf00005d
const validateWord = word =>
  [
    ...new Set(
      Object.values(
        [...word.toLowerCase()].reduce((acc, curr) => {
          acc[curr] ? acc[curr]++ : (acc[curr] = 1);
          return acc;
        }, {})
      )
    ),
  ].length === 1;

// https://www.codewars.com/kata/55c933c115a8c426ac000082
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// https://www.codewars.com/kata/595970246c9b8fa0a8000086
const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);

// https://www.codewars.com/kata/56f695399400f5d9ef000af5
function correctTail(bod, tail) {
  const sub = bod.substr(bod.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/5a9e86705ee396d6be000091
const checkThreeAndTwo = array => {
  const result = array.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  return Object.values(result).includes(3) && Object.values(result).includes(2);
};

// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030
const findMissing = (arr1, arr2) => {
  let index;

  for (let i = 0; i < arr1.length; i++) {
    index = arr2.indexOf(arr1[i]);
    if (index > -1) {
      arr2.splice(index, 1);
    } else {
      return arr1[i];
    }
  }
};

// https://www.codewars.com/kata/57f75cc397d62fc93d000059
const calc = x =>
  (x.replace(/./g, char => char.charCodeAt()).match(/7/g) || []).length * 6;

// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
const lastCharSort = x =>
  x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

// https://www.codewars.com/kata/557af4c6169ac832300000ba
const removeRotten = bagOfFruits =>
  Boolean(bagOfFruits)
    ? bagOfFruits.map(item =>
        item.startsWith('rotten')
          ? item.replace('rotten', '').toLowerCase()
          : item
      )
    : [];

// https://www.codewars.com/kata/595aa94353e43a8746000120
const findDeletedNumber = (arr, mixArr) => {
  const result = arr.find(
    (item, index) => item !== mixArr.sort((a, b) => a - b)[index]
  );
  return Boolean(result) ? result : 0;
};

// https://www.codewars.com/kata/5300901726d12b80e8000498
const fizzbuzz = n =>
  Array.from({ length: n }, (_, i) => i + 1).map(item =>
    item % 3 === 0 && item % 5 === 0
      ? 'FizzBuzz'
      : item % 3 === 0
      ? 'Fizz'
      : item % 5 === 0
      ? 'Buzz'
      : item
  );

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

// https://www.codewars.com/kata/55911ef14065454c75000062
const multiply = (a, b) => {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = stack[i + j] ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1]) stack[i + 1] += move;
    else if (move != 0) stack[i + 1] = move;
  }

  return stack
    .reverse()
    .join('')
    .replace(/^(0(?!$))+/, '');
};

// https://www.codewars.com/kata/57b68bc7b69bfc8209000307
const average = arr =>
  Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50
const loopArr = (arr, direction, steps) =>
  arr.map((_, index, array) =>
    direction === 'left'
      ? array[(index + array.length + steps) % array.length]
      : array[(index + array.length - steps) % array.length]
  );

// https://www.codewars.com/kata/57eb936de1051801d500008a
const explodeArray = x => {
  const intCheck = x.filter(item => Number.isInteger(item));
  if (intCheck.length === 2) return Array(intCheck[0] + intCheck[1]).fill(x);
  if (intCheck.length === 1) return Array(intCheck[0]).fill(x);
  if (intCheck.length < 1) return 'Void!';
};

// https://www.codewars.com/kata/5ace2d9f307eb29430000092
const modifyMultiply = (str, loc, num) =>
  Array(num).fill(str.split(' ')[loc]).join('-');

// https://www.codewars.com/kata/5143cc9694a24abcd2000001
Object.defineProperty(Array.prototype, 'containsAll', {
  value: function containsAll(a) {
    return a.every(e => this.includes(e));
  },
});

// https://www.codewars.com/kata/5bd00c99dbc73908bb00057a
const alphaSeq = str =>
  str
    .toUpperCase()
    .split('')
    .sort()
    .map(
      item =>
        item +
        item.toLowerCase().repeat(item.toLowerCase().charCodeAt() - 96 - 1)
    )
    .join(',');

// https://www.codewars.com/kata/5970df092ef474680a0000c9
const alphabetized = str =>
  str
    .replace(/[^a-z]/gi, '')
    .split('')
    .sort(
      (a, b) =>
        a.toLowerCase().charCodeAt() - 96 - (b.toLowerCase().charCodeAt() - 96)
    )
    .join('');

// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
const monkeyCount = n => Array.from({ length: n }, (_, i) => i + 1);

// https://www.codewars.com/kata/59342039eb450e39970000a6
const oddCount = n => Math.floor(n / 2);

// https://www.codewars.com/kata/5c857bab20089d4fe65a7f5b
const clean = arr => arr.flat(item => Boolean(item));

// https://www.codewars.com/kata/563fb342f47611dae800003c
const trim = (str, size) => {
  if (str.length <= size) return str;
  if (size <= 3) return str.slice(0, size) + '...';
  if (str.length >= size) return str.slice(0, size - 3) + '...';
};

// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
const whoIsPaying = name =>
  name.length <= 2 ? [name] : [name, name.slice(0, 2)];

// https://www.codewars.com/kata/5868812b15f0057e05000001
const tailSwap = arr => {
  const [one, two] = arr.map(item => item.split(':'));

  return [`${one[0]}:${two[1]}`, `${two[0]}:${one[1]}`];
};

// https://www.codewars.com/kata/5a0efbb7c374cb69970000cf
const reverseMessage = str =>
  str
    .split(' ')
    .reverse()
    .map(item => item.toLowerCase().split('').reverse().join(''))
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');

// https://www.codewars.com/kata/5704aea738428f4d30000914
const tripleTrouble = (one, two, three) => {
  const [a, b, c] = [one, two, three];

  const result = [...a]
    .map((item, index) => item + [...b][index] + [...c][index])
    .join('');

  return result;
};

// https://www.codewars.com/kata/570a6a46455d08ff8d001002
const noBoringZeros = num => Number(String(num).replace(/0+$/, ''));

// https://www.codewars.com/kata/50654ddff44f800200000007
const shortLongShort = (a, b) => {
  const [long, short] = [a, b].sort((a, b) => b.length - a.length);

  return `${short}${long}${short}`;
};

// https://www.codewars.com/kata/57ab3c09bb994429df000a4a
const twoHighest = arr => [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);

const twoHighest1 = arr => {
  const result = [...new Set(arr)].sort((a, b) => b - a);
  if (result.length >= 2) return result.slice(0, 2);
  if (result.length == 1) return result.slice(0, 1);
  else return [];
};

// https://www.codewars.com/kata/558ee8415872565824000007
const isDivisible = (first, ...rest) => rest.every(item => first % item == 0);

// https://www.codewars.com/kata/55968ab32cf633c3f8000008
const initials = name =>
  name
    .split(' ')
    .map((item, index, arr) =>
      index !== arr.length - 1
        ? `${item.slice(0, 1).toUpperCase()}.`
        : item.charAt(0).toUpperCase() + item.slice(1)
    )
    .join('');

// https://www.codewars.com/kata/58640340b3a675d9a70000b9
const removeVowels = str =>
  str
    .split('')
    .filter(item => !['a', 'e', 'i', 'o', 'u'].includes(item))
    .join('');

// https://www.codewars.com/kata/5733f948d780e27df6000e33
const cutCube = (volume, n) =>
  !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);

// https://www.codewars.com/kata/5733d6c2d780e20173000baa
const maxMinAbs = (arr1, arr2) => {
  const result = arr1.map((item, index) => Math.abs(item - arr2[index]));

  return [Math.max(...result), Math.min(...result)];
};

// https://www.codewars.com/kata/5732d3c9791aafb0e4001236
const roundIt = n => {
  const [left, right] = n.toString().split('.');
  return left.length > right.length
    ? Math.floor(n)
    : left.length === right.length
    ? Math.round(n)
    : Math.ceil(n);
};

// https://www.codewars.com/kata/573156709a231dcec9000ee8
const tailAndHead = arr =>
  arr
    .map(
      (item, index) =>
        (String(item).length > 1
          ? Number(String(item)[item.toString().length - 1])
          : item) + Number(String(arr[index + 1])[0])
    )
    .filter(Boolean)
    .reduce((acc, curr) => acc * curr);

// https://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = arr =>
  []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join('>');

// https://www.codewars.com/kata/57308546bd9f0987c2000d07
const mirrorImage = arr => {
  const mirrors = arr
    .map((item, index) =>
      index !== arr.length - 1 &&
      item.toString().split('').reverse().join('') ===
        arr[index + 1].toString().split('').join('')
        ? [item, arr[index + 1]]
        : null
    )
    .filter(Boolean);

  return mirrors.length ? mirrors[0] : [-1, -1];
};

// https://www.codewars.com/kata/573023c81add650b84000429
const countGrade = scores => ({
  S: scores.filter(x => x == 100).length,
  A: scores.filter(x => x < 100 && x >= 90).length,
  B: scores.filter(x => x < 90 && x >= 80).length,
  C: scores.filter(x => x < 80 && x >= 60).length,
  D: scores.filter(x => x < 60 && x >= 0).length,
  X: scores.filter(x => x == -1).length,
});

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
const isolateIt = arr =>
  arr.map(s => s.slice(0, s.length / 2) + '|' + s.slice(-s.length / 2));

// https://www.codewars.com/kata/572df796914b5ba27c000c90
const sortIt = arr => {
  let res = [...arr];

  res.sort((a, b) => {
    let n = arr.filter(x => x === a).length,
      m = arr.filter(y => y === b).length;
    return n == m ? b - a : n - m;
  });
  return res;
};

// https://www.codewars.com/kata/572cb264362806af46000793
const threeInOne = arr => {
  let grouped = [];

  for (let i = 0; i < arr.length; i += 3) {
    const three = [arr[i], arr[i + 1], arr[i + 2]];
    grouped.push(three);
  }

  return grouped.map(item => item.reduce((acc, curr) => acc + curr, 0));
};

// https://www.codewars.com/kata/572af273a3af3836660014a1
const infiniteLoop = (arr, d, n) => {
  for (var i = 1; i <= n; i++) {
    if (d === 'left') {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === 'right') {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
};

// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8
const shuffleIt = (arr, ...indx) => {
  for ([a, b] of indx) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};

// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3
const alienLanguage = str =>
  str
    .split(' ')
    .map(item =>
      item
        .split('')
        .map((sub, index) =>
          index !== item.length - 1 ? sub.toUpperCase() : sub.toLowerCase()
        )
        .join('')
    )
    .join(' ');

// https://www.codewars.com/kata/57280481e8118511f7000ffa
const splitAndMerge = (string, separator) =>
  string
    .split(' ')
    .map(item => item.split('').join(`${separator}`))
    .join(' ');

// https://www.codewars.com/kata/57277a31e5e51450a4000010
const firstToLast = (str, c) =>
  str.search(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;

// https://www.codewars.com/kata/57274562c8dcebe77e001012
const cutIt = arr => {
  const shortest = Math.min(...arr.map(item => item.length));

  return arr.map(item => item.slice(0, shortest));
};

// https://www.codewars.com/kata/57256064856584bc47000611
const howManySmaller = (arr, n) => arr.filter(x => +x.toFixed(2) < n).length;

// https://www.codewars.com/kata/57238ceaef9008adc7000603
const colorOf = (r, g, b) => {
  const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000
const giveMeFive = obj => {
  let arr = [];
  for (const key in obj) {
    if (key.length == 5) arr.push(key);
    if (obj[key].length == 5) arr.push(obj[key]);
  }
  return arr;
};

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b
const grabDoll = dolls => {
  let bag = [];

  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Barbie doll' || dolls[i] === 'Hello Kitty')
      bag.push(dolls[i]);
    else continue;
    if (bag.length >= 3) break;
  }

  return bag;
};

// https://www.codewars.com/kata/561bbcb0fbbfb0f5010000ee
const longestPossible = playback => {
  const result = songs
    .filter(
      item =>
        item.playback
          .split(':')
          .reduce((a, b) => Number(a) * 60 + Number(b), 0) < playback
    )
    .sort(
      (a, b) =>
        b.playback.split(':').reduce((a, b) => Number(a) * 60 + Number(b), 0) -
        a.playback.split(':').reduce((a, b) => Number(a) * 60 + Number(b), 0)
    );

  return Boolean(result.length) && result[0].title;
};

// https://www.codewars.com/kata/56b1eb19247c01493a000065
const uniqueSum = list =>
  list.length ? [...new Set(list)].reduce((acc, curr) => acc + curr, 0) : null;

// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
const sumEvenNumbers = arr =>
  arr.filter(item => item % 2 === 0).reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/5556282156230d0e5e000089
const DNAtoRNA = dna => dna.replace(/T/g, 'U');

// https://www.codewars.com/kata/515dfd2f1db09667a0000003
const keysAndValues = data => [Object.keys(data), Object.values(data)];

// https://www.codewars.com/kata/578b44a47c77f5a1bd000011
const getMostFrequent = json =>
  json['temperature'].map(arr =>
    arr
      .sort(
        (a, b) =>
          arr.filter(item => a === item).length -
          arr.filter(item => b === item).length
      )
      .pop()
  );

// https://www.codewars.com/kata/56a1c074f87bc2201200002e
const smaller = nums =>
  nums.map(
    (item, index) => nums.slice(index).filter(subItem => subItem < item).length
  );

// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
const sortNums = nums => (Boolean(nums) ? nums.sort((a, b) => a - b) : []);

// https://www.codewars.com/kata/62a611067274990047f431a8
const alternate = (n, firstValue, secondValue) =>
  Array.from({ length: n }, (_, index) =>
    index % 2 === 0 ? firstValue : secondValue
  );

const alternate1 = (n, firstValue, secondValue) =>
  Array.apply(null, Array(n)).map((_, index) =>
    index % 2 == 0 ? firstValue : secondValue
  );

// https://www.codewars.com/kata/5a512f6a80eba857280000fc
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

// https://www.codewars.com/kata/57eaec5608fed543d6000021
const divCon = array => {
  const result = array.reduce(
    (acc, curr) => {
      Number.isInteger(curr)
        ? (acc[0] = acc[0] + curr)
        : (acc[1] = acc[1] + Number(curr));
      return acc;
    },
    [0, 0]
  );

  return result[0] - result[1];
};

// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
const rowWeights = array =>
  array.reduce(
    (acc, curr, index) => {
      acc[index % 2] += curr;
      return acc;
    },
    [0, 0]
  );

// https://www.codewars.com/kata/5a4138acf28b82aa43000117
const adjacentElementsProduct = array => {
  const result = array
    .map((item, index) =>
      index !== array[array.length - 1] ? item * array[index + 1] : null
    )
    .filter(Boolean);

  return result.length ? Math.max(...result) : 0;
};

// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
const upArray = arr =>
  arr.find(item => item < 0 || item > 9) || arr.length === 0
    ? null
    : (BigInt(arr.join('')) + 1n)
        .toString()
        .padStart(arr.length, '0')
        .split('')
        .map(item => Number(item));

// https://www.codewars.com/kata/54129112fb7c188740000162
function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}

// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
const highestRank = arr => {
  const result = Object.entries(
    arr.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  )
    .map(([number, value]) => ({
      numeral: Number(number),
      count: value,
    }))
    .sort((a, b) => b.count - a.count);

  return result[0].count == result[1].count
    ? Math.max(result[0].numeral, result[1].numeral)
    : result[0].numeral;
};

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
const gimme = triplet => {
  const mid = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(mid);
};

// https://www.codewars.com/kata/56f2d43fe40b70a442000f26
const nthSmallestSorted = (...arrays) => {
  const index = arrays.pop() - 1;
  return Array.prototype.concat(...arrays).sort((a, b) => a - b)[index];
};

// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
const sumOfMinimums = arr =>
  arr.map(item => Math.min(...item)).reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6
const addArrays = (arr1, arr2) =>
  arr1.length || arr2.length
    ? `${+arr1.join`` + +arr2.join``}`.match(/-?\d/g).map(Number)
    : [];

// https://www.codewars.com/kata/59a9919107157a45220000e1
const findAll = (array, n) =>
  array.reduce(
    (acc, curr, index) =>
      (acc = curr === n ? (acc = [...acc, index]) : [...acc]),
    []
  );

const findAll1 = (array, n) =>
  array
    .map((item, index) => (item == n ? index : null))
    .filter(item => item !== null);

// https://www.codewars.com/kata/56582133c932d8239900002e
const mostFrequentItemCount = collection =>
  collection.length
    ? Math.max(
        ...Object.values(
          collection.reduce((acc, curr) => {
            acc[curr] ? acc[curr]++ : (acc[curr] = 1);
            return acc;
          }, {})
        )
      )
    : 0;

// https://www.codewars.com/kata/55c098aa8468f3b9030000f1
const move_zeros = (arrNum, isRight) =>
  isRight || isRight === undefined
    ? [
        ...arrNum.filter(item => item !== 0),
        ...arrNum.filter(item => item === 0),
      ]
    : [
        ...arrNum.filter(item => item === 0),
        ...arrNum.filter(item => item !== 0),
      ];

// https://www.codewars.com/kata/53d32bea2f2a21f666000256
const largest = (n, array) =>
  n > 0 ? array.sort((a, b) => a - b).slice(-n) : [];

//https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = arr => [
  ...arr.filter(item => item !== 0),
  ...arr.filter(item => item === 0),
];

// https://www.codewars.com/kata/5a092d9e46d843b9db000064
const arrElParity = arr => arr.find(item => !arr.includes(item * -1));

// https://www.codewars.com/kata/580a4734d6df748060000045
const isSortedAndHow = arr => {
  if (JSON.stringify([...arr].sort((a, b) => a - b)) === JSON.stringify(arr))
    return 'yes, ascending';
  if (JSON.stringify([...arr].sort((a, b) => b - a)) === JSON.stringify(arr))
    return 'yes, descending';
  else return 'no';
};

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
const sumOfDifferences = arr =>
  arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

const sumOfDifferences1 = vals => {
  let result = [];
  const sorted = vals
    .sort((a, b) => b - a)
    .map((item, index) =>
      index !== vals.length - 1 ? result.push(item - vals[index + 1]) : null
    );

  return sorted.length > 1 ? result.reduce((acc, curr) => acc + curr, 0) : 0;
};

// https://www.codewars.com/kata/5a3dd29055519e23ec000074
const checkExam = (array1, array2) => {
  const result = array2.reduce((acc, curr, index) => {
    if (curr === '') return (acc = acc + 0);
    if (curr === array1[index]) return (acc = acc + 4);
    else return (acc = acc - 1);
  }, 0);

  return result > 0 ? result : 0;
};

// https://www.codewars.com/kata/5813d19765d81c592200001a
const dontGiveMeFive = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index).filter(
    item => !item.toString().includes('5')
  ).length;

// https://www.codewars.com/kata/54e6533c92449cc251001667
const uniqueInOrder = vals =>
  [...vals].filter((item, index) => (item === vals[index - 1] ? null : item));

// https://www.codewars.com/kata/58d76854024c72c3e20000de
const reverse = str =>
  str
    .trim()
    .split(' ')
    .map((item, index) =>
      index % 2 ? item.split('').reverse().join('') : item
    )
    .join(' ');

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

// https://www.codewars.com/kata/55c45be3b2079eccff00010f
const order = words => {
  let orderedWords = [];

  const numValue = words.length
    ? words
        .split(' ')
        .map(item => ({
          word: item,
          intValue: Number(item.match(/\d+/g)[0]) - 1,
        }))
        .sort((a, b) => a.intValue - b.intValue)
        .map(item => orderedWords.splice(item.intValue, 0, item.word))
    : null;

  return Boolean(numValue) ? orderedWords.join(' ') : '';
};

// https://www.codewars.com/kata/5412509bd436bd33920011bc
const maskify = val => val.slice(-4).padStart(val.length, '#');

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
const firstNonConsecutive = arr => (
  (gap = arr.find(
    (item, index, array) =>
      index &&
      Math.max(item, array[index - 1]) - Math.min(item, array[index - 1]) > 1
  )),
  gap === undefined ? null : gap
);

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
const squareOrSquareRoot = arr =>
  arr.map(item =>
    Math.ceil(Math.sqrt(item)) === Math.floor(Math.sqrt(item))
      ? Math.sqrt(item)
      : item ** 2
  );

// https://www.codewars.com/kata/57cff961eca260b71900008f
const isVow = vow =>
  vow.map(item =>
    ['a', 'e', 'i', 'o', 'u'].includes(String.fromCharCode(item))
      ? String.fromCharCode(item)
      : item
  );

// https://www.codewars.com/kata/582c81d982a0a65424000201
const arrCheck = value => value.every(item => Array.isArray(item));

// https://www.codewars.com/kata/546f922b54af40e1e90001da
const alphabetPosition = text =>
  text
    .split('')
    .filter(item => item.toLowerCase() != item.toUpperCase())
    .map(item => item.toLowerCase().charCodeAt() - 96)
    .join(' ');

// https://www.codewars.com/kata/5390bac347d09b7da40006f6
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(' ');
};

// https://www.codewars.com/kata/55908aad6620c066bc00002a
const XO = str => {
  const tallyXO = str
    .split('')
    .filter(item => item.toLowerCase() === 'x' || item.toLowerCase() === 'o')
    .reduce((acc, curr) => {
      acc[curr.toLowerCase()]
        ? acc[curr.toLowerCase()]++
        : (acc[curr.toLowerCase()] = 1);
      return acc;
    }, {});

  return tallyXO.x == tallyXO.o;
};

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = str =>
  str
    .split('')
    .map((item, index, arr) => {
      return (
        item !== ' ' &&
        `${arr.slice(0, index)}${item.toUpperCase()}${arr.slice(
          index + 1,
          arr.length
        )}`.replace(/,/g, '')
      );
    })
    .filter(Boolean);

// https://www.codewars.com/kata/5662b14e0a1fb8320a00005c
const naughtyOrNice = vals => {
  const result = Object.values(vals)
    .map(item => Object.values(item))
    .flat()
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});

  return (
    Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b)) + '!'
  );
};

// https://www.codewars.com/kata/559e5b717dd758a3eb00005a
const dropCap = vals =>
  vals
    .split(' ')
    .map(item =>
      item.length > 2
        ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
        : item
    )
    .join(' ');

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
const duplicateCount = word =>
  [
    ...new Set(
      word
        .toLowerCase()
        .split('')
        .filter(
          (item, index) =>
            word.toLowerCase().indexOf(item.toLowerCase()) !== index
        )
    ),
  ].length;

// https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304
const getAttendees = (people, responses) =>
  people.filter(
    item =>
      !responses
        .filter(item => item.response === 'declined')
        .map(item => item.name)
        .includes(item)
  );

// https://www.codewars.com/kata/55de6173a8fbe814ee000061
const unusedDigits = (...nums) =>
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    .filter(item => ![...new Set(nums.join(''))].sort().includes(item))
    .join('');

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
const duplicateEncode = word => {
  const duplicates = [
    ...new Set(
      word
        .toLowerCase()
        .split('')
        .filter(
          (item, index) =>
            word.toLowerCase().indexOf(item.toLowerCase()) !== index
        )
    ),
  ];

  return word
    .split('')
    .map(item => (duplicates.includes(item.toLowerCase()) ? ')' : '('))
    .join('');
};

// https://www.codewars.com/kata/5899642f6e1b25935d000161
const mergeSortedArrays = (arr1, arr2) => [
  ...new Set([...arr1, ...arr2].sort((a, b) => a - b)),
];

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
const high = x => {
  const alphaValue = letter => letter.charCodeAt() - 96;

  const wordValue = word =>
    word.split('').reduce((acc, curr) => acc + alphaValue(curr), 0);

  const allValues = x
    .split(' ')
    .map(item => ({ word: item, charValue: wordValue(item) }));

  const result = allValues.reduce((acc, curr) => {
    return (acc = acc['charValue'] >= curr['charValue'] ? acc : curr);
  }, {});

  return result.word;
};

const high1 = x =>
  x
    .split(' ')
    .map(item => ({
      word: item,
      charValue: item
        .split('')
        .reduce((acc, curr) => acc + curr.charCodeAt() - 96, 0),
    }))
    .reduce((acc, curr) => {
      return (acc = acc['charValue'] >= curr['charValue'] ? acc : curr);
    }, {}).word;

// https://www.codewars.com/kata/5bb904724c47249b10000131
const points = games =>
  games.reduce((acc, curr) => {
    if (curr.charAt(0) > curr.charAt(2)) return acc + 3;
    if (curr.charAt(0) < curr.charAt(2)) return acc;
    else return acc + 1;
  }, 0);

// https://www.codewars.com/kata/52fb87703c1351ebd200081f
const whatCentury = year => {
  const num = Math.ceil(Math.abs(year) / 100).toString();
  const suffix = Math.ceil(Math.abs(year) / 100)
    .toString()
    .match(/(11|12|13)$/)
    ? 'th'
    : num.endsWith('1')
    ? 'st'
    : num.endsWith('2')
    ? 'nd'
    : num.endsWith('3')
    ? 'rd'
    : 'th';
  return num + suffix + (year < 0 ? ' BC' : '');
};

// https://www.codewars.com/kata/5558cc216a7a231ac9000022
const duplicates = vals => [
  ...new Set(vals.filter((item, index) => vals.indexOf(item) !== index)),
];

// https://www.codewars.com/kata/5808e2006b65bff35500008f
const position = val =>
  `Position of alphabet: ${
    'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(val.toLowerCase()) + 1
  }`;

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
const findOutlier = vals =>
  Number(
    vals
      .reduce(
        (acc, curr) => {
          curr % 2 == 0
            ? (acc[0] = [...acc[0], curr])
            : (acc[1] = [...acc[1], curr]);

          return acc;
        },
        [[], []]
      )
      .filter(item => item.length == 1)[0]
  );

// https://www.codewars.com/kata/5264d2b162488dc400000001
const spinWords = string =>
  string
    .split(' ')
    .map(item => (item.length >= 5 ? [...item].reverse().join('') : item))
    .toString()
    .replaceAll(',', ' ');

// https://www.codewars.com/kata/54ba84be607a92aa900000f1
const isIsogram = str => !str.match(/([a-z]).*\1/i);

// https://www.codewars.com/kata/526571aae218b8ee490006f4
const countBits = num =>
  [...num.toString(2)].filter(item => item === '1').length;

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
const isSquare = n => Math.sqrt(n) % 1 === 0;

// https://www.codewars.com/kata/583d972b8bbc0402cf000121
const askForMissingDetails = list =>
  list
    .filter(item => Object.keys(item).some(key => item[key] === null))
    .map(item => ({
      ...item,
      question: `Hi, could you please provide your ${Object.keys(item).find(
        key => item[key] === null
      )}.`,
    }));

// https://www.codewars.com/kata/583a8bde28019d615a000035
const findOddNames = list =>
  list.filter(
    item =>
      [...item.firstName]
        .map(subItem => subItem.charCodeAt(0))
        .reduce((acc, curr) => acc + curr) % 2
  );

// https://www.codewars.com/kata/583952fbc23341c7180002fd
const orderFood = list =>
  list.reduce((acc, curr) => {
    acc[curr['meal']] ? acc[curr['meal']]++ : (acc[curr['meal']] = 1);
    return acc;
  }, {});

// https://www.codewars.com/kata/58381907f8ac48ae070000de
const isLanguageDiverse = list => {
  const languageCount = Object.values(
    list.reduce((acc, curr) => {
      acc[curr['language']]
        ? acc[curr['language']]++
        : (acc[curr['language']] = 1);
      return acc;
    }, {})
  );
  const minMax = {
    min: Math.min(...languageCount),
    max: Math.max(...languageCount),
  };

  return minMax.min * 2 >= minMax.max;
};

// https://www.codewars.com/kata/582ba36cc1901399a70005fc
const getAverageAge = list =>
  Math.round(list.reduce((acc, curr) => (acc += curr.age), 0) / list.length);

// https://www.codewars.com/kata/582a53ed261c2af9d200018c
const addUsername = list =>
  list.map(item => ({
    ...item,
    username: `${item.firstName.toLowerCase()}${item.lastName
      .replace('.', '')
      .toLowerCase()}${new Date().getFullYear() - item.age}`,
  }));

// https://www.codewars.com/kata/5829ca646d02cd1a65000284
const isAgeDiverse = list =>
  [...Array(10)].every((_, i) =>
    list.find(({ age }) =>
      i == 9 ? age >= 100 : Math.floor(age / 10) === i + 1
    )
  );

// https://www.codewars.com/kata/58291fea7ff3f640980000f9
const allContinents = list =>
  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(item =>
    list.map(item => item.continent).includes(item)
  );

// https://www.codewars.com/kata/582887f7d04efdaae3000090
const findSenior = list =>
  list.filter(
    item => item.age === Math.max(...list.map(subItem => subItem.age))
  );

// https://www.codewars.com/kata/58287977ef8d4451f90001a0
const isSameLanguage = list =>
  list.every(({ language }) => language === list[0].language);

// https://www.codewars.com/kata/5828713ed04efde70e000346
const countLanguages = list =>
  list.reduce((acc, curr) => {
    acc[curr.language] ? acc[curr.language]++ : (acc[curr.language] = 1);
    return acc;
  }, {});

// https://www.codewars.com/kata/583df40bf30065fa9900010c
const getMean = (arr, x, y) =>
  x > 1 && x <= arr.length && y > 1 && y <= arr.length
    ? (arr.slice(0, x).reduce((acc, curr) => acc + curr) / x +
        arr.slice(-y).reduce((acc, curr) => acc + curr) / y) /
      2
    : -1;

// https://www.codewars.com/kata/559e10e2e162b69f750000b4
const dominator = vals => {
  const result = Object.entries(
    vals.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  ).reduce((prev, current) => {
    return prev[1] > current[1] ? prev : current;
  });

  return result[1] > vals.length / 2 ? Number(result[0]) : -1;
};

const dominator1 = vals => {
  const red = vals.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  const result = Object.entries(red)
    .filter(item => item[1] == Math.max(...Object.values(red)))
    .flat();

  return result[1] > vals.length / 2 ? Number(result[0]) : -1;
};

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
const removeSmallest = vals =>
  !vals.length
    ? []
    : vals.filter((_, i) => i !== vals.indexOf(Math.min(...vals)));

// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
const maxDiff = list =>
  list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
const findMultiples = (integer, limit) =>
  Array.from({ length: limit / integer }, (_, i) => integer * (i + 1));

// https://www.codewars.com/kata/5513795bd3fafb56c200049e
const countBy = (x, n) => [...Array(n)].map((_, i) => x * ++i);

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniqNum = vals =>
  Number(
    Object.entries(
      vals.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
      }, {})
    ).find(item => item[1] == 1)[0]
  );

// https://www.codewars.com/kata/523f5d21c841566fde000009
const arrayDiff = (a, b) =>
  a.reduce((acc, curr) => {
    !b.includes(curr) ? (acc = [...acc, curr]) : acc;
    return acc;
  }, []);

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
const countPositivesSumNegatives = vals =>
  vals && vals.length
    ? vals.reduce(
        (acc, curr) => {
          curr > 0 ? (acc[0] = acc[0] + 1) : (acc[1] = acc[1] + curr);
          return acc;
        },
        [0, 0]
      )
    : [];

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
const descendingOrder = val =>
  parseInt(String(val).split('').sort().reverse().join(''));

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
const getCount = ([...vals]) =>
  vals.reduce((acc, curr) => {
    ['a', 'e', 'i', 'o', 'u'].includes(curr) ? acc++ : acc;
    return acc;
  }, 0);

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
const noSpace = val => val.replace(/\s+/g, '').trim();

// https://www.codewars.com/kata/558fc85d8fd1938afb000014
const sumTwoSmallestNumbers = vals =>
  vals
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
const digitize = vals => Array.from(String(vals), Number).reverse();

// https://www.codewars.com/kata/52efefcbcdf57161d4000091
const count = vals =>
  [...vals].reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
const distinct = val => [...new Set(val)];

// https://www.codewars.com/kata/55685cd7ad70877c23000102
const makeNegative = num => (num > 0 ? -Math.abs(num) : num);

// https://www.codewars.com/kata/525f50e3b73515a6db000b83
const createPhoneNumber = arr =>
  `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr
    .slice(6)
    .join('')}`;

// https://www.codewars.com/kata/6481c68ffdf80b6147d85248
const joinArraysById = (arr1, arr2) =>
  [...arr1, ...arr2]
    .reduce((acc, curr) => {
      const id = curr.id;
      !acc[id] ? (acc[id] = { ...curr }) : (acc[id] = { ...acc[id], ...curr });

      return acc;
    }, [])
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);

const joinArraysById1 = (arr1, arr2) =>
  Object.values(
    [...arr1, ...arr2].reduce((acc, curr) => {
      const id = curr.id;
      !acc[id] ? (acc[id] = { ...curr }) : (acc[id] = { ...acc[id], ...curr });

      return acc;
    }, {})
  ).sort((a, b) => a.id - b.id);

const joinArraysById2 = (arr1, arr2) => {
  const joinedArray = Object.values(
    [...arr1, ...arr2].reduce((acc, curr) => {
      const id = curr.id;
      !acc[id] ? (acc[id] = { ...curr }) : (acc[id] = { ...acc[id], ...curr });

      return acc;
    }, {})
  ).sort((a, b) => a.id - b.id);

  return joinedArray;
};

// https://www.codewars.com/kata/553e8b195b853c6db4000048
const hasUniqueChars = str => str.length === new Set(str).size;

// https://www.codewars.com/kata/58235a167a8cb37e1a0000db
const numberOfPairs = gloves =>
  Object.values(
    gloves.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  )
    .filter(item => item > 1)
    .map(item2 => Math.floor(item2 / 2))
    .reduce((acc, curr) => acc + curr, 0);

// https://www.codewars.com/kata/55eeddff3f64c954c2000059
const sumConsecutives = s =>
  s.reduce((acc, curr, i, arr) => {
    if (curr !== arr[i - 1]) acc.push(curr);
    else acc[acc.length - 1] += curr;
    return acc;
  }, []);

const sumConsecutives1 = arr => {
  let result = [];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp += arr[i];
    } else if (arr[i] !== arr[i + 1]) {
      result.push(temp + arr[i]);
      temp = 0;
    }
  }
  return result;
};

// https://www.codewars.com/kata/59f08f89a5e129c543000069
const dup = s => s.map(x => x.replace(/(.)\1+/g, '$1'));

const dup1 = s =>
  s.map(item =>
    item
      .split('')
      .map((sub, index) => (sub === item[index - 1] ? null : sub))
      .filter(Boolean)
      .join('')
  );

//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
const freqSort = arr =>
  [].concat(
    ...Object.entries(
      arr.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
      }, {})
    )
      .sort(([aKey, aVal], [bKey, bVal]) =>
        bVal === aVal ? Number(aKey) - Number(bKey) : bVal - aVal
      )
      .map(item => Array(item[1]).fill(Number(item[0])))
  );

// https://www.codewars.com/kata/5729c30961cecadc4f001878
const uniteUnique = (...arr) => [...new Set(arr.flat())];

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
const firstNonRepeatingLetter = s => {
  const uniqChar = s
    .toLowerCase()
    .split('')
    .find(
      item =>
        s.toLowerCase().split('').indexOf(item) ===
        s.toLowerCase().split('').lastIndexOf(item)
    );

  return uniqChar ? s[s.toLowerCase().split('').indexOf(uniqChar)] : '';
};
