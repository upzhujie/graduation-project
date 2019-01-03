
function avl(n = 2){
    if(n < 0 && n > 10){
        return;
    }
    
    let newValue = num();
    this.startPoint = new node(newValue);
    this.n = n;
    this.point = this.startPoint;
    this.build(this.point,n);
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