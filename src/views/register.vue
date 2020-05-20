<template>
  <div>
    <div class="kotak_register">
    <form>
            <input type="text" name="username"
            class="form_register" placeholder="Full Name">

            <input type="text" name="email"
            class="form_register" placeholder="Email Address">

            <input type="password" name="password"
            class="form_register" placeholder="Password">

            <div class="formtombol">
                <router-link to="/" class="tombol_signup">Sign Up</router-link>
                <router-link to="/" class="tombol_login">Login</router-link>
            </div>
    </form>
</div>
        <div class="h1ya">
            <h1 class="judulnya"> Register</h1>
            <p class="tulisan_register">Welcome Back,Please Register</p>
</div>
</div>
</template>

<script>
export default {
    name: 'register'
}
</script>

<style scoped>
    .h1ya{
        position: relative;
        right: 280px;
        top: 80px;
    }

    .judulnya{
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    color: #1fbf5f;
    right: 240px;
    top: 100px;
}

.tulisan_register{
    text-align: right center;
    position: absolute;
    width: 388px;
    /* height: 110px; */
    right: 100px;
    top: 185px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
}

.tulisan_register1{
    text-align: right center;
    position: relative;
    /* width: auto; */
    /* height: 70px; */
    left: 35px;
    top: 210px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
}

.kotak_register{
    width: 350px;
    /* background: #6c22bf; */
    /*meletakkan form ke kanan*/
    margin: 80px auto;
    padding: 30px 20px;
    border: black;
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    right: 450px;
    top: 220px;
    float: right;
}
.kotak_register h1{
    position: absolute;
    top:-30px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    font-weight: bold;

}
.kotak_Register p{
    line-height: 0;
    position: relative;
    top:-20px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
}

.formtombol{
    position: absolute;
    bottom: 0px;
    left: 100px;
    top: 230px;

}

.form_register{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: 11pt;
    margin-bottom: 20px;
}

.tombol_signup{
    background: rgb(255, 255, 255);
    color: #6c22bf;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
}

.tombol_login{
    background: rgb(255, 255, 255);
    color: #6c22bf;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    right: 50px;
    font-weight: bold;
}
</style>