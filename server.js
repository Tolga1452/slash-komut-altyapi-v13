const Discord = require('discord.js');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv/config');

const client = new Discord.Client({ intents: 98045 }); //Botun alacağı eventlerin intent değeri. Varsayılan intentler ayarlanmıştır. Intentleri değiştirmek için buraya gidebilirsin: https://discord-intents-calculator.vercel.app/

fs.readdir('./komutlar', (error, files) => {
    if (error) return console.log(`[Komut Yükleyici] ${error}`);

    console.log(`[Komut yükleyici] ${files.length} komut yükleniyor...`);

    client.commands = new Discord.Collection();
    files.forEach(file => {
        const command = require(`./komutlar/${file}`);
        client.commands.set(command.name, command);

        console.log(`[Komut Yükleyici] ${command.name} komutu yüklendi.`);
    });

    const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

    (async () => {
        try {
            console.log(`[Komut Yenileyici] ${client.commands.size} komut yenileniyor...`);

            await rest.put(Routes.applicationCommands('BOT_ID'), { //Burada "BOT_ID" ile gösterilen yere botun ID'sini girmelisin.
                body: client.commands.map(command => {
                    return {
                        name: command.name,
                        description: command.description,
                        options: command.options || null,
                        type: command.type
                    }
                })
            });

            console.log('[Komut Yenileyici] Komutlar yenilendi.');
        } catch (error) {
            console.log(`[Komut Yenileyici] ${error}`);
        };
    })();
});

client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
    console.log(`${client.user.username} hazır.`);
});

client.on('interactionCreate', interaction => {
    if (interaction.isCommand()) client.commands.get(interaction.commandName).run(interaction, client);
    if (interaction.isAutocomplete()) client.commands.get(interaction.commandName).autocomplete(interaction, client);
});