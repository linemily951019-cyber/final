let bgImg;
let class1Img;
let class2Img;
let class3Img;
let groundImg;
let spriteSheet;
let spriteW, spriteH;
let totalFrames = 12;
let walkSheet;
let walkW, walkH;
let playerX, playerY;
let speed = 5;
let pushSheet, pushW, pushH;
let toolSheet, toolW, toolH;
let runSheet, runW, runH;
let jumpSheet, jumpW, jumpH;
let downSheet, downW, downH;
let fallSheet, fallW, fallH;
let isPushing = false;
let pushTimer = 0;
let tools = [];
let currentDirection = 1; // 1: Right, -1: Left
let vy = 0;
let gravity = 1;
let isJumping = false;
let groundY;
let isFalling = false;
let isHitByTool = false; // 判斷是否為被攻擊導致的跌倒
let fallTimer = 0;
let stop5Sheet, stop5W, stop5H;
let hi5Sheet, hi5W, hi5H;
let stop2Sheet, stop2W, stop2H;
let hi2Sheet, hi2W, hi2H;
let right2Sheet, right2W, right2H;
let fall2Sheet, fall2W, fall2H;
let beforefight2Sheet, beforefight2W, beforefight2H;
let fight2Sheet, fight2W, fight2H;
let tool2Sheet, tool2W, tool2H;
let end2Sheet, end2W, end2H;
let kaguraSheet, kaguraW, kaguraH;
let hi3Sheet, hi3W, hi3H;
let right3Sheet, right3W, right3H;
let isFighting = false;
let fightTimer = 0;
let yomiTools = [];
let yomiDefeated = false;
let stop2X;
let isStop2Hit = false;
let stop2HitTimer = 0;
let stop2Timer = 0;
let stop2Input;
let hasAnsweredStop2 = false;
let stop2QuizTimer = 0;
let hasAnsweredStop2Quiz = false;
let hasMetYomi = false;
let playerSaidOk = false;
let showRewardMessage = false;
let isQuizActive = false;
let questionsTable;
let quizData = [];
let currentQuizList = [];
let quizStep = 0;
let quizButtons = [];
let quizFeedback = "";
let quizFeedbackTimer = 0;
let isCurrentAnswerCorrect = false;
let quizLives = 3;
let quizFailed = false;
let quizFailedTimer = 0;
let isQuizTimeout = false;
let quizTimer = 0;
const maxQuizTime = 40 * 60; // 40 seconds
let rewardTimer = 0;
let isHi5 = false;
let hi5Timer = 0;
let hasGreeted = false;
let haha5Sheet, haha5W, haha5H;
let nameInput;
let greetingText = "請問你叫什麼名字";
let isNameEntered = false;
let playerName = "";
let angry5Sheet, angry5W, angry5H;
let isAngry = false;
let angryTimer = 0;
let jumpTimer = 0;
let welcomeTimer = 0;
let sleepSheet, sleepW, sleepH;
let bgX = 0;
let coinsSheet, coinsW, coinsH;
let hasCollectedCoins = false;
let missionList;
let showMissionBox = false;
let coinsList = [];
let showHelperBox = false;
let showChatDialog = false;
let chatInput, sendBtn;
let coinScore = 0;
let score = 0;
let chatBg; // 聊天室背景
let chatOutputDiv; // 聊天室內容顯示區域
let enter101Btn; // 進入101按鈕
let backToHallBtn; // 回到走廊按鈕
let enter102Btn;
let enter103Btn;
let enterPlaygroundBtn; // 進入操場按鈕
let chatLog = "Kamineko: 喵? 有什麼不會的嗎?\n"; // 初始對話內容
let currentScene = 'hallway'; // 當前場景: 'hallway' 或 'class101'
let targetScene = 'class101'; // 目標場景
let playerHP = 100;
let yomiHP = 100;
let isGameOver = false;
let gameOverMessage = "";
let isTransitioning = false; // 是否正在轉場
let transitionTimer = 0; // 轉場計時器
let fadeAlpha = 0;
let fadeDirection = 1;
let isFirstTransition = false;
let currentMissionDesc = "";
let missions = [
  { title: '任務清單', desc: '', completed: false },
  { title: '與 Kamineko 對話', desc: '與走廊的Kamineko進行對話', completed: false },
  { title: '尋找提示幣', desc: '在校園中尋找500個提示幣，但是越多越好 !', completed: false },
  { title: '尋找Yomi', desc: '前往 101 教室完成數學小測驗 !', completed: false },
  { title: '尋找Kagura', desc: '前往 102 教室完成英文大挑戰 !', completed: false },
  { title: '尋找Sakaki', desc: '前往操場完成國語大考驗 !', completed: false },
  { title: '找到Yukari並完成考驗', desc: '找到Yukari獲得更多提示幣', completed: false },
  { title: '完成所有任務', desc: '完成所有任務後回到走廊\n找Kamineko即可結束遊戲 !', completed: false }
];

let bgMusic;
let volumeSlider;
let sfxSlider;
let showSettings = false;
let walkSound, runSound;
let playerInvincible = false;
let playerInvincibleTimer = 0;
let yomiInvincible = false;
let yomiInvincibleTimer = 0;
let showScoreHelp = false;
let showCoinHelp = false;
let battleMusic;
let battleResult = "";
let endingMusic;
let playerLostBattle = false;
let retryQuizBtn;
let kaguraInput;
let kaguraState = 0;
let kaguraDialogueTimer = 0;
let questionsTable2;
let quizData2 = [];
let isKaguraQuizActive = false;
let currentKaguraQuizList = [];
let kaguraQuizStep = 0;
let kaguraQuizLives = 3;
let kaguraQuizTimer = 0;
let kaguraQuizFeedback = "";
let kaguraQuizFeedbackTimer = 0;
let kaguraAnswerInput;
let kaguraSubmitBtn;
let charScale;
let kaguraQuizFailed = false;
let isKaguraQuizTimeout = false;
let fall3Sheet, fall3W, fall3H;
let isKaguraHit = false;
let kaguraHitTimer = 0;
let kaguraX = 500;
let fight3Sheet, fight3W, fight3H;
let run3Sheet, run3W, run3H;
let kaguraHP = 100;
let kaguraTools = [];
let kaguraQuizFailedTimer = 0;
let end3Sheet, end3W, end3H;
let kaguraDefeated = false;
let retryKaguraQuizBtn;
let sakakiSheet, sakakiW, sakakiH;
let sakakiX;
let hi4Sheet, hi4W, hi4H;
let sakakiDialogueTimer = 0;
let sakakiInput;
let sakakiState = 0;
let questionsTable3;
let quizData3 = [];
let isSakakiQuizActive = false;
let currentSakakiQuizList = [];
let sakakiQuizStep = 0;
let sakakiQuizLives = 3;
let sakakiQuizTimer = 0;
let sakakiQuizFeedback = "";
let sakakiQuizFeedbackTimer = 0;
let sakakiAnswerInput;
let sakakiSubmitBtn;
let sakakiQuizFailed = false;
let isSakakiQuizTimeout = false;
let sakakiQuizButtons = [];
let fall4Sheet, fall4W, fall4H;
let isSakakiHit = false;
let sakakiHitTimer = 0;
let right4Sheet, right4W, right4H;
let retrySakakiQuizBtn;
let sakakiQuizFailedTimer = 0;
let sakakiHP = 100;
let sakakiTools = [];
let sakakiDefeated = false;
let end4Sheet, end4W, end4H;
let run4Sheet, run4W, run4H;
let fight4Sheet, fight4W, fight4H;
let tool4Sheet, tool4W, tool4H;
let sakakiVy = 0;
let sakakiYOffset = 0;
let sandImg;
let sandOffset = 0;
let sandOffset2 = 0;
let pointTable;
let pointData = [];
let lastQuestionText = "";
let nameSubmitBtn, stop2SubmitBtn, kaguraChatBtn, sakakiChatBtn;
let coinSound;
let walk1QSheet, walk1QW, walk1QH;
let down1QSheet, down1QW, down1QH;
let jump1QSheet, jump1QW, jump1QH;
let platforms103 = [];
let coins103 = [];
let class103Timer = 0;
let yukariSheet, yukariW, yukariH;
let yukariHiSheet, yukariHiW, yukariHiH;
let yukariGameBtn, yukariQuizBtn;
let yukariDialogueTimer = 0;
let startImg;
let endImg;
let gameState = 'START';
let showStartRules = false;
let rulePage = 1;
let sakuraParticles = [];
let startBgX = 0;
let startPlayerX = 0;
let isStartingGame = false;
let loadingProgress = 0;
let isGameLoaded = false;
let gameTable;
let yukariQuizData = [];
let isYukariQuizActive = false;
let currentYukariQuizList = [];
let yukariQuizStep = 0;
let yukariQuizButtons = [];
let yukariQuizFeedbackTimer = 0;
let yukariCorrectCount = 0;
let yukariQuizResultText = "";
let yukariSkipBtn;
let isYukariMiniGameActive = false;
let yukariMiniGameTimer = 0;
let yukariMiniGameCoins = [];
let yukariMiniGameScore = 0;
let yukariMiniGameFinished = false;
let yukariMiniGameExplosions = [];
let yukariMiniGameStarted = false;
let hasPlayedYukariQuiz = false;
let hasPlayedYukariMiniGame = false;
let kaminekoEndTimer = 0;
let continueGameBtn, endGameBtn;
let endGameChoice = "";
let endGameTimer = 0;
let playAgainBtn;
let yomiPlayCount = 0;
let kaguraPlayCount = 0;
let sakakiPlayCount = 0;
let totalWrongAnswers = 0;
let yukariWrongAnswers = 0;
let unlockedAchievements = [false, false, false, false, false, false];
let achievementQueue = [];
const achievementsList = [
  { id: 0, title: "刷刷刷刷到厭倦", desc: "在每個關卡玩超過三次以上" },
  { id: 1, title: "家財萬貫", desc: "獲得超過5000個提示幣" },
  { id: 2, title: "戰鬥高手", desc: "打敗所有關主" },
  { id: 3, title: "你是天才", desc: "答對每一題!沒有錯誤!" },
  { id: 4, title: "教科達人", desc: "在進行Yukari的測驗時零失誤!" },
  { id: 5, title: "變小了!", desc: "縮小在小彩蛋教室內大吃特吃金幣!" }
];
let leaderboardData = [];
let currentLeaderboardTab = 'coins'; // 'coins' or 'score'
let hasSavedRecord = false;
let achievementScrollY = 0;
let leaderboardScrollY = 0;
let activeEndingMessage = "";
let activeEndingMessageTimer = 0;
let activeEndingCharX = 0;
let activeEndingCharY = 0;
let isMobileDevice = false;
let showExitConfirmation = false;
let tCtrl = {
  left: false, right: false, up: false, down: false, action: false, run: false
};

