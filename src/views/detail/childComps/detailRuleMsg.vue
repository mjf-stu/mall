<template>
    <div v-if="ruleData">
    <detail-rule>
        <template v-slot:size>
            <tr v-for="(item1,index1) of ruleData.ruleTable" :key="index1">
                <td v-for="(item2,index2) of item1" :key="index2">
                    {{item2}}
                </td>
            </tr>
        </template>
        
        <template v-slot:other>
            <tr v-for="(item,index) of ruleData.otherRule" :key="index">
                <td v-for="(item,index) in item" :key="index">
                    {{item}}
                </td>
            </tr>
        </template>


    </detail-rule>
    </div>
</template>

<script>
import detailRule from '../../../components/content/detailRule/detailRule.vue'
export default {
  name:"detailRuleMsg",
  components: { detailRule },
  props:{
      ruleData:{
          type:Object
      }
  }
}
</script>

<style scoped>

</style>