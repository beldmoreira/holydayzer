import express from 'express';
import holidays from './holidays';

const app = express();

app.get('/holidays', (req, res) => {
    res.send(holidays);
    
});

app.get('/is-today-holiday', (req, res) => {
    const today = new Date();
    const isHoliday = holidays.filter((holiday)=> {
        return holiday === today.toLocaleDateString();
      });
    

    if(isHoliday.length == 0){
        res.send('Não, hoje não é feriado');
        
    }else{
        res.send(`Sim, hoje é ${isHoliday[0].name}`);  
    }
    
    
});


app.listen(5000);

   
