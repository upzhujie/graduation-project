
function avl(n = 3){
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
    // 生成树 未排序
    build(point,n){
        if(!n){
            return;
        }
        n--;
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
            _point.left.parent = _point;
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
            _point.right.parent = _point;
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

    // 右旋   ******************** 有问题
    rotateRight(){
        let temp = this.startPoint.left.right;
        let _startPoint = this.startPoint;
        this.startPoint = this.startPoint.left;
        _startPoint.left = temp;
        this.startPoint.right = _startPoint;
    },

    //删除节点 -> todo
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

    //判断是否是avl树  -> todo
    isAvl(node){
        let deepL = typeof node.left == 'undefined'? 0: this.deep(node.left);
        let deepR = typeof node.right == 'undefined'? 0: this.deep(node.right);
        if(Math.abs(deepL - deepR) > 1){
            return false;
        }
        this.isAvl(node.left);
        this.isAvl(node.right);
    },

    // 搜索操作，返回从节点走过的路径[1,2,1,0]  1 左   2 右
    search(val){
        let ret = [],
            thisPoint = this.startPoint;
        while(thisPoint){
            if(thisPoint.value == val){
                ret.push(0);
                break;
            }else if(thisPoint > val){
                ret.push(2);
                if(typeof thisPoint.right == 'undefined'){
                    break;
                }
                thisPoint = thisPoint.right;
            }else{
                ret.push(1);
                if(typeof thisPoint.left == 'undefined'){
                    break;
                }
                thisPoint = thisPoint.left;
            }
        }
    },
    show(){
        console.log(this.startPoint);
    }
}



function node(n,left = '',right = '',parent = ''){
    this.value = n;
    this.left = left;
    this.right = right;
    this.parent = parent;
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
