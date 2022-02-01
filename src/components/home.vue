<template >
    <section  class=" w-100 pt6-l pt3 overflow-scroll fl " >
        <div class="dt pv5 w-100 ph5-ns ph3">
            <div class="dtc-ns v-mid w-50-ns w-100">
                <div class="f1-l f3 b">
                    Competitor Price Tracking & Monitoring Software
                </div>
                <div class="mt0 f4-l f6 pv3 measure-l w-60-l">
                    Increases your sales growth & profit margins by uncovering your rival's prices & tactics
                </div>
                <div class="cf w-60-l w-80-m w-100 pt3">
                    <div class="w-100 bb dt items-center black br2">
                        <input class="br2 dtc v-mid pa3 bn w-100 fw2" placeholder="Search..." type="text" />
                        <div class="pa2 dtc v-mid nt2 pointer bg-black white w-30 tc">
                            Launch a store
                        </div>
                    </div>
                </div>

            </div>
            <div class="dtc-ns v-mid w-50-ns pt0-ns pt4 w-100">
               <img src="@/assets/img/finance.svg" class="w-100 h5-l h4">
            </div>
        </div>

        <div class="fl w-100">
            <div class="cf w-100 bg-near-white ph5-ns ph3">
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

            <div class="cf w-100 bg-white ph5-ns ph3 mv3">
                <div class="fl w-100 pb5">
                    <div class="cf mw6 center ph1 bebas-font">
                        <div class="f2-l f3 black lh-copy tracked b pv3 ttc tc measure">Main Solutions</div>
                    </div>
                </div>
                <div class="mw8 cf center f5 b pb4">
                    <div class="w-100 flex flex-wrap black">
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Price Checking
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Dynamic Pricing
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Map Monitoring
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                           <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Price Matching
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Price Management
                            </div>
                        </div>
                        <div class="w-50-ns w-100 pa3">
                            <div class="fl bg-near-white shadow-2 w-100 pa3">
                                Price Scraping
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="cf w-100 bg-near-white ph5-ns ph3">
                <div class="cf w-100 center tc pv5 ph3-l">
                    <div class="fl w-100 pb5">
                        <div class="f2-l tl f3 black lh-copy tracked b pv3 ttc measure">Departments</div>
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


    export default {
        name: 'home',
        components: {navbar,},
        data(){return{
            marketList:[
                {name: "Corn Flakes", category:"Fruits", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Vegetable", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Ready to Eat", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Meats and Tofu", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Snacks and sweets", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Seafood", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Noodles, Rice, Grains", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Pantry", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
                {name: "Corn Flakes", category:"Beverages", imagepath:"https://osta.ng/wp-content/uploads/2021/01/1-5597.jpg", price: 700},
            ]

        }},
    }

    
</script>