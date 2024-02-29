
<script setup>
import { ref } from 'vue'

const faqItems = ref([
    { question: 'What is Frontend Mentor, and how will it help me?', answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.", open: false },
    { question: 'Is Frontend Mentor free?', answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free ption providing access to a range of projects suitable for all skill levels.', open: false },
    { question: 'Can I use Frontend Mentor projects in my portfolio?', answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!", open: false },
    { question: "How can I get help if I'm stuck on a Frontend Mentor challenge?", answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members", open: false },
]);
</script>

<template>
    <div class="px-10 flex flex-col overflow-auto">
        <div @click="item.open = !item.open" v-for="(item, index) in faqItems" :key="index" class="mb-5 cursor-pointer ">
            <div class="flex justify-between hover:text-ppurple">
                <h1 class="font-bold mb-3">
                    {{ item.question }}
                </h1>
                <img v-if="item.open" src="../assets/images/icon-minus.svg" alt="minus">
                <img v-else src="../assets/images/icon-plus.svg" alt="plus">
            </div>
            <p v-if="item.open" class="mb-5 font-medium opacity-70">
                {{ item.answer }}
            </p>
            <hr v-if="index < faqItems.length - 1">
        </div>
    </div>
</template>

