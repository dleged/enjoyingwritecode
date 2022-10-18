function bigSum(sum1, sum2) {

  sum1 = sum1.toString();
  sum2 = sum2.toString();
  const maxLength = Math.max(sum1.length, sum2.length);

  sum1 = sum1.padStart(maxLength,'0').split('');
  sum2 = sum2.padStart(maxLength,'0').split('');

  console.log(sum1,sum2);
  const res = sum1.reduceRight((acc,cur,index) => {
    // 进位的 1 ？0
    const preStep = acc[0]?.step ?? 0;
    // 对应位相加
    const count = preStep + parseInt(cur,10) + parseInt(sum2[index],10);
    console.log(preStep ,parseInt(cur,10) , parseInt(sum2[index],10));
    // 是否大于 10
    const value = count % 10;
    // 大于 10 进位 1
    const step = count >= 10 ? 1 : 0;
    acc.unshift({
      step: step,
      total: `${value}${acc[0]?.total ?? ''}`
    })
    return acc;
  },[]);

  const {step,total} = res[0];

  return step === 1 ? `1${total}` : total;
}

console.log(bigSum(19083048204803284,13233232323232323289893472));