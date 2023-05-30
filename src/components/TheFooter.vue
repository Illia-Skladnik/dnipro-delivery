<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .footer {
    height: 80px;
    width: 100%;
    box-shadow: 0px 0px 4px 4px #00000040;
    display: flex;
    justify-content: space-between;
    background-color: $background-color;

    position: fixed;
    bottom: 0;

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

    &__copyright {
      // height: 100%;
      line-height: 100px;
      margin-right: 100px;
      // display: block;
      // text-align: center;

    }
  }
</style>

<template>
  <footer class="footer">
    <section class="footer__about-company">
      <TheLogo class="footer__logo"/>
      <span class="footer__company-name">
        ЧП Дніпро-Делівері
      </span>
    </section>

    <span class="footer__copyright">Copyright © 2023. All Rights Reserved</span>
  </footer>
</template>

<script setup>
  import TheLogo from './TheLogo.vue'

</script>