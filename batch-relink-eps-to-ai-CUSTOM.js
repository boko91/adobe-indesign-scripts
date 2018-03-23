var doc = app.activeDocument;
var links = doc.allGraphics;
for (var i=links.length-1; i>=0; i--) {
  if (links[i].itemLink.name.match(/.+\.eps$/)) {
      var oldname = links[i].itemLink.filePath;
      // alert(oldname);
      // break;
      var newname = oldname.replace(".eps", ".ai");
      // alert(newname);
      // break;
      var newfile = File(newname);
      // alert(newfile);
      // break;
      if (newfile.exists) {
        // alert(newfile);
        // break;
        links[i].itemLink.relink(newfile);
      }
  }
}
