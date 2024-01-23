
function mergeIntersection(input) {
  if (!input || input.length < 2 || !Array.isArray(input)) {
    return input || [];
  }


  const sortedInput = [...input].sort((a, b) => a.startPx - b.startPx);

  const result = [];

  let start = sortedInput[0].startPx;
  let end = sortedInput[0].endPx;

  for (let i = 1; i < sortedInput.length; i++) {
    if (end >= sortedInput[i].startPx) {
      end = Math.max(sortedInput[i].endPx, end);
    } else {
      result.push({ startPx: start, endPx: end });
      start = sortedInput[i].startPx;
      end = sortedInput[i].endPx
    }
  }

  result.push({ startPx: start, endPx: end })
  return result;
}

// tests
console.log(mergeIntersection([]));
console.log(mergeIntersection());
console.log(mergeIntersection("abc"));

const input = [
  { startPx: 0, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 },
]
console.log(mergeIntersection(input));

const input2 = [{ startPx: 1, endPx: 5 }, { startPx: 6, endPx: 8 }, { startPx: 9, endPx: 12 }];
console.log(mergeIntersection(input2));

const input3 = [{ startPx: 1, endPx: 5 }, { startPx: 4, endPx: 8 }, { startPx: 9, endPx: 12 }];
console.log(mergeIntersection(input3));

const input4 = [{ startPx: 1, endPx: 5 }, { startPx: 4, endPx: 7 }, { startPx: 6, endPx: 12 }];
console.log(mergeIntersection(input4));

const input5 = [{ startPx: 1, endPx: 5 }, { startPx: 5, endPx: 8 }, { startPx: 8, endPx: 12 }];
console.log(mergeIntersection(input5));
