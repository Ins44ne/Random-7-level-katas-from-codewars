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
Every now and then people in the office moves teams or departments.
Depending what people are doing with their time they can become more or less boring.
Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
 */

function boredom(staff) {
  let summObj = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  let summ = 0;
  let arr = Object.values(staff);
  arr.forEach((el) => {
    summ += summObj[el];
  });
  return summ <= 80
    ? "kill me now"
    : summ < 100
    ? "i can handle this"
    : "party time!!";
}

console.log(
  boredom({
    tim: "change",
    jim: "accounts",
    randy: "canteen",
    sandy: "change",
    andy: "change",
    katie: "IS",
    laura: "change",
    saajid: "IS",
    alex: "trading",
    john: "accounts",
    mr: "finance",
  }),
  "kill me now"
);
console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  }),
  "i can handle this"
);
console.log(
  boredom({
    tim: "accounts",
    jim: "accounts",
    randy: "pissing about",
    sandy: "finance",
    andy: "change",
    katie: "IS",
    laura: "IS",
    saajid: "canteen",
    alex: "pissing about",
    john: "retail",
    mr: "pissing about",
  }),
  "party time!!"
);

/* №10
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 
If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
For example:
bags = 2
cap = 2
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]
returns 'Clean'
 */

function crap(x, bags, cap) {
  let findDog = false;
  let capacity = bags * cap;
  x.flat(Infinity).forEach((el) => {
    if (el === "D") {
      findDog = true;
    }
    if (el === "@") {
      capacity -= 1;
    }
  });
  return findDog === true ? "Dog!!" : capacity < 0 ? "Cr@p" : "Clean";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2
  ),
  "Clean"
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  ),
  "Cr@p"
);
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  ),
  "Dog!!"
);

/* №11
Task
Write a function that checks if two non-negative integers make an "interlocking binary pair".
Interlock ?
numbers can be interlocked if their binary representations have no 1's in the same place
comparisons are made by bit position, starting from right to left (see the examples below)
when representations are of different lengths, the unmatched left-most bits are ignored
Examples
a = 9, b = 4
Stacking representations shows how they can interlock.
 9    1001
 4     100
Here, no 1's share any position, so the function returns true.
a = 3, b = 6
These representations do not interlock.
 3      11
 6     110
Finding they both have a 1 in the same position, the function returns false.
Input
Two non-negative integers.
Output
Boolean true or false whether or not these integers are interlockable.
 */

function interlockable(a, b) {
  return (a & b) === 0n;
}

console.log(interlockable(9n, 4n, true));
console.log(interlockable(3n, 6n, false));
console.log(interlockable(2n, 5n, true));
console.log(interlockable(7n, 1n, false));
console.log(interlockable(0n, 8n, true));

/* №12
Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. 
You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group.
If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Happiness rating will be total score / number of people in the room.
Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).
 */

function outed(meet, boss) {
  let res = 0;
  let count = 0;
  for (let key in meet) {
    count += 1;
    res += key === boss ? meet[key] * 2 : meet[key];
  }
  return res / count > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  ),
  "Get Out Now!"
);
console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    "katie"
  ),
  "Nice Work Champ!"
);
console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    "john"
  ),
  "Get Out Now!"
);

/* №13
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), 
from smallest to largest. If the number is prime return the string '(integer) is prime' 
(null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"
 */

function divisors(int) {
  let arr = [];
  for (let i = 2; i < int; i += 1) {
    if (int % i === 0) {
      arr.push(i);
    }
  }
  return arr.length > 0 ? arr : `${int} is prime`;
}

console.log((divisors(15), [3, 5]));
console.log((divisors(12), [2, 3, 4, 6]));
console.log((divisors(13), "13 is prime"));

/* №14
Kata Task
I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
NOTES:
Results are truncated whole numbers of "human" years
  Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
  Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

var ownedCatAndDog = function (catYears, dogYears) {
  return [
    24 <= catYears
      ? Math.floor((catYears - 24) / 4 + 2)
      : 15 <= catYears
      ? 1
      : 0,
    24 <= dogYears
      ? Math.floor((dogYears - 24) / 5 + 2)
      : 15 <= dogYears
      ? 1
      : 0,
  ];
};

console.log(ownedCatAndDog(15, 15), [1, 1]);
console.log(ownedCatAndDog(24, 24), [2, 2]);
console.log(ownedCatAndDog(56, 64), [10, 10]);

/* №15
You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000
We need a way to tell which is red, and which is blue!
That's where you create hex color !!!
It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!
But, if multiple colors are of equal concentration, you should return their mix!
red + blue = magenta
green + red = yellow
blue + green = cyan
red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!
Examples:
codes = "087 255 054" -> "green"
codes = "181 181 170" -> "yellow"
codes = "000 000 000" -> "black"
codes = "001 001 001" -> "white"
 */