function preload() {
  bgImg = loadImage('background/hall.png');
  class1Img = loadImage('background/class1.png');
  class2Img = loadImage('background/class2.png');
  class3Img = loadImage('background/class3.png');
  groundImg = loadImage('background/ground.png');
  spriteSheet = loadImage('1/stop/stop1.png');
  sandImg = loadImage('background/sand.png');
  walkSheet = loadImage('1/walk/walk1.png');
  runSheet = loadImage('1/run/run1.png');
  pushSheet = loadImage('1/push/push1.png');
  toolSheet = loadImage('1/tool/tool1.png');
  jumpSheet = loadImage('1/jump/jump1.png');
  downSheet = loadImage('1/down/down1.png');
  fallSheet = loadImage('1/fall/fall1.png');
  stop5Sheet = loadImage('5/stop/stop5.png');
  stop2Sheet = loadImage('2/stop/stop2.png');
  hi2Sheet = loadImage('2/hi/hi2.png');
  right2Sheet = loadImage('2/right/right2.png');
  fall2Sheet = loadImage('2/fall/fall2.png');
  beforefight2Sheet = loadImage('2/beforefight/beforefight2.png');
  fight2Sheet = loadImage('2/fight/fight2.png');
  tool2Sheet = loadImage('2/tool/tool2.png');
  end2Sheet = loadImage('2/end/end2.png');
  kaguraSheet = loadImage('3/stop/stop3.png');
  hi3Sheet = loadImage('3/hi/hi3.png');
  right3Sheet = loadImage('3/right/right3.png');
  hi5Sheet = loadImage('5/hi/hi5.png');
  fall3Sheet = loadImage('3/fall/fall3.png');
  haha5Sheet = loadImage('5/haha/haha5.png');
  angry5Sheet = loadImage('5/angry/angry5.png');
  fight3Sheet = loadImage('3/fight/fight3.png');
  run3Sheet = loadImage('3/run/run3.png');
  end3Sheet = loadImage('3/end/end3.png');
  sakakiSheet = loadImage('4/stop/stop4.png');
  hi4Sheet = loadImage('4/hi/hi4.png');
  fall4Sheet = loadImage('4/fall/fall4.png');
  right4Sheet = loadImage('4/right/right4.png');
  sleepSheet = loadImage('5/sleep/0.png');
  run4Sheet = loadImage('4/run/run4.png');
  end4Sheet = loadImage('4/end/end4.png');
  fight4Sheet = loadImage('4/fight/fight4.png');
  tool4Sheet = loadImage('4/tool/tool4.png');
  coinsSheet = loadImage('coin/coins.png');
  questionsTable = loadTable('question1.csv', 'csv', 'header');
  questionsTable2 = loadTable('question2.csv', 'csv', 'header');
  questionsTable3 = loadTable('question3.csv', 'csv', 'header');
  pointTable = loadTable('point.csv', 'csv', 'header');
  gameTable = loadTable('game.csv', 'csv', 'header');

  // 載入背景音樂與圖示
  bgMusic = loadSound('assets/background_music.mp3');
  battleMusic = loadSound('assets/battle_music.mp3'); 
  endingMusic = loadSound('assets/ending_music.mp3');
  walkSound = loadSound('assets/walk1_music.mp3');
  runSound = loadSound('assets/run1_music.mp3');
  coinSound = loadSound('assets/coin_music.mp3');
  walk1QSheet = loadImage('1Q/walk/walk1Q.png');
  down1QSheet = loadImage('1Q/down/down1Q.png');
  jump1QSheet = loadImage('1Q/jump/jump1Q.png');
  yukariSheet = loadImage('6/stop/stop6.png');
  yukariHiSheet = loadImage('6/hi/hi6.png');
  startImg = loadImage('background/start.png');
  endImg = loadImage('background/end.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  charScale = windowHeight / 350; // 根據視窗高度計算縮放比例 (基準高度350時縮放為1倍，700時為2倍)
  startPlayerX = width * 0.1;

  // 檢測是否為行動裝置 (簡單判斷)
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || width < 1000) {
    isMobileDevice = true;
  }

  // 加入自訂 CSS 來美化滑桿，使其符合咖啡色主題
  let sliderStyle = createElement('style');
  sliderStyle.html(`
    input[type=range] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type=range]:focus {
      outline: none;
    }
    /* Webkit (Chrome, Safari, Edge) */
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      background: rgba(255, 248, 225, 0.8);
      border-radius: 4px;
      border: 1px solid #FFF8E1;
    }
    input[type=range]::-webkit-slider-thumb {
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background: #3E2723;
      border: 2px solid #FFF8E1;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -6px;
    }
    /* Firefox */
    input[type=range]::-moz-range-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      background: rgba(255, 248, 225, 0.8);
      border-radius: 4px;
      border: 1px solid #FFF8E1;
    }
    input[type=range]::-moz-range-thumb {
      height: 18px;
      width: 18px;
      border: 2px solid #FFF8E1;
      border-radius: 50%;
      background: #3E2723;
      cursor: pointer;
    }
  `);

  // 計算單一影格的寬高
  spriteW = spriteSheet.width / totalFrames;
  spriteH = spriteSheet.height;

  walkW = walkSheet.width / 8;
  walkH = walkSheet.height;

  walk1QW = walk1QSheet.width / 6;
  walk1QH = walk1QSheet.height;

  down1QW = down1QSheet.width / 5;
  down1QH = down1QSheet.height;
  jump1QW = jump1QSheet.width / 3;
  jump1QH = jump1QSheet.height;

  yukariW = yukariSheet.width / 3;
  yukariH = yukariSheet.height;

  yukariHiW = yukariHiSheet.width / 6;
  yukariHiH = yukariHiSheet.height;

  playerX = width / 2 - (spriteW * charScale) / 2;
  playerY = height * 0.90 - (spriteH * charScale);

  pushW = pushSheet.width / 4;
  pushH = pushSheet.height;
  toolW = toolSheet.width / 7;
  toolH = toolSheet.height;

  runW = runSheet.width / 6;
  runH = runSheet.height;

  jumpW = jumpSheet.width / 10;
  jumpH = jumpSheet.height;

  downW = downSheet.width;
  downH = downSheet.height;

  fallW = fallSheet.width / 11;
  fallH = fallSheet.height;

  // 修改地板位置為視窗高度的 90%，確保角色站在背景的地板上
  groundY = height * 0.90 - (spriteH * charScale); 

  stop5W = stop5Sheet.width / 8;
  stop5H = stop5Sheet.height;

  stop2W = stop2Sheet.width / 4;
  stop2H = stop2Sheet.height;

  hi2W = hi2Sheet.width / 2;
  hi2H = hi2Sheet.height;

  right2W = right2Sheet.width / 8;
  right2H = right2Sheet.height;

  fall2W = fall2Sheet.width / 5;
  fall2H = fall2Sheet.height;

  beforefight2W = beforefight2Sheet.width / 5;
  beforefight2H = beforefight2Sheet.height;

  fight2W = fight2Sheet.width / 12;
  fight2H = fight2Sheet.height;

  tool2W = tool2Sheet.width / 8;
  tool2H = tool2Sheet.height;

  end2W = end2Sheet.width / 4;
  end2H = end2Sheet.height;

  kaguraW = kaguraSheet.width / 12;
  kaguraH = kaguraSheet.height;

  hi3W = hi3Sheet.width / 4;
  hi3H = hi3Sheet.height;

  right3W = right3Sheet.width / 4;
  right3H = right3Sheet.height;

  fall3W = fall3Sheet.width / 8;
  fall3H = fall3Sheet.height;

  fight3W = fight3Sheet.width / 3;
  fight3H = fight3Sheet.height;

  run3W = run3Sheet.width / 6;
  run3H = run3Sheet.height;

  end3W = end3Sheet.width / 4;
  end3H = end3Sheet.height;

  sakakiW = sakakiSheet.width / 7;
  sakakiH = sakakiSheet.height;
  sakakiX = width / 2 + 50;

  hi4W = hi4Sheet.width / 2;
  hi4H = hi4Sheet.height;

  fall4W = fall4Sheet.width / 9;
  fall4H = fall4Sheet.height;

  right4W = right4Sheet.width / 3;
  right4H = right4Sheet.height;

  run4W = run4Sheet.width / 6;
  run4H = run4Sheet.height;

  fight4W = fight4Sheet.width / 12;
  fight4H = fight4Sheet.height;

  end4W = end4Sheet.width / 5;
  end4H = end4Sheet.height;

  tool4W = tool4Sheet.width / 5;
  tool4H = tool4Sheet.height;

  stop2X = 500;

  hi5W = hi5Sheet.width / 4;
  hi5H = hi5Sheet.height;

  haha5W = haha5Sheet.width / 9;
  haha5H = haha5Sheet.height;

  angry5W = angry5Sheet.width / 12;
  angry5H = angry5Sheet.height;

  sleepW = 38;
  sleepH = 33;

  coinsW = coinsSheet.width / 18;
  coinsH = coinsSheet.height;

  nameInput = createInput();
  nameInput.attribute('placeholder', '(請在此輸入內容...)');
  nameInput.size(250);
  nameInput.style('border', '2px solid #5D4037');
  nameInput.style('border-radius', '10px');
  nameInput.style('padding', '5px');
  nameInput.style('font-size', '20px');
  nameInput.style('background-color', '#FFF8E1');
  nameInput.style('color', '#3E2723');
  nameInput.style('font-family', '"Courier New", monospace');
  nameInput.style('font-weight', 'bold');
  nameInput.hide();
  nameInput.changed(submitName);

  nameSubmitBtn = createButton('送出');
  nameSubmitBtn.style('font-size', '16px');
  nameSubmitBtn.style('padding', '5px 10px');
  nameSubmitBtn.style('background-color', '#3E2723');
  nameSubmitBtn.style('color', '#FFFFFF');
  nameSubmitBtn.style('border', '2px solid #FFD700');
  nameSubmitBtn.style('border-radius', '5px');
  nameSubmitBtn.style('cursor', 'pointer');
  nameSubmitBtn.mouseOver(() => { nameSubmitBtn.style('background-color', '#5D4037'); });
  nameSubmitBtn.mouseOut(() => { nameSubmitBtn.style('background-color', '#3E2723'); });
  nameSubmitBtn.mousePressed(submitName);
  nameSubmitBtn.hide();

  // 角色2的回應輸入框與測驗觸發
  stop2Input = createInput();
  stop2Input.attribute('placeholder', '(請在此輸入內容...)');
  stop2Input.size(200);
  stop2Input.style('border', '2px solid #5D4037');
  stop2Input.style('border-radius', '10px');
  stop2Input.style('padding', '5px');
  stop2Input.style('font-size', '16px');
  stop2Input.style('background-color', '#FFF8E1');
  stop2Input.style('color', '#3E2723');
  stop2Input.style('font-family', '"Courier New", monospace');
  stop2Input.style('font-weight', 'bold');
  stop2Input.hide();
  stop2Input.changed(handleStop2Input);

  stop2SubmitBtn = createButton('送出');
  stop2SubmitBtn.style('font-size', '16px');
  stop2SubmitBtn.style('padding', '5px 10px');
  stop2SubmitBtn.style('background-color', '#3E2723');
  stop2SubmitBtn.style('color', '#FFFFFF');
  stop2SubmitBtn.style('border', '2px solid #FFD700');
  stop2SubmitBtn.style('border-radius', '5px');
  stop2SubmitBtn.style('cursor', 'pointer');
  stop2SubmitBtn.mouseOver(() => { stop2SubmitBtn.style('background-color', '#5D4037'); });
  stop2SubmitBtn.mouseOut(() => { stop2SubmitBtn.style('background-color', '#3E2723'); });
  stop2SubmitBtn.mousePressed(handleStop2Input);
  stop2SubmitBtn.hide();

  // --- 解析 CSV 題目資料 ---
  if (questionsTable) {
    for (let r = 0; r < questionsTable.getRowCount(); r++) {
      let row = questionsTable.getRow(r);
      
      let q = (row.get('題目') || row.getString(0) || "").trim();
      let o1 = (row.get('選項A') || row.getString(1) || "").trim();
      let o2 = (row.get('選項B') || row.getString(2) || "").trim();
      let o3 = (row.get('選項C') || row.getString(3) || "").trim();
      let o4 = (row.get('選項D') || row.getString(4) || "").trim();
      let ans = (row.get('正確答案') || row.getString(5) || "").trim();
      let correctMsg = (row.get('答對回饋語') || row.getString(6) || "答對了！").trim();
      let wrongMsg = (row.get('答錯回饋語') || row.getString(7) || "答錯了！").trim();
      
      if (q) {
        let options = [o1, o2, o3, o4].filter(x => x);
        let answerText = ans;

        // 將 "選項A" 這種格式轉換為實際的選項文字
        const optionMap = {
          '選項A': o1, '選項B': o2, '選項C': o3, '選項D': o4
        };
        if (optionMap[ans]) {
          answerText = optionMap[ans];
        }

        quizData.push({
          question: q,
          options: options,
          answer: answerText,
          correctMsg: correctMsg,
          wrongMsg: wrongMsg
        });
      }
    }
  }

  // --- 解析 CSV 題目資料 2 (Kagura) ---
  if (questionsTable2) {
    for (let r = 0; r < questionsTable2.getRowCount(); r++) {
      let row = questionsTable2.getRow(r);
      let q = (row.get('題目') || row.getString(0) || "").trim();
      let ans = (row.get('正確答案') || row.getString(1) || "").trim();
      let correctMsg = (row.get('答對回饋語') || row.getString(2) || "答對了！").trim();
      let wrongMsg = (row.get('答錯回饋語') || row.getString(3) || "答錯了！").trim();
      
      if (q && ans) {
        quizData2.push({
          question: q,
          answer: ans,
          correctMsg: correctMsg,
          wrongMsg: wrongMsg
        });
      }
    }
  }

  // --- 解析 CSV 題目資料 3 (Sakaki) ---
  if (questionsTable3) {
    for (let r = 0; r < questionsTable3.getRowCount(); r++) {
      let row = questionsTable3.getRow(r);
      let q = (row.get('題目') || row.getString(0) || "").trim();
      let o1 = (row.get('選項A') || row.getString(1) || "").trim();
      let o2 = (row.get('選項B') || row.getString(2) || "").trim();
      let o3 = (row.get('選項C') || row.getString(3) || "").trim();
      let o4 = (row.get('選項D') || row.getString(4) || "").trim();
      let o5 = (row.get('選項E') || row.getString(5) || "").trim();
      let ans = (row.get('正確答案') || row.getString(6) || "").trim();
      let correctMsg = (row.get('答對回饋語') || row.getString(7) || "答對了！").trim();
      let wrongMsg = (row.get('答錯回饋語') || row.getString(8) || "答錯了！").trim();
      
      if (q) {
        let options = [o1, o2, o3, o4, o5].filter(x => x);
        let answerText = ans;
        const optionMap = { '選項A': o1, '選項B': o2, '選項C': o3, '選項D': o4, '選項E': o5 };
        if (optionMap[ans]) answerText = optionMap[ans];

        quizData3.push({
          question: q,
          options: options,
          answer: answerText,
          correctMsg: correctMsg,
          wrongMsg: wrongMsg
        });
      }
    }
  }

  // --- 解析 CSV 題目資料 4 (Yukari - game.csv) ---
  if (gameTable) {
    for (let r = 0; r < gameTable.getRowCount(); r++) {
      let row = gameTable.getRow(r);
      let q = (row.get('題目') || row.getString(0) || "").trim();
      let o1 = (row.get('選項A') || row.getString(1) || "").trim();
      let o2 = (row.get('選項B') || row.getString(2) || "").trim();
      let o3 = (row.get('選項C') || row.getString(3) || "").trim();
      let o4 = (row.get('選項D') || row.getString(4) || "").trim();
      let ans = (row.get('正確答案') || row.getString(5) || "").trim();
      
      if (q) {
        let options = [o1, o2, o3, o4].filter(x => x);
        let answerText = ans;
        const optionMap = { 'A': o1, 'B': o2, 'C': o3, 'D': o4 };
        if (optionMap[ans]) answerText = optionMap[ans];

        yukariQuizData.push({ question: q, options: options, answer: answerText });
      }
    }
  }

  // --- 解析 CSV 提示資料 ---
  if (pointTable) {
    for (let r = 0; r < pointTable.getRowCount(); r++) {
      let row = pointTable.getRow(r);
      let q = (row.get('題目') || row.getString(0) || "").trim();
      let h = (row.get('提示') || row.getString(1) || "").trim();
      if (q && h) {
        pointData.push({ question: q, hint: h });
      }
    }
  }

  missionList = createSelect();
  missionList.position(70, 20);
  missionList.size(250);
  for (let i = 0; i < missions.length; i++) {
    missionList.option(missions[i].title);
  }
  missionList.changed(missionSelected);
  missionList.style('font-size', '18px');
  missionList.style('padding', '10px');
  missionList.style('background-color', '#FFF8E1');
  missionList.style('border', '3px solid #5D4037');
  missionList.style('border-radius', '15px');
  missionList.style('color', '#3E2723');
  missionList.style('font-family', '"Courier New", monospace');
  missionList.style('font-weight', 'bold');
  missionList.style('cursor', 'pointer');
  missionList.style('outline', 'none');
  missionList.hide();

  for (let x = -width + 50; x < -50; x += 100) {
    // 金幣位置改為貼齊地板 (height * 0.90)
    coinsList.push({ x: x, y: height * 0.90 - coinsH - 10, collected: false });
  }
  for (let x = width + 50; x < width * 1.5 - 50; x += 100) {
    coinsList.push({ x: x, y: height * 0.90 - coinsH - 10, collected: false });
  }

  chatInput = createInput();
  chatInput.size(150);
  chatInput.style('background-color', '#FFF8E1');
  chatInput.style('border', '2px solid #5D4037');
  chatInput.style('border-radius', '5px');
  chatInput.style('color', '#3E2723');
  chatInput.style('font-family', '"Courier New", monospace');
  chatInput.style('font-weight', 'bold');
  chatInput.hide();
  
  sendBtn = createButton('送出');
  sendBtn.mousePressed(handleChatSubmit);
  sendBtn.hide();
  sendBtn.style('z-index', '1001');
  sendBtn.style('background-color', '#3E2723');
  sendBtn.style('color', '#FFFFFF');
  sendBtn.style('border', '2px solid #FFD700');
  sendBtn.style('border-radius', '5px');
  sendBtn.style('font-family', '"Courier New", monospace');
  sendBtn.style('cursor', 'pointer');
  chatInput.style('z-index', '1001');

  chatOutputDiv = createDiv(chatLog.replace(/\n/g, '<br>'));
  chatOutputDiv.style('overflow-y', 'auto');
  chatOutputDiv.style('padding', '10px');
  chatOutputDiv.style('font-size', '16px');
  chatOutputDiv.style('line-height', '1.5');
  chatOutputDiv.style('color', '#FFFFFF');
  chatOutputDiv.style('font-family', '"Courier New", monospace');
  chatOutputDiv.style('z-index', '1001');
  chatOutputDiv.hide();

  chatBg = createDiv('');
  chatBg.style('background-color', 'rgba(62, 39, 35, 0.95)');
  chatBg.style('border', '2px solid #FFD700');
  chatBg.style('border-radius', '15px');
  chatBg.style('z-index', '1000');
  chatBg.hide();

  enter101Btn = createButton('101');
  enter101Btn.position(0, 0);
  enter101Btn.hide();
  enter101Btn.style('font-size', '16px');
  enter101Btn.style('padding', '5px 10px');
  enter101Btn.style('background-color', '#3E2723');
  enter101Btn.style('color', '#FFFFFF');
  enter101Btn.style('border', '2px solid #FFD700');
  enter101Btn.style('font-family', '"Courier New", monospace');
  enter101Btn.style('font-weight', 'bold');
  enter101Btn.style('border-radius', '5px');
  enter101Btn.style('cursor', 'pointer');
  enter101Btn.mousePressed(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      fadeAlpha = 0;
      fadeDirection = 1;
      targetScene = 'class101';
      enter101Btn.hide();
    }
  });

  enter102Btn = createButton('102');
  enter102Btn.position(0, 0);
  enter102Btn.hide();
  enter102Btn.style('font-size', '16px');
  enter102Btn.style('padding', '5px 10px');
  enter102Btn.style('background-color', '#3E2723');
  enter102Btn.style('color', '#FFFFFF');
  enter102Btn.style('border', '2px solid #FFD700');
  enter102Btn.style('font-family', '"Courier New", monospace');
  enter102Btn.style('font-weight', 'bold');
  enter102Btn.style('border-radius', '5px');
  enter102Btn.style('cursor', 'pointer');
  enter102Btn.mousePressed(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      fadeAlpha = 0;
      fadeDirection = 1;
      targetScene = 'class102';
      enter102Btn.hide();
    }
  });

  enter103Btn = createButton('103');
  enter103Btn.position(0, 0);
  enter103Btn.hide();
  enter103Btn.style('font-size', '16px');
  enter103Btn.style('padding', '5px 10px');
  enter103Btn.style('background-color', '#3E2723');
  enter103Btn.style('color', '#FFFFFF');
  enter103Btn.style('border', '2px solid #FFD700');
  enter103Btn.style('font-family', '"Courier New", monospace');
  enter103Btn.style('font-weight', 'bold');
  enter103Btn.style('border-radius', '5px');
  enter103Btn.style('cursor', 'pointer');
  enter103Btn.mousePressed(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      fadeAlpha = 0;
      fadeDirection = 1;
      targetScene = 'class103';
      enter103Btn.hide();
    }
  });

  enterPlaygroundBtn = createButton('前往操場');
  enterPlaygroundBtn.hide();
  enterPlaygroundBtn.style('font-size', '16px');
  enterPlaygroundBtn.style('padding', '5px 10px');
  enterPlaygroundBtn.style('background-color', '#3E2723');
  enterPlaygroundBtn.style('color', '#FFFFFF');
  enterPlaygroundBtn.style('border', '2px solid #FFD700');
  enterPlaygroundBtn.style('font-family', '"Courier New", monospace');
  enterPlaygroundBtn.style('font-weight', 'bold');
  enterPlaygroundBtn.style('border-radius', '5px');
  enterPlaygroundBtn.style('cursor', 'pointer');
  enterPlaygroundBtn.mousePressed(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      fadeAlpha = 0;
      fadeDirection = 1;
      targetScene = 'playground';
      enterPlaygroundBtn.hide();
    }
  });

  backToHallBtn = createButton('走廊');
  backToHallBtn.hide();
  backToHallBtn.style('font-size', '14px');
  backToHallBtn.style('padding', '5px 10px');
  backToHallBtn.style('background-color', '#3E2723');
  backToHallBtn.style('color', '#FFFFFF');
  backToHallBtn.style('border', '2px solid #FFD700');
  backToHallBtn.style('font-family', '"Courier New", monospace');
  backToHallBtn.style('font-weight', 'bold');
  backToHallBtn.style('border-radius', '5px');
  backToHallBtn.style('cursor', 'pointer');
  backToHallBtn.mousePressed(() => {
    if (!isTransitioning) {
      isTransitioning = true;
      fadeAlpha = 0;
      fadeDirection = 1;
      targetScene = 'hallway';
      backToHallBtn.hide();
    }
  });

  // 開始播放背景音樂並循環
  bgMusic.loop();

  // 建立音量滑桿
  volumeSlider = createSlider(0, 1, 0.3, 0.01); // 最小值, 最大值, 初始值, 間隔
  volumeSlider.hide();
  
  // 建立音效滑桿
  sfxSlider = createSlider(0, 1, 0.5, 0.01);
  sfxSlider.hide();

  retryQuizBtn = createButton('再測驗一次');
  retryQuizBtn.hide();
  retryQuizBtn.style('font-size', '16px');
  retryQuizBtn.style('padding', '5px 10px');
  retryQuizBtn.style('background-color', '#3E2723');
  retryQuizBtn.style('color', '#FFFFFF');
  retryQuizBtn.style('border', '2px solid #FFD700');
  retryQuizBtn.style('font-family', '"Courier New", monospace');
  retryQuizBtn.style('font-weight', 'bold');
  retryQuizBtn.style('border-radius', '5px');
  retryQuizBtn.style('cursor', 'pointer');
  retryQuizBtn.mousePressed(() => {
    yomiDefeated = false;
    quizFailed = false;
    isQuizTimeout = false;
    missions[3].completed = false;
    playerLostBattle = false;
    
    isQuizActive = true;
    if (quizData.length > 0) {
      currentQuizList = shuffle(quizData).slice(0, 3);
    }
    quizLives = 3;
    quizTimer = maxQuizTime;
    quizStep = 0;
    quizFeedback = "";
    quizFeedbackTimer = 0;
    quizFailedTimer = 0;
    
    playerSaidOk = true;
    hasAnsweredStop2Quiz = true;
    retryQuizBtn.hide();
  });

  kaguraInput = createInput();
  kaguraInput.attribute('placeholder', '(請在此輸入內容...)');
  kaguraInput.size(200);
  kaguraInput.style('border', '2px solid #5D4037');
  kaguraInput.style('border-radius', '10px');
  kaguraInput.style('padding', '5px');
  kaguraInput.style('font-size', '16px');
  kaguraInput.style('background-color', '#FFF8E1');
  kaguraInput.style('color', '#3E2723');
  kaguraInput.style('font-family', '"Courier New", monospace');
  kaguraInput.hide();
  kaguraInput.changed(handleKaguraInput);

  kaguraChatBtn = createButton('送出');
  kaguraChatBtn.style('font-size', '16px');
  kaguraChatBtn.style('padding', '5px 10px');
  kaguraChatBtn.style('background-color', '#3E2723');
  kaguraChatBtn.style('color', '#FFFFFF');
  kaguraChatBtn.style('border', '2px solid #FFD700');
  kaguraChatBtn.style('border-radius', '5px');
  kaguraChatBtn.style('cursor', 'pointer');
  kaguraChatBtn.mouseOver(() => { kaguraChatBtn.style('background-color', '#5D4037'); });
  kaguraChatBtn.mouseOut(() => { kaguraChatBtn.style('background-color', '#3E2723'); });
  kaguraChatBtn.mousePressed(handleKaguraInput);
  kaguraChatBtn.hide();

  kaguraAnswerInput = createInput();
  kaguraAnswerInput.attribute('placeholder', '請輸入答案');
  kaguraAnswerInput.size(150);
  kaguraAnswerInput.style('font-size', '18px');
  kaguraAnswerInput.style('padding', '5px');
  kaguraAnswerInput.style('color', '#FFFFFF');
  kaguraAnswerInput.style('background-color', 'rgba(0,0,0,0.6)');
  kaguraAnswerInput.style('border', '2px solid #FFFFFF');
  kaguraAnswerInput.style('border-radius', '5px');
  kaguraAnswerInput.style('font-family', 'Courier New');
  kaguraAnswerInput.style('outline', 'none');
  kaguraAnswerInput.hide();
  kaguraAnswerInput.elt.onkeydown = function(event) {
    if (event.key === 'Enter') {
      checkKaguraAnswer();
    }
  };

  kaguraSubmitBtn = createButton('送出');
  kaguraSubmitBtn.style('font-size', '18px');
  kaguraSubmitBtn.style('padding', '5px 10px');
  kaguraSubmitBtn.style('cursor', 'pointer');
  kaguraSubmitBtn.style('color', '#FFFFFF');
  kaguraSubmitBtn.style('background-color', 'rgba(0,0,0,0.8)');
  kaguraSubmitBtn.style('border', '2px solid #FFFFFF');
  kaguraSubmitBtn.style('border-radius', '5px');
  kaguraSubmitBtn.style('font-family', 'Courier New');
  kaguraSubmitBtn.style('font-weight', 'bold');
  kaguraSubmitBtn.mousePressed(checkKaguraAnswer);
  kaguraSubmitBtn.hide();

  retryKaguraQuizBtn = createButton('再次測驗');
  retryKaguraQuizBtn.hide();
  retryKaguraQuizBtn.style('font-size', '16px');
  retryKaguraQuizBtn.style('padding', '5px 10px');
  retryKaguraQuizBtn.style('background-color', '#3E2723');
  retryKaguraQuizBtn.style('color', '#FFFFFF');
  retryKaguraQuizBtn.style('border', '2px solid #FFD700');
  retryKaguraQuizBtn.style('font-family', '"Courier New", monospace');
  retryKaguraQuizBtn.style('font-weight', 'bold');
  retryKaguraQuizBtn.style('border-radius', '5px');
  retryKaguraQuizBtn.style('cursor', 'pointer');
  retryKaguraQuizBtn.mousePressed(() => {
    kaguraDefeated = false;
    kaguraQuizFailed = false;
    isKaguraQuizTimeout = false;
    missions[4].completed = false;
    playerLostBattle = false;
    startKaguraQuiz();
    retryKaguraQuizBtn.hide();
  });

  sakakiInput = createInput();
  sakakiInput.attribute('placeholder', '(請在此輸入內容...)');
  sakakiInput.size(200);
  sakakiInput.style('border', '2px solid #5D4037');
  sakakiInput.style('border-radius', '10px');
  sakakiInput.style('padding', '5px');
  sakakiInput.style('font-size', '16px');
  sakakiInput.style('background-color', '#FFF8E1');
  sakakiInput.style('color', '#3E2723');
  sakakiInput.style('font-family', '"Courier New", monospace');
  sakakiInput.hide();
  sakakiInput.changed(handleSakakiInput);

  sakakiChatBtn = createButton('送出');
  sakakiChatBtn.style('font-size', '16px');
  sakakiChatBtn.style('padding', '5px 10px');
  sakakiChatBtn.style('background-color', '#3E2723');
  sakakiChatBtn.style('color', '#FFFFFF');
  sakakiChatBtn.style('border', '2px solid #FFD700');
  sakakiChatBtn.style('border-radius', '5px');
  sakakiChatBtn.style('cursor', 'pointer');
  sakakiChatBtn.mouseOver(() => { sakakiChatBtn.style('background-color', '#5D4037'); });
  sakakiChatBtn.mouseOut(() => { sakakiChatBtn.style('background-color', '#3E2723'); });
  sakakiChatBtn.mousePressed(handleSakakiInput);
  sakakiChatBtn.hide();

  sakakiAnswerInput = createInput();
  sakakiAnswerInput.attribute('placeholder', '請輸入答案');
  sakakiAnswerInput.size(150);
  sakakiAnswerInput.style('font-size', '18px');
  sakakiAnswerInput.style('padding', '5px');
  sakakiAnswerInput.style('color', '#3E2723');
  sakakiAnswerInput.style('background-color', '#FFF8E1');
  sakakiAnswerInput.style('border', '2px solid #5D4037');
  sakakiAnswerInput.style('border-radius', '5px');
  sakakiAnswerInput.style('font-family', 'Courier New');
  sakakiAnswerInput.style('outline', 'none');
  sakakiAnswerInput.hide();
  sakakiAnswerInput.elt.onkeydown = function(event) {
    if (event.key === 'Enter') {
      checkSakakiAnswer();
    }
  };

  sakakiSubmitBtn = createButton('送出');
  sakakiSubmitBtn.style('font-size', '18px');
  sakakiSubmitBtn.style('padding', '5px 10px');
  sakakiSubmitBtn.style('cursor', 'pointer');
  sakakiSubmitBtn.style('color', '#FFFFFF');
  sakakiSubmitBtn.style('background-color', '#3E2723');
  sakakiSubmitBtn.style('border', '2px solid #FFD700');
  sakakiSubmitBtn.style('border-radius', '5px');
  sakakiSubmitBtn.style('font-family', 'Courier New');
  sakakiSubmitBtn.style('font-weight', 'bold');
  sakakiSubmitBtn.mousePressed(checkSakakiAnswer);
  sakakiSubmitBtn.hide();

  // 初始化 103 教室的平台與金幣
  platforms103 = [
    { x: 0, y: height * 0.98, w: width, h: 20 }, // 地板
    { x: 10, y: height * 0.70, w: 100, h: 30 },
    { x: 120, y: height * 0.55, w: 100, h: 30 },
    { x: 230, y: height * 0.40, w: 100, h: 30 },
    { x: 340, y: height * 0.25, w: 100, h: 30 },
    { x: 450, y: height * 0.35, w: 120, h: 30 },
    { x: 580, y: height * 0.50, w: 120, h: 30 },
    { x: 710, y: height * 0.65, w: 120, h: 30 },
    { x: 840, y: height * 0.75, w: 120, h: 30 },
    { x: 970, y: height * 0.60, w: 120, h: 30 },
    { x: 1100, y: height * 0.45, w: 120, h: 30 },
    { x: 1230, y: height * 0.30, w: 120, h: 30 },
    { x: 300, y: height * 0.75, w: 80, h: 30 },
    { x: 500, y: height * 0.70, w: 80, h: 30 },
    { x: 650, y: height * 0.25, w: 80, h: 30 },
    { x: 1000, y: height * 0.85, w: 80, h: 30 }
  ];

  for (let i = 0; i < platforms103.length; i++) {
    let p = platforms103[i];
    if (i === 0) {
      // 地板金幣增加
      let numCoins = floor(p.w / 50);
      for(let j=0; j<numCoins; j++) {
          coins103.push({ x: p.x + 50 + j*50, y: p.y - 60, collected: false });
      }
    } else {
      let coinSpacing = 30;
      let numCoins = floor((p.w - 20) / coinSpacing);
      for(let j=0; j<numCoins; j++) {
          coins103.push({ x: p.x + 10 + j*coinSpacing, y: p.y - 60, collected: false });
      }
    }
  }

  retrySakakiQuizBtn = createButton('再次挑戰');
  retrySakakiQuizBtn.hide();
  retrySakakiQuizBtn.style('font-size', '16px');
  retrySakakiQuizBtn.style('padding', '5px 10px');
  retrySakakiQuizBtn.style('background-color', '#3E2723');
  retrySakakiQuizBtn.style('color', '#FFFFFF');
  retrySakakiQuizBtn.style('border', '2px solid #FFD700');
  retrySakakiQuizBtn.style('font-family', '"Courier New", monospace');
  retrySakakiQuizBtn.style('font-weight', 'bold');
  retrySakakiQuizBtn.style('border-radius', '5px');
  retrySakakiQuizBtn.style('cursor', 'pointer');
  retrySakakiQuizBtn.mousePressed(() => {
    sakakiQuizFailed = false;
    sakakiDefeated = false;
    sakakiQuizFailedTimer = 0;
    isSakakiQuizTimeout = false;
    missions[5].completed = false;
    startSakakiQuiz();
    retrySakakiQuizBtn.hide();
  });

  yukariGameBtn = createButton('小遊戲');
  yukariGameBtn.style('font-size', '16px');
  yukariGameBtn.style('padding', '5px 10px');
  yukariGameBtn.style('background-color', '#3E2723');
  yukariGameBtn.style('color', '#FFFFFF');
  yukariGameBtn.style('border', '2px solid #FFD700');
  yukariGameBtn.style('border-radius', '5px');
  yukariGameBtn.style('cursor', 'pointer');
  yukariGameBtn.mousePressed(() => {
    startYukariMiniGame();
  });
  yukariGameBtn.hide();

  yukariQuizBtn = createButton('小測驗');
  yukariQuizBtn.style('font-size', '16px');
  yukariQuizBtn.style('padding', '5px 10px');
  yukariQuizBtn.style('background-color', '#3E2723');
  yukariQuizBtn.style('color', '#FFFFFF');
  yukariQuizBtn.style('border', '2px solid #FFD700');
  yukariQuizBtn.style('border-radius', '5px');
  yukariQuizBtn.style('cursor', 'pointer');
  yukariQuizBtn.mousePressed(() => {
    startYukariQuiz();
  });
  yukariQuizBtn.hide();

  yukariSkipBtn = createButton('跳過 (5幣)');
  yukariSkipBtn.style('font-size', '16px');
  yukariSkipBtn.style('padding', '5px 10px');
  yukariSkipBtn.style('background-color', '#FF9800'); // 橘色
  yukariSkipBtn.style('color', '#FFFFFF');
  yukariSkipBtn.style('border', '2px solid #FFFFFF');
  yukariSkipBtn.style('border-radius', '5px');
  yukariSkipBtn.style('cursor', 'pointer');
  yukariSkipBtn.mousePressed(() => {
    if (coinScore >= 5) {
      coinScore -= 5;
      yukariQuizStep++;
      removeYukariQuizButtons();
      yukariQuizFeedbackTimer = 0;
    }
  });
  yukariSkipBtn.hide();

  continueGameBtn = createButton('要');
  continueGameBtn.style('font-size', '16px');
  continueGameBtn.style('padding', '5px 15px');
  continueGameBtn.style('background-color', '#3E2723');
  continueGameBtn.style('color', '#FFFFFF');
  continueGameBtn.style('border', '2px solid #FFD700');
  continueGameBtn.style('border-radius', '5px');
  continueGameBtn.style('cursor', 'pointer');
  continueGameBtn.mousePressed(() => {
    endGameChoice = 'continue';
    continueGameBtn.hide();
    endGameBtn.hide();
  });
  continueGameBtn.hide();

  endGameBtn = createButton('不要');
  endGameBtn.style('font-size', '16px');
  endGameBtn.style('padding', '5px 15px');
  endGameBtn.style('background-color', '#3E2723');
  endGameBtn.style('color', '#FFFFFF');
  endGameBtn.style('border', '2px solid #FFD700');
  endGameBtn.style('border-radius', '5px');
  endGameBtn.style('cursor', 'pointer');
  endGameBtn.mousePressed(() => {
    endGameChoice = 'end';
    continueGameBtn.hide();
    endGameBtn.hide();
  });
  endGameBtn.hide();

  playAgainBtn = createButton('再玩一次');
  playAgainBtn.style('font-size', '24px');
  playAgainBtn.style('padding', '10px 30px');
  playAgainBtn.style('background-color', '#4CAF50');
  playAgainBtn.style('color', '#FFFFFF');
  playAgainBtn.style('border', '3px solid #FFFFFF');
  playAgainBtn.style('border-radius', '10px');
  playAgainBtn.style('cursor', 'pointer');
  playAgainBtn.style('font-family', '"Courier New", monospace');
  playAgainBtn.style('font-weight', 'bold');
  playAgainBtn.mousePressed(() => {
    resetGame();
  });
  playAgainBtn.hide();

  // 載入排行榜資料
  try {
    let storedData = localStorage.getItem('survivalSchoolLeaderboard');
    if (storedData) {
      leaderboardData = JSON.parse(storedData);
    }
  } catch (e) {
    console.error("無法讀取排行榜資料", e);
  }
}

