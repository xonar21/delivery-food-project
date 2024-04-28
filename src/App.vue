<template>
  <main class="main">
    <div class="container">
      <HeaderComponent />

      <router-view></router-view>
    </div>
  </main>

  <FooterComponent />
  <ModalCard />
  <ModalAuth />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ModalCard from './components/ModalCard';
import ModalAuth from './components/ModalAuth';
import './styles/index.css';

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
    ModalCard,
    ModalAuth,
  },
};
</script>
