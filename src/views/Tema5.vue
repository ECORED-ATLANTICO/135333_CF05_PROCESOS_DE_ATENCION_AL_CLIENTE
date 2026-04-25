<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tratamiento de datos personales

    .row.justify-content-center.align-items-center.mb-3
      .col-md-10.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_1.png', class="img-fluid")
      .col-12.col-lg-6.mb-0
        p.mb-0(data-aos="zoom-in-right") El tratamiento de datos personales es fundamental para la gestión digital estratégica, porque asegura la protección legal y ética de la información, la confianza del cliente y la eficiencia en la toma de decisiones. Su correcta aplicación permite a las organizaciones analizar patrones de comportamiento, optimizar estrategias de <em>marketing</em>, y garantizar cumplimiento normativo, minimizando riesgos legales y reputacionales.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-12.mb-0

        Separador

        #t_5_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.1 Definición
        .mb-0 
      .col-12.col-lg-12.mb-0
        p.mb-0(data-aos="zoom-in-right") El tratamiento de datos personales comprende todas las operaciones realizadas sobre información que identifica o hace identificable a una persona, incluyendo:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-12.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          |    Operaciones en el tratamiento de datos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema5/img_2.svg', class="img-fluid d-none d-lg-block", alt="La figura presenta todas las actividades relacionadas con el tratamiento de datos personales. Texto de la figura: Tratamiento de datos personales.  Conjunto de operaciones sobre información que identifica a una persona. Recolección: captación mediante formularios, encuestas o registros. Almacenamiento: conservación segura en bases de datos físicas o digitales. Uso: análisis para fines estratégicos, operativos o de marketing. Transferencia: envío autorizado a terceros, nacionales o internacionales. Supresión: eliminación de datos cumplida su finalidad o por solicitud del titular.").mb-5
          img(src='@/assets/curso/tema5/img_3.svg', class="img-fluid d-block d-lg-none", alt="La figura presenta todas las actividades relacionadas con el tratamiento de datos personales. Texto de la figura: Tratamiento de datos personales.  Conjunto de operaciones sobre información que identifica a una persona. Recolección: captación mediante formularios, encuestas o registros. Almacenamiento: conservación segura en bases de datos físicas o digitales. Uso: análisis para fines estratégicos, operativos o de marketing. Transferencia: envío autorizado a terceros, nacionales o internacionales. Supresión: eliminación de datos cumplida su finalidad o por solicitud del titular.").mb-5
          figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .cajon.color-terciario.p-4
          p.mb-0 Esto tiene un alto grado de importancia estratégica, pues permite personalizar experiencias digitales, aumentando satisfacción y fidelización, a su vez facilita la segmentación avanzada, optimizando campañas de <em>marketing</em>.


    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0

        Separador

        #t_5_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.2 Principios
        .mb-0 

    .row.justify-content-center.align-items-center.mb-4
      .col-4.col-lg-1.mb-3.mb-lg-0.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_4.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0(data-aos="zoom-in-right") Los principios son la guía ética y legal que asegura un tratamiento seguro y responsable de los datos personales. Su correcta implementación fortalece la confianza de clientes y aliados. A continuación, se presenta un resumen de los principios de protección de datos personales, su aplicación práctica y ejemplos estratégicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 9.
          |  Principios éticos y legales del tratamiento de datos personales (versión ampliada)
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de Ley 1581 de 2012; Decreto 1377 de 2013.
            thead
              tr
                th.col-auto.col-lg-auto Principio
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Aplicación práctica
                th.col-auto.col-lg-auto Ejemplo estratégico
            tbody
              tr
                td.text-start Legalidad.
                td.text-start Cumplimiento estricto de la ley y consentimiento del titular.
                td.text-start Formularios web con casillas de aceptación explícita y registro de consentimiento digital.
                td.text-start Analizar datos de clientes solo tras autorización, evitando multas.
              tr
                td.text-start Finalidad.
                td.text-start Uso de los datos únicamente para objetivos específicos y comunicados al titular.
                td.text-start Analizar métricas de <em>marketing</em> sin fines distintos a los declarados.
                td.text-start Usar datos para segmentación de promociones, no para venta de terceros.
              tr
                td.text-start Transparencia.
                td.text-start Información clara al titular sobre uso, finalidad y tratamiento de sus datos.
                td.text-start Políticas de privacidad visibles en la web y avisos de <em>cookies</em> detallados.
                td.text-start Informar al cliente cómo se usarán sus datos en campañas digitales.
              tr
                td.text-start Seguridad.
                td.text-start Protección de la información frente a accesos no autorizados, pérdida o daño.
                td.text-start Encriptación, autenticación de usuarios, <em>firewalls</em> y respaldo periódico de bases de datos.
                td.text-start Implementar monitoreo de accesos y alertas de intrusión.
              tr
                td.text-start Minimización.
                td.text-start Recolección estrictamente de los datos necesarios para el fin determinado.
                td.text-start Formularios con campos esenciales, evitando datos sensibles innecesarios.
                td.text-start Pedir solo datos necesarios para envío de facturas o promociones.
              tr
                td.text-start Confidencialidad.
                td.text-start Garantizar que la información no sea divulgada a terceros no autorizados.
                td.text-start Contratos de confidencialidad con empleados y proveedores que manejan datos personales.
                td.text-start Proteger historiales médicos o financieros de clientes.
              tr
                td.text-start Responsabilidad.
                td.text-start Documentar y asumir la gestión de datos personales de forma ética y legal.
                td.text-start Registro de auditorías, controles internos y seguimiento de incidentes relacionados con datos.
                td.text-start Mantener evidencia de consentimiento y políticas aplicadas.
    
    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Registros
    .mb-0 
        
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los registros son herramientas fundamentales para garantizar la trazabilidad y el control del tratamiento de datos personales. Permiten auditar, analizar y depurar la información de manera segura, asegurando el cumplimiento de la normativa vigente. La siguiente tabla presenta los principales tipos de registros utilizados en el tratamiento de datos personales, su contenido o propósito y ejemplos prácticos de aplicación.

    h5.mb-4(data-aos="zoom-in-right") Tipos de registros en el tratamiento de datos personales
    
    br
    br
    br

    .bg_img_7.mb-3

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Bases de datos
            p.mb-0 Almacenan información estructurada de clientes, proveedores y empleados.
            p.mb-0 #[strong Ejemplo práctico.] CRM con datos de clientes activos y prospectos.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_7.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 <em>Logs</em> de actividad
            p.mb-0 Registro cronológico de interacciones digitales, transacciones y accesos.
            p.mb-0 #[strong Ejemplo práctico.] Historial de clics y descargas en la web, accesos a plataformas internas.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formularios y encuestas
            p.mb-0 Capturan información directamente del titular con fines específicos.
            p.mb-0 #[strong Ejemplo práctico.] Encuestas de satisfacción con consentimiento informado.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Consentimientos
            p.mb-0 Documentación que prueba que el titular autorizó el tratamiento de sus datos.
            p.mb-0 #[strong Ejemplo práctico.] Archivos digitales que registran aceptación de políticas de privacidad.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Auditorías internas
            p.mb-0 Registro de verificaciones periódicas para asegurar cumplimiento de políticas y normatividad.
            p.mb-0 #[strong Ejemplo práctico.] Revisiones trimestrales de accesos, permisos y calidad de bases de datos.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_11.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Reportes de incidentes
            p.mb-0 Registro de eventos de seguridad o vulneraciones de datos personales.
            p.mb-0 #[strong Ejemplo práctico.] Informe de brechas de seguridad y medidas correctivas implementadas.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema5/img_12.png', class="img-fluid")
      br

    .bg_img_8.mb-0

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-0

          Separador

          #t_5_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.4 Criterios éticos 
          .mb-0 
        .col-12.col-lg-10.mb-0
          p.mb-0(data-aos="zoom-in-right") El tratamiento ético de datos incluye principios y buenas prácticas que protegen al titular y aseguran decisiones confiables:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1
          .custom-slider.p-3.p-sm-3.mb-5(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--fondo-img-1.h-100
                .tarjeta--10.mb-3
                h5.text-center.mb-4 Privacidad y confidencialidad
                .tarjeta--slider__content.text-center.mb-2 Restringir acceso a información sensible.
              .tarjeta--fondo-img-1.h-100
                .tarjeta--11.mb-3
                h5.text-center.mb-4 Equidad
                .tarjeta--slider__content.text-center.mb-2 Evitar sesgos o discriminación en análisis y segmentaciones.
              .tarjeta--fondo-img-1.h-100
                .tarjeta--12.mb-3
                h5.text-center.mb-4 Responsabilidad
                .tarjeta--slider__content.text-center.mb-2 Documentar decisiones basadas en datos.
              .tarjeta--fondo-img-1.h-100
                .tarjeta--13.mb-3
                h5.text-center.mb-4 Transparencia analítica
                .tarjeta--slider__content.text-center.mb-2 Resultados claros, contextualizados y verificables.
              .tarjeta--fondo-img-1.h-100
                .tarjeta--14.mb-3
                h5.text-center.mb-4 Seguridad proactiva
                .tarjeta--slider__content.text-center.mb-2 Medidas preventivas contra filtraciones y pérdidas. 
        .col-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_19.png', class="img-fluid") 

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-0

          Separador

          #t_5_5.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.5 Bases de datos
          .mb-0 

      .row.justify-content-center.align-items-center.mb-4
        .col-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_20.png', class="img-fluid")
        .col-12.col-lg-8.mb-0
          p.mb-3(data-aos="zoom-in-right") Las bases de datos constituyen el soporte estructurado y organizado para el manejo de datos personales, siendo fundamentales para la toma de decisiones estratégicas, la segmentación de clientes y la optimización de procesos internos. Su correcta gestión permite garantizar la integridad, confiabilidad y disponibilidad de la información, facilitando análisis precisos y acciones fundamentadas en evidencia. Además, contribuyen a cumplir con la normatividad vigente, asegurando que los datos se utilicen de manera ética y segura.
          p.mb-0(data-aos="zoom-in-right") A continuación, se presenta una clasificación de las bases de datos más utilizadas en la gestión estratégica de datos personales, con ejemplos prácticos y los beneficios que aportan a la organización:

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 10.
            |  Clasificación de bases de datos para gestión estratégica de datos personales
 
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de W. Edwards Deming, SENA 2025 y literatura de gestión de datos estratégicos.
            thead
              tr
                th.col-auto.col-lg-auto Tipo de base de datos
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Ejemplo práctico
                th.col-auto.col-lg-auto Beneficio estratégico
            tbody
              tr
                td.text-start Interna.
                td.text-start Gestionada directamente por la organización.
                td.text-start CRM con clientes activos y su historial de compras.
                td.text-start Control total y adaptación a objetivos internos.
              tr
                td.text-start Externa.
                td.text-start Obtenida de fuentes confiables o públicas.
                td.text-start Listados de <em>leads</em> verificados por proveedores.
                td.text-start Ampliación de alcance y segmentación de mercado.
              tr
                td.text-start Operativa.
                td.text-start Apoya procesos internos y tareas diarias.
                td.text-start Registro de ventas, pagos y devoluciones.
                td.text-start Mejora de eficiencia operativa y control de procesos.
              tr
                td.text-start Estratégica.
                td.text-start Orientada al análisis y toma de decisiones.
                td.text-start Segmentación de clientes según hábitos de compra.
                td.text-start Optimización de campañas y estrategias de <em>marketing</em>.
              tr
                td.text-start Temporal.
                td.text-start Información con vigencia limitada para análisis.
                td.text-start Campañas publicitarias estacionales.
                td.text-start Reducción de almacenamiento innecesario.
              tr
                td.text-start Maestra.
                td.text-start Consolidación de información crítica y referencial.
                td.text-start Datos de contacto y perfiles de clientes unificados.
                td.text-start Integridad y coherencia de la información.

    Separador

    #t_5_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.6 Normatividad
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema5/img_21.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El cumplimiento de la normatividad en el tratamiento de datos personales es un pilar esencial para garantizar la protección de los derechos de los titulares, minimizar riesgos legales y fortalecer la confianza de clientes y usuarios. En un entorno digital donde la información se convierte en un activo estratégico, las organizaciones deben alinearse con leyes, decretos y guías sectoriales que regulan la recolección, almacenamiento, análisis y visualización de datos.

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_22.png', class="img-fluid")
      .col-12.col-lg-8.mb-0
        p.mb-3(data-aos="zoom-in-right") En Colombia, diversas normas establecen obligaciones específicas según el tipo de información, sector económico y finalidad del tratamiento de datos. La correcta aplicación de estas regulaciones no solo evita sanciones legales, sino que también asegura procesos transparentes, éticos y responsables frente a los usuarios.
        p.mb-0(data-aos="zoom-in-right") A continuación, se presenta un resumen de las principales normas y regulaciones aplicables, junto con su descripción, aplicación práctica y nivel de cumplimiento recomendado:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 11.
          |  Normatividad y regulaciones aplicables al tratamiento de datos personales
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Leyes 1581, 1266, 1580, 527; Decreto 1377; ISO/IEC 27001, Circulares Superfinanciera.
            thead
              tr
                th.col-auto.col-lg-auto Norma / Decreto / Guía
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Aplicación práctica
                th.col-auto.col-lg-auto Nivel de cumplimiento
            tbody
              tr
                td.text-start Ley 1581 de 2012.
                td.text-start Marco general para la protección de datos personales en Colombia.
                td.text-start Recolección de datos con consentimiento informado y registro de bases de datos.
                td.text-start Obligatorio para todas las organizaciones.
              tr
                td.text-start Decreto 1377 de 2013.
                td.text-start Reglamenta autorización de tratamiento y adopción de políticas de manejo de datos personales.
                td.text-start Implementación de formularios, avisos de privacidad y consentimiento digital.
                td.text-start Obligatorio para adecuar procesos existentes.
              tr
                td.text-start Ley 1266 de 2008.
                td.text-start Regulación de la información financiera y crediticia de los ciudadanos.
                td.text-start Gestión de historial crediticio y reportes financieros con autorización.
                td.text-start Obligatorio para entidades financieras.
              tr
                td.text-start Ley 1580 de 2012 (<em>habeas data</em> sector salud).
                td.text-start Protege datos médicos y de salud de los titulares.
                td.text-start Manejo de historias clínicas, datos de pacientes y resultados médicos con autorización explícita.
                td.text-start Obligatorio para entidades de salud.
              tr
                td.text-start ISO / IEC 27001.
                td.text-start Norma internacional para gestión de seguridad de la información.
                td.text-start Aplicación de políticas de seguridad, control de accesos, cifrado de información sensible.
                td.text-start Recomendado para certificación empresarial.
              tr
                td.text-start Guías SENA 2026.
                td.text-start Buenas prácticas en gestión de datos estratégicos y visualización digital.
                td.text-start Estandarización de tableros de control, reportes estratégicos y protección de datos digitales.
                td.text-start Recomendado para entidades educativas.
              tr
                td.text-start Ley 527 de 1999.
                td.text-start Reconocimiento de la validez legal de documentos y firmas electrónicas.
                td.text-start Autenticación de consentimiento y firmas digitales en recolección de datos.
                td.text-start Obligatorio para transacciones digitales.
              tr
                td.text-start Circular Sectorial Superfinanciera.
                td.text-start Lineamientos de supervisión sobre tratamiento de datos financieros y protección de la información de clientes.
                td.text-start Monitoreo de seguridad y cumplimiento en entidades financieras, asegurando confidencialidad.
                td.text-start Obligatorio para supervisión financiera.
</template>

<script>
export default {
  name: 'Tema5',
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
