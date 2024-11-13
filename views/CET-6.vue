<template>
  <div class="cet6-word-app">
    <h2>CET-6 打卡</h2>
    
    <!-- 选择模式 -->
    <div v-if="!modeSelected">
      <button @click="selectMode('translation')">单词翻译</button>
      <button @click="selectMode('phrases')">短语填空</button>
    </div>
    
    <!-- 选择子模式 -->
    <div v-if="modeSelected && !randomWordSelected">
      <h3>选择学习模式:</h3>
      <button @click="selectSubMode('random')">随机单词</button>
      <button @click="selectSubMode('sequential')">顺序单词</button>
    </div>

    <!-- 选择学习单词数量 -->
    <div v-if="modeSelected && randomWordSelected && !wordCountSelected">
      <h3>选择今日学习单词数量:</h3>
      <button v-for="option in wordCountOptions" :key="option" @click="selectWordCount(option)">
        {{ option }}
      </button>
    </div>

    <!-- 单词翻译模式 -->
    <div v-if="mode === 'translation' && wordCountSelected && currentWord">
      <h3>{{ currentWord.word }}</h3>
      <p>选择正确的翻译：</p>
      <div class="option-container">
        <button 
          v-for="(option, index) in translationOptions" 
          :key="index"
          :class="{
            correct: showResult && option === currentWord.translations[0].translation && selectedOption === option,
            wrong: showResult && option !== currentWord.translations[0].translation && selectedOption === option
          }"
          :disabled="showResult" 
          @click="checkTranslationAnswer(option)"
        >
          {{ option }}
        </button>
      </div>
      <div v-if="showResult">
        <button @click="nextWord">下一个</button>
      </div>
    </div>

    <!-- 短语填空模式 -->
    <div v-if="mode === 'phrases' && wordCountSelected && currentWordPhrase">
      <h3>填空题: {{ currentPhrase }}</h3>
      <input v-model="userAnswer" placeholder="填写翻译"/>
      <button @click="checkPhraseAnswer">提交</button>
      <div v-if="showFeedback">
        <p v-if="feedback === 'correct'">正确！</p>
        <p v-if="feedback === 'wrong'">错误！正确答案：{{ correctAnswer }}</p>
        <button @click="nextWord">下一个</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modeSelected: false,  // 用户是否选择了学习模式
      wordCountSelected: false,  // 用户是否选择了单词数量
      randomWordSelected: false,  // 用户是否选择了随机单词模式
      mode: '',  // 当前选择的模式：'translation' 或 'phrases'
      wordCountOptions: [10, 20, 30, 40, 50],  // 学习单词数量的选项
      wordCount: 0,  // 用户选择的单词数量
      currentIndex: 0,  // 当前单词的索引
      wordsList: [],  // 全部单词列表
      translationOptions: [],  // 单词翻译模式的选项
      userAnswer: '',  // 用户在短语填空中的答案
      showResult: false,  // 是否显示结果
      selectedOption: null,  // 用户选中的选项
      showFeedback: false, // 显示评价
      feedback: '', // 用户答案的评价（正确或错误）
      correctAnswer: '' // 正确答案
    };
  },
  computed: {
    currentWord() {
      return this.wordsList[this.currentIndex];
    },
    currentWordPhrase() {
      return this.currentWord?.phrases?.length ? this.currentWord.phrases[0] : null;
    },
    currentPhrase() {
      // 返回挖空后的短语
      if (this.currentWordPhrase) {
        return this.currentWordPhrase.phrase.replace(/(\w+)/g, '____');
      }
      return '';
    }
  },
  methods: {
    selectMode(mode) {
      this.mode = mode;
      this.modeSelected = true;
    },
    selectSubMode(subMode) {
      this.randomWordSelected = true;
    },
    selectWordCount(count) {
      this.wordCount = count;
      this.wordCountSelected = true;
      this.loadWords();
    },
    loadWords() {
      // 加载 JSON 数据并随机选择 wordCount 数量的单词
      fetch('/CET-6-res/4-CET6-顺序.json')
        .then(response => response.json())
        .then(data => {
          if (this.randomWordSelected) {
            // 如果选择了随机模式，打乱数据
            this.wordsList = this.shuffle(data).slice(0, this.wordCount);
          } else {
            this.wordsList = data.slice(0, this.wordCount);
          }
          this.prepareTranslationOptions();
        })
        .catch(error => {
          console.error("获取单词数据时发生错误:", error);
        });
    },
    prepareTranslationOptions() {
      if (!this.currentWord || !this.currentWord.translations || this.currentWord.translations.length === 0) {
        console.error('当前单词或翻译未正确加载。');
        return;
      }

      // 获取当前单词的正确翻译（取第一个翻译）
      const correctTranslation = this.currentWord.translations[0].translation;

      // 获取三个错误的翻译选项
      const otherTranslations = this.wordsList
        .filter(word => word.word !== this.currentWord.word && word.translations && word.translations.length > 0)
        .map(word => word.translations[0].translation);

      // 生成包含正确翻译的选项并随机打乱
      this.translationOptions = this.shuffle([correctTranslation, ...otherTranslations.slice(0, 3)]);
    },
    shuffle(array) {
      // 随机打亂数组
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    checkTranslationAnswer(option) {
      this.selectedOption = option;
      this.showResult = true;
      if (option === this.currentWord.translations[0].translation) {
        setTimeout(this.nextWord, 1000); // 正确时，1秒后跳转到下一个单词
      }
    },
    checkPhraseAnswer() {
      // 验证短语填空的答案
      const correctPhrase = this.currentWordPhrase.translation;
      if (this.userAnswer.trim().toLowerCase() === correctPhrase.trim().toLowerCase()) {
        this.feedback = 'correct';
      } else {
        this.feedback = 'wrong';
        this.correctAnswer = correctPhrase;
      }
      this.showFeedback = true;
    },
    nextWord() {
      // 进入下一个单词
      if (this.currentIndex < this.wordsList.length - 1) {
        this.currentIndex++;
        this.prepareTranslationOptions();
        this.showResult = false; // 重置显示结果
        this.selectedOption = null; // 重置选择
        this.userAnswer = ''; // 清除用户答案
        this.showFeedback = false;
        this.feedback = '';
      } else {
        alert('恭喜你，完成今日的学习！');
        // Optionally reset for another round.
        this.reset();
      }
    },
    reset() {
      // 重置整个应用
      this.modeSelected = false;
      this.wordCountSelected = false;
      this.randomWordSelected = false;
      this.mode = '';
      this.wordCount = 0;
      this.currentIndex = 0;
      this.wordsList = [];
      this.translationOptions = [];
      this.userAnswer = '';
      this.showResult = false;
      this.selectedOption = null;
      this.showFeedback = false;
      this.feedback = '';
      this.correctAnswer = '';
    }
  },
  mounted() {
    // Optional: Preload words if you want to give the user an instant experience.
    this.loadWords();
  }
};
</script>

<style scoped>
.cet6-word-app {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.option-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.correct {
  background-color: #4CAF50; /* 绿色表示正确 */
  color: white;
}

button.wrong {
  background-color: #f44336; /* 红色表示错误 */
  color: white;
}

button:disabled {
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #ddd;
}

input {
  margin-top: 15px;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

</style>
