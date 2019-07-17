const data = require("../data.json");

module.exports = function (client) {
    client.on("message", async msg => {
        // Ignore DMs and messages that don't start with the prefix
        if (msg.channel.type !== "text") return;
        if (!msg.content.startsWith("!faq") || msg.author.bot) return;
        
        // Check if command is in the data file. If so, send it
        const text = data.faq_text[msg.content.toLowerCase().substring(1)];
        if (!text) {
            return;
        }

        await msg.channel.send(`${text}`);
    });
};
