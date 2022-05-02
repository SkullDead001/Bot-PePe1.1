function handler(m) {
  /*const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)*/
  
  m.reply(`
*≡ OWNER*

▢ Instagram :
  • https://instagram.com/fg98._
▢ WhatsApp :
  • wa.me/
▢ Telegram : 
  • t.me/fgsupp_bot 
  • t.me/fg98ff (canal)
  • t.me/fgawgp (grupo)
▢ Facebook : 
  • https://facebook.com/fg98ff/
  • https://facebook.com/fg98A/
▢ YouTube : 
  • https://youtube.com/fg98f
`) 


}

handler.help = ['Creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
