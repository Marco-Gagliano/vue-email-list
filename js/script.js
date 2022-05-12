
/* 
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/




// per inizializzare i plugin la sintassi è:
//dayjs.extend(window.dayjs_plugin_NOME_DEL_PLUGIN);

dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);


dayjs.locale('it');


const app = new Vue({

  el: '#app',

  data: {
    emailList: [],
    numberEmail: 10,
    loadingPage: true
    
  },

  methods: {
    emailGenerator() {
      for(let i = 0; i < this.numberEmail; i++) {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

        .then(res => {

          // this.generateEmail.push(res.data.response);
          this.emailList.push(res.data.response);
          // console.log(this.emailList);
          this.loadingPage = false;
        })
      }
    }
  },


  mounted(){
      this.emailGenerator()
  }
  

});