function hexColor(codes) {
  if (!codes || codes === "000 000 000") return "black";

  let [red, green, blue] = codes.split(" ").map(Number);

  if (red === green && green === blue) return red === 0 ? "black" : "white";
  if (red === green && red > blue) return "yellow";
  if (red === blue && red > green) return "magenta";
  if (green === blue && green > red) return "cyan";

  if (red > green && red > blue) return "red";
  if (green > red && green > blue) return "green";
  if (blue > red && blue > green) return "blue";
}

console.log(hexColor(""), "black");
console.log(hexColor("000 000 000"), "black");
console.log(hexColor("121 245 255"), "blue");
console.log(hexColor("027 100 100"), "cyan");
console.log(hexColor("021 021 021"), "white");
console.log(hexColor("255 000 000"), "red");
console.log(hexColor("000 147 000"), "green");
console.log(hexColor("212 103 212"), "magenta");
console.log(hexColor("101 101 092"), "yellow");

/* №16
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(s) {
  return s
    .split("")
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}

console.log(
  accum("ZpglnRxqenU"),
  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
console.log(
  accum("NyffsGeyylB"),
  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
);
console.log(
  accum("MjtkuBovqrU"),
  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);
console.log(
  accum("EvidjUnokmM"),
  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
);
console.log(
  accum("HbideVbxncC"),
  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
);

/* №17
Given a string and an array of integers representing indices, capitalize all letters at the given indices.
For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
 */

function capitalize(s, arr) {
  return s
    .split("")
    .map((e, i) => (arr.includes(i) ? e.toUpperCase() : e))
    .join("");
}

console.log(capitalize("abcdef", [1, 2, 5]), "aBCdeF");
console.log(capitalize("abcdef", [1, 2, 5, 100]), "aBCdeF");
console.log(capitalize("codewars", [1, 3, 5, 50]), "cOdEwArs");
console.log(capitalize("abracadabra", [2, 6, 9, 10]), "abRacaDabRA");
console.log(capitalize("codewarriors", [5]), "codewArriors");
console.log(capitalize("indexinglessons", [0]), "Indexinglessons");

/* №18
Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.
Examples:
oddOne([2,4,6,7,10]) // => 3
oddOne([2,16,98,10,13,78]) // => 4
oddOne([4,-8,98,-12,-7,90,100]) // => 4
oddOne([2,4,6,8]) // => -1
 */

function oddOne(arr) {
  return arr.findIndex((el) => el % 2 !== 0);
}

console.log(oddOne([2, 4, 6, 7, 10]), 3);
console.log(oddOne([2, 16, 98, 10, 13, 78]), 4);
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]), 4);
console.log(oddOne([2, 4, 6, 8]), -1);

/* №19
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
Ex.
multiples(3, 5.0)
should return
[5.0, 10.0, 15.0]
 */

function multiples(m, n) {
  let res = [];
  for (let i = 1; i <= m; i += 1) {
    res.push(n * i);
  }
  return res;
}

console.log(multiples(3, 5), [5, 10, 15]);

/* №20
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
Given a series of digits as a string, determine if the number represented by the string is divisible by three.
Example:
"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
 */

function divisibleByThree(str) {
  return (str.split("").reduce((sum, el) => sum + Number(el), 0) / 3) % 1 === 0;
}

console.log(
  divisibleByThree("123"),
  true,
  "Should return true if the sum of the given digits is divisible by 3."
);
console.log(
  divisibleByThree("19254"),
  true,
  "Should return true if the sum of the given digits is divisible by 3."
);
console.log(
  divisibleByThree("88"),
  false,
  "Should return false if the sum of the given digits is not divisible by 3."
);
console.log(
  divisibleByThree("1"),
  false,
  "Should return false if the sum of the given digits is not divisible by 3."
);

/* №21
Create a function (a method in Ruby, an extension method in C#) every which returns every nth element of an array.
Usage
With one argument, every(array) returns every element of the array.
With two arguments, every(array, interval) it returns every intervalth element.
With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.
Examples
every([0,1,2,3,4])     -> [0,1,2,3,4]
every([0,1,2,3,4],1)   -> [0,1,2,3,4]
every([0,1,2,3,4],2)   -> [0,2,4]
every([0,1,2,3,4],3)   -> [0,3]
every([0,1,2,3,4],3,1) -> [1,4]
 */

