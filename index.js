const config = require("./auth.json");

const Discord = require('discord.js');

const client = new Discord.Client();

const auth = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);

client.on('message', message => {	
    console.log(message.content);

    if (message.content === 'สวัสดี') {
	    message.reply('สวัสดี นี่วีเอง');
        message.channel.send('');
    }

    if (message.content === 'บัง') {
	    message.channel.send('ควยไร!');
    }

    if (message.content === 'ไอบัง') {
	    message.channel.send('ควยไร สัส!');
    }

    if (message.content === 'หน้าหี') {
	    message.channel.send('ใครเรียกผม');
    }

    if (message.content === 'บังทำอะไร') {
	    message.channel.send('ผมทำอุปกรณ์');
    }

    if (message.content === 'บังทำไร') {
	    message.channel.send('ผมทำอุปกรณ์');
    }

    if (message.content === 'บังชอบไร') {
	    message.channel.send('ชอบหี');
    }

    if (message.content === 'บังตีดอทมั้ย') {
	    message.channel.send('กินข้าว 2ที!');
    }

    if (message.content === 'บังเล่นROVมั้ย') {
	    message.channel.send('เล่นกับหีอยู่');
    }

    if (message.content === 'ยห') {
	    message.channel.send('เย็ดหี เย็ดหี');
    }


    if (message.content === 'บังกินหมูมั้ย') {
	    message.channel.send('ของช๊อบบบบบบ');
    }

    if (message.content === 'บังเบิดเดย์เบคที') {
	    message.channel.send('สุขสันต์วันเกิดผู้สืบทอด <@416512818083528705>        ');
        message.channel.send('ว่างๆ จัมพ์ฟอร์สมา');
    }

    if (message.content === 'บังกินข้าวยัง') {
	    message.channel.send('ชาบู ไป!');
    }
    
    if (message.content === 'บังอยู่ไหน') {
	    message.channel.send('อยู่ไหนก็ได้ โตแล้ว');
    }

    if (message.content === 'ควยไรบัง') {
	    message.channel.send('แล้วควยไรอะ');
    }

    if (message.content === 'ผมคิดถึงบัง') {
	    message.reply('บังก็คิดถึงคุณ');
        message.channel.send('');
    }

    if (message.content === 'ใครๆก็ว่าบังตายแล้ว') {
	    message.reply('ผมยังไม่ตาย แค่ติดหี');
        message.channel.send('');
    }
    
    if (message.content === 'เห็นหีดีกว่าเพื่อน') {
        message.channel.send('เอ้า นั้นแหละผม');
    }

    if (message.content === '555') {
	    message.reply('หัวเราะทำแมวไร');
        message.channel.send('');
    }

    if (message.content === 'นอนละบัง') {
	    message.channel.send('ฝันดี');
        message.reply('');
    }

    if (message.content === 'นอนได้แล้วบัง') {
        message.reply('');
	    message.channel.send('โอเค เจอกันพรุ่งนี้');
        
    }

    if (message.content === 'ตื่นได้แล้วบัง') {
	    message.channel.send('กุ้ด มอนิ่ง');
    }

    if (message.content === 'บีหน้าฮัง') {
	    message.channel.send('บังหน้าหี');
        message.channel.send('แฮ่');
    }

    // if(message.member.voiceChannel){
    //     if(!message.guild.voiceConnection){
    //         message.member.voiceChannel.join().then(connection =>{
    //             message.reply('Suc');
    //         })
    //     }
    // }
    // else{
    //     message.reply('');
    // }


});


// const comando = require('discord.js -commando');

// class JoinChannel extends comando.comando{
//     constructor(client){
//         super(client,{
//             name: 'join',
//             group: 'music',
//             memberName: 'join',
//             description: ''
//         });
//     }

//     async run(message, args){
//         if(message.member.voiceChannel){
//             if(!message.guild.voiceConnection){
//                 message.member.voiceChannel.join().then(connection =>{
//                     message.reply('Suc');
//                 })
//             }
//         }
//         else{
//             message.reply('NOt');
//         }
//     }


// }







// const Discord = require('discord.js');
// const client = new Discord.Client();
// const auth = require('./auth.json');

// client.once('ready', () => {
//     console.log('Ready!');
// });