// ============================================
// EDIT FOTO DAN CAPTION DI SINI
// ============================================

const GALLERY_PHOTOS = [
    {
        filename: 'photo1.jpg',
        caption: 'salah satu foto kmu yg bikin aku senyum sendiri'
    },
    {
        filename: 'photo2.jpg',
        caption: 'ga tau kenapa aku suka bgt liat foto ini'
    },
    {
        filename: 'photo3.jpg',
        caption: 'kmu mungkin nganggep ini biasa aja, tpi aku suka'
    },
    {
        filename: 'photo4.jpg',
        caption: 'another little reason why i\'m glad i met you'
    },
    {
        filename: 'photo5.jpg',
        caption: 'foto terakhir tpi bukan berarti paling sedikit aku suka'
    }
];

// ============================================
// EDIT JAWABAN QUIZ DI SINI
// ============================================

const QUIZ_QUESTIONS = [
    {
        question: 'Kalau aku lagi gabut, biasanya aku paling pengen...',
        options: ['tidur', 'cht an sama kamu', 'makan', 'main game'],
        correctAnswer: 1
    },
    {
        question: 'Hal yang paling aku suka dari ngobrol sama kamu adalah...',
        options: ['bisa cerita random', 'cuma ngobrol formal', 'debat', 'diem-dieman'],
        correctAnswer: 0
    },
    {
        question: 'Kalau aku bilang "aku kangen", kemungkinan besar aku...',
        options: ['beneran kangen', 'bercanda', 'lapar', 'mau tidur'],
        correctAnswer: 0
    },
    {
        question: 'Orang yang paling sering aku tunggu chatnya adalah...',
        options: ['guru', 'temen kelas', 'kamu', 'grup kelas'],
        correctAnswer: 2
    },
    {
        question: 'Menurut aku kamu itu...',
        options: ['biasa aja', 'lumayan', 'special', 'terlalu special'],
        correctAnswer: 3
    }
];

const QUIZ_MESSAGES = {
    5: 'gila kmu kenal aku banget 😭💕',
    4: 'lumayan kenal aku, tapi masih harus sering ngobrol sama aku 🥺',
    3: 'lumayan kenal aku, tapi masih harus sering ngobrol sama aku 🥺',
    2: 'waduhh kita harus lebih sering ngobrol nih 😢',
    1: 'waduhh kita harus lebih sering ngobrol nih 😢',
    0: 'yaudah sini kita kenalan lagi 🤭'
};

// ============================================
// EDIT PESAN GAME DI SINI
// ============================================

const GAME_MESSAGES = {
    low: 'kayaknya hatinya susah ditangkep ya 😅',
    medium: 'lumayan, kamu ternyata jago juga 😊',
    high: 'segitu banyak hati yg kamu tangkep, sisain satu buat aku dong 💕'
};

// ============================================
// EDIT PESAN OPEN WHEN DI SINI
// ============================================

const OPEN_WHEN_MESSAGES = {
    tired: 'udahh istirahat dulu, gausah mikirin apa\'. kmu udh ngelakuin yg terbaik hari ini. 💙',
    sad: 'gapapa klo hari ini lagi ga baik. ga semua hari harus berjalan sesuai yg kmu mau. istirahat dulu, nanti semuanya pelan\' membaik. 🤍',
    miss: 'nahh kan kangen aku. yaudah sini ngobrol sama aku. 💕',
    happy: 'nahh gini dongg, aku seneng klo kmu lagi seneng. nikmatin hari kmu dan jangan lupa senyum. ✨'
};

// ============================================
// APLIKASI UTAMA
// ============================================

class SpecialForShella {
    constructor() {
        this.isOpening = true;
        this.audioElement = null;
        this.isGameRunning = false;
        this.gameScore = 0;
        this.gameTime = 15;
        this.gameInterval = null;
        this.quizAnswers = [];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createAudioElement();
        this.generateGallery();
        this.generateQuiz();
        this.setupGameArea();
        this.setupOpenWhen();
        this.createFloatingHearts();
        this.setupScrollToTop();
    }

    // ============================================
    // OPENING SCREEN
    // ============================================

    setupEventListeners() {
        const openButton = document.getElementById('openButton');
        openButton.addEventListener('click', () => this.openWebsite());
    }

