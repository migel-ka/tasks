<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div>
    <b-navbar class="navContener" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><h1>Планировщик задач</h1></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nav>
            <RouterLink to="/"> Мои задачи </RouterLink>
            <RouterLink to="/create_task"> Добавить задачу </RouterLink>
            <RouterLink to="/settings_task"> Настройки </RouterLink>
          </nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  padding: 2% 10%;
}

body.light {
  color: black;
}

body.dark {
  color: white;
}

body {
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: auto;
  background: linear-gradient(
    315deg,
    rgba(101, 0, 94, 0.5) 3%,
    rgba(60, 132, 206,  0.5) 38%,
    rgba(48, 238, 226,  0.5) 68%,
    rgba(255, 25, 25,  0.5) 98%
  );
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;

  a {
    text-decoration: none;
    cursor: pointer;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.wave {
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 18s linear reverse infinite;
  opacity: 0.8;
}

.wave:nth-of-type(3) {
  bottom: -2.5em;
  animation: wave 20s -1s reverse infinite;
  opacity: 0.9;
}

@keyframes wave {
  2% {
    transform: translateX(1);
  }

  25% {
    transform: translateX(-25%);
  }

  50% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(1);
  }
}

section {
  margin-top: 20px;
}

button {
  max-width: 150px;
  max-height: 50px;
  margin: 5px;
}

.navbar-expand-lg .navbar-collapse {
  justify-content: center;
}
</style>
