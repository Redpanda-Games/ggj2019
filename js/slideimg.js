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
        el.style.backgroundImage = 'url(' + this.src + ')';
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
        image.onload = function () {
            let imageWidth = image.naturalWidth;
            let distance = imageWidth - containerWidth;
            if (distance > 100) {
                this.interval = setInterval(renderFrame, interval);
            }

            function renderFrame() {
                if (frame === frames) {
                    direction = direction == 'left' ? 'right' : 'left';
                    frame = 0;
                }

                if (direction == 'right') {
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
