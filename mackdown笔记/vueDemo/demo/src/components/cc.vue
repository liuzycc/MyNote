<template>
    <div>
        <input type="text" v-model="cc">
    </div>
</template>
<script>
export default {
    inject:['foo'],
    data(){
        return {
            cc:this.foo
        }
    },
    created(){
        console.log(this.foo)
    }
}
</script>