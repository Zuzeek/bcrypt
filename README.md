# bcrypt
this is bcrypt intro 

unecrypted password could cause: 
1) customer trust and loaylity
2) company could be hacked and under GDPR be fined ££££


bcrypt - library for hashing passwords, so storing passwords securly 

- hashing - desinged to be compared, so you cannot encrypted
- encryption - designed to be reversed, eg encrypted email and the need to encrypted on the other side.

HASHES: 
prefixes - tell us what algorithm was used to encrypt hash 
    - bcrypt got $2$
    - (a,b,x,y) added after the 3 for different encryption software 

cost/ rounds 
- how many times the hashing alorightm is used on the given string, so
    2 to the 10th power.. would give us 10 random chars 

salt - random database added to the password
    - without it, hashes of the same password would also be the same 
    - protect against rainbow tables 
        * rainbow tables in action -> https://hashkiller.co.uk/Cracker/MD5
            * md5 hash generator ->  http://www.miraclesalad.com/webtools/md5.php


install Bcrypt 
npm i -y 
npm i bcrypt

https://www.npmjs.com/package/bcrypt
