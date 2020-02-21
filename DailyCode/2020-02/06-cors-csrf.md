### CORS （跨域资源共享：Cross Origin Resource Sharing）
    向不是本域名的服务器发送请求，除了非get以外的请求，浏览器会向跨域服务器发送options预检请求，从而知道服务器是否允许跨域访问，也可以告诉客户端是否需要身份验证（Cookies或者http认真相关数据）；

 ### CSRF （跨站请求伪造：Cross-site request forgery）
    CSRF: 利用的是网站对用户网页浏览器的信任

    用户登陆过自己访问过的网站，利用某种手段让用户做一些操作（如访问图片，发送邮件，点击按钮）。由于浏览器曾经被登陆过，这些操作浏览器就会认为是用户的有效操作。
    这是利用了浏览器的身份验证漏洞: 浏览器只能简单的知道请求发自哪个用户，并不知道某些操作是不是用户自己所以为。
    如何防御：令牌，token，检查Referer字段（请求的域名是否位于客户端域名之下）
    
 
 ### XSS （跨站脚本：Cross-site scripting）
    XSS: 利用的是用户对指定网站的信任

    XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，但实际上也可以包括Java，VBScript，ActiveX，Flash或者甚至是普通的HTML。攻击成功后，攻击者可能得到更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容。

    Cross-site scripting的英文首字母缩写本应为CSS，但因为CSS在网页设计领域已经被广泛指层叠样式表（Cascading Style Sheets），所以将Cross（意为“交叉”）改以交叉形的X做为缩写。但早期的文件还是会使用CSS表示Cross-site scripting。
    
       
