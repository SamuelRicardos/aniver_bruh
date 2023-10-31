
let msg = document.getElementById('msg')
const gerarBtn = document.querySelector('.gerar-btn')
let divDialog = document.getElementById('dialog')
let ClientInfos = new Object


function clear(){
    ClientInfos.nick = ''
    ClientInfos.gender = null

    document.querySelector('#nick').value = ''
    document.querySelector('.gender[name="gender"]:checked').checked = false
}



gerarBtn.addEventListener('click', function(ClientInfos){
    let nick = document.querySelector('#nick').value
    let gender = document.querySelector('.gender[name="gender"]:checked').value
       
    updateInfos(nick, gender)
    phraseGenerate(ClientInfos)

    function updateInfos(nick, gender){
        
        ClientInfos.nick = nick
        ClientInfos.gender = gender
        console.log(ClientInfos)
    }
    
    function randomNumber(){
        let i = Math.floor(Math.random()*1)
        return i
    }
    
    function phraseGenerate(ClientInfos){
    
        let femalePhrase = [
            `
            Parabéns! hoje é o seu dia! Eu te acho uma pessoa muito responsável, uma boa líder e bem divertida kkkk. Foi uma benção de Deus estar ao seu lado nessa jornada do nosso pg: passando por estresses, momentos de alegria e de comunhão com o pessoal. Embora estejamos multiplicando no futuro, saiba que sempre pode contar comigo! Sempre vou ser seu amigo e irmão. Saiba que vou estar sentindo a sua falta e do pessoal vou querer saber das notícias do seu pg e de como vocês estão, eu me importo muito com cada um (confesso que uma parte de mim não queria que acontecesse a multiplicação, já a outra sabe que é o certo a ser feito). Lembra daquele chaveirinho do Pikachu que te dei no inicio do ano? É um símbolo da nossa amizade, " Eu te agradeço por sua amizade" foi uma das coisas que eu te disse naquele dia que te entreguei ele e continuo agradecendo e orando por você e assim como um Pokémon nos somos capazes de evoluir a cada desafio enfrentado na nossa jornada, eu quero que você continue evoluindo, alcance as alturas e seja cada vez mais parecida com Cristo, eu sei que é um desafio, mas saiba que eu acredito em você e ,principalmente, no Deus que está contigo. Agradeço a Deus pela sua vida, amiga, feliz aniversário!🥳🎉🎊

            Abraços,
            Samuel`,
        ]
        
        phrase = selectPhrase(ClientInfos)



        function selectPhrase(){
            

            let phraseToShow = null

            if(ClientInfos.gender === 'feminino'){
                phraseToShow = randomNumber()
                console.log(femalePhrase[phraseToShow])
                //confirm(femalePhrase[phraseToShow])

                return femalePhrase[phraseToShow]
            }
        }

        showPhrase(phrase)

        function showPhrase(phrase){
            document.getElementById('dialog').removeAttribute('style')
            msg.textContent = phrase
        }
        
    }   

})

let accBtn = document.querySelector('.accept')
let closeBtn = document.querySelector('.close')

accBtn.addEventListener('click', function(){
    document.getElementById('dialog').setAttribute('style', 'display: none;')
    clear()
})

closeBtn.addEventListener('click', function(){
    document.getElementById('dialog').setAttribute('style', 'display: none;')
    clear()
})
