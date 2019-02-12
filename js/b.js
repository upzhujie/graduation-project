











// b 树的节点
function node(arr, child_1 = '', child_2 = '', child_3 = '', child_4 = '', parent = ''){
	this.value = [...arr];
	this.childNodeOne = child_1;
	this.childNodeTwo = child_2;
	this.childNodeThree = child_3;
	this.childNodeFour = child_4;
}

