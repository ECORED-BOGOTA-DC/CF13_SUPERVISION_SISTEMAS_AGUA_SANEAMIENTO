<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodología de evaluación de programas de salud
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Naranjo (2006), en su artículo evaluación de programas de salud, establece que los programas de salud están diseñados para alcanzar unos objetivos concretos con el fin de mejorar el estado de salud de una población. En particular lograr estos objetivos requiere de actividades coherentes, organizadas e integradas de diferentes actores de la sociedad; con el fin de poder realizar revisiones y ajustes necesarios a los programas de salud es necesario hacer constante análisis y evaluación, donde se verifica si se están cumpliendo los objetivos para los cuales fue creado cada programa.
        p.mb-0 Las evaluaciones que se ejecuten deben tener una estructura definida y un proceso claro, así como una estructura sistemática y objetiva que minimicen al máximo el sesgo del evaluador, que permita ver el programa desde diferentes enfoques, entre los cuales están:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img01.png')

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.hg-07.px-5.py-4
          .tarjeta-numerada__numero
            .h2.text-white.mb-0 1
          p.mb-0 Valoración sistemática y objetiva.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-numerada.color-acento-botones.hg-07.px-5.py-4
          .tarjeta-numerada__numero
            .h2.mb-0 2
          p.mb-0 Uso de procedimientos científicos para investigar la efectividad de los programas.
      .col-lg-4.col-md-8(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.hg-07.px-5.py-4
          .tarjeta-numerada__numero
            .h2.mb-0 3
          p.mb-0 Procedimientos para orientar la toma de decisiones en las diferentes fases de ejecución de un programa.
    
    p Álvarez, C (2014), en su manual de operación denominado el modelo de evaluación de programas de salud resalta también la importancia de la evaluación de las estrategias y programas de salud, visto que es una herramienta esencial para la toma de decisiones y el mejoramiento paulatino de los programas y sus estrategias.
    p Por lo cual, las personas que participen de un programa de salud deben estar ampliamente capacitados en técnicas de evaluación y deben ejecutarla a través de diferentes etapas.

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Enfoques y alcances de evaluación
    
    p.mb-5 El mismo autor, menciona que debido a los diferentes objetivos que pueden llegar a tener los programas de salud, es necesario tener enfoques que se adapten a la evaluación de esos objetivos al tiempo que se determina el alcance de los ítems a evaluar.

    <br><br>
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-6.px-0.pb-2.img-04(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img02.svg')
      .col-12.BGR09.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            .h5 En general hay dos grandes corrientes de evaluación: 
            ol.lista-ol--cuadro.mb-0
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 #[strong Evaluación enfocada al estudio de la estructura:] se presta principal atención al contexto, los insumos, procesos, en general son los resultados inmediatos.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 #[strong Evaluación enfocada a los resultados:] se centra la atención en los resultados intermedios y largo plazo, se basa en los objetivos establecidos previamente en los programas.

    p Cuando se habla del alcance de la evaluación se puede realizar en distintos niveles:

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR01.hg-08.p-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img03.png')
          .h4 Alcance global
          p.mb-0 Integra la medición de las necesidades de salud de una población, tiene en cuenta las políticas públicas a las cuales esa población está sujeta y al mismo tiempo evalúa si alguna vez se han desarrollado otros programas de salud con la comunidad.
      .col-lg-5.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-primario.BGR01.hg-08.p-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img04.png')
          .h4 Alcance operativo
          p.mb-0 Se define la evaluación en términos de la estructura y los procesos de atención a la salud, los procesos para prestar el servicio y los equipos con los que se cuenta.

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Etapas del proceso de evaluación

    p.mb-5 En el mismo manual de operación en referencia al modelo de evaluación de programas de salud, el autor, manifiesta que, en términos generales, el proceso de evaluación de un programa o alguno de sus componentes, debe ser planeado y organizado cuidadosamente. Sin embargo, generalizando los procesos evaluativos se puede dividir en tres grandes etapas:

    br
    .row.justify-content-center.align-items-end.mb-5
      .col-12.BGR09.p-4(data-aos="fade-left")
        .row.justify-content-start
          .col-lg-1.d-lg-flex.d-none
          .col-lg-7
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Diagnóstico del entorno del programa y definición de propósitos generales de la evaluación.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Descripción del programa a evaluar.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Diseño metodológico y trabajo de campo, incluidos los aspectos relativos a la elaboración de informes y retroalimentación a los usuarios de la información.
      .col-lg-3.col-6.px-4.pb-2.img-05(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img06.svg')

    p En la siguiente figura se precisan estas tres etapas:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1
          span Etapas del proceso de evaluación
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/img07.svg")
          figcaption Nota: <a style="font-weight: 400">tomado de Álvarez, C. (2014). Manual de operación, el modelo de evaluación de programas de salud (p.35).</a>
    
    p.mb-5 A continuación, se analizarán a profundad los procesos dentro de las etapas del proceso de evaluación:

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Diagnóstico del entorno del programa y definición de propósitos generales de la evaluación
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img08.png')
      .col-lg-8(data-aos="fade-left")
        p Realizar un diagnóstico del entorno del programa es un proceso que debe tener en cuenta varios lineamientos y diferentes puntos de vista para tener un concepto global y establecer los propósitos generales de la evaluación.
        p.mb-0 En primera medida, se realiza el reconocimiento del contexto de operación del programa y una vez reconocido se procede a determinar los propósitos, en caso de no hacer un reconocimiento del contexto se pueden plantear propósitos que no se pueden cumplir o que simplemente no se necesitan, esto genera costos innecesarios en los programas y retrasos en los tiempos de ejecución de propósitos que sí son necesarios.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Reconocimiento del contexto de operación del programa
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p Esta actividad se considera la base de los programas en salud, es tan relevante que debe ser considerada antes de iniciar la planeación y desarrollo de las actividades de evaluación de programas. Dentro del reconocimiento se debe estudiar el programa y los posibles problemas que este puede presentar sobre todo en términos de operación. Debido a esto, se deben realizar visitas de campo, entrevistas informales con trabajadores y beneficiarios, revisión de infraestructura y de ser necesario elaborar listado de requerimientos. 
        p.mb-0 Cuando la evaluación se hace sobre un propósito poblacional es necesario identificar las características de las localidades, los servicios de salud, los perfiles del personal, la infraestructura que incluye los centros de salud, archivos, consultorios, equipos y ver si todo está articulado en función de la comunidad. Por ejemplo, de nada serviría tener una infraestructura adecuada si el horario de atención no se ajusta a las necesidades poblacionales, o si esta no puede acceder al lugar porque no hay vías.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img09.png')
  
    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Determinación de los propósitos de la evaluación
    
    p Este punto es clave para atender las expectativas de los usuarios principales, determinando si los propósitos que se quieren alcanzar corresponden a los requerimientos de información de quien toma las decisiones.
    p Los propósitos principalmente se deben determinar teniendo en cuenta la efectividad, eficiencia y el impacto final de cada programa, sin embargo, para fines administrativos también se puede tener una perspectiva de enfocar los propósitos de evaluación frente a la calidad de la atención, necesidades o cumplimiento de la normatividad institucional.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img10.png')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Un ejemplo de un propósito definido acorde a la efectividad, eficiencia e impacto final es: #[strong determinar las coberturas de atención de los programas de prevención y promoción de la salud a nivel de la población usuaria de servicios.]
        p Mientras que un propósito con un fin administrativo sería: determinar la calidad de la atención médica hospitalaria para población adscrita al Sistema de Protección Social en Salud y el grado de satisfacción de sus usuarios.
        p Cabe resaltar que #[strong los propósitos no son excluyentes y que se pueden alcanzar de manera simultánea o progresiva]; sin embargo, cada uno de los propósitos debe medirse con distintas metodologías, instrumentos y criterios de evaluación, así como deben disponer de diferentes recursos materiales y financieros para poder cumplirse.
        p.mb-0 Los programas deben ser claros para que no se presente ningún tipo de ambigüedad, al tiempo que se articulan con los objetivos y cuente con los recursos necesarios. 

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Descripción del programa a evaluar
      
    p Esta etapa es una de las actividades más delicadas debido a que es el acercamiento formal del evaluador con el objeto de estudio y eso hace que conozca a detalle cada uno de los componentes del programa. En este punto, de ser necesario, se deben incorporar programas de intervención, mecanismos de control de gestión, parámetros de comparación, seguimiento de objetivos, metas y actividades de los programas, entre otros instrumentos, por lo que la decisión del evaluador incide directamente en la calidad del programa.
    p.mb-5 El evaluador debe determinar a rasgos generales si:
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-6.px-0.mb-xl-0.mb-4(data-aos="fade-right")
        .BGIMG02.hg-09.p-4
          .row.justify-content-center.align-items-center
            .col-xl-3.col-2.ps-2.pe-0
              img(src='@/assets/curso/tema2/img11.png')
            .col-9
              .h5.mb-0 El programa es ambiguo o poco claro.
      .col-xl-3.col-md-6.px-0.mb-xl-0.mb-4(data-aos="flip-up")
        .BGIMG03.hg-09.p-4
          .row.justify-content-center.align-items-center
            .col-xl-3.col-2.ps-2.pe-0
              img(src='@/assets/curso/tema2/img12.png')
            .col-9
              .h5.text-white.mb-0 Las metas y actividades son precisas.
      .col-xl-3.col-md-6.px-0.mb-xl-0.mb-4(data-aos="flip-up")
        .BGIMG04.hg-09.px-4.pt-3.pb-4
          .row.justify-content-center.align-items-center
            .col-xl-3.col-2.ps-2.pe-0
              img(src='@/assets/curso/tema2/img13.png')
            .col-9
              .h5.mb-0 Los resultados adicionales a los objetivos son trascendentales.
      .col-xl-3.col-md-6.px-0.mb-xl-0.mb-4(data-aos="fade-left")
        .BGIMG05.hg-09.px-4.pt-3.pb-4
          .row.justify-content-center.align-items-center
            .col-xl-3.col-2.ps-2.pe-0
              img(src='@/assets/curso/tema2/img14.png')
            .col-9
              .h5.mb-0 Los recursos materiales y físicos están disponibles.

    .row.justify-content-end.mb-4
      .col-lg-8
        p.mb-0 Luego de realizar los respectivos análisis, el evaluador debe entregar un informe que por lo menos debe tener los siguientes elementos:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-6.px-4.pb-2.img-04(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img15.svg')
      .col-12.BGR09.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            ul.lista-ul--color
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Objetivos del programa.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Recursos de operación.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Indicadores y metas.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Financiamiento con calendario y conceptos de gasto.
              li.d-flex(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #3076B6;")
                | Evidencias de las acciones realizadas a la fecha.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Formulación de preguntas de evaluación
    
    p El proceso evaluativo se basa en la determinación de las preguntas de evaluación, estas preguntas deben ser congruentes con los criterios de evaluación y deben estar relacionadas con los propósitos generales de la evaluación y del programa.
    p Se recomienda que las preguntas de la evaluación cumplan con las siguientes características:

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img16.png')
          .tarjeta.tarjeta--azul.BGR12.hg-10.p-4
            p.ms-5.mb-0 Deben ser exhaustivas y realizadas a todo el personal estratégico que forma parte del programa.
      .col-lg-4.col-md-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img17.png')
          .tarjeta.tarjeta--azul.BGR12.hg-10.p-4
            p.ms-5.mb-0 Deben haber sido consensuadas con los tomadores de decisiones para garantizar que sean preguntas útiles para el programa.
      .col-lg-4.col-md-6(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img18.png')
          .tarjeta.tarjeta--azul.BGR12.hg-10.p-4
            p.ms-5.mb-0 Deben haber sido seleccionadas y agrupadas para mantener un enfoque metodológico.

    p.mb-5 Las preguntas siempre deben tener un marco lógico de acuerdo con el programa, una estructura adecuada, evaluar los resultados esperados del programa, los recursos utilizados, los tiempos gastados y la relación entre diferentes acciones con sus respectivos resultados.  

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Diseño metodológico y trabajo de campo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img19.png')
      .col(data-aos="fade-left")
        p.mb-0 Una vez se definen los propósitos, el diseño metodológico es el cómo se van a realizar, para ello es necesario hacer diseño de estudio y planes de acción, definir los instrumentos y fuentes de información y organizar y ejecutar la supervisión del trabajo de campo.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Diseño de estudio y plan de acción
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img20.png')
      .col-lg-8(data-aos="fade-left")
        p Esta etapa permite definir los procedimientos de estudio, la selección de las personas que serán estudiadas y las variables e instrumentos con las que se realizará la recolección de información. A través del diseño de estudio se busca maximizar la confiabilidad y validez de los datos al tiempo que se reducen los posibles errores en los resultados. Para ello se debe hacer un análisis estadístico en la cantidad de información a recolectar teniendo en cuenta principios como muestra, universo, nivel de confiabilidad, entre otros.
        p.mb-0 El diseño de estudio debe ir de la mano con el plan de acción donde se determina si se hará una sola medición o si es necesario que se realicen mediciones comparativas y longitudinales, por ejemplo, determinar si hay un medicamento disponible en un centro de salud requerirá de solo una medición, si se habla de eficiencia en gastos de atención en salud por paciente atendido requerirá la comparación con otros puntos de atención para determinar que en promedio se gasta la misma cantidad de recursos en un paciente de un punto A, que en un paciente de un punto B. Finalmente, si se habla de satisfacción de la atención es necesario hacer un estudio antes, durante y después de la prestación del servicio para garantizar la confiabilidad de los resultados.
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Definición de instrumentos y fuentes de información
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img21.png')
      .col(data-aos="fade-left")
        p La confiabilidad, precisión, exactitud y reproducibilidad de los datos obtenidos en cualquier evaluación dependen de los instrumentos con los que se realice y de las fuentes de información seleccionadas. 
        p.mb-0 Dada la importancia de este procedimiento es necesario realizarlo de forma técnica y precisa, para ello se pueden utilizar:

    SlyderF.mb-5(columnas="col-md-6 col-xl-4" data-aos="zoom-in")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img22.png')
        .tarjeta.color-primario.px-4.pt-5.pb-4
          p.text-center.mb-0 #[strong Diseños no experimentales]: son procesos donde se realiza una sola medición, no hace falta tener resultados previos ya que estos no van a influir sobre los resultados ni tampoco es necesario hacer mediciones posteriores.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img23.png')
        .tarjeta.color-primario.px-4.pt-5.pb-4
          p.text-center.mb-0 #[strong Diseños experimentales para la evaluación de programas]: aseguran los resultados obtenidos, tienen un gran rigor científico y la experimentación se hace a condiciones reales, no se permite la extrapolación de resultados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img24.png')
        .tarjeta.color-primario.px-4.pt-5.pb-4
          p.text-center.mb-0 #[strong Diseños experimentales para la evaluación de programas]: en este caso es válido experimentar en condiciones diferentes a las reales, son útiles cuando se quiere por ejemplo aplicar la introducción de nuevas técnicas de capacitación.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img25.png')
        .tarjeta.color-primario.px-4.pt-5.pb-4
          p.text-center.mb-0 #[strong Diseños cuasi-experimentales]: en este tipo de estudios el evaluador puede intervenir en las condiciones en las que se conducirá el estudio.

    .row.justify-content-start.mb-4
      .col-auto.BGRS02.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Organización, ejecución y supervisión del trabajo de campo
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Cuando se van a realizar las actividades de evaluación, es importante contar con un coordinador de equipo, que conduzca tanto las actividades técnicas como las administrativas a fin de optimizar tiempos, al igual es recomendable que haya investigadores de campo, estadistas e informáticos en el equipo, así como un administrador de recursos financieros.
        p.mb-0 Los resultados de la ejecución de la evaluación deben presentarse en un informe técnico que incluye el nombre de las personas que realizaron el estudio, resumen de las actividades desarrolladas, introducción con antecedentes, objetivos claros, métodos explicados, resultados con interpretación, conclusiones y bibliografía.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img26.png')

</template>

<script>
export default {
  name: 'Tema2',
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
