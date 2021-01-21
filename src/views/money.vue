<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source="tags"/>
  </Layout>
</template>

<script>

  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  export default {
    name: 'Money',
    components: {Notes, Types, NumberPad,Tags},
    data(){
      return{
        tags:['衣','食','住','行','1']
      }
    }

  };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
</style>