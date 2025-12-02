<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <img 
      src="/assets/images/down-hover-bg.svg" 
      alt=""
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-auto object-contain z-0 pointer-events-none"
    />

    <div class="relative z-10 w-full h-full max-w-[2000px] mx-auto px-1 sm:px-[1rem] md:px-[3.5rem]">
      <div class="h-full flex flex-col lg:flex-row lg:items-start lg:justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-0">
        
        <div class="space-y-4 sm:space-y-8 lg:max-w-[600px] xl:max-w-[750px] flex-shrink-0 pl-3 pt-4">
          <div class="inline-flex items-center gap-2">
            <img src="/assets/icons/flash.svg" alt="flash" class="w-5 h-5 sm:w-6 sm:h-6" />
            <span class="text-neutral/30 text-base sm:text-lg lg:text-[24px] font-normal tracking-wide">
              AI-powered Source
            </span>
          </div>

          <h1 class="text-[28px] sm:text-[36px] lg:text-[48px] font-novaklasse font-semibold leading-tight lg:leading-[1.2]">
            Your AI Assistant
            <span class="text-lime-100 block sm:inline"> for Smarter China Import</span>
          </h1>

          <p class="text-neutral/30 text-sm sm:text-base lg:text-lg xl:text-[24px] leading-relaxed tracking-wide font-normal max-w-[600px]">
            Sourcing from 1688, Taobao, or Pinduoduo? Paste the link and let
            Middleman AI instantly provide product translations, supplier RFQs,
            logistics guidance, and link translations - so you import smarter,
            faster, and with confidence
          </p>

          <button class="hero-button group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-lime/100 font-semibold rounded-lg flex items-center gap-4 text-sm sm:text-base">
            Get Started
            <img src="/assets/icons/arrow-right.svg" alt="">
          </button>
        </div>

        <div class="relative flex-1 flex items-end justify-center lg:justify-end mt-8 lg:mt-0 h-[300px] sm:h-[400px] lg:h-auto">
          <img
            src="/assets/images/phone-mockup.svg"
            alt="Phone Mockup"
            class="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[631px] h-auto object-contain lg:object-right-bottom relative z-20"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes movement {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero-button {
  position: relative;
  border: 1px solid transparent;
  background-clip: padding-box;
  overflow: hidden;
}

.hero-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 1px;
  pointer-events: none;

  background-size: 400% 400%; 

  background-image: linear-gradient(
    90deg, 
    #075143 0%, 
    #D2FF4D 25%, 
    #075143 50%, 
    #D2FF4D 75%, 
    #075143 100%
  );
  
  animation: movement 8s linear infinite; 
  
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>