const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE

const Pumpkin = db.define('Pumpkin',{
        name:{
            type:Sequelize.STRING
        },
        size:{
            type:Sequelize.ENUM('small','medium','large')
        },
        evil:{
            type:Sequelize.BOOLEAN,
            defaultValue : false
        },
        carved:{
            type:Sequelize.BOOLEAN
        },
        candle:{
            type:Sequelize.BOOLEAN
        }


});


Pumpkin.prototype.lightcandle = async() => {
   return await 
}


//--------------------
module.exports = Pumpkin;
