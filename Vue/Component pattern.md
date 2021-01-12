- In main component

```
<template>
<Table :tableData="tableData"></Table> //-> prop 데이터 바인딩
</template>
<script>
import Table from '../../../';

export defalut {
  components : {
    Table //-> 컴포넌트 등록
  },
  data () {
    return {
      tableData: [] //-> prop data 정의
    }
  },
  methods: {
    setTableData () {
      ,,,,,,,,
    }
  }
}
</script>
```

- In component

```
<template>
  <div class="table-responsive">
    <table id="table-content" class="table">
      <thead>
        <tr>
          <!-- FIXME: Get rid of warning message regarding table data name {{tableData[0].type}}  -->
          <th scope="col">Name<img src="../../src/assets/Sorting.svg" v-on:click="sortTableDatabyName" class="sort-button"/></th>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
          <th scope="col">4</th>
          <th scope="col">5</th>
          <th scope="col">6</th>
          <th scope="col">7</th>
          <th scope="col">8</th>
          <th scope="col">9</th>
          <th scope="col">10</th>
          <th scope="col">11</th>
          <th scope="col">12</th>
          <th scope="col">Total lessons <img src="../../src/assets/Sorting.svg" v-on:click="sortTableDatabyLessons" class="sort-button"/></th>
          <th scope="col">Difference in 12 Months <img src="../../src/assets/Sorting.svg" class="sort-button"/></th>
        </tr>
      <tbody>
        <tr v-for="country in tableData" v-bind:key="country.name">
          <td v-bind:class="country.cssId" id="country-name">
            {{country.name}}
          </td>
          <th scope="row" class="monthly-data" v-for="(month, index) in country.monthlyData.lessons"  v-bind:key="index">
            {{month}}
          </th>
        </tr>
      </tbody>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: { //-> 오브젝트 형태로 prop 형태 정의
      type: Array
    } },
  data () {
    return {
      sortedByName: false,
      sortedByLessons: false
    }
  },
  methods: {
    sortTableDatabyName () {
      if (this.sortedByName === false) {
        const unsorted = this.tableData
        unsorted.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.sortedByName = true
      } else if (this.sortedByName === true) {
        const sorted = this.tableData
        sorted.sort((a, b) => (a.name < b.name) ? 1 : -1)
        this.sortedByName = false
      }
    },
    sortTableDatabyLessons () {
      if (this.sortedByLessons === false) {
        const unsorted = this.tableData
        unsorted.sort((a, b) => (a.totalLessons > b.totalLessons) ? 1 : -1)
        this.sortedByLessons = true
      } else if (this.sortedByLessons === true) {
        const sorted = this.tableData
        sorted.sort((a, b) => (a.totalLessons < b.totalLessons) ? 1 : -1)
        this.sortedByLessons = false
      }
    }
  }
}
</script>
```
