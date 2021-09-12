import React from "react";
import Header from "../../common/header/header";
import Paragraph from "../../common/paragraph/paragraph";
import './about.scss';

class About extends React.Component {
  render() {
    return (
      <div id="sobre" className="component__block">
        <Header value='Sobre' />
        <Paragraph value='Olá, sou Michael Nakashima, Front-End Developer, Maranhese no sangue e Mineiro de coração, comecei minha carreira desenvolvendo aplicações no já distante Delphi 6 e naquela época já sabia que não era minha vibe.<br><br>Desenvolvendo aplicacões utilizando Flash / ActionScript para uma empresa pioneira no ramo de Ensino a Distância, foi a porta de entrada para a área de Front End, onde atuei à partir de 2012 convertendo cursos em Flash para HTML / CSS / Javascript, desde então em uma eterna lua de mel com essas tecnologias.<br><br>Trabalhei em uma gigante do ramo de Tecnologia, incialmente como Front End, desenvolvendo aplicativos, sistemas e interfaces para o maior portal de empreendedorismo do Brasil, fui Scrum Master de duas Squads, usando o Scrum para desenvolver soluções e aplicar o ágil, disseminando a cultura e premissas do mesmo.<br><br>Atualmente como Front End, sou responsável por desenvolver uma plataforma intuitiva e poderosa para o desenvolvimento de contatos inteligentes (chatbots), onde grandes empresas de vários ramos automatizam e facilitam a conexão entre marca e usuário.' />
      </div>
    );
  }
}

export default About;
