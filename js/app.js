Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

window.addEventListener('load', function() {
    window.game = new Vue({
        el: '#ggj2019-app',
        data: {
            isDead: false,
            isEnd: false,
            stateIndex: null,
            actionIndex: null,
            states: {
                10: {
                    situation: "A fly just landed on the mushroom's hat. \"Hello little friend!\" He calls delighted.",
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
            }
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
            state: function() {
                return this.states[this.stateIndex];
            },
            action: function () {
                if(this.actionIndex) {
                    return this.state.actions[this.actionIndex];
                }
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
        }
    });
}, false);