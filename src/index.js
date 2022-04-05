const messages = [
  'Diego',
  'Laura',
  'Angela',
  'Jhojan',
  'Andres',
  'Nicolas',
  'Daniela'
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg };