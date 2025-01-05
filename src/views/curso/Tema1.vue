<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales'" :subTitulo="'1. Navegación y gestión de contenidos en plataformas LMS'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.pb-0.px-md-5.pt-md-5.overflow-hidden

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Las plataformas LMS, o sistemas de gestión de aprendizaje, facilitan el aprendizaje en línea. En esta sección se examina qué son estos sistemas, su importancia en la educación actual y cómo permiten a instituciones y estudiantes gestionar cursos, asignar tareas y hacer seguimiento del progreso.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    h2 Interfaz de usuario y navegación básica

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La interfaz de usuario en un LMS es el primer punto de contacto con el entorno de aprendizaje virtual. Su diseño se orienta a facilitar el acceso a recursos y herramientas (González, 2012). Una interfaz intuitiva permite gestionar actividades de manera eficiente, acceder a los cursos y comunicarse con otros usuarios. Entender la organización de la interfaz optimiza la experiencia de aprendizaje y permite encontrar información de forma rápida y sin contratiempos (Ministerio de Educación de Chile, 2020).

    h2 Componentes principales de la interfaz
    p.mb-4 Cada LMS cuenta con elementos esenciales que facilitan la navegación y el acceso a las distintas funcionalidades de la plataforma. En este apartado se describen los componentes principales de la interfaz:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Panel de inicio
              p Es la página principal que aparece al ingresar al LMS. Ofrece una visión general de los cursos activos, notificaciones, recordatorios y anuncios importantes (Díaz-Carbonel & Picho, 2021).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Menú de navegación
              p Generalmente se encuentra en una barra lateral o superior y contiene enlaces a secciones como cursos, calendario, foros y perfil, facilitando el acceso rápido a distintas áreas (Al-Fraihat et al., 2020).
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Perfil de usuario
              p Permite personalizar la identidad en la plataforma, actualizando información como nombre, foto y datos de contacto para facilitar la comunicación (Molina, 2018).
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Configuración
              p Área que permite ajustar preferencias de visualización y accesibilidad. Algunas plataformas ofrecen opciones de personalización, como cambio de tema de color o tamaño de fuente.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-1.d-none.d-lg-block
        img(src='@/assets/curso/unidad/img-11.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-10
        p.mb-0 Las plataformas de gestión del aprendizaje (LMS) proporcionan una serie de herramientas y funcionalidades que facilitan la navegación, el acceso y la gestión de los contenidos académicos. Estos sistemas están diseñados para optimizar el flujo de información y el aprendizaje colaborativo, permitiendo a los estudiantes y profesores acceder de forma rápida y eficiente a los recursos necesarios para el desarrollo de cursos. A continuación, se presentan algunas de las herramientas clave en los LMS y cómo contribuyen a mejorar la experiencia de aprendizaje.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Herramientas de búsqueda y filtros")
            p La barra de búsqueda permite localizar rápidamente cursos, lecciones, documentos y usuarios. Los filtros ayudan a refinar los resultados por categoría, optimizando el acceso directo a recursos específicos como “Materiales”, “Foros” o “Tareas” (Saldaña & Barrio, 2021).
          .div(titulo="Módulo de cursos")
            p Cada curso tiene una página propia organizada en secciones como lecciones, materiales de estudio, tareas y evaluaciones. Conocer este módulo permite acceder y gestionar eficazmente los recursos del curso (Saldaña & Barrio, 2021).
          .div(titulo="Navegación por módulos de contenido")
            p Los módulos de contenido están organizados cronológicamente o por categorías, lo que facilita el avance secuencial en el aprendizaje. Algunos LMS marcan automáticamente las lecciones completadas, proporcionando un seguimiento visual del progreso (González, 2012).
          .div(titulo="Acceso y gestión de cursos")
            p El acceso a los cursos puede ser automático (por matrícula) o mediante código proporcionado por el instructor. Familiarizarse con el panel de inicio y los cursos disponibles asegura el acceso completo a los contenidos necesarios (González et al., 2018).

    .position-relative.mb-4.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3

        .row.mb-4
          .col-12.col-lg-7(data-aos="fade-right")
            AcordionA(tipo="b")
              .div(titulo="Visualización y descarga de materiales de estudio")
                p Cada curso cuenta con una sección para materiales de estudio, como documentos y videos. Revisar esta sección garantiza el acceso a todos los recursos esenciales para lecciones y tareas (Al-Fraihat et al., 2020; Ministerio de Educación de Chile, 2020).
              .div(titulo="Comunicación en foros y chats")
                p Los foros y chats ofrecen espacios de interacción con compañeros e instructores, fundamentales para resolver dudas y promover el aprendizaje colaborativo, mejorando la comprensión y habilidades de comunicación en entornos virtuales (Al-Fraihat, Joy, & Sinclair, 2020).
              .div(titulo="Acceso a foros de discusión")
                p Los foros están disponibles en cada curso, accesibles desde el menú principal o dentro de módulos específicos. Conocer esta sección permite aprovechar las discusiones activas y aprender de las aportaciones de otros (Barron et al., 2014).
          .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

        h2 Entrega de tareas y participación en evaluaciones
        p.mb-4 En cada curso, la entrega de tareas y evaluaciones se realiza en una sección dedicada, la cual concentra los trabajos y exámenes necesarios para evaluar el avance en el curso (Molina, 2018). Familiarizarse con esta sección facilita la planificación y organización de entregas.
        .row.mb-0
          .col-10.col-md-6.col-lg-4.mb-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen', style="width: 80px")
              div.mb-4
                p.text-bold.text-center Revisión de instrucciones y requisitos
                p.text-small.px-4.text-center.pb-2 Antes de iniciar, revisa cuidadosamente las instrucciones de cada tarea o evaluación. Las instrucciones suelen incluir objetivos, formato requerido y criterios de evaluación. Comprender estos requisitos ayuda a cumplir las expectativas del instructor y evita errores comunes (Alkhasawneh & Alqahtani, 2019).
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen', style="width: 80px")
              div.mb-4
                p.text-bold.text-center Formato y tipos de archivo
                p.text-small.px-4.text-center.pb-2 Las tareas pueden requerir formatos específicos (PDF, DOCX, PPTX) y a veces establecen un límite de tamaño. Asegúrate de utilizar el formato indicado para garantizar que el sistema acepte el archivo (Serving on Groups, 2024).
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen', style="width: 80px")
              div.mb-4
                p.text-bold.text-center Confirmación de carga y entrega
                p.text-small.px-4.text-center.pb-2 Tras cargar una tarea, verifica que se haya adjuntado correctamente. Algunos LMS confirman la entrega con una notificación, lo cual asegura que el trabajo ha sido recibido y previene problemas de entrega incompleta (Al-Fraihat et al., 2020).

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        h2 Gestión de recursos de autoaprendizaje
        p.mb-0 La plataforma LMS ofrece una variedad de materiales, como videos, lecturas y presentaciones, que enriquecen el aprendizaje y fomentan una comprensión profunda de los contenidos. Navegar por estas secciones y organizar los recursos de manera personal, como en carpetas específicas o a través de una hoja de cálculo, facilita el acceso y la planificación de estudio (Ministerio de Educación de Chile, 2020).
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .position-relative.mb-4.py-4.bg-fondo-4.bg-full-width
      div.px-4.px-md-5.py-md-3
        
        h2 Seguimiento del progreso y métricas de rendimiento
        p.mb-4 Las plataformas LMS suelen contar con una sección de seguimiento del progreso, donde se pueden revisar actividades completadas, calificaciones y otros indicadores de rendimiento. Revisar esta sección periódicamente ayuda a mantenerse informado sobre el avance y permite ajustar la atención a las áreas que lo necesiten (Al-Fraihat, Joy, & Sinclair, 2020).
        
        .row.mb-0
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Calificaciones y resultados
                p.text-small.px-4.text-center.pb-2 Las calificaciones permiten evaluar el desempeño en tareas, exámenes y actividades del curso. Analizar cada calificación ayuda a identificar fortalezas y áreas de mejora.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Retroalimentación del instructor
                p.text-small.px-4.text-center.pb-2 Si alguna calificación es inferior a lo esperado, revisa la retroalimentación para entender los aspectos a trabajar. Este análisis apoya en la mejora continua (Ministerio de Educación de Chile, 2020).

    h2 Configuración de preferencias y notificaciones
    p.mb-4 Las plataformas LMS incluyen una sección de configuración o perfil donde es posible personalizar preferencias y notificaciones. Esta personalización permite adaptar el entorno virtual a las necesidades de estudio y comunicación. Familiarizarse con estas opciones permite optimizar la experiencia de uso.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Personalización de la interfaz
              p Ajustes como cambiar el tema de color o el tamaño de la fuente facilitan la lectura y mejoran la navegación. Algunas plataformas también permiten activar un diseño de alto contraste o letras más grandes para mayor comodidad (González et al., 2018).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Configuración de notificaciones 
              p En la configuración, puedes seleccionar las notificaciones que deseas recibir, como tareas nuevas, recordatorios de fechas o mensajes en foros. Esta personalización permite recibir solo la información relevante, evitando distracciones.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Frecuencia de notificaciones
              p Se puede optar por recibir alertas en tiempo real, diariamente o semanalmente, dependiendo del estilo de organización. Las notificaciones en tiempo real permiten responder de inmediato, mientras que las alertas semanales o diarias facilitan una revisión organizada (Bailenson, 2021).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Activación de recordatorios importantes
              p Los recordatorios para entregas y evaluaciones son fundamentales en la gestión de fechas clave, especialmente cuando se manejan varios cursos a la vez.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    .position-relative.mb-4.py-4.bg-fondo-4.bg-full-width.mb-5
      div.px-4.px-md-5.py-md-3

        h2 Solución de problemas comunes en el uso de LMS
        p.mb-4 El uso de LMS puede presentar desafíos técnicos ocasionales. En esta sección se abordan algunos de los problemas más comunes y cómo resolverlos de manera eficiente.

        .row
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7(data-aos="fade-left")
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Dificultades para iniciar sesión") Verifique el nombre de usuario y contraseña, asegurándose de que la tecla de “Mayúsculas” no esté activada. Si olvidó la contraseña, utilice la opción de recuperación o contacte con el soporte técnico del LMS (González et al., 2018).
              p(numero="2" titulo="Carga lenta o fallos en la página") Compruebe la conexión a internet, reinice el módem o intente acceder desde otro navegador o dispositivo. Limpiar la caché y las cookies del navegador puede mejorar el rendimiento (Al-Fraihat, Joy, & Sinclair, 2020).
              p(numero="3" titulo="Problemas para visualizar archivos o materiales") Asegúrese de tener los programas necesarios para abrir el archivo, como lectores de PDF o procesadores de texto. También puede intentar descargar el archivo directamente en lugar de verlo en el navegador (Díaz-Carbonel & Picho, 2021).
              p(numero="4" titulo="Dificultad para reproducir videos o contenido multimedia") Verifique la estabilidad y velocidad de la conexión a internet, y conside reducir la calidad del video si persisten los problemas. Actualizar el navegador o los complementos multimedia puede mejorar la reproducción (García & Méndez, 2013).
              p(numero="5" titulo="Notificaciones inconsistentes") Revise la configuración de notificaciones en el perfil del LMS para asegurarse de que están activadas solo las alertas relevantes.
              p(numero="6" titulo="Falta de retroalimentación en tareas") Si no ve los comentarios o calificaciones de una tarea, verifique si el instructor ya los ha publicado y revise la sección de calificaciones o el área de actividad en el LMS.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revista.grupocieg.org/wp-content/uploads/2021/06/Ed.5087-95-Diaz-Carbonel-Picho.pdf") Díaz-Carbonel, J., & Picho, P. (2021). Los sistemas de gestión de aprendizaje LMS en la educación virtual. Revista CIEG.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://virtual2.umng.edu.co/distancia/revista/articulos/63.pdf") González, M. (2012). E-learning sincrónico: aspectos críticos para una planeación efectiva.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/xey-hItn5i0") Pascualbravovirtual (2014). Como estudiar en la plataforma LMS [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


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
