// Installer Information
// Installer Node js
// Open CMD
// npm install readline-sync
// npm install puppeteer
// npm install puppeteer-extra
// npm install puppeteer-extra-plugin-stealth
// npm install node-random-name
// npm install fs
// npm install delay
// npm install string
// npm install console
// npm install os
// npm install moment
// npm install figlet
// npm install chalk
// npm install fetch
// npm install request

const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer-extra');
var random_name = require('node-random-name');
const fs = require('fs');
const delay = require('delay');
const S = require('string'  );
const { error, Console } = require('console');
const { type } = require('os');
var no = 1;
var moment = require("moment");
var figlet = require('figlet');
var chalk = require('chalk');
var fetch = require('node-fetch');
var request = require('request');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

let browser = null;
let page    = null;
const _this = this;
let retries = 0;
let isReleased = false;
var isLite  = false;
(async () => {

   console.log(
         chalk.white(
         figlet.textSync('Gmail Creator', { horizontalLayout: 'fitted' })
      )
   );
   console.log('                                                              Copyright 2K21')
         console.log('\n');
         var BuserDah = readlineSync.question('[+] Password Yang Diinginkan : ');
         var recover = readlineSync.question('[+] Email Recovery Yang Diinginkan : ');
         while (true) {
            var name1 = random_name({first:true});
            var name2 = random_name({last:true});
            var fullname = name1+name2;
            var emailAcc = fullname+nope(5);
   
           const $options = { waitUntil: 'networkidle2' };
           const browser = await puppeteer.launch({ headless: false });
           const page = await browser.newPage();
   
           await page.goto('https://accounts.google.com/signup/v2', $options);
   
           const FirstName = await page.$('input[name="firstName"]')
           await FirstName.type(name1)
           await FirstName.dispose()
   
           const LastName = await page.$('input[name="lastName"]')
           await LastName.type(name2)
           await LastName.dispose()
   
           await delay(2000)
           const EmaiLField = await page.$('input[type="email"]')
           await EmaiLField.type(emailAcc)
           await EmaiLField.dispose()
   
           const Password = await page.$('input[name="Passwd"]')
           await Password.type(BuserDah)
           await Password.dispose()
   
           const PasswordField = await page.$('input[name="ConfirmPasswd"]')
           await PasswordField.type(BuserDah)
           await PasswordField.dispose()
   
           await delay(3000)
           const ButtonField = await page.$('button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]')
           await ButtonField.click()
           await ButtonField.dispose()
   
           console.log('\n');
           console.log('[' + no + ']' + ' Berhasil Register Dengan Email ' + emailAcc + '@gmail.com');
   
           await delay(4000)
   
           if (page.url().includes('webgradsidvphone')) {
   
            var nohp = readlineSync.question('    Nomor Handphone : ');
   
            const otpNumber = await page.$('#phoneNumberId')
            await otpNumber.type(nohp)
            await otpNumber.dispose()
   
            await page.keyboard.press('Enter')
   
            await delay(2000)
   
               if (page.url().includes('webgradsidvphone')) {
                  const info = await page.evaluate(() =>{
                     return document.querySelector('div[class="o6cuMc"').innerText;
               })
   
               console.log('   ',info);
   
               } else if (page.url().includes('webgradsidvverify')) {
                  var otp = readlineSync.question('    Otp Code : ');
      
                  const otpCode = await page.$('input[name="code"]')
                  await otpCode.type(otp)
                  await otpCode.dispose()
      
                  const buttonNumber = await page.$('div[class="FliLIb DL0QTb"]')
                  await buttonNumber.click()
                  await buttonNumber.dispose()
   
                  await delay(4000)
                  if (page.url().includes('webgradsidvverify')) {
                  const info = await page.evaluate(() =>{
                     return document.querySelector('div[class="o6cuMc"').innerText;
               })
                  console.log('   ',info);
   
                  await page.keyboard.down('Control');
                  await page.keyboard.press('A');
                  await page.keyboard.up('Control');
                  await page.keyboard.press('Backspace');
   
                  var otp = readlineSync.question('    Otp Code : ');
      
                  const otpCode = await page.$('input[name="code"]')
                  await otpCode.type(otp)
                  await otpCode.dispose()
      
                  const buttonNumber = await page.$('div[class="FliLIb DL0QTb"]')
                  await buttonNumber.click()
                  await buttonNumber.dispose()
   
                  await delay(2000)
               } else if (page.url().includes('webpersonaldetails')) {
   
                  const emailRecover = await page.$('#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div.akwVEf.OcVpRe > div.d2CFce.cDSmF.OcVpRe > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
                  await emailRecover.type(recover)
                  await emailRecover.dispose()
   
                  const TanggalLahir = await page.$('input[name="day"]')
                  await TanggalLahir.type('15')
                  await TanggalLahir.dispose()
   
                  await page.keyboard.press('Tab');
                  await page.keyboard.press('PageDown');
   
                  const TahunLahir = await page.$('input[name="year"]')
                  await TahunLahir.type('1999')
                  await TahunLahir.dispose()
   
                  await page.keyboard.press('Tab');
                  await page.keyboard.press('PageDown');
   
                  const PressButton = await page.$('div[class="FliLIb DL0QTb"]')
                  await PressButton.click()
                  await PressButton.dispose()
                  await delay(2000)
                  
                  if (page.url().includes('webphoneusage')) {
                   console.log('    Berhasil Input Data')
   
                   const AwwButton = await page.$('div[class="FliLIb DL0QTb"]')
                   await AwwButton.click()
                   await AwwButton.dispose()
   
                   await delay(2000)
                   if (page.url().includes('webtermsofservice')) {
                     console.log('    Berhasil Confirm Terms Of Service')
   
                     const cokAsu = await page.$('div[class="FliLIb DL0QTb"]')
                     await cokAsu.click()
                     await cokAsu.dispose()
                     fs.appendFileSync("gmailCreator.txt", emailAcc + '|' + BuserDah + '|' + nohp + '|' + recover + '\n');
                     console.log('    Berhasil Register And Save File To gmailCreator.txt');
                     console.log('\n');
                     }
                  }
               }
            }
         } else if (page.url().includes('webpersonaldetails')) {
   
            const TanggalLahir = await page.$('input[name="day"]')
            await TanggalLahir.type('15')
            await TanggalLahir.dispose()
   
            await page.keyboard.press('Tab');
            await page.keyboard.press('PageDown');
   
            const TahunLahir = await page.$('input[name="year"]')
            await TahunLahir.type('1999')
            await TahunLahir.dispose()
   
            await page.keyboard.press('Tab');
            await page.keyboard.press('PageDown');
   
            const PressButton = await page.$('div[class="FliLIb DL0QTb"]')
            await PressButton.click()
            await PressButton.dispose()
            await delay(2000)
            
            if (page.url().includes('webphoneusage')) {
             console.log('    Berhasil Input Data')
   
             const AwwButton = await page.$('div[class="FliLIb DL0QTb"]')
             await AwwButton.click()
             await AwwButton.dispose()
   
             await delay(2000)
             if (page.url().includes('webtermsofservice')) {
               console.log('    Berhasil Confirm Terms Of Service')
   
               const cokAsu = await page.$('div[class="FliLIb DL0QTb"]')
               await cokAsu.click()
               await cokAsu.dispose()
               fs.appendFileSync("gmailCreator.txt", emailAcc + '|' + BuserDah + '|' + nohp + '|' + recover + '\n');
               console.log('    Berhasil Register And Save File To gmailCreator.txt');
               }
            }
         } else {
         console.log('    Blocked IP');
      }
   no++;
}
})();

function nope(length) {
    var result           = '';
    var characters       = '12314567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

function calculateDays(startDate,endDate)
{
   var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss');
   var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss');
   var duration = moment.duration(end_date.diff(start_date));
   var days = duration.asDays();       
   return days;
}