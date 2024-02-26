module.exports = function(context){

  console.log(arguments);

  return `export default ${JSON.stringify(context)}`;

}