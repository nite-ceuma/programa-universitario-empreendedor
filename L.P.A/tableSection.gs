function createTable() {
 
  var sheet = ss.getSheets()[2];
  var bids = sheet.getDataRange();
  var values = bids.getDisplayValues();
  body.appendTable(values).setFontSize(12);

}
