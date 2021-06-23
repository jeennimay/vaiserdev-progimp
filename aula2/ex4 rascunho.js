{
    let pessoa = {
        nome = "José"
        sobrenome = "da Silva"
        idade = 27
        peso = 83.5
        altura = 1.70
        plano = true
    }

    let imc = (pessoa.peso/(pessoa.altura*pessoa.altura))

    resultado = `${pessoa.nome} ${pessoa.sobrenome}, tem ${pessoa.idade} anos e seu IMC é de ${imc}`
    console.log(resultado)
    retornoPlano = `${nome} possui algum plano? ${plano}`
    console.log(retornoPlano)

}
