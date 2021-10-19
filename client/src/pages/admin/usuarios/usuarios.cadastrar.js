import React, { useState } from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  title: { flexGrow: 1 },
  appBarSpacer: theme.mixins.toolbar,
  content: { flexGrow: 1, height: '100vh', overflow: 'auto' },
  container: { paddingTop: theme.spacing(4), paddingBottom: theme.spacing(4) },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: { width: '100%' },
}));

export default function UsuariosCadastrar() {
  const classes = useStyles();

  const [nome_usuario, setNome_usuario] = useState('');
  const [dataNascimento_usuario, setDataNascimento_usuario] = useState('');
  const [telefone_usuario, setTelefone_usuario] = useState('');
  const [email_usuario, setEmail_usuario] = useState('');
  const [profissao_usuario, setProfissao_usuario] = useState('');
  const [estadoCivil_usuario, setEstadoCivil_usuario] = useState('');
  const [genero_usuario, setGenero_usuario] = useState('');
  const [cpf_usuario, setCpf_usuario] = useState('');
  const [tipo_usuario, setTipo_usuario] = useState('');
  const [endereco_usuario, setEndereco_usuario] = useState('');
  const [senha_usuario, setSenha_usuario] = useState('');


  async function handleSubmit() {

    const data = {nome_usuario: nome_usuario, 
    dataNascimento_usuario: dataNascimento_usuario,
    telefone_usuario: telefone_usuario, 
    email_usuario:email_usuario,
    profissao_usuario:profissao_usuario, 
    estadoCivil_usuario:estadoCivil_usuario,
    genero_usuario:genero_usuario, 
    cpf_usuario:cpf_usuario, 
    tipo_usuario:tipo_usuario,
    endereco_usuario : {cep: setEndereco_usuario, logradouro:setEndereco_usuario, numero:setEndereco_usuario,
    cidade:setEndereco_usuario, estado:setEndereco_usuario },
    senha_usuario:senha_usuario}

    if (nome_usuario !== '' && dataNascimento_usuario !== '' && telefone_usuario !== '' &&
    email_usuario !== '' && profissao_usuario !== '' && estadoCivil_usuario !=='' && cpf_usuario !== '' &
    tipo_usuario !== '' && endereco_usuario !== '' && senha_usuario !== ''){
    
      const response = await api.post('/api/usuarios', data);
      if(response.status===200){
        window.location.href='/admin/usuarios'
      }else{
        alert('Erro ao cadastrar o usuário!');
      }
    }else{
      alert('Por favor, preencha todos os dados!');
    }
    
    
  }
  
  return (
    <div className={classes.root}>
      <MenuAdmin title={'USUÁRIOS'} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Cadastro de Usuários</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nome_usuario"
                      name="nome_usuario"
                      label="Nome Completo"
                      fullWidth
                      autoComplete="nome"
                      value={nome_usuario}
                      onChange={(e) => setNome_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="genero_usuario"> Gênero </InputLabel>
                      <Select
                        labelId="genero_usuario"
                        id="genero_usuario"
                        value={genero_usuario}
                        onChange={(e) => setGenero_usuario(e.target.value)}
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
                      id="dataNascimento_usuario"
                      name="dataNascimento_usuario"
                      label="Data de Nascimento"
                      fullWidth
                      autoComplete="dataNascimento_usuario"
                      value={dataNascimento_usuario}
                      onChange={(e) =>
                        setDataNascimento_usuario(e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="cpf_usuario"
                      name="cpf_usuario"
                      label="CPF"
                      fullWidth
                      autoComplete="cpf_usuario"
                      value={cpf_usuario}
                      onChange={(e) => setCpf_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="estadoCivil_usuario"
                      name="estadoCivil_usuario"
                      label="Estado Civil"
                      fullWidth
                      autoComplete="estadoCivil_usuario"
                      value={estadoCivil_usuario}
                      onChange={(e) => setEstadoCivil_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="profissao_usuario"
                      name="profissao_usuario"
                      label="Profissão"
                      fullWidth
                      autoComplete="profissao_usuario"
                      value={profissao_usuario}
                      onChange={(e) => setProfissao_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="telefone_usuario"
                      name="telefone_usuario"
                      label="Telefone"
                      fullWidth
                      autoComplete="telefone_usuario"
                      value={telefone_usuario}
                      onChange={(e) => setTelefone_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email_usuario"
                      name="email_usuario"
                      label="Email"
                      fullWidth
                      autoComplete="email_usuario"
                      value={email_usuario}
                      onChange={(e) => setEmail_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="tipo_usuario"> Tipo </InputLabel>
                      <Select
                        labelId="tipo_usuario"
                        id="tipo_usuario"
                        value={tipo_usuario}
                        onChange={(e) => setTipo_usuario(e.target.value)}
                      >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Funcionário</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="endereco_usuario.cep"
                      name="endereco_usuario.cep"
                      label="CEP"
                      fullWidth
                      autoComplete="endereco_usuario"
                      value={endereco_usuario.cep}
                      onChange={(e) => setEndereco_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="endereco_usuario.logradouro"
                      name="endereco_usuario.logradouro"
                      label="Logradouro"
                      fullWidth
                      autoComplete="endereco_usuario"
                      value={endereco_usuario.logradouro}
                      onChange={(e) => setEndereco_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="endereco_usuario.numero"
                      name="endereco_usuario.numero"
                      label="Número"
                      fullWidth
                      autoComplete="endereco_usuario"
                      value={endereco_usuario.numero}
                      onChange={(e) => setEndereco_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="endereco_usuario.cidade"
                      name="endereco_usuario.cidade"
                      label="Cidade"
                      fullWidth
                      autoComplete="endereco_usuario"
                      value={endereco_usuario.cidade}
                      onChange={(e) => setEndereco_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="endereco_usuario"> Estado </InputLabel>
                      <Select
                        labelId="endereco_usuario"
                        name= "endereco_usuario.estado"
                        id="endereco_usuario"
                        value={endereco_usuario.estado}
                        onChange={(e) => setEndereco_usuario(e.target.value)}
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
                      id="senha_usuario"
                      name="senha_usuario"
                      label="Senha"
                      fullWidth
                      autoComplete="senha_usuario"
                      value={senha_usuario}
                      onChange={(e) => setSenha_usuario(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <Button color="primary" variant="contained" onClick={handleSubmit}> Salvar </Button>
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
