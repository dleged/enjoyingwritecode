// s = 'wertufivoc' t = 'rtufiwvoce' true
// s = 'car' t = 'tar' false
// 判断 字符串是否是异或，所有的字符串出现的次数都一样
var groupAnagrams = function(s,t) {
 
  if(s.length !== t.length) return false;

  s = s.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join();
  t = t.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join();
  // return s === t;

  let length = s.length;

  while(length){
    if(s[length] !== t[length]){
      return false;
    }
    length--;
  }

  return true;
};



console.log(groupAnagrams('wertufivoc','rtufiwvoce'));
console.log(groupAnagrams('car','tar'));