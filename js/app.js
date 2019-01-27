window.intros = {};
window.states = {};
window.audios = {};
window.sfxs = {};

window.addEventListener('load', function () {
    let preloaded = {
        image: false,
        audio: false,
        sfxs: false,
    };

    function allPreloaded() {
        if(preloaded.sfxs &&preloaded.audio && preloaded.image) {
            document.dispatchEvent(new CustomEvent("preloaded"));
        }
    }

    function preloadImages(urls) {
        let loadedCounter = 0;
        let toBeLoadedNumber = urls.length;
        urls.forEach(function (url) {
            preloadImage(url, function () {
                loadedCounter++;
                if (loadedCounter === toBeLoadedNumber) {
                    preloaded.image = true;
                    allPreloaded();
                }
            });
        });

        function preloadImage(url, callback) {
            let img = new Image();
            img.onload = callback;
            img.src = url;
        }
    }

    function preloadAudios(urls) {
        let loadedCounter = 0;
        let toBeLoadedNumber = Object.keys(urls).length;
        Object.keys(urls).forEach(function (key) {
            preloadAudio(urls[key], key, function () {
                loadedCounter++;
                if (loadedCounter === toBeLoadedNumber) {
                    preloaded.audio = true;
                    allPreloaded();
                }
            });
        });

        function preloadAudio(url, key, callback) {
            let audio = new Audio();
            if(!window.SmartPhone.isAny()) {
                audio.oncanplaythrough = callback;
            }
            audio.src = url;
            audio.muted = false;
            window.audios[key] = audio;
            if(window.SmartPhone.isAny()) {
                callback();
            }
        }
    }

    function preloadSfxs(urls) {
        let loadedCounter = 0;
        let toBeLoadedNumber = Object.keys(urls).length;
        Object.keys(urls).forEach(function (key) {
            preloadSfx(urls[key], key, function () {
                loadedCounter++;
                if (loadedCounter === toBeLoadedNumber) {
                    preloaded.sfxs = true;
                    allPreloaded();
                }
            });
        });

        function preloadSfx(url, key, callback) {
            let audio = new Audio();
            if(!window.SmartPhone.isAny()) {
                audio.oncanplaythrough = callback;
            }
            audio.src = url;
            audio.muted = false;
            window.sfxs[key] = audio;
            if(window.SmartPhone.isAny()) {
                callback();
            }
        }
    }

    preloadImages([
        // states
        'img/1-fly.png',
        'img/2-snail.png',
        'img/3-bitey.png',
        'img/4-boobies.png',
        'img/5-glatze.png',
        'img/6-old-grandpa.png',
        'img/7-lady.png',
        'img/8-mario.png',
        'img/9-partyshroom.png',
        'img/30-grandpa.png',

        // char
        'img/chara-continue.gif',
        'img/chara-idle.gif',
        'img/chara-herz.gif',
        'img/chara-afraid.gif',

        // assets
        'img/game-over.png',
        'img/title.png',
        'img/win.jpg',

        // flags
        'img/flag-de.png',
        'img/flag-gb.png',
    ]);

    preloadAudios({
        // screens
        title: 'audio/title.mp3',
        intro: 'audio/intro.mp3',
        win: 'audio/win.mp3',
        dead: 'audio/dead.mp3',
        end: 'audio/end.mp3',

        // states
        state10: 'audio/1-fly.mp3',
        state20: 'audio/2-snail.mp3',
        state30: 'audio/3-bitey.mp3',
        state40: 'audio/4-boobies.mp3',
        state50: 'audio/5-glatze.mp3',
        state60: 'audio/6-old-grandpa.mp3',
        state70: 'audio/7-lady.mp3',
        state80: 'audio/8-mario.mp3',
        state90: 'audio/9-partyshroom.mp3',
        state300: 'audio/30-grandpa.mp3',
    });

    preloadSfxs({
        continue: 'audio/continue.mp3',
        gameOver: 'audio/game-over.mp3',
    });
});

