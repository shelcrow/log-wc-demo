<template>
    <div id="sandbox-container">
        <Log ></Log>
    </div>
</template>

<script>
import Log from "../components/Log.vue"

export default {
    components: { Log },
    data() {
        return { 
        }
    }
}
</script>

<style>
#sandbox-container {
    margin: 10px;
}

</style>