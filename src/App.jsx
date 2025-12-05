import style from "./App.module.css";

import fotoMusica from "/naMoral.jpg"

function App() {
  return (
    <>
      <nav className={style.menu}>
        <a href="#s1">Letra</a>
        <a href="#s2">Significado</a>
      </nav>

      <section id="s1" className={style.s1}>
        <h2 className={style.NomeMusica}>Namoral Cansei</h2>
        <h3 className={style.nomeCompositor}>Tavin</h3>
        <h4 className={style.img}>
          <img src={fotoMusica} alt="Foto da Musica" />
        </h4>
        <p className={style.p1}>
          Na moral, cansei, minha vida tá complicada <br /> Minha mãe reclama
          que só ela faz tudo em casa
          <br /> Minha professora quer me estudar pela NASA
          <br /> Ontem eu levei a filha dela como lição de casa
        </p>

        <p className={style.p2}>
          Meu pai, anda muito ocupado no trampo <br /> Minha vó é preocupada e
          quer saber por onde eu ando <br /> Acha que eu virei noia e que agora
          eu tô fumando <br /> Mas se eu fumasse, foda-se, ninguém ia tá ligando
        </p>

        <p className={style.p3}>
          Meus fãs, dizem que eu tô abandonando o rap <br /> O Sid quer me
          demitir porque eu sou um moleque <br />
          Eu entro no estúdio com o Ciro e meto uma diss track <br /> E boto na
          conta da bendita cinco Big Mac
        </p>

        <p className={style.p4}>
          Acho que, depois disso, esse é meu último som <br />O Ciro sempre fala
          que minha voz tá fora do tom
          <br /> E que o sample do Nissin Ourfali não fica bom
          <br /> Porra, só confia no pai que nisso aqui eu tenho dom
        </p>

        <p className={style.p5}>
          Porque eu sou um garoto especial Com cara de menino de comercial{" "}
          <br /> Que não tá nem ligando pro colegial
          <br /> E dizem que adolescente é sempre igual
        </p>

        <p className={style.p6}>
          Mas eu sou um garoto especial <br />
          Com cara de menino de comercial <br /> Que não tá nem ligando pro
          colegial <br /> E dizem que adolescente é sempre igual
        </p>

        <p className={style.p7}>
          O público acha que eu tenho mó cara de rico <br /> Mas eu sou
          sofredor, meu banheiro não tem pinico <br />
          Minha família é só pérola, igual loja de brinco <br /> Eu tenho um
          primo alcoólatra e o outro é talarico <br /> Eu já fiz merda pra uns
          MCs <br /> Eu não sei como ainda não tomei diss <br /> Ou são muito
          gente boa ou não quis <br /> Mas quem não gosta de mim, c’mon, give me
          a kiss
        </p>

        <p className={style.p8}>
          Meu prod. Ciro finge ser gringo no Instagram <br />
          Gama em mina asiática e sonha em ser um onii-chan <br /> Tô escrevendo
          essa letra 5: 30 da manhã <br />
          Depois de lançar isso, eu vou ser caçado até no Irã
        </p>

        <p className={style.p9}>
          Porque eu sou um garoto especial <br /> Com cara de menino de
          comercial <br /> Que não tá nem ligando pro colegial <br /> E dizem
          que adolescente é sempre igual
        </p>

        <p className={style.p10}>
          Mas eu sou um garoto especial <br /> Com cara de menino de comercial{" "}
          <br /> Que não tá nem ligando pro colegial <br /> E dizem que
          adolescente é sempre igual
        </p>
      </section>

      <section id="s2" className={style.s2}>
        <h3 className={style.Titulo2}>
          Humor e critica jovem em "Namoral Cansei" de Tavin
        </h3>
        <p className={style.p11}>
          Em "Namoral Cansei", Tavin utiliza o humor autodepreciativo para
          transformar situações cotidianas e dilemas pessoais em piada,
          abordando temas como pressão familiar, expectativas sociais e as
          dificuldades de ser jovem. O verso “Minha mãe reclama que só ela faz
          tudo em casa / Minha professora quer me estudar pela NASA / Ontem eu
          levei a filha dela como lição de casa” ilustra bem esse tom irônico,
          misturando exagero e sarcasmo para retratar cobranças e pequenas
          rebeldias do dia a dia. O uso do sample de “What Makes You Beautiful”
          da One Direction adiciona uma camada nostálgica e brinca com o
          contraste entre o pop adolescente e o rap, reforçando o clima leve e
          descontraído da música.
        </p>

        <p className={style.p12}>
          Tavin também faz piada com críticas que recebe, como em “O Ciro sempre
          fala que minha voz tá fora do tom / E que o sample do Nissin Ourfali
          não fica bom”. As menções ao produtor Ciro fingindo ser gringo e
          sonhando em ser “onii-chan” (irmão mais velho em japonês) trazem
          autenticidade e mostram o quanto o artista se diverte com as
          peculiaridades do seu círculo social. Ao repetir “sou um garoto
          especial / com cara de menino de comercial / que não tá nem ligando
          pro colegial”, Tavin ironiza o estereótipo do adolescente desleixado,
          mas também faz uma crítica à padronização das experiências juvenis. No
          fim, "Namoral Cansei" é um desabafo bem-humorado sobre as pressões de
          crescer, mantendo leveza e identificação com quem passa por situações
          parecidas.
        </p>
      </section>
    </>
  );
}

export default App;
