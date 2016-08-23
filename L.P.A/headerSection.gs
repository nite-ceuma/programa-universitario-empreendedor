function headerSection() { 
  
  // Retrieve an image from the web.
  var resp = UrlFetchApp.fetch(ss.getSheets()[1].getRange(7, 2).getValue());
  // Select the Header and centralize
  var imgHeader = doc.addHeader().appendImage(resp).getParent();
  imgHeader.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  var textHeader = doc.getHeader().appendParagraph(ss.getSheets()[1].getRange(8, 2).getValue()
                                                   +"                                                ");
  textHeader.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY).setFontSize(12);
  textHeader.appendText(ss.getSheets()[1].getRange(9, 2).getValue()+"\n").setFontSize(12);
  
}