function every(arr, interval, start) {
  let res = [];
  for (
    let i = start === undefined ? 0 : start;
    i < arr.length;
    i += interval === undefined ? 1 : interval
  ) {
    res.push(arr[i]);
  }
  return res;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);

/* №22
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
 */

function noOdds(values) {
  return values.filter((el) => {
    if (el % 2 === 0) {
      return [].push(el);
    }
  });
}

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);

/* №23
Return the nth term of the Recamán's sequence.
 */

function recaman(n) {
  let sequence = [0];
  let seen = new Set([0]);

  for (let i = 1; i <= n; i++) {
    let prev = sequence[i - 1];
    let candidate = prev - i;

    if (candidate > 0 && !seen.has(candidate)) {
      sequence.push(candidate);
      seen.add(candidate);
    } else {
      sequence.push(prev + i);
      seen.add(prev + i);
    }
  }
  return sequence[n];
}

/* №24
Closure Counter
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2
 */

function counter() {
  let c = 0;
  return function () {
    return (c += 1);
  };
}

/* №25
Your job is to create a simple password validation function, as seen on many websites.
The rules for a valid password are as follows:
 - There needs to be at least 1 uppercase letter.
 - There needs to be at least 1 lowercase letter.
 - There needs to be at least 1 number.
 - The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.
  Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
 */

function password(str) {
  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasDigit = /[0-9]/;
  const len = str.length;

  return (
    str.length >= 8 &&
    hasLowercase.test(str) &&
    hasUppercase.test(str) &&
    hasDigit.test(str)
  );
}

console.log(password("Abcd1234"), true);
console.log(password("Abcd123"), false);
console.log(password("abcd1234"), false);
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
console.log(password("ABCD1234"), false);
console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,"), true);
console.log(password("!@#$%^&*()-_+={}[]|:;?/>.<,"), false);

/* №26
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
  Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
 */

function squareDigits(num) {
  let arr = num
    .toString()
    .split("")
    .map((el) => {
      return Math.pow(Number(el), 2);
    });
  return Number(arr.join(""));
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);

/* №27
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
  For example:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
  N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
 */

function inAscOrder(arr) {
  let pastNum = 0;
  let res = true;
  if (arr.length === 1) {
    return res;
  }
  arr.forEach((el) => {
    pastNum < el ? (pastNum = el) : (res = false);
  });
  return res;
}

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  true,
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  true,
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
  inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  false,
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
  inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  false,
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);

/* №28
  Description
Given a number n, you should find a set of numbers for which the sum equals n. This set must consist exclusively of values that are a power of 2 (eg: 2^0 => 1, 2^1 => 2, 2^2 => 4, ...).
The function powers takes a single parameter, the number n, and should return an array of unique numbers.
  Criteria
The function will always receive a valid input: any positive integer between 1 and the max integer value for your language (eg: for JavaScript this would be 9007199254740991 otherwise known as Number.MAX_SAFE_INTEGER).
The function should return an array of numbers that are a power of 2 (2^x = y).
Each member of the returned array should be unique. (eg: the valid answer for powers(2) is [2], not [1, 1])
Members should be sorted in ascending order (small -> large). (eg: the valid answer for powers(6) is [2, 4], not [4, 2])
 */

function powers(n) {
  const result = [];
  let power = 1;
  while (power <= n) {
    power *= 2;
  }
  while (n > 0) {
    power /= 2;
    if (n >= power) {
      result.push(power);
      n -= power;
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(powers(1), [1]);
console.log(powers(2), [2]);
console.log(powers(6), [2, 4]);

/* №29
A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.
Here are examples of latin squares of size 4 and 7:
[[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
 [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
 [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
 [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
                     [5, 6, 4, 3, 7, 2, 1], 
                     [1, 2, 7, 6, 3, 5, 4], 
                     [3, 4, 2, 1, 5, 7, 6]]
Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.
Task: Write a function that returns a latin square for any positive integer n.
 */

function latinSquare(n) {
  const square = [];
  const firstRow = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = 0; i < n; i++) {
    square.push([...firstRow.slice(i), ...firstRow.slice(0, i)]);
  }
  return square;
}

/* №30
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000, but fixed tests go higher.
Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
 */

function getDivisorsCnt(n) {
  let divisors = 0;
  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      divisors += 1;
      if (i !== n / i) {
        divisors += 1;
      }
    }
  }
  return divisors;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);

/* №31
Given an array of numbers, return the difference between the largest and smallest values.
  For example:
[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
 */

function betweenExtremes(numbers) {
  return Math.max.apply(null, numbers) - Math.min.apply(null, numbers);
}

