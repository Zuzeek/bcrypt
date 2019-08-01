const bcrypt = require('bcrypt'); 
const {promisify} = require('util'); 

const bcryptHash = promisify(bcrypt.hash)

let password = "password"; 
let saltRounds = 13; 
// let someOtherPassword = 'not_bacon'; 

// in order to use async and await we need function 
async function hash(password) {
    let hash = await bcryptHash(password, saltRounds); 

    // just to check if this is working 
    console.log(hash)

}
hash('password')

/*
// password, saltRounds and a call back function -> comes from https://www.npmjs.com/package/bcrypt -> Technique 2 (auto-gen a salt and hash):
bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err; 
    // console.log(hash); 

    // res = response 
    bcrypt.compare(password, hash, (err, res) =>{
        // res == true
        console.log(res) 
    });
  });
*/ 

/* 
compare newly generated hash with password variable
store hash in varibale and compare against different password 
*/ 

/*
extension: 
promisify bcrypt.hash tp avoid callback hell 
*/ 