    openWebsite() {
        const openingScreen = document.getElementById('openingScreen');
        const mainContent = document.getElementById('mainContent');

        openingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            mainContent.classList.add('fade-in');
            this.isOpening = false;
            
            // Mulai musik otomatis setelah user interaksi
            if (this.audioElement) {
                this.audioElement.play().catch(err => {
                    console.log('Audio play failed:', err);
                });
            }
        }, 400);
    }

    // ============================================
    // AUDIO / MUSIC PLAYER
    // ============================================

    createAudioElement() {
        this.audioElement = new Audio();
        this.audioElement.src = 'music.mp3';
        this.audioElement.loop = true;
        this.audioElement.volume = 0.5;

        const musicBtn = document.getElementById('musicBtn');
        const musicStatus = document.getElementById('musicStatus');

        musicBtn.addEventListener('click', () => {
            if (this.audioElement.paused) {
                this.audioElement.play().catch(err => {
                    console.log('Audio play failed:', err);
                });
                musicStatus.textContent = 'Playing';
                musicBtn.style.color = '#FFB6D9';
            } else {
                this.audioElement.pause();
                musicStatus.textContent = 'Paused';
                musicBtn.style.color = 'rgba(255, 255, 255, 0.6)';
            }
        });

        // Cek jika file musik ada
        this.audioElement.addEventListener('error', () => {
            musicStatus.textContent = 'Unavailable';
            musicBtn.disabled = true;
            musicBtn.style.opacity = '0.5';
        });
    }

    // ============================================
    // GALLERY
    // ============================================

    generateGallery() {
        const galleryContainer = document.getElementById('galleryContainer');
        galleryContainer.innerHTML = '';

        GALLERY_PHOTOS.forEach((photo, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'gallery-image-wrapper';

            const img = document.createElement('img');
            img.className = 'gallery-image';
            img.src = `images/${photo.filename}`;
            img.alt = `Photo ${index + 1}`;

            img.addEventListener('error', () => {
                imageWrapper.innerHTML = '<div class="gallery-placeholder">photo coming soon 📷</div>';
            });

            imageWrapper.appendChild(img);

            const caption = document.createElement('div');
            caption.className = 'gallery-caption';
            caption.textContent = photo.caption;

            galleryItem.appendChild(imageWrapper);
            galleryItem.appendChild(caption);
            galleryContainer.appendChild(galleryItem);
        });
    }

    // ============================================
    // QUIZ / HOW WELL DO YOU KNOW ME
    // ============================================

    generateQuiz() {
        const quizContainer = document.getElementById('quizContainer');
        quizContainer.innerHTML = '';

        QUIZ_QUESTIONS.forEach((q, questionIndex) => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';

            const question = document.createElement('div');
            question.className = 'quiz-question';
            question.textContent = `${questionIndex + 1}. ${q.question}`;

            const options = document.createElement('div');
            options.className = 'quiz-options';

            q.options.forEach((option, optionIndex) => {
                const label = document.createElement('label');
                label.className = 'quiz-option';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${questionIndex}`;
                radio.value = optionIndex;

                radio.addEventListener('change', () => {
                    this.quizAnswers[questionIndex] = optionIndex;
                });

                const text = document.createElement('span');
                text.textContent = option;

                label.appendChild(radio);
                label.appendChild(text);
                options.appendChild(label);
            });

            quizItem.appendChild(question);
            quizItem.appendChild(options);
            quizContainer.appendChild(quizItem);
        });

        // Submit button
        const submitBtn = document.createElement('button');
        submitBtn.className = 'quiz-submit';
        submitBtn.textContent = 'Cek Jawaban';
        submitBtn.addEventListener('click', () => this.submitQuiz());

        quizContainer.appendChild(submitBtn);
    }

    submitQuiz() {
        if (this.quizAnswers.length !== QUIZ_QUESTIONS.length) {
            alert('Jawab semua pertanyaan dulu! 🥺');
            return;
        }

        let score = 0;
        this.quizAnswers.forEach((answer, index) => {
            if (answer === QUIZ_QUESTIONS[index].correctAnswer) {
                score++;
            }
        });

        this.showQuizResult(score);
    }

    showQuizResult(score) {
        const quizContainer = document.getElementById('quizContainer');
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';

        const scoreSpan = document.createElement('div');
        scoreSpan.className = 'quiz-result-score';
        scoreSpan.textContent = `${score}/${QUIZ_QUESTIONS.length}`;

        const message = document.createElement('div');
        message.className = 'quiz-result-message';
        message.textContent = QUIZ_MESSAGES[score] || 'selamat! 🎉';

        resultDiv.appendChild(scoreSpan);
        resultDiv.appendChild(message);

        // Remove previous result
        const oldResult = quizContainer.querySelector('.quiz-result');
        if (oldResult) {
            oldResult.remove();
        }

        quizContainer.appendChild(resultDiv);

        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ============================================
    // CATCH THE HEART GAME
    // ============================================

    setupGameArea() {
        const gameStartBtn = document.getElementById('gameStartBtn');
        gameStartBtn.addEventListener('click', () => this.startGame());
    }

    startGame() {
        if (this.isGameRunning) return;

        this.isGameRunning = true;
        this.gameScore = 0;
        this.gameTime = 15;
        this.gameInterval = null;

        const gameArea = document.getElementById('gameArea');
        const gameStartBtn = document.getElementById('gameStartBtn');
        const gameResult = document.getElementById('gameResult');

        gameArea.innerHTML = '';
        gameResult.innerHTML = '';
        gameStartBtn.disabled = true;
        gameStartBtn.textContent = 'Game berjalan...';

        this.updateGameDisplay();
        this.spawnHeart();

        this.gameInterval = setInterval(() => {
            this.gameTime--;
            this.updateGameDisplay();

            if (this.gameTime <= 0) {
                this.endGame();
            }
        }, 1000);
    }

    spawnHeart() {
        if (!this.isGameRunning) return;

        const gameArea = document.getElementById('gameArea');
        const heart = document.createElement('div');
        heart.className = 'game-heart';
        heart.textContent = '❤️';

        const randomX = Math.random() * (gameArea.clientWidth - 50);
        const randomY = Math.random() * (gameArea.clientHeight - 50);

        heart.style.left = randomX + 'px';
        heart.style.top = randomY + 'px';

        heart.addEventListener('click', (e) => {
            e.stopPropagation();
            this.gameScore++;
            this.updateGameDisplay();
            heart.remove();
            this.spawnHeart();
        });

        gameArea.appendChild(heart);
    }

    updateGameDisplay() {
        document.getElementById('gameTimer').textContent = this.gameTime;
        document.getElementById('gameScore').textContent = this.gameScore;
    }

    endGame() {
        this.isGameRunning = false;
        clearInterval(this.gameInterval);

        const gameArea = document.getElementById('gameArea');
        const gameStartBtn = document.getElementById('gameStartBtn');
        const gameResult = document.getElementById('gameResult');

        gameArea.innerHTML = '';
        gameStartBtn.disabled = false;
        gameStartBtn.textContent = 'Mulai Game';

        let message = GAME_MESSAGES.low;
        if (this.gameScore >= 20) {
            message = GAME_MESSAGES.high;
        } else if (this.gameScore >= 10) {
            message = GAME_MESSAGES.medium;
        }

        gameResult.textContent = `Score: ${this.gameScore} | ${message}`;
    }

    // ============================================
    // OPEN WHEN
    // ============================================

    setupOpenWhen() {
        const buttons = document.querySelectorAll('.open-when-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                this.showOpenWhenMessage(type);
            });
        });
    }

    showOpenWhenMessage(type) {
        const messageContainer = document.getElementById('openWhenMessage');
        messageContainer.innerHTML = '';

        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';
        messageBox.textContent = OPEN_WHEN_MESSAGES[type];

        messageContainer.appendChild(messageBox);
    }

    // ============================================
    // FLOATING HEARTS
    // ============================================

    createFloatingHearts() {
        const container = document.getElementById('floatingHeartsContainer');

        // Create hearts periodically
        setInterval(() => {
            if (!this.isOpening) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = '💕';

                const randomLeft = Math.random() * 100;
                const randomDuration = 6 + Math.random() * 4;
                const randomDelay = Math.random() * 2;

                heart.style.left = randomLeft + '%';
                heart.style.bottom = '-50px';
                heart.style.animation = `float ${randomDuration}s ease-in ${randomDelay}s infinite`;
                heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';

                container.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, (randomDuration + randomDelay) * 1000);
            }
        }, 3000);
    }

    // ============================================
    // SCROLL TO TOP
    // ============================================

    setupScrollToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// START APPLICATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    new SpecialForShella();
});
