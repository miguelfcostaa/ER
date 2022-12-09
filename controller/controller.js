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
    res.render('ecraPrincipalSetup');
};

const ecraPrincipalSetupCompleto_get = (req,res) =>{
    res.render('ecraPrincipalSetupCompleto');
};

const ecraPrincipalGPS_get = (req,res) =>{  
    res.render('ecraPrincipalGPS');
};

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
    res.render('voiceRecognition');
}

const voiceRecognition_post = (req,res) => {
    const user = req.cookies;
    const{command} = req.body;
    const myArray = command.split(" ");
    console.log('COMANDO: ', myArray[0]);
    console.log('USER: ', user.user);
    if(myArray[0] == 'call'){
        if(user.user!=undefined){
        res.cookie('contacto',myArray[1]);
        //res.status(201).json({user:myArray[1]});
        res.redirect(301, 'http://localhost:3000/ecraPrincipal')
        }
        else if(user.user == undefined){
            //res.json('User must be connected!');
            console.log('ERRO:');
            res.redirect('/ecraVolante');
            
        }
    }
}

const mustBeConnected_get = (req,res) => {
    res.render('mustBeConnected');
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
    ecraPrincipalSetupCompleto_get,
    ecraPrincipalContactos_get,
    ecraChamada_get,
    ecraPrincipalContactos_post,
    ecraChamada_post,
    endSession_post,
    endSession_get,
    voiceRecognition_get,
    voiceRecognition_post,
    mustBeConnected_get

}