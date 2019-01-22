const commando = require('discord.js-commando');
const client = new commando.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");


client.on('message', msg => {
  if (msg.content === 'give me a drink, bartender') {
    msg.channel.sendMessage('I do not have any hands, and yours cannot phase through your monitor');
  }
});

client.on("guildMemberAdd", function(member) {
  member.send("Welcome to The Server, Loser")
  let memberRole = member.guild.roles.find("name", "Outdated BOI (User)");
  member.addRole(memberRole);
});

client.on('message', msg => {
  if (msg.content === 'give me some cake, glados') {
    msg.channel.sendMessage('but it is a lie');
  }
});

client.on('message', msg => {
  if (msg.content === 'play roblox') {
    msg.channel.sendMessage('**O O F**');
  }
});

client.on('message', msg => {
  if (msg.content === 'play Minecraft') {
    msg.channel.sendMessage('mine_diamonds.mp3');
  }
});

client.on('message', msg => {
  if (msg.content === 'give me a bad time') {
    msg.channel.sendMessage('*Megalovania.mp3*   *shoots gaster blasters*');
  }
});

client.on('message', msg => {
  if (msg.content === 'I did not take my joy') {
    msg.channel.sendMessage('**D O W N E R ! !**');
  }
});

client.on('message', msg => {
  if (msg.content === 'I am a Jedi') {
    msg.channel.sendMessage('I hate to break it to you, but I am your parental guardian');
  }
});

client.on('message', msg => {
  if (msg.content === 'give me some memes, dank lord') {
    msg.channel.sendMessage('The memes in 2019 are so bad I will not allow myself to.');
  }
});

client.on('message', msg => {
  if (msg.content === 'give me the salt') {
    msg.channel.sendMessage('no, pumkin');
  }
});

client.on('message', msg => {
  if (msg.content === 'hit or miss') {
    msg.channel.sendMessage('I guess they never miss, huh?');
  }
});

client.on('message', msg => {
  if (msg.content === 'you got a boyfriend') {
    msg.channel.sendMessage('I bet he does not kiss ya, mwah!');
  }
});

client.on('message', msg => {
  if (msg.content === 'he gun find another girl') {
    msg.channel.sendMessage('and he will not miss ya. He gun skrrt then hit the dab like Whiz Khalifa!');
  }
});

client.on('message', msg => {
  if (msg.content === 'hit the music, good sah') {
    msg.channel.sendMessage('*breaks boombox*');
  }
});


client.login('NTMyNzgxMjIwMjAzODU1ODcy.DxhpkQ.NRzypQrosyryI2H2yr8gic4RuzI');

