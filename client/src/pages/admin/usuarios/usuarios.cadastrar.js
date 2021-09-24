import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import  Paper  from '@material-ui/core/Paper';

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
}));

export default function Dashboard() {
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="nome"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="genero"
                    name="genero"
                    label="Genero"
                    fullWidth
                    autoComplete="genero"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="dataNascimento"
                    name="dataNascimento"
                    label="Data de Nascimento"
                    fullWidth
                    autoComplete="dataNascimento"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="estadoCivil"
                    name="estadoCivil"
                    label="Estado Civil"
                    fullWidth
                    autoComplete="estadoCivil"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="profissao"
                    name="profissao"
                    label="Profissão"
                    fullWidth
                    autoComplete="profissao"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                    fullWidth
                    autoComplete="telefone"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="tipo"
                    name="tipo"
                    label="Tipo"
                    fullWidth
                    autoComplete="tipo"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="senha"
                    name="senha"
                    label="Senha"
                    fullWidth
                    autoComplete="senha"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    fullWidth
                    autoComplete="cpf"
                  />
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
