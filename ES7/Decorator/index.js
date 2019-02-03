function lipsname(target){
	target.name = 'Decorator'
}

@lipsname
class lipsObj {

}

console.log(`lipsObj has name ${lipsObj.name}`)
