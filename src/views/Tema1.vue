<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos
 
    .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema1/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
            p.mb-0 Esta temática proporciona los fundamentos necesarios para comprender el valor de los datos y sus fuentes digitales, así como las mejores prácticas para su gestión a lo largo de todo su ciclo de vida. Se abordarán conceptos, tipos de datos, herramientas digitales, análisis de ejemplos reales y la forma en que las empresas aplican los datos estratégicos para tomar decisiones fundamentadas.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los datos constituyen el insumo básico para la toma de decisiones en entornos digitales y organizacionales. Se definen como registros cuantitativos o cualitativos que representan hechos, comportamientos, transacciones o interacciones generadas por usuarios, clientes o procesos internos.
          br
          br
          | En el contexto del marketing digital y la gestión del cliente, los datos permiten comprender patrones de comportamiento, niveles de interacción, resultados de campañas y percepción del servicio. Sin un sistema estructurado de datos, la organización opera bajo supuestos y no bajo evidencia verificable. Los datos por sí solos no generan valor estratégico; requieren procesamiento, análisis e interpretación para convertirse en información útil que apoye la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_3.png', class="img-fluid")
      .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
        p.mb-0 En la economía digital actual, los datos se consideran uno de los activos más valiosos de cualquier organización. La capacidad de recopilar, interpretar y aplicar información de manera estratégica determina la ventaja competitiva de las empresas. La gestión de datos no se limita a almacenarlos, sino que requiere un enfoque integral que permita su transformación en conocimiento accionable, capaz de mejorar procesos, optimizar recursos, aumentar la satisfacción del cliente y generar nuevas oportunidades de negocio.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0

        Separador

        #t_1_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.2 Tipos
        .mb-0 

      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        p.mb-0 En la gestión digital del cliente, los datos pueden clasificarse según su naturaleza, origen y finalidad estratégica.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          |    Clasificación de los datos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema1/img_4.svg', class="img-fluid d-none d-lg-block", alt="La figura muestra la clasificación de los datos de acuerdo a su naturaleza, su origen y su finalidad. Texto de la grafica Clasificación de los datos Por naturaleza: Cuantitativos (números). Cualitativos (opiniones). Por origen: Primarios (propios). Secundarios (externos). Por finalidad: Operativos (procesos). Estratégicos (decisiones).Relacionales (interacción).").mb-5
          img(src='@/assets/curso/tema1/img_5.svg', class="img-fluid d-block d-lg-none", alt="La figura muestra la clasificación de los datos de acuerdo a su naturaleza, su origen y su finalidad. Texto de la grafica Clasificación de los datos Por naturaleza: Cuantitativos (números). Cualitativos (opiniones). Por origen: Primarios (propios). Secundarios (externos). Por finalidad: Operativos (procesos). Estratégicos (decisiones).Relacionales (interacción).").mb-5
          figcaption Nota. Sena, (2026).

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Parámetros
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_6.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Los parámetros determinan los criterios bajo los cuales se recolectan, organizan y evalúan los datos dentro de una organización. Establecen límites de calidad, pertinencia y confiabilidad, y permiten asegurar que la información utilizada en los procesos estratégicos sea válida para la toma de decisiones. Sin parámetros definidos, la gestión de datos puede volverse dispersa, imprecisa y poco útil para los objetivos del plan de marketing digital.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        p.mb-0 Entre los principales parámetros se encuentran:

    .bg_img_1.mb-3

      TabsB.color-secundario(data-aos="zoom-in-right")
        .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Relevancia")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 El dato aporta valor al objetivo estratégico y está relacionado con los indicadores definidos en el plan de marketing digital. No todo dato disponible es necesario; solo aquellos que contribuyen a la medición del desempeño y al análisis del cliente.
            .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_8.svg', class="img-fluid")
        .py-4.py-md-5(titulo="Exactitud")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 Debe reflejar la realidad sin errores, distorsiones o duplicidades. La exactitud garantiza que los reportes generados representen de manera fiel el comportamiento del mercado y de los usuarios digitales.
            .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_9.svg', class="img-fluid")
        .py-4.py-md-5(titulo="Actualización")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 Debe estar vigente y alineado con el momento del análisis. Los datos desactualizados pueden conducir a decisiones incorrectas, especialmente en entornos digitales donde el comportamiento del cliente cambia con rapidez.
            .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_10.svg', class="img-fluid")
        .py-4.py-md-5(titulo="Integridad")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 No debe presentar vacíos críticos ni inconsistencias que afecten su interpretación. La información incompleta reduce la capacidad de análisis y limita la confiabilidad de los indicadores.
            .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_11.svg', class="img-fluid")
        .py-4.py-md-5(titulo="Coherencia")
          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 Se debe mantener consistencia con otras fuentes y sistemas de información. Cuando existen discrepancias entre bases de datos, es necesario validar y depurar para evitar conclusiones erróneas.
            .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_12.svg', class="img-fluid")

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0

          Separador

          #t_1_4.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.4 Procesamiento
          .mb-0 

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_13.png', class="img-fluid")
        .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
          p.mb-3 El procesamiento de datos consiste en la transformación de registros brutos en información organizada y estructurada que permita su análisis y posterior toma de decisiones. Este proceso es fundamental en la gestión del marketing digital, ya que convierte métricas aisladas en indicadores estratégicos que orientan la planeación, optimización de campañas y evaluación del desempeño.
          p.mb-0 A continuación, se presentan las etapas del procesamiento de datos con su respectiva descripción y ejemplos aplicados al entorno digital.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          |  Etapas del procesamiento de datos en entornos digitales
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de Laudon y Laudon (2020) y Chaffey y Ellis-Chadwick (2019).
            thead
              tr
                th.col-auto.col-lg-2 Etapa
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Ejemplo aplicado
            tbody
              tr
                td.text-start Recolección.
                td.text-start Captura sistemática de datos provenientes de diferentes fuentes digitales como sitios web, redes sociales o plataformas de comercio electrónico.
                td.text-start Obtener datos de visitas, clics y tiempo de permanencia desde una herramienta de analítica web.
              tr
                td.text-start Depuración.
                td.text-start Eliminación de datos duplicados, incompletos o erróneos que puedan afectar el análisis.
                td.text-start Eliminar registros repetidos de clientes o corregir formularios con campos incompletos.
              tr
                td.text-start Clasificación.
                td.text-start Organización de los datos según categorías o variables definidas por la organización.
                td.text-start Segmentar usuarios por ubicación geográfica, edad o tipo de dispositivo utilizado.
              tr
                td.text-start Análisis.
                td.text-start Aplicación de métodos estadísticos o comparativos para identificar patrones y tendencias.
                td.text-start Comparar el comportamiento de conversión entre campañas pagas y campañas orgánicas.
              tr
                td.text-start Interpretación.
                td.text-start Evaluación de los resultados obtenidos para convertirlos en conclusiones estratégicas.
                td.text-start Determinar si una campaña digital generó aumento en la tasa de conversión o si requiere ajustes.
      .col-12.col-lg-10.mb-0
        .tarjeta.color-secundario-cv.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_14.png', class="img-fluid")
            .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
              p.mb-0 Una vez comprendido el valor y las fuentes de los datos, es esencial conocer cómo se gestionan a lo largo de su ciclo de vida. Un manejo adecuado asegura que los datos sean confiables, seguros y útiles para la toma de decisiones estratégicas. El ciclo de vida del dato incluye cinco etapas fundamentales:

    .custom-slider.p-3.p-sm-3.mb-5(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
          .tarjeta--01.mb-3
          h5.text-center.mb-4 Recopilación 
          .tarjeta--slider__content.text-center.mb-2 Captura de información desde múltiples fuentes internas y externas, asegurando integridad y relevancia.
        .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
          .tarjeta--02.mb-3
          h5.text-center.mb-4 Almacenamiento
          .tarjeta--slider__content.text-center.mb-2 Los datos se guardan en sistemas seguros (bases de datos, nube) manteniendo integridad y accesibilidad.
        .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
          .tarjeta--03.mb-3
          h5.text-center.mb-4 Análisis
          .tarjeta--slider__content.text-center.mb-2 Procesamiento de la información para transformarla en insights claros y útiles.
        .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
          .tarjeta--04.mb-3
          h5.text-center.mb-4 Explotación
          .tarjeta--slider__content.text-center.mb-2 Aplicación de los resultados del análisis para mejorar estrategias, operaciones y productos.
        .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
          .tarjeta--05.mb-3
          h5.text-center.mb-4 Depuración
          .tarjeta--slider__content.text-center.mb-2 Eliminación de registros duplicados, incorrectos o desactualizados para mantener calidad y confiabilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0(data-aos="zoom-out-up")
        p.mb-0 La siguiente tabla resume las etapas del ciclo de gestión del dato, sus herramientas y su aporte estratégico.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 2.
          |  Ciclo de vida del dato 
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de Chunir Panjon et al., (2024); SENA, (2025).
            thead
              tr
                th.col-auto.col-lg-auto Etapa
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Herramientas
                th.col-auto.col-lg-auto Ejemplo práctico
                th.col-auto.col-lg-auto Valor estratégico
            tbody
              tr
                td.text-start Recopilación
                td.text-start Captura de datos de múltiples fuentes.
                td.text-start Formularios web, APIs, sensores IoT.
                td.text-start Encuestas online, registros de compra.
                td.text-start Obtención de información relevante.
              tr
                td.text-start Almacenamiento.
                td.text-start Guardar y resguardar información.
                td.text-start SQL Server, Google Cloud, bases de datos.
                td.text-start Guardado de histórico de ventas.
                td.text-start Seguridad y accesibilidad.
              tr
                td.text-start Análisis.
                td.text-start Transformación en información útil.
                td.text-start Power BI, Python, Excel.
                td.text-start Dashboards de ventas y segmentación.
                td.text-start Insight para toma de decisiones.
              tr
                td.text-start Explotación.
                td.text-start Aplicación en decisiones estratégicas.
                td.text-start CRM, dashboards, herramientas BI.
                td.text-start Ajuste de campañas de marketing.
                td.text-start Optimización de resultados.
              tr
                td.text-start Depuración.
                td.text-start Limpieza de datos duplicados o incorrectos.
                td.text-start Scripts, ETL, validación manual.
                td.text-start Eliminación de registros erróneos.
                td.text-start Calidad y confiabilidad.
                
    .bg_img_2.mb-3

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
                    p.mb-0.fw-bold Dar clic en el enlace de este video para continuar con la explicación del ciclo de vida del dato y comprender de manera más amplia cómo se implementa la gestión de datos a lo largo de sus diferentes fases: 
                  .col-12.col-sm-auto.pe-4
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=shdBRha_fi4" target="_blank")
                      span Ver video
                      i.fas.fa-file-download.ms-2

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0

          Separador

          #t_1_5.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.5 Herramientas
          .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_23.png', class="img-fluid") 
        .col-12.col-lg-7
          p.mb-3(data-aos="zoom-in-right") Las herramientas facilitan la captura, almacenamiento, análisis y visualización de datos. En el entorno digital, su uso permite automatizar procesos y mejorar la precisión analítica.
          p.mb-3(data-aos="zoom-in-right") Algunas herramientas comúnmente utilizadas son:
          .row.justify-content-center.align-items-stretch.mb-0
            .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario-v.h-100
                .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                  figure
                    img(src='@/assets/curso/tema1/img_24.png', class="img-fluid") 
                p.mb-0 Google Analytics, para análisis de tráfico web.
            .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario-v.h-100
                .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                  figure
                    img(src='@/assets/curso/tema1/img_24.png', class="img-fluid") 
                p.mb-0 Google Search Console, para seguimiento de rendimiento en buscadores
            .col-12.col-lg-6.mb-lg-0.mb-4(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario-v.h-100
                .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                  figure
                    img(src='@/assets/curso/tema1/img_24.png', class="img-fluid") 
                p.mb-0 Microsoft Excel, para procesamiento y análisis de datos.
            .col-12.col-lg-6.mb-lg-0.mb-4(data-aos="zoom-in-right")
              .tarjeta-numerada.color-primario-v.h-100
                .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                  figure
                    img(src='@/assets/curso/tema1/img_24.png', class="img-fluid") 
                p.mb-0 Power BI, para visualización y análisis avanzado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La elección de la herramienta depende del volumen de datos, la complejidad del análisis y los objetivos estratégicos de la organización. A continuación, se detalla información de los tableros de control:
        p.mb-0(data-aos="zoom-in-right") Antes de diseñar cualquier gráfico o tablero, la organización debe definir el propósito de la visualización. Mostrar todos los datos disponibles no es una estrategia; es una acumulación. La visualización estratégica actúa como un filtro que selecciona únicamente la información que influye en los objetivos institucionales.
      .col-6.col-lg-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_25.png', class="img-fluid") 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="zoom-in-right")
        .tarjeta.color-terciario-cv.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-3(data-aos="zoom-in-right") Este proceso implica tres decisiones clave:
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_26.png', class="img-fluid")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              ul.list-unstyled.mb-1
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Determinar qué variable refleja desempeño crítico.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Identificar qué comparación aporta significado (histórica, segmentada o proyectada).
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Definir el nivel de detalle adecuado para el usuario final.
      .col-12.col-lg-4
        p.mb-3(data-aos="zoom-in-right") Cuando estas decisiones no se toman con claridad, la visualización pierde coherencia y puede generar interpretaciones contradictorias.
        p.mb-0(data-aos="zoom-in-right") Definir preguntas estratégicas permite enfocar el análisis de datos y evitar interpretaciones erróneas. La tabla muestra su propósito y las consecuencias de no considerarlas.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 3.
          |  Decisiones previas al diseño visual
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Sena, (2026).
            thead
              tr
                th.col-auto.col-lg-auto Pregunta estratégica
                th.col-auto.col-lg-auto Propósito analítico
                th.col-auto.col-lg-auto Consecuencia si no se define
            tbody
              tr
                td.text-start ¿Qué indicador es prioritario?
                td.text-start Centrar atención en desempeño crítico.
                td.text-start Saturación informativa.
              tr
                td.text-start ¿Qué tipo de comparación se requiere?
                td.text-start Dar contexto a los datos.
                td.text-start Interpretación aislada.
              tr
                td.text-start ¿Quién utilizará la información?
                td.text-start Ajustar nivel de detalle
                td.text-start Desconexión con el usuario.
              tr
                td.text-start ¿Qué acción podría derivarse?
                td.text-start Enlazar datos con decisiones.
                td.text-start Visualización sin impacto.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .subtitulo-destacado.mb-5
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto El tablero de contro
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") El tablero de control no debe concebirse como un repositorio permanente de métricas, sino como un mecanismo de seguimiento que permita detectar variaciones relevantes. Su función principal es señalar desviaciones respecto a lo esperado.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_28.png', class="img-fluid")
      .col-12.col-lg-7.mb-0(data-aos="zoom-in-right")
        p.mb-3 Un tablero eficaz concentra indicadores estratégicos y facilita comparación temporal. Cuando está correctamente diseñado, permite responder de manera casi inmediata si el desempeño se mantiene estable o requiere intervención.
        .tarjeta.color-acento-botones-cv.p-4.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0(data-aos="zoom-in-right") El exceso de indicadores genera ruido visual. Por ello, es recomendable que el tablero incluya únicamente variables que impacten directamente en los objetivos organizacionales. A continuación, se muestran los elementos que fortalecen el tablero.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 4.
          |  Elementos que fortalecen un tablero estratégico
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Sena, 2026.
            thead
              tr
                th.col-auto.col-lg-auto Elemento
                th.col-auto.col-lg-auto Función práctica
                th.col-auto.col-lg-auto Valor agregado en gestión
            tbody
              tr
                td.text-start Indicadores clave seleccionados.
                td.text-start Medir desempeño central.
                td.text-start Enfoque estratégico.
              tr
                td.text-start Comparación histórica visible.
                td.text-start Evaluar cambios.
                td.text-start Detección temprana de tendencias.
              tr
                td.text-start Señalización de variaciones.
                td.text-start Identificar desviaciones críticas.
                td.text-start Respuesta oportuna.
              tr
                td.text-start Actualización periódica.
                td.text-start Garantizar vigencia.
                td.text-start Decisiones basadas en información actual.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10.mb-0

        Separador

        #t_1_6.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.6 Metodología
        .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_29.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La metodología del manejo de datos comprende todos los pasos sistemáticos para recolectar, procesar, analizar e interpretar información, de modo que los datos dejen de ser cifras aisladas y se conviertan en conocimiento estratégico. En el contexto digital, las organizaciones generan grandes volúmenes de información: tráfico web, tasas de conversión, costos de adquisición, comportamiento del usuario, interacción en redes sociales y rendimiento publicitario. Sin embargo, el valor no reside en la acumulación de datos, sino en su comprensión profunda, contextualizada y metodológica. Este proceso incluye tanto la interpretación de resultados como la aplicación de los datos en la toma de decisiones.


    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .subtitulo-destacado.mb-5
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto Interpretación de resultados
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") Interpretar implica responder preguntas fundamentales: ¿qué está ocurriendo?, ¿por qué está ocurriendo?, ¿qué consecuencias tiene para la estrategia?, y ¿qué decisiones se derivan de esta información? Este proceso requiere pensamiento crítico, comprensión del modelo de negocio y capacidad de relacionar variables aparentemente independientes.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_30.svg', class="img-fluid")
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        p.mb-0 Por ejemplo, una disminución en la tasa de conversión no puede analizarse de manera aislada. Puede estar asociada a múltiples factores: cambios en la segmentación del público, modificación en el mensaje publicitario, problemas técnicos en la plataforma o incluso factores externos como variaciones estacionales. El análisis riguroso exige contrastar datos históricos, revisar métricas complementarias y comprender el contexto competitivo.
                
    .bg_img_3.mb-0

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-7
                  p.cita-decorada__texto.mb-2.p-3 Desde una perspectiva metodológica, la interpretación estratégica se apoya en distintos niveles de análisis:
                    br
                    br
                    ul.list-unstyled.mb-1
                      li.d-flex.align-items-start.mb-0
                        i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                        span El análisis descriptivo permite entender qué ocurrió.
                      li.d-flex.align-items-start.mb-0
                        i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                        span El análisis diagnóstico busca explicar por qué ocurrió.
                      li.d-flex.align-items-start.mb-0
                        i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                        span El análisis predictivo proyecta escenarios futuros.
                      li.d-flex.align-items-start.mb-0
                        i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                        span El análisis prescriptivo sugiere acciones concretas.
                .col-5.col-lg-5.d-none.d-lg-block 
                  figure
                    img(src='@/assets/curso/tema1/img_31.png', class="cita-decorada__imagen-flotante-1")
        .col-12.col-lg-10.mb-0
         p.mb-0(data-aos="zoom-in-right") Estos niveles no son independientes; forman un proceso progresivo que fortalece la toma de decisiones. Una organización que se limita al análisis descriptivo permanece en un nivel operativo. En cambio, cuando integra análisis predictivo y prescriptivo, evoluciona hacia un enfoque estratégico y prospectivo.

      .row.justify-content-center.align-items-center.mb-4
        .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_33.png', class="img-fluid")
        .col-12.col-lg-7.mb-0(data-aos="zoom-in-right")
          p.mb-3 Además, la interpretación efectiva requiere reconocer patrones y anomalías. Las tendencias sostenidas indican comportamientos estructurales del mercado, mientras que las variaciones abruptas pueden revelar problemas críticos o nuevas oportunidades. En este sentido, la interpretación se convierte en una herramienta de anticipación estratégica.
          p.mb-0 En la siguiente tabla de describen los niveles de análisis, enfoque, alcance y tipo de decisión derivada.

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10.mb-0
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
            h5 Tabla 5.
            |  Niveles de análisis e implicaciones estratégicas
          .tabla-a.mb-5(data-aos="flip-left")
            table
              caption 
                p Nota. Adaptada de Chunir Panjon et al, (2024); SENA, 2025.
              thead
                tr
                  th.col-auto.col-lg-auto Nivel de análisis
                  th.col-auto.col-lg-auto Enfoque conceptual
                  th.col-auto.col-lg-auto Alcance estratégico
                  th.col-auto.col-lg-auto Tipo de decisión derivada
              tbody
                tr
                  td.text-start Descriptivo.
                  td.text-start Explica qué ocurrió.
                  td.text-start Control operativo.
                  td.text-start Ajustes inmediatos.
                tr
                  td.text-start Diagnóstico.
                  td.text-start Identifica causas.
                  td.text-start Optimización táctica.
                  td.text-start Corrección de procesos.
                tr
                  td.text-start Predictivo.
                  td.text-start Proyecta escenarios.
                  td.text-start Planificación estratégica.
                  td.text-start Prevención de riesgos.
                tr
                  td.text-start Prescriptivo.
                  td.text-start Recomienda acciones.
                  td.text-start Innovación y ventaja competitiva.
                  td.text-start Transformación estratégica.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        p.mb-0 Un aspecto central en la interpretación es evitar errores cognitivos. La sobre interpretación de datos parciales, la confirmación de hipótesis previas sin evidencia suficiente o la confusión entre correlación y causalidad pueden conducir a decisiones erróneas. Por ello, el análisis debe fundamentarse en evidencia estadística y contraste de información.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Asimismo, la interpretación estratégica exige alineación con los objetivos organizacionales. No todas las métricas tienen el mismo peso. En una empresa enfocada en crecimiento, el volumen de adquisición puede priorizarse sobre la rentabilidad inmediata. En cambio, en una organización orientada a consolidación financiera, el ROI y el margen operativo serán prioritarios.
          br
          br
          | En consecuencia, interpretar resultados no es un acto técnico aislado, sino un proceso gerencial que conecta datos con visión empresarial.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
        .subtitulo-destacado.mb-5
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto Decisiones basadas en datos

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La toma de decisiones basada en datos representa un cambio paradigmático en la gestión empresarial contemporánea. Tradicionalmente, las decisiones estratégicas dependían en gran medida de la experiencia y la intuición directiva. Si bien estos elementos siguen siendo valiosos, el entorno digital exige respaldo cuantitativo para minimizar incertidumbre y riesgo.
        p.mb-0(data-aos="zoom-in-right") Decidir con base en datos implica integrar análisis estadístico, comprensión del mercado y evaluación de escenarios. El proceso no consiste simplemente en observar indicadores, sino en transformarlos en criterios objetivos que orienten la acción.
      .col-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_35.png', class="img-fluid") 

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_36.png', class="img-fluid")
      .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
        .tarjeta.color-primario-cv.p-5.rounded-0.mb-3(data-aos="zoom-in-right")
          p.mb-0(data-aos="zoom-in-right") Cuando una organización detecta un aumento en el costo de adquisición de clientes (CAC), por ejemplo, no debe reaccionar de manera impulsiva reduciendo inversión. Debe analizar variables asociadas: competencia publicitaria, segmentación, calidad del contenido, comportamiento del usuario y tasa de conversión. Solo a partir de este análisis integral puede determinar si la solución requiere optimización del embudo de ventas, ajuste presupuestario o rediseño estratégico.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.mb-3
        .tarjeta.color-terciario-cv.p-5.rounded-0.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-6.order-2.order-lg-1(data-aos="zoom-in-right")
              p.mb-3(data-aos="zoom-in-right") Desde una perspectiva estructural, la toma de decisiones basada en datos sigue un ciclo continuo:
              ol.lista-ol
                li.mb-0
                  span.text-bold a. 
                  | Definición clara del problema o meta estratégica.
                li.mb-0
                  span.text-bold b. 
                  | Recolección y validación de información relevante.
                li.mb-0
                  span.text-bold c. 
                  | Análisis integral y contextualizado.
                li.mb-0
                  span.text-bold d. 
                  | Evaluación de alternativas con proyección de impacto.
                li.mb-0
                  span.text-bold e. 
                  | Implementación controlada.
                li.mb-0
                  span.text-bold f. 
                  | Seguimiento y retroalimentación.
            .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_37.png', class="img-fluid")
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") Este ciclo transforma la gestión en un proceso dinámico y adaptable.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 6.
          |  Proceso integral de decisión estratégica basada en datos
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p Nota. Adaptada de Chunir Panjon et al., (2024); SENA, 2025.
            thead
              tr
                th.col-auto.col-lg-3 Fase
                th.col-auto.col-lg-auto Descripción conceptual
                th.col-auto.col-lg-auto Impacto organizacional
            tbody
              tr
                td.text-start Identificación.
                td.text-start Clarificación del problema o meta.
                td.text-start Enfoque estratégico claro.
              tr
                td.text-start Análisis.
                td.text-start Evaluación multidimensional de datos.
                td.text-start Reducción de incertidumbre.
              tr
                td.text-start Evaluación.
                td.text-start Comparación de alternativas.
                td.text-start Minimización de riesgo.
              tr
                td.text-start Implementación.
                td.text-start Aplicación controlada.
                td.text-start Acción medible.
              tr
                td.text-start Seguimiento.
                td.text-start Medición de resultados.
                td.text-start Mejora continua.
      .col-12.col-lg-10.mb-3
        p.mb-0(data-aos="zoom-in-right") Un componente fundamental es la cultura organizacional orientada a datos. La verdadera transformación ocurre cuando el análisis no depende únicamente de un área técnica, sino que permea todos los niveles jerárquicos. En una cultura data-driven:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
        .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6
                  ul.list-unstyled.cita-decorada__texto.mb-1.p-3 
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Las decisiones estratégicas se sustentan en indicadores.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Los equipos revisan métricas periódicamente.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Se fomenta la alfabetización digital.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Los errores se corrigen con base en evidencia.
                  p.cita-decorada__texto.mb-2.p-3 Esta cultura reduce la subjetividad y fortalece la competitividad.
                .col-12.col-lg-6.d-none.d-lg-block 
                  figure
                    img(src='@/assets/curso/tema1/img_38.png', class="cita-decorada__imagen-flotante-2")
    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_39.png', class="img-fluid")
      .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
        p.mb-3 En términos financieros, las organizaciones que adoptan decisiones basadas en datos suelen presentar mejoras en rentabilidad, optimización presupuestaria y eficiencia operativa. La capacidad de identificar oportunidades tempranas y anticipar riesgos proporciona ventajas sostenibles en mercados altamente dinámicos.
        p.mb-0 Finalmente, es importante comprender que los datos no sustituyen el liderazgo, sino que lo fortalecen. La dirección estratégica requiere interpretación humana, criterio ético y visión de largo plazo. Los datos orientan; los líderes deciden.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-5
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8.mb-4.mb-lg-0
                p.mb-4 Escucha el podcast <strong>“Charlas que venden”</strong> y su episodio
                TarjetaAudio.color-primario-o.mb-0(
                  texto="<h4 class='mb-0'>Decisiones y rentabilidad digital</h4>"
                  :audio="require('@/assets/curso/tema1/img_41.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = true"
                  style="border: none !important; padding: 0 !important; background: transparent !important;"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-8.col-lg-4.d-none.d-lg-block.position-relative
                figure
                  img(src='@/assets/curso/tema1/img_41.png', class="cita-decorada__imagen-flotante-3")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
