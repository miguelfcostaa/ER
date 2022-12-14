//const Math = require('Math');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const maxAge = 3 * 24 * 60 * 60; //3 dias em segundos
const createToken = (id) =>{
    return jwt.sign({id},'#secret-Signature-For-Payload',{
        expiresIn: maxAge
    });
};


const ecraPrincipal_get = (req,res) =>{  
    res.render('ecraPrincipal');
};

const ecraPrincipalRadio_get = (req,res) =>{  
    res.render('ecraPrincipalRadio');
};

const ecraPrincipalMedia_get = (req,res) =>{  
    res.render('ecraPrincipalMedia');
};

const ecraPrincipalPhone_get = (req,res) =>{  
    const cookies = req.cookies;
    console.log('COOKIE: ',cookies);
    res.render('ecraPrincipalPhone',{user:cookies});
};

const ecraPrincipalSetup_get = (req,res) =>{
    const wifi = req.cookies;
    res.render('ecraPrincipalSetup',{wifi:wifi});
};

const ecraPrincipalSetupCompleto_get = (req,res) =>{
    res.render('ecraPrincipalSetupCompleto');
};

const ecraPrincipalGPS_get = (req,res) =>{
    const cookies = req.cookies;
    console.log('COOKIE UP: ',cookies);
    res.render('ecraPrincipalGPS',{user:cookies});
};

const ecraPrincipalGPS_post = (req,res) =>{
    const{destino,rota} = req.body;
    res.cookie('destino',destino);
    res.cookie('rota',rota);
    res.render('ecraPrincipal');

}

const ecraPrincipalCar_get = (req,res) =>{  
    res.render('ecraPrincipalCar');
};

const ecraPrincipalMenu_get = (req,res) =>{  
    res.render('ecraPrincipalMenu');
};

const ecraVolante_get = (req,res) =>{  
    res.render('ecraVolante');
};


const ecraPrincipalPhone_post = (req,res) =>{  
    const{user} = req.body;
    console.log('BODY: ', req.body);    
    try{
        console.log('BODY: ', req.body);
        res.cookie('user',user);
        res.status(201).json({user:user});
        //res.send('User connected!');
        res.cookie('user',user);
        res.status(201).json({user:user});
        //res.send('User connected!');
    }catch(err){
        console.log(err);
    }
};

const ecraPrincipalContactos_get = (req,res) => {
    const cookies = req.cookies;
    console.log('COOKIE UP: ',cookies);
    res.render('ecraPrincipalContactos',{user:cookies});
}

const ecraPrincipalContactos_post = (req,res) =>{
    const {user} = req.body;
    res.cookie('contacto',user);
    res.status(201).json({user:user});
}

const ecraChamada_get = (req,res) =>{
    const contacto = req.cookies;
    console.log('CONTACTOCOOKIE: ', contacto);
    res.render('chamada',{user:contacto});
}

const ecraChamada_post = (req,res) =>{
    const {end} = req.body;
    console.log('END: ', end);
    res.cookie('contacto','',{maxAge: 1});
    res.redirect('/ecraPrincipal/contactos');
}

const ecraVolante_post = (req,res) =>{  
    res.render('ecraVolante');
};

const endSession_get = (req,res) =>{
    const user = req.cookies;
    console.log('EndUser: ', user);
    res.render('endSession',{user:user});
}

const endSession_post = (req,res) => {
    res.cookie('user','',{maxAge: 1});
    res.redirect('/ecraPrincipal');
}

const voiceRecognition_get=(req,res) => {
    const user = req.cookies;
    console.log('USERCOOKIES: ', user);
    res.render('voiceRecognition',{user:user});
}

const voiceRecognition_post = (req,res) => {
    const user = req.cookies;
    const{command} = req.body;
    const myArray = command.split(" ");
    console.log('COMANDO: ', myArray[0]);
    console.log('contacto: ', myArray[1]);
    console.log('USER: ', user.user);
    console.log('CONTACTO: ', user.contacto);

    if(myArray[0] == 'call'){
        if(user.user!=undefined){
            
            res.cookie('contacto',myArray[1]);
            res.cookie('acao', myArray[0]);
            res.redirect('/ecraVolante')
        }
        else if(user.user == undefined){
            res.cookie('contacto',myArray[1]);
            res.cookie('acao', myArray[0]);
            res.status(301).json('User not connected');
            
        }
    }else if(myArray[0] == 'GPS'){
        if(myArray[1] == 'start'){
            console.log('Entrou GPS');
            res.cookie('acao', myArray[0]);
            res.redirect('/ecraVolante');
        }else if(myArray[1] == 'finish'){
            res.cookie('rota','',{maxAge:1});
            res.cookie('destino','',{maxAge: 1});
            res.cookie('acao','',{maxAge:1});
            res.redirect('/ecraVolante');
        }
        
    }else if(myArray[0] == 'radio'){
        if(myArray[1] == 'on'){
            res.cookie('acao','radio');
            res.cookie('radio','on');
            res.redirect('/ecraVolante');
        }else if(myArray[1] == 'off'){
            res.cookie('acao','radio');
            res.cookie('radio','',{maxAge: 1});
            res.redirect('/ecraVolante');
        }
            
    }else if(myArray[0] == 'connect'){
        if(user.user == undefined){
            res.cookie('user', myArray[1]);
            res.cookie('acao','connect');
            res.redirect('/ecraVolante');
        }else if(user.user != undefined){
            res.cookie('user', myArray[1]);
            res.cookie('acao','connectChange');
            res.redirect('/ecraVolante');
        }
        
    }else if(myArray[0] == 'disconnect'){
        if(user.user == undefined){
            res.cookie('acao','NonDisconnect');
            res.redirect('/ecraVolante');
        }else if(user.user != undefined){
            if(myArray[1] == user.user){
                res.cookie('user', '',{maxAge:1});
                res.cookie('acao','disconnect');
                res.redirect('/ecraVolante');
            }
            else if(myArray[1] != user.user){
                res.cookie('acao','disconnectNot');
                res.redirect('/ecraVolante');
            }
        }
    }else{
        res.cookie('acao','unknown');
        res.redirect('/ecraVolante');
    }
    
}

