// This module executes process call
// thus this has to be run within this module B
// and can't execute the 'process' call from the calling module A
module.exports = () => {           
    process.stdout.write(process.cwd());
}

// We can also return a string
// let outStr = '';
// module.exports = process.cwd();