function draw() {
  // 更新音量 (移至最上方以確保在初始畫面也能生效)
  let vol = volumeSlider.value();
  if (bgMusic) bgMusic.setVolume(vol);
  if (battleMusic) battleMusic.setVolume(vol);
  if (endingMusic) endingMusic.setVolume(vol);
  
  let shouldHideUI = isTransitioning && (targetScene === 'ending' || isFirstTransition);

  // 更新觸控狀態
  updateTouchState();

  // 更新音效音量
  let sfxVol = sfxSlider.value();
  
  // 處理轉場時的音樂淡出淡入
  if (gameState === 'START' && isStartingGame && startPlayerX > width) {
     vol *= map(fadeAlpha, 0, 255, 1, 0);
  } else if (gameState === 'PLAYING' && isTransitioning && fadeDirection === -1) {
     vol *= map(fadeAlpha, 255, 0, 0, 1);
  } else if (gameState === 'PLAYING' && isTransitioning && fadeDirection === 1) {
     vol *= map(fadeAlpha, 0, 255, 1, 0);
  }

  if (walkSound) walkSound.setVolume(sfxVol);
  if (runSound) runSound.setVolume(sfxVol);
  if (coinSound) coinSound.setVolume(sfxVol * 0.4);

  if (gameState === 'START') {
    drawStartScreen();
    return;
  }

  if (isGameOver) {
    background(0);
    fill(255, 0, 0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(gameOverMessage, width / 2, height / 2);
    return;
  }

  let isAnyModalOpen = showSettings || showMissionBox || showScoreHelp || showCoinHelp || showChatDialog || isYukariMiniGameActive;

  if (yukariGameBtn) yukariGameBtn.hide();
  if (yukariQuizBtn) yukariQuizBtn.hide();

  let playerScale = (currentScene === 'class103') ? charScale * 0.5 : charScale;

  if (!isQuizActive && quizButtons.length > 0) {
    removeQuizButtons();
  }
  if (!isSakakiQuizActive && sakakiQuizButtons.length > 0) {
    removeSakakiQuizButtons();
  }
  if (!isYukariQuizActive && yukariQuizButtons.length > 0) {
    removeYukariQuizButtons();
  }

  // 處理無敵時間計時器
  if (playerInvincible) {
    playerInvincibleTimer++;
    let invTime = (currentScene === 'class102' || (currentScene === 'playground' && isFighting)) ? 150 : 60; // 角色3與角色4對戰時無敵時間長一點
    if (playerInvincibleTimer > invTime) { 
      playerInvincible = false;
      playerInvincibleTimer = 0;
    }
  }
  if (yomiInvincible) {
    yomiInvincibleTimer++;
    if (yomiInvincibleTimer > 60) {
      yomiInvincible = false;
      yomiInvincibleTimer = 0;
    }
  }

  if (currentScene === 'class101') {
    let classFloorY = height * 0.98; // 教室地板位置
    kaguraInput.hide();
    sakakiInput.hide();
    background(220);
    enterPlaygroundBtn.hide();
    image(class1Img, 0, 0, width, height);

    let currentStop2Sheet = stop2Sheet;
    let currentStop2W = stop2W;
    let currentStop2H = stop2H;
    let currentStop2Frame = floor(frameCount / 10) % 4;

    if (isFighting) {
      if (playerHP <= 0) {
        if (!isTransitioning) { // 修正：防止每一幀都重置轉場，導致畫面卡住
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end';
          battleResult = 'lose';
        }
      } else if (yomiHP <= 0) {
        if (!isTransitioning) { // 修正：防止每一幀都重置轉場
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end';
          battleResult = 'win';
        }
      }
    }

    if (isStop2Hit) {
      currentStop2Sheet = fall2Sheet;
      currentStop2W = fall2W;
      currentStop2H = fall2H;
      currentStop2Frame = floor(stop2HitTimer / 10); // 減慢動畫速度
      stop2HitTimer++;
      if (currentStop2Frame >= 5) {
        isStop2Hit = false;
      }
    } else if (isFighting) {
      currentStop2Sheet = fight2Sheet;
      currentStop2W = fight2W;
      currentStop2H = fight2H;
      
      let animSpeed = 5;
      let totalFrames = 12;
      let cycleDuration = totalFrames * animSpeed;
      let frameIdx = floor(fightTimer / animSpeed);

      if (frameIdx < totalFrames) {
        currentStop2Frame = frameIdx;
      } else {
        currentStop2Frame = 11; // 停在最後一張

        // 動畫播放完畢 (12張)，產生新角色 (Tool)
        // 改為精確判斷時間點，確保只發射一次攻擊
        if (fightTimer === cycleDuration) {
          yomiTools.push({
            x: stop2X + currentStop2W * charScale, 
            y: classFloorY - currentStop2H * charScale + 50, // 調整生成高度，基於新的地板位置
            timer: 0,
            dir: 1 // Yomi 在左側面向右，故 Tool 向右移動
          });
        }
        // 稍微停頓後重置動畫，讓攻擊循環
        if (fightTimer > cycleDuration + 20) {
          fightTimer = 0;
        }
      }
      fightTimer++;
    } else if (abs(playerX - stop2X) < 200) {
      stop2Timer++;
      if (playerLostBattle) {
        currentStop2Sheet = hi2Sheet;
        currentStop2W = hi2W;
        currentStop2H = hi2H;
        currentStop2Frame = floor(frameCount / 10) % 2;
      } else if (yomiDefeated) {
        currentStop2Sheet = end2Sheet;
        currentStop2W = end2W;
        currentStop2H = end2H;
        currentStop2Frame = floor(frameCount / 10) % 4;
      } else if (quizFailed) {
        currentStop2Sheet = beforefight2Sheet;
        currentStop2W = beforefight2W;
        currentStop2H = beforefight2H;
        currentStop2Frame = floor(frameCount / 10) % 5;
        
        // 失敗後延遲觸發轉場
        quizFailedTimer++;
        if (quizFailedTimer > 120 && !isTransitioning) {
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'class101_fight'; // 特殊轉場標記
        }
      } else if (missions[3].completed) {
        currentStop2Sheet = right2Sheet;
        currentStop2W = right2W;
        currentStop2H = right2H;
        currentStop2Frame = floor(frameCount / 5) % 8;
      } else {
        currentStop2Sheet = hi2Sheet;
        currentStop2W = hi2W;
        currentStop2H = hi2H;
        currentStop2Frame = floor(frameCount / 10) % 2;
      }
    } else {
      stop2Timer = 0;
    }

    // 修正 Yomi 的 Y 座標，使其站在地板上
    let stop2Y = classFloorY - (currentStop2H * charScale);
    let baseStop2Y = classFloorY - (stop2H * charScale);
    
    if (playerX < stop2X) {
      push();
      translate(stop2X + currentStop2W * charScale, stop2Y);
      scale(-1, 1);
      image(currentStop2Sheet, 0, 0, currentStop2W * charScale, currentStop2H * charScale, currentStop2Frame * currentStop2W, 0, currentStop2W, currentStop2H);
      pop();
    } else {
      // 若 Yomi 處於無敵狀態，加入閃爍效果
      if (yomiInvincible && frameCount % 10 < 5) tint(255, 128);
      image(currentStop2Sheet, stop2X, stop2Y, currentStop2W * charScale, currentStop2H * charScale, currentStop2Frame * currentStop2W, 0, currentStop2W, currentStop2H);
      noTint(); // 重置 tint
    }

    // 繪製 Yomi 的攻擊 (Tool2)
    for (let i = yomiTools.length - 1; i >= 0; i--) {
      let t = yomiTools[i];
      t.timer++;
      t.x += 25 * t.dir; // 加快移動速度，讓攻擊更具威脅性
      
      let tFrame = floor(t.timer / 5); // 動畫速度
      if (tFrame >= 8) {
        yomiTools.splice(i, 1); // 顯示完8張後消失
      } else {
        image(tool2Sheet, t.x, t.y, tool2W * charScale, tool2H * charScale, tFrame * tool2W, 0, tool2W, tool2H);

        // 檢查 Yomi 的攻擊是否擊中玩家
        let playerHitboxX = playerX;
        let playerHitboxW = spriteW * charScale;
        let playerHitboxY = playerY;
        let playerHitboxH = spriteH * charScale;

        if (t.x + tool2W * charScale > playerHitboxX && 
            t.x < playerHitboxX + playerHitboxW && 
            t.y + tool2H * charScale > playerHitboxY && 
            t.y < playerHitboxY + playerHitboxH) {
          if (!playerInvincible) { // 檢查是否無敵
            playerHP -= 10;
            if (playerHP < 0) playerHP = 0;
            isFalling = true;
            isHitByTool = true; // 標記為被攻擊導致跌倒
            fallTimer = 0;
            isPushing = false;
            isJumping = false;
            vy = 0;
            playerInvincible = true; // 開啟無敵
            playerInvincibleTimer = 0;
          }
          yomiTools.splice(i, 1); // 擊中後移除
        }
      }
    }

    if (abs(playerX - stop2X) < 200 || isQuizActive) { // 角色2的對話邏輯
      if (hasMetYomi && !hasAnsweredStop2) {
        hasAnsweredStop2 = true;
        stop2QuizTimer = 180;
      }

      push();
      let txt = ""; // 先清空對話內容
      let showPlayerInput = false;

      if (isFighting) {
        // 戰鬥中不顯示對話
      } else if (yomiDefeated) {
        txt = "你怎麼可以暴力...";
      } else if (quizFailed) {
        txt = isQuizTimeout ? "這麼簡單想那麼久?" : "這麼簡單你也可以全錯?!";
      } else if (missions[3].completed) {
        txt = "你很棒!你答完了";
      } else if (!hasAnsweredStop2) { // 如果玩家還沒回應過
        txt = "哈囉，" + playerName;
        showPlayerInput = true;
      } else { // 玩家回應後
        stop2QuizTimer++;
        if (stop2QuizTimer < 60) {
          txt = "好久不見，我是Yomi !"; // 顯示下一句對話
        } else if (stop2QuizTimer < 120) {
          txt = "接下來我們做個數學小測驗 !";
        } else if (stop2QuizTimer < 180) {
          txt = "接下來我們做個數學小測驗 !";
        } else {
          if (!hasAnsweredStop2Quiz) {
            txt = "準備好了嗎?OK打OK";
            showPlayerInput = true;
          } else {
            if (playerSaidOk) {
              if (!isQuizActive) {
                isQuizActive = true;
                yomiPlayCount++;
                if (quizData.length > 0) {
                  currentQuizList = shuffle(quizData).slice(0, 3);
                }
                quizLives = 3; // Reset lives
                quizTimer = maxQuizTime; // Reset timer
                quizStep = 0;
                quizFeedback = "";
                quizFeedbackTimer = 0;
                quizFailed = false;
                quizFailedTimer = 0;
                isQuizTimeout = false;
              }
              txt = "那我們開始囉 !"; // This text will be quickly replaced by the quiz UI
            } else {
              txt = "準備好再來吧!";
            }
          }
        }
      }

      if (showPlayerInput && !isAnyModalOpen && !shouldHideUI) {
        stop2Input.show();
        stop2Input.position(playerX, playerY - 60);
        stop2SubmitBtn.show();
        stop2SubmitBtn.position(playerX + 220, playerY - 60);
      } else {
        stop2Input.hide();
        stop2SubmitBtn.hide();
      }
      
      // 只有當 txt 有內容時，才繪製對話框
      if (txt && !isQuizActive) {
        textSize(20);
        let tw = textWidth(txt);
        let bw = tw + 30;
        let bh = 40;
        let bx = stop2X + (stop2W * charScale - bw) / 2;
        if (bx < 10) bx = 10;
        let by = baseStop2Y - 60;

        fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rectMode(CORNER);
        rect(bx, by, bw, bh, 10);
        fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER);
        textFont('Courier New');
        textStyle(BOLD);
        text(txt, bx + bw / 2, by + bh / 2);

        if (yomiDefeated || playerLostBattle || missions[3].completed) {
          retryQuizBtn.show();
          retryQuizBtn.position(bx + bw / 2 - 50, by - 40);
        } else {
          retryQuizBtn.hide();
        }
      } else {
        retryQuizBtn.hide();
      }
      pop();

      if (isQuizActive) {
        if (quizTimer > 0) {
          quizTimer--;
        }

        // If time runs out or lives are gone, end the quiz
        if (quizTimer <= 0 || quizLives <= 0) {
          removeQuizButtons();
          isQuizActive = false;
          hasAnsweredStop2Quiz = true; // Mark as attempted
          playerSaidOk = false; // Reset this
          if (quizLives <= 0 || quizTimer <= 0) {
            quizFailed = true;
            isQuizTimeout = (quizTimer <= 0);
          }
          return; // Exit quiz logic for this frame
        }

        // 檢查測驗是否結束
        if (quizStep >= currentQuizList.length) {
          removeQuizButtons();
          isQuizActive = false;
          showRewardMessage = true;
          rewardTimer = 0;
          completeMission(3);
          hasAnsweredStop2Quiz = true;
          playerSaidOk = false;
        } else {
          let q = currentQuizList[quizStep];
          lastQuestionText = q.question; // 記錄當前題目

          // 顯示來自 Yomi 的回饋
          if (quizFeedback !== "") {
            push();
            textSize(20);
            textFont('Courier New');
            textStyle(BOLD);
            let feedbackTxt = quizFeedback;
            let tw = textWidth(feedbackTxt);
            let bw = tw + 40 > 180 ? tw + 40 : 180;
            let bh = 60;
            let bx = stop2X + (stop2W * charScale - bw) / 2;
            let by = baseStop2Y - 80;
            
            // RPG 風格回饋框
            fill(0, 0, 0, 200); 
            stroke(255); 
            strokeWeight(3); 
            rectMode(CORNER);
            rect(bx, by, bw, bh, 15);
            
            fill(255); noStroke(); textAlign(CENTER, CENTER);
            text(feedbackTxt, bx + bw / 2, by + bh / 2);
            pop();

            quizFeedbackTimer++;
            if (quizFeedbackTimer > 30) { // 縮短回饋時間至 0.5 秒，避免卡頓感
              quizStep++;
              removeQuizButtons();
              quizFeedback = "";
              quizFeedbackTimer = 0;
            }
          } else { // 如果沒有回饋，則顯示問題和選項
            // --- Draw Timer and Lives ---
            let uiYPos = baseStop2Y - 170;
            let uiWidth = 380;
            let uiXPos = stop2X + (stop2W * charScale - uiWidth) / 2;

            // Timer Bar on the left
            push();
            let timerBarW = 180;
            let timerBarH = 25;
            // Background
            fill(40, 40, 40, 240);
            stroke(255);
            strokeWeight(2);
            rect(uiXPos, uiYPos, timerBarW, timerBarH, 8);
            // Foreground
            let progress = quizTimer / maxQuizTime;
            let progressW = timerBarW * progress;
            let progressColor = '#4CAF50'; // Green
            if (progress < 0.5) progressColor = '#FFC107'; // Yellow
            if (progress < 0.2) progressColor = '#F44336'; // Red
            fill(progressColor);
            noStroke();
            rect(uiXPos, uiYPos, progressW, timerBarH, 8);
            pop();

            // Seconds Display (Right of Timer Bar)
            push();
            let secondsBoxX = uiXPos + timerBarW + 10;
            let secondsBoxW = 50;
            let secondsBoxH = 25;
            // Background Box
            fill(40, 40, 40, 240);
            stroke(255);
            strokeWeight(2);
            rect(secondsBoxX, uiYPos, secondsBoxW, secondsBoxH, 8);
            // Text
            fill(255);
            noStroke();
            textAlign(CENTER, CENTER);
            textSize(16);
            text(Math.ceil(quizTimer / 60), secondsBoxX + secondsBoxW / 2, uiYPos + secondsBoxH / 2);
            pop();

            // RPG Style Hearts on the right
            push();
            let heartBoxW = 120;
            let heartBoxH = 35;
            let heartBoxX = uiXPos + uiWidth - heartBoxW;
            let heartBoxY = uiYPos - 5;
            
            // Background Box for Hearts
            fill(40, 40, 40, 240);
            stroke(255);
            strokeWeight(2);
            rect(heartBoxX, heartBoxY, heartBoxW, heartBoxH, 8);

            // Draw Hearts
            textSize(24); textAlign(CENTER, CENTER); noStroke(); fill(255, 50, 50);
            for(let i = 0; i < quizLives; i++) {
                let hx = heartBoxX + 25 + i * 35;
                let hy = heartBoxY + heartBoxH / 2;
                text('♥', hx, hy);
            }
            pop();

            // 在 Yomi 頭上繪製問題 (RPG 風格)
            push();
            let q_txt = "Q" + (quizStep + 1) + ": " + q.question;
            textSize(18);
            textFont('Courier New');
            textStyle(BOLD);
            
            let q_bw = 380; 
            let q_bh = 100;
            let q_bx = uiXPos;
            let q_by = uiYPos + 40;
            
            // 深色半透明背景 + 白色邊框
            fill(0, 0, 0, 200); 
            stroke(255); 
            strokeWeight(3); 
            rectMode(CORNER);
            rect(q_bx, q_by, q_bw, q_bh, 15);
            
            fill(255); noStroke(); textAlign(CENTER, CENTER);
            text(q_txt, q_bx + 10, q_by + 10, q_bw - 20, q_bh - 20);
            pop();

            // 在玩家角色頭上創建選項按鈕 (RPG 風格)
            if (quizButtons.length === 0) {
              let startX = uiXPos + uiWidth + 20; // 固定在題目框右邊 (uiWidth 為 380)
              let startY = uiYPos + 10; // 對齊題目框頂部
              let shuffledOptions = shuffle(q.options); 
              for (let i = 0; i < shuffledOptions.length; i++) {
                let btn = createButton(shuffledOptions[i]);
                btn.position(startX, startY + i * 55);
                btn.size(240, 45);
                
                // CSS 樣式
                btn.style('font-family', 'Courier New, monospace');
                btn.style('font-size', '18px');
                btn.style('font-weight', 'bold');
                btn.style('color', '#FFFFFF');
                btn.style('background-color', 'rgba(0,0,0,0.8)');
                btn.style('border', '2px solid #FFFFFF');
                btn.style('border-radius', '10px');
                btn.style('cursor', 'pointer');
                btn.style('transition', 'all 0.2s');
                btn.style('box-shadow', '3px 3px 0px rgba(0,0,0,0.5)');
                
                btn.mouseOver(() => {
                    btn.style('background-color', 'rgba(50,50,50,0.9)');
                    btn.style('transform', 'scale(1.05)');
                });
                btn.mouseOut(() => {
                    btn.style('background-color', 'rgba(0,0,0,0.8)');
                    btn.style('transform', 'scale(1)');
                });

                btn.mousePressed(() => {
                  if (quizFeedback !== "") return;
                  if (shuffledOptions[i] === q.answer) {
                    quizFeedback = q.correctMsg; score += 300;
                    coinScore += 30;
                  } else {
                    quizFeedback = q.wrongMsg;
                    quizLives--;
                    totalWrongAnswers++;
                  }
                  quizTimer = maxQuizTime; // Reset timer after each answer
                  removeQuizButtons();
                  quizFeedbackTimer = 0;
                });
                quizButtons.push(btn);
              }
            }
          }
        }
      }
    } else {
      stop2Input.hide();
      stop2SubmitBtn.hide();
      hasAnsweredStop2 = false; // 玩家離開時重置對話狀態
      stop2QuizTimer = 0;
      hasAnsweredStop2Quiz = false;
      playerSaidOk = false;
      isQuizActive = false; // 離開時結束測驗
      retryQuizBtn.hide();
    }
  } else if (currentScene === 'class102') {
    background(220);
    image(class2Img, 0, 0, width, height);
    enterPlaygroundBtn.hide();
    sakakiInput.hide();
    sakakiChatBtn.hide();

    if (isFighting) {
      if (playerHP <= 0) {
        if (!isTransitioning) {
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end_102';
          battleResult = 'lose';
        }
      } else if (kaguraHP <= 0) {
        if (!isTransitioning) {
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end_102';
          battleResult = 'win';
        }
      }
    }

    // --- Draw Kagura ---
    let currentKaguraSheet = kaguraSheet;
    let currentKaguraW = kaguraW;
    let currentKaguraH = kaguraH;
    let currentKaguraFrame = floor(frameCount / 10) % 12;

    if (isKaguraHit) {
      currentKaguraSheet = fall3Sheet;
      currentKaguraW = fall3W;
      currentKaguraH = fall3H;
      currentKaguraFrame = floor(kaguraHitTimer / 5);
      kaguraHitTimer++;
      if (currentKaguraFrame >= 8) {
        isKaguraHit = false;
        if (!isFighting) {
          kaguraX = 500; // 非戰鬥模式下，起身後回到初始位置
        }
      } else {
        // 只有在前 4 幀 (倒下過程) 才往後退，之後 (起身過程) 保持原地
        if (currentKaguraFrame < 4) {
          if (playerX < kaguraX) {
            kaguraX += 5; // 往後倒 (向右)
          } else {
            kaguraX -= 5; // 往後倒 (向左)
          }
        }
      }
    } else if (isFighting) {
      let distToPlayer = abs(playerX - kaguraX);
      let attackRange = 250; // 設定攻擊距離，小於此距離才會攻擊

      if (distToPlayer > attackRange) {
        // 距離太遠，切換為跑步模式並追蹤玩家
        currentKaguraSheet = run3Sheet;
        currentKaguraW = run3W;
        currentKaguraH = run3H;
        currentKaguraFrame = floor(frameCount / 4) % 6; // 跑步動畫
        
        // 移動邏輯：鎖定玩家位置
        if (playerX < kaguraX) {
          kaguraX -= 6; // 往左跑
        } else {
          kaguraX += 6; // 往右跑
        }
        fightTimer = 0; // 重置攻擊計時，確保停下來時從頭開始攻擊動作
      } else {
        // 距離足夠，切換為攻擊模式
        currentKaguraSheet = fight3Sheet;
        currentKaguraW = fight3W;
        currentKaguraH = fight3H;
        currentKaguraFrame = floor(fightTimer / 10) % 3;
        
        // 攻擊邏輯
        let attackCycle = 60; // 角色3攻擊加快：每 60 幀攻擊一次
        if (fightTimer % attackCycle === 30) { // 在動作中間發射
           kaguraTools.push({
              x: kaguraX + (playerX < kaguraX ? -50 : 50), // 根據方向調整發射位置
              y: height * 0.98 - currentKaguraH * charScale + 50,
              timer: 0,
              dir: playerX < kaguraX ? -1 : 1
           });
        }
        fightTimer++;
      }
    } else if (kaguraDefeated) {
      currentKaguraSheet = end3Sheet;
      currentKaguraW = end3W;
      currentKaguraH = end3H;
      currentKaguraFrame = floor(frameCount / 10) % 4;
    } else if (kaguraQuizFailed) {
      // 失敗對話時的動作 (可以維持站立或生氣)
      // 這裡維持預設站立，但可以加入生氣圖
      kaguraQuizFailedTimer++;
      if (kaguraQuizFailedTimer > 60 && !isTransitioning) { // 說完話後馬上進入戰鬥 (約1秒延遲讓玩家看字)
        isTransitioning = true;
        fadeAlpha = 0;
        fadeDirection = 1;
        targetScene = 'class102_fight';
      }
    } else if (missions[4].completed) {
      currentKaguraSheet = right3Sheet;
      currentKaguraW = right3W;
      currentKaguraH = right3H;
      currentKaguraFrame = floor(frameCount / 10) % 4;
    } else if (abs(playerX - kaguraX) < 200) {
      currentKaguraSheet = hi3Sheet;
      currentKaguraW = hi3W;
      currentKaguraH = hi3H;
      currentKaguraFrame = floor(frameCount / 10) % 4;
    }

    // 修正 Kagura 的 Y 座標
    let kaguraFloor = height * 0.98;
    if (isKaguraHit) kaguraFloor = height * 1.05; // 倒下時往下倒 (地板高度變為 102%)

    let kaguraY = kaguraFloor - (currentKaguraH * charScale); 
    
    if (playerX < kaguraX) {
      push();
      translate(kaguraX + currentKaguraW * charScale, kaguraY);
      scale(-1, 1);
      image(currentKaguraSheet, 0, 0, currentKaguraW * charScale, currentKaguraH * charScale, currentKaguraFrame * currentKaguraW, 0, currentKaguraW, currentKaguraH);
      pop();
    } else {
      image(currentKaguraSheet, kaguraX, kaguraY, currentKaguraW * charScale, currentKaguraH * charScale, currentKaguraFrame * currentKaguraW, 0, currentKaguraW, currentKaguraH);
    }

    // 繪製 Kagura 的攻擊 (使用 tool2Sheet 作為暫代，或 generic projectile)
    for (let i = kaguraTools.length - 1; i >= 0; i--) {
      let t = kaguraTools[i];
      t.timer++;
      t.x += 12 * t.dir; // 攻擊速度加快
      
      let tFrame = floor(t.timer / 5);
      if (tFrame >= 8) {
        kaguraTools.splice(i, 1);
      } else {
        // 這裡暫時使用 tool2Sheet (貓掌/攻擊特效)
        image(tool2Sheet, t.x, t.y, tool2W * charScale, tool2H * charScale, tFrame * tool2W, 0, tool2W, tool2H);

        // 檢查是否擊中玩家
        let playerHitboxX = playerX;
        let playerHitboxW = spriteW * charScale;
        let playerHitboxY = playerY;
        let playerHitboxH = spriteH * charScale;

        if (t.x + tool2W * charScale > playerHitboxX && 
            t.x < playerHitboxX + playerHitboxW && 
            t.y + tool2H * charScale > playerHitboxY && 
            t.y < playerHitboxY + playerHitboxH) {
          if (!playerInvincible) {
            playerHP -= 10;
            if (playerHP < 0) playerHP = 0;
            isFalling = true;
            isHitByTool = true;
            fallTimer = 0; isPushing = false; isJumping = false; vy = 0;
            playerInvincible = true; playerInvincibleTimer = 0;
          }
          kaguraTools.splice(i, 1);
        }
      }
    }

    if (abs(playerX - kaguraX) < 200 && !isKaguraQuizActive) {
      push();
      let txt = "";
      if (kaguraDefeated) {
        txt = "我下次會打敗你..";
        retryKaguraQuizBtn.show();
      } else if (missions[4].completed) {
        txt = "你好棒喔你答完了快走吧!";
        retryKaguraQuizBtn.show();
      } else if (playerLostBattle) {
        kaguraDialogueTimer++;
        if (kaguraDialogueTimer < 60) {
          txt = "你還要來挑戰喔?";
        } else {
          txt = "那我們直接開始測驗吧";
          if (kaguraDialogueTimer > 120) {
             startKaguraQuiz();
             playerLostBattle = false; // 重置戰敗狀態，避免重複觸發
             kaguraDialogueTimer = 0;
             kaguraState = 5;
          }
        }
      } else if (kaguraQuizFailed) {
        txt = isKaguraQuizTimeout ? "腦容量不夠?" : "蛤?太遜了吧全錯";
      } else if (isFighting) {
        // 戰鬥中不說話
      } else if (kaguraState === 0) {
        txt = "噁..你離我太近了";
        if (!isAnyModalOpen && !shouldHideUI) { 
          kaguraInput.show(); kaguraInput.position(playerX, playerY - 60); 
          kaguraChatBtn.show(); kaguraChatBtn.position(playerX + 220, playerY - 60);
        } else {
          kaguraInput.hide(); kaguraChatBtn.hide();
        }
      } else if (kaguraState === 1) {
        kaguraInput.hide();
        kaguraDialogueTimer++;
        txt = "隨便啦..我不在乎";
        if (kaguraDialogueTimer >= 120) {
          kaguraState = 2;
          kaguraDialogueTimer = 0;
        }
      } else if (kaguraState === 2) {
        txt = "你來這邊就是要做測驗";
        if (!isAnyModalOpen && !shouldHideUI) { 
          kaguraInput.show(); kaguraInput.position(playerX, playerY - 60); 
          kaguraChatBtn.show(); kaguraChatBtn.position(playerX + 220, playerY - 60);
        } else {
          kaguraInput.hide(); kaguraChatBtn.hide();
        }
      } else if (kaguraState === 3) {
        kaguraInput.hide();
        kaguraDialogueTimer++;
        txt = "我才不管你準備好了沒";
        if (kaguraDialogueTimer >= 120) {
          kaguraState = 4;
          kaguraDialogueTimer = 0;
        }
      } else if (kaguraState === 4) {
        txt = "我們直接開始測驗";
        kaguraDialogueTimer++;
        if (kaguraDialogueTimer > 60) {
           startKaguraQuiz();
           kaguraState = 5; // 測驗進行中
        }
      }
      
      if (txt !== "") {
        textSize(20);
        let tw = textWidth(txt);
        let bw = tw + 30;
        let bh = 40;
        let bx = kaguraX + (currentKaguraW * charScale - bw) / 2;
        let by = kaguraY - 60;
        fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rectMode(CORNER);
        rect(bx, by, bw, bh, 10);
        fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER);
        textFont('Courier New');
        textStyle(BOLD);
        if (!isKaguraQuizActive) text(txt, bx + bw / 2, by + bh / 2);
        
        if (kaguraDefeated || missions[4].completed) {
          retryKaguraQuizBtn.position(bx + bw / 2 - 50, by - 40);
        }
        pop();
      }
    } else {
      kaguraInput.hide();
      kaguraChatBtn.hide();
      retryKaguraQuizBtn.hide();
      kaguraQuizFailed = false;
      isKaguraQuizTimeout = false;
    }

    // --- Kagura Quiz Logic ---
    if (isKaguraQuizActive) {
        if (kaguraQuizTimer > 0) kaguraQuizTimer--;

        if (kaguraQuizTimer <= 0 || kaguraQuizLives <= 0) {
            isKaguraQuizActive = false;
            kaguraAnswerInput.hide();
            kaguraSubmitBtn.hide();
            kaguraQuizFailed = true;
            isKaguraQuizTimeout = (kaguraQuizTimer <= 0);
            return;
        }

        if (kaguraQuizStep >= currentKaguraQuizList.length) {
            isKaguraQuizActive = false;
            kaguraAnswerInput.hide();
            kaguraSubmitBtn.hide();
            showRewardMessage = true;
            rewardTimer = 0;
            completeMission(4); // 假設任務4是尋找Kagura
            return;
        }

        let q = currentKaguraQuizList[kaguraQuizStep];
        lastQuestionText = q.question; // 記錄當前題目
        // 固定測驗框位置
        let fixedKaguraX = 500;
        let fixedKaguraY = height * 0.98 - (kaguraH * charScale);
        let uiYPos = fixedKaguraY - 170;
        let uiXPos = fixedKaguraX - 50;

        // 1. 倒數計時與愛心 (上方)
        push();
        // Timer Bar
        let timerBarW = 180;
        let timerBarH = 25;
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2);
        rect(uiXPos, uiYPos, timerBarW, timerBarH, 8);
        let progress = kaguraQuizTimer / maxQuizTime;
        fill(progress < 0.2 ? '#F44336' : (progress < 0.5 ? '#FFC107' : '#4CAF50')); noStroke();
        rect(uiXPos, uiYPos, timerBarW * progress, timerBarH, 8);
        
        // Seconds
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2);
        rect(uiXPos + timerBarW + 10, uiYPos, 50, 25, 8);
        fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(16);
        text(Math.ceil(kaguraQuizTimer / 60), uiXPos + timerBarW + 35, uiYPos + 12.5);

        // Hearts
        let heartBoxX = uiXPos + timerBarW + 70;
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2);
        rect(heartBoxX, uiYPos - 5, 100, 35, 8);
        textSize(24); textAlign(CENTER, CENTER); noStroke(); fill(255, 50, 50);
        for(let i = 0; i < kaguraQuizLives; i++) text('♥', heartBoxX + 20 + i * 30, uiYPos + 12.5);
        pop();

        // 2. 題目框 (左邊)
        push();
        let q_txt = "Q" + (kaguraQuizStep + 1) + ": " + q.question;
        textSize(18); textFont('Courier New'); textStyle(BOLD);
        let q_bw = 300; let q_bh = 100;
        let q_bx = uiXPos - 50;
        let q_by = uiYPos + 40;
        fill(0, 0, 0, 200); stroke(255); strokeWeight(3); rectMode(CORNER);
        rect(q_bx, q_by, q_bw, q_bh, 15);
        fill(255); noStroke(); textAlign(CENTER, CENTER);
        text(q_txt, q_bx + 10, q_by + 10, q_bw - 20, q_bh - 20);
        pop();

        // 3. 回饋框或輸入框 (右邊)
        if (kaguraQuizFeedback !== "") {
            push();
            textSize(20); textFont('Courier New'); textStyle(BOLD);
            let fb_bx = q_bx + q_bw + 20;
            let fb_by = q_by + 20;
            fill(0, 0, 0, 200); stroke(255); strokeWeight(3); rectMode(CORNER);
            rect(fb_bx, fb_by, 200, 60, 15);
            fill(255); noStroke(); textAlign(CENTER, CENTER);
            text(kaguraQuizFeedback, fb_bx + 100, fb_by + 30);
            pop();

            kaguraQuizFeedbackTimer++;
            if (kaguraQuizFeedbackTimer > 60) {
                kaguraQuizStep++;
                kaguraQuizFeedback = "";
                kaguraQuizFeedbackTimer = 0;
                kaguraAnswerInput.value('');
            }
        } else {
            // 顯示輸入框與按鈕
            let inputX = q_bx + q_bw + 20;
            let inputY = q_by + 30;
            kaguraAnswerInput.show();
            kaguraAnswerInput.position(inputX, inputY);
            kaguraSubmitBtn.show();
            kaguraSubmitBtn.position(inputX + 170, inputY);
        }
    } else {
        kaguraAnswerInput.hide();
        kaguraSubmitBtn.hide();
    }
    // --- End Draw Kagura ---

    stop2Input.hide();
    stop2SubmitBtn.hide();
    retryQuizBtn.hide();
  } else if (currentScene === 'playground') {
    image(groundImg, 0, 0, width, height);
    enterPlaygroundBtn.hide();
    enter101Btn.hide();
    enter102Btn.hide();

    // 繪製 Sakaki
    let currentSakakiSheet = sakakiSheet;
    let currentSakakiW = sakakiW;
    let currentSakakiH = sakakiH;
    let currentSakakiFrame = floor(frameCount / 10) % 7;

    if (isSakakiHit) {
      currentSakakiSheet = fall4Sheet;
      currentSakakiW = fall4W;
      currentSakakiH = fall4H;
      currentSakakiFrame = floor(sakakiHitTimer / 5);
      sakakiHitTimer++;
      if (currentSakakiFrame >= 9) {
        isSakakiHit = false;
      }
    } else if (sakakiQuizFailed) {
      // 保持 stop 動作
      sakakiQuizFailedTimer++;
      if (sakakiQuizFailedTimer > 120 && !isTransitioning) {
        isTransitioning = true;
        fadeAlpha = 0;
        fadeDirection = 1;
        targetScene = 'playground_fight';
      }
    } else if (isFighting) {
      if (playerHP <= 0) {
        if (!isTransitioning) {
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end_playground';
          battleResult = 'lose';
        }
      } else if (sakakiHP <= 0) {
        if (!isTransitioning) {
          isTransitioning = true;
          fadeAlpha = 0;
          fadeDirection = 1;
          targetScene = 'battle_end_playground';
          battleResult = 'win';
        }
      }
      let dist = abs(playerX - sakakiX);
      if (dist > 250) {
        // 追蹤模式 (跑步)
        if (playerX < sakakiX) sakakiX -= 8;
        else sakakiX += 8;
        
        currentSakakiSheet = run4Sheet;
        currentSakakiW = run4W;
        currentSakakiH = run4H;
        currentSakakiFrame = floor(frameCount / 5) % 6;
        
        fightTimer = 0;
        sakakiYOffset = 0;
        sakakiVy = 0;
      } else {
        // 攻擊模式 (跳躍攻擊)
        let animSpeed = 5;
        let totalAnimFrames = 12;
        let cycleTime = totalAnimFrames * animSpeed;
        if (fightTimer % cycleTime === 0) sakakiVy = -25;
        sakakiYOffset += sakakiVy; sakakiVy += 1.5;
        if (sakakiYOffset > 0) { sakakiYOffset = 0; sakakiVy = 0; }
        currentSakakiSheet = fight4Sheet; currentSakakiW = fight4W; currentSakakiH = fight4H;
        currentSakakiFrame = floor(fightTimer / animSpeed) % totalAnimFrames;
        if (fightTimer > 0 && fightTimer % cycleTime === 0) {
          sakakiTools.push({ x: sakakiX + (playerX < sakakiX ? -50 : 50), y: height * 0.90 - currentSakakiH * charScale + 50 + sakakiYOffset, dir: playerX < sakakiX ? -1 : 1, timer: 0 });
        }
        fightTimer++;
      }
    } else if (sakakiDefeated) {
      currentSakakiSheet = end4Sheet;
      currentSakakiW = end4W;
      currentSakakiH = end4H;
      currentSakakiFrame = floor(frameCount / 10) % 5;
    } else if (missions[5].completed) {
      currentSakakiSheet = right4Sheet;
      currentSakakiW = right4W;
      currentSakakiH = right4H;
      currentSakakiFrame = floor(frameCount / 10) % 3;
    } else if (abs(playerX - sakakiX) < 200) {
      currentSakakiSheet = hi4Sheet;
      currentSakakiW = hi4W;
      currentSakakiH = hi4H;
      currentSakakiFrame = floor(frameCount / 10) % 2;
    }

    let sakakiFloor = height * 0.90;
    if (isSakakiHit) sakakiFloor = height * 0.98;

    let sakakiY = sakakiFloor - (currentSakakiH * charScale) + sakakiYOffset;

    if (playerX < sakakiX) {
      push();
      translate(sakakiX + currentSakakiW * charScale, sakakiY);
      scale(-1, 1);
      image(currentSakakiSheet, 0, 0, currentSakakiW * charScale, currentSakakiH * charScale, currentSakakiFrame * currentSakakiW, 0, currentSakakiW, currentSakakiH);
      pop();
    } else {
      image(currentSakakiSheet, sakakiX, sakakiY, currentSakakiW * charScale, currentSakakiH * charScale, currentSakakiFrame * currentSakakiW, 0, currentSakakiW, currentSakakiH);
    }

    // 繪製 Sakaki 的攻擊 (Tool4)
    for (let i = sakakiTools.length - 1; i >= 0; i--) {
      let t = sakakiTools[i];
      t.timer++;
      t.x += 4 * t.dir; // 攻擊移動速度
      
      let tFrame = floor(t.timer / 5);
      if (tFrame >= 8) { // 顯示完8張後消失
        sakakiTools.splice(i, 1);
      } else {
        let displayFrame = tFrame % 5; // 只有5張圖片，循環播放或停在最後一張，這裡選擇循環
        push();
        if (t.dir === -1) {
           translate(t.x + tool4W * charScale, t.y); scale(-1, 1);
           image(tool4Sheet, 0, 0, tool4W * charScale, tool4H * charScale, displayFrame * tool4W, 0, tool4W, tool4H);
        } else {
           image(tool4Sheet, t.x, t.y, tool4W * charScale, tool4H * charScale, displayFrame * tool4W, 0, tool4W, tool4H);
        }
        pop();

        // 碰撞偵測
        if (t.x + tool4W * charScale > playerX && t.x < playerX + spriteW * charScale && t.y + tool4H * charScale > playerY && t.y < playerY + spriteH * charScale) {
          if (!playerInvincible) { playerHP -= 10; if (playerHP < 0) playerHP = 0; isFalling = true; isHitByTool = true; fallTimer = 0; isPushing = false; isJumping = false; vy = 0; playerInvincible = true; playerInvincibleTimer = 0; }
          sakakiTools.splice(i, 1);
        }
      }
    }

    if (abs(playerX - sakakiX) < 200 && !isFighting) {
      if (sakakiState === 0) {
        sakakiState = 1;
        sakakiDialogueTimer = 0;
      }

      push();
      let txt = "";
      
      if (sakakiDefeated) {
        txt = "被你打敗了...";
        retrySakakiQuizBtn.show();
      } else if (missions[5].completed) {
        txt = "你好棒!笑一個!";
        retrySakakiQuizBtn.show();
      } else if (sakakiQuizFailed) {
        txt = isSakakiQuizTimeout ? "我以為這些很簡單欸..." : "我很看好你欸...";
      } else if (sakakiState === 1) {
        sakakiDialogueTimer++;
        if (sakakiDialogueTimer < 60) {
          txt = "欸~" + playerName;
        } else if (sakakiDialogueTimer < 150) {
          txt = "你怎麼知道我在操場!";
        } else {
          sakakiState = 2;
        }
      } else if (sakakiState === 2) {
        txt = "你怎麼知道我在操場!";
        if (!isAnyModalOpen && !shouldHideUI) { 
          sakakiInput.show(); sakakiInput.position(playerX, playerY - 60); 
          sakakiChatBtn.show(); sakakiChatBtn.position(playerX + 220, playerY - 60);
        } else {
          sakakiInput.hide(); sakakiChatBtn.hide();
        }
      } else if (sakakiState === 3) {
        sakakiDialogueTimer++;
        if (sakakiDialogueTimer < 60) {
          txt = "好啦~既然你找到我了";
        } else if (sakakiDialogueTimer < 120) {
          txt = "那我們事不宜遲開始測驗吧";
        } else {
          txt = "準備好了就跟我說好哦~";
          if (sakakiDialogueTimer > 180) {
            sakakiState = 4;
          }
        }
      } else if (sakakiState === 4) {
        txt = "準備好了就跟我說好哦~";
        if (!isAnyModalOpen && !shouldHideUI) { 
          sakakiInput.show(); sakakiInput.position(playerX, playerY - 60); 
          sakakiChatBtn.show(); sakakiChatBtn.position(playerX + 220, playerY - 60);
        } else {
          sakakiInput.hide(); sakakiChatBtn.hide();
        }
      } else if (sakakiState === 8) {
        txt = "等你好了我們再開始吧~";
        sakakiDialogueTimer++;
        if (sakakiDialogueTimer > 120) {
          sakakiState = 4;
          sakakiDialogueTimer = 0;
        }
      }

      if (txt) {
        textSize(20);
        let tw = textWidth(txt);
        let bw = tw + 30;
        let bh = 40;
        let bx = sakakiX + (currentSakakiW * charScale - bw) / 2;
        let by = sakakiY - 60;

        fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rectMode(CORNER);
        rect(bx, by, bw, bh, 10);
        fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER);
        textFont('Courier New');
        textStyle(BOLD);
        text(txt, bx + bw / 2, by + bh / 2);

        if (missions[5].completed) {
          retrySakakiQuizBtn.position(bx + bw / 2 - 50, by - 40);
        }
      }
      pop();
    } else {
      sakakiInput.hide();
      sakakiChatBtn.hide();
      retrySakakiQuizBtn.hide();
    }

    // --- Sakaki Quiz Logic ---
    if (isSakakiQuizActive) {
        if (sakakiQuizTimer > 0) sakakiQuizTimer--;

        if (sakakiQuizTimer <= 0 || sakakiQuizLives <= 0) {
            isSakakiQuizActive = false;
            removeSakakiQuizButtons();
            sakakiQuizFailed = true;
            isSakakiQuizTimeout = (sakakiQuizTimer <= 0);
            return;
        }

        if (sakakiQuizStep >= currentSakakiQuizList.length) {
            isSakakiQuizActive = false;
            removeSakakiQuizButtons();
            showRewardMessage = true;
            rewardTimer = 0;
            completeMission(5); // 任務5: 尋找Sakaki
            return;
        }

        let q = currentSakakiQuizList[sakakiQuizStep];
        lastQuestionText = q.question; // 記錄當前題目
        let fixedSakakiX = width / 2 + 50;
        let fixedSakakiY = height * 0.90 - (sakakiH * charScale);
        
        let q_bw = 450; 
        let q_bh = 200; 
        let q_bx = fixedSakakiX - 250; 
        let q_by = fixedSakakiY - 200;
        let uiYPos = q_by - 35;

        push();
        // Timer
        let timerBarW = 180; let timerBarH = 25;
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2); rect(q_bx, uiYPos, timerBarW, timerBarH, 8);
        let progress = sakakiQuizTimer / maxQuizTime;
        fill(progress < 0.2 ? '#F44336' : (progress < 0.5 ? '#FFC107' : '#4CAF50')); noStroke();
        rect(q_bx, uiYPos, timerBarW * progress, timerBarH, 8);
        
        // Seconds
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2);
        rect(q_bx + timerBarW + 10, uiYPos, 50, 25, 8);
        fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(16);
        text(Math.ceil(sakakiQuizTimer / 60), q_bx + timerBarW + 35, uiYPos + 12.5);

        // Hearts
        let heartBoxW = 100; let heartBoxH = 35;
        let heartBoxX = q_bx + q_bw - heartBoxW;
        let heartBoxY = uiYPos - 5;
        fill(40, 40, 40, 240); stroke(255); strokeWeight(2); rect(heartBoxX, heartBoxY, heartBoxW, heartBoxH, 8);
        textSize(24); textAlign(CENTER, CENTER); noStroke(); fill(255, 50, 50);
        for(let i = 0; i < sakakiQuizLives; i++) text('♥', heartBoxX + 20 + i * 30, heartBoxY + heartBoxH / 2);
        pop();

        // Question
        push();
        let q_txt = "Q" + (sakakiQuizStep + 1) + ": " + q.question;
        textSize(18); textFont('Courier New'); textStyle(BOLD);
        fill(0, 0, 0, 200); stroke(255); strokeWeight(3); rectMode(CORNER);
        rect(q_bx, q_by, q_bw, q_bh, 15);
        fill(255); noStroke(); textAlign(CENTER, CENTER);
        textWrap(CHAR);
        text(q_txt, q_bx + 10, q_by + 10, q_bw - 20, q_bh - 20);
        pop();

        if (sakakiQuizFeedback !== "") {
            push(); textSize(20); textFont('Courier New'); textStyle(BOLD);
            let fb_bx = q_bx + q_bw + 20; let fb_by = q_by + 20;
            fill(0, 0, 0, 200); stroke(255); strokeWeight(3); rectMode(CORNER); rect(fb_bx, fb_by, 200, 60, 15);
            fill(255); noStroke(); textAlign(CENTER, CENTER); text(sakakiQuizFeedback, fb_bx + 100, fb_by + 30); pop();
            sakakiQuizFeedbackTimer++;
            if (sakakiQuizFeedbackTimer > 30) { 
              sakakiQuizStep++; 
              sakakiQuizFeedback = ""; 
              sakakiQuizFeedbackTimer = 0; 
              removeSakakiQuizButtons();
            }
        } else {
            if (sakakiQuizButtons.length === 0) {
              let startX = q_bx + q_bw + 20;
              let startY = q_by;
              let shuffledOptions = shuffle(q.options);
              for (let i = 0; i < shuffledOptions.length; i++) {
                let btn = createButton(shuffledOptions[i]);
                btn.position(startX, startY + i * 55);
                btn.size(240, 45);
                btn.style('font-family', 'Courier New, monospace');
                btn.style('font-size', '18px');
                btn.style('font-weight', 'bold');
                btn.style('color', '#FFFFFF');
                btn.style('background-color', 'rgba(0,0,0,0.8)');
                btn.style('border', '2px solid #FFFFFF');
                btn.style('border-radius', '10px');
                btn.style('cursor', 'pointer');
                btn.style('white-space', 'normal');
                btn.mouseOver(() => { btn.style('background-color', 'rgba(50,50,50,0.9)'); });
                btn.mouseOut(() => { btn.style('background-color', 'rgba(0,0,0,0.8)'); });
                btn.mousePressed(() => {
                  if (sakakiQuizFeedback !== "") return;
                  if (shuffledOptions[i] === q.answer) {
                    sakakiQuizFeedback = q.correctMsg; score += 300; coinScore += 30;
                  } else {
                    sakakiQuizFeedback = q.wrongMsg; sakakiQuizLives--;
                  }
                  sakakiQuizTimer = maxQuizTime;
                  removeSakakiQuizButtons();
                  sakakiQuizFeedbackTimer = 0;
                });
                sakakiQuizButtons.push(btn);
              }
            }
        }
    } else {
        sakakiAnswerInput.hide();
        sakakiSubmitBtn.hide();
    }

    // 繪製沙塵效果
    // 第二層 (較慢，背景)
    sandOffset2 -= 1;
    if (sandOffset2 <= -sandImg.width) sandOffset2 = 0;
    let sandAlpha2 = map(sin(frameCount * 0.03 + 1), -1, 1, 30, 100);
    tint(255, sandAlpha2);
    for (let i = sandOffset2; i < width; i += sandImg.width) {
      image(sandImg, i, height - sandImg.height - 30); // 稍微往上移，營造層次感
    }

    sandOffset -= 2;
    if (sandOffset <= -sandImg.width) sandOffset = 0;
    
    // 計算動態透明度 (忽隱忽現)
    let sandAlpha = map(sin(frameCount * 0.05), -1, 1, 50, 180);
    tint(255, sandAlpha); 
    for (let i = sandOffset; i < width; i += sandImg.width) {
      image(sandImg, i, height - sandImg.height);
    }
    noTint();
  } else if (currentScene === 'ending') {
    background(0);
    image(endImg, 0, 0, width, height);
    
    // 繪製全體角色 Hi 動畫 (畫面底部) - 移至 UI 之前繪製，避免擋住 UI
    let charY = height - 10;
    let spacing = width / 7;
    
    // Char 1 (Player) - 已刪除
    // let c1Frame = floor(frameCount / 10) % 12;
    // image(spriteSheet, spacing * 1 - (spriteW*charScale)/2, charY - spriteH*charScale, spriteW*charScale, spriteH*charScale, c1Frame*spriteW, 0, spriteW, spriteH);

    // Char 2 (Yomi) - Hi2
    let c2Frame = floor(frameCount / 10) % 2;
    image(hi2Sheet, spacing * 2 - (hi2W*charScale)/2, charY - hi2H*charScale, hi2W*charScale, hi2H*charScale, c2Frame*hi2W, 0, hi2W, hi2H);

    // Char 3 (Kagura) - Hi3
    let c3Frame = floor(frameCount / 10) % 4;
    image(hi3Sheet, spacing * 3 - (hi3W*charScale)/2, charY - hi3H*charScale, hi3W*charScale, hi3H*charScale, c3Frame*hi3W, 0, hi3W, hi3H);

    // Char 4 (Sakaki) - Hi4
    let c4Frame = floor(frameCount / 10) % 2;
    image(hi4Sheet, spacing * 4 - (hi4W*charScale)/2, charY - hi4H*charScale, hi4W*charScale, hi4H*charScale, c4Frame*hi4W, 0, hi4W, hi4H);

    // Char 5 (Kamineko) - Hi5
    let c5Frame = floor(frameCount / 10) % 4;
    image(hi5Sheet, spacing * 5 - (hi5W*charScale)/2, charY - hi5H*charScale, hi5W*charScale, hi5H*charScale, c5Frame*hi5W, 0, hi5W, hi5H);

    // Char 6 (Yukari) - Hi6
    let c6Frame = floor(frameCount / 10) % 6;
    image(yukariHiSheet, spacing * 6 - (yukariHiW*charScale)/2, charY - yukariHiH*charScale, yukariHiW*charScale, yukariHiH*charScale, c6Frame*yukariHiW, 0, yukariHiW, yukariHiH);

    // 繪製角色對話框 (若有觸發)
    if (activeEndingMessageTimer > 0) {
      activeEndingMessageTimer--;
      push();
      rectMode(CORNER);
      textSize(16);
      textFont('Courier New');
      textStyle(BOLD);
      let tw = textWidth(activeEndingMessage);
      let bw = tw + 30;
      let bh = 40;
      // 顯示在角色左邊 (調整位置)
      let bx = activeEndingCharX - bw - 40; 
      let by = activeEndingCharY + 20;
      
      fill(255, 255, 255, 230); stroke(62, 39, 35); strokeWeight(2);
      rect(bx, by, bw, bh, 10);
      fill(62, 39, 35); noStroke(); textAlign(CENTER, CENTER);
      text(activeEndingMessage, bx + bw/2, by + bh/2);
      
      // 對話框小尾巴
      fill(255, 255, 255, 230); noStroke();
      triangle(bx + bw, by + bh/2 - 5, bx + bw + 10, by + bh/2, bx + bw, by + bh/2 + 5);
      pop();
    }

    // 繪製 UI 框與按鈕
    push();
    rectMode(CENTER);
    
    // 再玩一次按鈕位置 (畫面中間)
    let btnY = height / 2;
    if (!showSettings) {
      playAgainBtn.show();
      playAgainBtn.position(width / 2 - 80, btnY); // 稍微修正 X 軸以置中
    } else {
      playAgainBtn.hide();
    }
    
    // 成就框 (左邊)
    let achBoxW = 320;
    let achBoxH = 400;
    let achBoxX = (width / 7) * 2; // 移到角色2頭頂
    let char2HeadY = (height - 10) - (hi2H * charScale);
    let achBoxY = char2HeadY - achBoxH / 2 - 20;
    
    push();
    rectMode(CENTER);
    fill(62, 39, 35, 230); stroke(255, 215, 0); strokeWeight(3);
    rect(achBoxX, achBoxY, achBoxW, achBoxH, 15);
    
    fill(255, 215, 0); noStroke(); textSize(28); textAlign(CENTER, TOP);
    text("成就列表", achBoxX, achBoxY - achBoxH/2 + 20);
    
    // 啟用裁切區域 (Scrolling)
    push();
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(achBoxX - achBoxW/2 + 10, achBoxY - achBoxH/2 + 60, achBoxW - 20, achBoxH - 80);
    drawingContext.clip();

    let startAchY = achBoxY - achBoxH/2 + 70;
    for(let i=0; i<achievementsList.length; i++) {
      let ach = achievementsList[i];
      let y = startAchY + i * 85 + achievementScrollY;
      
      textAlign(LEFT, TOP);
      fill(unlockedAchievements[i] ? '#FFD700' : '#9E9E9E'); // Gold or Gray
      textSize(20); text((unlockedAchievements[i] ? "★ " : "🔒 ") + ach.title, achBoxX - achBoxW/2 + 20, y);
      fill(255); textSize(14); text(ach.desc, achBoxX - achBoxW/2 + 20, y + 25);
    }
    drawingContext.restore();

    // 繪製成就列表滾軸
    let achContentH = achievementsList.length * 85;
    let achViewH = achBoxH - 80;
    if (achContentH > achViewH) {
       let scrollBarH = (achViewH / achContentH) * achViewH;
       let scrollBarY = map(-achievementScrollY, 0, achContentH - achViewH, 0, achViewH - scrollBarH);
       let sbX = achBoxX + achBoxW/2 - 8;
       let sbY = (achBoxY - achBoxH/2 + 60) + scrollBarY + scrollBarH/2; // CENTER mode adjustment
       
       fill(255, 255, 255, 50); noStroke();
       rect(sbX, achBoxY + 20, 4, achViewH, 2); // Track (centered vertically in view area)
       fill(255, 215, 0, 180);
       rect(sbX, sbY, 4, scrollBarH, 2); // Thumb
    }
    pop();
    pop();

    // 排行榜框 (右邊)
    let lbBoxX = width / 2 + 350;
    let lbBoxW = 320;
    let lbBoxH = 400;
    let lbBoxY = achBoxY; // 與成就列表齊平
    
    push();
    rectMode(CENTER);
    fill(62, 39, 35, 230); stroke(255, 215, 0); strokeWeight(3);
    rect(lbBoxX, lbBoxY, lbBoxW, lbBoxH, 15);
    
    fill(255, 215, 0); noStroke(); textSize(28); textAlign(CENTER, TOP);
    text("排行榜", lbBoxX, lbBoxY - lbBoxH/2 + 20);

    // 頁籤按鈕
    let tabW = 120;
    let tabH = 35;
    let tabY = lbBoxY - lbBoxH/2 + 70;
    let tab1X = lbBoxX - 70;
    let tab2X = lbBoxX + 70;
    
    textSize(18); rectMode(CENTER); textAlign(CENTER, CENTER);
    
    // Tab 1: 斂財榜
    fill(currentLeaderboardTab === 'coins' ? '#FFD700' : '#3E2723'); 
    stroke(currentLeaderboardTab === 'coins' ? '#3E2723' : '#FFD700');
    rect(tab1X, tabY, tabW, tabH, 10);
    fill(currentLeaderboardTab === 'coins' ? '#3E2723' : '#FFFFFF'); noStroke();
    text("戀財榜", tab1X, tabY);
    
    // Tab 2: 高分榜
    fill(currentLeaderboardTab === 'score' ? '#FFD700' : '#3E2723');
    stroke(currentLeaderboardTab === 'score' ? '#3E2723' : '#FFD700');
    rect(tab2X, tabY, tabW, tabH, 10);
    fill(currentLeaderboardTab === 'score' ? '#3E2723' : '#FFFFFF'); noStroke();
    text("高分榜", tab2X, tabY);

    // 列表內容
    let listStartY = tabY + 40;
    let displayList = [...leaderboardData];
    if (currentLeaderboardTab === 'coins') displayList.sort((a, b) => b.coins - a.coins);
    else displayList.sort((a, b) => b.score - a.score);

    // 繪製標題 (靜態，不捲動)
    textAlign(LEFT, TOP); textSize(16); fill(255); 
    if (currentLeaderboardTab === 'coins') {
      text("排名", lbBoxX - 130, listStartY); text("名字", lbBoxX - 80, listStartY); text("金幣", lbBoxX + 60, listStartY);
    } else {
      text("排名", lbBoxX - 130, listStartY); text("名字", lbBoxX - 80, listStartY); text("分數", lbBoxX + 60, listStartY);
    }

    // 啟用裁切區域 (僅用於可捲動的列表)
    push();
    drawingContext.save();
    drawingContext.beginPath();
    let listContentY = listStartY + 35;
    let listContentH = (lbBoxY + lbBoxH/2 - 10) - listContentY;
    drawingContext.rect(lbBoxX - lbBoxW/2 + 10, listContentY, lbBoxW - 20, listContentH);
    drawingContext.clip();

    if (currentLeaderboardTab === 'coins') {
      for (let i = 0; i < displayList.length; i++) {
          let entry = displayList[i];
          let y = listContentY + i * 35 + leaderboardScrollY;
          text((i + 1) + ".", lbBoxX - 130, y);
          let dName = entry.name.length > 6 ? entry.name.substring(0,5)+".." : entry.name;
          text(dName, lbBoxX - 80, y);
          text(entry.coins, lbBoxX + 60, y);
      }
    } else { // 'score'
      for (let i = 0; i < displayList.length; i++) {
          let entry = displayList[i];
          let y = listContentY + i * 35 + leaderboardScrollY;
          text((i + 1) + ".", lbBoxX - 130, y);
          let dName = entry.name.length > 6 ? entry.name.substring(0,5)+".." : entry.name;
          text(dName, lbBoxX - 80, y);
          text(entry.score, lbBoxX + 60, y);
      }
    }
    drawingContext.restore();
    pop();

    // 繪製排行榜滾軸
    let lbContentH = displayList.length * 35;
    let lbViewH = listContentH;
    if (lbContentH > lbViewH) {
       let scrollBarH = (lbViewH / lbContentH) * lbViewH;
       let scrollBarY = map(-leaderboardScrollY, 0, lbContentH - lbViewH, 0, lbViewH - scrollBarH);
       let sbX = lbBoxX + lbBoxW/2 - 8;
       let sbY = listContentY + scrollBarY + scrollBarH/2;
       
       fill(255, 255, 255, 50); noStroke();
       rect(sbX, listContentY + lbViewH/2, 4, lbViewH, 2); // 軌道
       fill(255, 215, 0, 180);
       rect(sbX, sbY, 4, scrollBarH, 2); // 滑塊
    }
    pop();

    // 金幣框 (按鈕上方)
    let coinBoxY = btnY - 80;
    fill(62, 39, 35, 230); stroke(255, 215, 0); strokeWeight(3);
    rect(width/2, coinBoxY, 250, 50, 10);
    fill(255); noStroke(); textSize(24); textAlign(CENTER, CENTER); textFont('Courier New'); textStyle(BOLD);
    // 繪製金幣圖示 (旋轉動畫)
    let coinIconSize = 30;
    let coinAnimFrame = floor(frameCount / 3) % 18;
    image(coinsSheet, width/2 - 100, coinBoxY - 15, coinIconSize, coinIconSize, coinAnimFrame * coinsW, 0, coinsW, coinsH);
    text("金幣: " + coinScore, width/2 + 10, coinBoxY);

    // 得分框 (金幣框上方)
    let scoreBoxY = coinBoxY - 70;
    
    // 新增: 感謝遊玩
    push();
    fill(255, 215, 0); stroke(62, 39, 35); strokeWeight(5); textSize(60); textAlign(CENTER, BOTTOM); textStyle(BOLD);
    text("感謝遊玩!", width/2, scoreBoxY - 50);
    pop();

    fill(62, 39, 35, 230); stroke(255, 215, 0); strokeWeight(3);
    rect(width/2, scoreBoxY, 250, 50, 10);
    fill(255); noStroke(); textSize(24); textAlign(CENTER, CENTER);
    text("得分: " + score, width/2, scoreBoxY);
    pop();

    // 作者資訊 (右下角)
    push();
    textAlign(RIGHT, BOTTOM);
    textSize(16);
    fill(255, 255, 255, 180); 
    noStroke();
    textFont('Courier New');
    textStyle(BOLD);
    text("作者 : 414730233 林子靖", width - 20, height - 20);
    pop();

    // 關機按鈕 (左下角)
    let powerBtnX = 40;
    let powerBtnY = height - 40;
    let isHoverPower = dist(mouseX, mouseY, powerBtnX, powerBtnY) < 20;
    
    push();
    translate(powerBtnX, powerBtnY);
    noFill();
    stroke(isHoverPower ? '#FF0000' : '#FF5252'); 
    strokeWeight(3);
    arc(0, 0, 26, 26, -PI/2 + 0.6, -PI/2 - 0.6 + TWO_PI);
    line(0, -5, 0, -18);
    
    if (isHoverPower) {
      noStroke();
      fill(255);
      textSize(12);
      textAlign(CENTER, BOTTOM);
      text("離開", 0, -20);
    }
    pop();

    // 離開確認對話框
    if (showExitConfirmation) {
      push();
      rectMode(CENTER);
      // 半透明遮罩
      fill(0, 0, 0, 150);
      noStroke();
      rect(width/2, height/2, width, height);
      
      // 對話框
      fill(62, 39, 35);
      stroke(255, 215, 0);
      strokeWeight(4);
      rect(width/2, height/2, 300, 150, 15);
      
      // 文字
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      textFont('Courier New');
      textStyle(BOLD);
      text("確定要離開遊戲嗎?", width/2, height/2 - 20);
      
      // 按鈕
      let btnY = height/2 + 40;
      
      // 是
      let yesHover = mouseX > width/2 - 90 && mouseX < width/2 - 10 && mouseY > btnY - 20 && mouseY < btnY + 20;
      fill(yesHover ? '#FF5252' : '#D32F2F'); stroke(255); strokeWeight(2);
      rect(width/2 - 50, btnY, 80, 40, 8);
      fill(255); noStroke(); text("是", width/2 - 50, btnY);
      
      // 否
      let noHover = mouseX > width/2 + 10 && mouseX < width/2 + 90 && mouseY > btnY - 20 && mouseY < btnY + 20;
      fill(noHover ? '#4CAF50' : '#388E3C'); stroke(255); strokeWeight(2);
      rect(width/2 + 50, btnY, 80, 40, 8);
      fill(255); noStroke(); text("否", width/2 + 50, btnY);
      pop();
    }

    // 確保設定按鈕在結束畫面也能顯示
    drawSettingsButton();
    drawSettingsModal();
  } else if (currentScene === 'class103') {
    class103Timer++;
    background(220);
    image(class3Img, 0, 0, width, height);
    
    // 繪製平台
    push();
    fill(101, 67, 33); // 深褐色
    stroke(255, 248, 225);
    strokeWeight(2);
    for (let p of platforms103) {
      rect(p.x, p.y, p.w, p.h, 5);
    }
    pop();

    // 繪製金幣
    let coinAnimFrame = floor(frameCount / 3) % 18;
    for (let c of coins103) {
      if (!c.collected) {
        image(coinsSheet, c.x, c.y, coinsW, coinsH, coinAnimFrame * coinsW, 0, coinsW, coinsH);
        // 碰撞偵測
        if (playerX + walk1QW * playerScale > c.x && playerX < c.x + coinsW &&
            playerY + walk1QH * playerScale > c.y && playerY < c.y + coinsH) {
          c.collected = true;
          coinScore += 10;
          if (coinSound) coinSound.play();
        }
      }
    }

    // 103教室 提示訊息邏輯
    if (class103Timer < 300) {
      push();
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 50, 50);
      stroke(255);
      strokeWeight(4);
      text("沒有把金幣吃完就不能離開教室", width / 2, height / 2);
      pop();
    } else {
      let txt = "";
      if (class103Timer < 420) { // 5s ~ 7s
        txt = "沒把金幣吃完不能離開...?";
      } else if (class103Timer < 480) { // 7s ~ 8s
        txt = "好多金幣欸好想要";
      } else if (class103Timer < 660) { // 8s ~ 11s
        txt = "快點快點快去吃金幣吧!";
      }

      if (txt !== "") {
        push();
        textSize(20);
        let tw = textWidth(txt);
        let bw = tw + 30;
        let bh = 40;
        let bx = playerX + (walk1QW * playerScale - bw) / 2;
        let by = playerY - 60;

        fill(255, 255, 255, 230); stroke(0); strokeWeight(2); rectMode(CORNER);
        rect(bx, by, bw, bh, 10);
        fill(0); noStroke(); textAlign(CENTER, CENTER); textFont('Courier New'); textStyle(BOLD);
        text(txt, bx + bw / 2, by + bh / 2);
        pop();
      }
    }

    enterPlaygroundBtn.hide();
    enter101Btn.hide();
    enter102Btn.hide();
    stop2Input.hide();
    stop2SubmitBtn.hide();
    retryQuizBtn.hide();
    kaguraInput.hide();
    kaguraChatBtn.hide();
    sakakiInput.hide();
    sakakiChatBtn.hide();
    kaguraAnswerInput.hide();
    kaguraSubmitBtn.hide();
    sakakiAnswerInput.hide();
    sakakiSubmitBtn.hide();
    retrySakakiQuizBtn.hide();
    retryKaguraQuizBtn.hide();
  } else {
    background(220);
    image(bgImg, bgX, 0, width, height);
    image(bgImg, bgX - width, 0, width, height);
    image(bgImg, bgX + width, 0, width, height);
    stop2Input.hide();
    stop2SubmitBtn.hide();
    retryQuizBtn.hide();
    kaguraInput.hide();
    kaguraChatBtn.hide();
    sakakiInput.hide();
    sakakiChatBtn.hide();
    kaguraAnswerInput.hide();
    kaguraSubmitBtn.hide();
    sakakiAnswerInput.hide();
    sakakiSubmitBtn.hide();
    retrySakakiQuizBtn.hide();
    enter103Btn.hide();
  }

  // 金幣系統
  if (currentScene === 'hallway') {
    let coinAnimFrame = floor(frameCount / 3) % 18;
    for (let coin of coinsList) {
      if (!coin.collected) {
        let coinScreenX = coin.x + bgX;
        if (coinScreenX > -coinsW && coinScreenX < width) {
          image(coinsSheet, coinScreenX, coin.y, coinsW, coinsH, coinAnimFrame * coinsW, 0, coinsW, coinsH);
          if (playerX + spriteW * charScale > coinScreenX && playerX < coinScreenX + coinsW) {
            coin.collected = true;
            coinScore++;
            if (coinSound) coinSound.play();
          }
        }
      }
    }
  }

  // 角色 Stop5
  if (currentScene === 'hallway') {
    let stop5X = 425 + bgX;
    if (abs(playerX - stop5X) < 250) {
      isHi5 = true;
      if (!isNameEntered && !isAnyModalOpen && !shouldHideUI) {
        nameInput.show();
        nameInput.position(playerX, playerY - 60);
        nameSubmitBtn.show();
        nameSubmitBtn.position(playerX + 270, playerY - 60);
      } else {
        nameInput.hide();
        nameSubmitBtn.hide();
      }
    } else {
      isHi5 = false;
      nameInput.hide();
      nameSubmitBtn.hide();
      kaminekoEndTimer = 0;
      endGameChoice = "";
      if (continueGameBtn) continueGameBtn.hide();
      if (endGameBtn) endGameBtn.hide();
    }

    let currentStop5Img = stop5Sheet;
    let currentStop5W = stop5W;
    let currentStop5H = stop5H;
    let currentStop5Frame = floor(frameCount / 10) % 8;

    if (isAngry) {
      currentStop5Img = angry5Sheet;
      currentStop5W = angry5W;
      currentStop5H = angry5H;
      currentStop5Frame = floor(angryTimer / 5);
      angryTimer++;
      if (floor(angryTimer / 5) >= 12) isAngry = false;
    } else if (isFalling) {
      currentStop5Img = haha5Sheet;
      currentStop5W = haha5W;
      currentStop5H = haha5H;
      currentStop5Frame = floor(frameCount / 10) % 9;
    } else if (isHi5) {
      currentStop5Img = hi5Sheet;
      currentStop5W = hi5W;
      currentStop5H = hi5H;
      currentStop5Frame = floor(frameCount / 10) % 4;
    }

    if (isNameEntered) {
      welcomeTimer++;
      if (welcomeTimer > 90) greetingText = "我是你的提示小助手Kamineko";
      if (welcomeTimer > 180) greetingText = "你可以在走廊或教室各處拾取提示幣";
      if (welcomeTimer > 270) greetingText = "每3個可以問一次喔!";
      if (welcomeTimer > 360) greetingText = "先給你一些提示幣吧!";
      if (welcomeTimer > 450) greetingText = "接下來有許多關卡在學校內等著你";
      if (welcomeTimer > 540) greetingText = "準備好了嗎?去找他們吧!";
      if (welcomeTimer > 630) greetingText = "你還在這裡做什麼?快去挑戰啦";
      if (welcomeTimer > 630 && !missions[1].completed) completeMission(1);

      let allMissionsDone = true;
      for (let i = 1; i <= 6; i++) {
        if (!missions[i].completed) {
          allMissionsDone = false;
          break;
        }
      }

      if (allMissionsDone) {
        if (endGameChoice === "") {
          kaminekoEndTimer++;
          if (kaminekoEndTimer < 60) {
            greetingText = "恭喜你完成全部的任務了!";
            if (!missions[7].completed) completeMission(7);
          } else if (kaminekoEndTimer < 120) greetingText = "很開心能陪你一起玩遊戲";
          else {
            greetingText = "你還要繼續玩嗎?";
            if (!isAnyModalOpen && !shouldHideUI) {
               let btnY = height * 0.90 - (hi5H * charScale) - 120;
               continueGameBtn.show();
               continueGameBtn.position(stop5X + 20, btnY);
               endGameBtn.show();
               endGameBtn.position(stop5X + 80, btnY);
            } else {
               continueGameBtn.hide();
               endGameBtn.hide();
            }
          }
        } else {
           if (endGameChoice === 'continue') greetingText = "等你玩夠了再來找我吧!";
           else if (endGameChoice === 'end') {
             greetingText = "那我們下次見囉!";
             endGameTimer++;
             if (endGameTimer > 120 && !isTransitioning) {
               saveRecord(); // 儲存成績
               isTransitioning = true;
               loadingProgress = 0; // 重置載入進度
               isGameLoaded = false; // 重置載入狀態
               fadeAlpha = 0;
               fadeDirection = 1;
               targetScene = 'ending';
               missionList.hide();
             }
           }
        }
      }
    }

    // 修正小助手的 Y 座標
    let stop5Y = height * 0.90 - (currentStop5H * charScale);

    if (playerX < stop5X) {
      push();
      translate(stop5X + currentStop5W * charScale, stop5Y);
      scale(-1, 1);
      image(currentStop5Img, 0, 0, currentStop5W * charScale, currentStop5H * charScale, currentStop5Frame * currentStop5W, 0, currentStop5W, currentStop5H);
      pop();
    } else {
      image(currentStop5Img, stop5X, stop5Y, currentStop5W * charScale, currentStop5H * charScale, currentStop5Frame * currentStop5W, 0, currentStop5W, currentStop5H);
    }

    // 繪製 Yukari (當完成兩關以上時出現)
    let completedLevels = 0;
    if (missions[3].completed) completedLevels++;
    if (missions[4].completed) completedLevels++;
    if (missions[5].completed) completedLevels++;

    if (completedLevels >= 2) {
      let yukariWorldX = (bgX - width) + 200; // 左邊背景的左側
      let yukariDrawY, yukariDrawW;
      let yukariText = "";
      
      if (abs(playerX - yukariWorldX) < 250) {
        yukariDialogueTimer++;
        let yukariY = height * 0.90 - (yukariHiH * charScale);
        let yukariHiFrame = floor(frameCount / 10) % 6;
        image(yukariHiSheet, yukariWorldX, yukariY, yukariHiW * charScale, yukariHiH * charScale, yukariHiFrame * yukariHiW, 0, yukariHiW, yukariHiH);
        yukariDrawY = yukariY;
        yukariDrawW = yukariHiW * charScale;
        if (yukariDialogueTimer < 60) {
          yukariText = "欸?你怎麼在這裡?";
        } else if (yukariDialogueTimer < 180) {
          yukariText = "喔對欸你來找我拿提示幣的....";
        } else if (yukariDialogueTimer < 240) {
          yukariText = "拍謝啦忘了";
        } else {
          if (yukariQuizResultText !== "") {
            yukariText = yukariQuizResultText;
            yukariQuizFeedbackTimer++;
            if (yukariQuizFeedbackTimer > 60) {
              yukariQuizResultText = "";
              yukariDialogueTimer = 240;
            }
          } else {
            yukariText = "你想要怎麼拿提示幣呢?";
            if (!isAnyModalOpen && !isYukariQuizActive && !isYukariMiniGameActive && !shouldHideUI) {
              let btnY = yukariDrawY - 110;
              let centerX = yukariWorldX + yukariDrawW / 2;
              yukariGameBtn.show();
              yukariGameBtn.position(centerX - 90, btnY);
              yukariQuizBtn.show();
              yukariQuizBtn.position(centerX + 10, btnY);
            }
          }
        }
      } else {
        let yukariY = height * 0.90 - (yukariH * charScale);
        let yukariFrame = floor(frameCount / 10) % 3;
        image(yukariSheet, yukariWorldX, yukariY, yukariW * charScale, yukariH * charScale, yukariFrame * yukariW, 0, yukariW, yukariH);
        yukariDrawY = yukariY;
        yukariDrawW = yukariW * charScale;
        yukariText = "啊啊啊煩死了怎麼這次又考這麼差";
      }

      push();
      textSize(20);
      textFont('Courier New');
      textStyle(BOLD);
      let tw = textWidth(yukariText);
      let bw = tw + 30;
      let bh = 40;
      let bx = yukariWorldX + (yukariDrawW - bw) / 2;
      let by = yukariDrawY - 60;
      fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rectMode(CORNER);
      rect(bx, by, bw, bh, 10);
      fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER);
      text(yukariText, bx + bw / 2, by + bh / 2);
      pop();
    }

    // --- Yukari Quiz Logic ---
    if (isYukariQuizActive) {
      if (yukariQuizStep >= currentYukariQuizList.length) {
        isYukariQuizActive = false;
        removeYukariQuizButtons();
        yukariSkipBtn.hide();
        showRewardMessage = true;
        rewardTimer = 0;
        hasPlayedYukariQuiz = true;
        if (hasPlayedYukariQuiz && hasPlayedYukariMiniGame) {
          completeMission(6);
        }

        // 根據答對題數給予評價
        if (yukariCorrectCount === 5) yukariQuizResultText = "太強了！全對！";
        else if (yukariCorrectCount >= 3) yukariQuizResultText = "還不錯嘛！答對" + yukariCorrectCount + "題";
        else yukariQuizResultText = "加油好嗎？只對" + yukariCorrectCount + "題";
        
        yukariQuizFeedbackTimer = 0;
      } else {
        let q = currentYukariQuizList[yukariQuizStep];
        
        // 繪製測驗框 (類似 Sakaki 但無計時/愛心)
        let q_bw = 450;
        let q_bh = 200;
        let q_bx = width / 2 - q_bw / 2;
        let q_by = height * 0.3; // 顯示在畫面上方
        
        push();
        fill(0, 0, 0, 200); stroke(255); strokeWeight(3); rectMode(CORNER);
        rect(q_bx, q_by, q_bw, q_bh, 15);
        
        let q_txt = "Q" + (yukariQuizStep + 1) + ": " + q.question;
        fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18); textFont('Courier New'); textStyle(BOLD);
        textWrap(CHAR);
        text(q_txt, q_bx + 10, q_by + 10, q_bw - 20, q_bh - 20);
        pop();
        
        if (yukariQuizButtons.length === 0) {
          let btnW = 300;
          let btnH = 45;
          let startX = width / 2 - btnW / 2;
          let startY = q_by + q_bh + 20;
          let shuffledOptions = shuffle(q.options);
          
          for (let i = 0; i < shuffledOptions.length; i++) {
            let btn = createButton(shuffledOptions[i]);
            btn.position(startX, startY + i * (btnH + 10));
            btn.size(btnW, btnH);
            btn.style('font-family', 'Courier New, monospace');
            btn.style('font-size', '18px');
            btn.style('font-weight', 'bold');
            btn.style('color', '#FFFFFF');
            btn.style('background-color', 'rgba(0,0,0,0.8)');
            btn.style('border', '2px solid #FFFFFF');
            btn.style('border-radius', '10px');
            btn.style('cursor', 'pointer');
            btn.mousePressed(() => {
              if (yukariQuizFeedbackTimer > 0) return;
              if (shuffledOptions[i] === q.answer) {
                btn.style('background-color', '#4CAF50'); // Green
                coinScore += 20;
                yukariCorrectCount++;
              } else {
                btn.style('background-color', '#F44336'); // Red
                yukariWrongAnswers++;
              }
              yukariQuizFeedbackTimer = 1;
              for (let b of yukariQuizButtons) b.attribute('disabled', 'true');
            });
            yukariQuizButtons.push(btn);
          }
        }
        
        // 顯示跳過按鈕
        if (yukariQuizFeedbackTimer === 0) {
          yukariSkipBtn.show();
          yukariSkipBtn.position(q_bx + q_bw - 120, q_by + q_bh - 50);
          
          if (coinScore < 5) {
            yukariSkipBtn.attribute('disabled', 'true');
            yukariSkipBtn.style('background-color', '#9E9E9E');
            yukariSkipBtn.style('cursor', 'not-allowed');
          } else {
            yukariSkipBtn.removeAttribute('disabled');
            yukariSkipBtn.style('background-color', '#FF9800');
            yukariSkipBtn.style('cursor', 'pointer');
          }
        } else {
          yukariSkipBtn.hide();
        }

        if (yukariQuizFeedbackTimer > 0) {
          yukariQuizFeedbackTimer++;
          if (yukariQuizFeedbackTimer > 60) {
            yukariQuizStep++;
            removeYukariQuizButtons();
            yukariQuizFeedbackTimer = 0;
          }
        }
      }
    }

    if (welcomeTimer > 360 && !hasCollectedCoins) {
      let coinX = stop5X - 100;
      let coinY = stop5Y + 50;
      let coinFrame = floor(frameCount / 3) % 18;
      image(coinsSheet, coinX, coinY, coinsW, coinsH, coinFrame * coinsW, 0, coinsW, coinsH);
      if (playerX + spriteW * charScale > coinX && playerX < coinX + coinsW) {
        hasCollectedCoins = true;
        coinScore += 30;
        if (coinSound) coinSound.play();
      }
    }

    if (isHi5 && !isAngry) {
      push();
      let txt = greetingText;
      textSize(20);
      let tw = textWidth(txt);
      let bw = tw + 30;
      let bh = 40;
      let bx = stop5X + (currentStop5W * charScale - bw) / 2;
      let by = stop5Y - 60;
      fill(62, 39, 35);
      stroke(255, 248, 225);
      strokeWeight(2);
      rect(bx, by, bw, bh, 10);
      fill(255, 248, 225);
      noStroke();
      textAlign(CENTER, CENTER);
      textFont('Courier New');
      textStyle(BOLD);
      text(txt, bx + bw / 2, by + bh / 2);
      pop();
    }

    if (isAngry) {
      push();
      let txt = "你不可以打我!";
      textSize(20);
      let tw = textWidth(txt);
      let bw = tw + 30;
      let bh = 40;
      let bx = stop5X + (currentStop5W * charScale - bw) / 2;
      let by = stop5Y - 60;
      fill(62, 39, 35);
      stroke(255, 248, 225);
      strokeWeight(2);
      rect(bx, by, bw, bh, 10);
      fill(255, 248, 225);
      noStroke();
      textAlign(CENTER, CENTER);
      textFont('Courier New');
      textStyle(BOLD);
      text(txt, bx + bw / 2, by + bh / 2);
      pop();
    }
  }

  // 玩家移動與物理
  let currentImg = spriteSheet;
  let currentW = spriteW;
  let currentH = spriteH;
  let currentTotalFrames = totalFrames;
  let yOffset = 0;
  
  let currentGroundY;
  if (currentScene === 'class103') {
    let baseGround = height * 0.98 - (walk1QH * playerScale);
    currentGroundY = baseGround;
    
    let playerFeetX = playerX + (walk1QW * playerScale) / 2;
    let playerFeetY = playerY + (walk1QH * playerScale);
    
    for (let p of platforms103) {
       if (playerFeetX > p.x && playerFeetX < p.x + p.w) {
           // 檢查玩家是否在平台上方 (或正在落下接觸平台)
           if (playerFeetY <= p.y + 20) {
               let platTop = p.y - (walk1QH * playerScale);
               if (platTop < currentGroundY) {
                   currentGroundY = platTop;
               }
           }
       }
    }

    // 如果角色在空中且沒有跳躍 (例如走出平台邊緣)，觸發掉落
    if (!isJumping && !isFalling && playerY < currentGroundY - 10) {
      isJumping = true;
      vy = 0;
    }
  } else if (currentScene === 'ending') {
    currentGroundY = height - 10 - (spriteH * charScale);
  } else if (currentScene === 'class101' || currentScene === 'class102') {
    currentGroundY = height * 0.98 - (spriteH * charScale);
  } else {
    currentGroundY = height * 0.90 - (spriteH * charScale);
  }

  if (!isFalling) {
    if (currentScene === 'ending') {
      // 結束畫面限制角色在視窗內，但不跌落
      if (playerX < 0) playerX = 0;
      if (playerX > width - spriteW * playerScale) playerX = width - spriteW * playerScale;
    } else if (currentScene === 'class101' || currentScene === 'class102' || currentScene === 'playground') {
      if (playerX <= 0 || playerX >= width - spriteW * playerScale) {
        isFalling = true;
        fallTimer = 0;
        isPushing = false; isJumping = false; playerY = currentGroundY; vy = 0;
      }
    } else if (currentScene === 'class103') {
      if (playerX < 0) playerX = 0;
      if (playerX > width - spriteW * playerScale) playerX = width - spriteW * playerScale;
    } else if (playerX < bgX - width || playerX > bgX + 2 * width - spriteW - 100 || playerX >= width - spriteW * playerScale) {
      isFalling = true;
      fallTimer = 0;
      isPushing = false; isJumping = false; playerY = currentGroundY; vy = 0;
    }
  }

  if (isFalling) {
    if (currentScene === 'class103') {
      currentImg = walk1QSheet; currentW = walk1QW; currentH = walk1QH; currentTotalFrames = 6; yOffset = 0;
    } else {
      currentImg = fallSheet; currentW = fallW; currentH = fallH; currentTotalFrames = 11; yOffset = 26;
    }
    fallTimer++;
    if (!isHitByTool) playerX -= speed * currentDirection; // 只有非被攻擊時才移動 (例如掉落深淵)
    if (isHitByTool && playerY < currentGroundY) {
      playerY += 10; // 若在空中被擊中，增加下墜速度
      if (playerY > currentGroundY) playerY = currentGroundY;
    }
    if (floor(fallTimer / 5) >= 11) {
      if (!isHitByTool || playerY >= currentGroundY) { // 確保落地後才結束跌倒狀態
        isFalling = false;
        isHitByTool = false; // 重置標記
      }
    }
  } else {
    let allowWASD = !isKaguraQuizActive;
    if ((keyIsDown(32) || tCtrl.action) && !isPushing && (!isFighting || !isJumping)) { isPushing = true; pushTimer = 0; }
    if ((keyIsDown(UP_ARROW) || (allowWASD && keyIsDown(87)) || tCtrl.up) && !isJumping) { // UP or W
      if (currentScene === 'class103') {
        vy = -15;
      } else {
        vy = isFighting ? -35 : -25; // 戰鬥時跳得更高
      }
      isJumping = true; 
      jumpTimer = 0; 
    }

    if (isJumping) {
      jumpTimer++; playerY += vy; vy += gravity;
      if (keyIsDown(RIGHT_ARROW) || (allowWASD && keyIsDown(68)) || tCtrl.right) { // RIGHT or D
        if (currentScene === 'class101' || currentScene === 'class102' || currentScene === 'class103' || currentScene === 'playground') { if (playerX < width - spriteW * playerScale) playerX += speed; }
        else if (playerX < width / 2 - (spriteW * charScale) / 2) playerX += speed;
        else if (bgX > -width * 0.5) bgX -= speed;
        else playerX += speed;
        currentDirection = 1;
      } else if (keyIsDown(LEFT_ARROW) || (allowWASD && keyIsDown(65)) || tCtrl.left) { // LEFT or A
        if (currentScene === 'class101' || currentScene === 'class102' || currentScene === 'class103' || currentScene === 'playground') { if (playerX > 0) playerX -= speed; }
        else if (playerX > width / 2 - (spriteW * charScale) / 2) playerX -= speed;
        else if (bgX < width) { bgX += speed; if (bgX > width) bgX = width; }
        else playerX -= speed;
        currentDirection = -1;
      }
      if (playerY >= currentGroundY) { playerY = currentGroundY; isJumping = false; vy = 0; }
      if (currentScene === 'class103') {
        if (vy >= 0) {
          // 下墜 (掉落)
          currentImg = down1QSheet; currentW = down1QW; currentH = down1QH; currentTotalFrames = 5;
          yOffset = (walk1QH - down1QH) * playerScale;
        } else {
          // 跳躍 (上升)
          currentImg = jump1QSheet; currentW = jump1QW; currentH = jump1QH; currentTotalFrames = 3;
          yOffset = (walk1QH - jump1QH) * playerScale;
        }
      } else {
        currentImg = jumpSheet; currentW = jumpW; currentH = jumpH; currentTotalFrames = 10;
      }
    } else {
      if (!isPushing) {
        if (keyIsDown(RIGHT_ARROW) || (allowWASD && keyIsDown(68)) || tCtrl.right) { // RIGHT or D
          currentDirection = 1; 
          let baseSpeed = (currentScene === 'playground' && isFighting) ? 8 : speed;
          if (currentScene === 'class103') baseSpeed = 3;
          let currentSpeed = baseSpeed;
          if (currentScene === 'class103') {
            currentImg = walk1QSheet; currentW = walk1QW; currentH = walk1QH; currentTotalFrames = 6;
          } else {
            if (keyIsDown(82) || tCtrl.run) { currentSpeed = baseSpeed * 2; currentImg = runSheet; currentW = runW; currentH = runH; currentTotalFrames = 6; }
            else { currentImg = walkSheet; currentW = walkW; currentH = walkH; currentTotalFrames = 8; }
          }
          if (currentScene === 'class101' || currentScene === 'class102' || currentScene === 'class103' || currentScene === 'playground' || currentScene === 'ending') { if (playerX < width - spriteW * playerScale) playerX += currentSpeed; }
          else if (playerX < width / 2 - (spriteW * charScale) / 2) playerX += currentSpeed;
          else if (bgX > -width * 0.5) bgX -= currentSpeed;
          else playerX += currentSpeed;
        } else if (keyIsDown(LEFT_ARROW) || (allowWASD && keyIsDown(65)) || tCtrl.left) { // LEFT or A
          currentDirection = -1; 
          let baseSpeed = (currentScene === 'playground' && isFighting) ? 8 : speed;
          if (currentScene === 'class103') baseSpeed = 3;
          let currentSpeed = baseSpeed;
          if (currentScene === 'class103') {
            currentImg = walk1QSheet; currentW = walk1QW; currentH = walk1QH; currentTotalFrames = 6;
          } else {
            if (keyIsDown(82) || tCtrl.run) { currentSpeed = baseSpeed * 2; currentImg = runSheet; currentW = runW; currentH = runH; currentTotalFrames = 6; }
            else { currentImg = walkSheet; currentW = walkW; currentH = walkH; currentTotalFrames = 8; }
          }
          if (currentScene === 'class101' || currentScene === 'class102' || currentScene === 'class103' || currentScene === 'playground' || currentScene === 'ending') { if (playerX > 0) playerX -= currentSpeed; }
          else if (playerX > width / 2 - (spriteW * charScale) / 2) playerX -= currentSpeed;
          else if (bgX < width) { bgX += currentSpeed; if (bgX > width) bgX = width; }
          else playerX -= currentSpeed;
        } else if ((keyIsDown(DOWN_ARROW) || (allowWASD && keyIsDown(83)) || tCtrl.down) && currentScene !== 'class103') { // DOWN or S
          let crouchFloorRatio = (currentScene === 'hallway') ? 0.97 : 0.99;
          currentImg = downSheet; currentW = downW; currentH = downH; currentTotalFrames = 1; yOffset = height * crouchFloorRatio - currentGroundY - (downH * charScale);
        }
      }
    }
  }

  if (currentScene === 'class103' && !isJumping && !isFalling && !isPushing && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(68) && !keyIsDown(65)) {
    currentImg = walk1QSheet; currentW = walk1QW; currentH = walk1QH; currentTotalFrames = 6;
  }

  if (isPushing) {
    currentImg = pushSheet; currentW = pushW; currentH = pushH; currentTotalFrames = 4; yOffset = 0;
    pushTimer++;
    if (floor(pushTimer / 10) >= 4) {
      isPushing = false;
      tools.push({ x: playerX, y: playerY, dir: currentDirection, timer: 0 });
    }
  }

  // 角色移動音效控制
  let allowWASD = !isKaguraQuizActive;
  if (!isFalling && !isJumping && !isPushing && (keyIsDown(RIGHT_ARROW) || (allowWASD && keyIsDown(68)) || tCtrl.right || keyIsDown(LEFT_ARROW) || (allowWASD && keyIsDown(65)) || tCtrl.left)) {
    if (keyIsDown(82) || tCtrl.run) { // 跑步
      if (walkSound.isPlaying()) walkSound.stop();
      if (!runSound.isPlaying()) runSound.loop();
    } else { // 走路
      if (runSound.isPlaying()) runSound.stop();
      if (!walkSound.isPlaying()) walkSound.loop();
    }
  } else {
    if (walkSound.isPlaying()) walkSound.stop();
    if (runSound.isPlaying()) runSound.stop();
  }

  let frameIndex;
  if (isFalling) { frameIndex = floor(fallTimer / 5); if (frameIndex >= currentTotalFrames) frameIndex = currentTotalFrames - 1; }
  else if (isPushing) { frameIndex = floor(pushTimer / 10); if (frameIndex >= 4) frameIndex = 3; }
  else {
    if (isJumping) frameIndex = floor(jumpTimer / 7) % currentTotalFrames;
    else {
      let animSpeed = 6;
      if (currentImg === runSheet) animSpeed = 4; else if (currentImg === spriteSheet) animSpeed = 20;
      frameIndex = floor(frameCount / animSpeed) % currentTotalFrames;
    }
  }
  
  let sx = frameIndex * currentW;
  
  if (currentDirection === -1) {
    push(); translate(playerX + currentW * playerScale, playerY + yOffset); scale(-1, 1);
    if (playerInvincible && frameCount % 10 < 5) tint(255, 128); // 修正：加入面向左邊時的無敵閃爍效果
    image(currentImg, 0, 0, currentW * playerScale, currentH * playerScale, sx, 0, currentW, currentH);
    pop();
  } else {
    // 若玩家處於無敵狀態，加入閃爍效果
    if (playerInvincible && frameCount % 10 < 5) tint(255, 128);
    image(currentImg, playerX, playerY + yOffset, currentW * playerScale, currentH * playerScale, sx, 0, currentW, currentH);
    noTint(); // 重置 tint
  }

  for (let i = tools.length - 1; i >= 0; i--) {
    let t = tools[i]; t.timer++; t.x += speed * 3 * t.dir;
    let toolFrame = floor(t.timer / 5); if (toolFrame > 6) toolFrame = 6;
    if (currentScene === 'hallway' && t.x + toolW * charScale > 425 + bgX && t.x < 425 + bgX + stop5W * charScale) {
      isAngry = true; angryTimer = 0; tools.splice(i, 1); continue;
    }
    if (currentScene === 'class101' && t.x + toolW * charScale > stop2X && t.x < stop2X + stop2W * charScale) {
      if (!yomiInvincible) { // 檢查是否無敵
        if (isFighting) {
          yomiHP -= 20;
          if (yomiHP < 0) yomiHP = 0;
        }
        isStop2Hit = true; 
        stop2HitTimer = 0;
        yomiInvincible = true; // 開啟無敵
        yomiInvincibleTimer = 0;
      }
      tools.splice(i, 1); continue;
    }
    if (currentScene === 'class102' && t.x + toolW * charScale > kaguraX && t.x < kaguraX + kaguraW * charScale) {
      // 判斷是否面向角色3
      let isFacing = (kaguraX > playerX && currentDirection === 1) || (kaguraX < playerX && currentDirection === -1);
      
      if (isFacing) {
        isKaguraHit = true;
        kaguraHitTimer = 0;
        tools.splice(i, 1);
        if (isFighting && !yomiInvincible) { // 借用 yomiInvincible 變數或新增 kaguraInvincible
           kaguraHP -= 20; // 玩家攻擊力
           if (kaguraHP < 0) kaguraHP = 0;
           // 這裡可以加入 Kagura 的無敵時間邏輯，目前簡化處理
        }
      }
      continue;
    }
    if (currentScene === 'playground' && t.x + toolW * charScale > sakakiX && t.x < sakakiX + sakakiW * charScale) {
      let isFacing = (sakakiX > playerX && currentDirection === 1) || (sakakiX < playerX && currentDirection === -1);
      if (isFacing) {
        isSakakiHit = true;
        sakakiHitTimer = 0;
        tools.splice(i, 1);
        if (isFighting) {
          sakakiHP -= 25;
          if (sakakiHP < 0) sakakiHP = 0;
        }
      }
      continue;
    }
    if (t.timer > 200) tools.splice(i, 1);
    else {
      let toolSx = toolFrame * toolW;
      push();
      if (t.dir === -1) { translate(t.x + toolW * charScale, t.y); scale(-1, 1); image(toolSheet, 0, 0, toolW * charScale, toolH * charScale, toolSx, 0, toolW, toolH); }
      else image(toolSheet, t.x, t.y, toolW * charScale, toolH * charScale, toolSx, 0, toolW, toolH);
      pop();
    }
  }

  if (welcomeTimer > 630 && currentScene !== 'ending') {
    resetMatrix(); push();
    let frameX = width - 70, frameY = 70, frameSize = 100;
    let d = dist(mouseX, mouseY, frameX, frameY);
    let isHovering = (d < frameSize / 2);
    let drawSleepW = sleepW * charScale, drawSleepH = sleepH * charScale;
    if (isHovering) { frameSize *= 1.2; drawSleepW *= 1.2; drawSleepH *= 1.2; }
    fill(255); stroke(0); strokeWeight(4); circle(frameX, frameY, frameSize);
    imageMode(CENTER); image(sleepSheet, frameX, frameY, drawSleepW, drawSleepH);
    if (showHelperBox && !shouldHideUI) {
      let msg = "問問小助手"; textSize(20); let tw = textWidth(msg);
      let boxW = tw + 30, boxH = 40, boxX = frameX - frameSize / 2 - boxW - 10, boxY = frameY - boxH / 2;
      fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rect(boxX, boxY, boxW, boxH, 10);
      fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER); textFont('Courier New'); textStyle(BOLD); text(msg, boxX + boxW / 2, boxY + boxH / 2);
    }
    if (welcomeTimer > 630 && welcomeTimer < 930) {
      let msg = "接下來我都會在這邊哦"; textSize(20); let tw = textWidth(msg);
      let boxW = tw + 20, boxH = 30, boxX = frameX - boxW / 2 - 60, boxY = frameY + frameSize / 2 + 10;
      fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rect(boxX, boxY, boxW, boxH, 10);
      fill(255, 248, 225); noStroke(); textAlign(CENTER, CENTER); textFont('Courier New'); textStyle(BOLD); text(msg, boxX + boxW / 2, boxY + boxH / 2);
    }
    pop();
  }

  if (currentScene === 'hallway') {
    // 判斷 101 門 (右邊)
    let door101WorldX = bgX + width * 0.91;
    let door101RightBgRightDoorX = (bgX + width) + width * 0.91; // 右邊背景的右邊那扇門
    let door101RightBgLeftDoorX = (bgX + width) + width * 0.36; // 右邊背景的左邊那扇門
    let door103WorldX = (bgX - width) + width * 0.36; // 左邊背景的左邊那扇門 (103)
    
    let fixedButtonY = height * 0.90 - (spriteH * charScale) - 100; // 按鈕固定高度

    if (!isAnyModalOpen && missions[1].completed && !shouldHideUI) {
      if (abs((playerX + spriteW / 2) - door101WorldX) < 50) {
        enter101Btn.show();
        enter101Btn.position(door101WorldX - 30, fixedButtonY);
      } else if (abs((playerX + spriteW / 2) - door101RightBgRightDoorX) < 50) {
        enter101Btn.show();
        enter101Btn.position(door101RightBgRightDoorX - 30, fixedButtonY);
      } else if (abs((playerX + spriteW / 2) - door101RightBgLeftDoorX) < 50) {
        enter101Btn.show();
        enter101Btn.position(door101RightBgLeftDoorX - 30, fixedButtonY);
      } else {
        enter101Btn.hide();
      }
      // 判斷 102 門 (左邊)
      let door102WorldX = bgX + width * 0.36;
      let door102LeftBgRightDoorX = (bgX - width) + width * 0.91; // 左邊背景的右邊那扇門
      if (abs((playerX + spriteW / 2) - door102WorldX) < 50) {
        enter102Btn.show();
        enter102Btn.position(door102WorldX - 30, fixedButtonY);
      } else if (abs((playerX + spriteW / 2) - door102LeftBgRightDoorX) < 50) {
        enter102Btn.show();
        enter102Btn.position(door102LeftBgRightDoorX - 30, fixedButtonY);
      } else {
        enter102Btn.hide();
      }

      // 判斷 103 門 (左邊背景的左邊門)
      let completedLevels = 0;
      if (missions[3].completed) completedLevels++;
      if (missions[4].completed) completedLevels++;
      if (missions[5].completed) completedLevels++;

      if (completedLevels >= 2 && abs((playerX + spriteW / 2) - door103WorldX) < 50) {
        enter103Btn.show();
        enter103Btn.position(door103WorldX - 30, fixedButtonY);
      } else {
        enter103Btn.hide();
      }

      // 判斷操場入口 (樓梯)
      let stairsWorldX = bgX + width * 0.65; // 假設樓梯在背景的 65% 處
      let stairsRightBgX = (bgX + width) + width * 0.65;
      let stairsLeftBgX = (bgX - width) + width * 0.65;
      
      if (abs((playerX + spriteW / 2) - stairsWorldX) < 50) {
        enterPlaygroundBtn.show();
        enterPlaygroundBtn.position(stairsWorldX - 40, fixedButtonY);
      } else if (abs((playerX + spriteW / 2) - stairsRightBgX) < 50) {
        enterPlaygroundBtn.show();
        enterPlaygroundBtn.position(stairsRightBgX - 40, fixedButtonY);
      } else if (abs((playerX + spriteW / 2) - stairsLeftBgX) < 50) {
        enterPlaygroundBtn.show();
        enterPlaygroundBtn.position(stairsLeftBgX - 40, fixedButtonY);
      } else {
        enterPlaygroundBtn.hide();
      }
    } else {
      enter101Btn.hide();
      enter102Btn.hide();
      enterPlaygroundBtn.hide();
      enter103Btn.hide();
    }
  } else {
    enter101Btn.hide();
    enter102Btn.hide();
    enterPlaygroundBtn.hide();
    enter103Btn.hide();
  }

  if (showChatDialog && !shouldHideUI) {
    let chatW = 250, chatH = 400, chatX = width - chatW - 180, chatY = 20;
    chatBg.position(chatX, chatY); chatBg.size(chatW, chatH); chatBg.show();
    chatOutputDiv.position(chatX + 2, chatY + 10); chatOutputDiv.size(chatW - 4, chatH - 70); chatOutputDiv.show();
    chatInput.show(); chatInput.size(140); chatInput.position(chatX + 20, chatY + chatH - 40);
    sendBtn.show(); sendBtn.position(chatX + 180, chatY + chatH - 40);
  } else {
    chatInput.hide(); sendBtn.hide(); if (chatOutputDiv) chatOutputDiv.hide(); if (chatBg) chatBg.hide();
  }

  if (isTransitioning) {
    fadeAlpha += 5 * fadeDirection;
    if (fadeAlpha >= 255) {
      // 轉場到結束畫面時的 Loading 效果
      if (targetScene === 'ending' && !isGameLoaded) {
         background(0);
         loadingProgress += 2; // 載入速度
         
         // 繪製 Loading UI
         fill(255); noStroke(); textAlign(CENTER, BOTTOM); textSize(24); textFont('Courier New'); textStyle(BOLD);
         text("LOADING... " + floor(min(loadingProgress, 100)) + "%", width / 2, height / 2 + 50);
         
         noFill(); stroke(255); strokeWeight(3); rectMode(CENTER);
         rect(width / 2, height / 2 + 70, 400, 30, 15);
         
         rectMode(CORNER); fill(255, 215, 0); noStroke();
         let barW = 400; let barH = 30; let barX = width / 2 - barW / 2; let barY = height / 2 + 70 - barH / 2;
         rect(barX + 5, barY + 5, (barW - 10) * (min(loadingProgress, 100) / 100), barH - 10, 10);
         
         if (loadingProgress >= 100) {
            isGameLoaded = true;
            // 切換音樂
            if (bgMusic.isPlaying()) bgMusic.stop();
            if (battleMusic.isPlaying()) battleMusic.stop();
            if (endingMusic && !endingMusic.isPlaying()) endingMusic.loop();
         }
         return; // 暫停在此，直到載入完成
      }

      fadeAlpha = 255; fadeDirection = -1;
      
      if (targetScene === 'class101_fight') {
        // 進入戰鬥狀態的特殊處理
        currentScene = 'class101';
        isFighting = true;
        quizFailed = false; // 停止顯示失敗對話
        playerX = width - 150; // 玩家在右
        stop2X = 150;          // Yomi 在左
        fightTimer = 0;
        yomiTools = [];
        playerHP = 100;
        yomiHP = 100;
        playerInvincible = false;
        yomiInvincible = false;
        yomiDefeated = false;
        if (bgMusic && bgMusic.isPlaying()) bgMusic.stop();
        if (battleMusic) battleMusic.loop();
      } else if (targetScene === 'class102_fight') {
        // 進入102戰鬥狀態的特殊處理
        currentScene = 'class102';
        isFighting = true;
        kaguraQuizFailed = false;
        playerX = width - 150;
        kaguraX = 150;
        fightTimer = 0;
        kaguraTools = [];
        playerHP = 100;
        kaguraHP = 100;
        playerInvincible = false;
        yomiInvincible = false;
        if (bgMusic && bgMusic.isPlaying()) bgMusic.stop();
        if (battleMusic) battleMusic.loop();
      } else if (targetScene === 'class102_fight') {
        // 進入102戰鬥狀態的特殊處理
        currentScene = 'class102';
        isFighting = true;
        kaguraQuizFailed = false;
        playerX = width - 150;
        kaguraX = 150;
        fightTimer = 0;
        kaguraTools = [];
        playerHP = 100;
        kaguraHP = 100;
        playerInvincible = false;
        yomiInvincible = false;
        if (bgMusic && bgMusic.isPlaying()) bgMusic.stop();
        if (battleMusic) battleMusic.loop();
      } else if (targetScene === 'playground_fight') {
        currentScene = 'playground';
        isFighting = true;
        sakakiQuizFailed = false;
        playerX = 100;
        sakakiX = width - 200;
        fightTimer = 0;
        sakakiTools = [];
        playerHP = 100;
        sakakiHP = 100;
        sakakiDefeated = false;
        sakakiYOffset = 0;
        playerInvincible = false;
        yomiInvincible = false;
        if (bgMusic && bgMusic.isPlaying()) bgMusic.stop();
        if (battleMusic) battleMusic.loop();
      } else if (targetScene === 'battle_end') {
        if (battleMusic && battleMusic.isPlaying()) battleMusic.stop();
        if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
        
        currentScene = 'class101';
        isFighting = false;
        stop2X = 500;
        playerX = width - 150;
        playerY = height * 0.98 - (spriteH * charScale);
        
        if (battleResult === 'win') {
          yomiDefeated = true;
          playerLostBattle = false;
          score += 500;
          coinScore += 5;
          completeMission(3);
        } else {
          yomiDefeated = false;
          playerLostBattle = true;
          playerHP = 100;
          yomiHP = 100;
        }
      } else if (targetScene === 'battle_end_102') {
        if (battleMusic && battleMusic.isPlaying()) battleMusic.stop();
        if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
        
        currentScene = 'class102';
        isFighting = false;
        kaguraX = 500; // 重置 Kagura 位置
        playerX = width - 150;
        playerY = height * 0.98 - (spriteH * charScale);
        
        if (battleResult === 'win') {
          kaguraDefeated = true;
          playerLostBattle = false;
          score += 500;
          coinScore += 5;
          completeMission(4);
        } else {
          kaguraDefeated = false;
          playerLostBattle = true;
          playerHP = 100;
          kaguraHP = 100;
        }
      } else if (targetScene === 'battle_end_playground') {
        if (battleMusic && battleMusic.isPlaying()) battleMusic.stop();
        if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
        
        currentScene = 'playground';
        isFighting = false;
        sakakiX = width / 2 + 50;
        sakakiYOffset = 0;
        sakakiVy = 0;
        playerX = 100;
        playerY = height * 0.90 - (spriteH * charScale);
        
        if (battleResult === 'win') {
          sakakiDefeated = true;
          playerLostBattle = false;
          score += 500;
          coinScore += 5;
          completeMission(5);
        } else {
          sakakiDefeated = false;
          playerLostBattle = true;
          playerHP = 100;
          sakakiHP = 100;
        }
      } else if (targetScene === 'ending') {
        currentScene = 'ending';
        missionList.hide();
        enter101Btn.hide();
        enter102Btn.hide();
        enter103Btn.hide();
        enterPlaygroundBtn.hide();
        playerX = width / 2;
        playerY = height - 10 - (spriteH * charScale);
        achievementScrollY = 0;
        leaderboardScrollY = 0;
        currentLeaderboardTab = 'coins';
        // 音樂切換已在 Loading 階段處理
      } else {
        let prevScene = currentScene;
        currentScene = targetScene;
        if (currentScene === 'class103') { playerX = width - 150; playerY = height * 0.98 - (walk1QH * charScale); class103Timer = 0; }
        else if (currentScene === 'class101' || currentScene === 'class102') { playerX = width - 150; playerY = height * 0.98 - (spriteH * charScale); }
        else if (currentScene === 'playground') { playerX = 100; playerY = height * 0.90 - (spriteH * charScale); }
        else {
        playerY = groundY;
        
        if (prevScene === 'class102') {
          let door1 = bgX + width * 0.36;
          let door2 = (bgX - width) + width * 0.91;
          // 判斷哪扇門在畫面上，優先選擇可見的門
          if (door1 > 0 && door1 < width) playerX = door1 - spriteW / 2;
          else if (door2 > 0 && door2 < width) playerX = door2 - spriteW / 2;
          else playerX = door1 - spriteW / 2;
        } else if (prevScene === 'class101') {
           playerX = bgX + width * 0.91 - spriteW / 2;
        } else if (prevScene === 'playground') {
           let s1 = bgX + width * 0.65;
           let s2 = (bgX + width) + width * 0.65;
           let s3 = (bgX - width) + width * 0.65;
           
           if (s1 > 0 && s1 < width) playerX = s1;
           else if (s2 > 0 && s2 < width) playerX = s2;
           else if (s3 > 0 && s3 < width) playerX = s3;
           else playerX = s1;
           
           playerX -= (spriteW * charScale) / 2;
        } else if (prevScene === 'class103') {
           playerX = (bgX - width) + width * 0.36 - spriteW / 2;
        }

        // 當回到走廊時，重置角色2的位置，以便下次進入教室時位置正確
        stop2X = 500;
        isFighting = false;
        quizFailed = false;
        quizFailedTimer = 0;
        isQuizTimeout = false;
        playerInvincible = false;
        yomiInvincible = false;
        yomiDefeated = false;
        playerLostBattle = false;
        kaguraQuizFailedTimer = 0;
        sakakiQuizFailedTimer = 0;
      }
      nameInput.hide(); nameSubmitBtn.hide();
      }
    } else if (fadeAlpha <= 0 && fadeDirection === -1) {
      fadeAlpha = 0; isTransitioning = false; isFirstTransition = false;
    }
  }
  if (fadeAlpha > 0) { push(); rectMode(CORNER); fill(0, fadeAlpha); noStroke(); rect(0, 0, width, height); pop(); }

  if ((currentScene === 'class101' || currentScene === 'class102' || currentScene === 'class103') && !isFighting && !isAnyModalOpen && !shouldHideUI) {
    let canExit = true;
    if (currentScene === 'class103') {
      for (let c of coins103) {
        if (!c.collected) {
          canExit = false;
          break;
        }
      }
    }
    if (canExit && playerX > width - 200) { backToHallBtn.show(); backToHallBtn.position(playerX + 20, playerY - 50); }
    else backToHallBtn.hide();
  } else if (currentScene === 'playground' && !isFighting && !isAnyModalOpen && !shouldHideUI) {
    if (playerX > width - 200 || playerX < 100) { backToHallBtn.show(); backToHallBtn.position(playerX + 20, playerY - 50); }
    else backToHallBtn.hide();
  } else backToHallBtn.hide();

  if (coinScore >= 500 && !missions[2].completed) {
    completeMission(2);
  }

  if (currentScene !== 'ending' && !shouldHideUI) {
    if (playAgainBtn) playAgainBtn.hide();
    drawTopUI();
  }

  // 繪製戰鬥中的HP條
  if (!shouldHideUI) drawHPBars();

  if (showRewardMessage && !shouldHideUI) {
    push(); textAlign(CENTER, TOP); textSize(32); fill(255, 215, 0); stroke(0); strokeWeight(4);
    text("恭喜通關!", width / 2, 80); pop();
    rewardTimer++; if (rewardTimer > 120) { showRewardMessage = false; rewardTimer = 0; }
  }

  // 繪製設定按鈕與視窗
  drawSettingsButton();
  drawSettingsModal();
  
  if (!shouldHideUI) {
    checkAchievements();
    drawAchievementNotifications();

    if (showMissionBox) {
      push(); rectMode(CENTER); fill(0, 0, 0, 200); stroke(255); strokeWeight(3);
      rect(width / 2, height / 2, 400, 200, 20);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(20);
      textFont('Courier New'); textStyle(BOLD);
      text(currentMissionDesc, width / 2, height / 2, 360, 160);
      textSize(14); fill(200); text("(點擊畫面任意處關閉)", width / 2, height / 2 + 80);
      pop();
    }

    if (showScoreHelp) {
      push();
      rectMode(CENTER);
      fill(0, 0, 0, 200);
      stroke(255);
      strokeWeight(3);
      rect(width / 2, height / 2, 600, 300, 20);
      
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      textFont('Courier New');
      textStyle(BOLD);
      textLeading(35);
      text("答對1題可得300分，及30個提示幣；答錯不得分，甚麼都沒有。\n如果3題全錯或時間內未做答，即馬上進入戰鬥模式，\n在戰鬥模式內戰勝關主可得500分，及5個提示幣", width / 2, height / 2);
      pop();
    }

    if (showCoinHelp) {
      push();
      rectMode(CENTER);
      fill(0, 0, 0, 200);
      stroke(255);
      strokeWeight(3);
      rect(width / 2, height / 2, 600, 300, 20);
      
      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(20);
      textFont('Courier New');
      textStyle(BOLD);
      textLeading(35);
      text("在校園內尋找散落各處的提示幣，\n每3點可以詢問一次右上角的小助手，\n如果你有不會的問題就問他!", width / 2, height / 2);
      pop();
    }

    if (isYukariMiniGameActive) {
      drawYukariMiniGame();
    }

    if (isMobileDevice) {
      drawTouchUI();
    }
  }
}

