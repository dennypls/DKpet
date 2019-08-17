const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';

var randomNumber = Math.floor(Math.random() * 101);

client.on('ready', () =>{
    console.log('This bot is online!');
})


client.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.channel.send({embed: {
                color: 3447003,
                fields: [
                  { name: "開啟 -- 指令", value: "銀行 -- !bank\n冒險大陸 -- !map\n合成 -- !compose\n赤兔 -- !horse\n聖獸 -- !pet\n我的寵物 -- !mypet\n挖掘寶物 -- !dig\n第二職業 -- !job\n論壇 -- !forum", inline: true},
                ]
              }
            });
            break;
        case 'bank':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=bank')
            break;
        case 'map':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=map')
            break;
        case 'compose':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=compose')
            break;
        case 'horse':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=ctmfeed')
            break;
        case 'pet':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=petfeed')
            break;   
        case 'mypet':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=mypet')
            break;
        case 'dig':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=wabao')
            break;
        case 'job':
            message.channel.sendMessage('http://www.dk101.com/Discuz/pet.php?index=secjob')
            break;
        case 'forum':
            message.channel.sendMessage('http://www.dk101.com/Discuz/forumdisplay.php?fid=467')
            break;
        case 'lucky':
            message.channel.sendMessage('你的幸運號碼是: ' + randomnumber)
            break;  
    }
})

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
