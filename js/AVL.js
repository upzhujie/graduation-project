
function avl(n = 4){
    if(n < 0 && n > 10){
        return;
    }
    if(this instanceof avl){
        return new avl(n);
    }
    let newValue = num();
    this.startPoint = new node(newValue);
    this.n = n;
    this.point = this.startPoint;
    this.build(n);
}




avl.prototype = {
    construction: avl,
    build(n){
        if(n < 0){
            return;
        }
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
        while(1){
            let newNum = num();
            if(_node.left.flag && _node.right.flag){
                break;
            }
            if(newNum < this.point.value){
                _node.left.flag = true;
                _node.left.value = newNum;
            }else if(newNum > this.point.value){
                _node.right.flag = true;
                _node.right.value = newNum;
            }
        }
        

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