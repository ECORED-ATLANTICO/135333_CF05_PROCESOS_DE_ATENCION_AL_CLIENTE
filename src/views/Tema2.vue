<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métricas de seguimiento web

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Medir el desempeño digital es clave para comprender cómo interactúan los usuarios con una marca y para tomar decisiones estratégicas basadas en datos reales. Las métricas web permiten evaluar la efectividad de campañas, identificar oportunidades de mejora, optimizar el tráfico y la conversión, y garantizar que los objetivos digitales se cumplan de manera eficiente.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        Separador

        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Medición 
        .mb-0 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_2.png', class="img-fluid")
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        p.mb-0 La medición consiste en determinar de manera objetiva los resultados obtenidos frente a los objetivos establecidos. Los KPI proporcionan un marco para cuantificar el desempeño y comparar resultados históricos, metas planificadas o benchmarks del sector. Su uso permite evaluar la efectividad de campañas digitales, procesos internos, niveles de satisfacción del cliente y otros factores estratégicos de la organización. Además, facilitan la identificación de desviaciones y la implementación de acciones correctivas oportunas, consolidando un enfoque basado en datos y resultados. Ejemplo: medir el número de visitantes únicos de un sitio web o la tasa de conversión de una campaña de marketing digital.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0

        Separador

        #t_2_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.2 Niveles 
        .mb-0 
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") Los KPI se aplican en diferentes niveles dentro de la organización, dependiendo del alcance y la función de la métrica:

    .bg_img_4.mb-0

      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
            .row.justify-content-center.align-items-center.mb-3
              .col-6.col-lg-6.mb-5
                figure
                  img(src='@/assets/curso/tema2/img_4.svg', class="img-fluid")
              .col-12.col-lg-12.text-center.mb-0
                h5.mb-3 Nivel estratégico
                p.mb-0 Orientado a los objetivos generales de la organización, como aumento de ingresos, participación de mercado o rentabilidad
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
            .row.justify-content-center.align-items-center.mb-3
              .col-6.col-lg-6.mb-5
                figure
                  img(src='@/assets/curso/tema2/img_4.svg', class="img-fluid")
              .col-12.col-lg-12.text-center.mb-0
                h5.mb-3 Nivel táctico
                p.mb-0 Enfocado en la gestión de campañas, proyectos o procesos específicos que apoyan la estrategia general.
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-0.h-100.d-flex.align-items-center.justify-content-center
            .row.justify-content-center.align-items-center.mb-3
              .col-6.col-lg-6.mb-5
                figure
                  img(src='@/assets/curso/tema2/img_4.svg', class="img-fluid")
              .col-12.col-lg-12.text-center.mb-0
                h5.mb-3 Nivel operativo
                p.mb-0 Centrado en el seguimiento de actividades diarias y el desempeño individual de procesos o equipos.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
          .cajon.color-terciario.p-4
            p.mb-0 Esta clasificación permite que cada indicador tenga un propósito claro, se alinee con los objetivos organizacionales y facilite la interpretación de resultados según la jerarquía de la gestión.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-0

          Separador

          #t_2_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.3 Alcances 
          .mb-0 

      .row.justify-content-center.align-items-center.mb-3
        .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_5.png', class="img-fluid")
        .col-12.col-lg-8.mb-0
          p.mb-4(data-aos="zoom-in-right") El alcance de un KPI define el límite y la extensión de su aplicación. Un buen KPI debe ser claro respecto a:
          TabsA.color-primario-o.mb-3
            .tarjeta.color-primario-cv.p-4(titulo="Temporalidad")
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-md-2.col-lg-3.mb-3.mb-lg-0.p-2(data-aos="zoom-in-right")
                  figure
                    img(src='@/assets/curso/tema2/img_6.svg', class="img-fluid")
                .col-8.col-lg-7.mb-0
                  p.mb-0(data-aos="zoom-in-right") Especificar el período de evaluación (diario, mensual, trimestral).
            .tarjeta.color-primario-cv.p-4(titulo="Funcionalidad")
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-md-2.col-lg-3.mb-3.mb-lg-0.p-2(data-aos="zoom-in-right")
                  figure
                    img(src='@/assets/curso/tema2/img_7.svg', class="img-fluid")
                .col-8.col-lg-8.mb-0
                  p.mb-0(data-aos="zoom-in-right") Delimitar el área o proceso que se mide, evitando interpretaciones ambiguas.
            .tarjeta.color-primario-cv.p-4(titulo="Relevancia")
              .row.justify-content-center.align-items-center.mb-0
                .col-4.col-md-2.col-lg-3.mb-3.mb-lg-0.p-2(data-aos="zoom-in-right")
                  figure
                    img(src='@/assets/curso/tema2/img_8.svg', class="img-fluid")
                .col-8.col-lg-8.mb-0
                  p.mb-0(data-aos="zoom-in-right") Centrarse en métricas que aporten valor real a la estrategia y al cumplimiento de objetivos.
          .cajon.color-terciario.p-4(data-aos="zoom-in-right")
            p.mb-0 Determinar correctamente el alcance evita esfuerzos innecesarios en la recolección de datos y asegura que los indicadores reflejen con precisión el desempeño esperado.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        Separador

        #t_2_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.4 Tipología 
        .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ámbito web, los KPI pueden clasificarse en diferentes categorías según el tipo de resultado que evalúan. Los KPI de tráfico miden el alcance del sitio, incluyendo indicadores como visitantes únicos, páginas vistas y tasa de rebote. Los KPI de interacción analizan el nivel de participación del usuario, considerando métricas como clics, tiempo de permanencia en la página y descargas de contenido. Por su parte, los KPI de conversión evalúan la efectividad en la generación de acciones de valor, como la captación de leads, compras o suscripciones. Finalmente, los KPI de rendimiento de campañas permiten medir la eficacia de acciones publicitarias mediante indicadores como el CTR (Click through rate) y el retorno de inversión (ROI) digital.
       
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          |    Tipos de KPI web
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema2/img_10.svg', class="img-fluid d-none d-lg-block", alt="La figura 2 muestra los tipos de KPI web. Texto de la figura. Tipos de KPI web KPI de tráfico: visitantes únicos, páginas vistas, tasa de rebote. KPI de interacción: clics, tiempo en página, descargas de contenido. KPI de conversión: número de leads, compras, suscripciones. KPI de rendimiento de campañas: CTR (Click through rate), ROI digital.").mb-5
          img(src='@/assets/curso/tema2/img_11.svg', class="img-fluid d-block d-lg-none", alt="La figura 2 muestra los tipos de KPI web. Texto de la figura. Tipos de KPI web KPI de tráfico: visitantes únicos, páginas vistas, tasa de rebote. KPI de interacción: clics, tiempo en página, descargas de contenido. KPI de conversión: número de leads, compras, suscripciones. KPI de rendimiento de campañas: CTR (Click through rate), ROI digital.").mb-5
          figcaption Nota. Sena, 2026.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-5
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8.mb-4.mb-lg-0
                p.mb-4 Escucha el podcast <strong>“Charlas que venden”</strong> y su episodio
                TarjetaAudio.color-primario-o.mb-0(
                  texto="<h4 class='mb-0'>Métricas web</h4>"
                  :audio="require('@/assets/curso/tema1/img_41.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = true"
                  style="border: none !important; padding: 0 !important; background: transparent !important;"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-8.col-lg-4.d-none.d-lg-block.position-relative
                figure
                  img(src='@/assets/curso/tema1/img_41.png', class="cita-decorada__imagen-flotante-3")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-terciario-cv.rounded-3.overflow-hidden
          .row.align-items-center.mb-0
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-5
              figure.m-0
                img(src="@/assets/curso/tema1/img_22.svg")
            .col-12.col-md-8.col-lg-10.p-4
              .row.justify-content-between.align-items-center.g-3
                .col-12.col-sm
                  p.mb-0.fw-bold Puede acceder al material a través del siguiente enlace disponible en YouTube, el cual complementa los contenidos abordados, ofreciendo explicaciones y ejemplos prácticos que fortalecen la comprensión del tema: 
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=hq18b03whBs" target="_blank")
                    span Ver video
                    i.fas.fa-file-download.ms-2

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .subtitulo-destacado.mb-5
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto Reportes estratégicos

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-7.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") Mientras el tablero facilita monitoreo continuo, el reporte estratégico permite reflexión estructurada. Su propósito no es repetir gráficos, sino explicar el significado de los resultados observados.
        .tarjeta.color-acento-contenido-v.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-3(data-aos="zoom-in-right") Un reporte efectivo articula datos con contexto. Debe integrar:
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_13.png', class="img-fluid")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Descripción breve del período evaluado.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Presentación visual de indicadores relevantes.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Interpretación argumentada de variaciones.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Propuestas de acción fundamentadas.
      .col-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_14.png', class="img-fluid") 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        p.mb-3 El valor del reporte radica en su capacidad de transformar números en argumentos. Cuando el documento solo presenta cifras, no aporta comprensión estratégica. En cambio, cuando conecta resultados con decisiones futuras, se convierte en herramienta de planificación. 
        p.mb-0 Componentes de un reporte con enfoque analítico

    .row.justify-content-center.align-items-center.mb-3
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_15.png', class="img-fluid")
      .col-12.col-lg-7.mb-0(data-aos="zoom-in-right")
        .custom-slider.p-3.p-sm-3.mb-5(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta--fondo-img-1.h-100
              .tarjeta--06.mb-3 
              h5.text-center.mb-4 Contextualización.
              .tarjeta--slider__content.text-center.mb-2 Explicar escenario evaluado. Impacto en la toma de decisiones. Comprensión integral.
            .tarjeta--fondo-img-1.h-100
              .tarjeta--07.mb-3
              h5.text-center.mb-4  Evidencia visual.
              .tarjeta--slider__content.text-center.mb-2 Mostrar resultados clave. Impacto en la toma de decisiones. Comprensión integral.
            .tarjeta--fondo-img-1.h-100
              .tarjeta--08.mb-3
              h5.text-center.mb-4  Interpretación.
              .tarjeta--slider__content.text-center.mb-2 Analizar causas y efectos. Impacto en la toma de decisiones. Claridad estratégica
            .tarjeta--fondo-img-1.h-100
              .tarjeta--09.mb-3
              h5.text-center.mb-4  Recomendaciones.
              .tarjeta--slider__content.text-center.mb-2 Proponer acciones viables Impacto en la toma de decisiones. Orientación futura.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        p.mb-0 La representación de datos implica responsabilidad. Ajustar escalas de manera desproporcionada, omitir periodos relevantes o seleccionar únicamente indicadores favorables puede distorsionar la realidad organizacional.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.color-terciario-cv.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-3(data-aos="zoom-in-right") La ética en la visualización requiere:
          ul.list-unstyled.mb-1(data-aos="zoom-in-right")
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
              span Transparencia en selección de datos.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
              span Coherencia en escalas.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
              span Claridad en periodos comparativos.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
              span Precisión en interpretación.
      .col-12.col-lg-6
        p.mb-3(data-aos="zoom-in-right") La visualización estratégica no consiste en producir gráficos atractivos, sino en facilitar comprensión significativa. Cuando se diseña con criterio analítico, se convierte en un instrumento que conecta información con acción.
        p.mb-0(data-aos="zoom-in-right") En entornos digitales dinámicos, la rapidez con la que se interpreta un indicador puede definir la diferencia entre reaccionar tarde o anticiparse al cambio. Por ello, integrar visualización, seguimiento y narrativa analítica es fundamental para consolidar una gestión basada en evidencia.

    .cita-decorada
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.rounded-0.rounded-tr-5.p-5
        .row.justify-content-center.align-items-center
          .col-4.col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img_20.png', class="cita-decorada__imagen-flotante-4")
          .col-12.col-lg-8
            p.cita-decorada__texto.mb-1.p-3 Este es un ejemplo de introducción para un informe estratégico que analiza el desempeño digital de Nativa Verde S.A.S. durante el segundo trimestre de 2026 en el contexto colombiano. Se muestran indicadores clave, comportamiento del cliente y eficiencia del embudo digital para ilustrar cómo identificar oportunidades de optimización. El objetivo es ejemplificar cómo presentar hallazgos que fundamenten decisiones estratégicas orientadas a mejorar la rentabilidad y el retorno de inversión en canales digitales:
            .p-3
              a.boton.color-acento-botones(href="/downloads/anexos/Informe_estrategico.pdf" target="_blank")

                span Ver pdf
                i.fas.fa-file-download.ms-2

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        Separador

        #t_2_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.5 Metodología
        .mb-0 

    .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema2/img_21.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 La metodología de gestión de datos es el conjunto de pasos sistemáticos que permiten transformar información cruda en conocimiento estratégico. Su aplicación asegura que los datos sean fiables, pertinentes y útiles para la toma de decisiones. Este proceso se articula en fases que van desde la definición de objetivos hasta la implementación de mejoras continuas. Una metodología estructurada permite optimizar recursos y convertir los datos en un activo estratégico para la organización.
          p.mb-0 Metodología para la gestión de datos

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-cv")
          div(titulo="Definición del objetivo")
            p.mb-0 Establecer con claridad qué se desea medir y para qué se utilizará la información. Ejemplo práctico. Determinar el retorno de inversión (ROI) de una campaña digital.
          div(titulo="Identificación de fuentes")
            p.mb-0 Localizar y seleccionar fuentes internas y externas de datos confiables. Ejemplo práctico. Bases de datos de clientes, métricas web, encuestas de satisfacción.
          div(titulo="Recolección y validación")
            p.mb-0 Capturar los datos asegurando exactitud, relevancia y consistencia. Ejemplo práctico. Revisar que no existan duplicados y que la información esté actualizada.
          div(titulo="Organización y procesamiento")
            p.mb-0 Clasificar, depurar y estructurar los datos para facilitar su análisis. Ejemplo práctico. Consolidar información en hojas de cálculo o sistemas de inteligencia de negocios.
          div(titulo="Análisis e interpretación")
            p.mb-0 Aplicar técnicas estadísticas o predictivas para extraer conocimiento útil. Ejemplo práctico. Comparar inversión publicitaria vs. ventas generadas para identificar tendencias.
          div(titulo="Toma de decisiones y mejora continua")
            p.mb-0 Formular acciones estratégicas basadas en los hallazgos y retroalimentar el proceso. Ejemplo práctico. Ajustar campañas, optimizar recursos y mejorar procesos internos.
      .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema2/img_23.png', class="img-fluid")
      

</template>

<script>
export default {
  name: 'Tema2',
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
