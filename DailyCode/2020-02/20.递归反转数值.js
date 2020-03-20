//54321 => '12345'

function reverse(num){
    let n1 = num/10;
    let n2 = num%10;

    if(n1 < 1){
        return num.toString();
    }else{
        n1 = parseInt(n1);
        return `${n2}${reverse(n1)}`
    }
}

console.log(reverse(54321));