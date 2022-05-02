import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '✳️ Que quieres que busque en YouTube?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
📌 *${v.title}* (${v.url})
⌚ Duración: ${v.durationH}
⏲️ Subido ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) suscriptores
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['ytsearch <busca>'] 
handler.tags = ['tools']
handler.command = ['ytsearch'] 

export default handler
