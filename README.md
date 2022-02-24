# Slash Komut Altapısı

## Kullanmaya Başlamadan Önce

### **1.**
`.env` dosyasındaki `token` ile belirtilen kısmın yerine botunuzun tokeni girilmelidir.

### **2.**
`server.js` dosyasındaki `BOT_ID` ile belirtilen kısmın yerine botunuzun ID'si girilmelidir.

## Nasıl Komut Eklerim?

`komutlar` klasörünün içinde `komutadı.js` şeklinde bir dosya oluşturun.
Dosyanın içine aşağıdaki şablonu yapıştırın:

```js
const { CommandInteraction, Client, AutocompleteInteraction } = require("discord.js");

module.exports = {
    type: 1, //Ne yaptığını bilmiyorsan burayı değiştirme.
    name: '', //Komut Adı
    description: '', //Komut Açıklaması
    options: [], //Komut Seçenekleri | Seçenek eklemek için buradan yardım alabilirsin: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
    /**
     * Komut kullanıldığında bu fonksiyon çalışır.
     * @param {CommandInteraction} interaction Etkileşim
     * @param {Client} client Bot Client
     */
    async run(interaction, client) {
    },
    /**
     * Komut için bir autocomplete eventi alınırsa bu fonksiyon çalışır.
     * @param {AutocompleteInteraction} interaction Etkileşim
     * @param {Client} client Bot Client
     */
    async autocomplete(interaction, client) {
    }
};
```

Dosyanın içini istediğiniz gibi özelleştirip komutunuzu ekleyebilirsiniz.

## Nasıl Kullanılır?

Botu manuel olarak başlatmak için `npm start` veya `node server.js` yazabilirsiniz.