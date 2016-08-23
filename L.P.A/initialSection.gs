var ss = SpreadsheetApp.getActiveSpreadsheet();
var doc = DocumentApp.create("Proposta - "+ss.getSheets()[1].getRange(2, 2).getValue());
var body = doc.getBody();

// Create a menu tool bar
function onOpen() {
  
  var menuEntries = [ {name: "Gerar Proposta", functionName: "executeDocument"}];
  //var email = [ {name: "Enviar email", functionName: "sendEmail"}];
  ss.addMenu("Proposta", menuEntries);
 
}


function createDocument () {
    
  // Insert text related the place and bid number
  doc.appendParagraph(ss.getSheets()[1].getRange(1, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(5, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(2, 2).getValue()+"\n").setFontSize(12);

}
 
