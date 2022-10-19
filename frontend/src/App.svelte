<script>
  import Login from "./sites/Login.svelte";
  import Game from "./sites/Game.svelte";

  let isLoggedIn = Boolean(new URLSearchParams(window.location.search).get("login"));
</script>

{#if !isLoggedIn}
  <Login />
{/if}

{#if isLoggedIn}
  <Game />
{/if}

<style>
  .form-control {
    color: white;
  }
</style>
