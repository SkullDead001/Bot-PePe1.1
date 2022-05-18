let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `✳️ Menciona a la persona`
    if (global.prems.includes(who.split`@`[0])) throw '✳️ El usuario Mensionado Ya es premium'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `*▢ PREMIUM*\n\n@${who.split`@`[0]} ahora te conviertes en un usuario premium`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem @user']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 
handler.group = true
handler.rowner = true

export default handler
