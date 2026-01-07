// ============================================
// ARQUIVO DE CREDENCIAIS - USUÁRIOS DO SISTEMA
// ============================================
// Para adicionar novos usuários, copie o modelo abaixo:
// { usuario: 'XXXX', senha: 'XXXX', nome: 'NOME DO OPERADOR' },
//
// IMPORTANTE:
// - Usuário: 4 dígitos numéricos
// - Senha: 4 dígitos numéricos
// - Nome: Nome que será exibido após login
// ============================================

const USUARIOS_SISTEMA = [
  { usuario: '4321', senha: '4321', nome: 'ADMINISTRADOR' },

  { usuario: '9354', senha: '9354', nome: 'Yasmin' },
  { usuario: '0262', senha: '0262', nome: 'Diana' },
  { usuario: '9009', senha: '9009', nome: 'Tainara' },
  { usuario: '8998', senha: '8998', nome: 'Ingrid' },
  { usuario: '4276', senha: '4276', nome: 'Antônio' },
  { usuario: '0214', senha: '0214', nome: 'Matheus' },
  { usuario: '5661', senha: '5661', nome: 'Carlos' },
  { usuario: '8990', senha: '8990', nome: 'Emanuel' },

  { usuario: '0236', senha: '0236', nome: 'Caroline' },
  { usuario: '9440', senha: '9440', nome: 'Raymison' },
  { usuario: '3991', senha: '3991', nome: 'Willian' },
  { usuario: '3179', senha: '3179', nome: 'Geovani' },
  { usuario: '9342', senha: '9342', nome: 'Essan' },
  { usuario: '9011', senha: '9011', nome: 'Anderson' },
  { usuario: '0457', senha: '0457', nome: 'Lucas' },
  { usuario: '4308', senha: '4308', nome: 'Alessandra' },
  { usuario: '9001', senha: '9001', nome: 'Kellyo' },
  { usuario: '4296', senha: '4296', nome: 'Roger' }
];

// Função para validar login (não modificar)
function validarLogin(usuario, senha) {
  const usuarioEncontrado = USUARIOS_SISTEMA.find(
    u => u.usuario === usuario && u.senha === senha
  );
  return usuarioEncontrado || null;
}
