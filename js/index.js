
window.onload = () => {
    let al = null;
    while(1){
        al = new avl();
        if (al.isAvl(al.startPoint)) {
            break;
        }
    }

    let startPoint = al.startPoint;

    stage = new Konva.Stage({
        container: 'container',
        width: 800,
        height: 600
    });

    // 生成二叉树
    tree(startPoint, 400, 20, 20, 120, Math.PI * 3 / 4);
    let layer = stage.children[1];
    let b = layer.children[0];
    let c = layer.children[1];

    // 一个layer中的group的动画
    var anim0 = new Konva.Animation(function(frame) {
        b.setX(100 * Math.sin(frame.time * 2 * Math.PI / 2000) + 200);
    }, layer);
    var anim1 = new Konva.Animation(function(frame) {
        c.setX(100 * Math.sin(frame.time * 2 * Math.PI / 2000) + 200);
    }, layer);

    // anim0.start();
    // anim1.start();
}
// fx 1 左节点   2 右节点
function tree(point,x,y,r,l,angle = 0,fx = 0){
    let tempLayer = new Konva.Layer();
    //  节点
    let iCircle = new Konva.Circle({
        x: x,
        y: y,
        radius: r,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        draggable: true
    });

    let iText = new Konva.Text({
        x: x - 8,
        y: y - 5,
        text: point.value,
        fontSize: 20,
        fill: 'black'
    })

    if (point.parent && fx) {
        //  节点之间的直线
        if (fx == 1) {
            var iLine = new Konva.Line({
                points: [x + r * Math.sin(angle), y - r * Math.cos(angle), x + l * Math.sin(angle), y - l * Math.cos(angle)],
                stroke: 'red',
                strokeWidth: 1,
                lineCap: 'round',
                lineJoin: 'round'
            });
        }else if (fx == 2) {
            var iLine = new Konva.Line({
                points: [x + r * Math.sin(angle), y - r * Math.cos(angle), x - l * Math.sin(angle), y - l * Math.cos(angle)],
                stroke: 'red',
                strokeWidth: 1,
                lineCap: 'round',
                lineJoin: 'round'
            });
        }
    }



    tempLayer.add(iCircle);
    tempLayer.add(iText);
    if (typeof iLine != 'undefined') {
        tempLayer.add(iLine);
    }
    stage.add(tempLayer);

    point.left && tree(point.left, x - l * Math.sin(angle / 2), y + l * Math.cos(angle / 2), r, l * 3 / 4, angle / 2, 1);
    point.right && tree(point.right, x + l * Math.sin(angle / 2), y + l * Math.cos(angle / 2), r, l * 3 / 4, angle / 2, 2);
}
