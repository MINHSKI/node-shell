const path = require('path');

//Output a prompt
process.stdout.write('prompt > ');

//Get input
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    switch (cmd) {
        case 'pwd':
            process.stdout.write(process.cwd());
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
