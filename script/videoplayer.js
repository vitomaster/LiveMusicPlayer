// Експокрт на главный javaScript файл
export const videoPlayerInit = () => {
//Объявления переменых
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

// Иконка смены воспроизведения или паузы
    const toggleIcon = () => {
        if (videoPlayer.paused){
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        }
        else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    }
// Приостановка либо возобовление видео
    const togglePlay = () => {
        if (videoPlayer.paused){
            videoPlayer.play();
        }
        else{
            videoPlayer.pause();
        }
        toggleIcon();
    }
// Остановить воспроизведение видео 
    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
    // Обработчик событий для ползунка видео 
    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    })
//Функция тернарного оператора для добавления 0(нуля) к времени видеко 
    const addZero = n => n < 10 ? '0' + n : n;
// Обработчки событий
    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);
    videoButtonStop.addEventListener('click', stopPlay);
// Обработчик событий для конторля и показа времени видео
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed);
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);

    });

};

// События которые срабатывают автомотический 
    // videoPlayer.addEventListener('play', togglePlay);
    // videoPlayer.addEventListener('pause', togglePlay);