import * as path from 'path';

class AmountPlaySound {
  private playText: string | null;
  private preSound: string;
  sequence: string[] = [];
  amountSound: any;

  constructor({ playText = null, preSound }: { playText?: string | null, preSound: string }) {
    this.playText = playText;
    this.preSound = preSound;
    this._init();
  }

  private _init(): void {
    this.preSound = 'pay_success.mp3';
    this.sequence = ['ten_thousand.mp3', 'thousand.mp3', 'hundred.mp3', 'ten.mp3', ''];
  }

  private _getUnitSound(num: string, index: number, preDotNumber: string): string[] {
    let amountSound = this.amountSound;
    let sequence = this.sequence.slice(this.sequence.length - preDotNumber.length);
    return [amountSound.replace('$', num), (!!Number(num) ? sequence[index] : '')];
  }

  private _getIntegerSound(num: string, len: number): string[] {
    let _num = num[0];
    let amountSound = this.amountSound;
    let sequence = this.sequence.slice(this.sequence.length - len);
    switch (len) {
      case 2:
        return [_num === '1' ? '' : amountSound.replace('$', _num), (!!Number(_num) ? sequence[0] : '')];
      default:
        return [amountSound.replace('$', _num), (!!Number(_num) ? sequence[0] : '')];
    }
  }

  private _getDecimalSound(num: string, index: number): string {
    return (index === 1 && num.toString() === '0') ? '' : this.amountSound.replace('$', num); //分位0过滤
  }

  private _getPreDotSound(num: string = this.playText): string[] {
    let _preDotNumber = this._getSplitSoundByDot(0);
    let numberLen = _preDotNumber.length;
    if (numberLen > 1 && !(Number(_preDotNumber) % Math.pow(10, numberLen - 1))) {  //处理整数
      return this._getIntegerSound(_preDotNumber, numberLen);
    } else {
      return _preDotNumber.split('').map((num, index) => {
        return this._getUnitSound(num, index, _preDotNumber);
      }).flat();
    }
  }

  private _getAfterDotSound(): string[] {
    let _afterDotNumber = this._getSplitSoundByDot(1) || '';
    if (Number(_afterDotNumber) === 0) {
      return [];
    } else {
      return [this.dotSound, ..._afterDotNumber.split('').map((num, index) => {
        return num !== '0' ? this._getDecimalSound(num, index) : '';
      })].filter(Boolean);
    }
  }

  private _getSplitSoundByDot(index: number): string {
    return this.playText ? this.playText.split('.')[index] : '';
  }

  private _filterSound(sound: string[]): string[] {
    return sound.filter((item, index) => {
      if (item === '0.mp3' && sound[index + 1] === '0.mp3') {
        return false;
      } else {
        return true;
      }
    });
  }

  private _concatPreAndAfterDotSound(): string[] {
    let sound = [this.preSound, ...this._getPreDotSound(), ...this._getAfterDotSound(), this.yuanSound];
    return this._filterSound(sound);
  }

  private getPreSoundsPath(): string {
    return window.location.href.toLowerCase().includes('resources/app') ? __dirname : process.cwd();
  }

  public getShowCodesound(): string[] {
    return [path.join(this.getPreSoundsPath(), './raw/show_pay_code.mp3')];
  }

  public getRefundSuccess(): string[] {
    return [path.join(this.getPreSoundsPath(), './raw/refund_success.mp3')];
  }

  public getSound(): string[] {
    let playText = this.playText;
    if (parseFloat(playText).toString() !== "NaN") {//金额
      return this._concatPreAndAfterDotSound().map((item) => {
        return path.join(this.getPreSoundsPath(), `./raw/${item}`);
      });
    } else if (typeof playText === 'string') {
      return [path.join(this.getPreSoundsPath(), `./raw/${playText}.mp3`)];
    }
    return [];
  }
}

export default AmountPlaySound;
