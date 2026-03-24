<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-2.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-lg-10.mb-3
        p.mb-0(data-aos="zoom-in-right") El impacto se entiende como la capacidad de una acción o estrategia de producir resultados medibles y relevantes para los objetivos de la organización. Evaluar el impacto combina indicadores cuantitativos, como ventas, registros o descargas, con indicadores cualitativos, como la satisfacción del cliente y la experiencia de usuario. Comprender el impacto facilita la priorización de recursos, la mejora de procesos y la toma de decisiones fundamentadas en datos confiables. De esta manera, la organización puede ajustar sus estrategias de forma continua, fortaleciendo la efectividad de sus acciones y aumentando el retorno de sus inversiones.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
