window.states.en = {
    10: {
        situation: "A fly just landed on the mushroom's hat. \"Hello little friend!\" He calls delighted.",
        gameOver: "That wasn't nice, the fly hadn't done anything bad. The mushroom ignores you. You die alone.",
        image: "img/1-fly.jpg",
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
                next: true,
            },
            2: {
                id: 2,
                button: "Sprinkle some salt on the snail",
                success: false,
            },
        }
    },
};