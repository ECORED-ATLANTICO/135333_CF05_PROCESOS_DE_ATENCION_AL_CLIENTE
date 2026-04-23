<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Calidad de la información

    .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 La calidad de la información indica qué tan confiables, precisos y útiles son los datos para la toma de decisiones. Información de buena calidad permite analizar desempeño, mejorar procesos y optimizar recursos, mientras que datos incompletos o incorrectos pueden generar errores y pérdidas. Evaluar la calidad requiere definir criterios claros y medir parámetros como integridad, exactitud, pertinencia y disponibilidad.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto 
    .mb-0 
    
    .bg_img_6.mb-0

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema4/img_3.png')
        .bloque-texto-t__texto.col-10.mb-0
          p.mb-0 La calidad de la información se centra en garantizar que los datos sean confiables, comprensibles y oportunos, permitiendo que las decisiones se basen en evidencia sólida. Esta evaluación incluye tanto aspectos cuantitativos, como exactitud y completitud, como cualitativos, como relevancia y claridad. En entornos digitales, la calidad de la información es crítica para interpretar métricas de tráfico, conversión, satisfacción del cliente y desempeño de campañas, asegurando que las estrategias implementadas generen resultados consistentes y medibles.

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0

          Separador

          #t_4_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 4.2 Parámetros de medición 
          .mb-0 

      .row.justify-content-center.align-items-center.mb-3
        .col-4.col-lg-1.mb-3.mb-lg-0.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema4/img_4.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          p.mb-0(data-aos="zoom-in-right") Para evaluar la calidad de la información se utilizan diferentes parámetros que permiten medir su confiabilidad y utilidad. Estos parámetros se pueden clasificar y aplicar de manera sistemática según las necesidades de la organización:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 8.
          |  Parámetros de calidad de la información
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-auto Parámetro
                th.col-auto.col-lg-auto Definición
                th.col-auto.col-lg-auto Indicador de medición
                th.col-auto.col-lg-auto Acción estratégica
            tbody
              tr
                td.text-start Exactitud.
                td.text-start Nivel en que los datos reflejan la realidad o hechos correctamente.
                td.text-start % de registros sin errores.
                td.text-start Depurar bases de datos y validar fuentes.
              tr
                td.text-start Completitud.
                td.text-start Grado en que la información contiene todos los elementos necesarios.
                td.text-start % de campos completos en un registro.
                td.text-start Completar datos faltantes y automatizar captura.
              tr
                td.text-start Oportunidad.
                td.text-start Disponibilidad de la información en el momento requerido.
                td.text-start Tiempo promedio de actualización de datos.
                td.text-start Implementar actualizaciones automáticas y alertas.
              tr
                td.text-start Consistencia.
                td.text-start Coherencia de la información entre diferentes fuentes o registros.
                td.text-start % de datos coherentes entre sistemas.
                td.text-start Estandarizar formatos y cruzar información entre bases.
              tr
                td.text-start Relevancia.
                td.text-start Grado en que la información aporta valor para la toma de decisiones.
                td.text-start Evaluación de utilidad en informes estratégicos.
                td.text-start Filtrar métricas no relevantes y priorizar datos críticos.
              tr
                td.text-start Claridad.
                td.text-start Facilidad de comprensión de la información por los usuarios.
                td.text-start % de usuarios que interpretan correctamente los datos.
                td.text-start Generar reportes visuales, resúmenes y gráficas claras.
</template>

<script>
export default {
  name: 'Tema4',
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