function submitName() {
  let val = nameInput.value();
  if (!val) return;

  // 檢查字數限制：中文10字，英文16字
  let hasNonAscii = false;
  for (let i = 0; i < val.length; i++) {
    if (val.charCodeAt(i) > 255) {
      hasNonAscii = true;
      break;
    }
  }
  let maxLen = hasNonAscii ? 10 : 16;

  if (val.length > maxLen) {
    greetingText = "名字太長了! (中文10字/英文16字)";
    nameInput.value('');
    return;
  }

  playerName = val;
  greetingText = playerName + ", 歡迎你"; isNameEntered = true; nameInput.hide(); nameSubmitBtn.hide(); welcomeTimer = 0;
}

function missionSelected() {
  let selectedTitle = missionList.value();
  let mission = missions.find(m => m.title === selectedTitle);
  if (mission && mission.desc) { currentMissionDesc = mission.desc; showMissionBox = true; }
}

function completeMission(index) {
  if (index >= 0 && index < missions.length) {
    missions[index].completed = true;
    let options = missionList.elt.getElementsByTagName('option');
    if (options[index]) { options[index].disabled = true; options[index].style.color = 'gray'; options[index].text += ' (已完成)'; }
  }
}

function mousePressed() {
  // 解決瀏覽器阻擋自動播放的問題：當使用者點擊畫面時，恢復音訊播放
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  
  if (gameState === 'START') {
    if (showSettings) {
      // 如果設定視窗開啟，點擊視窗外關閉 (視窗大小加大為 450x350)
      if (mouseX > width/2 - 225 && mouseX < width/2 + 225 && 
          mouseY > height/2 - 175 && mouseY < height/2 + 175) {
        return;
      } else {
        showSettings = false;
        return;
      }
    }
    
    if (showStartRules) {
      let boxW = width * 0.75;
      let boxH = height * 0.75;
      let btnW = 120;
      let btnH = 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;

      // 關閉按鈕 (右上角叉叉)
      let closeBtnSize = 40;
      let closeBtnX = width / 2 + boxW / 2 - 30;
      let closeBtnY = height / 2 - boxH / 2 + 30;
      if (dist(mouseX, mouseY, closeBtnX, closeBtnY) < closeBtnSize / 2) {
        showStartRules = false;
        return;
      }

      // 下一頁按鈕 (Page 1 -> 2) 或 (Page 2 -> 3)
      let nextBtnX = width / 2 + boxW / 2 - btnW - 40;
      if (rulePage === 1) {
        if (mouseX > nextBtnX && mouseX < nextBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 2;
          return;
        }
      }
      else if (rulePage === 2) {
        if (mouseX > nextBtnX && mouseX < nextBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 3;
          return;
        }
      }
      else if (rulePage === 3) {
        if (mouseX > nextBtnX && mouseX < nextBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 4;
          return;
        }
      }
      else if (rulePage === 4) {
        if (mouseX > nextBtnX && mouseX < nextBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 5;
          return;
        }
      }
      
      // 上一頁按鈕 (Page 2 -> 1) 或 (Page 3 -> 2)
      let prevBtnX = width / 2 - boxW / 2 + 40;
      if (rulePage === 2) {
        if (mouseX > prevBtnX && mouseX < prevBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 1;
          return;
        }
      }
      else if (rulePage === 3) {
        if (mouseX > prevBtnX && mouseX < prevBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 2;
          return;
        }
      }
      else if (rulePage === 4) {
        if (mouseX > prevBtnX && mouseX < prevBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 3;
          return;
        }
      }
      else if (rulePage === 5) {
        if (mouseX > prevBtnX && mouseX < prevBtnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
          rulePage = 4;
          return;
        }
      }

      return;
    }

    let btnW = 200;
    let btnH = 50;
    let startY = height / 2 + 50;

    // 開始遊戲按鈕
    if (abs(mouseX - width / 2) < btnW / 2 && abs(mouseY - startY) < btnH / 2) {
      isStartingGame = true;
      fadeAlpha = 0;
      loadingProgress = 0;
      isGameLoaded = false;
    }
    // 遊戲規則按鈕
    else if (abs(mouseX - width / 2) < btnW / 2 && abs(mouseY - (startY + 70)) < btnH / 2) {
      showStartRules = true;
      rulePage = 1;
    }
    // 設定按鈕
    else if (abs(mouseX - width / 2) < btnW / 2 && abs(mouseY - (startY + 140)) < btnH / 2) {
      showSettings = true;
    }
    return;
  }

  // 設定圖示點擊判定 (位置約在 35, 45)
  if (dist(mouseX, mouseY, 35, 45) < 25) {
    showSettings = !showSettings;
    return; // 避免觸發其他點擊事件
  }
  
  if (showSettings) {
    // 檢查點擊是否在設定視窗內 (視窗大小加大為 450x350)
    if (mouseX > width/2 - 225 && mouseX < width/2 + 225 && 
        mouseY > height/2 - 175 && mouseY < height/2 + 175) {
      return; // 在視窗內，允許操作滑桿，不關閉
    } else {
      showSettings = false; // 在視窗外，關閉
      return;
    }
  }

  // Yukari 小遊戲點擊判定
  if (isYukariMiniGameActive) {
    let w = 600;
    let h = 400;
    let x = (width - w) / 2;
    let y = (height - h) / 2;

    if (!yukariMiniGameStarted) {
      let btnW = 160;
      let btnH = 50;
      let btnX = x + w / 2 - btnW / 2;
      let btnY = y + 280;
      if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
        yukariMiniGameStarted = true;
      }
      return;
    }

    if (yukariMiniGameFinished) {
      // 檢查是否點擊關閉按鈕 (右下角)
      let closeSize = 30;
      let closeX = x + w - 30;
      let closeY = y + h - 30;
      if (dist(mouseX, mouseY, closeX, closeY) < closeSize) {
        isYukariMiniGameActive = false;
      }
      return;
    }
    
    // 檢查是否點擊到金幣
    for (let c of yukariMiniGameCoins) {
      if (!c.collected) {
        if (dist(mouseX, mouseY, c.x + coinsW/2, c.y + coinsH/2) < coinsW) {
          c.collected = true;
          if (c.type === 'bomb') {
            yukariMiniGameScore -= 10; // 點到炸彈扣分
            yukariMiniGameExplosions.push({
              x: c.x + coinsW/2,
              y: c.y + coinsH/2,
              timer: 0
            });
          } else {
            yukariMiniGameScore++;
            if (coinSound) coinSound.play();
          }
          break; // 一次只點一個
        }
      }
    }
    return; // 阻擋其他點擊
  }

  // 提示幣框點擊判定 (位置約在 580, 20, 寬220, 高45)
  if (mouseX > 580 && mouseX < 800 && mouseY > 20 && mouseY < 65) {
    showCoinHelp = !showCoinHelp;
    showScoreHelp = false;
    return;
  }
  
  // 結束畫面排行榜頁籤切換
  if (currentScene === 'ending') {
     let lbBoxX = width / 2 + 350;
     let lbBoxW = 320;
     let lbBoxH = 400;
     let char2HeadY = (height - 10) - (hi2H * charScale);
     let achBoxY = char2HeadY - 400 / 2 - 20;
     let lbBoxY = achBoxY; // 與 draw 中一致
     let tabY = lbBoxY - lbBoxH/2 + 70;
     let tab1X = lbBoxX - 70;
     let tab2X = lbBoxX + 70;
     let tabW = 120;
     let tabH = 35;
     
     if (showExitConfirmation) {
       let btnY = height/2 + 40;
       // 點擊 "是"
       if (mouseX > width/2 - 90 && mouseX < width/2 - 10 && mouseY > btnY - 20 && mouseY < btnY + 20) {
         try { window.close(); } catch(e) {}
         window.location.href = "about:blank";
       }
       // 點擊 "否"
       if (mouseX > width/2 + 10 && mouseX < width/2 + 90 && mouseY > btnY - 20 && mouseY < btnY + 20) {
         showExitConfirmation = false;
       }
       return;
     }

     // 關機按鈕點擊判定
     if (dist(mouseX, mouseY, 40, height - 40) < 20) {
       showExitConfirmation = true;
       return;
     }

     if (mouseX > tab1X - tabW/2 && mouseX < tab1X + tabW/2 && mouseY > tabY - tabH/2 && mouseY < tabY + tabH/2) {
       currentLeaderboardTab = 'coins';
       leaderboardScrollY = 0;
     }
     if (mouseX > tab2X - tabW/2 && mouseX < tab2X + tabW/2 && mouseY > tabY - tabH/2 && mouseY < tabY + tabH/2) {
       currentLeaderboardTab = 'score';
       leaderboardScrollY = 0;
     }

    // 角色點擊互動 (祝賀詞) - 移至 mousePressed
    let charY = height - 10;
    let spacing = width / 7;
    let clickY = mouseY;
    let clickX = mouseX;
    let hitRadius = 80;

    // Char 2 (Yomi)
    if (dist(clickX, clickY, spacing * 2, charY - hi2H*charScale/2) < hitRadius) {
       activeEndingMessage = "恭喜你完成了數學測驗！";
       activeEndingCharX = spacing * 2;
       activeEndingCharY = charY - hi2H*charScale;
       activeEndingMessageTimer = 180;
    }
    // Char 3 (Kagura)
    else if (dist(clickX, clickY, spacing * 3, charY - hi3H*charScale/2) < hitRadius) {
       activeEndingMessage = "哼，算你厲害，這次放過你。";
       activeEndingCharX = spacing * 3;
       activeEndingCharY = charY - hi3H*charScale;
       activeEndingMessageTimer = 180;
    }
    // Char 4 (Sakaki)
    else if (dist(clickX, clickY, spacing * 4, charY - hi4H*charScale/2) < hitRadius) {
       activeEndingMessage = "國語造詣很高喔，繼續保持！";
       activeEndingCharX = spacing * 4;
       activeEndingCharY = charY - hi4H*charScale;
       activeEndingMessageTimer = 180;
    }
    // Char 5 (Kamineko)
    else if (dist(clickX, clickY, spacing * 5, charY - hi5H*charScale/2) < hitRadius) {
       activeEndingMessage = "我就知道你可以的，喵！";
       activeEndingCharX = spacing * 5;
       activeEndingCharY = charY - hi5H*charScale;
       activeEndingMessageTimer = 180;
    }
    // Char 6 (Yukari)
    else if (dist(clickX, clickY, spacing * 6, charY - yukariHiH*charScale/2) < hitRadius) {
       activeEndingMessage = "等你回來喔！";
       activeEndingCharX = spacing * 6;
       activeEndingCharY = charY - yukariHiH*charScale;
       activeEndingMessageTimer = 180;
    }
  }

  // 得分框點擊判定 (位置約在 830, 20, 寬220, 高45)
  if (mouseX > 830 && mouseX < 1050 && mouseY > 20 && mouseY < 65) {
    showScoreHelp = !showScoreHelp;
    showCoinHelp = false;
    return;
  }

  if (showScoreHelp) {
    showScoreHelp = false;
    return;
  }

  if (showCoinHelp) {
    showCoinHelp = false;
    return;
  }

  let frameX = width - 70, frameY = 70, frameSize = 100;
  if (welcomeTimer > 630 && dist(mouseX, mouseY, frameX, frameY) < frameSize / 2) {
    showHelperBox = !showHelperBox; showChatDialog = false;
  } else {
    if (showHelperBox) {
      let msg = "問問小助手"; textSize(20); let tw = textWidth(msg);
      let boxW = tw + 30, boxH = 40, boxX = frameX - frameSize / 2 - boxW - 10, boxY = frameY - boxH / 2;
      if (mouseX > boxX && mouseX < boxX + boxW && mouseY > boxY && mouseY < boxY + boxH) {
        showHelperBox = false; showChatDialog = true; return;
      }
    }
    if (showChatDialog) {
      let chatW = 250, chatH = 400, chatX = width - chatW - 180, chatY = 50;
      if (mouseX > chatX && mouseX < chatX + chatW && mouseY > chatY && mouseY < chatY + chatH) return;
      showChatDialog = false;
    }
    if (showMissionBox) { showMissionBox = false; missionList.selected('任務清單'); }
    if (showHelperBox) showHelperBox = false;
  }
}

