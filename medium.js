const fs = require('fs');
const filePath = 'planets.txt';

fs.readFile(filePath, 'utf8', (err,data)=>{
    if(err){
        console.error('error', err);
        return;
    }
    const planets = data.split(',').map((planet)=> planet.trim());
    console.log('planets in the solar system');
    console.log(planets);
});