const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100000).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(large);  // O(n) --> Linear Time

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxes(boxes) // 0(2)