document.addEventListener('DOMContentLoaded', () => {

    const app = new Vue({

            el: '#hello',
            data: {
                message: 'Hello world',
                myclass: "red", 
                myclass2: "hidden",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1200px-Earth_Eastern_Hemisphere.jpg"      
            },
            methods: {
                showImage: function() {
                    this.myclass == "red" ? this.myclass = "blue" : this.myclass = "red";
                    this.myclass2 == "hidden" ? this.myclass2 = "show" : this.myclass2 = "hidden";
                }
            }
        });

});