console.log(
  betweenExtremes([21, 34, 54, 43, 26, 12]),
  42,
  "betweenExtremes([21, 34, 54, 43, 26, 12])"
);
console.log(
  betweenExtremes([-1, -41, -77, -100]),
  99,
  "betweenExtremes([-1, -41, -77, -100])"
);

/* №32
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.
 */

function broken(x) {
  let res = "";
  x.split("").forEach((el) => {
    el === "1" ? (res += "0") : (res += "1");
  });
  return res;
}

console.log(broken("1"), "0");
console.log(
  broken("10000000101101111110011001000"),
  "01111111010010000001100110111"
);
console.log(broken("100010"), "011101");

/* №33
The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes.
The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element.
There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years.
The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.
Since the current calendar is Gregorian, I will only be using years from the epoch 1924.
For simplicity I am counting the year as a whole year and not from January/February to the end of the year.
  ##Task
Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".
  animals (or $animals in Ruby) is a preloaded array containing the animals in order:
['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
  elements (or $elements in Ruby) is a preloaded array containing the elements in order:
['Wood', 'Fire', 'Earth', 'Metal', 'Water']
 */

function chineseZodiac(year) {
  const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  return `${elements[Math.floor(((((year - 1984) % 10) + 10) % 10) / 2)]} ${
    animals[(((year - 1984) % 12) + 12) % 12]
  }`;
}

console.log(chineseZodiac(1965), "Wood Snake");
console.log(chineseZodiac(1938), "Earth Tiger");
console.log(chineseZodiac(1998), "Earth Tiger");
console.log(chineseZodiac(2016), "Fire Monkey");
console.log(chineseZodiac(1924), "Wood Rat");
console.log(chineseZodiac(1968), "Earth Monkey");
console.log(chineseZodiac(2162), "Water Dog");

/* №34
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
  Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] 
*/

function filter_list(l) {
  return l.filter((el) => typeof el === "number");
}

console.log(filter_list([1, 2, "a", "b"]), [1, 2], 'For input [1,2,"a","b"]');
console.log(
  filter_list([1, "a", "b", 0, 15]),
  [1, 0, 15],
  'For input [1,"a","b",0,15]'
);
console.log(
  filter_list([1, 2, "aasf", "1", "123", 123]),
  [1, 2, 123],
  'For input [1,2,"aasf","1","123",123]'
);

/* №35
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
  Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
 */

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);

/* №36
Create a function that takes a number and returns an array of strings containing the number cut off at each digit.
  Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000]
 */

function createArrayOfTiers(num) {
  let res = [];
  let elem = "";
  String(num)
    .split("")
    .forEach((el) => {
      elem += el;
      res.push(elem);
    });
  return res;
}

console.log(createArrayOfTiers(420), ["4", "42", "420"]);
console.log(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);

/* №37
Your task is to write a function which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
  Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
 */

const sequenceSum = (b, e, s) => {
  let res = 0;
  if (b >= e) {
    return 0;
  }
  for (let i = b; i <= e; i += s) {
    res += i;
  }
  return res;
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);

/* №38
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
  Input = {"Ryan", "Kieran", "Jason", "Yous"}
  Output = {"Ryan", "Yous"}
  Input = {"Peter", "Stephen", "Joe"}
  Output = {}
Input strings will only contain letters. Note: keep the original order of the names in the output.
 */

function friend(friends) {
  return friends.filter((el) => el.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
  ["Jimm", "Cari", "aret"]
);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);

/* №39
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
Note: the scores will always be unique (so no duplicate values)
  Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
 */

function myLanguages(results) {
  let arr = [];
  let res = [];
  for (let elem in results) {
    arr.push([elem, results[elem]]);
  }
  arr = arr.sort((a, b) => b[1] - a[1]).filter((el) => el[1] >= 60);
  arr.forEach((el) => {
    res.push(el[0]);
  });
  return res;
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }), [
  "Ruby",
  "Python",
]);
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }), [
  "Dutch",
  "Greek",
  "Hindi",
]);
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }), []);

/* №40
Write a function that doubles every second integer in a list, starting from the left.
  Example:
For input array/list :
[1,2,3,4]
the function should return :
[1,4,3,8]
 */

function doubleEveryOther(a) {
  return arr.map((num, index) => (index % 2 === 1 ? num * 2 : num));
}

console.log(doubleEveryOther([1, 2, 3, 4]), [1, 4, 3, 8]);

/* №41
Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0.
 */

function moveTen(s) {
  return s
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 10) % 26) + 97);
      } else if (/[A-Z]/.test(char)) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 10) % 26) + 65);
      } else {
        return char;
      }
    })
    .join("");
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");

/* №42
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
  Task
Create a function that takes in a list of button inputs and returns the final state.
  Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
 */

