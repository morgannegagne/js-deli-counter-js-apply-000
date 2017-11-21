<<<<<<< HEAD
var katzDeli = []; // create an empty array

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name) // add name to the end of the Katz Deli line
=======
var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
>>>>>>> c30afa5059a866ffbe91fe6ce03171dec6177ce7
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served!'
<<<<<<< HEAD
  else return `Currently serving ${katzDeliLine.shift()}.` // Use shift() to remove the first person in line. katzDeliLine.shift() returns the first name
}

function currentLine(katzDeliLine){

  if (katzDeliLine.length === 0) return "The line is currently empty."

  var line = "The line is currently: " // iterate over the array to print each person's name and number in line
  for (var i = 0; i < katzDeliLine.length; i++){
    line += `${i+1}. ${katzDeliLine[i]}, `
  }
  return line.slice(0, line.length-2) // remove comma and extra space at the end of var line
=======
  else return `Currently serving ${katzDeliLine.shift()}.`
>>>>>>> c30afa5059a866ffbe91fe6ce03171dec6177ce7
}
