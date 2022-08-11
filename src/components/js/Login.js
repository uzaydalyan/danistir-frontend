import '../scss/Login.scss'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import EmailIcon from '@mui/icons-material/Email';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';


function Login(props) {

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {

    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email" : values.email,
        "password" : values.password
      })}).then((response) => {

        console.log(response);

        if(response.status == 200){

          alert("Login Succeded!");
        }
        else{
          alert("Go Away!");
        }
      })
  };

  return(

    <div className="login">

      <div className="title">Giriş Yap</div>

      <FormControl className="text-field" sx={{ m: 1, width: '300px' }}>
          <InputLabel>E-Posta</InputLabel>
          <Input
            type={'text'}
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        <FormControl className="text-field" sx={{ m: 1, width: '300px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button onClick={handleSubmit} variant="contained" className="submit-button">Giriş yap</Button>
        <div onClick={ () => {props.handleBanner('right')}} className="register-text">Henüz üye olmadınız mı? Buradan üye olun!</div>
    </div>
  );
}

export default Login;