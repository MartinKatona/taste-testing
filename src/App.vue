<template>
  <header>
    <div class="wrapper">
      <PageTitle msg="Taste testing" />
      <nav>
        <RouterLink to="/">Protein list</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </nav>
    </div>
    <divider></divider>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageTitle from "@/components/PageTitle.vue";
</script>

<style lang="scss">
@import "@/assets/base.css";

#app {
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 1rem;

  font-weight: normal;
}

.wrapper {
  padding-bottom: 8px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
button,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.2s;
}

@media (hover: hover) {
  a:hover,
  button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    @apply border-b-transparent border-b-2;

    &:last-child {
      border-right: 1px solid var(--color-border);
    }

    &.router-link-exact-active {
      @apply text-green-500 border-b-green-500 border-b-2;

      &:hover {
        background-color: transparent;
      }
    }
  }
}

input {
  border: thin solid rgba(211, 211, 211, 0.26);
  padding: inherit !important;

  &.text-center {
    text-align: center;
  }

  &.text-right {
    text-align: right;
  }
}

button {
  border: thin solid rgba(211, 211, 211, 0.26);
  max-height: 38px;
}

input[type="date"] {
  height: 38px;
}

.v-popper__popper {
  font-size: 14px;
  .v-popper__inner {
    padding: 8px !important;
  }
}

.toggle-container.dense {
  vertical-align: top;
  padding-top: 10px;
  .toggle {
    max-height: 15px;
    max-width: fit-content;
    .toggle-handle {
      max-height: 15px;
      max-width: 15px;
    }
  }
}

.dark input.filter-input {
  @apply bg-transparent;
  transition: 0.2s;

  &::placeholder {
    @apply text-white;
    transition: 0.2s;
  }
}

.dark input {
  @apply bg-gray-900 text-white;
  transition: 0.2s;
}
</style>
