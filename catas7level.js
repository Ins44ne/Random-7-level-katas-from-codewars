/* №1
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
 */

function rpsls(pl1, pl2) {
  if (pl1 === pl2) {
    return "Draw!";
  }
  const pl1Win = [
    ["rock", "lizard"],
    ["rock", "scissors"],
    ["lizard", "paper"],
    ["lizard", "spock"],
    ["spock", "rock"],
    ["spock", "scissors"],
    ["scissors", "lizard"],
    ["scissors", "paper"],
    ["paper", "rock"],
    ["paper", "spock"],
  ];
  return pl1Win.some((pair) => pair[0] === pl1 && pair[1] === pl2)
    ? "Player 1 Won!"
    : "Player 2 Won!";
}

console.log(rpsls("rock", "lizard"), "Player 1 Won!");
console.log(rpsls("paper", "rock"), "Player 1 Won!");
console.log(rpsls("scissors", "lizard"), "Player 1 Won!");
console.log(rpsls("lizard", "paper"), "Player 1 Won!");
console.log(rpsls("spock", "rock"), "Player 1 Won!");
console.log(rpsls("lizard", "scissors"), "Player 2 Won!");
console.log(rpsls("spock", "lizard"), "Player 2 Won!");
console.log(rpsls("paper", "lizard"), "Player 2 Won!");
console.log(rpsls("scissors", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "rock"), "Draw!");
console.log(rpsls("spock", "spock"), "Draw!");

/* №2
ASC Week 1 Challenge 4 (Medium #1)
Write a function that converts any sentence into a V A P O R W A V E sentence.
a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
Note that spaces should be ignored in this case.
Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
 */

function vaporcode(string) {
  return string.replace(/\s+/g, "").toUpperCase().split("").join("  ");
}

console.log(
  vaporcode("Lets go to the movies"),
  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
console.log(
  vaporcode("Why isnt my code working"),
  "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
);
/* №3
Scenario
You're saying good-bye your best friend , See you next happy year .
Happy Year is the year with only distinct digits , (e.g) 2018
Task
Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt
Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .
nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .
nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
 */

function hasUniqueDigits(num) {
  const digits = num.toString().split("");

  const uniqueDigits = new Set(digits);
  return uniqueDigits.size === digits.length;
}
function nextHappyYear(year) {
  let nextYear = year + 1;
  while (!hasUniqueDigits(nextYear)) {
    nextYear++;
  }
  return nextYear;
}

console.log(nextHappyYear(1001), 1023);
console.log(nextHappyYear(1123), 1203);
console.log(nextHappyYear(2001), 2013);
console.log(nextHappyYear(2334), 2340);
console.log(nextHappyYear(3331), 3401);
console.log(nextHappyYear(1987), 2013);
console.log(nextHappyYear(5555), 5601);
console.log(nextHappyYear(7712), 7801);
console.log(nextHappyYear(8088), 8091);
console.log(nextHappyYear(8999), 9012);

/* №4
You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
The possible return strings are: "addition", "subtraction", "multiplication", "division".
Example:
calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
 */

function calcType(a, b, res) {
  return res - b === a
    ? "addition"
    : res + b === a
    ? "subtraction"
    : res / b === a
    ? "multiplication"
    : "division";
}

console.log(calcType(1, 2, 3), "addition");
console.log(calcType(10, 4, 40), "multiplication");
console.log(calcType(10, 5, 5), "subtraction");
console.log(calcType(9, 5, 1.8), "division");

/* №5
Program a function sumAverage(arr) where arr is an array containing arrays full of numbers.
First, determine the average of each array. Then, return the sum of all the averages.
All numbers will be less than 100 and greater than -100.
arr will contain a maximum of 50 arrays.
After calculating all the averages, add them all together, then round down, as shown in the example below:
The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.
Calculate the average of each individual array:
[3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
[21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
Add the average of each array together:
3 + 41.2 = 44.2
Round the final average down:
floor(44.2) = 44
 */

const sumAverage = (arr) => {
  const result = arr
    .map((x) => x.reduce((a, b) => a + b) / x.length)
    .reduce((a, b) => a + b);
  return Math.floor(result);
};

console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ]),
  44
);
console.log(
  sumAverage([
    [-4, 3, -8, -2],
    [2, 9, 1, -5],
    [-7, -2, -6, -4],
  ]),
  -6
);

