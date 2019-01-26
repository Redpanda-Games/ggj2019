window.states.de = {
    10: {
        situation: "Gerade ist eine Fliege auf dem Hut des Pilzes gelandet. \"Hallo Freundchen!\" Ruft er entzückt.",
        gameOver: "Das war nicht nett, die Fliege hatte nichts böses getan. Der Pilz ignoriert Dich. Du stirbst allein.",
        image: "img/1-fly.jpg",
        actions: {
            1: {
                id: 1,
                button: "Mach ein Fliegengeräusch",
                success: true,
                message: "Die Fliege folgt Dir als Freund. Der Pilz freut sich über so einen Tierfreund und weist Dir den Weg.",
                next: 20,
            },
            2: {
                id: 2,
                button: "Verscheuche die Fliege",
                success: false,
            },
        }
    },
    20: {
        situation: "Du siehst einen angeekelten Pilz, der außer sich ist. Die Schnecke verschleimt ihn regelrecht.",
        gameOver: "Das Salz ätzt ein Loch in die Schnecke und dampft fürchterlich. Der Pilz findet das noch ekliger als die schleimige Schnecke. Er hilft Dir nicht. Du bist verloren.",
        image: "img/2-snail.png",
        actions: {
            1: {
                id: 1,
                button: "Lege eine Spur mit Schneckennahrung, die vom Pilz weg führt",
                success: true,
                message: "Gemeinsam schaut ihr der klebrigen Schnecke zu, wie sie davon kriecht. Das sieht ziemlich lustig aus. Der Pilz hilft Dir weiter.",
                next: true,
            },
            2: {
                id: 2,
                button: "Streu etwas Salz auf die Schnecke",
                success: false,
            },
        }
    },
};