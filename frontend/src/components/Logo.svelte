<script>
  export let displayBigLogo = false;
</script>

{#if !displayBigLogo}
  <img class="img-fluid mt-4 mb-5" src="https://cdn.discordapp.com/attachments/1014430212320133170/1030172968376094770/hwrmudgamelogo-klein.png" />
{/if}
{#if displayBigLogo}
  <img class="img-fluid mt-4 mb-5" src="https://cdn.discordapp.com/attachments/1014430212320133170/1030172968376094770/hwrmudgamelogo-klein.png" />
{/if}

