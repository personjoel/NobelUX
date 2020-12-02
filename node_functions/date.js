var date = new Date('December 10, 2020 12:00:00 GMT');
  
var dateNow = new Date();
dateNow.setHours(dateNow.getHours() + 1);

var dates = [date, dateNow];

console.log(dates);

module.exports = dates;