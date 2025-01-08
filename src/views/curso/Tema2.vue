<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales'" :subTitulo="'2.Uso de herramientas de videoconferencia y colaboración en línea'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p 
        .d-flex.align-items-start.bg-verde.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Las herramientas de videoconferencia se han convertido en esenciales para la educación en línea, permitiendo una interacción en tiempo real entre estudiantes y profesores. Estas herramientas no solo facilitan el acceso al contenido educativo, sino que también promueven un ambiente colaborativo.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Creación y programación de reuniones

    p.mb-4 La mayoría de las plataformas de videoconferencia, como Zoom, Microsoft Teams y Google Meet, permiten programar reuniones desde el panel principal o el calendario. Esto facilita la planificación anticipada de reuniones, asegurando que todos los participantes conozcan el horario y puedan prepararse para la sesión (Barron et al., 2014).

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Datos básicos
              p Al programar, completa información clave como título, fecha, duración y zona horaria. Una duración adecuada permite abordar el contenido sin extenderse demasiado para mantener la atención (González, 2012).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Opciones de seguridad
              p Configurar contraseñas o salas de espera ofrece mayor control sobre quién ingresa a la reunión, evitando la participación de personas no autorizadas (Molina, 2018).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Autenticación de participantes
              p Algunas plataformas requieren que los participantes inicien sesión con un correo específico. Esta medida garantiza la seguridad en entornos académicos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Agenda y objetivos de la sesión
              p Antes de enviar la invitación, define los objetivos y comparte una breve agenda para orientar a los estudiantes sobre lo que se espera en la reunión.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Prueba de audio y video
              p Realice una prueba de equipos antes de la sesión. Algunas plataformas ofrecen una “sala de práctica” para verificar el funcionamiento de audio, video y pantalla compartida (Alkhasawneh & Alqahtani, 2019).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Acceso y configuración del perfil de usuario
    
    p.mb-4 Un acceso seguro y la configuración del perfil personal en las plataformas de videoconferencia facilitan una experiencia de uso más segura y personalizada.
    
    .row.position-relative.mb-5.py-4.bg-fondo-6.bg-full-width
      div.px-4.px-md-5.py-md-3

        .row.mb-0
          .col-10.col-md-6.col-lg-4.mb-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-55.svg', alt='Texto que describa la imagen', style="width: 90px")
              div.mb-4
                p.text-bold.text-center Iniciar sesión de forma segura.
                p.text-small.px-4.text-center.pb-2 Utilice el enlace de acceso proporcionado por la institución y realice esta acción desde un dispositivo personal para proteger la seguridad de la cuenta.
          .col-10.col-md-6.col-lg-4.mb-0.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen', style="width: 90px")
              div.mb-4
                p.text-bold.text-center Recuperación de contraseña.
                p.text-small.px-4.text-center.pb-2 Si olvidó la contraseña, seleccione la opción de recuperación y siga los pasos para restablecerla.
          .col-10.col-md-6.col-lg-4.mb-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px.p-4.pt-xl-5
              img.mb-4.mx-auto(src='@/assets/curso/unidad/img-34.svg', alt='Texto que describa la imagen', style="width: 90px")
              div.mb-4
                p.text-bold.text-center Autenticación en dos pasos.
                p.text-small.px-4.text-center.pb-2 La autenticación en dos pasos añade una capa de seguridad, solicitando un código adicional al iniciar sesión desde un dispositivo desconocido.

        #t_2_3.titulo-segundo
          div.d-flex
            span.me-3 2.3  
            h2 Configuración de audio y video
        
        p.mb-4 La correcta configuración de audio y video asegura una comunicación clara y estable durante la videoconferencia.

    .row
      .col-12.col-xl-7(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Dispositivos de entrada y salida") Seleccione un micrófono y audífonos desde la configuración de la plataforma para mejorar la calidad del sonido. La opción de audífonos ayuda a reducir el eco y otros ruidos. 
          p(numero="2" titulo="Prueba de audio y control de volumen") Realice una prueba de sonido antes de cada sesión para garantizar que el micrófono y los altavoces funcionen adecuadamente. La opción de silenciar el micrófono ayuda a reducir el ruido de fondo. 
          p(numero="3" titulo="Calidad de video") Puede ajustar la calidad del video según la velocidad de su conexión a internet. Reducirla en caso de lentitud o interrupciones mejora la estabilidad de la transmisión (Serving on Groups, 2024). 
          p(numero="4" titulo="Fondo virtual y efectos") Utilizar fondos virtuales mantiene la privacidad del entorno. Algunos LMS también permiten efectos de desenfoque, lo cual es ideal para mantener un aspecto profesional en la videoconferencia. 
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    h2 Uso de herramientas de colaboración integradas
    p.mb-4 Las herramientas de colaboración integradas en los LMS facilitan el trabajo en equipo y la gestión de proyectos. Desde documentos colaborativos hasta tableros de tareas, estas funcionalidades permiten una experiencia de trabajo colaborativo sin la necesidad de salir de la plataforma.

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Documentos colaborativos")
            p Permiten edición en tiempo real junto con compañeros, lo cual agiliza el trabajo en equipo y evita la constante actualización de archivos.
          .div(titulo="Comentarios y anotaciones")
            p La función de comentarios permite dejar notas o hacer preguntas en puntos específicos del documento, facilitando una comunicación rápida y dirigida.
          .div(titulo="Historial de cambios")
            p Algunas herramientas permiten ver quién hizo cada modificación, útil para revisar el avance y restaurar versiones anteriores si es necesario.
          .div(titulo="Foros de discusión y grupos de trabajo")
            p Los foros organizados por temas permiten la participación en discusiones estructuradas, facilitando el intercambio de ideas y la resolución de dudas.
          .div(titulo="Tableros de tareas y gestión de proyectos")
            p Organizan proyectos por fases y tareas específicas. Estas herramientas de gestión de proyectos ayudan a monitorear el avance y asegurar que cada miembro del equipo esté alineado con los objetivos.

    .row.position-relative.mb-0.pb-4.bg-fondo-5.bg-full-width
      div.px-4.px-md-5.py-md-3

        h2 Participación en salas de subgrupos (breakout rooms)
        p.mb-4 Las salas de subgrupos son espacios dentro de una videoconferencia en los que se agrupa a los participantes en equipos más pequeños, permitiendo una colaboración más directa.

        .row.mb-0.justify-content-center.card_hover(data-aos="zoom-in-up")
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-37.svg', style="width: 68px")
              
              .d-flex.flex-column.px-4.py-2
                p.text-bold.mb-3 Trabajo colaborativo en grupos
                p.mb-0.text-small Estas salas permiten a los participantes interactuar en un ambiente más cercano, ideal para la discusión de casos y resolución de problemas.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-37.svg', style="width: 68px")  
              
              .d-flex.flex-column.px-4.py-2
                p.text-bold.mb-3 Asignación de roles
                p.mb-0.text-small En algunos casos, se asignan roles como moderador, anotador o presentador para estructurar mejor la actividad y cumplir los objetivos.
          
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-right")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-37.svg', style="width: 68px")
              
              .d-flex.flex-column.px-4.py-2
                p.text-bold.mb-3 Uso de pizarra y herramientas de anotación
                p.mb-0.text-small Las salas de subgrupo suelen incluir pizarras virtuales o herramientas de anotación para tomar notas o diagramar ideas en conjunto, facilitando la visualización de conceptos.
          .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-left")
            .custom-image-card.d-flex.justify-content-center.p-3.h-100
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-37.svg', style="width: 68px")
              
              .d-flex.flex-column.px-4.py-2
                p.text-bold.mb-3 Comunicación con el moderador
                p.mb-0.text-small Los participantes pueden solicitar la ayuda del moderador si tienen dudas o necesitan orientación, facilitando el desarrollo fluido de la actividad (Ministerio de Educación de Chile, 2020)

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto ¿Sabía que integrar aplicaciones digitales puede mejorar notablemente la productividad académica?
          p.mb-5 Este documento: Integración de aplicaciones y herramientas digitales para la productividad académica le invita a explorar herramientas clave para la organización, toma de notas, colaboración y creación de contenidos. Desde Google Calendar y Trello para gestionar tiempo y tareas, hasta Notion y Evernote para organizar conocimientos, estas aplicaciones optimizan el estudio y facilitan el trabajo en grupo.

          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_ Integración de aplicaciones y herramientas digitales para la productividad académica.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.ps-2.pe-4 <strong>Anexo.</strong> Integración de aplicaciones y herramientas digitales para la productividad
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://oa.upm.es/36880/1/INVE_MEM_2014_197830.pdf") Barron, J., et al. (2014). Uso de un sistema para la gestión del aprendizaje (LMS).
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/16950/2020Herramientas%20y%20recursos%20digitales.pdf") Ministerio de Educación de Chile. (2020). Herramientas y recursos digitales.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
