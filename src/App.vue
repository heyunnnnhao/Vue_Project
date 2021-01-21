<template>
  <header class="page-header">
    <nav>
      <a href="https://github.com/heyunnnnhao" target="_blank">
        <img
          class="logo"
          :src="require('../src/assets/' + logoSrc)"
          alt="logo"
        />
      </a>
      <audio
        class="audio"
        id="audio"
        :src="require('../src/assets/' + audioSrc)"
        controls
        loop
      ></audio>

      <ul class="admin-menu">
        <li>
          <router-link class="link" :to="{ name: 'about' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'calculator' }"
            >Calculator</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'worldclock' }"
            >World Clock</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: 'event' }">Events</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'settings' }"
            >Settings</router-link
          >
        </li>

        <li>
          <button
            class="collapse-btn"
            aria-expanded="true"
            aria-label="collapse menu"
          >
            <span>Collapse</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <section class="content">
    <router-view />

    <footer class="footer">
      <small
        >Made by
        <a href="http://georgemartsoukos.com/" target="_blank"
          >Yunhao He <span>❤</span></a
        >
      </small>
    </footer>
  </section>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      show: true,
      audioSrc: "nos.mp3",
      logoSrc: "logo.png",
      time: "",
      region: "",
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "JetBrain";
  src: url("../src/assets/fonts/JetBrainsMono-Regular.ttf");
}

:root {
  --page-header-bgColor: #242e42;

  --page-header-txtColor: #dde9f8;
  --page-header-headingColor: #7889a4;
  --page-header-width: 220px;
  --page-content-bgColor: #f0f1f6;
  --page-content-txtColor: #171616;
  --page-content-blockColor: #fff;
  --border-radius: 4px;
  --box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.075);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* HEADER STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 20px;
  width: 220px;
  font-family: "JetBrain";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  audio {
    width: 200px;
    height: 40px;
    // display: none;
  }
  nav {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    a,
    button {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  .logo {
    display: block;
    max-width: 120px;
    margin: 0 15px;
  }
  .admin-menu {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 35px;
    list-style: none;

    .link {
    
      &:last-child {
        margin-top: auto;
        margin-bottom: 20px;
      }

      // > * {
      //   width: 100%;
      //   padding: 12px 15px;
      // }
    }

    .menu-heading h3 {
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-size: 12px;
      margin-top: 12px;
      color: var(--page-header-headingColor);
    }

    a,
    button {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      transition: background 0.2s, color 0.2s;
    }

    a {
      &:hover,
      &:focus {
        background: white;
        color: #3d9622;
        outline: none;
      }
    }

    button {
      &:hover,
      &:focus {
        background: white;
        color: #3d9622;
        outline: none;
      }
    }
  }
}

/* PAGE CONTENT STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

.content {
  position: relative;
  left: var(--page-header-width);
  width: calc(100% - var(--page-header-width));
  min-height: 100vh;
  padding: 30px;
  color: var(--page-content-txtColor);
  background: var(--page-content-bgColor);
}

.footer {
  font-size: 0.85rem;
  text-align: right;
  margin-top: 10px;

  span {
    color: var(--red);
  }
}
</style>
