const Discord = require('discord.js'); // Загрузка discord.js библиотеки.
const client = new Discord.Client(); // Создание клиента для бота.

client.on('ready', () => { // Эвент который триггерится когда бот будет запущен.
  console.log(`Logged in as ${client.user.tag}!`); // Вывод в логи сообщения о том что бот был запущен.
});

client.on('message', msg => { // Эвент который триггерится когда кто-то отправит сообщение.
  if (msg.content === 'ping') { // Проверка на сообщение, код в {} будет выполнен если бот заметит сообщение 'ping'
    msg.reply('Pong!'); 
  }
});

client.login('token'); // Логин.
