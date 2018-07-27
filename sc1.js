
var fru = [{
        name: "apple",
        price: 10,category:"fruit"
    },
    {
        name: "mango",
        price: 20,category:"fruit"
    },
    {
        name: "banana",
        price: 30,category:"fruit"
    },
    {
        name: "Akee.",
        price: 40,category:"fruit"
    },
    {
        name: "Bilberry.",
        price: 50,category:"fruit"
    },
    {
        name: "Cherry",
        price: 60,category:"fruit"
    },
    {
        name: "currant",
        price: 70,category:"fruit"
    },
    {
        name: "fig",
        price: 80,category:"fruit"
    },
    {
        name: "guava",
        price: 90,category:"fruit"
    },
    {
        name: "raisan",
        price: 100,category:"fruit"
    },
]

var veg = [{
        name: "broccoli",
        price: 20,category:"vegitable"
    },
    {
        name: "carrot",
        price: 30,category:"vegitable"
    },
    {
        name: "corn",
        price: 40,category:"vegitable"
    },
    {
        name: "cucumber",
        price: 50,category:"vegitable"
    },
    {
        name: "green bean",
        price: 60,category:"vegitable"
    },
    {
        name: "green onion",
        price: 70,category:"vegitable"
    },
    {
        name: "leek",
        price: 80,category:"vegitable"
    },
    {
        name: "lettuce",
        price: 90,category:"vegitable"
    },
    {
        name: "potato",
        price: 100,category:"vegitable"
    },
    {
        name: "tomato",
        price: 100,category:"vegitable"
    }
]

var bis = [{
        name: "Oreo",
        price: 120,category:"biscuit"
    },
    {
        name: "Dukes",
        price: 130,category:"biscuit"
    },
    {
        name: "Cremica",
        price: 140,category:"biscuit"
    },
    {
        name: "Patanjali",
        price: 150,category:"biscuit"
    },
    {
        name: "Rose",
        price: 160,category:"biscuit"
    },
    {
        name: "Anmol",
        price: 170,category:"biscuit"
    },
    {
        name: "Priyagold",
        price: 180,category:"biscuit"
    },
    {
        name: "Sunfeast",
        price: 190,category:"biscuit"
    },
    {
        name: "Britannia",
        price: 10,category:"biscuit"
    },
    {
        name: "Parle",
        price: 110,category:"biscuit"
    }
]

var dai = [{
       name: "Butter ",
        price: 220,category:"dairy"
    },
    {
       name: "Cheese",
        price: 230,category:"dairy"
    },
    {
       name: "cream",
        price: 240,category:"dairy"
    },
    {
       name: "Milk",
        price: 250,category:"dairy"
    },
    {
       name: " Milk Powder.",
        price: 260,category:"dairy"
    },
    {
       name: "toned milk",
        price: 270,category:"dairy"
    },
    {
       name: "dahi",
        price: 280,category:"dairy"
    },
    {
       name: "lassi",
        price: 290,category:"dairy"
    },
    {
       name: "shake",
        price: 20,category:"dairy"
    },
    {
       name: "vanila",
        price: 210,category:"dairy"
    }
];
var product = [fru, veg, bis, dai];
console.log(product);

function search() {
    var find =[];
    var ba = document.getElementById("b1").value;
    ca = ba.length;
    if (ca > 0) {
        var exp = new RegExp(ba,"i");

        product.forEach((element)=> {
        
                element.forEach((element1)=>{
                    if (exp.test(element1.name)) {
                        console.log(element1.name);
                        find.push(element1);
                    }
                });
        });

    }
if(find.length>0){
    var tabid="<table><tr><th>Item</th><th>Price</th><th>Category</th><th>Name</th></tr>"
    find.forEach((prod)=>{
        
        tabid=tabid+"<tr><td>"+prod.name+"</td><td>"+prod.price+"</td><td>"+prod.category+"</td><td>"+"<input type=number min=0 id="+prod.price+"</td></tr>"
        });
        tabid=tabid+"</table>";
        document.getElementById("middlepane").innerHTML=tabid;
       

    }
}

function reset()
{
    document.getElementById("middlepane").innerHTML="";
    document.getElementById("b1").value="";
}
