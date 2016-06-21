var ss = SpreadsheetApp.getActiveSpreadsheet();
var doc = DocumentApp.create("Proposta - "+ss.getSheets()[1].getRange(2, 2).getValue());
var body = doc.getBody();

function onOpen() {
  var propostas = [ {name: "Gerar Proposta", functionName: "criarDocumento"}];
  ss.addMenu("Gerador de Proposta", propostas);  
}

createDocument ();
headerSection () ;
createTable();
footerSection () ;