function mouseWheel(event) {
  if (currentScene === 'ending') {
    let achBoxW = 320;
    let achBoxH = 400;
    let achBoxX = (width / 7) * 2;
    let char2HeadY = (height - 10) - (hi2H * charScale);
    let achBoxY = char2HeadY - achBoxH / 2 - 20;
    
    // 成就列表捲動
    if (mouseX > achBoxX - achBoxW/2 && mouseX < achBoxX + achBoxW/2 && mouseY > achBoxY - achBoxH/2 && mouseY < achBoxY + achBoxH/2) {
       achievementScrollY -= event.delta;
       let contentH = achievementsList.length * 85;
       let viewH = achBoxH - 80;
       let minScroll = min(0, viewH - contentH);
       achievementScrollY = constrain(achievementScrollY, minScroll, 0);
    }
    
    let lbBoxX = width / 2 + 350;
    let lbBoxW = 320;
    let lbBoxH = 400;
    let lbBoxY = achBoxY;
    
    // 排行榜捲動
    if (mouseX > lbBoxX - lbBoxW/2 && mouseX < lbBoxX + lbBoxW/2 && mouseY > lbBoxY - lbBoxH/2 && mouseY < lbBoxY + lbBoxH/2) {
       leaderboardScrollY -= event.delta;
       let displayList = leaderboardData;
       let contentH = displayList.length * 35;
       let viewH = lbBoxH - 155;
       let minScroll = min(0, viewH - contentH);
       leaderboardScrollY = constrain(leaderboardScrollY, minScroll, 0);
    }
  }
}

