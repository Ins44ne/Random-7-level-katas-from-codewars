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
    catYears === 15 ? 1 : catYears === 15 ? 2 : (catYears - 24) / 4 + 2,
    dogYears === 15 ? 1 : dogYears === 15 ? 2 : (dogYears - 24) / 5 + 2,
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
