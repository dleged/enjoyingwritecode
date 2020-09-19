 let obj = {
   num: 0
 }

 setInterval(() => {
  console.log(obj,'comjs');
  obj.num = obj.num + 1;
 },1000)
 
 module.exports = obj;