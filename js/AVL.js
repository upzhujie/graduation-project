
function avl(n = 2){
    if(n < 0 && n > 10){
        return;
    }
    
    let newValue = num();
    this.startPoint = new node(newValue);
    this.n = n;
    this.point = this.startPoint;
    this.build(this.point,n);
    this.arr = [];
}




avl.prototype = {
    construction: avl,
    build(point,n){
        if(!n){
            return;
        }
        n--;
        let _node = {
            left:{
                flag:false,
                value:0
            },
            right:{
                flag:false,
                value:0
            }
        }
        let _point = this.point;
        let _flagL = 1,
            _flagR = 1,
            temp = 0;
        
        
        if(_flagL){
            while(1){
                temp = num();
                if(temp < _point.value){
                    break;
                }
            }
            _point.left = new node(temp);
            this.point = _point.left;
            this.build(_point.left,n);
        }
        if(_flagR){
            while(1){
                temp = num();
                if(temp > _point.value){
                    break;
                }
            }
            _point.right = new node(temp);
            this.point = _point.right;
            this.build(_point.right,n);
        }

    },
    // 左旋
    rotateLeft(){
        let temp = this.startPoint.right.left;
        let _startPoint = this.startPoint;
        this.startPoint = this.startPoint.right;
        _startPoint.right = temp;
        this.startPoint.left = _startPoint;
    },
    // 右旋
    rotateRight(){
        let temp = this.startPoint.left.right;
        let _startPoint = this.startPoint;
        this.startPoint = this.startPoint.left;
        _startPoint.left = temp;
        this.startPoint.right = _startPoint;
    },
    //删除节点
    delete(val){
        if(!n && typeof n == 'undefined'){
            return;
        }
        let index = this.arr.indexOf(val);

    },
    //求取节点最大深度
    deep(node){
        if(typeof node.left == 'undefined' && typeof node.right == 'undefined'){
            return 0;
        }
        let deepL = this.deep(node.left);
        let deepR = this.deep(node.right);
        return deepL > deepR? deepL + 1: deepR + 1;
    },
    //判断是否是avl树
    isAvl(node){
        let deepL = typeof node.left == 'undefined'? 0: this.deep(node.left);
        let deepR = typeof node.right == 'undefined'? 0: this.deep(node.right);
        if(Math.abs(deepL - deepR) > 1){
            return false;
        }
        this.isAvl(node.left);
        this.isAvl(node.right);
    },
    show(){
        console.log(this.startPoint);
    }
}



function node(n,left = '',right = ''){
    this.value = n;
    this.left = left;
    this.right = right;
}
node.prototype = {
    construction: node,
    getValue(){
        return this.value;
    }
}

function num(){
    return Math.ceil(Math.random()*20);
}
function ran8(){
    return Math.random()<0.8;
}