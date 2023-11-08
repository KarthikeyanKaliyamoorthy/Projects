let sports:string[] = ['cricket', 'Tennis', 'Volley ball'];

for(let i=0; i<sports.length; i++) {
    console.log('Traditional for loop: '+sports[i]);
}

for(let sport of sports){
    if(sport=="cricket"){
        console.log('My Favourite! >>'+sport);
    }else{
        console.log('For each loop: '+sport);
    }
    
}