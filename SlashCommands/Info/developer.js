const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "developer",
    description: "Show developer info",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`Developer ${client.user.username}`)
      .setDescription(`<:arrow:991251351327744082> Hello I am Oreki <@907169033764356097> (Hōtarō Oreki#9015), and i a beginner who wants to try to make a bot\n\n<:arrow:991251351327744082> I am very proud for all of my verified and not verified Discord Bots, but the Bot I am the most proud of is: [**NEZUKO MUSIC**](https://dsc.gg/nezuko-music) | `2022's Best Music Bot` <@937894810738630686>\n\n<:arrow:991251351327744082> I made this Bot, and you can get a free Bot too!\n\n<:arrow:991251351327744082> Yeah i hope you like my stuff v <3`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by OrekiDev`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=990959630391840838&permissions=8&scope=bot%20applications.commands`)
				.setLabel('Invite Me')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: ` `, embeds: [emb], components: [row] });
      }, 500);
    },
};
