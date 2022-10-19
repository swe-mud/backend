<script>
  export let items = [];
</script>

<div class="card">
  <div class="card-header bg-primary">Items</div>
    <ul class="list-group list-group-flush">
      {#if items.length !== 0}
          {#each items as item (item)}
            <li class="list-group-item">{item}</li>
          {/each}
      {:else}
        <li class="list-group-item bg-secondary text-white">Du hast keine Items.</li>
      {/if}
    </ul>
</div>
