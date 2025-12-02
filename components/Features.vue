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
          >
            <div class=" space-y-4 md:space-y-0 md:relative md:h-[600px]">
              <div
                v-for="feature in features"
                :key="feature.id"
                class="bg-[#1D302C] rounded-[22px] md:rounded-[28px] p-6 md:p-8 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center group shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:absolute md:inset-x-0 md:mx-auto md:h-[250px] hover:-translate-y-4 md:hover:-translate-y-16  hover:z-[999] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                :class="[
                  feature.widthClass,
                  feature.shadowClass,
                  feature.zIndexClass,
                ]"
                :style="{ bottom: feature.bottom }"
              >
                <div class="max-w-md">
                  <h3
                    class="text-[26px] md:text-[26px] font-bold text-[#C3FF4C] tracking-tight"
                  >
                    {{ feature.title }}
                  </h3>
                  <p
                    class="mt-3 md:mt-4 text-white/80 leading-relaxed text-sm md:text-[17px]"
                  >
                    {{ feature.description }}
                  </p>
                </div>

                <img
                  :src="feature.image"
                  :alt="feature.title"
                  class="w-20 h-20 md:w-32 md:h-32 opacity-90 transform group-hover:scale-110 transition duration-500 self-end md:self-auto"
                />
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
              Product Link Translation
            </p>
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
import shippingIcon from "/assets/icons/shipping.svg";
import procurementIcon from "/assets/icons/procurement.svg";
import learningIcon from "/assets/icons/learning.svg";
import cardShippingIcon from "/assets/icons/card-shipping.svg";

const features = [
  {
    id: "procurement-workflows ",
    title: "Procurement Workflows ",
    description:
      "Manage RFQs, approvals, updates, and logistics — everything in one seamless workflow.",
    image: procurementIcon,
    widthClass: "w-full md:w-[82%]",
    bottom: "180px",
    zIndexClass: "z-10",
    shadowClass: "shadow-[0_8px_28px_rgba(0,0,0,0.30)]",
  },
  {
    id: "product-intelligence",
    title: "Product Intelligence",
    description:
      "Ask anything about a product — from specs and pricing to procurement guidance and shipping estimates.",
    image: cardShippingIcon,
    widthClass: "w-full md:w-[75%]",
    bottom: "140px",
    zIndexClass: "z-0",
    shadowClass: "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
  },
  {
    id: "product-sourcing",
    title: "Product Sourcing",
    description:
      "AI compares suppliers and surfaces the most reliable, best-priced sourcing options instantly.",
    image: learningIcon,
    widthClass: "w-full md:w-[88%]",
    bottom: "220px",
    zIndexClass: "z-10",
    shadowClass: "shadow-[0_8px_25px_rgba(0,0,0,0.26)]",
  },
  {
    id: "link-translation",
    title: "Link Translation",
    description:
      "Instantly translate any Chinese product page into clean, readable English — including specs and variations.",
    image: shippingIcon,
    widthClass: "w-full md:w-[94%]",
    bottom: "270px",
    zIndexClass: "z-10",
    shadowClass: "shadow-[0_8px_25px_rgba(0,0,0,0.25)]",
  },
];
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 0 5.84px 0 rgba(0, 0, 0, 0.25);
}
</style>
