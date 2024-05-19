var stopwatch=function (){
    //開始
    var startAt=0;


    //每次
    var lapTime=0;


    //清除按鈕
    this.reset=function(){
        startAt=lapTime=0;
    };
    //開始按鈕
    var now=function(){
        return(new Date().getTime());
    };
    this.start=function(){
        startAt=startAt?startAt:now();
    };


     //暫停按鈕
     this.stop=function(){
        lapTime=startAt?lapTime+now()-startAt:lapTime;
        startAt=0;
     };


     //總共經歷多少時間
     this.time=function(){
        return lapTime+(startAt?now()-startAt:0);
     };
};


//設定時間的格式:時分秒，顯示到HTML
var x=new stopwatch();
var time;
var clocktimer;


//幾位數格式
function pad(num,size){
    var s="00"+num;
    return s.substr(s.length-size);
};


//時間計算
function formatTime(time){
    var h=m=s=ms=0;


    //停止計算
    var newTime="";


    //時
    h=Math.floor(time/(60*60*1000));
    time=time%(60*60*1000);


    //分
    m=Math.floor(time/(60*1000));
    time=time%(60*1000);


    //秒
    s=Math.floor(time/1000);
    ms=time%1000;


    //顯示時間計算結果
    newTime=pad(h,2)+":"+pad(m,2)+":"+pad(s,2)+":"+pad(ms,3);
    return newTime;
}


//顯示結果放到HTML檔案上
function show(){
    time=document.getElementById("time");
};


function update(){
    time.innerHTML=formatTime(x.time());
};


function start(){
    clocktimer=setInterval("update()",1);
    x.start();
};


function stop (){
    x.stop();
    clearInterval(clocktimer);
};


function reset(){
    stop();
    x.reset();
    update();
};


//設定鍵盤運作
var pressed=true;
document.body.onkeyup=function(e){
    //按下空白鍵
    if(e.keyCode==32){
        if(pressed){
            start();
            pressed=false;
        }else{
            stop();
            pressed=true;
        }
    }
    //按下C鍵
    if(e.keyCode==67){
        reset();
    }
};