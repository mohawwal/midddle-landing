<template>
  <section class="flex items-center">
    <div class="w-full">
      <div
        class="relative z-10 w-full flex flex-col-reverse lg:flex-row items-start gap-4 max-w-[2000px] mx-auto pt-[150px] lg:pt-[150px] px-4 lg:px-[120px] [min-width:1461px]:px-[7.5rem]"
      >
        <div class="w-full lg:w-1/2 flex items-center justify-center pt-10 sm:pt-[190px] mb-20 lg:mb-0">
          <div 
            class="relative h-[800px] sm:h-[600px] w-full max-w-2xl"
            @mouseenter="stopCycling"
            @mouseleave="startCycling"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="absolute left-0 right-0 mx-auto w-full max-w-[648px] cursor-pointer"
              :style="getCardStyle(index)"
            >
              <div
                class="bg-[#1D302C] rounded-[17px] p-6 sm:p-8 h-[220px] sm:h-[288px] shadow-xl"
              >
                <div class="h-full">
                  <div class="flex flex-col h-full justify-between">
                    <h3 class="text-[22px] h-[20%] sm:text-[28px] font-semibold text-[#CDFF64] mb-3 sm:mb-4 leading-tight">
                      {{ card.title }}
                    </h3>
                    <div class="flex items-center justify-between gap-4 h-[80%]">
                      <p class="text-white/80 text-[14px] sm:text-[17px] leading-[140%] sm:leading-[150%] w-[70%]">
                        {{ card.description }}
                      </p>
                      <div class="flex-shrink-0 flex items-center justify-center sm:w-auto pt-1 w-[28%]">
                        <img :src="card.imgSrc" :alt="card.title" class="object-fit w-full h-auto max-w-[40px] sm:max-w-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex items-start justify-center lg:justify-end pt-0 lg:pt-20">
          <div class="text-center lg:text-right w-full max-w-[580px] lg:pr-8">
            <h1 class="text-[32px] sm:text-[38px] font-novaklasse font-semibold text-white leading-[1.3] lg:leading-[57px] tracking-[0%] mb-4 sm:mb-6">
              Unlock <span class="text-[#CDFF64]">Smart</span><br>Product Sourcing
            </h1>
            <p class="text-[16px] sm:text-[20px] text-neutral/30 leading-[140%] tracking-[1%] sm:tracking-[4%]">
              Middleman AI helps you discover, evaluate, and source products
              effortlessly from ink translation and supplier recommendations to
              procurement tracking.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full bg-[#206256] h-auto py-4 lg:h-[74px]">
        <div class="max-w-[2000px] mx-auto flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-[3.5rem] gap-4 sm:gap-0">
          <div class="flex items-center gap-2 sm:gap-4 text-center">
            <img src="/assets/icons/ai-start.svg" alt="AI Icon" class="w-6 h-6 sm:w-auto sm:h-auto">
            <p class="text-white text-[16px] sm:text-[24px] leading-[1.3] font-normal tracking-[0%] sm:tracking-[4%]">AI assistance for China Import</p>
          </div>
          <div class="flex items-center gap-2 sm:gap-4 text-center">
            <img src="/assets/icons/midddleman-mini-icon.svg" alt="Middleman Icon" class="w-6 h-6 sm:w-auto sm:h-auto">
            <p class="text-white text-[16px] sm:text-[24px] leading-[1.3] font-normal tracking-[0%] sm:tracking-[4%]">2025 Midddleman AI. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import shippingIcon from '/assets/icons/shipping.svg';
import procurementIcon from '/assets/icons/procurement.svg';
import learningIcon from '/assets/icons/learning.svg';
import cardShippingIcon from '/assets/icons/card-shipping.svg';

const currentIndex = ref(0);
let intervalId = null;

const cards = [
  {
    title: "Link Translation",
    description:
      "Instantly translate any Chinese product page into dean, readable English - Including: specs, variations, and seller notes",
    imgSrc: shippingIcon
  },
  {
    title: "Product Intelligence",
    description:
      "Ask anything about a product -from specifications pricing and material quality to procurement options and shipping costs.",
    imgSrc: cardShippingIcon
  },
  {
    title: "Product Sourcing",
    description:
      "Al-powered engine that finds reliable suppliers, compares listings, and surfaces the best options instantly.",
    imgSrc: learningIcon
  },
  {
    title: "Procurement Work Flow",
    description:
      "From RFQ to shipping manage approvals updates and tracking in one place",
    imgSrc: procurementIcon
  }
];

const startCycling = () => {
  if (intervalId) return;
  
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length;
  }, 3000);
};

const stopCycling = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const getCardStyle = (index) => {
  const mobileBaseOffset = 50; 
  const mobileScaleReduction = 0.03;

  const adjustedIndex = (index - currentIndex.value + cards.length) % cards.length;
  const offset = adjustedIndex * mobileBaseOffset;
  const scale = 1 - adjustedIndex * mobileScaleReduction;

  return {
    transform: `translateY(${offset}px) scale(${scale})`,
    zIndex: cards.length - adjustedIndex,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  };
};

onMounted(() => {
    startCycling();
});

onUnmounted(() => {
  stopCycling();
});
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 0 5.84px 0 rgba(0, 0, 0, 0.25);
}
</style>