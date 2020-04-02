const fs = require('fs');
const path = require('path');

module.exports = function (req, res) {
    let url = req.url;
    let filepath = path.join(process.cwd(), url);

    fs.stat(filepath,(err,stat) => {
        if(stat && stat.isDirectory()){
            getDirectoryFileList(filepath).then((filelist) => {
                res.end(createHtmlString(filepath, renderDirectoryFileLink(url,filelist).join('')));
            });
        }else{
            fs.exists(filepath, (bool) => {
                if (bool) {
                    fs.readFile(filepath, (err, data) => {
                        res.end(data)
                    });
                } else {
                    res.end(createHtmlString('404', 'file is not found! 😭'));
                }
            })
        }
    })
}



function renderDirectoryFileLink(prepath,filelist,){
    let list = `<a href='./'>../</a></br>`;
    return [list].concat(filelist.map((link) => {
        return `<a href='${prepath}/${link}'>./${link}</a></br>`;
    }));
}

function getDirectoryFileList(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path,(err,list) => {
            if(err){
                return reject(err);
            }
            resolve(list);
        })
    })
}

function createHtmlString(title, body) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./build/style.css" />
        <title>${title}</title>
    </head>
    <body>
        ${body}
    </body>
    </html>
    `
}