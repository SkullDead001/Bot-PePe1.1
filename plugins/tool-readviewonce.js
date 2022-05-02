let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'where\'s message?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '✳️ Eso no es un mensaje de viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '✳️ no puedo abrir el mensaje'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readvo']
handler.tags = ['tools']

handler.command = ['readviewonce', 'read', 'ver', 'readvo'] 

export default handler
