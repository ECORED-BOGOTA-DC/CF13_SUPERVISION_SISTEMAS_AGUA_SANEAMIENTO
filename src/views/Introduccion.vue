<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/intro/img01.jpg')
    
    p De acuerdo con el documento del Ministerio de Salud y Protección Social (2016), su Política de Atención Integral en Salud se define como un sistema de salud al servicio de la gente. Esta política nace en pro de garantizar el derecho a la salud, en consecuencia, el objetivo principal es mejorar la salud de la población a través del acceso a los servicios de manera oportuna, eficaz, con calidad y acogiendo el principio de promoción de la salud. Por esta razón el objetivo de este componente formativo denominado “#[strong Principios de atención integral]”, es que profundice sobre el sistema integral en salud, como sus procedimientos, métodos de evaluación y normas de seguridad, tanto para la salud pública como para la conservación del medio ambiente. Por lo anterior le invitamos a desarrollar con mucho entusiasmo el presente componente formativo.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
