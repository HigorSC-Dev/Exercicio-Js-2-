/*05 - Baseado nos conceitos aprendidos de O.O. em javascript crie uma Classe chamada Empregado, que tem tr�s atributos: nome, sobrenome e salarioMensal. A classe tamb�m deve conter dois m�todos calcularSalarioAno que retorna o sal�rio mensal multiplicado por 12 e dadosEmpregado que retorna os dados seguido este modelo: �Carlos Silva, Sal�rio: 120.5�
*/

var Empregado = function(nome1, sobrenome1, sal){
    var nome            = nome1;
    var sobrenome       = sobrenome1;
    var salarioMensal   = sal;

    this.calcularSalarioAno = function(){
        return salarioMensal * 12;
    }

    this.dadosEmpregado = function(){
        return nome + " " + sobrenome + ", Sal�rio: " + salarioMensal;
    }
};