function drawTopUI() {
  push(); resetMatrix(); rectMode(CORNER);
  let progressX = 350, uiY = 20, progressW = 200, uiH = 45;
  let completedCount = 0; for (let i = 1; i < missions.length; i++) if (missions[i].completed) completedCount++;
  let totalMissions = missions.length - 1;
  fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rect(progressX, uiY, progressW, uiH, 15);
  fill(255); noStroke(); textSize(20); textAlign(LEFT, CENTER); textFont('Courier New'); textStyle(BOLD);
  text("任務已完成 " + completedCount + "/" + totalMissions, progressX + 20, uiY + uiH / 2);

  let uiX = progressX + progressW + 30, uiW = 220;
  fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rect(uiX, uiY, uiW, uiH, 15);
  let iconSize = 30, coinAnimFrameUI = floor(frameCount / 3) % 18;
  image(coinsSheet, uiX + 10, uiY + (uiH - iconSize) / 2, iconSize, iconSize, coinAnimFrameUI * coinsW, 0, coinsW, coinsH);
  fill(255); noStroke(); textSize(20); textAlign(LEFT, CENTER); text(coinScore, uiX + 50, uiY + uiH / 2);

  let scoreX = uiX + uiW + 30, scoreW = 220;
  fill(62, 39, 35); stroke(255, 248, 225); strokeWeight(2); rect(scoreX, uiY, scoreW, uiH, 15);
  fill(255); noStroke(); textAlign(LEFT, CENTER); text("得分 " + score, scoreX + 20, uiY + uiH / 2);
  pop();
}