document.addEventListener('preloaded', function () {
    window.game = new Vue({
        el: '#ggj2019-app',
        data: {
            isDead: false,
            isWin: false,
            isWelcome: false,
            isEnd: false,
            introIndex: null,
            stateIndex: null,
            actionIndex: null,
            locale: 'en',
        },
        computed: {
            screen: function () {
                if (this.isWin) {
                    return 'win';
                } else if (this.isWelcome) {
                    return 'welcome';
                } else if (this.isEnd) {
                    return 'end';
                } else if (this.isDead) {
                    return 'dead';
                } else if (this.introIndex === null && this.stateIndex === null) {
                    return 'title';
                } else if (this.introIndex !== null) {
                    return 'intro';
                } else if (this.stateIndex && this.actionIndex === null) {
                    return 'state';
                } else if (this.stateIndex && this.actionIndex) {
                    return 'success';
                }
            },
            intros: function () {
                return window.intros[this.locale];
            },
            intro: function () {
                if (this.introIndex) {
                    return this.intros[this.introIndex];
                }
            },
            states: function () {
                return window.states[this.locale];
            },
            state: function () {
                return this.states[this.stateIndex];
            },
            action: function () {
                if (this.actionIndex) {
                    return this.state.actions[this.actionIndex];
                }
            },
            transitionIntroKey: function () {
                return 'intro-' + this.introIndex;
            },
            transitionStateKey: function () {
                return 'state-' + this.stateIndex;
            },
            transitionSuccessKey: function () {
                return 'success-' + this.stateIndex;
            },
            gameOverTitle: function () {
                return {
                    de: 'die Reise geht weiter',
                    en: 'the journey continues',
                }[this.locale];
            },
            winMessage: function () {
                return {
                    de: 'Du hast den Weg zurück gefunden! Endlich betrittst du die lang ersehnte Lichtung und läufst zu deiner Familie. Sie empfängt Dich mit offenen Armen. Dir zu Ehren wird eine Gartenparty veranstaltet.',
                    en: 'You found your way back! Finally you enter the long-awaited clearing and run to your family. It welcomes you with open arms. A garden party is held in your honour.',
                }[this.locale];
            },
            welcomeTitle: function () {
                return {
                    de: 'Willkommen zu Hause',
                    en: 'Welcome Home',
                }[this.locale];
            },
            endMessage: function () {
                return {
                    de: 'Danke für deine Zeit!',
                    en: 'Thank you for playing!',
                }[this.locale];
            },
        },
        methods: {
            resetGame: function () {
                this.isWin = false;
                this.isWelcome = false;
                this.isEnd = false;
                this.isDead = false;
                this.introIndex = null;
                this.stateIndex = null;
                this.actionIndex = null;
            },
            toWelcome: function () {
                this.resetGame();
                this.isWelcome = true;
            },
            toEnd: function () {
                this.resetGame();
                this.isEnd = true;
            },
            toSuspiciousGrandpa: function () {
                this.resetGame();
                this.stateIndex = 300;
            },
            startIntro: function () {
                this.resetGame();
                this.introIndex = 1;
            },
            nextIntro: function () {
                this.introIndex++;
                if (typeof this.intros[this.introIndex] === 'undefined') {
                    this.startGame();
                }
            },
            startGame: function () {
                this.resetGame();
                this.stateIndex = 10;
            },
            doAction: function (event) {
                let target = event.target;
                if (target.nodeName === 'SPAN') {
                    target = target.parentElement;
                }
                this.actionIndex = parseInt(target.dataset.actionId);

                if (!this.action.success) {
                    this.isDead = true;
                    window.sfxs.gameOver.play();
                } else if(this.action.next === null) {
                    this.toEnd();
                } else {
                    window.sfxs.continue.play();
                }
            },
            nextState: function () {
                let next = this.action.next;

                if (next === true) {
                    this.isWin = true;
                } else {
                    this.stateIndex = next;
                }

                this.actionIndex = null;
            },
            setLocale: function (event) {
                this.locale = event.target.dataset.locale;
            },
            toggleFullScreen: function (event) {
                if (!document.fullscreenElement) {
                    this.$el.requestFullscreen();
                    event.target.classList.add('active');
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                        event.target.classList.remove('active');
                    }
                }
            },
            stopAllAudioExcept: function (toPlay) {
                Object.keys(window.audios).forEach(function(key) {
                    if(key !== toPlay) {
                        let audio = window.audios[key];
                        audio.pause();
                        audio.currentTime = 0;
                    }
                });
            },
            toggleMute: function (event) {
                Object.values(window.audios).forEach(function(audio) {
                    audio.muted = !audio.muted;
                });
                Object.values(window.sfxs).forEach(function(audio) {
                    audio.muted = !audio.muted;
                });
                event.target.classList.toggle('active');
            }
        },
        watch: {
            screen: function (newValue, oldValue) {
                if(newValue === 'title') {
                    this.stopAllAudioExcept('title');
                    window.audios.title.loop = true;
                    window.audios.title.play();
                } else if(newValue === 'intro') {
                    this.stopAllAudioExcept('intro');
                    window.audios.intro.loop = true;
                    window.audios.intro.play();
                } else if(newValue === 'state' || (oldValue === 'state' && newValue === 'success')) {
                    let key = 'state' + this.stateIndex;
                    this.stopAllAudioExcept(key);
                    window.audios[key].loop = true;
                    window.audios[key].play();
                } else if(newValue === 'win' || (oldValue === 'win' && newValue === 'welcome')) {
                    this.stopAllAudioExcept('win');
                    window.audios.win.loop = true;
                    window.audios.win.play();
                } else if(newValue === 'dead') {
                    this.stopAllAudioExcept('dead');
                    window.audios.dead.loop = true;
                    window.audios.dead.play();
                } else if(newValue === 'end') {
                    this.stopAllAudioExcept('end');
                    window.audios.end.loop = true;
                    window.audios.end.play();
                }
            }
        },
        mounted: function () {
            window.audios.title.loop = true;
            window.audios.title.play();
        }
    });
}, false);