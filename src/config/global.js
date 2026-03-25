export default {
  global: {
    Name: 'Análisis de datos y cliente digital',
    Description:
      'El componente formativo desarrolla competencias para gestionar datos estratégicos, comprender el comportamiento del cliente digital, aplicar métricas web y KPI, evaluar la rentabilidad mediante conversión y ROI, interpretar resultados y tomar decisiones basadas en datos, su manejo bajo la normatividad, utilizando herramientas de visualización como tableros de control y reportes estratégicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Datos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Tipos', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Parámetros', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Procesamiento', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Herramientas', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Metodología', hash: 't_1_6' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas de seguimiento web',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Medición', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Niveles', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Alcances', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Tipología', hash: 't_2_4' },
          { numero: '2.5', titulo: 'Metodología', hash: 't_2_5' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Impacto',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Tráfico y resultados', hash: 't_3_2' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Parámetros de medición', hash: 't_4_2' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tratamiento de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Definición', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Principios', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Registros', hash: 't_5_3' },
          { numero: '5.4', titulo: 'Criterios éticos', hash: 't_5_4' },
          { numero: '5.5', titulo: 'Bases de datos', hash: 't_5_5' },
          { numero: '5.6', titulo: 'Normatividad', hash: 't_5_6' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],*/
  glosario: [
    {
      termino: 'Adquisición',
      significado:
        'Proceso de captar nuevos clientes mediante estrategias digitales.',
    },

    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de reglas que procesan datos para generar resultados automáticos.',
    },

    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de examinar información para obtener conclusiones útiles.',
    },

    {
      termino: '<em>Big Data</em>',
      significado:
        'Grandes volúmenes de datos que requieren herramientas especializadas para su procesamiento.',
    },

    {
      termino: 'Cliente digital',
      significado:
        'Usuario que interactúa con marcas a través de entornos digitales.',
    },

    {
      termino: 'Conversión',
      significado:
        'Acción en la que un usuario cumple el objetivo esperado en un canal digital.',
    },

    {
      termino: 'Costo por adquisición (CPA)',
      significado:
        'Inversión promedio necesaria para obtener un nuevo cliente.',
    },

    {
      termino: 'Dato estratégico',
      significado:
        'Información relevante que apoya la toma de decisiones organizacionales.',
    },

    {
      termino: 'Decisiones basadas en datos',
      significado:
        'Elección de acciones sustentadas en evidencia cuantificable.',
    },

    {
      termino: 'Experiencia del cliente',
      significado:
        'Percepción generada por la interacción del usuario con la marca.',
    },

    {
      termino: 'Fuentes digitales',
      significado:
        'Canales en línea que generan datos como sitios web y redes sociales.',
    },

    {
      termino: 'Indicador',
      significado: 'Variable que permite medir el desempeño de un proceso.',
    },

    {
      termino: 'Interpretación de resultados',
      significado:
        'Análisis de métricas para comprender su impacto y significado.',
    },

    {
      termino: '<em>KPI</em>',
      significado:
        'Indicador clave de desempeño alineado con objetivos estratégicos.',
    },

    {
      termino: 'Métrica web',
      significado:
        'Medición cuantitativa del comportamiento en entornos digitales.',
    },

    {
      termino: 'Optimización',
      significado:
        'Proceso de mejora continua para aumentar eficiencia y resultados.',
    },

    {
      termino: 'Perfil digital',
      significado:
        'Conjunto de características y comportamientos del usuario en línea.',
    },

    {
      termino: 'Rentabilidad digital',
      significado:
        'Capacidad de generar beneficios económicos en canales digitales.',
    },

    {
      termino: '<em>ROI</em>',
      significado:
        'Retorno sobre la inversión que mide la ganancia obtenida frente al gasto realizado.',
    },

    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },

    {
      termino: 'Tablero de control',
      significado:
        'Herramienta visual que integra indicadores clave en tiempo real.',
    },

    {
      termino: 'Tasa de conversión',
      significado: 'Porcentaje de usuarios que realizan la acción deseada.',
    },

    {
      termino: 'Toma de decisiones',
      significado:
        'Proceso de seleccionar acciones con base en análisis previo.',
    },

    {
      termino: 'Tráfico web',
      significado: 'Cantidad de visitantes que ingresan a un sitio digital.',
    },

    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información para facilitar su comprensión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaffey, D., & Ellis-Chadwick, F. (2019). <em>Digital marketing</em> (7th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Chunir Panjon, R. P., Vásquez Erazo, E. J., & Álvarez Gavilanes, J. E. (2024). <em>Analítica web y métricas de resultados: evaluación de la efectividad de las estrategias digitales</em>. Revista Metropolitana de Ciencias Aplicadas, 7(2), 155–164.',
      link: 'https://remca.umet.edu.ec/index.php/REMCA/article/view/462',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <em>Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales</em>. Diario Oficial No. 48.587.',
      link: '',
    },
    {
      referencia:
        'Comunicación Digital. (2017). <em>Manual de marketing digital para formadores</em>. Comunicación Digital.',
      link:
        'https://comunicaciondigital.com.co/wp-content/uploads/2020/04/manual-marketing-digital.pdf',
    },
    {
      referencia:
        'Gómez, J. (2019). <em>Métricas digitales y KPI: Guía práctica para la gestión y medición del rendimiento online</em>. Editorial Académica Española.',
      link: '',
    },
    {
      referencia:
        'Kaushik, A. (2011). <em>Analítica Web 2.0: El arte de analizar resultados y la ciencia de centrarse en el cliente</em>. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Laudon, K. C., & Laudon, J. P. (2020). <em>Sistemas de información gerencial</em> (16.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M., & Sánchez, P. (2020). <em>Marketing digital y analítica web: Conceptos, métricas y estrategias</em>. Ediciones Gestión Actual.',
      link: '',
    },
  ],
  Creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
