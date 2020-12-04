function dateActivate() {
    var date = new Date('December 4, 2020 12:10:00 GMT');
  
    var dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 1);

    var dates = [date, dateNow];

    console.log(dates);

    exports.dates = dates;
}



exports.method = dateActivate;