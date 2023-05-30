<style scoped lang="scss">
.header {
  // background-color: salmon;
  height: 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px #00000040;


  &__about-company {
    display: flex;
    margin-left: 100px;
  }

  &__company-name {
    display: block;
    margin: auto 0;
  }

  &__logo {
    margin: auto 10px auto 0;
  }

  &__phone-block {
    display: flex;
    margin: auto 100px auto 0;
  }

  &__phone-image {
    margin-right: 20px;
  }

  &__phone-text {
    line-height: 30px;
    margin-right: 20px;
  }
}
</style>

<template>
  
  <div class="header">
    <section class="header__about-company">
      <TheLogo class="header__logo"/>
      <span class="header__company-name">
        ЧП Дніпро-Делівері
      </span>
    </section>

    <section class="header__phone-block">
      <ThePhoneSvg class="header__phone-image"/>
      <span class="header__phone-text">
        +380 (63) 444-35-08
      </span>
      <TheThemeToggler/>
    </section>
  </div>
</template>

<script setup>
  import TheLogo from './TheLogo.vue'
  import ThePhoneSvg from './ThePhoneSvg.vue'
  import TheThemeToggler from './TheThemeToggler.vue'
</script>