
/**
	 * [canvas lib]
	 * @author zj
	 * @datatime {{2018年12月25日16:39:51}}
*/

function Z(obj) {

    if(!obj.el && !typeof obj.el == 'string') {
        throw "element is not defined"
    }
    let def = {
        el: '',
        type: '2d'
    }
    for(let i in def) {
        this[i] = obj[i] || def[i];
    }
    return this.init();
}

Z.prototype = {
    constructor: Z,
    init(){
        this.dom = document.getElementById(this.el);
        if(!this.dom.getContext) {
            return;
        }
        this.ctx = this.dom.getContext(this.type);
        return this;
    },

    /** 直角三角形接口
     * 
     * @param {*} obj = (x,y,length,n)
     *      n为象限
     * 
     */
    triangle(x,y,length,n = 1){
        switch(n){
            case 1:{
                this.polygon({
                    point: [[x,y],[x + length,y],[x,y - length]]
                });
                break;
            }
            case 2:{
                this.polygon({
                    point: [[x,y],[x - length,y],[x,y - length]]
                });
                break;
            }
            case 3:{
                this.polygon({
                    point: [[x,y],[x - length,y],[x,y + length]]
                });
                break;
            }
            case 4:{
                this.polygon({
                    point: [[x,y],[x + length,y],[x,y + length]]
                });
                break;
            }
        }
        return this;
    },

    
    /**     多边形通用
     * @param {*} obj 
     * {
     *     point:[
     *          [],[],[]
     *      ],
     *      color:'#000',
     *      lineWidth: 1
     * }
     */
    polygon(obj){
        if(!obj.point && !obj.point.length){
            return;
        }
        let def = {
            point: [],
            color: '#000',
            lineWidth:1
        }
        this.extend(def,obj);
        this.line({
            start:def.point[0],
            color:def.color,
            lineWidth: def.lineWidth
        })
        for(let i = 1; i < def.point.length; i ++) {
            this.to({
                end: def.point[i]
            })
        }
        return this.close();
    },

    /** 
     * 绘制线段
     * obj = {
     *  start:[0,0], 
     *  lineWidth: 20, def 1
     *  color:'', def #000
     * }
     */
    line(obj) {
        if(!obj.start && !typeof obj.start == 'array'){
            throw 'start and end point is not defined'
        }
        let def = {
            start:[0,0],
            lineWidth:1,
            color:'#000'
        }
        this.extend(def,obj);
        this.ctx.beginPath();
        this.ctx.moveTo(def.start[0],def.start[1]); 
        this.ctx.lineWidth = def.lineWidth;
        this.ctx.strokeStyle = def.color;
        return this;
    },  
    /**
     * 绘制路径
     * @param {obj} {
     *      end: [n,m]
     * } 
     */
    to(obj){
        if(!obj.end && !typeof obj.end == 'array'){
            return;
        }
        this.ctx.restore();
        this.ctx.lineTo(obj.end[0],obj.end[1]);
        this.ctx.save();
        return this;
    },
    close(){
        this.ctx.restore();
        this.ctx.closePath();
        return this;
    },
    // 描边
    stroke(obj = ''){
        this.ctx.save();
        if(obj && (typeof obj.color == 'string' || typeof obj.lineWidth == 'number')){
            this.ctx.strokeStyle = typeof obj.color == 'undefined'? this.ctx.strokeStyle: obj.color;
            this.ctx.lineWidth = typeof obj.lineWidth == 'undefined'? this.ctx.lineWidth: obj.lineWidth;
        }
        this.ctx.stroke();
        this.ctx.restore();
        return this;
    },
    // 填充
    fill(obj = ''){
        if(obj || !typeof obj.color == 'undefined') {
            this.ctx.fillStyle = obj.color;
        }
        this.ctx.fill();
        return this;
    },
    extend(def,obj){
        for(let i in def){
            def[i] = obj[i] || def[i];
        }
    }
}