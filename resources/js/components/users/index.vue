<template>
    <table class="table table-condensed table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Employ Salary</th>
        <th>Employee Age</th>
      </tr>
    </thead>
    <tbody  v-for="user in users">
      <tr v-bind:class="{ 'table-danger' : (user.employee_salary >100 ) }">
        <td> {{ user.id }}</td>
        <td> {{ user.employee_name }}</td>
        <td> {{ user.employee_salary }}</td>
        <td> {{ user.employee_age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      errors: []  
    }
  },
  mounted () {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => (this.users = response.data))
  }
}
</script>