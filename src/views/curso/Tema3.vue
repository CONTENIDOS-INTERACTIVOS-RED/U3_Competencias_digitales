<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Introducción al trabajo en modalidad virtual'" :subTitulo="'3. Diferenciación entre personas naturales y jurídicas'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.tema-3.pb-0
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-verde.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-57.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Evaluar el propio proceso de aprendizaje es crucial para asegurar que se avanza hacia las metas y corregir posibles errores en el camino. La autoevaluación y la retroalimentación ofrecen una oportunidad para reflexionar sobre los progresos, identificar áreas de mejora y fortalecer las capacidades (Herrera, 2015). A continuación, se presentan estrategias clave para una evaluación efectiva del aprendizaje personal.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')  
    
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Importancia de la evaluación personal en el proceso de aprendizaje

    p.mb-4 Evaluar el aprendizaje no solo permite verificar el logro de objetivos, sino también hacer ajustes en el enfoque y metodología para mejorar el rendimiento.
    
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Desarrollo de habilidades metacognitivas")
            p La autoevaluación fomenta la metacognición, permitiendo reflexionar sobre las estrategias de aprendizaje, ajustando hábitos y mejorando el proceso de manera autónoma.
          .div(titulo="Identificación de logros y áreas de mejora")
            p Evaluar el progreso ayuda a reconocer logros y áreas de mejora, facilitando ajustes en las metas y evitando sorpresas en evaluaciones formales.
          .div(titulo="Aumento de la autonomía")
            p Al evaluar el propio aprendizaje, se desarrolla autonomía y autorregulación, esenciales en el ámbito académico y profesional.

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Técnicas de autoevaluación
    p.mb-4

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Autoevaluaciones escritas
              p Consiste en reflexionar sobre el desempeño y documentarlo por escrito, permitiendo analizar en profundidad el proceso de aprendizaje y estructurar los pensamientos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Listas de verificación
              p Las checklists permiten un seguimiento detallado de objetivos y metas específicas, evaluando el progreso de forma clara (Covey, 2016).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Portafolio de aprendizaje
              p Un portafolio recopila trabajos y proyectos, mostrando el progreso a lo largo del tiempo y aumentando la motivación al observar los logros acumulativos (Gibbs, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Preguntas de reflexión
              p Formular preguntas como "¿Qué se ha aprendido esta semana?" o "¿Qué se puede hacer de manera diferente?" ayuda a pensar críticamente sobre el aprendizaje (Bautista, 2015).
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')

    p.mb-4 Estas técnicas de autoevaluación promueven la reflexión y el análisis crítico, facilitando un aprendizaje más profundo y una mejora continua en el proceso autónomo de aprendizaje.

    .row.bg-azul.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2 ¿Sabía que la retroalimentación es fundamental para mejorar el aprendizaje? 
          p.mb-5 Le invitamos a leer este documento <strong>Retroalimentación su importancia y cómo buscarla</strong>, y descubrir cómo el seguimiento continuo y el reconocimiento de logros pueden impulsar su motivación y apoyar su progreso académico. En el documento se exploran distintos tipos de retroalimentación, como la formativa, sumativa, correctiva y de pares, que ofrecen perspectivas valiosas sobre el desempeño. 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Técnicas eficaces para la toma de notas
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
