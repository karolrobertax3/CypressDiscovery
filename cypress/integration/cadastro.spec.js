import signup from '../pages/SignupPage' //está importando instanciado da SignupPages

describe('Cadastro', () => {

    beforeEach(function () { //arrowfunction não funciona quando tem o beforEach
        cy.fixture('deliver').then((d) => {
            this.deliver = d;
        })
    })

    it('Usuário deve se tornar entregador', function () {

        signup.go()
        signup.fillForm(this.deliver.signup) //massa de teste escrita no deliver.json
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)//massa de teste escrita no deliver.json
        signup.submit()
        signup.alertMessegeShouldBe('Oops! CPF inválido')
    })
})