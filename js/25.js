// Switch 

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;    
    case 'cheque':
        console.log('pagaste con un cheque');
        break; 
    case 'bitcoin':
        console.log('pagaste con BTC');
        break;    
    default:
        console.log('aun no has pagado');
        break;    
}
 
