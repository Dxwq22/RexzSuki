// RexzCase.js
import { proto } from "@whiskeysockets/baileys";
import chalk from "chalk";
import fs from "fs";

export default async function RexzSuki(sock, msgUpdate) {
  try {
    if (!msgUpdate.messages?.length) return;
    const m = msgUpdate.messages[0];
    if (!m.message?.conversation) return;

    const text = m.message.conversation;

    const prefix = ".";
    if (!text.startsWith(prefix)) return;

    const command = text.slice(prefix.length).trim().toLowerCase();
    
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Ponsel
END:VCARD`;

    const fakeMenuMetaAiQuoted = {
      key: {
        fromMe: false,
        participant: "13135550002@s.whatsapp.net",
        remoteJid: "status@broadcast",
        id: "XezstrysBot-003"
      },
      message: {
        contactMessage: {
          displayName: "💫 𝗩𝗜𝗣",
          vcard: vcard
        }
      },
      pushName: "Xezstrys Bot"
    };
    
    switch (command) {

case "test": {
  const allowedUsers = [
    "241442157031534@lid"
  ];

  const sender = m.key.participant || m.key.remoteJid;
  const userCommand = command || "unknown";
  const userTime = new Date().toLocaleTimeString("id-ID", { hour12: false });
  const start = Date.now();
  const end = Date.now();
  const speed = end - start;

  console.log(
    chalk.white("\n") + "┏╾" + "<💭>" +
    chalk.bgGreen.black("[ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ]") + " " +
    chalk.cyan.bold(`.${userCommand}`) + " <⏰>" +
    chalk.bgGray.white.bold(`[${userTime}]`) + " " +
    chalk.white(" ") + " " +
    chalk.white("\n") + "┣" + 
    chalk.yellow.bold(`[ ${sender} ]`) + " " + "©𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶" +
    chalk.white("\n") + "┗╾≫" + " " +
    chalk.bgRed.black("[️々]") + " " +
    chalk.white.bold("Sending with out message . . .") + " "
  );

  if (!allowedUsers.includes(sender)) {
    await sock.sendMessage(
      m.key.remoteJid,
      {
        text: "*⁉️Lu Ga ada akses buat jalanin perintah bot*",
      },
      { quoted: fakeMenuMetaAiQuoted }
    );
    break;
  }

  const thumbPath = "./rexz.webp";
  const thumbExists = fs.existsSync(thumbPath);
  const thumbBuffer = thumbExists ? fs.readFileSync(thumbPath) : null;
  const text = `✅ *Test berhasil!*\n> 📍 *Ping* : ${speed}ms`;

  const suki = {
    title: "© 𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶 𝗕𝗼𝘁",
    body: "t.me",
    thumbnail: thumbBuffer,
    sourceUrl: "",
    mediaType: 1,
    renderLargerThumbnail: false,
  };

  const fakeDoc = Buffer.alloc(100 * 100 * 100, "㑒 `𝐅𝐮𝐜𝐤𝐑𝐞𝐱𝐳 || 𝐒𝐢𝐠𝐦𝐚 𝐁𝐨𝐲𝐬 🥵");

  const mentions = ['status@broadcast'];

  await sock.sendMessage(m.key.remoteJid, { react: { text: "⏳", key: m.key } });

  await sock.sendMessage(
    m.key.remoteJid,
    {
      document: fakeDoc,
      mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      fileName: "🕊️ ©𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶",
      caption: text,
      contextInfo: { 
        externalAdReply: suki,
        mentionedJid: mentions,
        ai: true,
        forwardingScore: 1,
        isForwarded: true,
        businessMessageForwardInfo: { businessOwnerJid: "0@s.whatsapp.net" },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363297418923556@newsletter",
          newsletterName: "🕊️𝐑𝐞𝐱𝐳𝐒𝐮𝐤𝐢 𝐨𝐟𝐟𝐢𝐜𝐢𝐚𝐥",
          serverMessageId: null
        }
      },
    },
    { quoted: fakeMenuMetaAiQuoted }
  );

  await sock.sendMessage(m.key.remoteJid, { react: { text: "✅", key: m.key } });

  const audioPath = "./rexz.opus";
  if (fs.existsSync(audioPath)) {
    const audioBuffer = fs.readFileSync(audioPath);
    await sock.sendMessage(
      m.key.remoteJid,
      {
        audio: audioBuffer,
        mimetype: "audio/ogg; codecs=opus",
        ptt: true
      },
    );
  }

  break;
}

      default:
        console.log(`*Command "${command}" belum dibuat*`);
        break;
    }
  } catch (err) {
    console.error("⚠️ Error di RexzSuki.js :", err);
  }
}