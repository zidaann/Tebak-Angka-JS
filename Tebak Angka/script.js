
var tebak =3;
alert(' Game Tebak Angka 1 - 10 \n Anda memiliki ' + tebak +' kesempatan untuk bermain' );
tebak--;
while(tebak <= 3){
// alert(' Game Tebak angka 1 - 10 \n Anda memiliki '+ tebak + ' kesempatan bermain' );
        var p = prompt(' Tebakan Anda : ');
        var comp = Math.floor(Math.random()*10) +1;
    if(p == comp){
        alert(' Anda Menang!!!');
        break;
    }
    else if(tebak == 0){
        alert(' Kesempatan anda telah habis');
        break;
    }
    else if( p < comp ){
        alert(' Tebakan anda terlalu rendah \n Anda memiliki ' + tebak + ' kesempatan bermain');
    }
    else if( p > comp){
        alert(' Tebakan anda terlalu tinggi \n Anda memiliki ' + tebak + ' kesempatan bermain');      
    }  
    tebak--;
    // alert(' Tebakan Anda : ' + p + ' \n Komputer menebak ' + comp + '\n Maka hasilnya :  ' + hasil  );   
}

