/**
	 * [canvas lib]
	 * @author zj
	 * @datatime {{2018年12月25日16:39:51}}
*/

function Z(obj) {

    if(!obj.el && !typeof obj.el == 'string') {
        throw "element is not defined"
    }
    if(!this instanceof Z){
        return new Z(obj);
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

    /**
     * 
     * @param {object} obj {
     *      line(0,0)->line(100,20),20s
     *          
     * }
     */
    // animate(obj){
    //     this.ctx.save();
    // },



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

    /**
     * 绘制矩形
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {string} style 
     * @param {string} method 'fill'/'stroke'/'clear'
     */
    rect(x,y,width,height,method = 'stroke',style = ''){
        this.ctx[method + 'style'] = style || this.ctx[method + 'style'];
        this.ctx[method + 'Rect'](x,y,width,height);
        return this;
    },

   
    /**
     * 绘制圆弧
     * @param {number} x 
     * @param {number} y 
     * @param {number} r 
     * @param {number} startAngle 
     * @param {number} endAngle 
     * @param {boolean} anticlockwise  顺时针 false or 逆时针 true
     */
    circle(x,y,r,startAngle = 0,endAngle = 360,anticlockwise = false){
        this.ctx.restore();
        startAngle = (Math.PI / 180) * startAngle;
        endAngle = (Math.PI / 180) * endAngle;
        this.ctx.arc(x,y,r,startAngle,endAngle,anticlockwise);
        this.ctx.save();
        return this;
    },

    
    /**     多边形通用
     * @param {object} obj 
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
        this.ctx.save();
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
        this.ctx.restore();
        this.ctx.fill();
        return this;
    },

    save(){
        this.ctx.save();
        return this;
    },
    /**
     * 
     * @param {object} def default object
     * @param {object} obj param object
     */
    extend(def,obj){
        for(let i in def){
            def[i] = obj[i] || def[i];
        }
    }
}