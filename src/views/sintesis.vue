<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-2.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-lg-10.mb-3
        p.mb-0(data-aos="zoom-in-right") El componente formativo Análisis de datos y cliente digital aborda los datos estratégicos, su concepto, tipos, parámetros, procesamiento, herramientas y metodologías; continúa con las métricas de seguimiento web, incluyendo medición, niveles, alcances y tipología; analiza el impacto de los datos en tráfico y resultados; profundiza en la calidad de la información, abordando concepto y parámetros de medición; y finaliza con el tratamiento de datos personales, incluyendo definición, principios, registros, criterios éticos, bases de datos y normatividad aplicable para garantizar seguridad, confidencialidad y uso responsable de la información.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Análisis de datos y cliente digital aborda los datos estratégicos, su concepto, tipos, parámetros, procesamiento, herramientas y metodologías; continúa con las métricas de seguimiento web, incluyendo medición, niveles, alcances y tipología; analiza el impacto de los datos en tráfico y resultados; profundiza en la calidad de la información, abordando concepto y parámetros de medición; y finaliza con el tratamiento de datos personales, incluyendo definición, principios, registros, criterios éticos, bases de datos y normatividad aplicable para garantizar seguridad, confidencialidad y uso responsable de la información.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
