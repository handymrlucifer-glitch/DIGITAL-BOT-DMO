async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: " Digital bot D-M.O ",
                    mediaType: 1,
                    thumbnailUrl: `Suivre la chaîne 🌴°✞⃟⃢⃟🇲🇪𝐂𝐑𝐄𝐖🌹╔═══❖•𝐃𝐌𝐎【🦠۝ٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜ҈͜͡🕊☼✞ٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜٜ🌴 sur WhatsApp  : https://whatsapp.com/channel/0029Vb8sOp4HAdNXP72H0H28`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;