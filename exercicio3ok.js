/*03 - Crie um função chamada style que recebe 3 parâmetros: o elemento que será inserido ou pego o css, o nome do atributo css, e o valor do css que pode ou não ser passado. A função deve retornar o valor do css. Use a função de teste criado na sala para passar o seguinte teste
*/


//esse não consegui fazer, me baseei pelo exercico dos colegas.

var style = function(elem, name, value){
	return value;
}

function assert(resultado, fn){
	(resultado === fn)?console.log("passou"):console.log("falhou");
}

assert('30px, style('div', 'font-size', '30px));

