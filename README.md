# 🔐 Projeto de Criptografia Simples (AES + RSA)

Este projeto tem como objetivo demonstrar, de forma prática e acessível, o funcionamento de dois tipos de criptografia:

- **Chave Simétrica (AES)**
- **Chave Assimétrica (RSA)**

A aplicação foi desenvolvida em **HTML + JavaScript** e pode ser testada diretamente no navegador, sem instalação de bibliotecas externas (as bibliotecas são carregadas por CDN).

---

## 🛠️ Tecnologias utilizadas

- HTML5
- JavaScript (puro)
- [CryptoJS](https://cdnjs.com/libraries/crypto-js) para criptografia simétrica (AES)
- [JSEncrypt](https://github.com/travist/jsencrypt) para criptografia assimétrica (RSA)

---

## 📌 Como usar

1. **Clone ou baixe o repositório.**
2. **Abra o arquivo `index.html`** no seu navegador (pode usar Live Server no VS Code).
3. **Teste as duas formas de criptografia.**

---

### 🔑 Criptografia Simétrica (AES)

- Digite o texto que deseja cifrar.
- Digite uma **chave secreta** (pode ser uma palavra qualquer).
- Clique em **"Criptografar"**.
- O resultado aparecerá no campo abaixo.
- Clique em **"Descriptografar"** para ver o texto original (usando a mesma chave).

> AES usa **uma única chave** para criptografar e descriptografar.

---

### 🔐 Criptografia Assimétrica (RSA)

- Clique em **"Gerar Chaves"** para criar uma chave pública e privada.
- Digite o texto (curto!) que deseja criptografar.
- Clique em **"Criptografar"**.
- O texto cifrado aparecerá no campo abaixo.
- Clique em **"Descriptografar"** para ver o texto original.

> RSA usa **duas chaves diferentes**: uma pública (para cifrar) e outra privada (para decifrar). O RSA só funciona com textos curtos (recomendado até 100 caracteres).

---

## ✅ Exemplo de uso

```plaintext
Texto: Olá mundo!
Chave AES: minhaSenha123
Resultado: U2FsdGVkX1+sP...

Texto: te
RSA: (gera as chaves primeiro)
Resultado: WklwdDhPd1F...
