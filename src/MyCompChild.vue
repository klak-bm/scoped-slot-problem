
<template>
    <div>
      <slot :myData="myData" />
  </div>
</template>

<script>

export default {
    name: "App",
    props: {
        myData: Object
    },
    methods: {
    }
};
</script>