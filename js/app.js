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
            isSuccess: false,
            stateIndex: null,
            actionIndex: null,
            states: {
                10: {
                    situation: "A fly just landed on the mushroom's hat. \"Hello little friend!\" He calls delighted.",
                    image: "img/state_10.jpg",
                    actions: {
                        1: {
                            button: "Make a fly noise",
                            success: true,
                            message: "The fly follows you as a friend. The mushroom is happy about such an animal friend and shows you the way.",
                            next: 20,
                        },
                        2: {
                            button: "Make a fly noise",
                            success: false,
                        },
                    }
                }
            }
        },
        computed: {
            screen: function() {
                if(this.isDead) {
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
            doAction: function(event) {
                this.actionIndex = parseInt(event.target.dataset.actionId);

                if(typeof this.action.success === 'undefined' || !this.action.success) {
                    this.isDead = true;
                } else {
                    this.isSuccess = true;
                }
            }
        }
    });
}, false);