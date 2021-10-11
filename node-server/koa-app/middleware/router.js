const { createSecretKey } = require('crypto');
const fs = require('fs');
const path = require('path');

async function router(ctx,next){

    let {url,method} = ctx.request;


    console.log(ctx.request,11)
    if(url === '/api/user' && method === 'GET'){
        ctx.body = {app: 'this is api page'};
    }

    // if((/.(jpg|jpeg|png|gif)$/).test(url)){
    //     let sourcePath = path.join(process.cwd(),url);
    //     let now = new Date();
    //     if(fs.existsSync(sourcePath)){
    //         ctx.body = fs.createReadStream(sourcePath);
    //         // ctx.status = 204;
    //         ctx.set({
    //             'cache-control': 'public, max-age=31536000',
    //             'date': now,
    //             'exrires': new Date(+now + 60 * 11000),
    //             'content-type': 'image/jpg',
    //         });
    //     }else{
    //         ctx.body = 'the resource is not found😭';
    //     }
    // }else{
    //     switch(url){
    //         case '/login': 
    //             ctx.body = 'login page';
    //             break;
    //         case '/home':
    //             ctx.body = 'home page';
    //             break;
    //          default: 
    //             ctx.body = 'not found';
    //             break;
    //     } await next();
    // }
    
}

module.exports = router;