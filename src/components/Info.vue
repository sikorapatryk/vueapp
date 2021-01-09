<template>
  <div>
    <h3>System info</h3>
    <button v-on:click="update_data">UPDATE INFO</button>
    <dl class="row">
      <dt class="col-sm-12">Time</dt>
      <dd class="col-sm-12">{{data.date_time}}</dd>
      <dt class="col-sm-12">Backend hostname</dt>
      <dd class="col-sm-12">{{info.hostname}}</dd>
      <dt class="col-sm-12">Backend port</dt>
      <dd class="col-sm-12">{{info.port}}</dd>
      <dt class="col-sm-12">Frontend hostname</dt>
      <dd class="col-sm-12">{{frontend_hostname}}</dd>
    </dl>
  </div> 

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Info',
    data() {
      return {
        info: null,
        data: null,
        frontend_hostname: this.$config.FRONTEND_HOSTNAME,
      };
    },
    created: function() {
      console.log("API_URL: " + this.$config.API_URL)
      this.update_data();
      this.timer = setInterval(this.update_data, 10000)
    },
    methods: {
      update_data: function() {
      axios
        .get(this.$config.API_URL + '/info')
        .then(res => {
          this.info = res.data;
        })

      axios
        .get(this.$config.API_URL + '/date')
        .then(res => {
          this.data = res.data;
        })
      }
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style>
