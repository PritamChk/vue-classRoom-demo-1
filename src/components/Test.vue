<template>
    <div class="w-screen mt-10 flex-wrap-reverse h-full flex flex-row justify-evenly items-center ">
        <AnnotationIcon class="inline w-7 h-7 text-pink-500"/>
        Hello test {{x}}
    </div>
</template>

<script>
    import { AnnotationIcon } from "@heroicons/vue/outline"
    export default {
        name:'TestComponent',
        components:{
            AnnotationIcon
        },
        data() {
            return {
                x:'11'
            }
        }
    }
</script>
