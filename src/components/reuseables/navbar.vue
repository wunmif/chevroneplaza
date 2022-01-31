<template>
  <div class="w-100 cf"> 
      <header>
    <span :class="{'':lSwitchmenu}" class="fixed z-1 w-100 cf">

      <nav :class="{'bg-white illusion fade-in':lSwitchmenu, 'bg-default near-white':!lSwitchmenu}" class="tc w-100 center pa2">
        <img class="h3-l h2 " src="@/assets/img/logo.png" />
        <span class="dn-l"><i @click="toggleMenu" class="fa fa-bars f3 fl"/></span>
        <div class="cf w-100 dn db-l">
          <router-link to="/" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Home</router-link>
          <router-link to="/shop" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">
            <i class="fa fa-shop" /> Shop
          </router-link>
          <router-link to="/brand" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Blog</router-link>
          <router-link to="/guide" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Cart</router-link>
          <router-link to="/contact" class="pointer f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Contact</router-link>
          <router-link to="/writeup" class="pointer dn-l f6 f5-l tracked link mh3 dib pa3 fw3 ttu ph4-l" :class="{'near-black fade-in':lSwitchmenu, 'near-white':!lSwitchmenu}">Article</router-link>
        </div>
      </nav>

    </span>

    <div class=" cf w-100 bg-black">
        <div class="top-0 left-0 vh-80  fl w-100 fixed bg-black-30 absolute z-max dn" :class="{'slideInLeft':lShow, 'slideOutLeft':!lShow}"> 
          <div class="fl w-100 ">
            <div class="fl w-100 pointer "  @click="toggleMenu">    
              <div class="ph2 w-70 center overflow-y-scroll pt3 fl vh-100 z-max fw5 bg-default dn-l dark-gray">
                <div class="fl w-100">
                  <i class="fal white fa-times-circle"></i>
                  <div class="b pl1 pv3 f5 f6-m">
                    <input class="f7 fa fa-search f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-90 br-pill " autocomplete="off" placeholder="Search..." type="text" name="search" value="" id="search">
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pv4 f f6-m">
                    <router-link class="link white" to="/">Home</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/shop">Shop</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/brand">Blog</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/guide">Cart</router-link>
                  </div>
                </div>

                <div class="fl w-100">
                  <div class="b pl2 pb4 f5 f6-m">
                    <router-link class="link white" to="/contact">Contact</router-link>
                  </div>
                </div>
                <div class="fl w-100 h2"></div>

                <div class="fl w-100 ">
                  <div class="b b--light-purple pl2 fa fa-sign-in pv2 white f5 f6-m">
                    Login
                  </div>                  
                </div>
                <div class="fl relative w-100 ">
                  <small class="white fixed bottom-1 left-0 pt4 pl2 fl w-100 pv2-s f7">© 2020 AdùnByAdétóún</small>
                </div>
              </div>  
            </div>
          </div>
        </div>
    </div>
  </header>
    <nav class="cf z-max black w-100 bg-white border-box pa3 ph3-l ph2 pv2 inline-flex items-center">
      <div class="flex w-80-l w-100 black center">
        <div class="flex items-center w-100 ">
          <div class="w-100 ">
            <span @click="navigateTo('home')" class="fl black pointer mt1 mr3-l"> <img src="@/assets/img/logo.png" class="pl1-l w4 h2"></span>
            <span @click="navigateTo('explore')" :class="{'bw1 fw6 bb b--yellow':$route.name=='explore'}"  class="pointer no-underline f6-l f7 tracked mh2-ns dib-ns dn v-mid pa3 fw6 ttu black">EXPLORE</span>
            <span @click="navigateTo('list-space')" :class="{'bw1 fw6 bb b--yellow':$route.name=='list-space'}" class="pointer no-underline f6-l f7 tracked mh2-ns dib-ns dn v-mid pa3 fw6 ttu black">LIST YOUR SPACE</span>
          </div>
          <div class="w-30-l w-20-m relative">
            <span class="flex items-center fr pointer tc pa2 pb1 ba br1 b--near-white shadow-1 " @click="toggleMenu"> 
              <i class="fa fa-bars"/> <i class="far f3 pl2 fa-user-circle"></i>
            </span>
            <div class="w-100 relative fr">
              <div class="absolute dn-l right-0" @click="toggleMenu" :class="{'slideInLeft':lShow, 'slideOutLeft':!lShow}"> 
                <nav class="br2 ba b--white-50 overflow-x-auto bg-white"   style="max-height:80vh">
                  <ul class="list pa0 ma0 w4 f6">
                    <li class="dn-l tl ph2 pointer hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('home')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Explore
                      </span>
                    </li>
                    <li class="dn-l tl ph2 pointer hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('home')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Solutions
                      </span>
                    </li>
                    <li class="dn-l tl ph2 pointer hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('list-space')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        List your Space
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('signin')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Sign In
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('signup')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Sign Up
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('member-dashboard')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Workspace
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('search-location')" class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Listing
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 hover-bg-near-white mid-gray hover-dark-gray">
                      <span @click="navigateTo('setting')"  class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        Setting
                      </span>
                    </li>
                    <li class="bt b--white-50 pointer tl ph2 buttonPad hover-bg-near-white mid-gray hover-dark-gray" @click="logout()">
                      <span class="mb2 mt2 no-underline inline-flex items-center black ttu">
                        <i class="fa fa-door-open mr1"></i>
                        Logout 
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
              
        </div>
      </div>
    </nav>
  </div>
</template>
<script type="text/javascript">
  const submenu = {
    memberWorkflow : [
      {to:"plan-search",icon:"fa-columns pr2",title:"PLANS"},  
      {to:"event",icon:"fas fa-store pr2",title:"EVENTS"},   
      {to:"booking-search",icon:"fa fa-folder-open pr2",title:"BOOKINGS"},
    ],
    payments : [
      {to:"invoices-search",icon:"fa-robot",title:"INVOICES"}, 
      {to:"payments-search",icon:"fa-bullhorn",title:"PAYMENTS"}
    ],
    partnerWorkflow : [
      {to:"booking-search",icon:"fa-robot",title:"BOOKINGS"}, 
      {to:"plan-search",icon:"fa-barcode",title:"PLANS"},
      {to:"event-search",icon:"fa-barcode",title:"EVENTS"},
    ],
    settings : [
      {to:"add-on-search",icon:"fa-barcode",title:"ADD-ONS"},
      {to:"space-search",icon:"fa-barcode",title:"SPACES"},
      {to:"location-search",icon:"fa-barcode",title:"LOCATIONS"},
      {to:"employees-search",icon:"fa-users",title:"EMPLOYEES"},
    ],
  }



import { jwtToken } from "@/common";

export default {
  data() {
    return {
      submenu,
      submenu_header: "",
      submenu_temp: {},
      menuList:[],
      lShow: false,
      menuShow: false,
      searchtext:"",
      isPopupLogin: false,
      lSwitchmenu: false,
      
    };
  },
  components: { },
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
    
    navigateTo(name) {
        this.$router.push({name:name}).catch(err => {
            // console.log(err)
        })
    },
    popupLogin(){
      this.isPopupLogin = !this.isPopupLogin
    },
    toggleMenu() {
      this.lShow = !this.lShow;
    },
    hideMenuOnScroll() {
      var shrinkOn = 50;
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      this.lSwitchmenu = (distanceY < shrinkOn) ? false : true;
    },
    logout() {
        localStorage.setItem("jwt", "" )
        this.navigateTo("signin")
    },
  },
};
</script>
