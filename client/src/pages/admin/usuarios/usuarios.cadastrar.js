import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import  Paper  from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl:{
    width:'100%'
  }
}));

export default function UsuariosCadastrar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuAdmin title={'USUÁRIOS'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Formulário de Cadastro</h2>
                <Grid container spacing ={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="nome"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="genero"> Gênero </InputLabel>
                    <Select
                      labelId="genero"
                      id="endereco_usuario"
                      //value={endereco_usuario}
                      //onChange={e => set(e.target.value)}
                    >
                      <MenuItem value={1}>Homem Cisgênero</MenuItem>
                      <MenuItem value={2}>Mulher Cisgênero</MenuItem>
                      <MenuItem value={3}>Mulher Trans</MenuItem>
                      <MenuItem value={4}>Homem Trans</MenuItem>
                      <MenuItem value={5}>Travesti</MenuItem>
                      <MenuItem value={6}>Transexual</MenuItem>
                      <MenuItem value={7}>Queer</MenuItem>
                      <MenuItem value={8}>Não-binário</MenuItem>
                      <MenuItem value={9}>Gênero Fluído</MenuItem>
                      <MenuItem value={10}>Transgênero</MenuItem>
                      <MenuItem value={11}>Prefiro não responder</MenuItem>
                      <MenuItem value={12}>Outro / outra</MenuItem>
                      </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="dataNascimento"
                    name="dataNascimento"
                    label="Data de Nascimento"
                    fullWidth
                    autoComplete="dataNascimento"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    fullWidth
                    autoComplete="cpf"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="estadoCivil"
                    name="estadoCivil"
                    label="Estado Civil"
                    fullWidth
                    autoComplete="estadoCivil"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="profissao"
                    name="profissao"
                    label="Profissão"
                    fullWidth
                    autoComplete="profissao"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                    fullWidth
                    autoComplete="telefone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="tipo"
                    name="tipo"
                    label="Tipo"
                    fullWidth
                    autoComplete="tipo"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="endereco_usuario"
                    name="endereco_usuario"
                    label="CEP"
                    fullWidth
                    autoComplete="endereco_usuario"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="endereco_usuario"
                    name="endereco_usuario"
                    label="Logradouro"
                    fullWidth
                    autoComplete="endereco_usuario"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="endereco_usuario"
                    name="endereco_usuario"
                    label="Número"
                    fullWidth
                    autoComplete="endereco_usuario"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="endereco_usuario"
                    name="endereco_usuario"
                    label="Cidade"
                    fullWidth
                    autoComplete="endereco_usuario"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="endereco_usuario"> Estado </InputLabel>
                    <Select
                      labelId="endereco_usuario"
                      id="endereco_usuario"
                      //value={endereco_usuario}
                      //onChange={e => set(e.target.value)}
                    >
                      <MenuItem value={1}>Acre</MenuItem>
                      <MenuItem value={2}>Alagoas</MenuItem>
                      <MenuItem value={3}>Amapá</MenuItem>
                      <MenuItem value={4}>Amazonas</MenuItem>
                      <MenuItem value={5}>Bahia</MenuItem>
                      <MenuItem value={6}>Ceará</MenuItem>
                      <MenuItem value={7}>Distrito Federal</MenuItem>
                      <MenuItem value={8}>Espirito Santo</MenuItem>
                      <MenuItem value={9}>Goiás</MenuItem>
                      <MenuItem value={10}>Maranhão</MenuItem>
                      <MenuItem value={11}>Mato Grosso</MenuItem>
                      <MenuItem value={12}>Mato Grosso do Sul</MenuItem>
                      <MenuItem value={13}>Minas Gerais</MenuItem>
                      <MenuItem value={14}>Pará</MenuItem>
                      <MenuItem value={15}>Paraiba</MenuItem>
                      <MenuItem value={16}>Paraná</MenuItem>
                      <MenuItem value={17}>Pernambuco</MenuItem>
                      <MenuItem value={18}>Piauí</MenuItem>
                      <MenuItem value={19}>Rio de Janeiro</MenuItem>
                      <MenuItem value={20}>Rio Grande do Norte</MenuItem>
                      <MenuItem value={21}>Rio Grande do Sul</MenuItem>
                      <MenuItem value={22}>Rondônia</MenuItem>
                      <MenuItem value={23}>Roraima</MenuItem>
                      <MenuItem value={24}>Santa Catarina</MenuItem>
                      <MenuItem value={25}>São Paulo</MenuItem>
                      <MenuItem value={26}>Sergipe</MenuItem>
                      <MenuItem value={27}>Tocantins</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="password"
                    required
                    id="senha"
                    name="senha"
                    label="Senha"
                    fullWidth
                    autoComplete="senha"
                  />
                </Grid>
                
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
