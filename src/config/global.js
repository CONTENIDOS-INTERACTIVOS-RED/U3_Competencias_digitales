export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1.',
        titulo: 'Navegación y gestión de contenidos en plataformas LMS',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo:
          'Uso de herramientas de videoconferencia y colaboración en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Creación y programación de reuniones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Acceso y configuración del perfil de usuario',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Configuración de audio y video',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo: 'Uso ético de la información en entornos virtuales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4.',
        titulo: 'Privacidad y seguridad en redes sociales y aplicaciones',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Competencias digitales_U3.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Al-Fraihat, D., Joy, M. & Sinclair, J. (2020). Evaluating E-learning systems success: An empirical study. Revista internacional de tecnología educativa en la educación superior.',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S0747563219302912',
    },
    {
      referencia:
        'Bailenson, J. N. (2021). Nonverbal overload: A theoretical argument for the causes of Zoom fatigue. Technology, Mind, and Behavior, 2(1).',
      link: 'https://doi.org/10.1037/tmb0000030',
    },
    {
      referencia:
        'Barron, J., Quintanilla, J., Rico, J. Gordillo, L., & Ojeda, B., M. (2014). Uso de un sistema para la gestión del aprendizaje (LMS) de código libre en la Universidad Tecnológica del Suroeste de Guanajuato (UTSOE).',
      link: 'https://oa.upm.es/36880/1/INVE_MEM_2014_197830.pdf',
    },
    {
      referencia:
        'Díaz-Carbonel, J., & Picho, P. (2021). Los sistemas de gestión de aprendizaje LMS en la educación virtual. Revista CIEG, 5(87), 95-109.',
      link:
        'https://revista.grupocieg.org/wp-content/uploads/2021/06/Ed.5087-95-Diaz-Carbonel-Picho.pdf',
    },
    {
      referencia:
        'García, J. & Mendez, J. (2013). Teoría de la Educación. Educación y Cultura en la Sociedad de la Información: El cerebro y las TIC. Universidad de Salamanca España.',
      link: 'https://www.redalyc.org/pdf/2010/201028055003.pdf',
    },
    {
      referencia:
        'Gonzalez, J., Cantu, M., Camacho, H. & Maldonado, J. (2018). Prácticas Innovadoras de Aprendizaje Emergentes en el Siglo XXI.',
      link: 'https://www.iiisci.org/journal/pdv/risci/pdfs/CA365KU17.pdf',
    },
    {
      referencia:
        'González, M. (2012). E-learning sincrónico: aspectos críticos para una planeación efectiva. Revista Academia y Virtualidad.',
      link: 'https://virtual2.umng.edu.co/distancia/revista/articulos/63.pdf',
    },
    {
      referencia:
        'Ministerio de Educación de Chile. (2020). Herramientas y recursos digitales. Biblioteca Digital del Ministerio de Educación.',
      link:
        'https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/16950/2020Herramientas%20y%20recursos%20digitales.pdf?sequence=1',
    },
    {
      referencia:
        'Molina, N., A. (2018). Impacto de internet y redes sociales en la salud mental de los jóvenes. Consaludmental.org.',
      link:
        'https://consaludmental.org/publicaciones/Impacto-internet-redes-sociales-salud-mental-jovenes.pdf',
    },
    {
      referencia:
        'Saldaña, L. & Barrio, M. (2021). Métodos y Estrategias de Aprendizaje en la Era Digital.',
      link: 'https://uvadoc.uva.es/bitstream/handle/10324/51002/TFM-G1535.pdf',
    },
    {
      referencia: 'Serving on Groups. (2024). Causas de la fatiga Zoom.',
      link:
        'https://servingongroups.org/wp-content/uploads/2024/03/Section-4_Resources_4-Causas-de-la-fatiga-zoom.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abreviaciones',
      significado:
        'Formas cortas de palabras o frases, utilizadas frecuentemente en mensajes informales, que pueden no ser apropiadas en contextos formales',
    },
    {
      termino: 'Colaboración',
      significado:
        'Acción de trabajar conjuntamente con otros para lograr un objetivo común, fomentando la comunicación y el intercambio de ideas',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Calidad de ser confidencial, o sea, la protección de información privada y sensible de ser divulgada sin permiso',
    },
    {
      termino: 'Consentimiento',
      significado:
        'Aprobación o permiso dado por una persona para que se use su información personal, especialmente en contextos digitales',
    },
    {
      termino: 'Contenidos',
      significado:
        'Materiales o información que se comparten a través de medios digitales, como textos, imágenes o videos',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de conocimientos, prácticas y valores que se comparten en un grupo social y que influyen en su comportamiento',
    },
    {
      termino: 'Desinformación',
      significado:
        'Información incorrecta o engañosa que se comparte sin verificar su veracidad, causando confusión o malentendidos',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y compartir los sentimientos de los demás, fundamental para la comunicación efectiva y el respeto',
    },
    {
      termino: 'Formalidad',
      significado:
        'Uso de un lenguaje y comportamiento adecuado a un contexto profesional o académico, que muestra respeto y seriedad',
    },
    {
      termino: 'Interacción',
      significado:
        'Acción de comunicarse o intercambiar ideas entre personas, especialmente en entornos digitales',
    },
    {
      termino: 'Netiqueta',
      significado:
        'Conjunto de normas y pautas de comportamiento que se deben seguir en la comunicación en línea para mantener un ambiente respetuoso',
    },
    {
      termino: 'Paciencia',
      significado:
        'Capacidad de esperar o tolerar sin frustración, esencial en la comunicación para permitir que todos se expresen',
    },
    {
      termino: 'Participación',
      significado:
        'Involucramiento activo en discusiones o actividades grupales, que fomenta el intercambio de ideas y el trabajo en equipo',
    },
    {
      termino: 'Plataformas',
      significado:
        'Espacios digitales donde se lleva a cabo la comunicación, como redes sociales, foros o aplicaciones de mensajería',
    },
    {
      termino: 'Privacidad',
      significado:
        'Derecho de las personas a mantener su información personal segura y a decidir quién puede acceder a ella',
    },
    {
      termino: 'Reputación',
      significado:
        'Percepción que tienen los demás sobre una persona, basada en sus acciones y comportamientos, especialmente en línea',
    },
    {
      termino: 'Respeto',
      significado:
        'Consideración y trato deferente hacia los demás, crucial para la convivencia y la comunicación efectiva',
    },
    {
      termino: 'Seguridad',
      significado:
        'Protección de la información personal y comunicación frente a accesos no autorizados y posibles amenazas en línea',
    },
    {
      termino: 'Sensacionalismo',
      significado:
        'Técnica de presentar información de manera exagerada o impactante para atraer atención, a menudo a costa de la verdad',
    },
    {
      termino: 'Turno',
      significado:
        'Momento o posición que le corresponde a una persona para hablar o participar en una conversación, esencial para un diálogo ordenado',
    },
  ],
  complementario: [
    {
      tema: 'Plataformas LMS',
      referencia:
        'FutureED. [Youtube]. (2020, Agosto 5). ¿Qué es un LMS y qué ventajas tiene utilizar una plataforma LMS?. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z7I6dEY8hGA',
    },
    {
      tema: 'Herramientas colaborativas',
      referencia:
        'Marketing4eCommerce. [Youtube]. (2023, Marzo 30). Herramientas colaborativas: qué son y por qué han revolucionado la forma de trabajar. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ftAzRtcKaDU',
    },
    {
      tema: 'Gestión del tiempo',
      referencia:
        'Sumo Primero en Terreno. [Youtube]. (2020, Mayo 19). Gestión del Tiempo - Línea Liderazgo Escolar. [Archivo de video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=haHoaG_8NZo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
