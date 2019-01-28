// 一百零1元                    101
// 一百一十元点零二元							110.2

const path = require('path');

class AmountPlaySound{
	constructor({playText = null,preSound}){
		this.playText = playText;
		this._init();
		this.preSound = preSound;
	}

	_init(){
		this.preSound = 'pay_success.mp3'
		this.amountSound = '$.mp3'
		this.dotSound = 'dot.mp3'
		this.yuanSound = 'yuan.mp3'
		this.sequence = ['ten_thousand.mp3','thousand.mp3','hundred.mp3','ten.mp3','']
	}

	_getUnitSound(num,index,preDotNumber){
		let length = preDotNumber.length;
		let amountSound = this.amountSound;
		let sequence = this.sequence.slice(this.sequence.length-length);
		return [amountSound.replace('$',num),(!!Number(num) ? sequence[index] : '')];
	}

	_getIntegerSound(num,len){
		let _num = num[0];
		let amountSound = this.amountSound;
		let sequence = this.sequence.slice(this.sequence.length-len);
		switch (len) {
			case 2:
				return [_num === '1' ? '' : amountSound.replace('$',_num),(!!Number(_num) ? sequence[0] : '')]
				break;
			default:
				return [amountSound.replace('$',_num),(!!Number(_num) ? sequence[0] : '')];
		}
	}

	_getDecimalSound(num,index){
		return (index === 1 && num.toString() === '0') ? '' : this.amountSound.replace('$',num);//分位0过滤
	}

	_getPreDotSound(num = this.playText){
		let _preDotNumber = this._getSplitSoundByDot(0);
		let numberLen = _preDotNumber.length;
    if(numberLen > 1 && !(Number(_preDotNumber)%Math.pow(10,numberLen - 1))){  //处理整数
        return this._getIntegerSound(_preDotNumber,numberLen)
    }else{
				console.log(_preDotNumber.split(''));
        return _preDotNumber.split('').map((num,index) => {
            return this._getUnitSound(num,index,_preDotNumber);
        })
		}
	}

	_getAfterDotSound(){
		let _afterDotNumber = this._getSplitSoundByDot(1) || [];
		if(Number(_afterDotNumber) === 0){
			return '';
		}else{
			return [this.dotSound].concat(_afterDotNumber.split('').map((num,index) => {
				return num !== 0 ? this._getDecimalSound(num,index) : null;
			}))
		}
	}

	_getSplitSoundByDot(index){
		console.log(this.playText.toString().split('.'));
		return this.playText.toString().split('.')[index];
	}

	_filterSound(sound){
		sound = sound.filter((sound) => !!sound) //过滤无用的数据
		sound = sound.filter((item,index) =>{
			if(item === '0.mp3' && sound[index+1] === '0.mp3'){
				return false;
			}else{
				return true;
			}
		});
		return sound;
	}

	_concatPreAndAfterDotSound(){
		let sound = Array.prototype.concat(this.preSound,...this._getPreDotSound(),...this._getAfterDotSound(),this.yuanSound)
		return this._filterSound(sound);
	}

	getPreSoundsPath(){
		if(window.location.href.toLowerCase().includes('resources/app')){
			return __dirname;
		}else{
			return process.cwd();
		}
	}

	getShowCodesound(){
		return [path.join(this.getPreSoundsPath(),`./raw/show_pay_code.mp3`)]
	}

	getRefundSuccess(){
		return [path.join(this.getPreSoundsPath(),`./raw/refund_success.mp3`)]
	}

	getSound(){
		let playText = this.playText;
		if(parseFloat(playText).toString() !== "NaN"){//金额
			return this._concatPreAndAfterDotSound().map((item) =>{
				return  path.join(this.getPreSoundsPath(),`./raw/${item}`)
			});
		}else if(typeof playText === 'string'){
				return [path.join(this.getPreSoundsPath(),`./raw/${playText}.mp3`)]
		}
	}

}

console.log(new AmountPlaySound(1.0).getSound());

module.exports = AmountPlaySound;
