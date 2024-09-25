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
 */

/* №6
 */

/* №7
 */

/* №8
 */

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
