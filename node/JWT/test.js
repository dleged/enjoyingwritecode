function runA(){

  try{
   let c = a + b;
  }catch(err){
    throw new Error(err);
  }

  console.log('runA');
}

function runB(){
  console.log('runB');
}

runA();
runB();