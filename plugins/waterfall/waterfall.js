(function(g){
	function Waterfall(className){
		this.className = className;
		this.heightPool = [0,0,0,0];

		this.init = function(){
			let imgFallBox = document.querySelector(className);
			let imgItem = imgFallBox.querySelectorAll('li');
			let ingLength = imgItem.length;
			for (var i = 0; i < ingLength; i++) {
				let _one = imgItem[i];
				this.setHeightPool(_one);
			}
		}

		this.setHeightPool = function(node){
			let heightPool = this.heightPool;
			let minNumber = this.getMinNumber();
			let min = minNumber.min;
			let minIndex = minNumber.minIndex;
			this.setPosition(node,min,minIndex);
			heightPool[minIndex] = heightPool[minIndex] + this.getNodeclientHeight(node);
		}

		this.getNodeclientHeight = function(node){
			return node.clientHeight;
		}

		this.getMinc = function(){
			let heightPool = this.heightPool;
			let min = Math.min.apply(Math,heightPool);
			return {
				minIndex: heightPool.indexOf(min),
				min: min
			};
		}


		this.setPosition = function(node,min,index){
			node.style.left = 25*index + '%';
			node.style.top = min + 'px';
		}
	}
	g.Waterfall = Waterfall;
})(window)
