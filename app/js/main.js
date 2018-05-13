let app = new Vue({
    el: '#app',
    data: {
        message: 'Olá'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data:{
        message: 'Loaded this page on ' + new Date().toLocaleString(),
    }
});

let app3 = new Vue({
    el:'#app-3',
    data: {
        seen: true,
        content: 'Vue.js'
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        cars: [
            {name: 'AMD C63 Coupe'},
            {name: 'AMD E63 S'},
            {name: 'AMD S63'},
        ]
    }
});

let app5 = new Vue({
    el: '#app-5',
    data: {
        message : 'Vinicius da Silva'
    },
    methods: {
        reverseText: function(){
          this.message = [... this.message].reverse().join('');
        }
    }

});

let app6 = new Vue({
    el:'#app-6',
    data: {
        message: 'Felile Lauri'
    }
});