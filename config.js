const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://imgur.com/t9DtZcf.jpg"                       // put your app url here,
global.email ="abrahamtemitope247@gmail.com"
global.location="Africa,Lagos."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://abro:md@cluster0.a3td1e8.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/LAGOS";
global.github=process.env.GITHUB|| "https://github.com/Temitopeareo/Abrotech-md/";
global.gurl  =process.env.GURL  || "https://wa.me/2348100151048";
global.website=process.env.GURL || "https://chat.whatsapp.com/Fmkh7WvnIaW4Cafa49jjDc" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/t9DtZcf.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348100151048" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348100151048";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100151048";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "2",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://imgur.com/t9DtZcf.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348100151048";



module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Abro-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ABRO-MD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ABRO-MD 』```", //*『sᴜʙsᴄʀɪʙᴇ • ABROBOT』*\n "),
 
  author: process.env.PACK_AUTHER || "ABRO-MD",
  packname: process.env.PACK_NAME || "ABROBOR",
  botname : process.env.BOT_NAME  || "⫷ABRO-𝑴𝑫⫸",
  ownername:process.env.OWNER_NAME|| "ABRO BOT",

  sessionName:process.env.SESSION_ID|| "",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GWQ6jVy9MBpfYF9SnyG8jz8p",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "f18e2fdc-88a6-44a2-b07b-aef0ddc87aa3",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "https://api.elevenlabs.io/v1/text-to-speech/<voice-id>",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ABROMD",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
