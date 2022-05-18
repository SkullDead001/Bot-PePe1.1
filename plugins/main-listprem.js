let handler = async (m, { conn }) => {
	
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `≡ *PREMIUM*` + `\n` + prem.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium'] 

export default handler