function drawHPBars() {
  if (!isFighting) return;

  push();
  resetMatrix();
  rectMode(CORNER);

  let barW = 300;
  let barH = 25;
  let containerW = 350;
  let containerH = 90;
  let yPos = 80;
  let padding = 40;
  const maxHP = 100;
  
  let enemyName = (currentScene === 'class102') ? "KAGURA" : (currentScene === 'playground') ? "SAKAKI" : "YOMI";
  let currentEnemyHP = (currentScene === 'class102') ? kaguraHP : (currentScene === 'playground') ? sakakiHP : yomiHP;

  textFont('Courier New');
  textStyle(BOLD);

  // --- Enemy HUD (Left) ---
  let enemyHPX = padding;
  
  // Container
  fill(62, 39, 35, 230); // Dark brown background
  stroke(255, 215, 0);   // Gold border
  strokeWeight(4);
  rect(enemyHPX, yPos, containerW, containerH, 15);

  // Name Label
  noStroke();
  fill(255, 215, 0); // Gold text
  textSize(24);
  textAlign(LEFT, TOP);
  text(enemyName, enemyHPX + 25, yPos + 15);

  // HP Number
  fill(255);
  textSize(18);
  textAlign(RIGHT, TOP);
  text(currentEnemyHP + "/" + maxHP, enemyHPX + containerW - 25, yPos + 20);

  // HP Bar
  let barX = enemyHPX + (containerW - barW) / 2;
  let barY = yPos + 50;
  fill(30); stroke(100); strokeWeight(2);
  rect(barX, barY, barW, barH, 10);

  let enemyHPWidth = barW * (currentEnemyHP / maxHP);
  if (enemyHPWidth > 0) {
    fill(220, 20, 60); noStroke(); // Crimson Red
    rect(barX, barY, enemyHPWidth, barH, 10);
    fill(255, 255, 255, 50); // Shine
    rect(barX, barY, enemyHPWidth, barH/2, 10);
  }

  // --- Player HUD (Right) ---
  let playerHPX = width - containerW - padding;

  // Container
  fill(255, 248, 225, 230);
  stroke(93, 64, 55);
  strokeWeight(4);
  rect(playerHPX, yPos, containerW, containerH, 15);

  // Name Label
  noStroke();
  fill(93, 64, 55);
  textSize(24);
  textAlign(LEFT, TOP);
  let pName = playerName || "PLAYER";
  text(pName.toUpperCase(), playerHPX + 25, yPos + 15);

  // HP Number
  fill(62, 39, 35);
  textSize(18);
  textAlign(RIGHT, TOP);
  text(playerHP + "/" + maxHP, playerHPX + containerW - 25, yPos + 20);

  // HP Bar
  barX = playerHPX + (containerW - barW) / 2;
  fill(30); stroke(100); strokeWeight(2);
  rect(barX, barY, barW, barH, 10);

  let playerHPWidth = barW * (playerHP / maxHP);
  if (playerHPWidth > 0) {
    fill(46, 204, 113); noStroke(); // Emerald Green
    rect(barX, barY, playerHPWidth, barH, 10);
    fill(255, 255, 255, 50); // Shine
    rect(barX, barY, playerHPWidth, barH/2, 10);
  }

  pop();
}

function handleChatSubmit() {
  let q = chatInput.value();
  if (q) {
    if (coinScore < 3) {
      let newEntry = "<b>你:</b> " + q + "<br><span style='color:#FF5252;'><b>Kamineko:</b> 錢不夠啦 !</span><br><br>";
      chatOutputDiv.html(chatOutputDiv.html() + newEntry); chatOutputDiv.elt.scrollTop = chatOutputDiv.elt.scrollHeight;
      chatInput.value(''); return;
    }
    coinScore -= 3;
    let ans = "Kamineko: 喵~ 我還在學習中!";
    if (q.includes("名字") || q.includes("是誰")) ans = "Kamineko: 我是 Kamineko，你的提示小助手!";
    if (q.includes("任務")) ans = "Kamineko: 點擊左上角的選單可以查看任務喔!";
    if (q.includes("提示幣") || q.includes("錢")) ans = "Kamineko: 提示幣散落在走廊上，快去收集吧!";
    if (q.includes("你好") || q.includes("嗨") || q.includes("哈囉")) ans = "Kamineko: 你好呀! 加油!";
    if (q.includes("同時") || q.includes("兩個")) ans = "Kamineko: 我會分身術 !";
    if (q.includes("我是誰") || q.includes("我")) ans = "Kamineko: " + playerName;
    
    // 提示系統邏輯
    if ((q.includes("這題") && (q.includes("答案") || q.includes("怎麼寫"))) || (q.includes("提示") && !q.includes("提示幣"))) {
      if (lastQuestionText) {
        let hintObj = pointData.find(p => p.question === lastQuestionText);
        if (hintObj) {
          ans = "Kamineko: 這題的提示是: " + hintObj.hint;
        } else {
          ans = "Kamineko: 抱歉，我沒有這題的提示資料...";
        }
      } else {
        ans = "Kamineko: 你還沒看過任何題目喔!";
      }
    }

    let newEntry = "<b>你:</b> " + q + "<br>" + ans.replace("Kamineko:", "<b>Kamineko:</b>") + "<br><br>";
    chatOutputDiv.html(chatOutputDiv.html() + newEntry); chatOutputDiv.elt.scrollTop = chatOutputDiv.elt.scrollHeight;
    chatInput.value('');
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (showChatDialog && chatInput.value() !== "") handleChatSubmit();
  }
}

function removeQuizButtons() {
  for (let b of quizButtons) {
    b.remove();
  }
  quizButtons = [];
}

function removeSakakiQuizButtons() {
  for (let b of sakakiQuizButtons) {
    b.remove();
  }
  sakakiQuizButtons = [];
}

function removeYukariQuizButtons() {
  for (let b of yukariQuizButtons) {
    b.remove();
  }
  yukariQuizButtons = [];
  if (yukariSkipBtn) yukariSkipBtn.hide();
}

function startYukariQuiz() {
  if (yukariQuizData.length > 0) {
    currentYukariQuizList = shuffle(yukariQuizData).slice(0, 5);
  }
  isYukariQuizActive = true;
  yukariQuizStep = 0;
  yukariCorrectCount = 0;
  yukariQuizResultText = "";
  yukariQuizFeedbackTimer = 0;
  removeYukariQuizButtons();
}

function startYukariMiniGame() {
  isYukariMiniGameActive = true;
  yukariMiniGameStarted = false;
  yukariMiniGameTimer = 30 * 60; // 30秒 (假設60fps)
  yukariMiniGameCoins = [];
  yukariMiniGameScore = 0;
  yukariMiniGameFinished = false;
  yukariMiniGameExplosions = [];
}

function resetGame() {
  gameState = 'START';
  playAgainBtn.hide();
  
  score = 0;
  coinScore = 0;
  for (let m of missions) m.completed = false;
  // 重置任務清單 UI
  let options = missionList.elt.getElementsByTagName('option');
  for(let i=0; i<options.length; i++) {
      options[i].disabled = false;
      options[i].style.color = '#3E2723';
      options[i].text = missions[i].title;
  }
  
  playerHP = 100; yomiHP = 100; kaguraHP = 100; sakakiHP = 100;
  isFighting = false;
  if (endingMusic && endingMusic.isPlaying()) endingMusic.stop();
  if (bgMusic && !bgMusic.isPlaying()) bgMusic.loop();
  yomiDefeated = false; kaguraDefeated = false; sakakiDefeated = false;
  hasMetYomi = false; hasAnsweredStop2 = false; hasAnsweredStop2Quiz = false; playerSaidOk = false;
  isHi5 = false; isNameEntered = false; welcomeTimer = 0; playerName = ""; greetingText = "請問你叫什麼名字";
  hasCollectedCoins = false;
  coinsList.forEach(c => c.collected = false);
  coins103.forEach(c => c.collected = false);
  tools = []; yomiTools = []; kaguraTools = []; sakakiTools = [];
  isGameOver = false;
  currentScene = 'hallway';
  bgX = 0;
  playerX = width * 0.1;
  playerY = height * 0.90 - (spriteH * charScale);
  stop2X = 500; kaguraX = 500; sakakiX = width/2 + 50;
  sakakiState = 0; kaguraState = 0;
  hasPlayedYukariQuiz = false; hasPlayedYukariMiniGame = false;
  kaminekoEndTimer = 0;
  endGameChoice = "";
  endGameTimer = 0;
  isTransitioning = false;
  fadeAlpha = 0;
  loadingProgress = 0;
  isGameLoaded = false;
  isStartingGame = false;
  isFirstTransition = false;
  yomiPlayCount = 0;
  kaguraPlayCount = 0;
  sakakiPlayCount = 0;
  totalWrongAnswers = 0;
  yukariWrongAnswers = 0;
  unlockedAchievements = [false, false, false, false, false, false];
  achievementQueue = [];
  hasSavedRecord = false;
  yukariMiniGameStarted = false;
  showExitConfirmation = false;
  
  nameInput.value(''); stop2Input.value(''); kaguraInput.value(''); sakakiInput.value('');
}

function drawYukariMiniGame() {
  push();
  // 半透明背景遮罩
  fill(0, 150);
  rectMode(CORNER);
  rect(0, 0, width, height);
  
  // 遊戲視窗
  let w = 600;
  let h = 400;
  let x = (width - w) / 2;
  let y = (height - h) / 2;
  
  fill(62, 39, 35);
  stroke(255, 215, 0);
  strokeWeight(4);
  rect(x, y, w, h, 20);
  
  if (!yukariMiniGameStarted) {
    // 遊戲說明畫面
    fill(255); noStroke(); textAlign(CENTER, CENTER);
    textSize(32); text("Yukari 的金幣挑戰", x + w/2, y + 60);
    textSize(20); 
    text("說明：", x + w/2, y + 120);
    text("點擊金幣收集，點到炸彈會扣10分！", x + w/2, y + 160);
    text("限時 30 秒，盡可能收集更多金幣吧！", x + w/2, y + 200);

    // 開始按鈕
    let btnW = 160; let btnH = 50;
    let btnX = x + w/2 - btnW/2;
    let btnY = y + 280;
    
    if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
      fill(93, 64, 55); stroke(255);
    } else {
      fill(62, 39, 35); stroke(255, 215, 0);
    }
    strokeWeight(2);
    rect(btnX, btnY, btnW, btnH, 10);
    
    fill(255); noStroke(); textSize(24);
    text("開始遊戲", x + w/2, y + 280 + 25);
  } else {
    // 遊戲進行中
    fill(255); noStroke(); textSize(24);
    textAlign(LEFT, TOP); text("剩餘時間: " + ceil(yukariMiniGameTimer / 60), x + 20, y + 20);
    textAlign(RIGHT, TOP); text("獲得金幣: " + yukariMiniGameScore, x + w - 20, y + 20);

    // 啟用裁切區域，確保物件不超出框框
    push();
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(x, y, w, h);
    drawingContext.clip();

  if (!yukariMiniGameFinished) {
    yukariMiniGameTimer--;
    
    // 生成金幣與炸彈 (每5幀生成一個，速度加快)
    if (frameCount % 5 === 0) {
      let isBomb = random() < 0.1; // 10% 機率是炸彈
      yukariMiniGameCoins.push({
        type: isBomb ? 'bomb' : 'coin',
        x: x + random(50, w - 50 - coinsW), // 確保在框框內生成
        y: y + h, // 從視窗底部生成
        speed: random(3, 7),
        collected: false
      });
    }
    
    if (yukariMiniGameTimer <= 0) {
      yukariMiniGameFinished = true;
      coinScore += yukariMiniGameScore; // 將小遊戲獲得的金幣加入總分
      hasPlayedYukariMiniGame = true;
      if (hasPlayedYukariQuiz && hasPlayedYukariMiniGame) {
        completeMission(6);
      }
    }
  }
  
  // 繪製與更新金幣
  let coinAnimFrame = floor(frameCount / 3) % 18;
  for (let i = yukariMiniGameCoins.length - 1; i >= 0; i--) {
    let c = yukariMiniGameCoins[i];
    
    if (!yukariMiniGameFinished) {
      c.y -= c.speed; // 金幣上升
    }
    
    if (!c.collected) {
      // 確保不繪製在框框外 (垂直方向) - 已由 clip() 處理
      // if (c.y > y + h) continue;

      // 繪製金幣
      if (c.type === 'bomb') {
        push();
        translate(c.x + coinsW/2, c.y + coinsH/2);
        fill(50); noStroke(); ellipse(0, 0, coinsW, coinsH); // 炸彈本體
        fill(255, 0, 0); textAlign(CENTER, CENTER); textSize(20); textStyle(BOLD); text("!", 0, 0);
        stroke(100); strokeWeight(2); noFill();
        line(0, -coinsH/2, 5, -coinsH/2 - 8); // 引信
        fill(255, 100, 0); noStroke(); ellipse(5, -coinsH/2 - 8, 6, 6); // 火花
        pop();
      } else {
        image(coinsSheet, c.x, c.y, coinsW, coinsH, coinAnimFrame * coinsW, 0, coinsW, coinsH);
      }
      
      // 如果金幣超出視窗頂部則移除
      if (c.y < y + 60) {
        yukariMiniGameCoins.splice(i, 1);
      }
    } else {
      // 已收集的金幣移除
      yukariMiniGameCoins.splice(i, 1);
    }
  }

  // 繪製爆炸特效
  for (let i = yukariMiniGameExplosions.length - 1; i >= 0; i--) {
    let e = yukariMiniGameExplosions[i];
    e.timer++;
    
    push();
    translate(e.x, e.y);
    noStroke();
    
    // 簡單的爆炸動畫 (擴散的圓圈)
    fill(255, 69, 0, map(e.timer, 0, 15, 255, 0)); // 紅橘色
    ellipse(0, 0, e.timer * 6);
    fill(255, 215, 0, map(e.timer, 0, 15, 255, 0)); // 金黃色
    ellipse(0, 0, e.timer * 3);
    pop();
    
    if (e.timer > 15) {
      yukariMiniGameExplosions.splice(i, 1);
    }
  }
  
  drawingContext.restore();
  pop();
  
  if (yukariMiniGameFinished) {
    // 遊戲結束畫面
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(255, 215, 0);
    text("時間到!", x + w/2, y + h/2 - 20);
    fill(255);
    textSize(24);
    text("總共獲得 " + yukariMiniGameScore + " 個金幣", x + w/2, y + h/2 + 40);
    textSize(16);
    fill(200);
    // text("(點擊任意處關閉)", x + w/2, y + h/2 + 90);

    // 繪製關閉按鈕 (右下角)
    let closeX = x + w - 30;
    let closeY = y + h - 30;
    fill(200, 50, 50); stroke(255); strokeWeight(2); ellipse(closeX, closeY, 30);
    fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18); text("X", closeX, closeY);
  }
  }

  pop();
}

function drawSettingsButton() {
  let x = 35;
  let y = 45;
  push();
  translate(x, y);
  
  // 新的設定圖示 (米白色齒輪)
  fill(62, 39, 35);
  noStroke();
  strokeWeight(2);
  
  // 齒輪齒
  for (let i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI * i / 8);
    rectMode(CENTER);
    rect(0, -18, 10, 12, 3);
    pop();
  }
  
  // 中心圓
  ellipse(0, 0, 34, 34);
  
  // 內孔
  fill(255, 248, 225);
  noStroke();
  ellipse(0, 0, 12, 12);
  
  pop();
}

function drawSettingsModal() {
  if (!showSettings) {
    volumeSlider.hide();
    sfxSlider.hide();
    return;
  }
  
  push();
  rectMode(CENTER);
  // 實色底框 (米白色)
  fill(62, 39, 35);
  stroke(255, 248, 225); // 米白色邊框
  strokeWeight(4);
  rect(width/2, height/2, 450, 350, 20);
  
  fill(255, 248, 225);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text("設定", width/2, height/2 - 140);
  
  // 音樂音量 (喇叭圖示)
  let musicY = height/2 - 40;
  push();
  translate(width/2 - 80, musicY);
  fill(255, 248, 225);
  // 喇叭主體
  beginShape();
  vertex(0, -8); vertex(8, -8); vertex(16, -16);
  vertex(16, 16); vertex(8, 8); vertex(0, 8);
  endShape(CLOSE);
  // 音波
  stroke(255, 248, 225);
  strokeWeight(2);
  noFill();
  arc(16, 0, 10, 10, -PI/3, PI/3);
  arc(16, 0, 18, 18, -PI/3, PI/3);
  pop();
  
  volumeSlider.show();
  volumeSlider.position(width/2 - 40, musicY - 10);
  volumeSlider.style('width', '120px');

  // 音效音量 (音符圖示)
  let sfxY = height/2 + 60;
  push();
  translate(width/2 - 80, sfxY);
  fill(255, 248, 225); noStroke();
  ellipse(5, 5, 10, 8); // 音符頭
  stroke(255, 248, 225); strokeWeight(2);
  line(10, 5, 10, -15); // 音符桿
  line(10, -15, 18, -10); // 音符尾
  pop();

  sfxSlider.show();
  sfxSlider.position(width/2 - 40, sfxY - 10);
  sfxSlider.style('width', '120px');
  
  textSize(16);
  noStroke();
  fill(200);
  textAlign(CENTER, CENTER);
  text("(點擊任意處關閉)", width/2, height/2 + 140);
  
  pop();
}

function startKaguraQuiz() {
    kaguraPlayCount++;
    if (quizData2.length > 0) {
        currentKaguraQuizList = shuffle(quizData2).slice(0, 3);
    }
    isKaguraQuizActive = true;
    kaguraQuizLives = 3;
    kaguraQuizTimer = maxQuizTime;
    kaguraQuizStep = 0;
    kaguraQuizFeedback = "";
    kaguraQuizFeedbackTimer = 0;
    kaguraQuizFailed = false;
    isKaguraQuizTimeout = false;
}

