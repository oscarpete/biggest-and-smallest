function saveNumberHandler() {
  debugger;
  // read new number from user input
  let newInput = Number(document.getElementById("input").value);
  // read from state the data you will need for the next step
  numbers.all.push(numbers.curent);
  // find the new biggest and smallest values
  if (newInput < numbers.smallest) {
    numbers.smallest = newInput;
  }
  if (newInput > numbers.biggest) {
    numbers.biggest = newInput;
  }

  // update state: new biggest, new smallest, new current & save the last current

  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save number",
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  });
}