const mustBeConnected_get = (req,res) => {
    res.render('mustBeConnected');
}


const ecraPrincipalGps_get = (req,res) => {
    res.render('ecraPrincipalGPS');
}

const ecraVolanteGPS_get = (req,res) => {
    const destino = req.cookies;
    console.log('DESTINOCOOKIE: ', destino);
    res.render('ecraVolanteGPS',{destino:destino});
    
}

const ecraVolanteGPS_post = (req,res) => {
    const destinoStatus = req.cookies;
    const {destino,rotaU} = req.body;
    console.log('DESTINO: ', destino);
    console.log('Rota: ', rotaU);
    console.log('------------------------------------------------------');
    console.log('DESTINOSTATUS: ',destinoStatus);
    res.cookie('destino',destino);
    res.cookie('rota',rotaU);
    res.redirect('/ecraVolante')
    
}

const ecraPrincipalWifi_get = (req,res) => {
    const wifi = req.cookies;
    res.render('ecraPrincipalWifi',{wifi:wifi});
}

const ecraPrincipalWifi_post = (req, res) => {
    const{amount} = req.body;
    console.log('COMANDO: ', amount);
    if(amount == 'start'){
        res.cookie('wifi','ligado');
        res.redirect('/ecraPrincipal/wifi');
    }else if(amount == 'end'){
        res.cookie('wifi','',{maxAge:1});
        res.redirect('/ecraPrincipal/wifi');
    }    

}

const ecraVolanteCheck_get = (req,res) => {
    res.render('voiceRecognitionCheck');
}

const triggerChamada_get = (req,res) =>{
    const cookies = req.cookies;
    res.render('ecraVolanteTriggerChamada',{user:cookies});
}

const triggerChamada_post = (req,res) => {
    const {amount} = req.body;
    console.log('RESPOSTA CHAMADA: ', amount);
    if(amount == 'yes'){
        res.cookie('contacto','James');
        res.cookie('acao','whellPickUp')
        res.redirect('/ecraVolante');
    }else if(amount=='no'){
        res.cookie('acao','',{maxAge:1})
        res.cookie('contacto','',{maxAge:1});
        res.redirect('/ecraVolante');
    }
}

const ecraPrincipalCalendario_get = (req,res) =>{
    res.render('ecraPrincipalCalendario');
}

const ecraMarchaAtras_get = (req,res) => {
    res.render('ecraMarchaAtras');
}

const ecraPrincipalMenu2_get = (req,res) => {
    res.render('ecraPrincipalMenu2');
}



module.exports = {
    ecraPrincipal_get,
    ecraVolante_get,
    ecraPrincipalRadio_get,
    ecraPrincipalMedia_get,
    ecraPrincipalPhone_post,
    ecraPrincipalPhone_get,
    ecraPrincipalSetup_get,
    ecraPrincipalGPS_get,
    ecraPrincipalCar_get,
    ecraPrincipalMenu_get,
    ecraPrincipalMenu2_get,
    ecraPrincipalSetupCompleto_get,
    ecraPrincipalContactos_get,
    ecraChamada_get,
    ecraPrincipalContactos_post,
    ecraChamada_post,
    endSession_post,
    endSession_get,
    voiceRecognition_get,
    voiceRecognition_post,
    mustBeConnected_get,
    ecraVolanteGPS_get,
    ecraVolanteGPS_post,
    ecraPrincipalWifi_get,
    ecraPrincipalWifi_post,
    ecraVolanteCheck_get,
    triggerChamada_get,
    triggerChamada_post,
    ecraPrincipalCalendario_get,
    ecraMarchaAtras_get,
    ecraPrincipalGPS_post

}