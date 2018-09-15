var express = require('express');
var router = express.Router();
let soma = 0
let novoNumero = 0
let running = false

/* GET users listing. */
router.post('/iniciar', function(req, res, next) {
    if (running == false) {
        running = true
        longOperation()
    }
    
    function longOperation() {
            let random = Math.floor(Math.random() * (5000 - 1000) + 1000)
            
            setTimeout(function () {
                if (running == true) {
                    novoNumero = random
                    soma += novoNumero
                    console.log("Soma:", soma)
                    console.log("Novo:", novoNumero)
                    longOperation()
                }
            }, random)
    }
    
    res.send("INICIADO")
});


router.post('/parar', function(req, res, next) {
    running = false
    res.send("PARADO")
})

router.get('/consultar', function(req, res, next) {
    let resultado = {
        soma: soma,
        novoNumero: novoNumero
    }

    res.send(JSON.stringify(resultado))
})

module.exports = router;
