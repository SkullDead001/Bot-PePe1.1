import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${usedPrefix + command}* Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '✳️ Vídeo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
  ≡ *FG MUSIC*
┌──────────────
▢ 📌  *Título* : ${title}
▢ 📆 *Publicado:* ${publishedTime}
▢ ⌚ *Duración:* ${durationH}
▢ 👀 *Vistas:* ${viewH}
▢ 🔗 *Url:* ${url}
└──────────────
  `.trim(), igfg, thumbnail, 'https://youtube.com/fg98f', 'YouTube', null, null, [
    ['🎶 MP3', `${usedPrefix}yta ${url} yes`],
    ['🎥 MP4', `${usedPrefix}ytv ${url} yes`]
  ], m)
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = ['play', 'playvid', 'play2'] 

handler.exp = 0
handler.limit = false

export default handler

