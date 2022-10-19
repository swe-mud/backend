<script>
  import Login from "./sites/Login.svelte";
  import Game from "./sites/Game.svelte";

  let isLoggedIn = false;//Boolean(new URLSearchParams(window.location.search).get("login"));
</script>

{#if !isLoggedIn}
  <Login />
{/if}

<Game />

<style>
  .form-control {
    color: white;
  }
</style>
