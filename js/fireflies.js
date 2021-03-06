Vue.component('fireflies', {
    template: '<canvas id="fireflies"></canvas>',
    mounted: function () {
        window.FIREFLIES(this.$el);
    }
});

window.FIREFLIES = function (canvas) {
    let con;
    let g;
    let pxs = [];
    let rint = 50;

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    canvas.style.width = WIDTH + 'px';
    canvas.style.height = HEIGHT + 'px';
    con = canvas.getContext('2d');
    for (let i = 0; i < 200; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
    }
    setInterval(draw, rint);


    function draw() {
        con.clearRect(0, 0, WIDTH, HEIGHT);
        for (let i = 0; i < pxs.length; i++) {
            pxs[i].fade();
            pxs[i].move();
            pxs[i].draw();
        }
    }

    function Circle() {
        this.s = {
            ttl: 8000,
            xmax: 5,
            ymax: 2,
            rmax: 10,
            rt: 1,
            xdef: 960,
            ydef: 540,
            xdrift: 4,
            ydrift: 4,
            random: true,
            blink: true,
            color: {
                r: 255,
                g: Math.max(128, 255 * Math.random()),
                b: 128 * Math.random(),
            }
        };

        this.reset = function () {
            this.x = (this.s.random ? WIDTH * Math.random() : this.s.xdef);
            this.y = (this.s.random ? HEIGHT * Math.random() : this.s.ydef);
            this.r = ((this.s.rmax - 1) * Math.random()) + 1;
            this.dx = (Math.random() * this.s.xmax) * (Math.random() < .5 ? -1 : 1);
            this.dy = (Math.random() * this.s.ymax) * (Math.random() < .5 ? -1 : 1);
            this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
            this.rt = Math.random() * this.hl;
            this.s.rt = Math.random() + 1;
            this.stop = Math.random() * .2 + .4;
            this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
            this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        };

        this.fade = function () {
            this.rt += this.s.rt;
        };

        this.draw = function () {
            if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
            else if (this.rt >= this.hl) this.reset();
            let newo = 1 - (this.rt / this.hl);
            con.beginPath();
            con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            con.closePath();
            let cr = this.r * newo;
            g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
            g.addColorStop(0.0, 'rgba('+this.s.color.r+','+this.s.color.g+','+this.s.color.b+',' + newo + ')');
            g.addColorStop(this.stop, 'rgba('+this.s.color.r+','+this.s.color.g+','+this.s.color.b+',' + (newo * .2) + ')');
            g.addColorStop(1.0, 'rgba('+this.s.color.r+','+this.s.color.g+','+this.s.color.b+',0)');
            con.fillStyle = g;
            con.fill();
        };

        this.move = function () {
            this.x += (this.rt / this.hl) * this.dx;
            this.y += (this.rt / this.hl) * this.dy;
            if (this.x > WIDTH || this.x < 0) this.dx *= -1;
            if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
        };

        this.getX = function () {
            return this.x;
        };

        this.getY = function () {
            return this.y;
        };
    }
};