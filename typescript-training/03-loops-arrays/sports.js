var sports = ['cricket', 'Tennis', 'Volley ball'];
for (var i = 0; i < sports.length; i++) {
    console.log('Traditional for loop: ' + sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "cricket") {
        console.log('My Favourite! >>' + sport);
    }
    else {
        console.log('For each loop: ' + sport);
    }
}
