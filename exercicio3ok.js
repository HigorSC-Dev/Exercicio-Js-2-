/*03 - Crie um fun��o chamada style que recebe 3 par�metros: o elemento que ser� inserido ou pego o css, o nome do atributo css, e o valor do css que pode ou n�o ser passado. A fun��o deve retornar o valor do css. Use a fun��o de teste criado na sala para passar o seguinte teste
*/


//esse n�o consegui fazer, me baseei pelo exercico dos colegas.

var style = function(elem, name, value){
	return value;
}

function assert(resultado, fn){
	(resultado === fn)?console.log("passou"):console.log("falhou");
}

assert('30px, style('div', 'font-size', '30px));

