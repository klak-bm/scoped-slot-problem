
<template>
    <div>
      <my-comp :myArray="exampleDatas">
            <template slot-scope="f"> {{ f.myData.id }} - {{ f.myData.label }} </template>
        </my-comp>
  </div>
</template>

<script>
import myComp from "./MyComp";

export default {
    name: "App",
    components: {
        myComp
    },
    data() {
        return {
            "exampleDatas": [
                {
                    "label": "Elem 0",
                    "id": 4
                },
                {
                    "label": "Elem 1",
                    "id": 6,
                },
                {
                    "label": "Elem 2",
                    "id": 10,
                }
            ]
        }
    }
};
</script>