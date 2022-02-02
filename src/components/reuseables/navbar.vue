<template>
  <div class="w-100 cf"> 
    <header>
      <div class="fixed z-1 w-100 cf">

        <nav class="tc w-100 center bg-white shadow-2">
          <div class="cf w-100 pv1">
            <div class="fl w-100 ph3 ph5-l">
              <div class="fl pa1 w-20-l w-50 tl">
                <img class="h3-l h2" src="@/assets/img/logo.png" />
              </div>
              <div class="fl pa1 w-50 dn db-l">
                <router-link to="/" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph3-l">Home</router-link>
                <router-link to="/" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph3-l">About</router-link>
                <router-link to="/" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph3-l">Features</router-link>
                <router-link to="/" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph3-l">Pricing</router-link>
              </div>
              <div class="fl pa1 w-30 dn db-l tr">
                <router-link to="/contact" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph2-l">Login</router-link>
                <router-link to="/writeup" class="pointer f6 f5-l tracked black link mh2 dib pa3 fw5 ttu ph2-l">Launch a Store</router-link>
              </div>
              <div class="fl w-50 dn-l tr">
                <span class="flex items-center fr pointer tc pa2 pb1 ba br1 b--near-white shadow-1 " @click="toggleMenu"> 
                  <i class="fa fa-bars"/>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <div class=" cf w-100 bg-black">
          <div class="top-0 left-0 vh-80  fl w-100 fixed bg-black-30 absolute z-max" :class="{'slideInLeft':lShow, 'slideOutLeft':!lShow}"> 
            <div class="fl w-100 ">
              <div class="fl w-100 pointer ">    
                <div class="ph2 w-70 center overflow-y-scroll pt3 fl vh-100 z-max fw5 bg-black-90 dn-l dark-gray">
                  <div class="fl w-100">
                    <div class="b pl2 pv3 f f6-m" @click="toggleMenu">
                      <div class="link white tr">Close</div>
                    </div>
                  </div>
                  <div class="fl w-100">
                    <div class="b pl2 pv4 f f6-m">
                      <router-link class="link white" to="/">Home</router-link>
                    </div>
                  </div>

                  <div class="fl w-100">
                    <div class="b pl2 pb4 f5 f6-m">
                      <router-link class="link white" to="/">About</router-link>
                    </div>
                  </div>

                  <div class="fl w-100">
                    <div class="b pl2 pb4 f5 f6-m">
                      <router-link class="link white" to="/">Features</router-link>
                    </div>
                  </div>

                  <div class="fl w-100">
                    <div class="b pl2 pb4 f5 f6-m">
                      <router-link class="link white" to="/">Pricing</router-link>
                    </div>
                  </div>

                  <div class="fl w-100">
                    <div class="b pl2 pb4 f5 f6-m">
                      <router-link class="link white" to="/">Login</router-link>
                    </div>
                  </div>

                  <div class="fl w-100">
                    <div class="b pl2 pb4 f5 f6-m">
                      <router-link class="link white" to="/">Launch a Store</router-link>
                    </div>
                  </div>
                  <div class="fl w-100 h2"></div>

                  <div class="fl relative w-100 ">
                    <small class="white fixed bottom-1 left-0 pt4 pl2 fl w-100 pv2-s f7">© 2022 Chevron</small>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  </div>
</template>
<script type="text/javascript">
  import { jwtToken } from "@/common";

  export default {
    data() {
      return {
        lShow: false,
        menuShow: false,
        searchtext:"",
        lSwitchmenu: false,
        
      };
    },
    // watch: {
      //   $route: {
        //       immediate: true,
    //       handler(to){
    //           this.jwtToken();
    //       }
    //   },
    // },
    mounted(){
      // this.jwtToken();
    },
    methods: {
      toggleMenu() {
        this.lShow = !this.lShow;
        console.log("Loggle is working");
      },
      hideMenuOnScroll() {
        let shrinkOn = 50;
        let distanceY = window.pageYOffset || document.documentElement.scrollTop;
        console.log(distanceY);
        this.lSwitchmenu = (distanceY < shrinkOn) ? false : true;
      },
      logout() {
        localStorage.setItem("jwt", "" )
        this.navigateTo("signin")
      },
    },
    components: { },
  };
</script>
