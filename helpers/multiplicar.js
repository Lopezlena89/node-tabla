const fs = require('node:fs');
var colors = require('colors/safe');

const crearArchivo = async(base = 5,listar = false,hasta = 10) =>{


    try {
        
    
        let salida = '';
        let consola = '';
    
        for(let i=1;i <=hasta;i++){
            salida  += `${base} x ${i} = ${base*i}\n`;
            consola += `${colors.green(base)} ${colors.underline.red('x')} ${colors.green(i)} = ${colors.yellow(base*i)}\n`;
        }
        if(listar){
            console.log('====================='.green);
            console.log('     Tabla del:'.green, colors.blue(base));
            console.log('====================='.green);
            console.log( consola) ;
        }
    
       
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `tabla-${base}.txt`
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}



