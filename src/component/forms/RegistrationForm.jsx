import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
function RegistrationForm() {
        const {
            register, formState: { errors }, handleSubmit
          } = useForm();
       
        const onSubmit = (data) => {
            console.log(data);
        }
  return (
    <div>
       <br /><br />
      <Card border="danger" className='mx-auto' style={{ width: '20rem'}}>
        <Card.Header>Registration Form</Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='enter the name'
            {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be 3 characters long"
                }
            })}
            style={{ color: errors.name ? 'red' : 'black' }}
            />
               {errors.name && (
        <span style={{ color: 'red' }}>
          {errors.name?.type === 'required' && "name number is required"}
          {errors.name?.type === 'minLength' && errors.name.message}
        </span>
      )}
            <br />
            <label htmlFor="">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='enter the email'
            {...register("email",{required:true,pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
            style={{ color: errors.email ? 'red' : 'black' }}
            />
            {errors.email && (
        <span style={{ color: 'red' }}>
          {errors.email?.type === 'required' && "email number is required"}
          {errors.email?.type === 'pattern' && "Enter correct email"}
        </span>
      )}
            <br />
            <label htmlFor="">Password:</label>
            <input type="password" name='password' className='form-control' placeholder='enter the password'
            {...register("password",{required:true,minLength:6,maxLength:20})}
            style={{ color: errors.phone ? 'red' : 'black' }}
            />
           { errors.password &&(
                <span style={{color: 'red'}}>
                {errors.password?.type === 'required' && "password is required"}
                {errors.password?.type === 'minLength' && "Entred password is les than 6 digit"}
                {errors.password?.type === 'maxLength' && "Entered password is more tnan 20 digit"}
                </span>
            )}
            <br />
            <label htmlFor="">Phone:</label>
        <input
        type="tel"
        className='form-control'
        name="phone"
        placeholder="Enter the phone number"
        {...register("phone", { required: true, minLength: 6, maxLength: 12 })}
        style={{ color: errors.phone ? 'red' : 'black' }}
      />
      {errors.phone && (
        <span style={{ color: 'red' }}>
          {errors.phone?.type === 'required' && "Phone number is required"}
          {errors.phone?.type === 'minLength' && "Entered number is less than 6 digits"}
          {errors.phone?.type === 'maxLength' && "Entered number is more than 12 digits"}
        </span>
      )}
            <br />
            <button className='btn btn-primary'>Submit</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
} 
export default RegistrationForm;
