<script>
  import Div from "../components/Container.svelte";
  import Logo from "../components/Logo.svelte";
  import ItemsShortOverview from "../components/game/ItemsShortOverview.svelte";


  let items = [];
</script>

<div class="container-fluid mt-3">
  <div class="row">
    <div class="col-3">
      <ItemsShortOverview items="{ items }" />
    </div>
    <div class="col-9">
      <div class="p-3 border bg-light">Row column</div>
    </div>
  </div>
</div>

<style>

</style>
