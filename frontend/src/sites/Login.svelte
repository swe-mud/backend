<script>
  import Logo from "../components/Logo.svelte";
  import {player, isLoggedIn} from "../store/login";
  import axios from "axios";

  let name = "";
  let studentId = "";

  function validateInput() {
    if ((name !== "" && studentId !== "" && studentId && !isNaN(studentId))) {
      $player.name = name;
      $player.studentId = studentId;
      $isLoggedIn = true;
    } else {
      alert("Name und Matrikelnummer angeben!")
    }
  }
</script>

<center>
  <main class="m-auto">
    <Logo displayBigLogo="false" />

    <button class="btn mb-5 btn-success d-block" on:click={ validateInput }>
      Start game
    </button>

    <div class="p-2 mt-3 rounded-3 mb-3 text-start" style="max-width: 50%; background-color: darkgrey; color: black">
      Hast du Bock ein duales Studium der Informatik an der HWR Berlin zu absolvieren? Nein? Wir auch nicht.
      <br>
      Wenn du aber stattdessen Lust hast, dich durch Dungeons zu kämpfen, Professor:innen zu besiegen und deine Skills
      zu verbessern, dann gib jetzt deine Matrikelnummer und deinen Namen ein und leg los!
      <br><br>
      <details>
        <summary>Erklärung des Spiels</summary>
        Dieses Spiel ist rein textuell. Du bekommst als Spieler Text ausgegeben, in welchem die Story
        erzählt wird und du Handlungsmöglichkeiten vorgeschlagen bekommst. Bitte lese Aufmerksam und folge den Anweisungen
        für ein maximales Spielerlebnis.
      </details>
    </div>

    <div class="d-flex justify-content-between" style="max-width: 50%">
      <div class="">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" bind:value={name}>
      </div>

      <div class="">
        <label for="matrikelnummer" class="form-label">Matrikelnummer:</label>
        <input type="number" class="form-control" id="matrikelnummer" bind:value={studentId} min="1">
      </div>
    </div>
  </main>
</center>

<style>
  .form-control {
    color: white;
  }
</style>
