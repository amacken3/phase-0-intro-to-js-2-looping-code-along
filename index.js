const messages =[]
function writeCards(name) {
   for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);   
    };
    return (messages)
};
function countDown() {
    let countdown = 10;
    while (countdown > -1) {
        console.log(countdown--);
    }
};