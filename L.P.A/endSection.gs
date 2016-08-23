function appendDocument () {
 
  // Create a text below the table
  doc.appendParagraph(ss.getSheets()[1].getRange(12, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(13, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(14, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(15, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(16, 2).getValue()).setFontSize(12);
  doc.appendParagraph(ss.getSheets()[1].getRange(17, 2).getValue()).setFontSize(12);
  
  var date;
  var linha;
  var signature;
  var cpf;
  var cargo;
  
  date = doc.appendParagraph("\n \n"+ss.getSheets()[1].getRange(4, 2).getValue());
  linha = doc.appendParagraph("\n\n\n___________________________________");
  signature = doc.appendParagraph(ss.getSheets()[1].getRange(3, 2).getValue());
  cpf = doc.appendParagraph(ss.getSheets()[1].getRange(10, 2).getValue());
  cargo = doc.appendParagraph(ss.getSheets()[1].getRange(11, 2).getValue());
  
  date.setAlignment(DocumentApp.HorizontalAlignment.RIGHT).setFontSize(12);
  linha.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  signature.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontSize(12);
  cpf.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontSize(12);
  cargo.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontSize(12);
  
}
