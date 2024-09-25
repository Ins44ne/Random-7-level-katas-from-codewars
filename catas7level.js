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
 */

/* №3
 */

/* №4
 */

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
