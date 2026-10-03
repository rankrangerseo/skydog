const {
  Client,
  GatewayIntentBits,
  Partials,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");
require("dotenv").config();

const token = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID || "1553609954559266846";

// Channel IDs
const CH_ORDERS_LOG = "1553610354934947920"; // website-orders-log
const CH_ORDER_UPDATES = "1553610315726331914"; // order-updates
const CH_TICKET = "1553610329714327673"; // create-ticket

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
});

client.once("ready", () => {
  console.log(`[OmniSub Bot] Online & Ready as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  try {
    // 1. Button Click Handlers
    if (interaction.isButton()) {
      if (interaction.customId === "btn_order_now") {
        // Modal Order Form in English
        const modal = new ModalBuilder()
          .setCustomId("modal_order_form")
          .setTitle("🛒 OmniSub • Instant Order Form");

        const productInput = new TextInputBuilder()
          .setCustomId("order_product")
          .setLabel("Product / Subscription Required")
          .setPlaceholder("e.g., Netflix, ChatGPT Plus, Canva Pro, Spotify")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const durationInput = new TextInputBuilder()
          .setCustomId("order_duration")
          .setLabel("Duration / Plan")
          .setPlaceholder("e.g., 1 Month, 3 Months, 1 Year")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const contactInput = new TextInputBuilder()
          .setCustomId("order_contact")
          .setLabel("Your Email or WhatsApp Number")
          .setPlaceholder("For credential delivery and confirmation")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const paymentInput = new TextInputBuilder()
          .setCustomId("order_payment")
          .setLabel("Payment Method & TrxID")
          .setPlaceholder("e.g., bKash / TrxID: 9AJ8821LK or Binance USDT")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const row1 = new ActionRowBuilder().addComponents(productInput);
        const row2 = new ActionRowBuilder().addComponents(durationInput);
        const row3 = new ActionRowBuilder().addComponents(contactInput);
        const row4 = new ActionRowBuilder().addComponents(paymentInput);

        modal.addComponents(row1, row2, row3, row4);
        await interaction.showModal(modal);
        return;
      }

      if (interaction.customId === "btn_contact_support") {
        await interaction.reply({
          content: "📩 **OmniSub Support Desk:**\n\n" +
            "📞 **WhatsApp:** +8801609132361\n" +
            "💳 **bKash / Nagad / Rocket (Bangla QR):** `01580397069`\n" +
            "🟡 **Binance Pay ID:** `jahidulf1` | UID: `561324911`\n\n" +
            "Need dedicated help? Create a support ticket in <#1553610329714327673>. Our agents will assist you promptly.",
          ephemeral: true
        });
        return;
      }

      if (interaction.customId === "btn_view_faq") {
        const faqEmbed = new EmbedBuilder()
          .setTitle("❓ OmniSub • Warranty & Service Guidelines")
          .setDescription(
            "• **Replacement Warranty:** If you experience any subscription disruptions, replacements or account refreshes are dispatched within 24 hours.\n" +
            "• **Delivery Speed:** Standard orders are verified and delivered within 5 to 20 minutes.\n" +
            "• **Genuine Activation:** Every subscription is activated through official, legitimate payment methods."
          )
          .setColor(0xF1C40F);
        await interaction.reply({ embeds: [faqEmbed], ephemeral: true });
        return;
      }

      // Staff Actions
      if (interaction.customId.startsWith("btn_deliver_")) {
        const orderId = interaction.customId.replace("btn_deliver_", "");
        await interaction.update({
          content: `✅ **Order #${orderId} marked as Delivered!** (Staff: <@${interaction.user.id}>)`,
          components: []
        });
        return;
      }

      if (interaction.customId.startsWith("btn_cancel_")) {
        const orderId = interaction.customId.replace("btn_cancel_", "");
        await interaction.update({
          content: `❌ **Order #${orderId} has been Cancelled.** (Staff: <@${interaction.user.id}>)`,
          components: []
        });
        return;
      }
    }

    // 2. Modal Submission Handler
    if (interaction.isModalSubmit()) {
      if (interaction.customId === "modal_order_form") {
        const product = interaction.fields.getTextInputValue("order_product");
        const duration = interaction.fields.getTextInputValue("order_duration");
        const contact = interaction.fields.getTextInputValue("order_contact");
        const payment = interaction.fields.getTextInputValue("order_payment");

        const orderId = "OMNI-" + Math.floor(1000 + Math.random() * 9000);

        // Instant Confirmation Receipt for the Customer (100% English)
        const customerReceiptEmbed = new EmbedBuilder()
          .setTitle("🎉 Order Received Successfully!")
          .setDescription(`Thank you **<@${interaction.user.id}>**! Your order has been registered in our system. Our operations team will verify your payment and dispatch your credentials shortly.`)
          .addFields(
            { name: "📦 Order ID", value: `\`#${orderId}\``, inline: true },
            { name: "💎 Product", value: product, inline: true },
            { name: "⏳ Duration", value: duration, inline: true },
            { name: "📱 Contact", value: contact, inline: true },
            { name: "💳 Payment Info", value: payment, inline: true }
          )
          .setColor(0x2ECC71)
          .setFooter({ text: "OmniSub Automated Order Management" })
          .setTimestamp();

        await interaction.reply({ embeds: [customerReceiptEmbed], ephemeral: true });

        // Staff Log Channel Order Card (100% English)
        const staffChannel = client.channels.cache.get(CH_ORDERS_LOG);
        if (staffChannel) {
          const staffEmbed = new EmbedBuilder()
            .setTitle(`🚨 New Discord Order: #${orderId}`)
            .setDescription(`Customer <@${interaction.user.id}> (${interaction.user.tag}) placed an order directly via Discord.`)
            .addFields(
              { name: "💎 Product", value: product, inline: true },
              { name: "⏳ Duration", value: duration, inline: true },
              { name: "📱 Contact Info", value: contact, inline: true },
              { name: "💳 Payment & TrxID", value: payment, inline: false },
              { name: "👤 Discord ID", value: `\`${interaction.user.id}\``, inline: true }
            )
            .setColor(0xE67E22)
            .setTimestamp();

          const staffButtons = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId(`btn_deliver_${orderId}`)
              .setLabel("✅ Mark Delivered")
              .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
              .setCustomId(`btn_cancel_${orderId}`)
              .setLabel("❌ Cancel Order")
              .setStyle(ButtonStyle.Danger)
          );

          await staffChannel.send({ embeds: [staffEmbed], components: [staffButtons] });
        }

        // Public Community Updates Channel Feed (100% English)
        const publicChannel = client.channels.cache.get(CH_ORDER_UPDATES);
        if (publicChannel) {
          const publicEmbed = new EmbedBuilder()
            .setTitle("🛍️ New Order Placed!")
            .setDescription(`A customer just ordered **${product}** (${duration}). Thank you for choosing OmniSub!`)
            .setColor(0x3498DB)
            .setFooter({ text: "OmniSub Community Feed" })
            .setTimestamp();

          await publicChannel.send({ embeds: [publicEmbed] });
        }
      }
    }
  } catch (err) {
    console.error("Interaction Error:", err);
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({ content: "A temporary error occurred. Please try again or open a support ticket.", ephemeral: true });
    }
  }
});

client.login(token);