function checkKaguraAnswer() {
  if (!isKaguraQuizActive || kaguraQuizFeedback !== "") return;
  
  let playerAns = kaguraAnswerInput.value().trim();
  let q = currentKaguraQuizList[kaguraQuizStep];
  
  if (playerAns.toLowerCase() === q.answer.toLowerCase()) {
    kaguraQuizFeedback = q.correctMsg;
    score += 300;
    coinScore += 30;
  } else {
    kaguraQuizFeedback = q.wrongMsg;
    kaguraQuizLives--;
    totalWrongAnswers++;
  }
  kaguraQuizTimer = maxQuizTime;
  kaguraQuizFeedbackTimer = 0;
  kaguraAnswerInput.hide();
  kaguraSubmitBtn.hide();
}

function startSakakiQuiz() {
    sakakiPlayCount++;
    if (quizData3.length > 0) {
        currentSakakiQuizList = shuffle(quizData3).slice(0, 3);
    }
    isSakakiQuizActive = true;
    sakakiQuizLives = 3;
    sakakiQuizTimer = maxQuizTime;
    sakakiQuizStep = 0;
    sakakiQuizFeedback = "";
    sakakiQuizFeedbackTimer = 0;
    sakakiQuizFailed = false;
    isSakakiQuizTimeout = false;
}

function checkSakakiAnswer() {
  if (!isSakakiQuizActive || sakakiQuizFeedback !== "") return;
  
  let playerAns = sakakiAnswerInput.value().trim();
  let q = currentSakakiQuizList[sakakiQuizStep];
  
  if (playerAns.toLowerCase() === q.answer.toLowerCase()) {
    sakakiQuizFeedback = q.correctMsg;
    score += 300;
    coinScore += 30;
  } else {
    sakakiQuizFeedback = q.wrongMsg;
    sakakiQuizLives--;
    totalWrongAnswers++;
  }
  sakakiQuizTimer = maxQuizTime;
  sakakiQuizFeedbackTimer = 0;
  sakakiAnswerInput.hide();
  sakakiSubmitBtn.hide();
}

function checkAchievements() {
  // 0: 刷刷刷刷到厭倦
  if (!unlockedAchievements[0] && yomiPlayCount > 3 && kaguraPlayCount > 3 && sakakiPlayCount > 3) {
    unlockAchievement(0);
  }
  // 1: 家財萬貫
  if (!unlockedAchievements[1] && coinScore > 5000) {
    unlockAchievement(1);
  }
  // 2: 戰鬥高手
  if (!unlockedAchievements[2] && yomiDefeated && kaguraDefeated && sakakiDefeated) {
    unlockAchievement(2);
  }
  // 3: 你是天才 (需完成所有測驗任務且無錯誤)
  if (!unlockedAchievements[3] && missions[3].completed && missions[4].completed && missions[5].completed && totalWrongAnswers === 0) {
    unlockAchievement(3);
  }
  // 4: 教科達人
  if (!unlockedAchievements[4] && hasPlayedYukariQuiz && yukariWrongAnswers === 0) {
    unlockAchievement(4);
  }
  // 5: 變小了!
  if (!unlockedAchievements[5]) {
     let all103CoinsCollected = true;
     if (coins103.length === 0) all103CoinsCollected = false;
     for (let c of coins103) { if (!c.collected) { all103CoinsCollected = false; break; } }
     if (all103CoinsCollected) {
        unlockAchievement(5);
     }
  }
}

function unlockAchievement(id) {
  unlockedAchievements[id] = true;
  achievementQueue.push({
    title: achievementsList[id].title,
    timer: 0,
    maxTime: 120 // 2秒 (60fps)
  });
}

function drawAchievementNotifications() {
  if (achievementQueue.length === 0) return;

  let notif = achievementQueue[0];
  notif.timer++;

  // 動畫參數
  let slideInTime = 20;
  let stayTime = 80;
  let slideOutTime = 20;
  let xPos = -300;
  
  if (notif.timer < slideInTime) {
    xPos = map(notif.timer, 0, slideInTime, -300, 20);
  } else if (notif.timer < slideInTime + stayTime) {
    xPos = 20;
  } else {
    xPos = map(notif.timer, slideInTime + stayTime, notif.maxTime, 20, -300);
  }

  push();
  fill(0, 0, 0, 200); stroke(255, 215, 0); strokeWeight(3);
  rect(xPos, 100, 280, 60, 10);
  fill(255, 215, 0); noStroke(); textSize(18); textAlign(LEFT, CENTER); textStyle(BOLD);
  text("🏆 成就解鎖: " + notif.title, xPos + 20, 130);
  pop();

  if (notif.timer >= notif.maxTime) {
    achievementQueue.shift();
  }
}

function saveRecord() {
  if (hasSavedRecord) return;
  let record = {
    name: playerName || "無名氏",
    score: score,
    coins: coinScore,
    date: new Date().toLocaleDateString()
  };
  leaderboardData.push(record);
  localStorage.setItem('survivalSchoolLeaderboard', JSON.stringify(leaderboardData));
  hasSavedRecord = true;
}

function handleStop2Input() {
  let val = stop2Input.value();
  if (val) {
    if (!hasAnsweredStop2) {
      hasAnsweredStop2 = true;
      hasMetYomi = true;
      stop2Input.value('');
      stop2Input.hide();
      stop2SubmitBtn.hide();
    } else if (!hasAnsweredStop2Quiz) {
      if (val.toLowerCase() === 'ok') {
        playerSaidOk = true;
      } else {
        playerSaidOk = false;
      }
      hasAnsweredStop2Quiz = true;
      stop2Input.value('');
      stop2Input.hide();
      stop2SubmitBtn.hide();
    }
  }
}

function handleKaguraInput() {
  if (kaguraState === 0) kaguraState = 1;
  else if (kaguraState === 2) {
    kaguraState = 3;
    kaguraDialogueTimer = 0;
  }
  kaguraInput.value('');
  kaguraInput.hide();
  kaguraChatBtn.hide();
}

function handleSakakiInput() {
  if (sakakiState === 2) {
    sakakiState = 3;
    sakakiInput.hide(); sakakiChatBtn.hide();
    sakakiInput.value('');
    sakakiDialogueTimer = 0;
  } else if (sakakiState === 4) {
    let val = sakakiInput.value().trim();
    let validInputs = ["好", "ok", "好哦", "好哦~", "開始"];
    if (validInputs.includes(val.toLowerCase())) {
      startSakakiQuiz();
      sakakiState = 5;
    } else {
      sakakiState = 8;
      sakakiDialogueTimer = 0;
    }
    sakakiInput.hide(); sakakiChatBtn.hide();
    sakakiInput.value('');
  }
}

function drawStartScreen() {
  background(0);
  
  // 背景無限循環捲動
  let bgScale = height / startImg.height;
  let bgW = startImg.width * bgScale;
  
  if (!isStartingGame) {
    startBgX -= 2;
    // 週期改為 2 * bgW (因為是 正常+鏡像 一組，解決接縫問題)
    if (startBgX <= -2 * bgW) startBgX += 2 * bgW;
  }
  
  // 計算需要繪製幾張圖才能填滿畫面
  let tilesNeeded = ceil(width / bgW) + 2;
  
  for (let i = 0; i < tilesNeeded; i++) {
    let x = startBgX + i * bgW;
    // 偶數張正常繪製，奇數張鏡像繪製
    if (i % 2 === 0) {
      image(startImg, x, 0, bgW, height);
    } else {
      push();
      translate(x + bgW, 0);
      scale(-1, 1);
      image(startImg, 0, 0, bgW, height);
      pop();
    }
  }

  // 角色1行走動畫
  let walkFrame = floor(frameCount / 6) % 8;
  let pY = height * 0.65; 
  if (isStartingGame) startPlayerX += 5;
  image(walkSheet, startPlayerX, pY, walkW * charScale, walkH * charScale, walkFrame * walkW, 0, walkW, walkH);

  // 櫻花落下效果
  if (frameCount % 5 === 0) {
    sakuraParticles.push({
      x: random(width),
      y: -20,
      size: random(8, 15),
      speed: random(1, 3),
      sway: random(0.01, 0.03),
      offset: random(TWO_PI),
      rot: random(TWO_PI),
      rotSpeed: random(-0.05, 0.05)
    });
  }
  for (let i = sakuraParticles.length - 1; i >= 0; i--) {
    let p = sakuraParticles[i];
    p.y += p.speed;
    p.x += sin(frameCount * p.sway + p.offset) * 1.5;
    p.rot += p.rotSpeed;
    
    // 滑鼠互動：推開花瓣
    let d = dist(mouseX, mouseY, p.x, p.y);
    if (d < 100) {
      let angle = atan2(p.y - mouseY, p.x - mouseX);
      let force = map(d, 0, 100, 5, 0); // 距離越近推力越大
      p.x += cos(angle) * force;
      p.y += sin(angle) * force;
    }
    
    push();
    translate(p.x, p.y);
    rotate(p.rot);
    fill(255, 183, 197, 200); // 櫻花粉
    noStroke();
    // 繪製花瓣形狀
    beginShape();
    vertex(0, 0);
    bezierVertex(p.size/2, -p.size/2, p.size, 0, 0, p.size);
    bezierVertex(-p.size, 0, -p.size/2, -p.size/2, 0, 0);
    endShape();
    pop();
    
    if (p.y > height) sakuraParticles.splice(i, 1);
  }

  let floatOffset = sin(frameCount * 0.05) * 10;
  let titleY = height / 2 - 120 + floatOffset;

  // 轉場效果 (角色走出視窗後淡出)
  if (isStartingGame && startPlayerX > width) {
      fill(0, fadeAlpha);
      noStroke();
      rect(0, 0, width, height);
      fadeAlpha += 5;
      
      if (fadeAlpha >= 255) {
          // 模擬載入畫面 (轉場時顯示)
          if (!isGameLoaded) {
            loadingProgress += random(0.5, 2.5); // 隨機增加進度，模擬讀取
            if (loadingProgress >= 100) {
              loadingProgress = 100;
              isGameLoaded = true;
            }

            push();
            // 載入文字
            fill(255);
            noStroke();
            textAlign(CENTER, BOTTOM);
            textSize(24);
            textFont('Courier New');
            textStyle(BOLD);
            text("LOADING... " + floor(loadingProgress) + "%", width / 2, height / 2 + 50);

            // 進度條外框
            noFill();
            stroke(255);
            strokeWeight(3);
            rectMode(CENTER);
            rect(width / 2, height / 2 + 70, 400, 30, 15);

            // 進度條填充
            rectMode(CORNER);
            fill(255, 215, 0); // 金色
            noStroke();
            let barW = 400;
            let barH = 30;
            let barX = width / 2 - barW / 2;
            let barY = height / 2 + 70 - barH / 2;
            rect(barX + 5, barY + 5, (barW - 10) * (loadingProgress / 100), barH - 10, 10);
            pop();
            
            return; // 載入中不進入遊戲
          }

          gameState = 'PLAYING';
          isStartingGame = false;
          fadeDirection = -1;
          isTransitioning = true;
          isFirstTransition = true;
          fadeAlpha = 255; // 重置透明度，避免因數值過大導致轉場邏輯誤判
          targetScene = 'hallway'; // 確保進入走廊
          missionList.show();
          startPlayerX = width * 0.1; // 重置位置
          startBgX = 0;
      }
      return; // 轉場時不繪製 UI
  }

  if (!isStartingGame) {

  // 標題文字 (生動浮動效果，無背景框，RPG風格描邊)
  push();
  textAlign(CENTER, CENTER);
  textSize(60); // 放大字體
  textFont('Courier New');
  textStyle(BOLD);
  

  // 陰影 (增加立體感)
  fill(0, 100);
  noStroke();
  text("簡單小測驗：難道你不會?!", width / 2 + 5, titleY + 5);

  // 文字本體 (深色描邊 + 淺色填充)
  stroke(62, 39, 35);   // 深褐色描邊
  strokeWeight(8);      // 粗邊框
  strokeJoin(ROUND);    // 圓角連接
  fill(255, 248, 225);  // 米白色填充
  text("簡單小測驗：難道你不會?!", width / 2, titleY);
  pop();

  // 按鈕繪製函式
  function drawMenuButton(label, y) {
    let btnW = 200;
    let btnH = 50;
    let isHover = abs(mouseX - width / 2) < btnW / 2 && abs(mouseY - y) < btnH / 2;

    push();
    rectMode(CENTER);
    if (isHover) {
      fill(93, 64, 55, 240); // 懸停時顏色較淺
      stroke(255, 255, 255); // 白色邊框
      cursor(HAND);
    } else {
      fill(62, 39, 35, 230); // 一般顏色
      stroke(255, 215, 0);   // 金色邊框
      cursor(ARROW);
    }
    strokeWeight(3);
    rect(width / 2, y, btnW, btnH, 10);

    fill(255, 248, 225);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont('Courier New');
    textStyle(BOLD);
    text(label, width / 2, y);
    pop();
  }

  let startY = height / 2 + 50;
  drawMenuButton("開始遊戲", startY);
  drawMenuButton("遊戲規則", startY + 70);
  drawMenuButton("設定", startY + 140);

  // 作者資訊
  push();
  textAlign(RIGHT, BOTTOM);
  textSize(14);
  fill(60, 60, 60, 150); // 深灰色，低調顯示
  noStroke();
  textFont('Courier New');
  text("作者 : 414730233 林子靖", width - 10, height - 10);
  pop();

  // 顯示設定視窗 (無條件呼叫，由函式內部判斷是否顯示或隱藏，解決拉桿殘留問題)
  drawSettingsModal();
  }
  
  // 顯示規則視窗
  if (showStartRules) {
    push();
    rectMode(CENTER);
    fill(0);
    stroke(255);
    strokeWeight(3);
    let boxW = width * 0.75;
    let boxH = height * 0.75;
    rect(width / 2, height / 2, boxW, boxH, 20);

    // 關閉按鈕 (右上角叉叉)
    let closeBtnSize = 40;
    let closeBtnX = width / 2 + boxW / 2 - 30;
    let closeBtnY = height / 2 - boxH / 2 + 30;
    fill(200, 50, 50); stroke(255); strokeWeight(2);
    ellipse(closeBtnX, closeBtnY, closeBtnSize);
    fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(24);
    text("X", closeBtnX, closeBtnY);
    
    fill(255);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(32);
    textFont('Courier New');
    textStyle(BOLD);
    
    if (rulePage === 1) {
      text("【遊戲規則 (1/5)】", width / 2, height / 2 - boxH / 2 + 40);
      
      textSize(24); // 放大文字
      textAlign(CENTER, CENTER);
      textLeading(50);
      text("在校園中探索，尋找各個角色進行挑戰。\n回答正確可獲得分數與提示幣，\n若答錯或超時將進入「戰鬥模式」！\n\n收集地上的提示幣可向小助手求救。\n目標：完成所有任務！獲得成就！", width / 2, height / 2 + 20);
      
      // 下一頁按鈕
      let btnW = 120;
      let btnH = 40;
      let btnX = width / 2 + boxW / 2 - btnW - 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("下一頁 >", btnX + btnW / 2, btnY + btnH / 2);
    } else if (rulePage === 2) {
      text("【角色介紹 (2/5)】", width / 2, height / 2 - boxH / 2 + 40);
      
      textSize(22); // 放大文字
      textAlign(LEFT, CENTER);
      let startX = width / 2 - boxW / 2 + 120; // 文字起始 X
      let imgX = width / 2 - boxW / 2 + 60;    // 圖片起始 X
      let startY = height / 2 - boxH / 2 + 110;
      let lineHeight = 70; // 增加行高以容納圖片
      
      // 繪製角色縮圖與介紹
      // 1. Kamineko
      let iconSize = 50;
      image(stop5Sheet, imgX - 20, startY - iconSize/2, iconSize * (stop5W/stop5H), iconSize, 0, 0, stop5W, stop5H);
      text("1. Kamineko (小助手): 在走廊/右上角提供提示與指引。", startX, startY);
      
      // 2. Yomi
      image(stop2Sheet, imgX, startY + lineHeight - iconSize/2, iconSize * (stop2W/stop2H), iconSize, 0, 0, stop2W, stop2H);
      text("2. Yomi (101教室): 數學小測驗關主。", startX, startY + lineHeight);
      
      // 3. Kagura
      image(kaguraSheet, imgX, startY + lineHeight * 2 - iconSize/2, iconSize * (kaguraW/kaguraH), iconSize, 0, 0, kaguraW, kaguraH);
      text("3. Kagura (102教室): 英文大挑戰關主。", startX, startY + lineHeight * 2);
      
      // 4. Sakaki
      image(sakakiSheet, imgX, startY + lineHeight * 3 - iconSize/2, iconSize * (sakakiW/sakakiH), iconSize, 0, 0, sakakiW, sakakiH);
      text("4. Sakaki (操場): 國語大考驗關主。", startX, startY + lineHeight * 3);
      
      // 5. Yukari
      image(yukariSheet, imgX, startY + lineHeight * 4 - iconSize/2, iconSize * (yukariW/yukariH), iconSize, 0, 0, yukariW, yukariH);
      text("5. Yukari: 隱藏角色，完成特定條件出現。", startX, startY + lineHeight * 4);
      


      // 下一頁按鈕
      let btnW = 120;
      let btnH = 40;
      let btnX = width / 2 + boxW / 2 - btnW - 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("下一頁 >", btnX + btnW / 2, btnY + btnH / 2);

      // 上一頁按鈕
      btnX = width / 2 - boxW / 2 + 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("< 上一頁", btnX + btnW / 2, btnY + btnH / 2);
    } else if (rulePage === 3) {
      text("【電腦操作 (3/5)】", width / 2, height / 2 - boxH / 2 + 40);
      
      textSize(24); // 放大文字
      textAlign(LEFT, TOP);
      let startX = width / 2 - boxW / 2 + 100;
      let startY = height / 2 - boxH / 2 + 100;
      let lineHeight = 50;
      
      text("● 移動： 方向鍵 (← →) 或 A / D", startX, startY);
      text("● 跳躍： 方向鍵 (↑) 或 W", startX, startY + lineHeight);
      text("● 蹲下： 方向鍵 (↓) 或 S", startX, startY + lineHeight * 2);
      text("● 推人/攻擊： 空白鍵 (Space)", startX, startY + lineHeight * 3);
      text("● 跑步： 按住 R 鍵+左/右( A / D )鍵移動", startX, startY + lineHeight * 4);
      text("● 互動/對話： 滑鼠左鍵點擊", startX, startY + lineHeight * 5);

      // 下一頁按鈕
      let btnW = 120;
      let btnH = 40;
      let btnX = width / 2 + boxW / 2 - btnW - 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("下一頁 >", btnX + btnW / 2, btnY + btnH / 2);

      // 上一頁按鈕
      btnX = width / 2 - boxW / 2 + 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("< 上一頁", btnX + btnW / 2, btnY + btnH / 2);
    } else if (rulePage === 4) {
      text("【手機/平板操作 (4/5)】", width / 2, height / 2 - boxH / 2 + 40);
      
      textSize(24);
      textAlign(LEFT, TOP);
      let startX = width / 2 - boxW / 2 + 100;
      let startY = height / 2 - boxH / 2 + 100;
      let lineHeight = 50;
      
      text("● 左側虛擬搖桿 (← →)：控制移動", startX, startY);
      text("● 右側按鈕：", startX, startY + lineHeight);
      text("   ↑ : 跳躍", startX, startY + lineHeight * 2);
      text("   ↓ : 蹲下", startX, startY + lineHeight * 3);
      text("   ⚔️ : 攻擊/推人", startX, startY + lineHeight * 4);
      text("   🏃 : 跑步 (按住 + 移動)", startX, startY + lineHeight * 5);
      text("● 點擊畫面任意處：互動/對話", startX, startY + lineHeight * 6);

      // 下一頁按鈕
      let btnW = 120;
      let btnH = 40;
      let btnX = width / 2 + boxW / 2 - btnW - 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("下一頁 >", btnX + btnW / 2, btnY + btnH / 2);

      // 上一頁按鈕
      btnX = width / 2 - boxW / 2 + 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("< 上一頁", btnX + btnW / 2, btnY + btnH / 2);
    } else if (rulePage === 5) {
      text("【成就列表 (5/5)】", width / 2, height / 2 - boxH / 2 + 40);
      
      textSize(20);
      textAlign(LEFT, TOP);
      let startX = width / 2 - boxW / 2 + 60;
      let startY = height / 2 - boxH / 2 + 100;
      let lineHeight = 45;
      
      for (let i = 0; i < achievementsList.length; i++) {
        let ach = achievementsList[i];
        fill(255, 215, 0); // 金色標題
        text((i + 1) + ". " + ach.title, startX, startY + i * lineHeight);
        fill(255); // 白色說明
        text("   " + ach.desc, startX, startY + i * lineHeight + 22);
      }

      // 上一頁按鈕
      let btnW = 120;
      let btnH = 40;
      let btnX = width / 2 - boxW / 2 + 40;
      let btnY = height / 2 + boxH / 2 - btnH - 40;
      rectMode(CORNER);
      fill(62, 39, 35); stroke(255, 215, 0); strokeWeight(2);
      rect(btnX, btnY, btnW, btnH, 10);
      fill(255); noStroke(); textAlign(CENTER, CENTER); textSize(18);
      text("< 上一頁", btnX + btnW / 2, btnY + btnH / 2);
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  charScale = windowHeight / 350;
  
  // 更新地板位置
  if (currentScene === 'class101' || currentScene === 'class102') {
    groundY = height * 0.98 - (spriteH * charScale);
  } else if (currentScene === 'class103') {
     // class103 的地板邏輯在 draw 中動態計算，這裡只需更新基礎值
  } else {
    groundY = height * 0.90 - (spriteH * charScale);
  }

  // 調整 UI 元素大小 (輸入框與按鈕)
  let uiScale = charScale > 1 ? charScale * 0.8 : 1;
  let inputs = [nameInput, stop2Input, kaguraInput, sakakiInput, kaguraAnswerInput, sakakiAnswerInput, chatInput];
  let buttons = [nameSubmitBtn, stop2SubmitBtn, kaguraChatBtn, sakakiChatBtn, kaguraSubmitBtn, sakakiSubmitBtn, sendBtn, enter101Btn, enter102Btn, enter103Btn, enterPlaygroundBtn, backToHallBtn, retryQuizBtn, retryKaguraQuizBtn, retrySakakiQuizBtn, yukariGameBtn, yukariQuizBtn, yukariSkipBtn, continueGameBtn, endGameBtn, playAgainBtn];

  for(let inp of inputs) {
    if(inp) {
      inp.style('font-size', (16 * uiScale) + 'px');
      inp.size(200 * uiScale);
    }
  }
  for(let btn of buttons) {
    if(btn) {
      btn.style('font-size', (16 * uiScale) + 'px');
      btn.style('padding', (5 * uiScale) + 'px ' + (10 * uiScale) + 'px');
    }
  }
  
  // 重新檢測是否為行動裝置 (例如旋轉螢幕後)
  if (width < 1000) isMobileDevice = true;
}

function updateTouchState() {
  if (!isMobileDevice) return;
  
  let prevAction = tCtrl.action;

  // 重置狀態
  tCtrl.left = false;
  tCtrl.right = false;
  tCtrl.up = false;
  tCtrl.down = false;
  tCtrl.action = false;
  tCtrl.run = false;

  // 定義按鈕區域
  let btnSize = 60 * (charScale > 1 ? 1.2 : 1);
  let margin = 20 * (charScale > 1 ? 1.2 : 1);
  let yBase = height - margin - btnSize/2;
  
  // 左側控制 (左右)
  let leftX = margin + btnSize/2;
  let rightX = leftX + btnSize + 20;
  let arrowY = yBase;

  // 右側控制 (跳躍、蹲下、攻擊、跑步)
  let actionX = width - margin - btnSize/2; // 最右邊 (攻擊)
  let upX = actionX - btnSize - 20;         // 跳躍
  let downX = upX;                          // 蹲下 (在跳躍下方? 不，並排比較好操作)
  let runX = upX - btnSize - 20;            // 跑步
  
  // 重新佈局右側：十字鍵風格或並排
  // 簡單佈局：
  // 右下角：跳躍(Up)
  // 跳躍左邊：攻擊(Action)
  // 跳躍下面(或左下)：蹲下(Down)
  // 攻擊左邊：跑步(Run)
  
  upX = width - margin - btnSize/2; 
  let upY = yBase - btnSize;
  
  let downY = yBase;
  downX = upX;
  
  actionX = upX - btnSize - 20;
  let actionY = yBase - btnSize/2;
  
  let runY = yBase - btnSize * 1.5; // 左上方一點
  runX = actionX;

  // 檢查所有觸控點
  for (let i = 0; i < touches.length; i++) {
    let tx = touches[i].x;
    let ty = touches[i].y;
    
    if (dist(tx, ty, leftX, arrowY) < btnSize) tCtrl.left = true;
    if (dist(tx, ty, rightX, arrowY) < btnSize) tCtrl.right = true;
    if (dist(tx, ty, upX, upY) < btnSize) tCtrl.up = true;
    if (dist(tx, ty, downX, downY) < btnSize) tCtrl.down = true;
    if (dist(tx, ty, actionX, actionY) < btnSize) tCtrl.action = true;
    if (dist(tx, ty, runX, runY) < btnSize) tCtrl.run = true;
  }

  if (tCtrl.action && !prevAction) {
    if (navigator.vibrate) navigator.vibrate(50);
  }
}

function drawTouchUI() {
  push();
  noStroke();
  
  let btnSize = 60 * (charScale > 1 ? 1.2 : 1);
  let margin = 20 * (charScale > 1 ? 1.2 : 1);
  let yBase = height - margin - btnSize/2;
  
  // 輔助函式：繪製按鈕背景
  function drawBtnBg(x, y, size, pressed) {
    fill(255, 255, 255, pressed ? 150 : 50); // 按下時較亮
    ellipse(x, y, size);
  }

  // 輔助函式：繪製箭頭圖示
  function drawArrow(x, y, size, angle) {
    push();
    translate(x, y);
    rotate(angle);
    fill(255, 255, 255, 200);
    beginShape();
    vertex(-size/2, -size/2);
    vertex(size/2, 0);
    vertex(-size/2, size/2);
    endShape(CLOSE);
    pop();
  }

  // 左 (Left)
  let lx = margin + btnSize/2;
  let ly = yBase;
  drawBtnBg(lx, ly, btnSize, tCtrl.left);
  drawArrow(lx, ly, btnSize * 0.4, PI);

  // 右 (Right)
  let rx = margin + btnSize/2 + btnSize + 20;
  let ry = yBase;
  drawBtnBg(rx, ry, btnSize, tCtrl.right);
  drawArrow(rx, ry, btnSize * 0.4, 0);

  // 跳躍 (Up)
  let ux = width - margin - btnSize/2;
  let uy = yBase - btnSize;
  drawBtnBg(ux, uy, btnSize, tCtrl.up);
  drawArrow(ux, uy, btnSize * 0.4, -HALF_PI);

  // 蹲下 (Down)
  let dx = width - margin - btnSize/2;
  let dy = yBase;
  drawBtnBg(dx, dy, btnSize, tCtrl.down);
  drawArrow(dx, dy, btnSize * 0.4, HALF_PI);

  // 攻擊 (Action) - 繪製劍圖示
  let ax = width - margin - btnSize/2 - btnSize - 20;
  let ay = yBase - btnSize/2;
  drawBtnBg(ax, ay, btnSize, tCtrl.action);
  push();
  translate(ax, ay);
  rotate(-QUARTER_PI);
  fill(255, 255, 255, 200);
  rectMode(CENTER);
  rect(0, -5, 4, 20, 1); // 劍身
  rect(0, 8, 12, 3, 1);  // 護手
  rect(0, 14, 4, 8, 1);  // 劍柄
  pop();
  
  // 跑步 (Run) - 繪製雙箭頭
  let runX = width - margin - btnSize/2 - btnSize - 20;
  let runY = yBase - btnSize * 1.5;
  fill(tCtrl.run ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 255, 255, 50)');
  ellipse(runX, runY, btnSize * 0.8);
  push(); translate(runX, runY); fill(255, 255, 255, 200);
  let s = btnSize * 0.15;
  triangle(-s - 4, -s, -s - 4, s, -4, 0);
  triangle(4, -s, 4, s, s + 4, 0);
  pop();
  
  pop();
}