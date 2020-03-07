const {desktopCapturer,remote,} = require('electron');
const {dialog,Menu} = remote;
const fs = require('fs');

const video = document.getElementsByTagName('video')[0];
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const select = document.getElementById('select');

let mediaRecorder;//视频录制实力
let mediaChunks = [];//视频bolb队列
let selectSourceName;

//获取所有所有录屏资源
async function getVideosSource(){
    let sources = await desktopCapturer.getSources({types: ['window','screen']});
    return sources;
}

//可以录屏的screen资源列表
async function handleSelectVideos(){
    sources = await getVideosSource();
    const videoOptionsMenu = Menu.buildFromTemplate(
        sources.map(source => {
          return {
            label: source.name,
            click: () => selectSource(source)
          };
        })
      );
    videoOptionsMenu.popup();
}

//选择可以录屏的screen,并且在video中同步显示
async function selectSource(source){
    selectSourceName = select.innerHTML = source.name;
    const constraints = {
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: source.id
          }
        },
        // audio: {
        //   mandatory: {
        //     chromeMediaSource: 'desktop'
        //   }
        // },
      };
      //创建视频流文件
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      //将流文件赋给video
      video.srcObject = stream;
      video.play();

      mediaRecorder = new MediaRecorder(stream,{videoBitsPerSecond : 2500000,mimeType: 'video/webm; codecs=vp9'});
      mediaRecorder.ondataavailable = onDataAvailable;
      mediaRecorder.onstop = onStopRecord;
}

//停止录制后检查视频bolb是否有效
function onDataAvailable(e){
    mediaChunks.push(e.data);
}

//启动录屏器按钮
function handleStartRecord(){
    mediaRecorder.start();
    start.innerHTML = 'recording...';
}

//停止录屏器按钮，并停止录屏器
function hanldeStopRecord(){
    start.innerHTML = 'start';
    mediaRecorder.stop();
}

//保存视频
async function onStopRecord(){
    let videoBlob = new Blob(mediaChunks, {type: 'video/webm; codecs=vp9'});
    const buffer = Buffer.from(await videoBlob.arrayBuffer());
    //唤出保存dialog
   let pathName = dialog.showSaveDialogSync({
        title: '⏺视频录制完成',
        defaultPath: `${selectSourceName}-${Date.now()}.webm`,
        buttonLabel: '保存视频'
    });

   

    try{
        fs.writeFileSync(pathName,buffer);
        notifyMe();
    }catch{
        console.error();
    };
}

//保存成功提醒
function notifyMe() {
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }
  
    // 检查用户是否同意接受通知
    else if (Notification.permission === 'granted') {
      var notification = new Notification('恭喜，保存视频成功!');
    }
  
    // 否则我们需要向用户获取权限
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // 如果用户同意，就可以向他们发送通知
        if (permission === 'granted') {
          var notification = new Notification('恭喜，保存视频成功!');
        }
      });
    }
  }

//选择录制的程序屏幕
select.onclick = handleSelectVideos;
start.onclick = handleStartRecord;
stop.onclick = hanldeStopRecord;
