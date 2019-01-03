window.onload = () => {
   

    // var ctx = Z({
    //     el:'#demo',
    //     type: '2d'
    // })

    c = new Z({
        el:'demo',
        type:'2d'
    });
  
    let n = 5;
    tree(200,20,10,50,60,5);

    let al = new avl();
    al.show();


    // c.polygon({
    //     point:[[0,0],[60,0],[180,120],[80,200]],
    //     color:'#f00'
    // }).stroke().fill({
    //     color:'#0f0'
    // });

    // c.triangle(50,50,50,4).stroke({
    //     color:'#00f'
    // });



}

function tree(x,y,r,len,Angel,deep){
    
    let startPoint = [x,y];
    let _r = r;
    let lineLen = len;
    let _Angel = Angel;
    let _height = lineLen * Math.cos((Math.PI / 180) * _Angel);
    let _width = lineLen * Math.sin((Math.PI / 180) * _Angel);
    let _endPoint = [[startPoint[0] - _width, startPoint[1] + _height],[startPoint[0] + _width, startPoint[1] + _height]]
    deep--;

    c.circle(x,y,_r).close().fill({
        color:'#f00'
    }).stroke({
        color:'#fff'
    })

    if(deep < 1){
        return;
    }

    for(let i = 0; i < _endPoint.length; i ++) {
        c.line({
            start:startPoint,
            lineWidth:3
        }).to({
            end:_endPoint[i]
        }).close().stroke({
            color:'#000'
        })
        tree(_endPoint[i][0],_endPoint[i][1],_r,lineLen,Angel/2,deep);
    }

}