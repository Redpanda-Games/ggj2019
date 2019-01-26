window.states = {};

window.addEventListener('load', function() {
    function preloadImages(urls, allImagesLoadedCallback){
        let loadedCounter = 0;
        let toBeLoadedNumber = urls.length;
        urls.forEach(function(url){
            preloadImage(url, function(){
                loadedCounter++;
                if(loadedCounter === toBeLoadedNumber){
                    allImagesLoadedCallback();
                }
            });
        });
        function preloadImage(url, anImageLoadedCallback){
            let img = new Image();
            img.onload = anImageLoadedCallback;
            img.src = url;
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

        // char
        'img/chara-continue.gif',
        'img/chara-idle.gif',

        // assets
        'img/game-over.png',
        'img/title.png',
        'img/win.jpg',

        // flags
        'img/flag-de.png',
        'img/flag-gb.png',
    ], function() {
        document.dispatchEvent(new CustomEvent("images-loaded"));
    });
});

document.addEventListener('images-loaded', function() {
    Vue.component('fireflies', {
        template: '<canvas id="fireflies"></canvas>',
        mounted: function () {
            window.FIREFLIES(this.$el);
        }
    });
    Vue.component('slide-img', {
        props: [
            'src',
            'duration',
            'fps',
        ],
        data: {
            interval: null,
        },
        template: '<div class="slide-img"></div>',
        mounted: function () {
            let el = this.$el;
            el.style.backgroundImage = 'url('+this.src+')';
            el.style.backgroundRepeat = 'no-repeat';
            el.style.backgroundSize = 'auto 100vh';
            el.style.backgroundPositionX = '0px';

            let duration = this.duration;
            let fps = this.fps;
            let interval = 1000 / this.fps;
            let containerWidth = this.$el.parentElement.clientWidth;
            let image = new Image();
            let frame = 0;
            let frames = fps * duration;
            let direction = 'left';
            image.onload = function() {
                let imageWidth = image.naturalWidth;
                let distance = imageWidth - containerWidth;
                if (distance > 100) {
                    this.interval = setInterval(renderFrame, interval);
                }
                function renderFrame() {
                    if(frame === frames) {
                        direction = direction == 'left' ? 'right' : 'left';
                        frame = 0;
                    }

                    if(direction == 'right') {
                        el.style.backgroundPositionX = '-' + (1 / frames * (frames - frame)) * distance + 'px';
                    } else {
                        el.style.backgroundPositionX = '-' + (1 / frames * frame) * distance + 'px';
                    }
                    frame++;
                }
            };
            image.src = this.src;
        },
        beforeDestroy: function () {
            clearInterval(this.interval);
        }
    });

    window.game = new Vue({
        el: '#ggj2019-app',
        data: {
            isDead: false,
            isEnd: false,
            stateIndex: null,
            actionIndex: null,
            locale: 'en',
        },
        computed: {
            screen: function() {
                if(this.isEnd) {
                    return 'end';
                } else if(this.isDead) {
                    return 'dead';
                } else if(this.stateIndex === null) {
                    return 'intro';
                } else if(this.stateIndex && this.actionIndex === null) {
                    return 'state';
                } else if(this.stateIndex && this.actionIndex) {
                    return 'success';
                }
            },
            states: function() {
                return window.states[this.locale];
            },
            state: function() {
                return this.states[this.stateIndex];
            },
            action: function () {
                if(this.actionIndex) {
                    return this.state.actions[this.actionIndex];
                }
            },
            endMessage: function () {
                return {
                    de: 'Willkommen zu Hause',
                    en: 'Welcome Home',
                }[this.locale];
            },
        },
        methods: {
            resetGame: function() {
                this.isEnd = false;
                this.isDead = false;
                this.stateIndex = null;
                this.actionIndex = null;
            },
            startGame: function() {
                this.isEnd = false;
                this.isDead = false;
                this.stateIndex = 10;
                this.actionIndex = null;
            },
            doAction: function(event) {
                let target = event.target;
                if(target.nodeName === 'SPAN') {
                    target = target.parentElement;
                }
                this.actionIndex = parseInt(target.dataset.actionId);

                if(!this.action.success) {
                    this.isDead = true;
                }
            },
            nextState: function () {
                let next = this.action.next;

                if(next === true) {
                    this.isEnd = true;
                } else {
                    this.stateIndex = next;
                }

                this.actionIndex = null;
            },
            setLocale: function (event) {
                this.locale = event.target.dataset.locale;
            },
            toggleFullScreen: function(event) {
                if (!document.fullscreenElement) {
                    this.$el.requestFullscreen();
                    event.target.classList.add('active');
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                        event.target.classList.remove('active');
                    }
                }
            }
        }
    });
}, false);