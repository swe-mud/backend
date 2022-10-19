<script>
  import Div from "../components/Container.svelte";
  import Logo from "../components/Logo.svelte";
  import ItemsShortOverview from "../components/game/ItemsShortOverview.svelte";
  import UserMessage from "../components/game/terminal/UserMessage.svelte";
  import CommentMessage from "../components/game/terminal/CommentMessage.svelte";


  let items = [];
  let message = "";
  let msg = [...Array(300).keys()];

  function sendMessage() {

    message = "";
    scrollToLastMessageInTerminal();
  }

  function scrollToLastMessageInTerminal() {
    const terminal = document.getElementById("terminalmsgs");
    terminal.scrollTop = terminal.scrollHeight;
  }
</script>

<div class="container-fluid mt-3">
  <div class="row">
    <div class="col-3">
      <ItemsShortOverview items="{ items }" />
    </div>
    <div class="col-9">
      <div class="card">
        <div class="card-header bg-primary">
          Terminal
        </div>

        <div class="card-body" style="max-height: 500px; overflow: auto" id="terminalmsgs">
          <ul class="list-group">
            {#each msg as m}
              <UserMessage />

              {#if m % 2}
                <CommentMessage text="Das ist ein Kommentar. Was willst du tun?" />
              {/if}
            {/each}
          </ul>
        </div>

        <div class="card-footer bg-secondary">
          <details class="mb-2">
            <summary>Befehle/Info</summary>
            Folgt
          </details>

          <div class="input-group">
            <input type="text" bind:value={message} class="form-control" placeholder="Deine Eingabe" aria-label="Deine Eingabe" aria-describedby="button-submit">
            <button class="btn btn-info" type="button" id="button-submit" on:click={sendMessage}>Senden</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .form-control {
    color: white;
  }
</style>
