class Person {
    constructor(name = '', age = 0){
        this.name = name;
        this.age = age;
    }
}

class Dream {
    constructor(name = '', cost = 0){
        this.name = name;
        this.cost = cost;
    }
}

let dreams = [new Dream('Apartamento', 6000000), new Dream('Carro', 1200000)];

let person = new Person('Vinicius da Silva', 23);

// Data and Methods
let vm = new Vue({
    el:'#person',
    data: person
});

let dream = new Vue({
    el:'#dream',
    data: {
        dreams : dreams
    }
});

console.log('The property data is equals to dreams array', dream.$data === dreams);
console.log('The property data is equals to dreams array', dream.$data.dreams === dreams);
console.log('The property data is equals to dreams array', dream.dreams === dreams);

// Instance Lifecycle Hooks

new Vue({
    data: {
        age: 23,
    },
    beforeCreate: function(){
        console.log('Before Created');
        console.log('Init Events and Lifecycle');
    },
    created: function () {
        console.log('Created');
        console.log('Init Injections and reactivity');
    },
    beforeMount: function () {
        console.log('Before Mount');
        console.log('Verify if the instance have el and template options');
        console.log('Compile template into render function or outerHTML as no template');
        console.log('If the el option is not set, only set when the vm.$mount(el) is called');
    },
    mounted: function () {
        console.log('Mouted');
    },
    beforeDestroy: function () {
        console.log('Before Destroy');
    },
    destroy: function () {
        console.log('Destroy');
    }

});
