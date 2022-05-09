
import axios from 'axios'

let handler = async(m, { conn }) => {
	
	let asu = ["asupan", "asupan-la"]
    let asufg = asu[Math.floor(Math.random() * asu.length)]
	
	let asupan = (await axios.get(`https://raw.githubusercontent.com/dylux-fg/img-fg/main/random/${asufg}.json`)).data
  
await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '✅ Aquí tiene', m)
}
handler.help = ['asupan']
handler.tags = ['premium']
handler.command = ['asupan']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
