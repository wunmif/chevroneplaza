<template >
    <div id="app" class="bg-white  overflow-hidden cf w-100 vh-100 flex flex-column">
        <navbar />
        
        <router-view class="h-100 w-100 overflow-scroll"></router-view>
    </div>
</template>

<!-- App specific objects  -->


<script type="text/javascript">
    module.exports = {
        name: "app",
    }
</script>

<script type="text/javascript">
    import navbar from "@/components/reuseables/navbar";
   
   
    export default {
        components: {
            navbar,
            
        },
        created() {
        },
    }
</script>

<style lang="scss">
    // @import "assets/scss/tachyons.css";
</style>


<style media="screen">
    @import "assets/css/fontawesomepro.css";
    @import "assets/css/tachyons-sass/tachyons.scss";
    @import "assets/css/style.css";

</style>





