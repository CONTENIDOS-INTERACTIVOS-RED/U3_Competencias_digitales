<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2. Competencias de autoformación y autogestión del aprendizaje'" :subTitulo="'2.Estrategias para la planificación y gestión del tiempo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Se invita a revisar el video para descubrir cómo una adecuada planificación del tiempo puede ayudar a incrementar la productividad, reducir el estrés y alcanzar los objetivos de manera equilibrada y organizada.

    .bg-fondo-5.bg-full-width
      div.px-5.pb-md-3.py-4

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        h2.mb-4 Creación de un plan diario y semanal
        p.mb-4 Una planificación diaria y semanal clara permite avanzar hacia los objetivos sin sentirse abrumado:
    
        .row
          .col-10.col-md-6.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Planificación diaria
                p.text-small.px-4.text-center.pb-2 Estructura las actividades del día anticipadamente: lista de tareas, priorización según Eisenhower o ABCDE, asignación de tiempos y espacios para imprevistos (Allen, 2006)
          .col-10.col-md-6.col-lg-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Planificación semanal
                p.text-small.px-4.text-center.pb-2 Proporciona una visión general de las responsabilidades: establece metas semanales, asigna tareas diarias y revisa al final de la semana para ajustar la próxima (Bustinduy, 2021).

    h2.mb-4 Técnicas de organización del tiempo
    p.mb-4 La división y organización del tiempo en bloques específicos mejora la eficiencia y evita la procrastinación.

    .bg-fondo-6.bg-full-width
      div.px-5.pb-md-3.py-4

        .row.justify-content-center(data-aos="zoom-in-up").mb-4
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-right")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-49.svg', style="width: 90px")
              p.mb-3.text-center.text-bold  Técnica Pomodoro
              p.mb-0.text-center.text-small Trabaja en intervalos de 25 minutos ("pomodoros") con pausas de 5 minutos; después de cuatro, toma un descanso más largo (15-30 minutos) (Fiore, 2007).
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-down")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-50.svg', style="width: 90px")  
              p.mb-3.text-center.text-bold Bloques de tiempo.
              p.mb-0.text-center.text-small Dedica bloques de una o dos horas a actividades específicas, agrupando tareas similares y evitando distracciones (Morgenstern, 2004).
          .col-10.col-sm-9.col-lg-6.col-xl-4.mb-4(data-aos="fade-up-left")
            .custom-image-card.d-flex.justify-content-center.p-4.py-xl-5.h-100.flex-column
              img.mx-auto.mb-3(src='@/assets/curso/unidad/img-51.svg', style="width: 90px")  
              p.mb-3.text-center.text-bold  Regla de los dos minutos. 
              p.mb-0.text-center.text-small Realiza de inmediato tareas que tomen menos de dos minutos, reduciendo la lista de pendientes y liberando espacio mental para tareas más importantes (Allen, 2006).

        h2.mb-4 Control de progreso y evaluación
        p.mb-4 Monitorear y evaluar el progreso asegura el cumplimiento de los objetivos y permite ajustar estrategias para mejorar la gestión del tiempo:

        .row.mb-5
          .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-rosa.p-4.p-xxl-5(data-aos="fade-right")
            div.d-flex.mb-4
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  <strong>Revisión diaria.</strong> Evalúa las tareas completadas al final del día y ajusta el plan para el siguiente día, identificando distracciones o ineficiencias (Fiore, 2007).
            div.d-flex
              img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  <strong>Revisión seminal.</strong> Ofrece una perspectiva amplia del progreso hacia metas a largo plazo, permitiendo hacer ajustes oportunos en hábitos y metas (Bustinduy, 2021).
          .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
            img.h-100(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

        h2.mb-4 Herramientas tecnológicas para la gestión del tiempo
        p.mb-4 Existen diversas herramientas tecnológicas para organizar y gestionar el tiempo de manera eficiente: 

    .row.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Calendarios electrónicos
            p.text-small.px-4.text-center.pb-2 Google Calendar y Outlook permiten programar actividades, recibir recordatorios y organizar el tiempo de forma flexible (Blanchard & Johnson, 2009).
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Aplicaciones de tareas
            p.text-small.px-4.text-center.pb-2 Aplicaciones como Todoist, Trello y Microsoft To Do ayudan a gestionar listas de tareas y organizar proyectos de manera colaborativa (Covey, 2016).
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
          div.mb-4
            p.text-bold.text-center Aplicaciones de gestión del tiempo
            p.text-small.px-4.text-center.pb-2 Herramientas como Focus Booster y Forest ayudan a mejorar la concentración mediante técnicas como el Pomodoro, reduciendo distracciones (Morgenstern, 2004).

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-56.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Estas estrategias y herramientas facilitan el establecimiento de una estructura organizada y equilibrada para maximizar la productividad y el bienestar en el aprendizaje autónomo o el trabajo independiente.



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
