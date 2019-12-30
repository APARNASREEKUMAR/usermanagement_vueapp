<template>
    <form v-on:submit.prevent="addUser">
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="first_name">First Name</label>
            <input v-model="users.first_name" v-validate="'required|alpha'" class="form-control" name="first_name" placeholder="First Name">
            <div v-if="errors.has('first_name')" class="invalid-feedback" style="display:block">{{ errors.first('first_name') }}</div>
            </div>
            <div class="form-group col-md-6">
            <label for="last_name">Last Name</label>
            <input v-model="users.last_name" v-validate="'alpha'"  class="form-control" name="last_name" placeholder="Last Name">
            <div v-if="errors.has('last_name')" class="invalid-feedback" style="display:block">{{ errors.first('last_name') }}</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="name">Employee Name</label>
            <input v-model="users.employee_name" v-validate="'required'" class="form-control" name="name" placeholder="Employee Name">
            <div v-if="errors.has('name')" class="invalid-feedback" style="display:block">{{ errors.first('name') }}</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input v-model="users.email" v-validate="'required|email'" class="form-control"  name="email" placeholder="Email">
            <div v-if="errors.has('email')" class="invalid-feedback" style="display:block">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input v-model="users.password" v-validate="'required'" type="password" class="form-control" name="password" placeholder="Password">
            <div v-if="errors.has('password')" class="invalid-feedback" style="display:block">{{ errors.first('password') }}</div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="employee_salary">Salary</label>
            <input v-model="users.employee_salary" v-validate="'required|numeric'" class="form-control" name="salary" placeholder="Salary">
            <div v-if="errors.has('salary')" class="invalid-feedback" style="display:block">{{ errors.first('salary') }}</div>
            </div>
            <div class="form-group col-md-2">
            <label for="employee_age">Age</label>
            <input type="number"  v-validate="'required|numeric|min_value:18|max_value:60|customInBetween'"  v-model="users.employee_age" class="form-control" name="age" placeholder="Age">
            <div v-if="errors.has('age')" class="invalid-feedback" style="display:block">{{ errors.first('age') }}</div>
            </div>
            <div class="form-group col-md-4">
            <label for="gender">Gender</label>
            <select v-model="users.gender" id="gender" v-validate="'required'" name="gender" class="form-control">
                <option selected>Choose...</option>
                <option value="m">Male</option>
                <option value="f">Female  </option>
            </select>
            <div v-if="errors.has('gender')" class="invalid-feedback" style="display:block">{{ errors.first('gender') }}</div>
            </div>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <textarea v-model="users.address" name="address" v-validate="'required'" class="form-control" id="address" placeholder="Enter Your Address"></textarea>
            <div v-if="errors.has('address')" class="invalid-feedback" style="display:block">{{ errors.first('address') }}</div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input v-model="users.city" v-validate="'required'" type="text" class="form-control" id="city" name="city">
            <div v-if="errors.has('city')" class="invalid-feedback" style="display:block">{{ errors.first('city') }}</div>
            </div>
            <div class="form-group col-md-2">
            <label for="zip">Zip</label>
            <input v-model="users.zip" v-validate="'required|numeric'" type="text" class="form-control" name="zip">
            <div v-if="errors.has('zip')" class="invalid-feedback" style="display:block">{{ errors.first('zip') }}</div>
            </div>
        </div>
     
        <div class="form-group">
            <div class="form-check">
            <input v-model="users.notify" class="form-check-input" type="checkbox" name="notify">
            <label class="form-check-label" for="gridCheck">
                Receive Notification
            </label>
            <div v-if="errors.has('notify')" class="invalid-feedback" style="display:block">{{ errors.first('notify') }}</div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>    
z
<script>
    export default {
        data() {
            return {
                users: {
                    'first_name':'Aparna',
                    'last_name':'Sreekumar',
                    'employee_name': 'Aparna Sree',
                    'email':'admin@admin.com',
                    'password':'123',
                    'employee_salary':'10',
                    'employee_age':25,
                    'gender':'f',
                    'address':'Suncity',
                    'city':'Pune',
                    'zip':'411014'
                }
            }
        },
        created() {
            let self = this
            this.$validator.extend('customInBetween', {
            getMessage(field, val) {
                return 'Age must be in between 18 and 60';
            },
            validate(value, field) {
            return 18 < value < 60
            }
            })
         },
        methods: {
            addUser:function(event) {
                this.$validator.validate().then(valid => {
                if (valid) {
                    alert('Validation Success!! :-)\n\n' + JSON.stringify(this.users))
                    axios.post('http://dummy.restapiexample.com/api/v1/create',{
                        'name': this.users.employee_name,
                        'salary': this.users.employee_salary,
                        'age': this.users.employee_age
                    }).
                    then((response) => {
                       console.log(response);
                    }).
                    catch((error) => {
                       console.log(error);
                    })
                }
            });
       }
    }
}
</script>