/*05 - Baseado nos conceitos aprendidos de O.O. em javascript crie uma Classe chamada Empregado, que tem três atributos: nome, sobrenome e salarioMensal. A classe também deve conter dois métodos calcularSalarioAno que retorna o salário mensal multiplicado por 12 e dadosEmpregado que retorna os dados seguido este modelo: “Carlos Silva, Salário: 120.5”
*/

var Empregado = function(nome1, sobrenome1, sal){
    var nome            = nome1;
    var sobrenome       = sobrenome1;
    var salarioMensal   = sal;

    this.calcularSalarioAno = function(){
        return salarioMensal * 12;
    }

    this.dadosEmpregado = function(){
        return nome + " " + sobrenome + ", Salário: " + salarioMensal;
    }
};