<script>
  import Login from "./sites/Login.svelte";
  import Game from "./sites/Game.svelte";
  import { isLoggedIn as isLoggedInStore, player } from "./store/login";
</script>

{#if !$isLoggedInStore}
  <Login />
{/if}

{#if $isLoggedInStore && !$player.game_over}
  <Game />
{/if}

{#if $player.game_over}
  <center>
    <marquee loop behavior="alternate" scrollamount="60"><h1 class="text-danger">GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER GAMEOVER </h1></marquee>
    <button class="btn w-100 bg-danger" on:click={ () => { location.reload() } }>RESTART</button>
  </center>
{/if}

<style>
  .form-control {
    color: white;
  }
</style>
