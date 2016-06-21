  // Create a document.
 
  function createDocument () {
    
  // Insert text related the place and bid number
  doc.appendParagraph(ss.getSheets()[1].getRange(1, 2).getValue());
  doc.appendParagraph(ss.getSheets()[1].getRange(5, 2).getValue());
  doc.appendParagraph(ss.getSheets()[1].getRange(2, 2).getValue());
  }
 
