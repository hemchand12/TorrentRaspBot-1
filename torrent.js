var shell = require('shelljs')

async function torrent(ctx,name) {
    try{

        //const { stdout, stderr, code } = await shell.exec('transmission-remote -a ', { silent: true }, { async: true })

    }catch(error){
        console.log(error)
        ctx.reply('An error has ocurred starting Transmission.')
    }
}

module.exports = torrent