/* №6
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
  let res = 0;
  const letters = ["a", "e", "u", "i", "o"];
  str.split("").forEach((el) => {
    if (letters.includes(el)) {
      res += 1;
    }
  });
  return res;
}

console.log(getCount("abracadabra"), 5);

/* №7
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
 */

function wordsToMarks(string) {
  const letterValues = {
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
  };
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letterValues[letter]) {
      sum += letterValues[letter];
    }
  }
  return sum;
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);

/* №8
Problem Description:
A snail is crawling along a rubber band that has an initial length of x units. The snail moves at a constant speed of y units per minute.
As the snail crawls from the left end of the rubber band to the right end, the rubber band increases in length from the right side every minute, adding z units to its length.
The question is: Will the snail be able to reach the right end of the rubber band within 1 year?
Parameters:
x: Initial length of the rubber band (in units), where 0.01 ≤ x ≤ 1,000,000.
y: Speed of the snail (in units per minute), where 0.01 ≤ y ≤ 1,000,000.
z: Amount by which the rubber band increases in length every minute (in units), where 0.01 ≤ z ≤ 1,000,000.
Examples:
  Example 1:
Initial length of the rubber band: x = 10 units
Speed of the snail: y = 2 units/minute
Increase rate of the rubber band: z = 1 unit/minute
Outcome: True (The snail will reach the end in 10 minutes.)
  Example 2:
Initial length of the rubber band: x = 100 units
Speed of the snail: y = 1 unit/minute
Increase rate of the rubber band: z = 2 units/minute
Outcome: False (The snail will never reach the end.)
  Example 3:
Initial length of the rubber band: x = 100,000 units
Speed of the snail: y = 0.1 units/minute
Increase rate of the rubber band: z = 0.05 units/minute
Outcome: False (The snail will not be able to reach the end within one year.)
 */

function canSnailReachEnd(length, speed, lengthIncr) {
  return lengthIncr >= speed
    ? false
    : length / (speed - lengthIncr) < 525600
    ? true
    : false;
}

console.log(canSnailReachEnd(10, 2, 1), true);
console.log(canSnailReachEnd(100, 10, 5), true);
console.log(canSnailReachEnd(50, 5, 1), true);
console.log(canSnailReachEnd(1000, 100, 10), true);
console.log(canSnailReachEnd(1, 0.1, 0.01), true);
console.log(canSnailReachEnd(100, 1, 2), false);
console.log(canSnailReachEnd(100000, 0.1, 0.05), false);
console.log(canSnailReachEnd(100, 0.5, 1), false);
console.log(canSnailReachEnd(1000, 1, 2), false);
console.log(canSnailReachEnd(500, 5, 10), false);
console.log(canSnailReachEnd(10000, 0.1, 1), false);

/* №9
 */

/* №10
 */

/* №11
 */

/* №12
 */

/* №13
 */

/* №14
 */

/* №15
 */

/* №16
 */

/* №17
 */

/* №18
 */

/* №19
 */

/* №20
 */

/* №21
 */

/* №22
 */

/* №23
 */

/* №24
 */

/* №25
 */

/* №26
 */

/* №27
 */

/* №28
 */

/* №29
 */

/* №30
 */

/* №31
 */

/* №32
 */

/* №33
 */

/* №34
 */

/* №35
 */

/* №36
 */

/* №37
 */

/* №38
 */

/* №39
 */

/* №40
 */

/* №41
 */

/* №42
 */

/* №43
 */

/* №44
 */

/* №45
 */

/* №46
 */

/* №47
 */

/* №48
 */

/* №49
 */

/* №50
 */

/* №51
 */

/* №52
 */

/* №53
 */

/* №54
 */

/* №55
 */

/* №56
 */

/* №57
 */

/* №58
 */

/* №59
 */

/* №60
 */

/* №61
 */

/* №62
 */

/* №63
 */

/* №64
 */

/* №65
 */
