<template>
  <div class="card carta">
    <h2>Mensagem do Presidente</h2>

    <p>Bem-vindo ao Medalhados Expert Club!</p>
    <p>Se você chegou até aqui, já sei duas coisas a seu respeito:</p>
    <ol>
      <li>1) Assim como eu, você é apaixonado por vinhos, quer conhecer cada vez mais sobre o assunto e sempre aprimorar sua capacidade de avaliar.</li>

      <li>2) Recebeu na sua casa duas amostras de vinhos, sem identificação de rótulo, apenas com um código para fazer uma degustação às cegas, como as realizadas nos grandes concursos internacionais dos quais costumo participar.</li>
    </ol>

    <p>Daqui pra frente, você tem dois caminhos a seguir:</p>

    <ol>
      <li>1) Se esta é sua primeira degustação - ou mesmo se quiser recordar - assista a <a v-link="{ name: 'video', params: { id: 'qYN1M9oc8-w' } }">video-aula</a> que preparei especialmente para orientá-lo sobre as técnicas de avaliação de vinhos.</li>
      <li>2) Se já se sente preparado para partir direto para a degustação, vá em frente: <a v-link="{ name: 'fichas' }">digite no campo marcado o código da amostra que irá degustar e acesse a ficha oficial de avaliação</a>. Nela, você encontrará os dados básicos normalmente oferecidos aos jurados e os campos para você dar suas notas sobre os diversos quesitos de avaliação. Se tiver dúvidas sobre o significado de cada quesito, clique no símbolo “?” existente ao lado de cada um.</li>
    </ol>

    <p>Após confirmar suas notas, revelaremos a você tudo sobre o vinho que degustou e, mais uma vez, você terá dois caminhos a seguir:</p>

    <ol>
      <li>1) Se gostou do vinho e achar o preço atraente (e tenho certeza que será), poderá acessar diretamente a loja virtual e fazer seu pedido diretamente para o produtor ou importador do vinho.</li>
      <li>2) Se quiser acompanhar a sua performance de degustador, clique no link “Degustador” no topo da página e acesse uma série de gráficos e dados que permitirão entender o seu nível de precisão e evoluir cada vez mais na técnica de degustação de vinhos.</li>
    </ol>

    <p>E, como se tudo isso não bastasse, o melhor vem agora: se ao longo do tempo, suas notas se mostrarem assertivas e coerentes, prepare-se para participar das degustações da Vinho Magazine, do Wine Weekend e outros grandes concursos nacionais e internacionais, como meu convidado especial.</p>
    <p>Estou torcendo por você!</p>

    <div class="signature">
      <figure>
        <img src="/static/img/signature.png">
        <figcaption>Eduardo Virotti</figcaption>
      </figure>
    </div>

    <!--<footer>-->
      <!--<ui-button v-link="{ name: 'video', params: { id: 'qYN1M9oc8-w' } }">Video Aula</ui-button>-->
      <!--<ui-button v-link="{ path: 'fichas' }">Ficha</ui-button>-->
    <!--</footer>-->
  </div>
</template>

<script>
  export default {
    props: {
      vinho: {}
    }
  }
</script>

<style lang="stylus">
  .carta
    background white
    width 650px
    padding 50px
    margin 0 auto 50px auto
    a
      color crimson
      font-weight 700
    h2, p, li
      margin 0 0 15px 0
      line-height 1.5em
      white-space pre-wrap
    .signature
      text-align right
      margin-bottom 20px
      figure
        display inline-block
        text-align center
      img
        height 70px
      figcaption
        width 100%
        text-align center
        padding 5px 0 0 0
        border-top 1px solid black
    footer
      width 100%
      padding 0
    .ui-button
      margin-left 15px
</style>