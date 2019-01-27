window.states.en = {
    10: {
        situation: "A fly just landed on the mushroom's hat. \"Hello little friend!\" He calls delighted.",
        gameOver: "That wasn't nice, the fly hadn't done anything bad. The mushroom ignores you. You die alone.",
        image: "img/1-fly.png",
        actions: {
            1: {
                id: 1,
                button: "Make a fly noise",
                success: true,
                message: "The fly follows you as a friend. The mushroom is happy about such an animal friend and shows you the way.",
                next: 20,
            },
            2: {
                id: 2,
                button: "Scare the fly away",
                success: false,
            },
        }
    },
    20: {
        situation: "You see a disgusted fungus that's beside itself. The snail really slimes it up!",
        gameOver: "The salt etches a hole in the snail and steams terribly. The fungus finds this even more disgusting than the slimy snail. He's not helping you. You are lost.",
        image: "img/2-snail.png",
        actions: {
            1: {
                id: 1,
                button: "Lay a trail with snail food that leads away from the mushroom",
                success: true,
                message: "Together you watch the sticky snail crawl away. That looks pretty funny. The mushroom helps you.",
                next: 30,
            },
            2: {
                id: 2,
                button: "Sprinkle some salt on the snail",
                success: false,
            },
        }
    },
    30: {
        situation: "You see a beaked mushroom with a strong jaw.",
        gameOver: "He bites off your handle and you die on the spot.",
        image: "img/3-bitey.png",
        actions: {
            1: {
                id: 1,
                button: "Offer him a walnut",
                success: true,
                message: "He snaps at the walnut and eats it with relish along with its shell. \"They crack so beautifully!\" He'll gladly show you the way.",
                next: 40,
            },
            2: {
                id: 2,
                button: "Poke him",
                success: false,
            },
        }
    },
    40: {
        situation: "You see that pretty Babsi, she's winking at you.",
        gameOver: "You shouldn't have done that. She feels offended and ignores you.",
        image: "img/4-boobies.png",
        actions: {
            1: {
                id: 1,
                button: "Give her a compliment",
                success: true,
                message: "She makes another one of her seductive blindfolds. This time in the direction of your home clearing.",
                next: 50,
            },
            2: {
                id: 2,
                button: "Pick one of her front flowers",
                success: false,
            },
        }
    },
    50: {
        situation: "You see the impressive Becky.",
        gameOver: "She doesn't find it funny and just leaves you standing.",
        image: "img/5-glatze.png",
        actions: {
            1: {
                id: 1,
                button: "Make a joke about baldness",
                success: false,
            },
            2: {
                id: 2,
                button: "Give her your unused lipstick",
                success: true,
                message: "She refreshes her lip red and chats with you about your home.",
                next: 60,
            },
        }
    },
    60: {
        situation: "This experienced veteran has aged in honor. He looks at you suspiciously.",
        gameOver: "He doesn't even breathe and lets you down.",
        image: "img/6-old-grandpa.png",
        actions: {
            1: {
                id: 1,
                button: "Earn his trust with a dirty joke you picked up in your clearing",
                success: true,
                message: "He lets himself down to a smile and remembers his old friend Herbert. He inquires how he is doing and explains in detail.",
                next: 70,
            },
            2: {
                id: 2,
                button: "Tell him a kid joke",
                success: false,
            },
        }
    },
    70: {
        situation: "This lady is an eye-catcher. She has adorned herself with a few ferns.",
        gameOver: "She turns away and you're on your own.",
        image: "img/7-lady.png",
        actions: {
            1: {
                id: 1,
                button: "Ask her the way",
                success: true,
                message: "She lets herself down and purrs the direction of her homeland into your ear.",
                next: 80,
            },
            2: {
                id: 2,
                button: "Try to look under her umbrella",
                success: false,
            },
        }
    },
    80: {
        situation: "This little friend is especially hard-working. He also likes to play.",
        gameOver: "He crushes and you're sticky and alone.",
        image: "img/8-mario.png",
        actions: {
            1: {
                id: 1,
                button: "Jump on him",
                success: false,
            },
            2: {
                id: 2,
                button: "Tell him about your favorite Gameboy game",
                success: true,
                message: "He knows some of the games and wonders about certain similarities. He likes to tell you the way to your clearing.",
                next: 90,
            },
        }
    },
    90: {
        situation: "This funny fellow likes to party and just comes from a rave. Already from afar you can hear him singing.",
        gameOver: "You're in party mode and you're forgetting time. You don't come home like that.",
        image: "img/9-partyshroom.png",
        actions: {
            1: {
                id: 1,
                button: "Take a bite out of him",
                success: false,
            },
            2: {
                id: 2,
                button: "Ask him something about expansion of consciousness",
                success: true,
                message: "You guys start talking and he even knows Grandma Shroomson. She is by far the smartest in herbology.",
                next: 100,
            },
        }
    },
    100: {
        situation: "What did you do? The hotel owner is trembling with rage. He just wanted some new windows... But the tasty mushroom meat was too tempting for the two worker caterpillars.",
        gameOver: "The caterpillars are now even hungrier and devour everything and everyone.",
        image: "img/10-hotel.png",
        actions: {
            1: {
                id: 1,
                button: "Feed one of the caterpillars",
                success: false,
            },
            2: {
                id: 2,
                button: "Ask to speak to the foreman",
                success: true,
                message: "The foreman calls back the extra caterpillars. The hotel owner is delighted and gives you a card.",
                next: true,
            },
        }
    },
    300: {
        situation: "Only great-grandfather Shroomson is a little confused. Shouldn't you be far away from your roots to expand the mushroom network?",
        gameOver: null,
        image: "img/30-grandpa.png",
        actions: {
            1: {
                id: 1,
                button: "Run fast away",
                success: true,
                next: null,
            },
            2: {
                id: 2,
                button: "Hide yourself",
                success: true,
                next: null,
            },
        }
    },
};