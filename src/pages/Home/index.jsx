import React from 'react';
import { Aside, Header, CarouselImg, Footer, Contact }  from '../../components';
import devDark from '../../images/devDark.png';
import bannerPortfolioDark from '../../images/bannerPortfolioDark.png';
import './Home.css';
import '../../css/Mobile.css';
import '../../components/Footer/Footer.css';

export default function Home() {
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
          <img src={bannerPortfolioDark} alt="devDark" />
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
              Brasileiro, nascido em Brasília-DF e
              {' '}
              <strong><font color="#1E90FF">baiano de sangue, raiz e coração.</font></strong>
              {' '}
              Moro em Barreiras, região Oeste da Bahia, onde sigo cada vez  apaixonado por tecnologia e em busca de novidades na área. Com o sonho de me tornar Desenvolvedor, embarquei junto a
              {' '}
              <strong><font color="#1E90FF">Trybe</font></strong>
              {' '}
              em Junho de 2020, fazendo desse, o pontapé inicial nessa longa caminhada em busca de muito conhecimento e conquistas.
              <br />
              Já fui servidor público concursado lotado no TRE-BA, com experiência em suporte de TI em lojas comerciais, incluindo montagem, manutenção e configuração de microcomputadores e redes, professor de Informática no SESI-BA, além do desempenho de funções nas áreas Administrativas e Departamentos de Informática.
              <br />
              Com dois anos de experiência profissional como Desenvolvedor, fui integrante do time de desenvolvimento de uma ferramenta de comunicação na EdTech brasileira <strong>amais educação</strong>, <a target="_blank" href="https://www.amaiseducacao.com.br/solucoes/agendamais/" rel="noreferrer">Agenda+. </a>
              Onde através de <strong><font color="#1E90FF">metodologias ágeis Scrum e Kanban</font></strong>, empregamos como linguagem de desenvolvimento <strong><font color="#1E90FF">TypeScript</font></strong>, front-end em <strong><font color="#1E90FF">Angular</font></strong>, back-end em <strong><font color="#1E90FF">NodeJS</font></strong> com <strong><font color="#1E90FF">NestJS</font></strong>, ODM com <strong><font color="#1E90FF">Mongoose</font></strong> e banco de dados não relacional (NoSQL) <strong><font color="#1E90FF">MongoDb</font></strong>.
              Nesse período pude contribuir diretamente na melhoria do código, tratamento de situações legadas, scripts de manutenção no banco de dados, melhorias em processos internos e documentação da aplicação.
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
                <strong><font color="#1E90FF">Desenvolvedor Web Full Stack</font></strong> pela <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/betrybe/">Trybe</a>:
              </li>
              <ul>
                <li>
                  <strong>Módulo IV - Ciência da Computação:</strong><br />
                  Conhecimentos em: Python, POO, Algoritmos e Complexidade, Estrutura de Dados e Resolução de Problemas.
                </li>
                <li>
                  <strong>Módulo III - Back-End:</strong><br />
                  Conhecimento em: Banco de Dados SQL e NoSQL, Node e ExpressJS, MVC, API, REST, JWT e File Upload, SOLID, ORM, Sockets e deploy com Heroku.
                </li>
                <li>
                  <strong>Módulo II - Front-End:</strong><br />
                  Conhecimentos em: React.JS com Componentes, Estados e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes RTL, Redux, ContextAPI e Hooks.
                </li>
                <li>
                  <strong>Módulo I - Fundamentos do Dev Web:</strong><br />
                  Conhecimentos em: Unix & Bash, Git & Internet, JavaScript e DOM, HTML & CSS Avançado e JS Avançado & Testes Unitários.
                </li>
              </ul>
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
            <div className="recommendations">
              <div className="card-recommendations">
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
            </div>
            <div className="card-recommendations">
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
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/FilipeDeschamps"> Filipe Deschamps</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/Programadorbr">Programador Br</a>
                </li>
              </ul>
            </div>
            <div className="card-recommendations">
              <h4>
                <font className="caption-sub">
                  PodCasts Spotify:
                </font>
                <br />
              </h4>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/2BQichCuadNprsfp2uOwor?si=pJqrmHuCSD6vL2AGNZCmIg"
                  >
                    Área de Transferência
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/0LvIvCZfntBuZOpOEhTU0K?si=QzV8FqoJRsqTnZDv-oMvnQ"
                  >
                    Braincast
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/7lH2cFDu0F1K65Jc4Vyz5T?si=Q1wxnRjgTa6VVs0QdLINaQ"
                  >
                    Dev Arretado Cast
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/48gK33FI19AnanSRKhSuoQ?si=RgjI2MgdQ-G3IlRJSm8e6w"
                  >
                    DevCast
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/1yQ2qrscxoTmdUvZgMoY4a?si=n39qfVooQqK7AXumMij_Eg"
                  >
                    DevNaEstrada
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/23i8gD31xHrmPllTm0d3re?si=XrDs9kBtRDCxBWT_1mL_zQ"
                  >
                    DevPro
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/7gNryNpuHuhZTwfbCdiOqL?si=y7ZOgnmQRP-iTVXZSlpPdw"
                  >
                    Devs Cansados
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/2p0Vx75OmfsXktyLBuLuSf?si=UeChlGjeTLalCXN__L8rtg"
                  >
                    Hipsters Ponto Tech
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/4sKgJqaCEQdUECeCViknr5?si=buniJLRNRhCtL6KJOy-mOg"
                  >
                    Loop Matinal
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/084hQAwpMi4PcidWPsO2fY?si=jOp-2uKrQGi-JIBP4UmoLQ"
                  >
                    Tecnocast
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/2dK6bnbumjpnsnX8JMCxEH?si=y-Zh0ayKQ5WB7VoQGS4cRw"
                  >
                    Tecnocracia
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/20r428151ZckHf771Lblh3?si=QHEQqW7_Ru21Td2Y_C80NA"
                  >
                    TOTVS Developers Podcast
                  </a>
                </li>
                <li>
                  {' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://open.spotify.com/show/13Q4XtzJ1tSZ7trS4dSOf6?si=QzvKBd4iSoqGXiv-5Llg6g"
                  >
                    ZOFE - Zone Of Front-Enders
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-recommendations">
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
              </div>
            </div>
          </article>
        </section>
      {/* <div className="contact-container" id="contato">
        <Contact />
      </div> */}
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
