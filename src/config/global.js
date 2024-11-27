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
        titulo: 'Técnicas de autoformación y aprendizaje autónomo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas para establecer metas y objetivos de aprendizaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategias de búsqueda y gestión de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso de herramientas tecnológicas para el autoaprendizaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de lectura comprensiva y toma de notas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Introducción al aprendizaje en línea',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo:
          'Gestión del tiempo y organización personal en la modalidad virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Importancia de la evaluación personal en el proceso de aprendizaje',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de autoevaluación',
            hash: 't_3_2',
          },
        ],
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
        download: 'downloads/Competencias digitales_U2.pdf',
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
        'Alcott, L. (2015). La importancia de la planificación: Estrategias para un día productivo. Editorial Gestión.',
      link:
        'https://www.gestioneditorial.com/planificacion-estrategias-productivas',
    },
    {
      referencia:
        'Allen, D. (2006). Organízate con eficacia: El arte de la productividad sin estrés. Editorial Sirio.',
      link: 'https://archive.org/details/organizate_con_eficacia',
    },
    {
      referencia:
        'Andrade, H. & Brookhart, S. (2016). Autoevaluación en el aula: Estrategias prácticas para mejorar el aprendizaje. ASCD.',
      link: 'https://www.ascd.org/autoevaluación-aprendizaje',
    },
    {
      referencia:
        'Bautista, G. (2015). Aprendizaje autónomo y tecnologías digitales. Universidad Oberta de Cataluña.',
      link: 'https://openaccess.uoc.edu/handle/10609/45242',
    },
    {
      referencia:
        'Blanchard, K. & Johnson, S. (2009). El ejecutivo al minuto. HarperCollins.',
      link: 'https://openlibrary.org/works/OL17367335W/El_ejecutivo_al_minuto',
    },
    {
      referencia:
        'Burka, J. B. & Yuen, L. M. (2008). Procrastinación: Por qué dejamos las cosas para después. Addison Wesley.',
      link: 'https://archive.org/details/procrastinacion',
    },
    {
      referencia:
        'Covey, S. (2016). Los 7 hábitos de la gente altamente efectiva. Paidós.',
      link:
        'https://openlibrary.org/works/OL15693062W/Los_7_habitos_de_la_gente_almente_efectiva',
    },
    {
      referencia:
        'Dzib Moo, D. L. B. & Avila Alexander, R. (2023). Teoría Pedagógica: guía didáctica: (1 ed.). Colegio de Ciencias y Artes de Tabasco.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/230467',
    },
    {
      referencia:
        'Fiore, N. (2007). El hábito de la procrastinación: Cómo superar el retraso y la postergación. Editorial Hachette.',
      link: 'https://archive.org/details/elhbitodelaprocrastinacin',
    },
    {
      referencia:
        'García Aretio, L. (2017). Aprender a aprender: Autoformación y aprendizaje autónomo en la era digital. Editorial UNED.',
      link: 'https://www.uned.es',
    },
    {
      referencia:
        'García León, J., García Martín, A., & Torres Picazo, M. (2015). gvSIG: guía para el aprendizaje autónomo.',
      link: '',
    },
    {
      referencia:
        'Gibbs, G. (2015). Evaluación del aprendizaje en educación superior. Universidad de Oxford.',
      link: 'https://www.ox.ac.uk/evaluacion-aprendizaje',
    },
    {
      referencia:
        'Goleman, D. (2018). Foco: El motor oculto de la excelencia. Casa aleatoria de pingüinos.',
      link: 'https://archive.org/details/focodangoleman',
    },
    {
      referencia:
        'Hattie, J. & Timperley, H. (2017). El poder de la retroalimentación: Mejorando el rendimiento de los estudiantes. Revista de Investigación Educativa.',
      link: 'https://www.reviewedresearch.org/feedback-power',
    },
    {
      referencia:
        'Herrera, J. (2015). Autonomía en el aprendizaje: Técnicas y estrategias. Educación Digital.',
      link: 'https://educaciondigital.org/autonomia_aprendizaje/',
    },
    {
      referencia:
        'Leiva, F. (2018). Estrategias para un aprendizaje autónomo eficaz. Educaciones Digitales.',
      link: 'http://www.educacionesdigitales.com/aprendizaje-autonomo/',
    },
    {
      referencia:
        'López, N., & Escudero, J. (2015). Evaluación y autoevaluación del aprendizaje: Nuevas perspectivas. Ediciones Universidad de Sevilla.',
      link: 'https://www.us.es/evaluacion-aprendizaje',
    },
    {
      referencia:
        'Martín, A. (Coord.), Mateu Gordon, J. L. (Coord.) & Guede Cid, R. (Coord.). (2023). Construyendo la educación del futuro en áreas de ingeniería, economía y STEM: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250276',
    },
    {
      referencia:
        'Morales Cevallos, M. B. (Coord.) & Berbel Oller, P. (Coord.). (2024). Desafíos de la educación contemporánea: perspectivas formativas para una sociedad digital: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271711',
    },
    {
      referencia:
        'Morgenstern, J. (2004). Tiempo para ti: Cómo hacer tiempo para las cosas que importan. Simón y Schuster.',
      link:
        'https://openlibrary.org/works/OL2142060W/Time_Management_from_the_Inside_Out',
    },
    {
      referencia:
        'Muñoz Maya, N. (Il.). (2024). Educación y didáctica: hacia una ampliación del canon en las aulas: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/264240',
    },
    {
      referencia:
        'Nicol, D. & Macfarlane-Dick, D. (2014). Principios de retroalimentación efectiva en la educación superior. Investigación Educativa.',
      link: 'https://www.educationalresearch.org/efectivo-feedback',
    },
    {
      referencia:
        'Ortiz, J. M. & Ruíz, P. M. (2019). Técnicas de autoformación para entornos virtuales. Ediciones Académicas.',
      link: 'http://www.edicionesacademicas.org/autoformacion/',
    },
    {
      referencia:
        'Panadero, E. (2017). Autoevaluación y coevaluación en el aprendizaje: Herramientas para la mejora continua. Prensa de la Universidad de Cambridge.',
      link: 'https://www.cambridge.org/auto-evaluacion',
    },
    {
      referencia:
        'Pérez, A., & Fernández, M. (2020). Autoformación en la educación superior: Estrategias y técnicas. Biblioteca Digital Universitaria.',
      link: 'https://bibliotecadigital.org/autoformacion-educacion-superior',
    },
    {
      referencia:
        'Prieto Castillo, D., Guevara Toledo, C. & Célleri Gomezcoello, A. (2023). Más allá de la defensa y el ataque. La evaluación como alternativa de aprendizaje: (1 ed.). Universidad del Azuay.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/233565',
    },
    {
      referencia:
        'Rodríguez, C. (2016). Habilidades para el aprendizaje autónomo. Editorial Innovación Educativa.',
      link: 'http://innovacioneducativa.net/aprendizaje-autonomo/',
    },
    {
      referencia:
        'Rogero García, J. & Durán Heras, M. Á. (2009). La investigación sobre el uso del tiempo. CIS - Centro de Investigaciones Sociológicas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/52033',
    },
    {
      referencia:
        'Sadler, D. R. (2010). Formas de retroalimentación que mejoran el rendimiento académico. Revista de Evaluación Educativa.',
      link: 'https://www.journalofassessment.org/feedback-academic-rendimiento',
    },
    {
      referencia:
        'Solé, M. (2013). El papel de la motivación en el aprendizaje autónomo. Universidad de Barcelona.',
      link: 'https://www.ub.edu/publicaciones/autoaprendizaje-motivacion',
    },
    {
      referencia:
        'Tracy, B. (2013). Tráguese ese sapo: 21 maneras de dejar de postergar y realizar más en menos tiempo. Editorial Empresa Activa.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje autónomo',
      significado:
        'Capacidad de dirigir y gestionar el propio proceso de aprendizaje, estableciendo metas, recursos y evaluando el progreso de manera independiente',
    },
    {
      termino: 'Autodisciplina',
      significado:
        'Habilidad de una persona para establecer y seguir rutinas y hábitos sin necesidad de supervisión externa',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Proceso mediante el cual una persona analiza y evalúa su propio desempeño o aprendizaje para identificar áreas de mejora',
    },
    {
      termino: 'Autoformación',
      significado:
        'Proceso en el que una persona adquiere conocimientos y habilidades por iniciativa propia, sin depender exclusivamente de la instrucción formal',
    },
    {
      termino: 'Calendario',
      significado:
        'Herramienta para la organización del tiempo que permite distribuir actividades, fechas y plazos a lo largo de un período definido',
    },
    {
      termino: 'Diagrama de Gantt',
      significado:
        'Herramienta visual para planificar y gestionar proyectos, mostrando las tareas en un cronograma y permitiendo organizar el tiempo de forma más eficaz',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Tipo de evaluación continua durante el proceso de aprendizaje, que permite ajustar el enfoque y mejorar el desempeño antes de una evaluación final',
    },
    {
      termino: 'Gestión del conocimiento',
      significado:
        'Proceso de adquirir, organizar, compartir y aplicar el conocimiento de manera eficiente para mejorar el aprendizaje',
    },
    {
      termino: 'Matriz de Eisenhower',
      significado:
        'Herramienta para priorizar tareas dividiéndolas según su urgencia e importancia, ayudando a mejorar la gestión del tiempo',
    },
    {
      termino: 'Metacognición',
      significado:
        'Capacidad de pensar sobre los propios procesos de pensamiento y aprendizaje, facilitando la autogestión del conocimiento y el ajuste de estrategias de aprendizaje',
    },
    {
      termino: 'Motivación intrínseca',
      significado:
        'Impulso interno que mueve a una persona a aprender o realizar una actividad por el interés y satisfacción personal que le genera',
    },
    {
      termino: 'Objetivos SMART',
      significado:
        'Metodología para establecer objetivos que sean específicos, medibles, alcanzables, relevantes y con un tiempo definido para su consecución',
    },
    {
      termino: 'Planificación',
      significado:
        'Organización y diseño previo de las acciones o tareas que deben realizarse en un período determinado, con el fin de alcanzar objetivos específicos',
    },
    {
      termino: 'Principio de Pareto',
      significado:
        'Regla que sugiere que el 80% de los resultados provienen del 20% de los esfuerzos, aplicado a la gestión del tiempo para centrarse en las actividades más productivas',
    },
    {
      termino: 'Prioridad',
      significado:
        'Proceso de identificar y ordenar las tareas o actividades según su importancia o urgencia para una gestión eficaz del tiempo',
    },
    {
      termino: 'Procrastinación',
      significado:
        'Tendencia a postergar o retrasar tareas importantes en favor de otras actividades menos relevantes o placenteras',
    },
    {
      termino: 'Reflexión',
      significado:
        'Proceso de análisis y pensamiento crítico sobre las acciones, aprendizajes o comportamientos para generar nuevas ideas o soluciones',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información o respuestas que una persona recibe sobre su desempeño o proceso de aprendizaje, con el fin de mejorar o ajustar sus acciones futuras',
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
