<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(titulo="Unidad 2. Competencias de autoformación y autogestión del aprendizaje" subTitulo="INTRODUCCIÓN")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4 Esta unidad se enfoca en fortalecer competencias clave para la autoformación y autogestión del aprendizaje, habilidades fundamentales en un contexto académico y profesional que exige autonomía y autorregulación. A través de estrategias prácticas, el estudiante aprenderá a gestionar su propio proceso de aprendizaje, lo cual le permitirá organizar sus estudios de manera eficaz y monitorear su progreso continuamente.

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") El contenido de la unidad abarca tres temas principales: <strong>las técnicas de autoformación y aprendizaje autónomo, estrategias de planificación y gestión del tiempo</strong>, y la evaluación del aprendizaje personal.
        p Cada tema proporcionará herramientas específicas que facilitarán al estudiante avanzar en su aprendizaje de forma estructurada y autónoma, optimizando el tiempo y evaluando sus avances.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  

    p.mb-0 Al desarrollar estas competencias, el estudiante ganará una base sólida para gestionar sus metas tanto en el ámbito académico como en el profesional. La unidad representa una oportunidad para que asuma un rol activo en su formación, adoptando una actitud proactiva y abierta a nuevas formas de aprender, con el objetivo de convertirse en un aprendiz autónomo y motivado.


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
