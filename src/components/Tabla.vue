<template>

 <div>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Nro pregunta</th>
      <th scope="col">Respuesta</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pregunta,index) in preguntas" :key="index">
      <td>{{ pregunta.numero }}</td>
      <td>{{ pregunta.respuestas}}</td>
    </tr>
  </tbody>
</table>
 </div>

</template>

<script>

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {numero: 1, respuestas: 'c'},
          {numero: 2, respuestas:'c'},
          {numero: 3, respuestas: 'b'}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {

  }
</style>
