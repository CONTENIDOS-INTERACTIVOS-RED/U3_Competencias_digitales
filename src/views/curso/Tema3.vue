<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales'" :subTitulo="'3. Uso ético de la información en entornos virtuales'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.tema-3.pb-0

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La ética en el uso de la información en entornos digitales es fundamental para proteger los derechos de autor y fomentar un ambiente de respeto y transparencia. A continuación, se profundiza en la importancia de la privacidad, el respeto de derechos y las prácticas responsables en la interacción virtual.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

    h2 Derechos de autor y licencias de uso
    p.mb-4 Los derechos de autor y las licencias de uso ayudan a proteger y respetar las obras en el ámbito digital y académico. Entender estos conceptos es fundamental para el uso responsable de contenidos, respetando las normas y promoviendo una cultura de reconocimiento hacia el trabajo creativo.


    .bg-amarillo.bg-full-width.py-4
      .px-5.pb-md-3.py-4.d-flex
        .row.w-100
          .col-4.mx-auto.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
          .col-12.col-md-10.col-xl-6.mx-auto.ms-xl-auto.my-auto(data-aos="fade-left")
            TarjetaAudio.color-primario.bg-white(
              texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
              tiempo
              :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            ) 

    .row.position-relative.mb-0.py-4.bg-fondo-5.bg-full-width
      div.px-4.px-md-5.py-md-3

        h2 Privacidad y protección de datos personales
        p.mb-4 La protección de la privacidad y los datos personales en línea es crucial para evitar riesgos como el robo de identidad y la exposición de información sensible.

        .row.mb-0
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Definición de privacidad <br>en línea
                p.text-small.px-4.text-center.pb-2 La privacidad en línea implica el derecho de controlar qué información se comparte y cómo se usa en plataformas digitales.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Datos <br>personales
                p.text-small.px-4.text-center.pb-2 Incluyen información como nombre, dirección, correo electrónico y preferencias de navegación, los cuales deben protegerse para evitar riesgos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Buenas prácticas para proteger <br>la privacidad
                p.text-small.px-4.text-center.pb-2 Configurar opciones de privacidad en redes sociales, utilizar contraseñas seguras y habilitar la autenticación en dos pasos ayuda a mantener la seguridad en entornos digitales.

    .row.bg-azul.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto ¿Sabía que protegerse contra ciberamenazas es clave para su seguridad digital? 
          p.mb-5 En el documento Identificación y prevención de ciberamenazas, descubrirá los tipos de amenazas más comunes, como phishing y malware, y aprenderá prácticas esenciales para proteger sus datos, como usar antivirus, activar la autenticación en dos factores y crear contraseñas seguras. Lo invitamos a explorar estas estrategias para fortalecer su seguridad en entornos digitales.

          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.ps-2.pe-4 <strong>Anexo.</strong> Anexo. Identificación y prevención de ciberamenazas
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

  

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
