const Mustache = require("mustache")
const fs = require('fs')
const MUSTACHE_MAIN_DIR = './main.mustache'
const { DateTime } = require('luxon');

const now = DateTime.now().setZone('Europe/Brussels');
const formattedDate = now.toFormat('dd LLLL, yyyy');
const formattedTime = now.toFormat('HH:mm:ss')

let DATA = {
    name: 'Jiacinto',
    date: formattedDate,
    hour: formattedTime,
};


function generateReadMe(){
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output)
    })
}

generateReadMe()
