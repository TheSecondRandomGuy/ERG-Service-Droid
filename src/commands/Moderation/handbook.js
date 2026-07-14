import { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField, ChannelType, MessageFlags } from 'discord.js';
import { createEmbed, successEmbed, infoEmbed, warningEmbed } from '../../utils/embeds.js';
import { logEvent } from '../../utils/moderation.js';
import { logger } from '../../utils/logger.js';
import { sanitizeMarkdown } from '../../utils/validation.js';

import { InteractionHelper } from '../../utils/interactionHelper.js';
import { replyUserError, ErrorTypes } from '../../utils/errorHandler.js';
export default {
    data: new SlashCommandBuilder()
        .setName('handbook')
        .setDescription('Posts the IRG Handbook.'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor(0x2B2D31)
            .setTitle("📖 Emperor's Royal Guard Handbook")
            .setDescription(`
Every member of the **IRG** is required to read this document upon joining. It is your responsibility to ensure that you understand its contents, as the standards and procedures set out within apply to all members for the duration of their service[.](https://docs.google.com/document/d/1eZK6Y4N8ciPu304xiGLW1jiiil3Qls2gCmKYy5pcfb4/edit?usp=sharing/viewform)
`)
            .setFooter({
                text: "Emperor's Royal Guard • Official Handbook"
            });

        await interaction.reply({ embeds: [embed] });
    }
};
