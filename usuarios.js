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
];

// Função para validar login (não modificar)
function validarLogin(usuario, senha) {
  const usuarioEncontrado = USUARIOS_SISTEMA.find(
    u => u.usuario === usuario && u.senha === senha
  );
  return usuarioEncontrado || null;
}
