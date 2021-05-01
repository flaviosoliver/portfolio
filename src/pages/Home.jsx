import React, { Component } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import CarouselImg from '../components/CarouselImg';
import devDark from '../images/devDark.png';
import '../css/Home.css';
import '../css/Mobile.css';

export default class Home extends Component {
  render() {
    return (
      <main>
        <aside className="aside">
          <Aside />
        </aside>
        <div className="content">
          <header className="header">
            <Header />
          </header>
          <div className="cover">
            <img src={devDark} alt="devDark" />
          </div>
          <section className="article">
            <article>
              <br />
              <h3 id="sobre">
                <font className="caption">
                  Sobre mim:
                </font>
                <br />
              </h3>
              <p>
                Brasileiro, nascido em Brasília-DF, <strong><font color="#1E90FF">baiano de sangue, raiz e coração.</font></strong> Moro em Barreiras, região Oeste da Bahia, onde sigo cada vez  apaixonado por tecnologia e em busca de novidades na área. Com o sonho de me tornar Desenvolvedor, embarquei junto a <strong><font color="#1E90FF">Trybe</font></strong> em Junho de 2020, fazendo desse, o pontapé inicial nessa longa caminhada em busca de muito conhecimento e conquistas.<br />Atualmente como servidor público concursado lotado no TRE-BA, com experiência em suporte de TI em lojas comerciais, incluindo montagem, manutenção e configuração de microcomputadores e redes, professor de Informática no SESI-BA, além do desempenho de funções nas áreas Administrativas e Departamentos de Informática.
              </p>
              <br />
            </article>
          </section>
          <section>
            <article>
              <h3 id="habilidades">
                <font className="caption">
                  Habilidades - Soft e Hard Skills:
                </font>
                <br />
              </h3>
              <ul>
                <li>
                  <strong><font color="#1E90FF">Gosto de aprender novos conhecimentos;</font></strong>
                </li>
                <li>Foco;</li>
                <li>Facilidade de aprendizado;</li>
                <li>
                  <strong><font color="#1E90FF">Proatividade;</font></strong>
                </li>
                <li>Liderança;</li>
                <li>Conhecimento na área de Suporte de TI;</li>
                <li>Inglês básico (compreensão de texto escrito);</li>
                <li>
                  Atualmente estudando e aprimorando conhecimentos a cerca da profissão de <strong><font color="#1E90FF">Desenvolvedor Web Full Stack</font></strong> na <strong><font color="#1E90FF">Trybe </font></strong><em><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/betrybe/">@betrybe</a></em>: Unix Shell, Visual Studio Code, Git, GitHub, Html, JavaScript, Node.JS, Phyton, Front End e afins.
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article>
              <h3 id="projetos">
                <font className="caption">
                  Projetos Desenvolvidos:
                </font>
                <br />
              </h3>
              <CarouselImg />
            </article>
          </section>
          <br />
          <section>
            <article>
              <h3 id="conteudo">
                <font className="caption">
                  Conteúdo que Recomendo - Informação e Humor no Mundo da TI:
                </font>
                <br />
              </h3>
              <h4>
                <font className="caption-sub">
                  Sites:
                </font>
                <br />
              </h4>
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://canaltech.com.br/">Canal Tech</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://olhardigital.com.br/">Olhar Digital</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://sempreupdate.com.br/">Sempre Update</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://tableless.com.br/">Tableless</a>
                </li>
              </ul>
              <h4>
                <font className="caption-sub">
                  Canais do Youtube:
                </font>
                <br />
              </h4>
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/codigofontetv">Código Fonte TV</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/FabioAkita1990">Fabio Akita</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/FilipeDeschamps">Filipe
                    Deschamps</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/Programadorbr">Programador Br</a>
                </li>
            </ul>
            <h4>
              <font className="caption-sub">
                PodCasts Spotify:
              </font>
              <br />
            </h4>
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/2BQichCuadNprsfp2uOwor?si=pJqrmHuCSD6vL2AGNZCmIg">Área
                    de Transferência</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/0LvIvCZfntBuZOpOEhTU0K?si=QzV8FqoJRsqTnZDv-oMvnQ">Braincast</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/7lH2cFDu0F1K65Jc4Vyz5T?si=Q1wxnRjgTa6VVs0QdLINaQ">Dev
                    Arretado Cast</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/48gK33FI19AnanSRKhSuoQ?si=RgjI2MgdQ-G3IlRJSm8e6w">DevCast</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/1yQ2qrscxoTmdUvZgMoY4a?si=n39qfVooQqK7AXumMij_Eg">DevNaEstrada</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/23i8gD31xHrmPllTm0d3re?si=XrDs9kBtRDCxBWT_1mL_zQ">DevPro</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/7gNryNpuHuhZTwfbCdiOqL?si=y7ZOgnmQRP-iTVXZSlpPdw">Devs
                    Cansados</a></li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/2p0Vx75OmfsXktyLBuLuSf?si=UeChlGjeTLalCXN__L8rtg">Hipsters
                    Ponto Tech</a></li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/4sKgJqaCEQdUECeCViknr5?si=buniJLRNRhCtL6KJOy-mOg">Loop
                    Matinal</a></li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/084hQAwpMi4PcidWPsO2fY?si=jOp-2uKrQGi-JIBP4UmoLQ">Tecnocast</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer"
                  href="https://open.spotify.com/show/2dK6bnbumjpnsnX8JMCxEH?si=y-Zh0ayKQ5WB7VoQGS4cRw">Tecnocracia</a>
                </li>
                <li> <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/20r428151ZckHf771Lblh3?si=QHEQqW7_Ru21Td2Y_C80NA">TOTVS
                    Developers Podcast</a></li>
                <li> <a target="_blank" rel="noopener noreferrer"
                    href="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=QzvKBd4iSoqGXiv-5Llg6g">ZOFE
                    - Zone Of Front-Enders</a>
                </li>
              </ul>
              <h4>
                <font className="caption-sub">
                  Para Sorrir:
                </font>
                <br />
              </h4>     
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_compiler._/">_compiler._</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.vidadeprogramador.com.br/">Vida de Programador</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://vidadesuporte.com.br/">Vida de Suporte</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </main>
    );
  }
}