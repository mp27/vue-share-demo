<template>
    <div>
        <h1>Comp vue {{counter}}</h1>
    </div>
</template>

<script>
    // import Global from "../Global";
    import {mapGetters} from 'vuex';

    export default  {
        props: {
            prp: {
              type: Number,
              required: true
            }
        },
        computed: {
            ...mapGetters({
                counter: 'test/getCounter'
            }),
        }
    }
</script>