module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get('user-agent'));
  },
	get isChrome() {
		const iosReg = /Chrome/i;
    return iosReg.test(this.get('user-agent'));
	}
};
