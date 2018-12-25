window.onload = () => {
    // var c = document.getElementById('demo');
    // var ctx = c.getContext('2d');
    // //矩形
    // ctx.fillStyle = '#aaa';
    // ctx.fillRect(0,0,20,20);
    // // ctx.fillStyle = '#f00';
    // // 线
    // ctx.moveTo(20,20);
    // ctx.lineTo(100,100);
    // ctx.stroke();
    // //圆
    // ctx.beginPath();
    // ctx.strokeStyle = '#00f';
    // ctx.arc(100,100,50,0,2*Math.PI);
    // ctx.stroke();
    // //文字
    // ctx.font = '20px Arial';
    // ctx.fillText('hello world',80,80);

    // ctx.strokeStyle = '#000';
    // ctx.beginPath();
    // ctx.moveTo(20,20);
    // ctx.lineTo(60,0);
    // ctx.lineTo(60,80);
    // ctx.lineTo(50,80);
    // ctx.lineTo(20,20);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fillStyle = '#f00';
    // ctx.fill();

    // var ctx = Z({
    //     el:'#demo',
    //     type: '2d'
    // })

    let c = new Z({
        el:'demo',
        type:'2d'
    });
    // c.line({
    //     start:[20,20],
    //     color:'#ff0',
    //     lineWidth:3
    // }).to({
    //     end:[30,60]
    // }).to({
    //     end:[180,200]
    // }).to({
    //     end:[60,60]
    // }).close().stroke().fill();

    c.polygon({
        point:[[0,0],[60,0],[180,120],[80,200]],
        color:'#f00'
    }).stroke().fill({
        color:'#0f0'
    });

    c.triangle(50,50,50,4).stroke({
        color:'#00f'
    });



}