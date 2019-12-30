<template>
<div>
    <table class="table table-condensed table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Employ Salary</th>
        <th>Employee Age</th>
      </tr>
    </thead>
    <tbody  v-for="user in displayedUsers">
      <tr v-bind:class="{ 'table-danger' : (user.employee_salary >100 ) }">
        <td> {{ user.id }}</td>
        <td> {{ user.employee_name }}</td>
        <td> {{ user.employee_salary }}</td>
        <td> {{ user.employee_age }}</td>
      </tr>
    </tbody>
  </table>
   <div class="clearfix btn-group col-md-2 offset-md-5">
            <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
            <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
            <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
    </div>
</div>
</template>
<script src="pagination.js"></script>
<script>
export default {
  data () {
    return {
      users: [],
      errors: [] ,
       page: 1,
    perPage: 9,
    pages: [], 
    }
  },
  created () {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => (this.users = response.data))
  },
  methods:{
    setPages () {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  users.slice(from, to);
    }
  },
  watch: {
    users () {
      this.setPages();
    }
  },
  computed: {
    displayedUsers () {
      return this.paginate(this.users);
    }
  },
}
</script>