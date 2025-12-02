<template>
  <section class="flex items-center">
    <div class="w-full">
      <div
        class="relative z-10 w-full flex flex-col-reverse lg:flex-row items-start gap-4 max-w-[2000px] mx-auto pt-[80px] lg:pt-[150px] px-3 lg:px-[120px] [min-width:1461px]:px-[7.5rem]"
      >
        <div
          class="w-full lg:w-1/2 flex items-center justify-center pt-10 lg:pt-20 mb-20 lg:mb-0"
        >
          <div
            class="relative w-full max-w-2xl flex flex-col gap-4 lg:block lg:h-[500px] xl:h-[600px]"
            @mouseenter="stopCycling"
            @mouseleave="handleContainerLeave"
          >
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="mx-auto w-full max-w-[648px] relative lg:absolute lg:left-0 lg:right-0 transition-all duration-700 ease-in-out"
              :style="getCardWrapperStyle(index)"
            >
              <div
                class="bg-[#1D302C] rounded-[17px] shadow-xl lg:mb-0 mb-4 cursor-pointer h-auto lg:h-[288px] w-full"
                :class="getCardPosition(index) === 0 || !isDesktop ? 'p-4 sm:p-6' : 'h-full'"
                @mouseenter="handleMouseEnter(index)"
                :style="getCardContentStyle(index)"
              >
                <div 
                  v-if="getCardPosition(index) === 0 || !isDesktop" 
                  class="flex flex-col h-full justify-between transition-opacity duration-300"
                  :key="isDesktop ? displayedCardIndex : index" 
                >
                  <h3
                    class="text-[22px] sm:text-[28px] font-semibold text-[#CDFF64] mb-3 sm:mb-4 leading-tight"
                  >
                    {{ isDesktop ? activeCardData.title : card.title }}
                  </h3>

                  <div
                    class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
                  >
                    <p
                      class="text-white/80 text-[16px] sm:text-[16px] xl:text-[20px] leading-[140%] sm:leading-[150%] w-full lg:w-[70%] order-1 lg:order-1 mb-4 lg:mb-0"
                    >
                      {{ isDesktop ? activeCardData.description : card.description }}
                    </p>

                    <div
                      class="flex-shrink-0 w-full flex justify-end lg:w-[170px] lg:h-[170px] mt-1 lg:mt-0 order-2 lg:order-2"
                    >
                      <div class="flex items-center justify-end w-full h-full">
                        <img
                          :src="isDesktop ? activeCardData.imgSrc : card.imgSrc"
                          :alt="isDesktop ? activeCardData.title : card.title"
                          class="object-fit w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[150px] lg:h-[150px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div
          class="w-full lg:w-1/2 flex items-start justify-center lg:justify-end pt-0"
        >
          <div class="text-center lg:text-right w-full max-w-[580px] lg:pr-8">
            <h1
              class="text-[25px] sm:text-[38px] font-novaklasse font-semibold text-white leading-[1.3] lg:leading-[57px] tracking-[0%] mb-4 sm:mb-6"
            >
              Unlock <span class="text-[#CDFF64]">Smart</span><br />Product
              Sourcing
            </h1>
            <p
              class="text-[16px] sm:text-[20px] text-neutral/30 leading-[140%] tracking-[1%] sm:tracking-[4%]"
            >
              Middleman AI helps you discover, evaluate, and source products
              effortlessly from ink translation and supplier recommendations to
              procurement tracking.
            </p>
          </div>
        </div>
      </div>
      <div
        class="py-[30px] flex items-center justify-end w-auto px-4 sm:px-[3.5rem]"
      >
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <img
              src="/assets/icons/flash.svg"
              alt=""
              class="w-3 h-3 lg:w-5 lg:h-5"
            />
            <p
              class="text-[14px] leading-[18px] lg:text-[24px] lg:leading-[36px] tracking-[4%]"
            >
              AI-powered Source
            </p>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="/assets/icons/link.svg"
              alt=""
              class="w-3 h-3 lg:w-5 lg:h-5"
            />
            <p
              class="text-[14px] leading-[18px] lg:text-[24px] lg:leading-[36px] tracking-[4%]"
            >
              Product Link Translation</p>
          </div>
        </div>
      </div>

      <div class="w-full bg-[#206256] h-auto py-4 lg:h-[74px]">
        <div
          class="max-w-[2000px] mx-auto flex flex-col sm:flex-row items-center justify-between h-full px-4 sm:px-[3.5rem] gap-4 sm:gap-0"
        >
          <div class="flex items-center gap-2 sm:gap-4 text-center">
            <img
              src="/assets/icons/ai-start.svg"
              alt="AI Icon"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
            <p
              class="text-white text-[14px] sm:text-[20px] leading-[1.3] font-normal tracking-[0%] sm:tracking-[4%]"
            >
              AI assistance for China Import
            </p>
          </div>
          <div class="flex items-center gap-2 sm:gap-4 text-center">
            <img
              src="/assets/icons/midddleman-mini-icon.svg"
              alt="Middleman Icon"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
            <p
              class="text-white text-[14px] sm:text-[20px] leading-[1.3] font-normal tracking-[0%] sm:tracking-[4%]"
            >
              2025 Midddleman AI. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import shippingIcon from "/assets/icons/shipping.svg"; 
import procurementIcon from "/assets/icons/procurement.svg";
import learningIcon from "/assets/icons/learning.svg";
import cardShippingIcon from "/assets/icons/card-shipping.svg";

const currentIndex = ref(0);
const displayedCardIndex = ref(0);
let intervalId = null;

const isDesktop = ref(true);

onMounted(() => {
  const checkDesktop = () => {
    isDesktop.value = window.innerWidth >= 1024;
    if (!isDesktop.value) {
      stopCycling();
    }
  };

  window.addEventListener("resize", checkDesktop);
  checkDesktop();

  startCycling();

  onUnmounted(() => {
    window.removeEventListener("resize", checkDesktop);
  });
});

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
  },
];

const activeCardData = computed(() => {
    return cards.find((_, index) => index === displayedCardIndex.value) || cards[0];
});


const startCycling = () => {
  if (!isDesktop.value) return;
  if (intervalId) return;

  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length;
    displayedCardIndex.value = currentIndex.value; 
  }, 3000);
};

const stopCycling = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const handleMouseEnter = (index) => {
  displayedCardIndex.value = index;
};

const handleContainerLeave = () => {
  displayedCardIndex.value = currentIndex.value; 
  startCycling();
};

const getCardPosition = (index) => {
    return (index - currentIndex.value + cards.length) % cards.length;
};

const getCardWrapperStyle = (index) => {
  if (!isDesktop.value) {
    return { opacity: 1, position: 'relative', transform: 'none', transition: 'none' };
  }

  const position = getCardPosition(index);
  
  const baseOffset = 50;
  const baseZIndex = cards.length - position;
  
  return {
    transform: `translateY(${position * baseOffset}px)`,
    zIndex: baseZIndex,
    pointerEvents: 'auto', 
    display: 'block',
  };
};


const getCardContentStyle = (index) => {
  if (!isDesktop.value) {
    return {};
  }

  const position = getCardPosition(index);
  
  const scaleReduction = 0.03;
  let scale = 1 - position * scaleReduction;
  
  if (position === 0) {
    scale = 1;
  }

  return {
    transform: `scale(${scale})`,
    opacity: 1,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  };
};

onUnmounted(() => {
  stopCycling();
});
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 0 5.84px 0 rgba(0, 0, 0, 0.25);
}
</style>