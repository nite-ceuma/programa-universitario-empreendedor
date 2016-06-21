function footerSection () {
  //Insert a FooterSection
  var rodape = doc.addFooter().appendParagraph(ss.getSheets()[1].getRange(6, 2).getValue());
  rodape.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  
}