<template>
    <div>
        <h2>left组件</h2>
        count: {{ count }}
        <button @click="addCount">+1</button>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
    setup() {
        // 从 localStorage 获取缓存的 count 值，如果没有则默认为 0
        const count = ref(Number(localStorage.getItem('count')) || 0);

        // 更新 count 值时，将它存入 localStorage
        const addCount = () => {
            count.value++;
        };

        // 监视 count 的变化，每次变化时更新 localStorage
        watch(count, (newCount) => {
            localStorage.setItem('count', newCount);
        });

        return {
            count,
            addCount
        };
    }
};
</script>
