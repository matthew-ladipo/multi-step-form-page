


const Validate = (value) => {

  
  let error = {};

  if (!value.name) {
    error.name = "name field Required";
  }
  if (!value.email) {
    error.email = "Email is required";
  }
  if (!value.password) {
    error.password = "password required";
  } else if (value.password.length < 8) {
    error.password = "password must be more 8 characters";
  } else if (!value.password){
    error.password = 'password field required'
  }

  return error;
};

export default Validate;

//  next('/step2') 