<script>
  export let player;

  let playername = player?.name ?? "Hexer";
  let avatarUrl = `https://avatars.dicebear.com/api/adventurer/${playername}.svg`;
</script>

<div class="card mb-3 border border-primary" style="">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={avatarUrl} class="img-fluid rounded-start" alt="Peter">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Stats von {playername}</h5>
        <p class="card-text">
          <i class="bi bi-heart-pulse-fill"></i> 100/100
          
        </p>
      </div>
    </div>
  </div>
</div>


