const messages = [
    "Cristian",
    "Manuel",
    "Santiago",
    "Lyndon",
    "Julio",
    "Kevin",
    "Brehilort",

];
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg };