<template>
  <div>
    <h1>游戏页面</h1>
    <p>这里展示游戏相关内容。</p>
    <div class="game-list">
      <div v-for="game in games" :key="game.id" class="game-item">
        <h3>{{ game.name }}</h3>
        <p>{{ game.description }}</p>
        <button @click="playGame(game.id)" class="play-btn">开始游戏</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        { id: 1, name: '超级玛丽', description: '经典的2D平台游戏，跳跃、攻击和收集金币。' },
        { id: 2, name: '贪吃蛇', description: '控制蛇吃食物，避免碰到墙壁和自己的身体。' },
      ],
    };
  },
  methods: {
    playGame(gameId) {
      alert(`开始游戏：${this.games.find(g => g.id === gameId).name}`);
    },
  },
};
</script>

<style scoped>
.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.game-item {
  width: 45%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
}
.play-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.play-btn:hover {
  background-color: #005bb5;
}
</style>
