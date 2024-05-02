function writeCards(names, occasion) {
  const thankYouMessages = [];
  for (let name of names) {
    thankYouMessages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  return thankYouMessages;
}


function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
