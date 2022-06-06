function scuberGreetingForFeet(distance) {
  // Write your code here!
  let result;

  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance > 2000 && distance < 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result;
}
// ============================== //

// ===========second function ======//

scuberGreetingForFeet(300);

function ternaryCheckCity(city) {
  // Write your code here!

  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
