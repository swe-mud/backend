<script>
  import ItemsShortOverview from "../components/game/ItemsShortOverview.svelte";
  import UserMessage from "../components/game/terminal/UserMessage.svelte";
  import CommentMessage from "../components/game/terminal/CommentMessage.svelte";
  import PlayerStats from "../components/game/PlayerStats.svelte";
  import InteractionArea from "../components/game/terminal/InteractionArea.svelte";
  import {isInteractionModeEnabled} from "../store/interactions";
  import {onMount} from "svelte";
  import {isLoggedIn, player} from "../store/login";
  import axios from "axios";

  const ws = new WebSocket("ws://localhost:16816");
  let items = [];
  let messages = [];

  onMount(() => {
    ws.addEventListener("open", () =>{
      console.log("WSS - Connected :-)");
      axios("http://localhost:15517/eventhandler/login/" + $player.name + "/" + $player.studentId).then(res => {})
    });

    ws.addEventListener('message', function (event) {
      console.info("WSSevent-raw", event, JSON.parse(event.data));
      const emittedData = JSON.parse(event.data);

      if (emittedData !== undefined) {
        handleWebsocketServerMessage(emittedData);
      }
    });
  });

  function handleWebsocketServerMessage(emittedEvent) {
    console.info("WSS-ownEvent", emittedEvent);
    if (emittedEvent.type === "message") {
      processIncomingMessage(emittedEvent.message)
    }
  }

  function processIncomingMessage(message) {
    messages = [...messages, message];
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

      <div class="card mb-4">
        <div class="card-header bg-primary">Du bist im Raum</div>
        <div class="card-body p-0">
          <img src="https://cdn.discordapp.com/attachments/1014429749306728458/1032303718080724993/208EED0B-6780-42CA-A960-DEA040A354AA.jpg" class="img-fluid" />
        </div>
      </div>

      <PlayerStats />
    </div>
    <div class="col-9">
      <div class="card">
        <div class="card-header bg-primary">
          Terminal
        </div>

        <div class="card-body" style="max-height: 500px; overflow: auto" id="terminalmsgs">
          <ul class="list-group">
            {#each messages as message}
              {#if message.isComment}
                <CommentMessage text="{message.content}" />
              {:else}
                <UserMessage name="{message.author}" text="{message.content}"  />
              {/if}
            {/each}
          </ul>
        </div>

        <div class="card-footer bg-secondary">
          <details class="mb-2">
            <summary>Befehle/Info</summary>
            Folgt
          </details>

          {#if $isInteractionModeEnabled}
            <InteractionArea />
          {:else}
            <small class="text-white-50 d-none">Eingabe gesperrt.</small>
          {/if}
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
