//const path = require('path');
const pwd = require('./pwd.js');
//Output a prompt
process.stdout.write('prompt > ');

//Get input
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    switch (cmd) {
        case 'pwd':
        pwd();
        // process.stdout.write(process.cwd());
        // in case we just want to receive a string
        // from module pwd.js then we just stdout the string
        // as normal
        // process.stdout.write(pwd);
        break;
        case 'ls':
            //console log directory contents
            break;
        default:
            process.stdout.write('You typed: ' + cmd + '.  Sorry, no comprendo.');
            break;
    }


    process.stdout.write('\nprompt > ');
});
