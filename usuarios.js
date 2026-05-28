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
  { usuario: '0000', senha: '0000', nome: 'Administrador' },
  { usuario: '0391', senha: '0391', nome: 'Adrielia Maria' },
  { usuario: '4308', senha: '4308', nome: 'Alessandra Nogueira' },
  { usuario: '9011', senha: '9011', nome: 'Anderson Pontes' },
  { usuario: '4276', senha: '4276', nome: 'Antonio Adalcle' },

  // Carlos Henrique (2 registros conforme foto)
  { usuario: '5661', senha: '5661', nome: 'Carlos Henrique' },
  { usuario: '0236', senha: '0236', nome: 'Caroline De Sousa' },
  { usuario: '8987', senha: '8987', nome: 'Cynthia Iris' },
  { usuario: '6373', senha: '6373', nome: 'Daniele Marques' },
  { usuario: '0262', senha: '0262', nome: 'Diana Paula' },
  { usuario: '8990', senha: '8990', nome: 'Francisco Emanuel' },
  { usuario: '9342', senha: '9342', nome: 'Francisco Essan' },
  { usuario: '3152', senha: '3152', nome: 'Gerfson Flay' },
  { usuario: '3179', senha: '3179', nome: 'Francisco Geovani' },
  { usuario: '8998', senha: '8998', nome: 'Ingrid Martins' },

  // Mantido apenas 1 José (corrigido duplicidade)
  { usuario: '2044', senha: '2044', nome: 'Jose Willian' },

  { usuario: '9001', senha: '9001', nome: 'Kellyo Kewin' },
  { usuario: '0214', senha: '0214', nome: 'Francisco Matheus' },
  { usuario: '9440', senha: '9440', nome: 'Raymison Lucas' },
  { usuario: '4296', senha: '4296', nome: 'Clecio Roger' },
  { usuario: '4310', senha: '4310', nome: 'Maria Do Socorro' },
  { usuario: '9009', senha: '9009', nome: 'Tainara Stefani' },
  { usuario: '9438', senha: '9438', nome: 'Thaynara Costa' },
  { usuario: '9344', senha: '9344', nome: 'Thais Silva' },
  { usuario: '9356', senha: '9356', nome: 'Vanessa Soares' },
  { usuario: '9356', senha: '6357', nome: 'Waneska Da Silva' },
  { usuario: '9354', senha: '9354', nome: 'Yasmin Diogenes' },
  { usuario: '0515', senha: '0515', nome: 'Maria Zildêna' },

  // NOVOS USUÁRIOS
  { usuario: 'XXXX', senha: 'XXXX', nome: 'Bruno Pinheiro' },
  { usuario: '4278', senha: '4278', nome: 'Renan Henrique' },
  { usuario: '9535', senha: '9535', nome: 'Fabiola Monique' },
  { usuario: '9005', senha: '9005', nome: 'Samuel Peixoto' },
  { usuario: '4059', senha: '4059', nome: 'Letycia Nunes' },
  { usuario: '0431', senha: '0431', nome: 'Francisco de Assis' },
  { usuario: '0387', senha: '0387', nome: 'Adelia Maria' },
  { usuario: '0373', senha: '0373', nome: 'Lays De Freitas' }
];

// Função para validar login (não modificar)
function validarLogin(usuario, senha) {
  const usuarioEncontrado = USUARIOS_SISTEMA.find(
    u => u.usuario === usuario && u.senha === senha
  );
  return usuarioEncontrado || null;
}
