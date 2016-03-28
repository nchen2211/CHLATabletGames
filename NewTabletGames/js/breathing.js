    var stageWidth = 300;
        var stageHeight = 300;

        var stage = new Kinetic.Stage({
            container: 'container',
            width: stageWidth,
            height: stageHeight
        });
        var layer = new Kinetic.Layer();
        stage.add(layer);

        // create a balloon object
        var balloon = new Kinetic.Circle({
            x: 150,
            y: 150,
            radius: 20,
            fill: 'skyblue',
            stroke: 'lightgray',
            strokeWidth: 3,
        });
        balloon.X = 150;
        balloon.Y = 150;
        balloon.VX = 0.50;
        balloon.VY = 0.50;
        balloon.RAF;
        balloon.move = function () {

            // calc new balloon position
            this.X += this.VX;
            this.Y += this.VY;

            // reverse if colliding
            var r = this.getRadius();
            if (this.X < r) {
                this.VX *= -1;
                this.X = r;
            }
            if (this.X > stageWidth - r) {
                this.VX *= -1;
                this.X = stageWidth - r;
            }
            if (this.Y < r) {
                this.VY *= -1;
                this.Y = r;
            }
            if (this.Y > stageHeight - r) {
                this.VY *= -1;
                this.Y = stageHeight - r;
            }

            // set the new balloon position
            this.setPosition(this.X, this.Y);
            layer.draw();

            // request a new animation loop
            var b = this;
            this.RAF = requestAnimationFrame(function () {
                b.move();
            });
        }
        balloon.tw;
        balloon.on("mousedown", function () {
            cancelAnimationFrame(this.RAF);
            this.tw = new Kinetic.Tween({
                node: this,
                duration: 3,
                radius: 100
            });
            this.tw.play();
        });
        balloon.on("mouseup", function () {
            this.tw.pause();
            this.move();
        });

        layer.add(balloon);

        balloon.move();

        layer.draw();
