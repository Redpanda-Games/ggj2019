window.states.de = {
    10: {
        situation: "Gerade ist eine Fliege auf dem Hut des Pilzes gelandet. \"Hallo Freundchen!\" Ruft er entzückt.",
        gameOver: "Das war nicht nett, die Fliege hatte nichts böses getan. Der Pilz ignoriert Dich. Du stirbst allein.",
        image: "img/1-fly.png",
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
                next: 30,
            },
            2: {
                id: 2,
                button: "Streu etwas Salz auf die Schnecke",
                success: false,
            },
        }
    },
    30: {
        situation: "Du siehst einen Schnabelpilz mit kräftigem Kiefer.",
        gameOver: "Er beißt Dir den Stiel ab und Du verendest an Ort und Stelle.",
        image: "img/3-bitey.png",
        actions: {
            1: {
                id: 1,
                button: "Biete ihm eine Walnuss an",
                success: true,
                message: "Er schnappt nach der Walnuss und isst sie genüsslich mitsamt der Schale. “Die knacken so schön!” Gern zeigt er Dir den Weg.",
                next: 40,
            },
            2: {
                id: 2,
                button: "Stupse ihn an",
                success: false,
            },
        }
    },
    40: {
        situation: "Du siehst die hübsche Babsi, sie zwinkert Dir zu.",
        gameOver: "Das hättest Du nicht tun sollen. Sie fühlt sich gekränkt und ignoriert Dich.",
        image: "img/4-boobies.png",
        actions: {
            1: {
                id: 1,
                button: "Mach ihr ein Kompliment",
                success: true,
                message: "Sie macht einen weiteren ihrer verführerischen Augenaufschläge. Diesmal in die Richtung Deiner heimischen Lichtung.",
                next: 50,
            },
            2: {
                id: 2,
                button: "Pflücke eine ihrer Vorder-Blumen",
                success: false,
            },
        }
    },
    50: {
        situation: "Du siehst die eindrucksvolle Becky.",
        gameOver: "Sie findet ihn nicht lustig und lässt Dich einfach stehen.",
        image: "img/5-glatze.png",
        actions: {
            1: {
                id: 1,
                button: "Reiß einen Witz über Glatzen",
                success: false,
            },
            2: {
                id: 2,
                button: "Gib ihr Deinen unbenutzten Lippenstift",
                success: true,
                message: "Sie frischt ihr Lippenrot auf und plaudert mit Dir über Dein Heim.",
                next: 60,
            },
        }
    },
    60: {
        situation: "Dieser erfahrene Veteran ist in Ehre gealtert. Er schaut Dich misstrauisch an.",
        gameOver: "Er schnauft nicht mal und lässt Dich links liegen.",
        image: "img/6-old-grandpa.png",
        actions: {
            1: {
                id: 1,
                button: "Erringe sein Vertrauen mit einem schmutzigen Witz, den Du in Deiner Lichtung aufgeschnappt hast",
                success: true,
                message: "Er lässt sich zu einem Schmunzeln herab und erinnert sich an seinen alten Freund Herbert. Er erkundigt sich, wie es ihm geht und erklärt detailreich.",
                next: 70,
            },
            2: {
                id: 2,
                button: "Erzähl ihm einen Kinderwitz",
                success: false,
            },
        }
    },
    70: {
        situation: "Diese Dame ist ein Blickfang. Sie hat sich mit ein paar Farnen geschmückt.",
        gameOver: "Sie dreht sich weg und Du bist auf Dich allein gestellt.",
        image: "img/7-lady.png",
        actions: {
            1: {
                id: 1,
                button: "Frag sie nach dem Weg",
                success: true,
                message: "Sie lässt sich herab und säuselt Dir die Richtung der Heimat ins Ohr.",
                next: 80,
            },
            2: {
                id: 2,
                button: "Versuch ihr unter den Schirm zu schauen",
                success: false,
            },
        }
    },
    80: {
        situation: "Dieser kleine Freund ist besonders fleißig. Außerdem spielt er gern.",
        gameOver: "Er zermatscht und Du bist klebrig und allein.",
        image: "img/8-mario.png",
        actions: {
            1: {
                id: 1,
                button: "Spring auf ihn",
                success: false,
            },
            2: {
                id: 2,
                button: "Erzähl ihm von Deinem Lieblings Gameboy Spiel",
                success: true,
                message: "Er kennt einige der Spiele und wundert sich über gewisse Ähnlichkeiten. Den Weg zu Deiner Lichtung sagt er Dir gern.",
                next: true,
            },
        }
    },
};