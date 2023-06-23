export default {
  global: {
    componenteFormativo: 'Principios de atención integral',
    descripcionCurso:
      'La atención y accesibilidad a los servicios de salud es un elemento fundamental en el desarrollo de las actividades de salud pública, porque, es un determinante en la calidad de vida y bienestar de las personas. Por esto, en este componente se estudiará el funcionamiento del sistema de atención integral en salud, procedimientos y normatividad asociada al cuidado ambiental y salud pública.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Política de atención integral en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Marco estratégico de la Política de Atención Integral en Salud (PAIS)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelo Integral de Atención en Salud (MIAS)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodología de evaluación de programas de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Enfoques y alcances de evaluación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etapas del proceso de evaluación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de recolección de información en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación de los sistemas de recolección de información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Instrumentos de recolección de información existentes en Colombia',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Normas de seguridad y conservación del medio ambiente y salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normatividad de importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Otras normas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Principio de rigor subsidiario',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Matriz legal ambiental',
            hash: 't_4_4',
          },
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.2  Etapas del proceso de evaluación',
      referencia:
        'Álvarez, C & Lara, A. (2014). Modelo de evaluación de programas de salud. Manual de operación.',
      tipo: 'Manual gubernamental',
      link:
        'https://saludcolima.gob.mx/images/documentos/ModeloDeEvaluacionDeProgramasDeSalud.pdf',
    },
    {
      tema:
        '1.1 Marco estratégico de la Política de Atención Integral en Salud (PAIS)',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de Atención Integral en Salud.',
      tipo: 'Política pública',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      tema: '4.4 Matriz legal ambiental',
      referencia:
        'Rodríguez, F. (s.f.). Matriz de requisitos legales. Programa de gestión ambiental empresarial. Secretaria Distrital de Ambiente (SDA). Bogotá. Colombia.',
      tipo: 'Presentaciones',
      link: 'https://oab.ambientebogota.gov.co/?post_type=dlm_download&p=3357',
    },
  ],
  glosario: [
    {
      termino: 'Afiliación',
      significado:
        'es el procedimiento mediante el cual los potenciales beneficiarios del Régimen Subsidiado y su núcleo familiar se vinculan al Sistema General de Seguridad Social en Salud. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Contrarreferencia',
      significado:
        'es la respuesta que las IPS receptoras de la referencia, dan al organismo o la unidad familiar. La respuesta puede ser la contra remisión del usuario con las debidas indicaciones a seguir o, simplemente, la información sobre la atención recibida por el usuario en una institución receptora, o el resultado de las solicitudes de ayuda diagnóstica. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Empresa social del Estado ESE',
      significado:
        'las Empresas Sociales del Estado constituyen una categoría especial de entidad pública, descentralizada, con personería jurídica, patrimonio propio y autonomía administrativa, creadas o reorganizadas por ley o por las asambleas o concejos. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Instituciones Prestadoras de Servicios de Salud IPS',
      significado:
        'son las Instituciones encargadas de prestar los servicios de salud en su nivel de atención correspondiente a los afiliados y beneficiarios dentro de los parámetros y principios señalados en la presente Ley. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Remisión',
      significado:
        'envío de usuarios o elementos de ayuda diagnóstica por parte de las IPS a otras IPS para atención o complementación diagnóstica, que, de acuerdo con el grado de complejidad, den respuesta a las necesidades de salud. (Ministerio de Salud y Protección Social, 2020).',
    },
    {
      termino: 'Sistema general de seguridad social en salud SGSSS',
      significado:
        'El Sistema de Seguridad Social en Salud (SGSSS) es la forma como se brinda un seguro que cubre los gastos de salud a los habitantes del territorio nacional, colombianos y extranjeros. (Ministerio de la protección social, 2004).',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, C. H., Lara Esqueda, A., Torres Lepe, C., Covarruvias Ortiz, L. (2014). Modelo de evaluación de programas de salud: Manual de operación. Secretaría de Salud y Bienestar Social del Estado de Colima.',
    },
    {
      referencia:
        'Bernal, O y Forero J. (2011). Sistemas de información en el sector salud en Colombia. Revista gerencia política en salud. Bogotá. Colombia.',
    },
    {
      referencia:
        'Presidencia de la república de Colombia. (26 de mayo de 2015). Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible [Decreto 1076 de 2015].',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social Decreto [Decreto 780 de 2016] Único Reglamentario del Sector Salud y Protección Social. Bogotá. Colombia. 6 de mayo 2016.',
    },
    {
      referencia:
        'García, C., García, J., y Vaca., M. (2013). Evolución del marco normativo de la salud ambiental en Colombia.',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2017). Lineamientos nacionales 2018 vigilancia y control en salud pública, Estrategia basada en casos predefinidos.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (Diciembre de 1993) [Ley 99 de 1993].',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-99-1993.pdf',
    },
    {
      referencia:
        'Ley 100 de 1993. [Congreso de la República de Colombia]. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Bogotá. Colombia. 23 de diciembre de 1993.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo sostenible. (s.f.). Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. ',
      link:
        'https://www.minambiente.gov.co/index.php/component/content/article/2093-plantilla-areas-planeacion-y-seguimiento-30',
    },
    {
      referencia:
        'Ministerio de Protección Social. (2004). Sistema de Seguridad Social en Salud. Ministerio de Protección Social.',
    },
    {
      referencia:
        'Ministerio de Salud. (7 de 2020). Cuadro de temas. Registro Único de Afiliados - RUAF. MINSALUD.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Paginas/Registro%C3%9AnicodeAfiliados-RUAF.aspx#:~:text=El%20Registro%20%C3%9Anico%20de%20Afiliados,la%20red%20de%20protecci%C3%B3n%20social%2C',
    },
    {
      referencia:
        'Ministerio de Salud. (17 de 7 de 2020). Planilla Integrada de Liquidación de Aportes. MINSALUD.',
      link: 'https://www.minsalud.gov.co/proteccionsocial/Paginas/pila.aspx',
    },
    {
      referencia:
        'Ministerio de Salud. (2015). Preguntas frecuentes RIPS. MINSALUD.',
    },
    {
      referencia:
        'Ministerio de Salud. (18 de 7 de 2020). SIHO - Sistema de Gestión Hospitalaria. MINSALUD.',
      link:
        'https://www.sispro.gov.co/central-prestadores-de-servicios/Pages/SIHO-Sistema-de-gestion-hospitalaria.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (15 de 7 de 2020). Glosario. MINSALUD. ',
      link: 'https://www.minsalud.gov.co/salud/Paginas/Glosario.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de atención integral en salud "Un sistema de Salud al servicio de la gente". Ministerio de Salud y Protección Social.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). PROGRAMA DE ELEMENTOS DE PROTECCIÓN PERSONAL, USO Y MANTENIMIENTO. Ministerio de Salud y Protección Social.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Salud Ambiental.',
      link: 'https://www.minsalud.gov.co/salud/Paginas/Salud-ambiental.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (16 de 7 de 2020). SISMED - Sistema de Información de Precios de Medicamentos. MINSALUD. Recuperado de',
      link:
        'https://www.sispro.gov.co/central-prestadores-de-servicios/Pages/SISMED-Sistema-de-Informacion-de-Precios-de-Medicamentos.aspx#:~:text=El%20Sistema%20de%20Informaci%C3%B3n%20de,lucha%20contra%20la%20pobreza%20y',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Sistema Integrado de Información de la Protección Social (SISPRO).  ',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      referencia:
        'Naranjo, M (2006). Evaluación de programas de salud. Revista Comunidad y Salud vol.4 no.2 Maracay dic. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1690-32932006000200005',
    },
    {
      referencia:
        'Resolución 1536 de 2015. [Ministerio de Salud y Protección Social]. Por la cual se establecen disposiciones sobre el proceso de planeación integral para la salud. Bogotá. Colombia. 11 de mayo de 2015.',
    },
    {
      referencia:
        'Resolución 518 de 2015. [Ministerio de Salud y Protección Social]. Por la cual se dictan disposiciones en relación con la Gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas - Pie. Bogotá. Colombia. 24 de febrero de 2015.',
    },
    {
      referencia:
        'Rodríguez, F. (s.f.). Matriz de requisitos legales. Programa de gestión ambiental empresarial. Secretaria Distrital de Ambiente (SDA). Bogotá. Colombia.',
    },
    {
      referencia:
        'Secretaría Distrital de Ambiente. (2015). Matriz de Requisitos Legales. Secretaría Distrital de Ambiente.',
    },
    {
      referencia:
        'Zapata, J. (2013).  Las reformas hospitalarias en los sistemas de salud en años recientes - un acercamiento al caso colombiano. Banco interamericano de desarrollo y centro de investigación económica y social.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
