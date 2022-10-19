<script>
  import Login from "./sites/Login.svelte";

  let isLoggedIn = Boolean(new URLSearchParams(window.location.search).get("login"));
</script>

{#if isLoggedIn}
  <Login />
{/if}

<style>
  .form-control {
    color: white;
  }
</style>
