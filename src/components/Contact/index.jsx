import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="container">
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." />

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" />

        <label htmlFor="anexo">Anexo</label>
        <input type="file" id="anexo" name="anexo" />
        <div className="submit-container">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}
