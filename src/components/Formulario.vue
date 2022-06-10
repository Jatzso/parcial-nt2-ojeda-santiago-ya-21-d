<template>

  <div class="container">
    <vue-form :state="formState" @submit.prevent="enviar()">
<validate>
  <label class="mt-3" for="nombre">Nombre:</label>
  <input class="form-control" type="text" name="nombre" :maxlength="maximoCaracteres" :minlength="minimoCaracteres" required v-model.trim="formData.nombre">
  <field-messages name="nombre" show="$dirty">
    <div slot="required" class="alert alert-danger mt-3">El campo es obligatorio</div>
    <div slot="minlength" class="alert alert-danger mt-3">Debe ingresar al menos 3 caracteres</div>
    <div slot="maxlength" class="alert alert-danger mt-3">El máximo de caracteres es 15</div>
  </field-messages>
</validate>

<validate>
  <label class="mt-3" for="apellido">Apellido:</label>
  <input class="form-control" type="text" name="apellido" :maxlength="maximoCaracteres" :minlength="minimoCaracteres" required v-model.trim="formData.apellido">
  <field-messages name="apellido" show="$dirty">
    <div class="alert alert-danger mt-3" slot="required">El campo es obligatorio</div>
    <div class="alert alert-danger mt-3" slot="minlength">Debe ingresar al menos 3 caracteres</div>
    <div class="alert alert-danger mt-3" slot="maxlength">El máximo de caracteres es 15</div>
  </field-messages>
</validate>

<validate>
  <label class="mt-3" for="nota">Nota:</label>
  <input class="form-control" type="number" name="nota" :max="maximoNota" :min="minimoNota" required v-model.trim="formData.nota">
  <field-messages name="nota" show="$dirty">
    <div class="alert alert-danger mt-3" slot="required">El campo es obligatorio</div>
    <div class="alert alert-danger mt-3" slot="min">La nota no puede ser negativa</div>
    <div class="alert alert-danger mt-3" slot="max">La nota no puede superar 10</div>
  </field-messages>
</validate>

  <button class="btn btn-success mt-3" :disabled="formState.$invalid">Enviar</button>
    </vue-form>

    <table v-if="notas.length" class="table mt-3">
  <thead>
    <tr>
      <th scope="col">Nombre completo</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(nota, index) in notas" :key="index">
      <td>{{ nota.nombre}} {{ nota.apellido}}</td>
      <td :style="getEstilo(nota.nota)">{{ nota.nota }}</td>
    </tr>
    <tr :style="getEstilo(this.promedio)">  
      <td>Promedio Total:</td>
      <td>{{ this.promedio}}</td>
    </tr>
  </tbody>
</table>
<h2 class="alert alert-warning mt-3" v-else>No hay notas todavia</h2>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState:{},
        formData: this.getInitialData(),
        minimoCaracteres: 3,
        maximoCaracteres: 15,
        minimoNota: 0,
        maximoNota: 10,
        notas: [],
        promedio: 0,
        acumulador: 0,
      }
    },
    methods: {
      getInitialData(){
        return{
          nombre: null,
          apellido: null,
          nota: null
        }
      },
      enviar(){
        console.log(JSON.stringify(this.formData))
        let nota = this.formData
        this.acumulador = this.acumulador + parseInt(nota.nota)
        this.notas.push(nota)
        this.promedio = this.acumulador / this.notas.length
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      getEstilo(nota){
        let estilo = 'yellow'
        if(nota >= 0 && nota <= 3){
          estilo = 'red'
        }else if(nota >= 7 && nota <= 10){
          estilo = 'green'
        }
        return{
          color: estilo
        } 
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
