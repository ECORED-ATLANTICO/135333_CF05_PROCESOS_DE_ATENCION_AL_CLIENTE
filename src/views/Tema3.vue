<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Impacto

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El impacto se refiere a los efectos reales que generan las acciones, estrategias o procesos sobre los resultados de una organización. Evaluar el impacto permite identificar si las decisiones tomadas cumplen con los objetivos previstos, optimizar recursos y mejorar la eficacia de las estrategias implementadas. Además, ayuda a reconocer oportunidades de mejora, priorizar acciones y orientar las inversiones hacia iniciativas que generen mayor valor para la empresa. En el entorno digital, medir el impacto incluye analizar cómo los visitantes interactúan con el sitio web y qué acciones concretas realizan, lo que permite convertir la información en decisiones estratégicas.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        Separador

        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1 Concepto. 
        .mb-0 

    .bg_img_5.mb-0
      
      .row.justify-content-center.align-items-center.mb-0
        .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema3/img_3.png', class="img-fluid")
        .col-12.col-lg-7.mb-0
          p.mb-0(data-aos="zoom-in-right") El impacto se entiende como la capacidad de una acción o estrategia de producir resultados medibles y relevantes para los objetivos de la organización. Evaluar el impacto combina indicadores cuantitativos, como ventas, registros o descargas, con indicadores cualitativos, como la satisfacción del cliente y la experiencia de usuario. Comprender el impacto facilita la priorización de recursos, la mejora de procesos y la toma de decisiones fundamentadas en datos confiables. De esta manera, la organización puede ajustar sus estrategias de forma continua, fortaleciendo la efectividad de sus acciones y aumentando el retorno de sus inversiones.

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-0

          Separador

          #t_3_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 3.2 Tráfico y resultados
          .mb-0 
        .col-12.col-lg-10.mb-0
          p.mb-0(data-aos="zoom-in-right") La conversión indica cuántos de los visitantes de un sitio web realizan una acción de valor, como una compra, un registro, una descarga o una suscripción. Analizar el tráfico junto con la conversión permite comprender no solo cuántas personas ingresan al sitio, sino también qué tan efectivo es para lograr resultados. Esta medición ayuda a detectar posibles obstáculos en el proceso, mejorar el desempeño de las estrategias digitales y aprovechar mejor los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-3
      .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_4.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        .row.justify-content-center.align-items-center.mb-2
          .col-4.col-lg-2.mb-3.mb-lg-0.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema3/img_5.svg', class="img-fluid p-3")
          .col-12.col-lg-10.mb-0
            p.mb-3(data-aos="zoom-in-right") El análisis del tráfico y la conversión también permite identificar cuáles canales y contenidos generan mejores resultados. Con esta información, la empresa puede enfocar sus esfuerzos en las campañas que ofrecen mayor retorno de inversión (ROI) y ajustar aquellas que no están cumpliendo los objetivos. Además, facilita la segmentación del público y la personalización de la experiencia digital, aumentando las probabilidades de éxito.
        p.mb-0(data-aos="zoom-in-right") Existen diferentes tipos de tráfico web. El tráfico orgánico proviene de buscadores sin necesidad de pago; el tráfico pagado se obtiene mediante anuncios en buscadores o redes sociales; el tráfico directo corresponde a usuarios que escriben la dirección web en el navegador; y el tráfico referido proviene de enlaces ubicados en otros sitios web. Cada tipo aporta información clave sobre el origen de los visitantes y el rendimiento de las estrategias digitales implementadas.
 
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          |    Tipos de tráfico 
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema3/img_6.svg', class="img-fluid d-none d-lg-block", alt="La figura 3 muestra los cuatro tipos  de tráfico web. Texto de la figura: Tipos de tráficos: Tráfico orgánico: visitantes que llegan desde buscadores sin pago. Tráfico pagado: visitantes obtenidos mediante anuncios (SEM, redes sociales). Tráfico directo: usuarios que ingresan directamente escribiendo la URL. Tráfico referido: visitantes que llegan desde otros sitios web o enlaces externos.").mb-5
          img(src='@/assets/curso/tema3/img_7.svg', class="img-fluid d-block d-lg-none", alt="La figura 3 muestra los cuatro tipos  de tráfico web. Texto de la figura: Tipos de tráficos: Tráfico orgánico: visitantes que llegan desde buscadores sin pago. Tráfico pagado: visitantes obtenidos mediante anuncios (SEM, redes sociales). Tráfico directo: usuarios que ingresan directamente escribiendo la URL. Tráfico referido: visitantes que llegan desde otros sitios web o enlaces externos.").mb-5
          figcaption Nota. Sena, 2026.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 La tasa de conversión (Conversion rate, CR) se calcula como:
        .tarjeta.color-acento-contenido-v.tarjeta-formula.p-4
          .d-flex.align-items-center.justify-content-center.fw-bold
            span CR (%) =
            .fraccion.linea-terciaria.mx-3
              span.fraccion__numerador Número de acciones deseadas
              span.fraccion__denominador Número de visitantes
            span x 100
      .col-4.col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img.img-fluid(src='@/assets/curso/tema3/img_8.png', class="img-fluid")
      .col-12.col-lg-3(data-aos="fade-left")
        p.mb-3 #[strong Ejemplo práctico:] Un sitio de e-commerce recibe 20,000 visitantes al mes y 1,500 realizan compras.
        .tarjeta.color-acento-contenido-v.tarjeta-formula.p-4
          .d-flex.align-items-center.justify-content-center.fw-bold
            span CR =
            .fraccion.linea-terciaria.mx-2
              span.fraccion__numerador 1.500
              span.fraccion__denominador 20.000
            span x 100 = 7.5 %

    .row.justify-content-center.align-items-center.mb-4
      .col-3.col-lg-1.mb-3.mb-lg-0.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_9.png', class="img-fluid")
      .col-12.col-lg-7.mb-0
        p.mb-0(data-aos="zoom-in-right") Esto indica que el 7,5 % del tráfico se convierte en ventas. La empresa puede trabajar en optimizar páginas de productos, promociones y UX para aumentar esta tasa.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
        .cajon.color-terciario.p-4
          p.mb-0 El análisis de las métricas de conversión permite evaluar qué tan efectivo es un sitio web para transformar visitantes en acciones concretas de valor. Estas métricas orientan decisiones estratégicas enfocadas en mejorar resultados comerciales y optimizar la experiencia digital.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 7.
          |  Métricas de conversión y acciones estratégicas
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de Chunir Panjon et al., (2024); SENA, 2025.
            thead
              tr
                th.col-auto.col-lg-auto Métrica
                th.col-auto.col-lg-auto Definición
                th.col-auto.col-lg-auto Ejemplo práctico
                th.col-auto.col-lg-auto Acción estratégica
            tbody
              tr
                td.text-start Tasa de conversión.
                td.text-start % de visitantes que realizan la acción deseada.
                td.text-start 7,5 % de visitantes compran.
                td.text-start Mejorar landing page y experiencia de usuario.
              tr
                td.text-start Leads generados.
                td.text-start Número de registros de clientes potenciales.
                td.text-start 300 leads capturados por formulario.
                td.text-start Campañas de seguimiento y nurturing.
              tr
                td.text-start Carrito abandonado.
                td.text-start % de usuarios que no completan la compra.
                td.text-start 25 % de carritos abandonados.
                td.text-start Envío de recordatorios y ofertas.
              tr
                td.text-start Descargas.
                td.text-start Número de recursos descargados.
                td.text-start 500 ebooks descargados.
                td.text-start Optimizar contenido gratuito para captación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .tarjeta.color-terciario-cv.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-7.order-2.order-lg-1(data-aos="zoom-in-right")
              p.mb-3(data-aos="zoom-in-right") Ejemplo práctico integral. Una empresa de software analiza tráfico y conversión:
              ul.list-unstyled.mb-3.ps-4
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span 15.000 visitantes orgánicos, 5.000 pagados.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span 2.000 registros en formularios (leads).
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span 1,000 descargas del ebook promocional.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Tasa de conversión global: 10%.
              p.mb-3(data-aos="zoom-in-right") Con esta información, ajusta campañas pagadas, mejora páginas de aterrizaje y optimiza la oferta de contenido gratuito para aumentar la conversión de visitantes en leads y clientes.
            .col-10.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema3/img_10.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
