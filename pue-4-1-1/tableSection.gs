function createTable() {
  var sheet = ss.getSheets()[2];
  var bids = sheet.getDataRange();
  var values = bids.getValues();
   body.appendTable(values);


  Logger.log(values);
}