<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
    </template>
    <script>
        export default { 
            name: 'wave', 
            props:['type'],
            data () { 
                return { 
                    canvas:'',
                    canvasWidth: 300,
                    canvasHeight: 300,
                    rangeValue: 60,
                    nowRange:0,
                    startX:0, 
                    wave1:{
                        points:[],   
                        isDrawContainer: false,
                        waveWidth: 0.055, // 波浪宽度,数越小越宽
                        waveHeight: 6, // 波浪高度,数越大越高
                        xOffset: 0, // 初始偏移
                        speed: 0.04, // 速度
                        color:'#A0563B' //波浪颜色
                    },
                    wave2:{
                        points:[],  
                        isDrawContainer: false,
                        waveWidth: 0.04, // 波浪宽度,数越小越宽
                        waveHeight: 4, // 波浪高度,数越大越高
                        xOffset: 0, // 初始偏移
                        speed: 0.04, // 速度
                        color:'#F39C6B' //波浪颜色
                    },

    
                } 
            },
            mounted(){
                const canvas = this.$refs.canvas;
                this.canvas = canvas;
                canvas.height = 300;
                canvas.width = 300;
                this.draw();
            },
            methods: {
                draw(){
                    const ctx = this.canvas.getContext('2d');
                    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                    if(!this.isDrawContainer){
                        if(this.type =="circle"){
                            this.drawCircle(ctx);
                        }else{
                            this.isDrawContainer = true;
                        }
                    }
                    if (this.nowRange <= this.rangeValue) {
                        this.nowRange += 1;
                    }
                    if (this.nowRange > this.rangeValue) {
                        this.nowRange -= 1;
                    }
                    this.update(this.wave1);
                    this.drawSin(ctx,this.wave1);
                    this.update(this.wave2);
                    this.drawSin(ctx,this.wave2);
                    window.requestAnimationFrame(this.draw);
                },
                drawSin(ctx,wave) {
                    ctx.save();
                    const points = wave.points;
                    ctx.beginPath();
                    for (let i = 0; i < points.length; i += 1) {
                        const point = points[i];
                        ctx.lineTo(point[0], point[1]);
                    }
                    ctx.lineTo(this.canvasWidth, this.canvasHeight);
                    ctx.lineTo(this.startX, this.canvasHeight);
                    ctx.fillStyle = wave.color;
                    ctx.fill();
                    ctx.restore();
                },
                update(wave) {
                    wave.points = [];
                    const {
                         waveHeight, waveWidth, xOffset,
                    } = wave;
                    const canvasWidth = this.canvasWidth, 
                          canvasHeight = this.canvasHeight,
                          startX = this.startX;
                    let nowRange = this.nowRange;
                    for (let x = startX; x < startX + canvasWidth; x += 1) {
                        const y = Math.sin(((startX + x) * waveWidth) + xOffset);
                        const dY = canvasHeight * (1 - (nowRange / 100));
                        wave.points.push([x, dY + (y * waveHeight)]);
                    }
                    wave.xOffset += wave.speed;
                },
                drawCircle(ctx) {
                    const r = this.canvasWidth / 2;
                    const lineWidth = 4;
                    const cR = r - (lineWidth);
                    ctx.lineWidth = lineWidth;
                    ctx.beginPath();
                    ctx.arc(r, r, cR, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
                    ctx.stroke();
                    ctx.clip();
                    this.isDrawContainer = true;
                },
            } 
        } 
    </script>
    <style>
    
    </style>
    
    