function likeOrDislike(buttons) {
  let res = "Nothing";
  buttons.forEach((el) => {
    res === el ? (res = "Nothing") : (res = el);
  });
  return res;
}

console.log(likeOrDislike([Dislike]), Dislike);
console.log(likeOrDislike([Like, Like]), Nothing);
console.log(likeOrDislike([Dislike, Like]), Like);
console.log(likeOrDislike([Like, Dislike, Dislike]), Nothing);
console.log(likeOrDislike([Dislike, Dislike]), Nothing);
console.log(likeOrDislike([Like, Like, Like]), Like);
console.log(likeOrDislike([Like, Dislike]), Dislike);
console.log(likeOrDislike([Dislike, Like, Dislike]), Dislike);
console.log(
  likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]),
  Dislike
);
console.log(likeOrDislike([]), Nothing);

/* №43
Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. 
It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
  Examples
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]
 */

function last(...args) {
  const lastArg = args[args.length - 1];

  if (args.length === 1) {
    if (Array.isArray(lastArg) || typeof lastArg === "string") {
      return lastArg[lastArg.length - 1];
    }
    return lastArg;
  }
  return lastArg;
}

console.log(last(5), 5, "last(5)");
console.log(last("123"), "3", 'last("123")');
console.log(last([1, 2, 3]), 3, "last([1, 2, 3])");
console.log(last([1]), 1, "last([1])");
console.log(last([1, 2, 3, [4, 5]]), [4, 5], "last([1, 2, 3, [4, 5]])");
console.log(last(1, 2, 3), 3, "last(1, 2, 3)");
console.log(last("a", "b", "c"), "c", "last('a', 'b', 'c')");
console.log(last([1], [2], [3]), [3], "last([1], [2], [3])");
console.log(last(1, 2, 3, [4, 5]), [4, 5], "last(1, 2, 3, [4, 5])");

/* №44
Task
There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:
  The smallest box is of size 1, 
  the next one is of size 2,..., 
  all the way up to size k.
Boxes that have an odd size contain only yellow apples. 
Boxes that have an even size contain only red apples.
Your task is to calculate the difference between the number of red apples and the number of yellow apples.
  Example
For k = 5, the output should be -15
There are 1 + 3 × 3 + 5 × 5 = 35 yellow apples and 2 × 2 + 4 × 4 = 20 red apples, thus the answer is 20 - 35 = -15.
  Input/Output
[input] integer k
A positive integer.
Constraints: 1 ≤ k ≤ 40
[output] an integer
The difference between the two types of apples.
 */

function appleBoxes(k) {
  let sumYel = 0;
  let sumRed = 0;
  for (let i = 1; i <= k; i += 1) {
    i % 2 === 0 ? (sumRed += i * i) : (sumYel += i * i);
  }
  return sumRed - sumYel;
}

console.log(appleBoxes(5), -15, "appleBoxes(5)");
console.log(appleBoxes(15), -120, "appleBoxes(15)");
console.log(appleBoxes(36), 666, "appleBoxes(36)");
console.log(appleBoxes(1), -1, "appleBoxes(1)");

/* №45
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.
The order is: uppercase letters, lowercase letters, numbers and special characters.
  "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
More examples in the test cases.
 */

function solve(s) {
  let upper = 0,
    lower = 0,
    digits = 0,
    special = 0;

  for (let char of s) {
    if (char >= "A" && char <= "Z") {
      upper++;
    } else if (char >= "a" && char <= "z") {
      lower++;
    } else if (char >= "0" && char <= "9") {
      digits++;
    } else {
      special++;
    }
  }

  return [upper, lower, digits, special];
}

console.log(solve(""), [0, 0, 0, 0]);
console.log(solve("aAbBcC"), [3, 3, 0, 0]);
console.log(solve("Codewars@codewars123.com"), [1, 18, 3, 2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9]);
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10, 7, 3, 6]);
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7, 13, 4, 10]);

/* №46
 */
console.log;
/* №47
 */
console.log;
/* №48
 */
console.log;
/* №49
 */
console.log;
/* №50
 */
console.log;
/* №51
 */
console.log;
/* №52
 */
console.log;
/* №53
 */
console.log;
/* №54
 */
console.log;
/* №55
 */
console.log;
/* №56
 */
console.log;
/* №57
 */
console.log;
/* №58
 */
console.log;
/* №59
 */
console.log;
/* №60
 */
console.log;
/* №61
 */
console.log;
/* №62
 */
console.log;
/* №63
 */
console.log;
/* №64
 */
console.log;
/* №65
 */
console.log;
