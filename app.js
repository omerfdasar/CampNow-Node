let inputbox = document.getElementById("input");
const button = document.getElementById("button");
let display = document.getElementById("result");
let remaining = document.getElementById("remaining");
let howMany = document.getElementById("chances");
let theNumber = Math.trunc(Math.random() * 99 + 1);
let times = 7;
let order = 1;

function sorting(x) {
  return x.sort(function (a, b) {
    return a - b;
  });
}
let smallNums = [0];
let bigNums = [100];
button.addEventListener("click", () => {
  let inputValue = inputbox.value;

  if (inputValue > theNumber) {
    times--;
    bigNums.push(+inputValue);
    sorting(bigNums);
    display.innerText += `${order}) You Entered ${inputValue} => Enter a number between ${+smallNums[
      smallNums.length - 1
    ]} and ${+bigNums[0]}`;
    console.log(smallNums, bigNums);
    console.log(smallNums[smallNums.length - 1], bigNums[0]);
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  } else if (inputValue < theNumber) {
    times--;
    smallNums.push(+inputValue);
    sorting(smallNums);
    display.innerText += `${order}) You Entered ${inputValue} => Enter a number between ${+smallNums[
      smallNums.length - 1
    ]} and ${+bigNums[0]}`;

    console.log(smallNums, bigNums);
    console.log(smallNums[smallNums.length - 1], bigNums[0]);
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  } else if ((inputValue = theNumber)) {
    display.innerText += `${order}) You Entered ${inputValue} => You Guessed right`;
    let brTags = document.createElement("br");
    display.appendChild(brTags);
    howMany.innerText = times;
  }
  inputbox.value = "";
  order++;
});

// return the value when fail
