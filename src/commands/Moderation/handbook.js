import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChannelType,
    MessageFlags,
} from 'discord.js';
import { successEmbed } from '../../utils/embeds.js';
import { logEvent } from '../../utils/moderation.js';
import { logger } from '../../utils/logger.js';
import { InteractionHelper } from '../../utils/interactionHelper.js';
import { replyUserError, ErrorTypes } from '../../utils/errorHandler.js';
import { sanitizeInput } from '../../utils/validation.js';

const TEXT_CHANNEL_TYPES = [
    ChannelType.GuildText,
    ChannelType.GuildAnnouncement,
];

function resolveTargetChannel(interaction) {
    const selected = interaction.options.getChannel('channel');
    if (selected) {
        return selected;
    }

    if (!interaction.channel || !TEXT_CHANNEL_TYPES.includes(interaction.channel.type)) {
        return null;
    }

    return interaction.channel;
}

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
