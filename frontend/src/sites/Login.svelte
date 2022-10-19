<script>
  let name = "";
  let studentId = "";

  function validateInput() {
    if ((name !== "" && studentId !== "" && studentId && !isNaN(studentId))) {} else {
      alert("Name und Matrikelnummer angeben!")
    }
  };
</script>

<center>
  <main class="m-auto">
    <img class="img-fluid mt-4 mb-5" src="https://cdn.discordapp.com/attachments/1014430212320133170/1030172968376094770/hwrmudgamelogo-klein.png" />

    <button class="btn mb-5 btn-success d-block" on:click={ validateInput }>
      Start game
    </button>

    <div class="p-2 mt-3 rounded-3 mb-3" style="max-width: 50%; background-color: darkgrey; color: black">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak
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
