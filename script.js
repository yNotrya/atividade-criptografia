// =======================
// CHAVE SIMÉTRICA (AES)
// =======================

const scriptAES = document.createElement("script");
scriptAES.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
document.head.appendChild(scriptAES);

function criptografarSim() {
  const texto = document.getElementById("textoSim").value;
  const chave = document.getElementById("chaveSim").value;

  if (!texto || !chave) {
    alert("Preencha o texto e a chave.");
    return;
  }

  const criptografado = CryptoJS.AES.encrypt(texto, chave).toString();
  document.getElementById("saidaSim").value = criptografado;
}

function descriptografarSim() {
  const texto = document.getElementById("saidaSim").value;
  const chave = document.getElementById("chaveSim").value;

  if (!texto || !chave) {
    alert("Preencha o campo criptografado e a chave.");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(texto, chave);
    const original = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("saidaSim").value = original || "[Chave incorreta]";
  } catch (e) {
    document.getElementById("saidaSim").value = "[Erro ao descriptografar]";
  }
}

// =======================
// CHAVE ASSIMÉTRICA (RSA)
// =======================

let rsa = new JSEncrypt();
let chavePrivada = "";
let chavePublica = "";

// Gera as chaves públicas e privadas
function gerarChavesRSA() {
  rsa = new JSEncrypt({ default_key_size: 2048 });
  rsa.getKey(); // força geração das chaves
  chavePrivada = rsa.getPrivateKey();
  chavePublica = rsa.getPublicKey();
  alert("Chaves RSA geradas com sucesso!");
}

// Criptografa com a chave pública
function criptografarRSA() {
  const texto = document.getElementById("textoRSA").value;

  if (!chavePublica) {
    alert("Clique em 'Gerar Chaves' antes de criptografar.");
    return;
  }

  const rsaCripto = new JSEncrypt();
  rsaCripto.setPublicKey(chavePublica);
  const cifrado = rsaCripto.encrypt(texto);

  if (!cifrado) {
    alert("Erro ao criptografar. O texto pode estar muito grande.");
    return;
  }

  document.getElementById("saidaRSA").value = cifrado;
}

// Descriptografa com a chave privada
function descriptografarRSA() {
  const texto = document.getElementById("saidaRSA").value;

  if (!chavePrivada) {
    alert("Gere as chaves primeiro para descriptografar.");
    return;
  }

  const rsaDescripto = new JSEncrypt();
  rsaDescripto.setPrivateKey(chavePrivada);
  const decifrado = rsaDescripto.decrypt(texto);

  document.getElementById("saidaRSA").value = decifrado || "[Erro ao descriptografar]";
}
