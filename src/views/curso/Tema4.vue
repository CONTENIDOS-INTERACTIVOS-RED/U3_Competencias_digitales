<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno.text-uppercase(:titulo="'Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales'" :subTitulo="'4. Privacidad y seguridad en redes sociales y aplicaciones'")
    .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.tema-3.pb-0
  
      .row.mb-5.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4.px-xl-5(data-aos="fade-right")
          p.mb-0(data-aos="fade-up") Configurar adecuadamente la privacidad en redes sociales y aplicaciones permite controlar la visibilidad de los datos personales y reducir el riesgo de exposición a posibles amenazas.
        .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .bg-fondo-3.bg-full-width
        .px-5.pb-md-3.py-4

          h2 Configuración de privacidad en redes sociales
          p.mb-4 Las redes sociales permiten ajustar la privacidad para proteger la información personal. A continuación se describen algunos aspectos clave para fortalecer la seguridad en estos entornos.


          .bg-azul.bg-full-width.mb-4
            .px-5.pb-md-3.py-4
              .row
                .col-5.ms-auto.d-none.d-xl-block(data-aos="fade-right")
                  img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
                .col-12.col-md-10.col-xl-6.mx-auto.ms-xl-auto.my-auto(data-aos="fade-left")
                  .row
                    .col-12
                      ol.lista-ol--cuadro
                        li.d-flex 
                          .lista-ol--cuadro__vineta.bg-morado-claro.text-white
                            span 1
                          p.mb-0 <strong>Limitación de audiencia</strong>: La mayoría de plataformas permiten elegir quién puede ver las publicaciones, permitiendo restringir el acceso a amigos o grupos específicos (Saldaña & Barrio, 2021).
                        li.d-flex
                          .lista-ol--cuadro__vineta.bg-morado-claro.text-white
                            span 2
                          p.mb-0 <strong>Revisión de etiquetas y menciones</strong>: Configure para aprobar etiquetas y menciones antes de que aparezcan en el perfil, evitando que terceros compartan contenido sin consentimiento.
                        li.d-flex
                          .lista-ol--cuadro__vineta.bg-morado-claro.text-white
                            span 3
                          p.mb-0 <strong>Permisos de aplicaciones vinculadas</strong>: Es importante revisar y desvincular las aplicaciones que ya no usa o que no necesitan acceso a su información. Estas aplicaciones pueden acceder a sus datos en segundo plano.

          h2 Configuración de privacidad en dispositivos móviles
          p.mb-4 En los dispositivos móviles, es fundamental controlar los permisos otorgados a cada aplicación, así como la configuración de privacidad.

          .row.mb-0
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4.mx-auto.mt-4(src='@/assets/curso/unidad/img-47.svg', alt='Texto que describa la imagen', style="width: 90px")
                div.mb-4
                  p.text-bold.text-center Permisos de aplicaciones
                  p.text-small.px-4.text-center.pb-2 Verifique y ajuste los permisos para acceso a cámara, micrófono, ubicación, entre otros. Otorgue solo los permisos necesarios.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4.mx-auto.mt-4(src='@/assets/curso/unidad/img-48.svg', alt='Texto que describa la imagen', style="width: 90px")
                div.mb-4
                  p.text-bold.text-center Control de ubicación
                  p.text-small.px-4.text-center.pb-2 Configure para que la ubicación esté activa únicamente cuando sea indispensable. Desactivar la ubicación en segundo plano ayuda a evitar el rastreo constante.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4.mx-auto.mt-4(src='@/assets/curso/unidad/img-49.svg', alt='Texto que describa la imagen', style="width: 90px")
                div.mb-4
                  p.text-bold.text-center Acceso a datos personales
                  p.text-small.px-4.text-center.pb-2 Revise los permisos de acceso a contactos, fotos y mensajes, y desactive aquellos que no sean esenciales para el funcionamiento de la aplicación (Alkhasawneh & Alqahtani, 2019).

      h2 Privacidad en navegadores de internet
      p.mb-4 La privacidad en los navegadores puede mejorarse mediante el uso de configuraciones específicas que limitan el rastreo y protegen la información de navegación.

      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

        .tarjeta.bg-white.p-4(x="15.5%" y="73.4%" numero="+")
          .h5.mb-2 Gestión de cookies
          p Configure el navegador para bloquear cookies de terceros o eliminarlas al cerrar la sesión. Esto protege la actividad en línea de rastreadores publicitarios.
        .tarjeta.bg-white.p-4(x="19.4%" y="27.6%" numero="+")
          .h5.mb-2 Modo incógnito o privado
          p Navegar en modo incógnito evita que el navegador guarde el historial, cookies y datos de formularios. Aunque no garantiza el anonimato completo, ayuda a mantener la privacidad.
        .tarjeta.bg-white.p-4(x="85%" y="73.4%" numero="+")
          .h5.mb-2 Bloqueo de rastreo
          p Activar la opción de bloqueo de rastreo limita la capacidad de terceros de seguir la actividad en línea, evitando anuncios personalizados y protegiendo la privacidad.

      h2 Privacidad en plataformas de mensajería y videoconferencia
      p.mb-4 Las aplicaciones de mensajería y videoconferencia cuentan con opciones de configuración para asegurar la privacidad en la comunicación y controlar la visibilidad de datos personales.

      .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                p.text-bold Opciones de visibilidad
                p Permiten restringir la visibilidad de la foto de perfil, estado y última conexión a contactos conocidos.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                p.text-bold Encriptación de mensajes
                p La encriptación de extremo a extremo asegura que solo el remitente y el destinatario puedan leer los mensajes, protegiendo la privacidad de la comunicación.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
                p.text-bold Control de descargas automáticas
                p Configurar la descarga manual de archivos ayuda a evitar recibir contenido malicioso o no deseado.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')

      h2 Configuración de privacidad en plataformas de videoconferencia

      .row.mb-5
        .col-12.col-xl-8(data-aos="fade-right")
          p.mb-4 Asegurar la privacidad en plataformas de videoconferencia es clave para proteger la identidad y evitar accesos no autorizados.
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Opciones de acceso a la reunión") Permiten limitar el acceso solo a personas autorizadas, ya sea mediante invitaciones específicas o contraseñas, evitando interrupciones y accesos no deseados (García, 2021).
            p(numero="2" titulo="Control de cámara y micrófono") Configura la cámara y el micrófono para que estén apagados por defecto al iniciar la sesión, brindando un mayor control de privacidad. 
            p(numero="3" titulo="Uso de fondos virtuales") Los fondos virtuales ayudan a proteger la privacidad del entorno físico, especialmente en reuniones públicas o eventos donde participan personas desconocidas (Martínez, 2021). 
        .col-4.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul.mb-5
        .px-4.px-md-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.iiisci.org/journal/pdv/risci/pdfs/CA365KU17.pdf") Gonzalez, J., et al. (2018). Prácticas Innovadoras de Aprendizaje Emergentes en el Siglo XXI.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://servingongroups.org/wp-content/uploads/2024/03/Section-4_Resources_4-Causas-de-la-fatiga-zoom.pdf") Serving on Groups. (2024). Causas de la fatiga Zoom.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/Ye0luWSWKoY") Open lab (2024). Privacidad y datos personales en línea [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

      .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

  </template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de Recursos Digitales y Seguridad',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué herramienta es adecuada para planificar tareas de estudio?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programas de entretenimiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calendario digital o aplicación de planificación',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Google Drive', esCorrecta: false },
            { id: 'd', texto: 'Herramientas de podcast', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes prácticas promueve el uso ético de la información?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copiar y pegar sin citar al autor',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Parafrasear y citar la fuente',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir material sin tener en cuenta el autor',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Copiar todo lo encontrado en internet, ya que es público',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué debe hacer un estudiante si necesita usar una imagen encontrada en línea para una presentación?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Utilizarla sin permiso', esCorrecta: false },
            {
              id: 'b',
              texto: 'Verificar su licencia y dar crédito al autor',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Utilizar la imagen sin permiso ni citar la fuente, ya que está en internet y es de acceso público',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificar la imagen ligeramente para evitar problemas de derechos de autor y luego utilizarla sin citar',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es una práctica segura al gestionar contraseñas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar la misma contraseña para todos los sitios',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear contraseñas únicas y seguras para cada cuenta',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Utilizar la misma contraseña para todas las cuentas para que sea fácil recordarlas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escribir todas las contraseñas en un archivo de texto en la computadora sin protección',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de estas prácticas es adecuada para proteger tu privacidad en línea?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer pública tu información personal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar configuraciones de privacidad adecuadas en redes sociales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartir tu contraseña con amigos cercanos para que te ayuden si olvidas la contraseña',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
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
