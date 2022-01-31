<template>
    
    <li class="bb b--white pointer" @click="toggleMenu" >
        <p class="ph2 h3 inline-flex items-center mv0 black dim ">
            <span class="oi mr1" :data-glyph="icon" ></span>
            {{title}}
        </p>
        <ul class="list pt0 ph0 button dn" :class="{'db':lShow}" > 
            <menulistitem :to="sub.to" :icon="sub.icon" :title="sub.title" v-for="(sub, index) in submenu" :key="index" />
        </ul>
    </li>
  
</template>
<script type="text/javascript">
    import menulistitem from "@/components/reuseables/menulistitem"
    export default {
        data() {return{
            lShow:false,
            icon:"chevron-right",
        }},
        methods: {
            toggleMenu() {
                this.lShow = !this.lShow
                this.icon = (this.lShow) ? "chevron-bottom": "chevron-right"
            }
        },
        props: ['title', 'submenu' ],
        components: {
           menulistitem
        },
    }
</script>
