<script>
  import axios from "axios";

  let count;
  let troopData = {}

  async function getTroops() {
    const data = {count: count}
    const res = await axios.post('http://localhost:3000/api/v1/getTroops', data)
    troopData = res.data.data
  }
</script>

<style>
    .main {
        display: flex;
        margin: 50px;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }

    .input-container {
        display: flex;
        margin: 15px;
    }

    .result-container {
        display: flex;
        color: white;
    }

    span {
        margin: 10px;
    }
</style>

<div class="main">
  <div class="input-container">
    <input type="number" bind:value={count}/>
    <button on:click={getTroops}>get troops</button>
  </div>

  <div class="result-container">
    {#if troopData && troopData.archers}
      <span>spearMen Trops:{troopData.spearMen}</span>
      <span>swordMen Trops:{troopData.swordMen}</span>
      <span>Archer Trops:{troopData.archers}</span>
    {/if}

  </div>
</div>
