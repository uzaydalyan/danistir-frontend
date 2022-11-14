import '../scss/Register.scss';
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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { registerUser } from '../../../services/services';
import React from 'react';


function Register(props) {

  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordverification: '',
    showPassword: false,
  });

  const [isFormValid, setIsFormValid] = useState({
    name: true,
    surname: true,
    email: true,
    password: true,
    password2: true
  });

  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword,});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const fieldsValid = () => {

      setIsFormValid({
        name: values.name != '',
        surname: values.surname != '',
        email: values.email != '',
        password: values.password != '',
        password2: values.passwordverification != ''
      })
  }

  const handleSubmit = () => {

    if(fieldsValid())

    if(values.password == values.passwordverification){

      registerUser(values.email, values.password).then((response) => {

        if(response.status == 200){

          alert("Registered!");
        }
        else{
          alert("Go Away!");
        }
      })
    } else {

        alert("Passwords are different!");
    }

    
  };



  return (
    <div className="register">
      <div className="title">Kayıt Ol</div>

      <div className="name-surname">

        <FormControl className="text-field text-field-left" sx={{ m: 1, width: '142px' }} error={!isFormValid.name}>
          <InputLabel>İsim</InputLabel>
          <Input
            type={'text'}
            value={values.name}
            onChange={handleChange('name')}
            endAdornment={
              <InputAdornment position="end">
                <PersonOutlineIcon />
              </InputAdornment>
            }
            label="Name"
          />
        </FormControl>

        <FormControl className="text-field" sx={{ m: 1, width: '142px' }} error={!isFormValid.surname}>
          <InputLabel htmlFor="">Soyİsim</InputLabel>
          <Input
            type={'text'}
            value={values.surname}
            onChange={handleChange('surname')}
            endAdornment={
              <InputAdornment position="end">
                <PersonOutlineIcon />
              </InputAdornment>
            }
            label="Surame"
          />
        </FormControl>


      </div>

      <FormControl className="text-field" sx={{ m: 1, width: '300px' }} error={!isFormValid.email}>
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
          label="Password"
        />
      </FormControl>

      <FormControl className="text-field" sx={{ m: 1, width: '300px' }} variant="outlined" error={!isFormValid.password}>
        <InputLabel>Şifre</InputLabel>
        <Input
          id="password"
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

      <FormControl className="text-field" sx={{ m: 1, width: '300px' }} variant="outlined" error={!isFormValid.password2}>
        <InputLabel>Şifre Onayı</InputLabel>
        <Input
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.passwordverification}
          onChange={handleChange('passwordverification')}
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
          label="Password2"
        />
      </FormControl>

      <Button onClick={handleSubmit} variant="contained" className="submit-button regiter-button">Kayıt Ol</Button>
      <div onClick={() => { props.handleBanner('left') }} className="login-text">Zaten üye misiniz? Giriş yapmak için tıklayın!</div>
    </div>
  );
}

export default Register;
