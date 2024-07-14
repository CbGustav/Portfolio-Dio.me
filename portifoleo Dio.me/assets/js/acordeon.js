const acoredeonTriggers = document.querySelectorAll('.acordeon .trigger')

acoredeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpem = acordeon.classList.contains('open')

        if (isOpem){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})