<template>
  <div>
      <div class="kotak_login">
            <form class="boxnya">
                <input  type="text" name="email"
                class="form_login" placeholder="Email Address">
                <input type="password" name="password"
                class="form_login" placeholder="Password">

                <div class="checkbox">
                    <input type="checkbox" name="Remember_Me" value="Remember Me" check />
                </div>
                <div class="remember"><p >Remember Me</p></div>
                <a class="forgot" href="#">Forgot Password</a>

                <div class="formtombol">
                    <router-link to='/chat' class="tombol_login" >Login</router-link>
                    <router-link to = '/Register' class="tombol_signup">Sign Up</router-link>
                </div>
            </form>
            <div class="h1ya">
                <h1 class="judul">Login</h1>
                <p class="tulisan_login">Welcome Back,Please Login</p>
                <p class="tulisan_login1">to your account</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'login',
}
</script>

<style scoped>
     .boxnya {
    position: absolute;
    width: 417px;
    height: 80px;
    top: 110px;
    right: 80px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}

.h1ya {
    color: #5e5b5b;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    top: -70px;
    position: absolute;
    right: 500px;
}

.judul {
    position: absolute;
    width: 354px;
    height: 138px;
    top: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    line-height: 83px;
    color: #424242;
}

.tulisan_login {
    position: absolute;
    width: 388px;
    height: 110px;
    top: 90px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
    left: 5px;
}

.tulisan_login1 {
    position: absolute;
    width: 388px;
    height: auto;
    top: 113px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
    left: 7px;

}

.kotak_login {
    width: 350px;
    background: white;
    /*meletakkan form ke kanan*/
    margin: 80px auto;
    padding: 30px 20px;
    float: right;
    border: black;
    position: relative;
    box-shadow: 2px;
    top: 100px;
}

.checkbox {
    position: absolute;
    top: 123px;
    right: 350px;
    font-family: 'Montserrat', sans-serif;
    left: 2px;

}

.forgot {
    font-family: 'Montserrat', sans-serif;
    float: right;
    text-decoration: none;
    color: black;
    font-size: 17px;
    line-height: 22px;

}

.remember {
    position: absolute;
    width: auto;
    height: 35px;
    left: 20px;
    top: 120px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    line-height: 22px;
    color: #D0CCCC;
}

.formtombol {
    position: absolute;
    top: 180px;
    left: 5px;
}

a{
    text-decoration: none;
}

.form_login {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font-size: 11pt;
    margin-bottom: 20px;
    float: right;
}

.tombol_login {
    background: #141414;
    color: white;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
}

.tombol_signup {
    background: #b5aba8;
    color: #e8e4e3;
    font-size: 11pt;
    width: 100px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
}

.a{
    text-transform: none;
}
</style>