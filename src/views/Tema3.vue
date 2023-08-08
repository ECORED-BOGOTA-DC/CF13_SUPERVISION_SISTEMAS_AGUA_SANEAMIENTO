<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de recolección de información en salud
    
    p Mantener información documentada sobre los sistemas de salud, las estrategias de intervención implementadas y las condiciones generales de la población permite actuar de manera apropiada ante eventos no deseados como pandemias, enfermedades colectivas, entre otros.
    p.mb-5 De acuerdo con Bernal, O y Forero, J, (2011) en su artículo sistemas de información en el sector salud en Colombia, se puede definir a los sistemas de recolección como: 

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 2em")
            .h4.mb-0 Aquel que integra la recolección, procesamiento y reporte de información necesaria para el mejoramiento de los servicios de salud, a través de una mejor gestión en todos los niveles del sistema
            i.fas.fa-quote-right(style="font-size: 2em")
          .bloque-texto-d__autor
            p (p 88). 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
    
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Clasificación de los sistemas de recolección de información
    
    p Teniendo en cuenta que las organizaciones del sector salud, dependiendo de donde provienen sus recursos se subdividen en públicas y privadas, de la misma forma se podría hacer una primera aproximación de la clasificación de los sistemas de recolección, esto es:

    .row.justify-content-center.align-items-center.mb-4
      .col-1.d-lg-none.d-flex
      .col-lg-3.col-4.px-lg-4.px-0.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
            img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
            .BGIMG06.hg-11.p-sm-4.p-3
              .text-white.mt-5
                .h4.text-center Públicos
                p.mb-0 Dependientes del estado.
      .col-lg-1.col-2.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
      .col-lg-3.col-4.px-lg-4.px-0.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
            img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
            .BGIMG06.hg-11.p-sm-4.p-2
              .text-white.mt-5
                .h4.text-center Privados
                p.mb-0 Prestadores de servicios de salud y agremiaciones.
      .col-1.d-lg-none.d-flex
      .col-lg-1.col-2.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")
      .col-lg-3.col-4.px-lg-4.px-0(data-aos="fade-left")
        .tarjeta-avatar
            img(src='@/assets/curso/tema3/img06.png' alt="Imagen decorativa")
            .BGIMG06.hg-11.p-sm-4.p-2
              .text-white.mt-5
                .h4.text-center.mb-0 Sistemas de recolección
    
    p Buscar información sobre las condiciones de salud de la población en Colombia se puede realizar gracias a la existencia de instrumentos de recolección de información que se han implementado durante la última década.

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Instrumentos de recolección de información existentes en Colombia
    
    p Aunque no todas las entidades prestadoras de servicios de salud pertenecen al estado, si todas están en la obligación de informar y reportar todas las variables que sean de especial seguimiento y que son determinadas por el Ministerio de Salud, como las que se exponen a continuación:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="SIVIGILA" :icono="require('@/assets/curso/tema3/img07.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p El sistema regulador y que consolida la información es el Sistema de Vigilancia en Salud Pública (SIVIGILA), de acuerdo con Bernal, O y Forero, J, (2011) “es un sistema de reporte de eventos de interés en salud pública, gestionado por el Instituto Nacional de Salud (INS), que reporta especialmente patologías infecciosas, aunque recientemente se ha adicionado un módulo de mortalidad materna” (p.90).
            p.mb-0 Este sistema siempre se encuentra en actualización para mejorar los reportes, una de las últimas actualizaciones más importantes fue realizada en el 2017 mejorando procesos de notificación y gestión de información que se aplicarán en el periodo del 2018 al 2020 (Instituto Nacional de Salud INS, 2017).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img08.png' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="SISPRO" :icono="require('@/assets/curso/tema3/img09.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Este sistema es considerado la bodega de datos de salud del país, en el cual integra datos e información de salud, pensiones, riesgos profesionales, trabajo, empleo y asistencia social. Cada fuente de información del Sistema de Información de la Protección Social (SISPRO) tiene una estructura de reporte y consolidación independiente (Bernal, O y Forero, J, 2011).
            p Se puede definir algunas características generales del sistema que son:
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Conformado por bases de datos.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Cuenta con información de oferta y demanda de servicios de salud y todo lo asociado a los mismos.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Permite la construcción de indicadores.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Recoge información de fuentes internas y externas del ministerio.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img10.png' alt="Imagen decorativa")

    p Adicionalmente, el #[strong Sistema Integrado de Información de la protección Social (SISPRO)], es alimentado o construido por medio de diferentes reportes que recibe de otros instrumentos como:

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/img11.svg' alt="Esquema que menciona los instrumentos por los cuales se alimenta o construye el SISPRO, los cuales son: Registro Único de Afiliados (RUAF). Registros Individuales de Prestación de Servicios de Salud (RIPS). Planilla Integrada de Liquidación de Aportes (PILA). Sistema de Gestión Hospitalaria (SIHO). Sistema de Información de Precios de Medicamentos (SISMED)")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
