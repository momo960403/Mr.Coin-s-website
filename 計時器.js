let countdownTimer;
let totalSeconds;
let rewardPoints = localStorage.getItem('rewardPoints') ? parseInt(localStorage.getItem('rewardPoints')) : 0;


// 显示初始的点数
updateRewardDisplay();


// 监听用户在输入框按下键盘的事件
document.getElementById('minutes').addEventListener('keypress', function(event) {
    // 检查是否按下了 Enter 键 (keyCode 为 13)
    if (event.keyCode === 13) {
        startCountdown(); // 如果是 Enter 键，调用开始倒计时的函数
    }
});


function startCountdown() {
    const minutesInput = document.getElementById('minutes').value;
    const minutes = parseInt(minutesInput);


    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid number of minutes (greater than 0).');
        return;
    }


    totalSeconds = minutes * 60;
    displayCountdown(totalSeconds);


    // 清除之前的计时器
    clearInterval(countdownTimer);


    countdownTimer = setInterval(() => {
        totalSeconds--;


        if (totalSeconds >= 0) {
            displayCountdown(totalSeconds);
        } else {
            clearInterval(countdownTimer);
            recordAndReward(minutes);
        }
    }, 1000);
}


function displayCountdown(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const countdownDisplay = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    document.getElementById('countdown').textContent = countdownDisplay;
}


function recordAndReward(minutes) {
    const pointsPerMinute = 10; // 每分钟对应的点数


    const pointsEarned = minutes * pointsPerMinute;
    rewardPoints += pointsEarned;


    // 更新本地存储中的点数
    localStorage.setItem('rewardPoints', rewardPoints);


    // 更新点数显示
    updateRewardDisplay();
}


function updateRewardDisplay() {
    const rewardElement = document.getElementById('reward');
    rewardElement.textContent = `Points: ${rewardPoints}`;
}
