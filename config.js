module.exports = {
    app: {
        token: 'ODU3MTc4OTkwMzQyNDM4OTEz.YNL0JA.5KLl-OcBZLM2lx2P7dNUF_6br_o',
        px: '>',
        playing: 'Music In HighZone.❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
