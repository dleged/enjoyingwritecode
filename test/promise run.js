

const p = new Promise((resolve,reject) => {

  // try {
    const a = 1;
    a = 2;
    resolve(a);
  // } catch (error) {
  //   console.error('self catch error',error);
  // }

});

p.catch((e) => {
  console.log(e);
  return 1;
}).then((v) => {
  console.log(v,'finally')
})