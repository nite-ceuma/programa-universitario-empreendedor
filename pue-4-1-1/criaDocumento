var ss = SpreadsheetApp.getActiveSpreadsheet();

function onOpen() {
  var propostas = [ {name: "Gerar Proposta", functionName: "criarDocumento"}];
  ss.addMenu("Gerador de Proposta", propostas);
}

function criarDocumento () {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Retrieve an image from the web.
  var resp = UrlFetchApp.fetch(ss.getSheets()[1].getRange(7, 2).getValue());
  //Logger.log(resp); 
  // Create a document.
  var doc = DocumentApp.create("Proposta - "+ss.getSheets()[1].getRange(2, 2).getValue());
  var imgHeader = doc.addHeader().appendImage(resp).getParent();
  imgHeader.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  var textHeader = doc.getHeader().appendParagraph(ss.getSheets()[1].getRange(8, 2).getValue()
                                                   +"                                                ");
  textHeader.setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  textHeader.appendText(ss.getSheets()[1].getRange(9, 2).getValue()+"\n");
  
  // Insert text related the place and bid number
  doc.appendParagraph(ss.getSheets()[1].getRange(1, 2).getValue());
  doc.appendParagraph(ss.getSheets()[1].getRange(5, 2).getValue());
  doc.appendParagraph(ss.getSheets()[1].getRange(2, 2).getValue());
  tabelaBid = doc.getBody().appendTable();

  var sheet = ss.getSheets()[2];
  var bids = sheet.get;
  // Returns the active range
  
  for (i = 0; i < sheet.getRange(1,5).getLastRow(); i++) {
    for (j = 0; j < sheet.getRange(1,5).getLastColumn(); j++){
       bids[0][0] = sheet.getRange(1,5).getValues()[i][j];
      //Logger.log(bids[i][j]);
    }
  }
  Logger.log(bids);
  
  //Insert a FooterSection
  var rodape = doc.addFooter().appendParagraph(ss.getSheets()[1].getRange(6, 2).getValue());
  rodape.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
  
  // Append the image to the first paragraph.
  //doc.getChild(0).asParagraph().appendInlineImage(resp.getBlob());
}

//function createDocument() {
//
//  
//  
////  // Prompt the user for a search term
////  var searchTerm = Browser.inputBox("Enter the string to search for:");
////
////  // Get the active spreadsheet and the active sheet
////  var ss = SpreadsheetApp.getActiveSpreadsheet();
////  var sheet = ss.getActiveSheet();
////
////  // Set up the spreadsheet to display the results
////  var headers = [["File Name", "File Type", "URL"]];
////  sheet.clear();
////  sheet.getRange("A1:C1").setValues(headers);
////
////  // Search the files in the user's Docs List for the search term
////  var files = DocsList.find(searchTerm);
////
////  // Loop through the results and display the file name, file type, and URL
////  for (var i = 0; i < files.length; i++) {
////    sheet.getRange(i+2, 1, 1, 1).setValue(files[i].getName());
////    sheet.getRange(i+2, 2, 1, 1).setValue(files[i].getType());
////    if (files[i].getType() == "document") {
////      urlBase = "https://docs.google.com/Doc?docid=";
////    }
////    else if (files[i].getType() == "spreadsheet") {
////      urlBase = "https://spreadsheets.google.com/ccc?key=";
////    }
////    else if (files[i].getType() == "presentation") {
////      urlBase = "https://docs.google.com/present/view?id=";
////    }
////    else {
////      urlBase = "https://docs.google.com/fileview?id=";
////    }
////    sheet.getRange(i+2, 3, 1, 1).setValue(urlBase + files[i].getId());
////  }
//}
