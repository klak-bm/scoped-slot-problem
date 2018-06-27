
<template>
    <div>
        <div v-for="e in myArray" :key="e.id">
            <my-comp-child :myData="e">
                <template slot-scope="wrap">
                    <slot :myData="wrap.myData"> {{ wrap.myData["label"] }} </slot>
                </template>
            </my-comp-child>
        </div>
    </div>
</template>

<script>
import myCompChild from "./MyCompChild";

export default {
    name: "App",
    components: {
        myCompChild
    },
    props: {
        myArray: Array
    },
    methods: {
    }
};
</script>