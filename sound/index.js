// 一百零1元                    101
// 一百一十元点零二元							110.2

class PlayMoneySound{
	constructor(playText,type = '.mp3'){
		this.playText = playText;
		this.type = type;
		this._init();
	}

	_init(){
		this.preSound = 'alipay_success.mp3'
		this.amountSound = 'tts_$.mp3'
		this.dotSound = 'tts_dot.mp3'
		this.yuanSound = 'tts_yuan.mp3'
		this.sequence = ['tts_thousand.mp3','tts_hundred.mp3','tts_ten.mp3','']
	}

	_getUnitSound(num,index,preDotNumber){
		let length = preDotNumber.length;
		let amountSound = this.amountSound;
		let sequence = this.sequence.slice(this.sequence.length-length);


		return [amountSound.replace('$',num),(!!Number(num) ? sequence[index] : '')];
	}

	_getDecimalSound(num){
		return this.amountSound.replace('$',num);
	}

	_getPreDotSound(num = this.playText){
		let _preDotNumber = this._getSplitSoundByDot(0);
		let numberLen = _preDotNumber.length;

    if(numberLen > 1 && !_preDotNumber%Math.pow(10,_preDotNumber)){  //处理整数
        return this._getUnitSound(_preDotNumber)
    }else{
				console.log(_preDotNumber.split(''));
        return _preDotNumber.split('').map((num,index) => {
            return this._getUnitSound(num,index,_preDotNumber);
        })
		}
	}

	_getAfterDotSound(){
		let _afterDotNumber = this._getSplitSoundByDot(1);
		if(_afterDotNumber){
			return [this.dotSound].concat(_afterDotNumber.split('').map((num,index) => {
				return num !== 0 ? this._getDecimalSound(num) : null;
			}))
		}else{
			return '';
		}
	}

	_getSplitSoundByDot(index){
		console.log(this.playText.toString().split('.'));
		return this.playText.toString().split('.')[index];
	}

	_filterSound(sound){
		sound = sound.filter((sound) => !!sound) //过滤无用的数据
		sound = sound.filter((item,index) =>{
			console.log();
			if(item === 'tts_0.mp3' && sound[index-1] == 'tts_0.mp3'){
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

	getSound(){
		return this._concatPreAndAfterDotSound().map((item) => `./raw/${item}`);
	}

	saySound(){
		return this.getSound();
	}

	// _getBit(num){//个位
	// 	return num !== 0 ? `tts_${num}`: null;
	// }
	//
	// _getPlace(num){//十元
	//
	// }
	//
	// _getHundred(num){//百位
	//
	// }

}


sound = new PlayMoneySound(1.01).getSound();
var player = require('play-sound')(opts = {})

console.log(sound);
function curryPlayMp3(){
	let from = 0;
	return function playMp3(sound,i){
		player.play(`${sound[i]}`,{ volume: 0.5 },function(index){
			if(++from < sound.length){
				playMp3(sound,from)
			}else{
				from = 0;
			}
		})
	}
}


curryPlayMp3()(sound,0)


// function playMp3List(sound){
// 	let plays = []
// 	for(let i = 0;i<sound.length;i++){
// 		// plays.push(new Promise((res,rej) => {
// 			player.play(`./raw/${sound[i]}`,function(){
// 				console.log(111);
// 			})
// 			break;
// 		// }))
// 	}
// 	return plays;
// }
// playMp3List(sound)
