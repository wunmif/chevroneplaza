<template >
    <section  class=" w-100 pt6-l pt3 overflow-scroll fl " >
        <div class="dt pv5 w-100 ph5-ns ph3">
            <div class="dtc-ns v-mid w-50-ns w-100">
                <div class="f1-l f3 b">
                    Be where the market is.
                </div>
                <div class="mt0 f4-l f6 pv3 measure-l w-60-l">
                   Anyone, anywhere, can launch an online store while working from home.
                </div>
                <div class="cf w-60-l w-80-m w-100 pt3">
                    <div class="w-100 ba dt items-center blue br3">
                        <input class="br2 dtc gray v-mid pa3 bn w-100 fw2" placeholder="Enter your email address" type="text" />
                        <div class="pa2 dtc bl br2 v-mid nt2 pointer  bg-blue white w-30 tc">
                            Launch a store
                        </div>
                    </div>
                </div>

            </div>
            <div class="dtc-ns v-mid w-50-ns pt0-ns pt4 w-100">
               <img src="@/assets/img/finance.svg" class="w-100 h5-l h4">
            </div>
        </div>

        <div class="flex-wrap m8 bg-near-white  pv2 ph5 cf center flex w-100">
            <div class="fl w-100 pb5">
                <div class="cf mw6 center bebas-font">
                    <div class="f2-l f3 chev-lblue lh-copy tracked b pv3 ttc tc measure">How Eplaza Works</div>
                   

                </div>
                 <div class="f5-l tc f6 black ">Road to the unmatched Competitor Price Tracking & Monitoring Software in 3 simple steps.</div>
            </div>

            <div class="pr3 pb4  ">
              <div class="bg-white f fl br3 shadow-4" >
                <i class="pa3 f3 fl fa fa-store"></i>
                <div class="cf w-100  h2"></div>

                <h1 class="fl w-100 tl f2 pl3 pr3  chev-lblue "> eCommerce </h1>
                
                <div class="cf h3-1"></div>

                <h1 class="fl tl f5 pl3 pr3 gray "> Define your products in bulk or  <br> add them one-by-one into our  <br> system including any amount of <br>  competitors to your  dashboard in <br>  seconds and enjoy the stream of  <br> data flowing </h1>
                
              </div>  
            </div>
            <div class="pr3 pb4  ">
              <div class="bg-white f fl br3 shadow-4" >
                <i class="pa3 f3 fl fa fa-tools"></i>
                <div class="cf w-100  h2"></div>

                <h1 class="fl w-100 tl f2 pl3 pr3  chev-lblue "> Marketing </h1>
                
                <div class="cf h3-1"></div>

                <h1 class="fl tl f5 pl3 pr3 gray "> Define your products in bulk or  <br> add them one-by-one into our  <br> system including any amount of <br>  competitors to your  dashboard in <br>  seconds and enjoy the stream of  <br> data flowing </h1>
                
              </div>  
            </div>
            <div class="pr3 pb4  ">
              <div class="bg-white f fl br3 shadow-4" >
                <i class="pa3 f3 fl fa fa-store"></i>
                <div class="cf w-100  h2"></div>

                <h1 class="fl w-100 tl f2 pl3 pr3  chev-lblue "> eCommerce </h1>
                
                <div class="cf h3-1"></div>

                <h1 class="fl tl f5 pl3 pr3 gray "> Define your products in bulk or  <br> add them one-by-one into our  <br> system including any amount of <br>  competitors to your  dashboard in <br>  seconds and enjoy the stream of  <br> data flowing </h1>
                
              </div>  
            </div>
            <div class="pr3 pb4">
              <div class="bg-white f fl br3 shadow-4" >
                <i class="pa3 f3 fl fa fa-store"></i>
                <div class="cf w-100  h2"></div>

                <h1 class="fl w-100 tl f2 pl3 pr3  chev-lblue "> eCommerce </h1>
                
                <div class="cf h3-1"></div>

                <h1 class="fl tl f5 pl3 pr3 gray "> Define your products in bulk or  <br> add them one-by-one into our  <br> system including any amount of <br>  competitors to your  dashboard in <br>  seconds and enjoy the stream of  <br> data flowing </h1>
                
              </div>  
            </div>
 
        </div>

        <div class="fl w-100">
            <div class="cf w-100 bg-white ph5-ns ph3">
                <div class="cf w-100 center tc pv5 ph3-l">
                    <div class="fl w-100 pb5">
                        <div class="cf mw6 center ph1 overpass-font">
                            <div class="f4 b tc lh-copy">
                                Check out some of our Client Goods
                            </div>
                        </div>
                    </div>
                    <div class="w-100 flex overflow-scroll  item-center">
                        <div  class="flex flex-column mr2 w-20-ns w-40 flex-grow-0 mr1 flex-shrink-0" v-for="(market, index) in marketList" :key="index">
                            <div  class="w-100 tc">
                                <div class="w-100 pa1">
                                    <div class="fl w-100">
                                        <!-- <img :src="market.imagepath" @error="market.imagepath = defaultimage"  class="dn"> -->
                                        <div class="w-100 flex overflow-hidden" style="height:200px; background-position: center;background-size: cover;" :style="{ backgroundImage: `url('` + market.imagepath + `')` }" ></div>
                                    </div>
                                    <div class ="fl w-100 mt3 pointer">
                                        <div class="fl w-100 ph1 b mb2 overpass-font">
                                            <div class="f6 fl w-100 black h2 pb2">{{market.name}}</div>
                                            <div class="f7 fl w-100 pv1 black-70">
                                                {{market.price}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cf w-100 bg-chev-blue1 ph5-ns ph3 mv3">
                <div class="fl w-100 pb5">
                    <div class="cf mw6 center ph1 bebas-font">
                        <div class="f2-l f3 black lh-copy tracked b pv3 ttc tc measure">Main Solutions</div>
                    </div>
                </div>
                <div class="mw8 cf center f5 b pb4">
                    <div class="w-100 flex flex-wrap black">
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl br2 bg-near-white shadow-2 w-100 pa3">
                                <i class="pr2 fa fa-store"></i>
                                eCommerce
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl br2 bg-near-white shadow-2 w-100 pa3">
                                <i class="pr2 fa fa-tools"></i>
                                Business Tool
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            
                            <div class="fl br2 bg-near-white shadow-2 w-100 pa3 ">
                                <i class="pr2 fa fa-line-chart"></i>
                                Price Monitoring
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                           <div class="fl br2 bg-near-white shadow-2 w-100 pa3">
                               <i class="pr2 fa fa-bullhorn"></i>
                               Marketing
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl br2 bg-near-white shadow-2 w-100 pa3">
                                <i class="pr2 fa fa-user"></i>
                                Price Management
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl br2 bg-near-white shadow-2 w-100 pa3">
                                <i class="pr2 fa fa-support"></i>
                                Price Scraping
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="cf w-100 bg-near-white ph5-ns ph3">
                <div class="cf w-100 center tc pv5 ph3-l">
                    <div class="fl w-100 pb5">
                        <div class="f2-l tl f3 black lh-copy tracked b  ttc measure">Departments</div>
                    </div>
                    <div class="w-80 center cf">
                        <div  class="flex flex-wrap w-100">
                            <div  class="w-30-ns w-100 mr3 pt3 tc" v-for="(market, index) in marketList" :key="index">
                                <div class="w-100 pa1">
                                    <div class="fl w-100">
                                        <!-- <img :src="market.imagepath" @error="market.imagepath = defaultimage"  class="dn"> -->
                                        <div class="w-100 flex overflow-hidden" style="height:200px; background-position: center;background-size: cover;" :style="{ backgroundImage: `url('` + market.imagepath + `')` }" >
                                            <div class="dt h-100 w-100 ph1 b mb2 overpass-font bg-black-60">
                                                <div class="f4 b dtc v-mid w-100 white pb2">{{market.category}}</div>
                                               
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
   
        
        
    </section>
</template>

<script>
    
   
    import navbar from "@/components/reuseables/navbar"
    import footer from "@/components/reuseables/footer"


    export default {
        name: 'home',
        components: {navbar, footer},
        data(){return{
            marketList:[
                {name: "Corn Flakes", category:"Fruits", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Flat Tummy tea", category:"Vegetable", imagepath:"https://osta.ng/wp-content/uploads/2022/01/11.jpg", price: 2700},
                {name: "Beverages", category:"Ready to Eat", imagepath:"https://osta.ng/wp-content/uploads/2021/10/guio.jpg", price: 3000},
                {name: "Capri Sun", category:"Meats and Tofu", imagepath:"https://osta.ng/wp-content/uploads/2021/10/capri-sun-200ml.jpg", price: 5500},
                {name: "Onga Seasoning", category:"Snacks and sweets", imagepath:"https://osta.ng/wp-content/uploads/2021/11/njhbvb.jpg", price: 500},
                {name: "Plantain Chips", category:"Seafood", imagepath:"https://osta.ng/wp-content/uploads/2021/07/download-4.jpg", price: 700},
                {name: "Semovita", category:"Noodles, Rice, Grains", imagepath:"https://osta.ng/wp-content/uploads/2021/05/yhtjyfkguhi.jpg", price: 2000},
                {name: "Diffuser", category:"Pantry", imagepath:"https://osta.ng/wp-content/uploads/2021/05/ioubn.jpg", price: 8700},
                {name: "50kg Rice", category:"Beverages", imagepath:"https://osta.ng/wp-content/uploads/2021/03/OkeA400.jpg", price: 28000},

            ]

        }},
    }

    
</script>