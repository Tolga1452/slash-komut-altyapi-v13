const { CommandInteraction, Client, AutocompleteInteraction } = require("discord.js");

module.exports = {
    type: 1, //Ne yaptığını bilmiyorsan burayı değiştirme.
    name: 'test', //Komut Adı
    description: 'Test Komutu', //Komut Açıklaması
    options: [], //Komut Seçenekleri | Seçenek eklemek için buradan yardım alabilirsin: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    /**
     * Komut kullanıldığında bu fonksiyon çalışır.
     * @param {CommandInteraction} interaction Etkileşim
     * @param {Client} client Bot Client
     */
    async run(interaction, client) {
        interaction.reply('Test komutu başarılı.');
    },
    /**
     * Komut için bir autocomplete eventi alınırsa bu fonksiyon çalışır.
     * @param {AutocompleteInteraction} interaction Etkileşim
     * @param {Client} client Bot Client
     */
    async autocomplete(interaction, client) {
        //örnektir bu kısım bir autocomplete seçeneği oluşturulmadan çalışmaz
        interaction.respond([{ name: 'isim1', value: 'değer1' }, { name: 'isim2', value: 'değer2' }]);
    }
};