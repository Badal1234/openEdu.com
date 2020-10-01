var fs = require('fs')
module.exports.checkFileContent = ({filePath}) => {
    new PdfReader().parseFileItems("sample.pdf", function (err, item) {
        if (err) callback(err);
        else if (!item) callback();
        else if (item.text) console.log(item.text);
      });
    
}