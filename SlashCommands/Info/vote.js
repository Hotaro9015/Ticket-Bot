/*const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    description: "Vote for the bot <3",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`💖 Vote for ${client.user.username}`)
      .setDescription(`**<:arrow:991251351327744082> [top.gg](https://top.gg/bot)\n<:arrow:991251351327744082> [discordbotlist.com](https://discordbotlist.com)**`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by OrekiDev`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://top.gg/bot/`)
				.setLabel('top.gg')
				.setStyle('LINK'),
			)
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(``)
				.setLabel('discordbotlist.com')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};
*/