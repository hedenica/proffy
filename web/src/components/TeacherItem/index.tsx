import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/56850413?s=460&u=21eee89a16c2735be9ac25bdb956bde0a359a5f8&v=4" alt="Denny"/>
      <div>
        <strong>Hedênica Morais</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br /><br />
      Maiores dolor, asperiores tempore ipsa hic unde rem temporibus 
      necessitatibus vopsa hic unde rem temporibus 
      necessitatibus voluptas aliquid ut eius. Vitae, repudiandae ex.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>

  </article>
  )
}

export default TeacherItem;