<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    type:{{type}}
    <br/>
    interval:{{interval}}
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';
  import intervaList from '@/constants/intervaList';

  @Component({
    components: {Tabs, Types},
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = intervaList;
    recordTypeList = recordTypeList;
  }
</script>

<style scoped lang="scss">
  ::v-deep .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }
</style>