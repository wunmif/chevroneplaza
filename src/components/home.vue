<template >
    <section  class=" w-100 pt6-l pt3 ph5-l ph3 overflow-scroll cf " >
        <div class="dt pv5 w-100 ">
            <div class="fl fr-l w-50-l w-100">
               <img src="@/assets/img/finance.svg" class=" h-75-l w-100 h5">
            </div>

            <div class="fl  w-50-l w-100">
                <p class="f1">
                    Be where the market is
                </p>
                <p class="mt0 f4">
                    Anyone, anywhere, can launch an online store while working from home.
                </p>
                <span class="ba pa3 br1 b--silver center bg-white">
                    <input type="text" placeholder="enter your store name" class="center bg-transparent near-black tr-ns tc bn">
                    <span class="center pr3 near-black tl bn dn dib-ns"></span>
                </span>
                <a target="_blank">
                    <span class="pa3 br1 bg-near-black ba b--dark-gray washed-yellow fw5">
                        Launch a store
                    </span>
                </a>

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

        }},
    }

    
</script>