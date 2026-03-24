<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid") 
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") El componente formativo Análisis de datos y cliente digital aborda el estudio de los datos como activo estratégico y la comprensión del cliente en entornos digitales. En un contexto donde las decisiones ya no pueden basarse solo en la intuición, el análisis de información se convierte en una competencia fundamental para las organizaciones.
        p.mb-3(data-aos="zoom-in-right") Su importancia radica en que permite interpretar comportamientos, medir resultados, evaluar rentabilidad y tomar decisiones más seguras y efectivas. Comprender al cliente digital y analizar métricas reales fortalece la competitividad, mejora la experiencia del usuario y optimiza los recursos de la empresa.
        .tarjeta.color-primario-cv.p-5.rounded-4.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 El tema se abordará de manera progresiva, iniciando con los datos estratégicos y su gestión, continuando con el estudio del cliente digital y las métricas web, para luego analizar la rentabilidad, la toma de decisiones basadas en datos y finalizar con la visualización mediante tableros de control y reportes estratégicos.
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid")
    
    //figure.mb-5
    //  .video.mb-2
    //    iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //  figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
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
