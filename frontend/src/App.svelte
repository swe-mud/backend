<script>
  import Login from "./sites/Login.svelte";
  import Game from "./sites/Game.svelte";
  import { isLoggedIn as isLoggedInStore, player } from "./store/login";
</script>

{#if !$isLoggedInStore}
  <Login />
{/if}

{#if $isLoggedInStore}
  <Game />
{/if}

<style>
  .form-control {
    color: white;
  }
</style>
