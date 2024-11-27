<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Competencias de autoformación y autogestión del aprendizaje'" :subTitulo="'1. Técnicas de autoformación y aprendizaje autónomo'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.pb-0.px-md-5.pt-md-5.overflow-hidden
    
    p.mb-4 El aprendizaje autónomo ofrece la libertad de decidir cómo, cuándo y qué aprender, potenciando la capacidad para enfrentar nuevos desafíos con confianza y determinación. A través de estas técnicas, se aprende a diseñar y gestionar el propio plan de estudios, desarrollando la autodisciplina y la curiosidad necesarias para avanzar de manera independiente. 

    .row.mb-5
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-azul.p-4.mb-4.h-100(data-aos="fade-right")
          img.me-3.my-auto(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column.my-auto
            p.pe-xl-3.mb-0(data-aos="fade-up") Se exploran métodos prácticos para optimizar las habilidades de estudio, como la lectura comprensiva, la toma de notas, la creación de resúmenes y el uso eficaz de herramientas tecnológicas.     
      .d-none.d-xl-block.col-xl-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    h2.mb-4 Introducción a la autoformación y el aprendizaje autónomo
    p.mb-4 La <strong>autoformación y el aprendizaje autónomo</strong> son competencias esenciales en el mundo actual, donde el <strong>acceso a la información</strong> es amplio y las personas deben adaptarse rápidamente a entornos educativos y laborales en constante cambio. En este apartado, se define el aprendizaje autónomo, se destacan sus características principales y se explora cómo empezar a desarrollarlo para convertirse en el motor de un proceso educativo propio (Bautista, 2015).

    h2.mb-4 ¿Qué es el aprendizaje autónomo? 

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-rosa.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El aprendizaje autónomo es la capacidad de dirigir el propio proceso de aprendizaje sin depender exclusivamente de un docente o de una estructura académica formal. Implica que uno mismo es el principal responsable de identificar lo que necesita aprender, elegir las estrategias más adecuadas y evaluar su propio progreso a lo largo del tiempo.
        p A diferencia de los modelos educativos tradicionales, donde un profesor guía el proceso, aquí se toma el control de la evolución educativa. Desarrollar esta habilidad es fundamental, ya que permite adaptarse de manera ágil a nuevas demandas académicas y profesionales. Además, el aprendizaje autónomo brinda la libertad de explorar temas de interés, desarrollar habilidades al propio ritmo y mantenerse actualizado en un mundo en constante evolución.

    h2.mb-4 Características del aprendizaje autónomo
    p.mb-4 El aprendizaje autónomo presenta ciertas características que lo distinguen de otros enfoques educativos tradicionales:

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Proactividad
              p En lugar de esperar que otros le indiquen qué aprender, es necesario tomar la iniciativa, buscando información, recursos y oportunidades para adquirir conocimientos y habilidades por cuenta propia.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Autodirección 
              p Implica la capacidad de planificar el propio proceso de aprendizaje, estableciendo metas claras, organizando el tiempo de manera eficiente y seleccionando las herramientas o técnicas más apropiadas para alcanzar los objetivos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Autorregulación 
              p En el aprendizaje autónomo, cada persona evalúa su propio progreso, reflexionando sobre lo aprendido y lo que aún falta mejorar, ajustando los métodos según los resultados obtenidos (Ortiz & Ruíz, 2019).
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Flexibilidad
              p Permite adaptar las estrategias de aprendizaje según las necesidades y circunstancias personales, eligiendo los momentos del día en los que se realiza el estudio con mayor productividad, el entorno más adecuado para concentrarse y los recursos que mejor se adapten al estilo de aprendizaje (Leiva, 2018).
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    h2.mb-4 Ventajas del aprendizaje autónomo
    p.mb-4 Optar por el aprendizaje autónomo brinda una serie de beneficios clave que fortalecen tanto el desarrollo personal como profesional. Al tomar el control de su propio proceso educativo, el estudiante adquiere habilidades esenciales para gestionar eficazmente su aprendizaje. A continuación, se presentan las principales ventajas de este enfoque:

    .row.mb-5
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Control sobre el propio aprendizaje y educación.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Desarrollo de habilidades metacognitivas.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Libertad para priorizar temas relevantes según objetivos.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Avance a ritmo propio en el proceso de aprendizaje.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Fomento de habilidades de planificación, monitoreo y evaluación.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Adaptación a nuevos contextos y evolución del conocimiento.
        .bg-azul.px-4.py-12px.border-bottom-azul
          p.mb-0 Motivación interna que enriquece el proceso autónomo.
        .bg-azul.px-4.py-12px
          p.mb-0 Mayor satisfacción en el aprendizaje al asumir la responsabilidad.  

    h2.mb-5 Desafíos del aprendizaje autónomo
    p.mb-4 Aunque el aprendizaje autónomo ofrece numerosas ventajas, también presenta desafíos. La falta de estructura externa puede llevar a momentos de desmotivación o confusión. Además, se necesita desarrollar autodisciplina para asegurar un progreso continuo, ya que no se cuenta con una supervisión constante (Rodríguez, 2016). 

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Superar estos retos implica trabajar en habilidades como la gestión del tiempo, la organización y el autoconocimiento. Saber cuándo cambiar de enfoque o solicitar ayuda también es crucial para mantenerse en el camino adecuado.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    h2.mb-4 Cómo desarrollar el aprendizaje autónomo
    p.mb-5 Para fortalecer la capacidad de aprender de manera autónoma, se proponen algunas estrategias útiles:

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img.-mt-18px(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Autoevaluación continua")
            p Reflexionar regularmente sobre lo aprendido y ajustar los métodos según sea necesario.
          .div(titulo="Establecimiento de metas claras")
            p Definir objetivos específicos ayuda a mantener el enfoque y la motivación a largo plazo.
          .div(titulo="Planificación del tiempo")
            p Crear un horario de estudio que permita equilibrar las responsabilidades académicas y personales (Pérez & Fernández, 2020).
          .div(titulo="Búsqueda activa de recursos")
            p Aprovechar plataformas de aprendizaje en línea, bibliotecas digitales y foros para encontrar el material necesario.

    p.mb-5 Este enfoque integral fomenta un aprendizaje autónomo y efectivo, permitiendo a cada persona gestionar su desarrollo académico y profesional de manera independiente y adaptativa.


    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 ¿Has considerado la importancia de la autodisciplina y la motivación en el aprendizaje autónomo? 
          p.mb-5 Los invitamos a explorar este documento <strong>Autodisciplina y motivación en el aprendizaje</strong>, que aborda cómo estas habilidades son esenciales para alcanzar el éxito en entornos de estudio independiente. Desde establecer rutinas efectivas hasta mantener una motivación constante y gestionar el tiempo con precisión, este enfoque proporciona estrategias prácticas para desarrollar una organización personal sólida. Descubra cómo la autodisciplina y la motivación, combinadas con una buena gestión del tiempo, pueden transformar su experiencia de aprendizaje y ayudarle a alcanzar sus metas educativas.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" style="max-width: 500px" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-4 <strong>Anexo.</strong> ¿Has considerado la importancia de la autodisciplina y la motivación en el aprendizaje autónomo? 
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Técnicas para establecer metas y objetivos de aprendizaje

    p.mb-4 Establecer metas y objetivos de aprendizaje claros es fundamental para dirigir los esfuerzos y alcanzar el éxito en los estudios (González & Pérez, 2022). Al definir lo que se desea lograr, se concentra la energía y los recursos en actividades que acercan a esos objetivos, proporcionando una hoja de ruta para saber hacia dónde se dirige y cómo llegar allí.

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-verde.p-4(data-aos="fade-left")
        p.text-bold.me-auto La importancia de establecer metas
        p.mb-0(data-aos="fade-up") Cuando se estudia de forma autónoma, es esencial definir metas concretas para mantener la orientación. Sin una dirección clara, es posible que se sienta desorganización o desmotivación. Las metas proporcionan propósito y permiten medir el progreso, lo cual es clave para mantener la motivación a largo plazo (López & Fernández, 2019). Además, metas bien definidas facilitan desglosar objetivos a largo plazo en etapas más alcanzables.

    .row.position-relative.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
    
        h2.mb-4 Establecimiento de metas SMART
        p.mb-4 Una técnica eficaz para definir metas es el método SMART, que permite establecer metas claras y alcanzables:

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
              figcaption.mt-3.bg-azul-claro Aplicar la técnica SMART facilita organizar el tiempo de estudio de forma eficiente (Díaz, 2023).

          .tarjeta.bg-white.p-4(x="19%" y="64.5%" numero="+")
            .h5.mb-2 Específicas
            p Definir claramente lo que se quiere lograr, evitando vaguedades. Ejemplo: “quiero aprender a redactar ensayos académicos con una estructura clara en tres meses.”
          .tarjeta.bg-white.p-4(x="34.5%" y="64.5%" numero="+")
            .h5.mb-2 Medibles
            p Asegurarse de que el progreso sea cuantificable con indicadores claros, como el número de ensayos escritos o la retroalimentación recibida.
          .tarjeta.bg-white.p-4(x="49.5%" y="64.5%" numero="+")
            .h5.mb-2 Alcanzables
            p Las metas deben ser realistas, considerando recursos y habilidades actuales.
          .tarjeta.bg-white.p-4(x="65%" y="64.5%" numero="+")
            .h5.mb-2 Relevantes
            p Las metas deben alinearse con intereses y prioridades personales o profesionales para mantener la motivación.
          .tarjeta.bg-white.p-4(x="80.5%" y="64.5%" numero="+")
            .h5.mb-2 Temporales
            p Establecer un plazo específico evita la procrastinación y crea un sentido de urgencia. Ejemplo: “completar un ensayo académico por semana durante tres meses.”

        .row.justify-content-center.card_hover(data-aos="zoom-in-up")
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-17.svg', style="width: 90px")
              p.mb-3.text-center.text-bold Metas a corto plazo. 
              p.mb-0.text-center.text-small Logros alcanzables en días o semanas, como leer un capítulo de un libro o completar una lección en línea. 
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-down")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-18.svg', style="width: 90px")  
              p.mb-3.text-center.text-bold Metas a mediano plazo. 
              p.mb-0.text-center.text-small Objetivos intermedios que suelen alcanzarse en semanas o meses, como aprobar un examen parcial o completar un proyecto de investigación.
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-left")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-19.svg', style="width: 90px")  
              p.mb-3.text-center.text-bold  Metas a largo plazo. 
              p.mb-0.text-center.text-small Son metas más ambiciosas que requieren meses o años, como terminar una carrera o dominar una nueva habilidad.
          
    p.mb-0(data-aos="fade-up") Este enfoque proporciona control sobre el progreso y ayuda a mantener los objetivos finales en mente, incluso ante desafíos (García, 2021).

    .row.position-relative.mb-5.py-4.bg-fondo-4.bg-full-width
      div.px-4.px-md-5.py-md-3
        h2.mb-4 Técnicas de planificación para alcanzar tus metas
        p.mb-4 Una vez definidas las metas, es esencial desarrollar un plan de acción. Un cronograma de actividades permite distribuir los esfuerzos de manera eficaz. A continuación, algunas técnicas útiles:

        TabsC.bg-white
          .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="1. Desglosa las tareas.", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 1. Desglosa las tareas. 
                p(data-aos="fade-up") Dividir cada meta en tareas específicas. Ejemplo: para aprobar un examen, dividir en “leer capítulos,” “tomar apuntes,” “hacer ejercicios de práctica,” y “revisar material.” (Bustínduy, 2021).
          .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="2. Establece plazos realistas. ", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 2. Establece plazos realistas. 
                p(data-aos="fade-up") Fijar fechas límite alcanzables para cada tarea, evitando sobrecargas que puedan generar estrés (Covey, 2016).
          .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="3. Revisa tu progreso regularmente. ", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 3. Revisa tu progreso regularmente. 
                p(data-aos="fade-up") Verificar el avance periódicamente para ajustar el plan y redirigir esfuerzos en caso necesario (Tracy, 2013).
          .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="4. Sé flexible y adaptable.  ", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 4. Sé flexible y adaptable.  
                p(data-aos="fade-up") Estar dispuesto a ajustar los planes si surgen imprevistos, manteniendo el objetivo final en mente (Allen, 2006).
    
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Estrategias de búsqueda y gestión de la información

    .row.mb-5
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-rosa.p-4.mb-4.h-100(data-aos="fade-right")
          img.me-3.my-auto(style="width: 90px" src='@/assets/curso/unidad/img-25.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column.my-auto
            p.pe-xl-3.mb-0(data-aos="fade-up") En el entorno digital actual, saber buscar y gestionar información es crucial para el aprendizaje autónomo. Si no se organiza y filtra correctamente la información disponible, se puede perder tiempo o acceder a datos no confiables. A continuación, se describen estrategias para optimizar la búsqueda y gestión de información.
      .d-none.d-xl-block.col-xl-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')   

    h2.mb-4 La importancia de las estrategias de búsqueda
    p.mb-0 Una búsqueda eficiente comienza con la definición clara del tema o pregunta. Es importante utilizar palabras clave precisas para acceder a los resultados más relevantes, evitando información irrelevante (Leiva, 2018).

    
    .row.position-relative.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        
        h2.mb-4 Uso de operadores de búsqueda
        p.mb-4 Para mejorar los resultados en buscadores, es útil aplicar operadores de búsqueda:

        .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
          div.px-4.px-md-5.py-md-3
            
            SlyderA(tipo="b").bg-white
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                  p.text-bold Comillas (" ")
                  p Busca resultados exactos. Ejemplo: “aprendizaje autónomo.”
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                  figure
                    img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                  p.text-bold Asterisco (*)
                  p Funciona como comodín para variaciones. Ejemplo: “estrategias * estudio.”
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                  figure
                    img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                  p.text-bold Sitio:
                  p Limita la búsqueda a un sitio específico. Ejemplo: “aprendizaje site:.edu.”
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                  figure
                    img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
              .row.p-4.px-md-5.py-lg-5.justify-content-between
                .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                  p.text-bold Menos (-)
                  p Excluye términos específicos. Ejemplo: “aprendizaje autónomo -niños” para evitar resultados relacionados con educación infantil.
                .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                  figure
                    img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            
        h2.mb-4 Evaluación de la confiabilidad de las fuentes
        p.mb-4 Es importante verificar la calidad y confiabilidad de las fuentes considerando criterios como autoría, fecha de publicación, fuentes y referencias, y objetividad.


        .row.mb-0.justify-content-center.card_hover(data-aos="zoom-in-up")
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-start.p-3.h-100
              img(src='@/assets/curso/unidad/img-31.svg', style="width: 68px")
              .d-flex.flex-column.ms-3.justify-content-center
                p.text-bold.mb-2 Autoría
                p.mb-3.text-small Verificar la experiencia del autor en el tema.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-start.p-3.h-100
              img(src='@/assets/curso/unidad/img-31.svg', style="width: 68px")
              .d-flex.flex-column.ms-3.justify-content-center
                p.text-bold.mb-2 Fecha de publicación.
                p.mb-3.text-small Asegurarse de que la información sea actual, especialmente en temas como tecnología o ciencia (Sadler, 2010).
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-start.p-3.h-100
              img(src='@/assets/curso/unidad/img-31.svg', style="width: 68px")
              .d-flex.flex-column.ms-3.justify-content-center
                p.text-bold.mb-2 Fuentes y referencias. 
                p.mb-3.text-small Preferir artículos que citen estudios o investigaciones que respalden la información (Boud, 2013).
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-start.p-3.h-100
              img(src='@/assets/curso/unidad/img-31.svg', style="width: 68px")
              .d-flex.flex-column.ms-3.justify-content-center
                p.text-bold.mb-2 Objetividad.
                p.mb-3.text-small Evaluar si la fuente tiene algún sesgo comercial o ideológico que pueda distorsionar la presentación de los hechos.

    h2.mb-4 Gestión de la información
    p.mb-4 Una vez encontradas las fuentes confiables, es fundamental organizarlas para facilitar su uso posterior. Esto incluye tomar notas, organizar la información en categorías y registrar referencias.

    TabsC.bg-white.mb-5
      .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="Toma de notas", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Toma de notas 
            p(data-aos="fade-up") Resumir puntos clave y organizar información de manera accesible, utilizando aplicaciones como Evernote o Notion.
      .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="Organización por categorías", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Organización por categorías
            p(data-aos="fade-up") Clasificar la información en temas específicos, creando carpetas o documentos para cada categoría.
      .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="Referencias bibliográficas", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Referencias bibliográficas 
            p(data-aos="fade-up") Usar gestores de referencias como Zotero o Mendeley para almacenar citas y generar bibliografías.
      .tabs-content.border.px-4.p-md-5.py-3.bg-azul-claro-1(titulo="Almacenamiento en la nube", :iconUrl="require('@/assets/curso/unidad/img-20.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Almacenamiento en la nube 
            p(data-aos="fade-up") Utilizar servicios como Google Drive para acceder a la información desde cualquier dispositivo y evitar pérdida de datos.

    h2.mb-4 Herramientas para la búsqueda y gestión de información
    p.mb-4 Además de motores de búsqueda, existen herramientas específicas que optimizan el acceso y la organización de la información.

    .row.position-relative.mb-4.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Google Scholar
              p deal para buscar artículos científicos y estudios académicos de alta calidad (Bautista, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Bases de datos académicos
              p Plataformas como Scopus, JSTOR o ProQuest ofrecen acceso a artículos especializados, libros y conferencias.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Feeds RSS
              p Usar lectores de RSS como Feedly para seguir blogs y páginas relevantes, manteniéndose actualizado sin visitar cada sitio individualmente.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Evernote o Notion
              p Aplicaciones para organizar y gestionar notas, permitiendo clasificar y etiquetar información de manera visual y práctica (García Aretio, 2017).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

    p.mb-5 Mantener la organización a lo largo del tiempo es clave, revisando periódicamente notas y archivos para actualizar y eliminar información obsoleta. También se recomienda realizar copias de seguridad para preservar datos valiosos en caso de problemas técnicos.
    
    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Uso de herramientas tecnológicas para el autoaprendizaje
    
    p.mb-4 El uso de herramientas tecnológicas facilita el autoaprendizaje, ya que permite acceder a diversos recursos, interactuar de manera dinámica y desarrollar habilidades de forma independiente. Aquí se presentan algunas herramientas útiles para el autoaprendizaje, junto con sus aplicaciones prácticas:
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img.-mt-18px(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Plataformas de Cursos en Línea (MOOC)")
            p Plataformas como Coursera, edX y Udemy ofrecen una amplia variedad de cursos, desde introducciones hasta especializaciones avanzadas, permitiendo el aprendizaje flexible (Ortiz & Ruiz, 2019).
          .div(titulo="Aplicaciones de gestión del aprendizaje")
            p Herramientas como Notion, Trello o Todoist ayudan a organizar actividades, monitorear el progreso, planificar tareas y establecer metas y cronogramas.
          .div(titulo="Lectura digital y recursos en línea")
            p Google Books, Project Gutenberg y JSTOR permiten acceder a libros electrónicos y artículos académicos.
          .div(titulo="Herramientas de vídeos educativos")
            p Plataformas como YouTube, Khan Academy y TED-Ed son útiles para visualizar y entender conceptos complejos a través de contenido visual.

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Redes sociales y comunidades de aprendizaje")
            p Plataformas como Coursera, edX y Udemy ofrecen una amplia variedad de cursos, desde introducciones hasta especializaciones avanzadas, permitiendo el aprendizaje flexible (Ortiz & Ruiz, 2019).
          .div(titulo="Aplicaciones de flashcards y memorización")
            p Aplicaciones como Anki y Quizlet permiten crear tarjetas de estudio digitales para reforzar conocimientos de forma interactiva.
          .div(titulo="Herramientas de creación de contenidos")
            p Herramientas como Canva, Prezi y Adobe Spark son útiles para crear presentaciones, infografías y contenido visual, fomentando el aprendizaje y la creatividad.
          .div(titulo="Aplicaciones para el aprendizaje de idiomas")
            p Aplicaciones como Duolingo, Babbel y Memrise ofrecen un aprendizaje interactivo y ameno para nuevos idiomas o el perfeccionamiento de habilidades lingüísticas.
          .div(titulo="Podcasts educativos")
            p Plataformas como Spotify y Apple Podcasts ofrecen podcasts educativos variados que complementan el aprendizaje, ideales para escuchar mientras se realizan otras actividades.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img.-mt-18px(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    #t_1_4.titulo-segundo
      div.d-flex
        span.me-3 1.4  
        h2 Técnicas de lectura comprensiva y toma de notas
    p.mb-5 La lectura comprensiva y la toma de notas son habilidades clave para maximizar el aprendizaje, permitiendo no solo entender mejor la información, sino también retenerla y aplicarla en ejercicios o evaluaciones futuras (Rodríguez, 2016).

    h2.mb-4 Lectura comprensiva: estrategias para mejorar el entendimiento
    p.mb-4 La lectura comprensiva implica captar el significado completo de un texto y sus ideas principales. A continuación, algunas técnicas recomendadas:

    .row.position-relative.mb-4.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Lectura previa (Skimming)
              p Realizar una lectura rápida para obtener una visión general del contenido, identificando títulos, subtítulos y frases clave para anticipar el contenido relevante (Palacios, 2019).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Lectura profunda (Escaneo)
              p Leer detalladamente para comprender las ideas principales y secundarias, subrayando puntos clave y haciendo pausas para reflexionar sobre el texto (Bautista, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Preguntas activas
              p Formular preguntas mientras se lee, como "¿Cuál es el mensaje principal?" o "¿Cómo se relaciona con el tema general?", para consolidar el contenido (García Aretio, 2017).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Lectura crítica
              p Evaluar el texto, identificando puntos fuertes y débiles, analizando el razonamiento y considerando implicaciones y aplicaciones del contenido (Zambrano, 2017).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
    p.mb-4 Estas técnicas de lectura comprensiva permiten procesar la información de manera efectiva y retener los conocimientos necesarios para el aprendizaje autónomo.

    .row.bg-azul.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 ¿Sabías que la toma de notas puede mejorar significativamente su aprendizaje? 
          p.mb-5 Este documento Técnicas eficaces para la toma de notas, presenta técnicas como el método Cornell, mapas mentales, notas abiertas y esquemas para organizar ideas de forma clara y eficiente. También encontrará estrategias de repaso y revisión que fortalecen la memoria y ayudan en la preparación de exámenes. ¡Descubra cómo estas técnicas pueden transformar su estudio y optimizar la retención de información!
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Técnicas eficaces para la toma de notas
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
