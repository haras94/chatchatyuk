<template>
  <div>
       <!-- <div class="user-reply">
      </div> -->
      <div class="main-page">
          <div class="text-writing">
              <form>
                  <input class="chatting-text" type="text" placeholder="masukan pesan...">
              </form>
      </div>
      <div class="buble-chat"><p class="text-one"></p> halo!
      </div>
      <div class="buble-chatt"><p class="text-two"></p> halo iya,
     </div>
      </div>
      <div class="beside-square">
          <div class="mother-item-beside">
          <div class="search-b">
            <form>
                <input class="search" type="text" placeholder="Cari..." required>	
                <input class="button" type="button" value="Cari">		
            </form>
          </div>
          <div class="mother-bbu">
          <div class="bubble-user">
          </div>
          <p class="user">Joko</p>
          </div>
      </div>
      </div>
        <Rightsquare/>
      </div>
</template>

<script>
import Rightsquare from '../components/right-square.vue';


export default {
    name: 'chat',
    components: {
        Rightsquare,
    }
}
</script>

<style scoped>
    .main-page{
        /* background: red; */
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .beside-square{
        height: 100%;
        width: 550px;
        position: absolute;
        top: 0;
        left: -80px;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

    .search-b{
        width:500px;
        margin:80px 100px;
    }

    .search {
        padding:8px 15px;
        background:rgba(50, 50, 50, 0.2);
        border:0px solid #dbdbdb;
        width: 300px;
        height: 20px;
    }

    .button {
        position:relative;
        padding:6px 15px;
        border:2px solid #53bd84;
        background-color:#53bd84;
        color:#fafafa;
        width: 80px;
        height: 36px;
    }

    .button:hover  {
        background-color:#fafafa;
        color:#207cca;
    }

    .mother-item-beside{
        border: 2px solid whitesmoke;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
        height: 114.5px;
    }

    .text-writing{
        height: 60px;
        width: 800px;
        position: relative;
        bottom: 0;
        right: 0;
        left: 475px;
        margin-top: 560px;
        background: #FFFFFF;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        z-index: 1;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .chatting-text{
         height: 40px;
         width: 650px;
         border-radius: 6px;
    }

    .bubble-user{
        background: #1fbf5f;
        box-sizing: border-box;
        width: 80px;
        height: 80px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 60px;
        border-radius: 6px;
        margin-top: 20px;
    }

    .mother-bbu{
        height: 490px;
        width: 500px;
        position: relative;
        /* background: blueviolet; */
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
        left: 48px;
        top: -70px;
        display: flex;
        justify-content: space-between;
        overflow-y: scroll;
    }

     .buble-chatt{
        height: 60px;
        width: 60px;
        position: relative;
        background: #f2f7f4;
        display: flex;
        border: 3px solid #f2f7f4;
        z-index: 1;
        right: 180px;
        margin-top: 20px;
        border-radius: 6px;
        align-items: center;
    }

      .buble-chat{
        height: 60px;
        width: 60px;
        position: relative;
        background: #1cd666;
        display: flex;
        border: 3px solid #1cd666;
        z-index: 1;
        right: 400px;
        margin-top: 300px;
        border-radius: 6px;
        align-items: center;
    }

    .user{
        margin-top: 50px;
        right: 300px;
        position: relative;
    }
</style>