<script>
  import {interactions, isInteractionModeEnabled} from "../../../store/interactions";
  import axios from "axios";

  function sendEvent(event) {
    axios("http://localhost:15517/eventhandler/" + event);
    $isInteractionModeEnabled = false;
  }
</script>

<div class="btn-group" role="group" aria-label="Basic example">
  {#each $interactions as interaction }
    <button type="button" class="btn btn-primary" on:click={ () => { sendEvent(interaction.event) } }>
      { interaction.description }
    </button>
  {/each}
</div>




