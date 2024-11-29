<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(titulo="Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales" subTitulo="INTRODUCCIÓN")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-10(data-aos="fade-right")
        p.mb-0 La Unidad 3 del curso aborda el dominio de la plataforma LMS (Learning Management System) y el uso de herramientas digitales, así como el manejo ético de la información. En un contexto digital creciente, es crucial que estudiantes y profesionales se familiaricen con estas plataformas, fundamentales para la educación a distancia y la colaboración en entornos virtuales.
      .col-2.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-1.svg", alt="alt")

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Durante esta unidad, se explorarán las principales características de una plataforma LMS, incluyendo su uso en la gestión de contenidos, la interacción entre usuarios y la evaluación del aprendizaje. También se presentarán herramientas digitales que complementan el uso de las plataformas, como foros, chats y recursos multimedia, que enriquecen la experiencia educativa y fomentan una participación activa.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')  

    .bg-azul.p-4(data-aos="fade-up")
      p.mb-0 Se abordará igualmente el manejo ético de la información, un tema esencial en la era digital, que incluye el respeto a los derechos de autor, la veracidad de los datos y la protección de la privacidad. Estos aspectos son fundamentales para el uso responsable de la información en entornos virtuales.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass">
.tabs-content
  background-color: #F5F7FB
</style>
