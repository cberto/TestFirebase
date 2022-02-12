import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';

const style ={
    paper:{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alingItems:"center"
    },
    avatar :{
        margin:8,
        backgroundColor: "#e53935"
    },
    form:{
        width:"100%",
        marginTop: 10
    },
    submit:{
        marginTop:15,
        marginBottom: 20
    }
}

class RegisterUsers extends Component {

    state ={
        usuario:{

            name:'',
            surname:'',
            email:'',
            password:'',
        }
    }

onChange = e =>{
    let usuario = Object.assign({}, this.state.usuario);
    usuario[e.target.name] = e.target.value;
    this.setState({usuario: usuario});
}
registerUser = e =>{
    e.preventDefault();
    console.log('Imprimer objeto usuario', this.state.usuario);
}

    render() {
        return (
            <div>
                <Container maxWidth="md">
                    <div style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOutLineIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Registre su cuenta
                        </Typography>
                        <form style={style.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <TextField name="name"  onChange={this.onChange} value={this.state.usuario.name} fullWidth label="Ingrese su nombre"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                <TextField item name="surname" onChange={this.onChange} value={this.state.usuario.surname}  fullWidth label="Ingrese su apellido"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                <TextField item  name="email" onChange={this.onChange} value={this.state.usuario.email}  fullWidth label="Ingrese su correo"/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                <TextField type="password"  name="password" onChange={this.onChange}  item  value={this.state.usuario.password}  fullWidth label="Ingrese su contraseña"/>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                            <Grid item md={6} xs={12}> 
                           
                            <Button type="submit" onClick={this.registerUser} variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                            Registrar
                             </Button>
                            </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RegisterUsers;