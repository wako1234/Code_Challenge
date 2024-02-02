function rotateArrayRight(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const rotatedArray = [];
  const lastElement = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    rotatedArray[i + 1] = arr[i];
  }
  rotatedArray[0] = lastElement;

  return rotatedArray;
}

const inputArray = [3, 8, 9, 7, 6];
console.log("\nEXISTING ARRAY:", inputArray, "\n");
const rotatedArray = rotateArrayRight(inputArray);
console.log("ROTATED ARRAY:", rotatedArray, "\n"); // Output: [6, 3, 8, 9, 7]
