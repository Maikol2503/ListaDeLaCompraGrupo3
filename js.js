            var d=document;
            var ls=localStorage;
            var js=JSON;
           //animacion de la barra de menu
           document.querySelector(".bars__menu").addEventListener("click", animateBars );
           let line1__bars = document.querySelector(".line1__bars-menu");
           let line2__bars = document.querySelector(".line2__bars-menu");
           let line3__bars = document.querySelector(".line3__bars-menu");
           function animateBars(){
               line1__bars.classList.toggle("activeline1__bars-menu")
               line2__bars.classList.toggle("activeline2__bars-menu")
               line3__bars.classList.toggle("activeline3__bars-menu")
           }
           //esto hace que el menu de navegacion sea visible
            const botonbar = document.querySelector(".bars__menu")
            const itemm = document.querySelector(".menu-menu")
          
            botonbar.addEventListener("click" , () => {
            itemm.classList.toggle("visiblee")
            })
            

    
              //esto hace que el menu de ingresar nombre de la lista sea visible
           const botonBar = document.querySelector(".botonFlotante")
           const item = document.querySelector(".cuadro-nombreDeLalista")
           const crear=document.querySelector("#botonDeGuardar-lista")
           const volver =document.querySelector("#flecha1")
           const recibecheck = document.querySelector(".recibe-check")
           const botonopcionSupermercados = document.querySelector(".btnsupermercado-visible")
          //  const borrar = document.querySelector(".cuadroo")

          //  borrar
    
            volver.addEventListener("click" , () => {
           item.classList.toggle("visible")
    
    })
           
        botonBar.addEventListener("click" , () => {
        item.classList.toggle("visible")
    
    })
    
           crear.addEventListener("click" , () => {
           item.classList.toggle("visible")
    
    })
   
    // botonopcionSupermercados.addEventListener("click", () => {
    //     recibecheck.classList.toggle("recibe-checkVisible")
    // })
    
    
    let mer = document.querySelector("#mer");
    let fragment = document.createDocumentFragment();
    const items = document.querySelector("#items");
    const buscador = document.querySelector("#buscador");
    const boton = document.querySelector("#boton");
    const contenedor = document.querySelector(".c");
    const cajaC = document.querySelector(".caja-c");
    const resultado1 = document.querySelector("#resultadofrecuentes");
    const resultado5 = document.querySelector("#resultadoDeNuevoProducto"); 
    const frecuente = document.querySelector(".frecuentes");
    const mercadosNombre = document.querySelector("#mercado");
    const botonGuardarSupermercado = document.querySelector("#boton-guargarSupermercado");

    
    const footer = document.querySelector("#footer")
    const templetcar = document.querySelector("#template-carrito").content
    const templetfooter = document.querySelector("#template-footer").content
    const contenedorfrecuentes = document.querySelector("#resultadofrecuentes")
    
    
     contenedor.addEventListener("click", e =>{
             addagregaralalista(e)
        })
        frecuente.addEventListener("click", e =>{
        //  console.log(e);
            addagregaralalista(e)
       })
    
     items.addEventListener("click" , e => {
         btnSumar(e)
     })
     contenedorfrecuentes.addEventListener("click", e =>{
      addFrecuentesagregaralalista(e)
   })
    
   let formulario = {}
   var prodFrec=[];

   var totalProduc=[

           {id:1, nombre:"Arroz redondo", precio: "0.95", thumbnailUrl: "https://1.bp.blogspot.com/-2EG8PdRlIQg/XMymk8UAe9I/AAAAAAAALnc/3kKHT79S2EcyqDE_2GCkboGZEtE6KSAIACKgBGAs/s1600/arroz-redondo-hacendado-mercadona-1.jpg" , lugar:"mercadona"},
           {id:2, nombre:"Harina", precio: "0.75",  lugar:"mercadona",  thumbnailUrl:"https://m.media-amazon.com/images/I/81jQBadLd4L._AC_SY879_.jpg"},
           {id:3, nombre:"Leche", precio: "0.74",  lugar:"mercadona", thumbnailUrl: "https://estaticos-cdn.prensaiberica.es/clip/8e6ffacf-814d-4b4d-b890-4e407717d7ca_16-9-aspect-ratio_default_0.jpg"},
           {id:4, nombre:"Macarron", precio: "1.16",  lugar:"mercadona", thumbnailUrl:"https://a2.soysuper.com/35563eff0cb3284b5e1dc5d4b7d4519b.340.340.0.min.wmark.5d223101.jpg"},
           {id:5, nombre:"Aguacate", precio: "1.22",  lugar:"mercadona", thumbnailUrl:"https://solidstarts.com/wp-content/uploads/introducing-avocado-to-babies-1-768x576@2x.jpg"},
           {id:6, nombre:"Cebolla", precio: "1.45",  lugar:"mercadona", thumbnailUrl:"https://s.cornershopapp.com/product-images/3272555.jpg?versionId=4G1_3KsijyxDxWDvsWs9nKCnh18CjetO"},
           {id:7, nombre:"Pimiento", precio: "0.77",  lugar:"mercadona", thumbnailUrl:"https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pimiento-rojo-21-de-mercadona-1649707429_m.jpg"},
           {id:8, nombre:"Coca Cola", precio: "1.39",  lugar:"mercadona", thumbnailUrl:"https://www.supermercadoseljamon.com/documents/10180/892067/30035100_G.jpg"},
           {id:9, nombre:"Queso", precio: "1.10",  lugar:"mercadona", thumbnailUrl:"https://pbs.twimg.com/media/EKZ-e2AX0AA3dEt?format=png&name=small"},
           {id:10, nombre:"Yogurt", precio: "1.45",  lugar:"mercadona", thumbnailUrl:"https://serabueno.com/wp-content/uploads/yogur-sabores-0-materia-grasa-y-azucar-hacendado.jpg"},
           {id:11, nombre:"Chocolate", precio: "1.05",  lugar:"mercadona",thumbnailUrl:"https://www.infopack.es/upfiles/noticies_img/A_356980724.jpg"},
           {id:12, nombre:"Ajo", precio: "1",  lugar:"mercadona", thumbnailUrl:"https://cdn.deliberry.com/images/1056585/resize/1600/1600/3.jpg"},
           {id:13, nombre:"Nararnja", precio: "3.57",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1056433/resize/1600/1600/3.jpg"},
           {id:14, nombre:"Pera", precio: "0.38",  lugar:"mercadona", thumbnailUrl:"https://cdn.deliberry.com/images/1056399/resize/1600/1600/3.jpg"},
           {id:15, nombre:"Aceite girasol 1 litro", precio: "3.00",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1035071/resize/600/600/3.jpg"},
           {id:16, nombre:"Patata", precio: "5.99",  lugar:"mercadona", thumbnailUrl:"https://cdn.deliberry.com/images/79076/resize/600/600/3.jpg"},
           {id:17, nombre:"Azucar", precio: "0.77",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1049068/resize/1600/1600/3.jpg"},
           {id:18, nombre:"Papel", precio: "7.30",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1058113/resize/1600/1600/3.jpg"},
           {id:19, nombre:"Pimienta", precio: "0.95",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1047698/resize/1600/1600/3.jpg"},
           {id:20, nombre:"Comino", precio: "0.90",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1047711/resize/1600/1600/3.jpg"},
           {id:21, nombre:"Lechuga", precio: "0.85",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1056478/resize/1600/1600/3.jpg"},
           {id:22, nombre:"Cola Cao", precio: "3.49",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1050790/resize/1600/1600/3.jpg"},
           {id:23, nombre:"Platano de canarias", precio: "0.54",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1056375/resize/1600/1600/3.jpg"},
           {id:24, nombre:"Zanahoria", precio: "0.59",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1056630/resize/1600/1600/3.jpg"},
           {id:25, nombre:"Pollo entero", precio: "6.17",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1051268/resize/1600/1600/3.jpg"},
           {id:26, nombre:"Tomate", precio: "0.62",  lugar:"mercadona", thumbnailUrl: "https://www.sakata.com.br/imagens/img-encantador.jpg"},
           {id:27, nombre:"Fanta 2L", precio: "1.52",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1048290/resize/1600/1600/3.jpg"},
           {id:28, nombre:"Nutela", precio: "2.95",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/159551/resize/600/600/3.jpg"},
           {id:29, nombre:"Donut", precio: "1.35",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1059382/resize/1600/1600/3.jpg"},
           {id:30, nombre:"Aceite de Oliva", precio: "4",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1047488/resize/1600/1600/3.jpg"},
           {id:31, nombre:"Legumbre", precio: "0.78",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1048857/resize/1600/1600/3.jpg"},
           {id:32, nombre:"Aquarius", precio: "1.50",  lugar:"mercadona", thumbnailUrl: "https://cdn.deliberry.com/images/1048072/resize/1600/1600/3.jpg"},
           {id:33, nombre:"Lejia", precio: "0.80",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/le/lejia-normal-bosque-verde-de-mercadona-1649684690_m.jpg"},
           {id:34, nombre:"Amoniaco", precio: "1.20",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/am/amoniaco-perfumado-de-mercadona-1649684554_m.jpg"},
           {id:35, nombre:"Suavizante", precio: "2.00",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/su/suavizante-para-ropa-de-concentrado-floral-bosque-verde-de-larga-duracion-botella-de-2-l-de-mercadona-1649684839_m.jpg"},
           {id:36, nombre:"Toallitas bebé frescas", precio: "1.05",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/to/toallitas-humedas-bebe-frescas-y-perfumadas-con-aloe-vera-2-de-mercadona-1649698407_m.jpg"},
           {id:37, nombre:"Quitagrasas KH-7", precio: "3.40",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/de/desengrasante-cocinas-y-tejidos-pistola-de-mercadona-1649706194_m.jpg"},
           {id:38, nombre:"Escoba", precio: "1.15",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/es/escoba-basica-gris-de-mercadona-1649697283_m.jpg"},
           {id:39, nombre:"Fregona Microfibra", precio: "1.50",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/fr/fregona-de-hilos-de-microfibra-bosque-verde-de-mercadona-1649684568_m.jpg"},
           {id:40, nombre:"Recogedor", precio: "1.45",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/re/recogedor-con-palo-gris-antivuelco-de-mercadona-1649696677_m.jpg"},
           {id:41, nombre:"Salchichas cocidas", precio: "1.95",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/sa/salchicha-frankfurt-de-mercadona-1649691134_m.jpg"},
           {id:42, nombre:"Vinagre de vino blanco", precio: "0.62",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/vi/vinagre-de-vino-blanco-de-mercadona-1649681711_m.jpg"},
           {id:43, nombre:"Palo fregona / escoba universal gris", precio: "0.90 ",  lugar:"mercadona", thumbnailUrl: "https://a2.soysuper.com/c7f0e276665e70ca1a9fad5a337657d9.1500.0.0.0.wmark.5e81af5b.jpg"},
           {id:44, nombre:"Desatascador goma Zeppilin", precio: "1.90",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/de/desatascador-de-plastico-negro-de-mercadona-1649684337_m.jpg"},
           {id:45, nombre:"Cepillo para lavar", precio: "1.20",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ce/cepillo-para-lavar-con-puas-duras-con-asa-de-mercadona-1649687784_m.jpg"},
           {id:46, nombre:"Cubo de basura mediano 30L", precio: "8.50",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/cu/cubo-basura-pedal-22-l-gris-de-mercadona-1649699583_m.jpg"},
           {id:47, nombre:"Barra de pan sin sal", precio: "0.65",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ba/barra-de-pan-sin-sal-anadida-de-mercadona-1649696768_m.jpg"},
           {id:48, nombre:"Patatas fritas al punto de sal Lay's", precio: "1.59",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/patatas-fritas-lisas-punto-sal-de-mercadona-1649706004_m.jpg"},
           {id:49, nombre:"Jabon manos pastilla", precio: "2.30",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ja/jabon-de-manos-en-pastilla-de-mercadona-1649687308_m.jpg"},
           {id:50, nombre:"Agua mineral grande Bezoya", precio: "0.69",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ag/agua-mineral-bezoya-de-mercadona-1652747379_m.jpg"},
           {id:51, nombre:"Pipas girasol tostadas", precio: "1.15",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pipas-gigantes-aguasal-de-mercadona-1649680456_m.jpg"},
           {id:52, nombre:"Bebida energética Red Bull", precio: "1.19",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/be/bebida-energetica-red-bull-de-mercadona-1649690790_m.jpg"},
           {id:53, nombre:"Bebida energética Energy Ultra zero Monster", precio: "1.19",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/mo/monster-de-mercadona-1651537381_m.jpg"},
           {id:54, nombre:"Ketchup Heinz", precio: "2.85",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ke/ketchup-28-de-mercadona-1649700071_m.jpg"},
           {id:55, nombre:"Salsa ligera Ligeresa", precio: "2",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/sa/salsa-ligera-16-de-mercadona-1651537177_m.jpg"},
           {id:56, nombre:"Mostaza dulce", precio: "0.80",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/mo/mostaza-dulce-de-mercadona-1649681733_m.jpg"},
           {id:57, nombre:"Pizza atún y bacón Hacendado", precio: "2.50",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-fresca-de-atun-y-bacon-de-mercadona-1649685688_m.jpg "},
           {id:58, nombre:"Pizza atún", precio: "2.25",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-congelada-de-atun-de-mercadona-1649723032_m.jpg"},
           {id:59, nombre:"Atun claro en aceite de girasol", precio: "4.40",  lugar:"mercadona", thumbnailUrl: "https://cdn.shopify.com/s/files/1/0512/7500/6146/products/06-Atu-n-claro-en-aceite-de-girasol-Hacendado-3-latas-de-80g_700x.jpg?v=1636545507"},
           {id:60, nombre:"Dentífrico Triple Acción Colgate con flúor menta original", precio: "1.40",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/de/dentifrico-pasta-triple-accion-de-mercadona-1649691229_m.jpg"},
           {id:61, nombre:"Champú Repara & Protege Pantene cabello débil y dañado", precio: "3",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ch/champu-repara-y-protege-de-mercadona-1649688548_m.jpg"},
           {id:62, nombre:"Champú anticaspa Citrus Fresh H&S cabello graso", precio: "3.80",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ch/champ-anticaspa-citrus-fresh-cabello-graso-1-de-mercadona-1649702007_m.jpg"},
           {id:63, nombre:"Zumo de piña y uva", precio: "1",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/zu/zumo-pina-y-uva-1-de-mercadona-1652142206_m.jpg"},
           {id:64, nombre:"Pañuelos de papel Extra Suaves Bosque Verde 2 capas", precio: "1.20",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ca/caja-de-panuelos-de-papel-de-mercadona-1649684595_m.jpg"},
           {id:65, nombre:"Pan de molde blanco familiar", precio: "1.25",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/pan-de-molde-blanco-especial-sandwich-de-mercadona-1653380248_m.jpg"},
           {id:66, nombre:"Pan de molde 100% integral", precio: "1.25",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/pan-de-molde-integral-especial-sandwich-28-rebanadas-de-mercadona-1649681145_m.jpg"},
           {id:67, nombre:"Cheetos", precio: "1.55",  lugar:"mercadona", thumbnailUrl: "https://botiga.mercattorreblanca.cat/2829-large_default/cheetos-matutano-pelotazos-130-g.jpg"},
           {id:68, nombre:"Huevos grandes L", precio: "2.10",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/hu/huevos-grandes-talla-l-una-docena-de-mercadona-1649683245_m.jpg"},
           {id:69, nombre:"Brocoli", precio: "1.08",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/br/brcoli-23-de-mercadona-1649705994_m.jpg"},
           {id:70, nombre:"Gelatina sabor fresa Hacendado Gellytina", precio: "0.85",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ge/gelatina-sabores-2-limon-2-naranja-2-multifrutas-de-mercadona-1649693985_m.jpg"},
           {id:71, nombre:"Miel de flores ", precio: "3.55",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/mi/miel-mil-flores-con-dosificador-de-mercadona-1649680599_m.jpg"},
           {id:72, nombre:"Bayeta suave multiusos", precio: "1.20",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ba/bayeta-suave-multiusos-de-colores-de-mercadona-1649684242_m.jpg"},
           {id:73, nombre:"Uva roja sin semillas", precio: "2.40",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/uv/uva-roja-sin-semillas-1-de-mercadona-1649703739_m.jpg"},
           {id:74, nombre:"Manzana Evelina", precio: "0.53",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/manzana-evelina-3-de-mercadona-1651537214_m.jpg"},
           {id:75, nombre:"Cereales copos de maíz Corn Flakes Kellogg's", precio: "2.75",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/co/corn-flakes-de-mercadona-1649681334_m.jpg"},
           {id:76, nombre:"Cerveza especial Mahou", precio: "0.71",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/mahou-5-estrellas-de-mercadona-1649685571_m.jpg"},
           {id:77, nombre:"Papel de Aluminio", precio: "2.20",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/papel-de-aluminio-30-m-de-mercadona-1649684687_m.jpg"},
           {id:78, nombre:"Film Transparente", precio: "1.05",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/fi/film-transparente-80-m-de-mercadona-1649691177_m.jpg"},
           {id:79, nombre:"Maiz dulce", precio: "1.25",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/maiz-dulce-hacendado-de-mercadona-1649680862_m.jpg"},
           {id:80, nombre:"Bolsa de basura Bosque Verde 30L cubo mediano", precio: "1.60",  lugar:"mercadona", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/bo/bolsa-de-basura-normal-55x60-cubo-de-cocina-30-l-de-mercadona-1649684360_m.jpg"},
            


           {id:81, nombre:"Arroz Largo", precio: "0.85",  lugar:"ahorramas", thumbnailUrl:"https://comercialpass.com/wp-content/uploads/2021/07/IMG_20210728_164534.png"},
           {id:82,  nombre:"Harina", precio: "0.75",  lugar:"ahorramas", thumbnailUrl: "https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNURYSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bb1f3a5d7ef523bbf90761b28cdfd26c31fc6ed7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9UY21WemFYcGxYMkZ1WkY5d1lXUmJDR2tDV0FKcEFsZ0Nld1k2QzJWNGRHVnVaRG9LZDJocGRHVTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--6c851047e6ae64014cbd1d8d2af6e14020af2115/7702084127330.jpg?locale=es"},
           {id:83,  nombre:"Leche", precio: "0.75",  lugar:"ahorramas", thumbnailUrl: "https://media3.ocu.org//images/9C0744C1134A8BFB06660A7B97929331AEBD33ED/h1290-c4/Leches-semidesnatadas-ALIPENDE-AHORRAMAS-LECHE-SEMIDESNATADA-UHT-zoom.jpg"},
           {id:84,  nombre:"Macarron", precio: "2",  lugar:"ahorramas", thumbnailUrl: "https://www.supermercadosmas.com/media/catalog/product/cache/1d58bce9e6622d548432b1c2f3e3c1ab/i/m/import_aecoc_images_08480012009895_8480012009895.jpg"},
           {id:85,  nombre:"Aguacata", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://i.blogs.es/659d47/appetite-1238257_1280/1366_2000.webp"},
           {id:86,  nombre:"Cebolla", precio: "1.69",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/26/00118176100768____1__600x600.jpg"},
           {id:87,  nombre:"Pimiento", precio: "0.75",  lugar:"ahorramas", thumbnailUrl: "https://cdn.shopify.com/s/files/1/2114/3711/products/196_x700.jpg?v=1498190591"},
           {id:88,  nombre:"Coca Cola", precio: "1.39",  lugar:"ahorramas", thumbnailUrl: "https://cdn.metro-group.com/es/es_pim_70542001001_01.png?w=400&h=400&mode=pad"},
           {id:89,  nombre:"Queso", precio: "1.59",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/71qjjnGss2L._AC_SL1500_.jpg"},
           {id:90, nombre:"Yogurt", precio: "1.25",  lugar:"ahorramas", thumbnailUrl: "https://s1.eestatic.com/2019/04/12/ciencia/nutricion/nutricion_390471665_120242604_1706x1280.jpg"},
           {id:91, nombre:"Chocolate", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://financialfood.es/wp-content/uploads/2019/10/Milka-161019.jpg"},
           {id:92, nombre:"Ajo", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201802/06/00118173100258____1__600x600.jpg"},
           {id:93, nombre:"Naranja", precio: "1.35",  lugar:"ahorramas", thumbnailUrl: "https://www.ahorramas.com/wp-content/uploads/2021/12/Blog-por-que-es-tan-necesaria-la-vitamina-c.jpg"},
           {id:94, nombre:"Pera", precio: "0.37",  lugar:"ahorramas", thumbnailUrl: "https://static0.tiendeo.com/upload_articulos/564530/828cf75c-9cb2-50e9-aa0f-110ccc3461d9.jpg"},
           {id:95, nombre:"Aceite girasol 1 Litro", precio: "2.95",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201606/22/00120904100128____1__600x600.jpg"},
           {id:96, nombre:"Patata", precio: "6",  lugar:"ahorramas", thumbnailUrl: "https://www.missupermercados.com/images/p/patata-varios-malla-3-kg-pid-50910966.jpg"},
           {id:97, nombre:"Azucar", precio: "0.77",  lugar:"ahorramas", thumbnailUrl: "https://www.lavidasabemejor.es/wp-content/uploads/2017/11/azucar-blanco-bolsa-de-plastico-1-5kg.png"},
           {id:98, nombre:"Papel", precio: "4.55",  lugar:"ahorramas", thumbnailUrl: "https://www.missupermercados.com/images/p/papel-higienico-4-capas-bosque-verde-paquete-8-u-pid-6391894.jpg"},
           {id:99, nombre:"Pimienta", precio: "0.95",  lugar:"ahorramas", thumbnailUrl: "https://www.supermercadosmas.com/media/catalog/product/cache/d91bc430dbe2e3d899436802c7aa5233/i/m/import_aecoc_images_08413700030260_08413700030260_c1n1.jpg"},
           {id:100, nombre:"comino", precio: "0.98",  lugar:"ahorramas", thumbnailUrl: "https://cdn02.plentymarkets.com/n79ih84csvpx/item/images/500950146/full/comino-molido-carmencita.jpg"},
           {id:101, nombre:"Lechuga", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNGZaSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--43b25b0229244803af9395b1b09254ebd8a48bfc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/77020130429.jpg?locale=es"},
           {id:102, nombre:"Cola Cao", precio: "3.46",  lugar:"ahorramas", thumbnailUrl: "https://www.retailactual.com/media/uploads/noticias/bote-cola-cao-juegos-olimpicos-retail-actual.jpg"},
           {id:103, nombre:"Platano", precio: "0.60",  lugar:"ahorramas", thumbnailUrl: "https://static.chollometro.com/threads/raw/uVWvH/807024_1/fs/895x577/qt/65/807024_1.jpg"},
           {id:104, nombre:"Zanahoria", precio: "0.60",  lugar:"ahorramas", thumbnailUrl: "https://static.carrefour.es/hd_350x_/img_pim_food/131885_00_1.jpg"},
           {id:105, nombre:"Pollo", precio: "5.94",  lugar:"ahorramas", thumbnailUrl: "https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBKzdaSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9866fd0dc11aec4cdb1b778b341f3c8dfef61cb8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/77020130143.jpg?locale=es"},
           {id:106, nombre:"Tomate", precio: "0.65",  lugar:"ahorramas", thumbnailUrl: "https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMFF3S1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cb3ec5c5b657539abc581154c2a327c1a116ea48/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9UY21WemFYcGxYMkZ1WkY5d1lXUmJDR2tDV0FKcEFsZ0Nld1k2QzJWNGRHVnVaRG9LZDJocGRHVTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--6c851047e6ae64014cbd1d8d2af6e14020af2115/77020130468.jpg?locale=es"},
           {id:107, nombre:"Fanta", precio: "1.55",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/21/00118611600331____10__600x600.jpg"},
           {id:108, nombre:"Nutela", precio: "3",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/71AtTD2CijL._SL1500_.jpg"},
           {id:109, nombre:"Donut", precio: "1.05",  lugar:"ahorramas", thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDLFLN4v77P9lfW6YVCiFkVN501_xIF00fNtcIWZyJ4S1mQ8qoQOsNP-TXBJ7-sP5qfQ&usqp=CAU"},
           {id:110, nombre:"Aceite de Oliva", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/31W5fNzz5BL.jpg"},
           {id:111, nombre:"Legumbre", precio: "0.85",  lugar:"ahorramas", thumbnailUrl: "https://i.blogs.es/77dfa6/40810292935_b9b97fdabe_h/1366_2000.jpg"},
           {id:112, nombre:"Aquarius", precio: "1.52",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202203/03/00118623900380____13__600x600.jpg"},
           {id:113, nombre:"Lejia", precio: "3.45",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201912/16/00128014300223____12__600x600.jpg"},
           {id:114, nombre:"Amoniaco", precio: "1.35",  lugar:"ahorramas", thumbnailUrl: "https://scontent.fmad19-1.fna.fbcdn.net/v/t45.5328-4/35338678_2041224982586313_1194331934302404608_n.png?stp=dst-png_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=c48759&_nc_ohc=lZU7ty6j_EwAX8V5G81&_nc_ht=scontent.fmad19-1.fna&oh=00_AT-M84N3kVjBObK5Vu3NwzKsB7wBz5soXWlXpyhE0PdzNQ&oe=62AD7770"},
           {id:115, nombre:"Suavizante", precio: "2.27",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/81hNTitBdWL._AC_SL1500_.jpg"},
           {id:116, nombre:"Toallitas bebé frescas", precio: "1.04",  lugar:"ahorramas", thumbnailUrl: "https://a2.soysuper.com/c06da2e31ab11a531c19ccce08709b44.1500.0.0.0.wmark.7e94efee.jpg"},
           {id:117, nombre:"Quitagrasas KH-7", precio: "5.06",  lugar:"ahorramas", thumbnailUrl: "https://prod.isg.bruneau.media/external/e2cb1b3443e0fd8774976899504aaaa080863c32?source=https%3A%2F%2Fbruneau.simpleworkspace.net%2Fphp%2Fscripts%2FgetFile.php%3Ftype%3DpubAssetBase%26s%26key%3Dc1GgtnMdgHJEnr10TsxxEuMzcxHtPA5erONiVOh_DZg9qET5lUc%26t%3D16234161470000%26name%3D713662.jpg&format=webp&height=596&quality=85&scale=upscalecanvas&width=596"},
           {id:118, nombre:"Escoba", precio: "2.09",  lugar:"ahorramas", thumbnailUrl: "https://media.bahag.cloud/m/734059/12.webp"},
           {id:119, nombre:"Fregona Microfibra", precio: "1.86",  lugar:"ahorramas", thumbnailUrl: "https://limpialotodo.com/259-large_default/productos-de-limpieza-pla-fregona-microfibra-tiras-bayeta-fregonas.jpg"},
           {id:120, nombre:"Recogedor", precio: "2.45",  lugar:"ahorramas", thumbnailUrl: "https://cdn.disnordic.com/5834-large_default/recogedor-polipropileno-80cm-azul.jpg"},
           {id:121, nombre:"Salchichas cocidas", precio: "1.95",  lugar:"ahorramas", thumbnailUrl: "https://media1.cestaclick.es/6126-thickbox_default/el-pozo-salchichas-cocidas-big-pavo-3-paquetes-600g.jpg"},
           {id:122, nombre:"Vinagre de vino blanco", precio: "0.62",  lugar:"ahorramas", thumbnailUrl: "https://www.supermercadosmas.com/media/catalog/product/cache/1d58bce9e6622d548432b1c2f3e3c1ab/i/m/import_aecoc_images_08410086751024_8410086751024_c1n1.jpg"},
           {id:123, nombre:"Palo fregona / escoba universal gris", precio: "0.65 ",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202203/02/00128031400253____2__1200x1200.jpg"},
           {id:124, nombre:"Desatascador goma Zeppilin", precio: "1.90",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/4142PO3EbDL._AC_SL1000_.jpg"},
           {id:125, nombre:"Cepillo para lavar", precio: "1.20",  lugar:"ahorramas", thumbnailUrl: "https://s3-eu-west-1.amazonaws.com/carritus.com/images_pms/47/59315647.jpg"},
           {id:126, nombre:"Cubo de basura mediano 30L", precio: "8.50",  lugar:"ahorramas", thumbnailUrl: "https://prod-mercadona.imgix.net/images/bac585d1fe04658151ae56ac1c6f3216.jpg?fit=crop&h=600&w=600"},
           {id:127, nombre:"Barra de pan sin sal", precio: "0.65",  lugar:"ahorramas", thumbnailUrl: "http://www.oriotradicion.com/_data/products/3262.jpg"},
           {id:128, nombre:"Patatas fritas al punto de sal Lay's", precio: "1.65",  lugar:"ahorramas", thumbnailUrl: "https://yourspanishcorner.com/1736-home_default/lays-al-punto-de-sal-.jpg"},
           {id:129, nombre:"Jabon manos pastilla", precio: "2",  lugar:"ahorramas", thumbnailUrl: "https://cdn.deliberry.com/images/1055274/resize/1600/1600/3.jpg"},
           {id:130, nombre:"Agua mineral grande Bezoya", precio: "0.69",  lugar:"ahorramas", thumbnailUrl: "https://static.carrefour.es/hd_510x_/img_pim_food/033249_00_1.jpg"},
           {id:131, nombre:"Pipas girasol tostadas", precio: "1.15",  lugar:"ahorramas", thumbnailUrl: "https://es.openfoodfacts.org/images/products/842/169/185/1382/front_es.7.full.jpg"},
           {id:132, nombre:"Bebida energética Red Bull", precio: "1.10",  lugar:"mercadona", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201708/31/00118611300601____3__600x600.jpg"},
           {id:133, nombre:"Bebida energética Energy Ultra zero Monster", precio: "1.55",  lugar:"ahorramas", thumbnailUrl: "https://macenio.com/wp-content/uploads/2020/12/monster-energy-ultra-500-ml-zero-white.jpg"},
           {id:134, nombre:"Ketchup Heinz", precio: "2.85",  lugar:"ahorramas", thumbnailUrl: "https://static.carrefour.es/hd_510x_/img_pim_food/507178_00_1.jpg"},
           {id:135, nombre:"Salsa ligera Ligeresa", precio: "2.18",  lugar:"ahorramas", thumbnailUrl: "https://coviranlasmarinas.com/829-large_default/salsa-fina-ligeresa-225ml.jpg"},
           {id:136, nombre:"Mostaza dulce", precio: "0.89",  lugar:"ahorramas", thumbnailUrl: "https://m.media-amazon.com/images/I/71LzWgEIBxL._AC_SL1500_.jpg"},
           {id:137, nombre:"Pizza atún y bacón Hacendado", precio: "2.60",  lugar:"ahorramas", thumbnailUrl: "https://a0.soysuper.com/92356da6da730ed8e3e2b068db85ea48.1500.0.0.0.wmark.53c2dd99.jpg"},
           {id:138, nombre:"Pizza atún", precio: "2.95",  lugar:"ahorramas", thumbnailUrl: "https://a0.soysuper.com/cca2e5a11a64c394bbcdad37477e3a00.1500.0.0.0.wmark.24d7f466.jpg"},
           {id:139, nombre:"Atún claro en aceite de girasol ", precio: "3.45",  lugar:"ahorramas", thumbnailUrl: "https://static.carrefour.es/hd_510x_/img_pim_food/363071_00_1.jpg"},
           {id:140, nombre:"Dentífrico Triple Acción Colgate con flúor menta original", precio: "1.69",  lugar:"ahorramas", thumbnailUrl: "https://d1xmyf0y1wecx6.cloudfront.net/superwalmart/00750954600035L.jpg"},
           {id:141, nombre:"Champú Repara & Protege Pantene cabello débil y dañado", precio: "2.91",  lugar:"ahorramas", thumbnailUrl: "https://a2.soysuper.com/df8a5d4dd17f07e7b43e96ab7626382b.1500.0.0.0.wmark.06178e68.jpg"},
           {id:142, nombre:"Champú anticaspa Citrus Fresh H&S cabello graso", precio: "3.99",  lugar:"ahorramas", thumbnailUrl: "https://www.pacoperfumerias.com/content/images/thumbs/0104114_champu-anticaspa-citrus-fresh.jpeg"},
           {id:143, nombre:"Zumo de piña y uva", precio: "1",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202106/10/00118656701408____4__600x600.jpg"},
           {id:144, nombre:"Pañuelos de papel Extra Suaves Bosque Verde 2 capas", precio: "1.55",  lugar:"ahorramas", thumbnailUrl: "https://s3-eu-west-1.amazonaws.com/carritus.com/images_pms/10/15254310.png"},
           {id:145, nombre:"Pan de molde blanco familiar", precio: "0.90",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202011/16/00120654800349____18__600x600.jpg"},
           {id:146, nombre:"Pan de molde 100% integral", precio: "1.25",  lugar:"ahorramas", thumbnailUrl: "https://a0.soysuper.com/4d68912dea08dd9031582abf4d590752.1500.0.0.0.wmark.2e4d59a9.jpg"},
           {id:147, nombre:"Cheetos", precio: "0.69",  lugar:"ahorramas", thumbnailUrl: "https://chuchelandiajl.com/3607-big_default/bolsa-de-cheetos-sticks-18grs.jpg"},
           {id:148, nombre:"Huevos grandes L", precio: "2.10",  lugar:"ahorramas", thumbnailUrl: "https://s1.eestatic.com/2020/04/17/actualidad/actualidad_483212670_150474002_1706x1280.jpg"},
           {id:149, nombre:"Brocoli", precio: "1.13",  lugar:"ahorramas", thumbnailUrl: "https://www.thegourmetjournal.com/wp-content/uploads/2018/08/Brocoli.jpg"},
           {id:150, nombre:"Gelatina sabor fresa Hacendado Gellytina", precio: "0.85",  lugar:"ahorramas", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ge/gelatina-fresa-con-zumo-de-frutas-gellytina-de-mercadona-1649688725.jpg"},
           {id:151, nombre:"Miel de flores ", precio: "3.99",  lugar:"ahorramas", thumbnailUrl: "https://www.lacapell.com/29651/de-flor-en-flor-miel-flores-antigoteo-500g.jpg"},
           {id:152, nombre:"Bayeta suave multiusos", precio: "1.20",  lugar:"ahorramas", thumbnailUrl: "https://a1.soysuper.com/db685e83466cfde2b0654d3792eb1c9a.1500.0.0.0.wmark.a6b956cf.jpg"},
           {id:153, nombre:"Uva roja sin semillas", precio: "2.55",  lugar:"ahorramas", thumbnailUrl: "https://thumbs.dreamstime.com/b/uva-roja-sin-semillas-62394042.jpg"},
           {id:154, nombre:"Manzana Evelina", precio: "0.58",  lugar:"ahorramas", thumbnailUrl: "https://biosuedtirol.com/uploads/apples_sort/biosuedtirol_evelina_detail.jpg"},
           {id:155, nombre:"Cereales copos de maíz Corn Flakes Kellogg's", precio: "2.75",  lugar:"ahorramas", thumbnailUrl: "https://www.alcampo.es/media/hb9/h9b/9524443021342.jpg"},
           {id:156, nombre:"Cerveza especial Mahou", precio: "0.89",  lugar:"ahorramas", thumbnailUrl: "https://tsukurisoba.com/984-large_default/coca-cola-zero-330ml.jpg"},
           {id:157, nombre:"Papel de Aluminio", precio: "2.40",  lugar:"ahorramas", thumbnailUrl: "https://images-eu.ssl-images-amazon.com/images/I/711m5zwRf+L._AC_UL604_SR604,400_.jpg"},
           {id:158, nombre:"Film Transparente", precio: "3.19",  lugar:"ahorramas", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201707/18/00128023200067____2__600x600.jpg"},
           {id:159, nombre:"Maiz dulce", precio: "1.45",  lugar:"ahorramas", thumbnailUrl: "https://i0.wp.com/cazaclientes.es/wp-content/uploads/2021/02/maiz-lata-3.jpg?resize=1280%2C640&ssl=1"},
           {id:160, nombre:"Bolsa de basura Bosque Verde 30L cubo mediano", precio: "1.60",  lugar:"ahorramas", thumbnailUrl: "https://prod-mercadona.imgix.net/images/820a59412f87a1ab4d04d307c0ebdfd2.jpg?fit=crop&h=600&w=600"},
           
           {id:161,  nombre:"Arroz largo ", precio: "1.49",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ar/arroz-largo-1-cat-de-lidl0-1647677717_m.jpg"},
           {id:162,  nombre:"Harina", precio: "0.69",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ha/harina-de-trigo-3-de-lidl0-1647677367_m.jpg"},
           {id:163,  nombre:"Leche", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/le/leche-semi-desnat-de-lidl0-1647678779_m.jpg"},
           {id:164,  nombre:"Macarron", precio: "0.69",  lugar:"Lidl", thumbnailUrl: "https://offers.kd2.org/pics/de/31/de3139eee9e015a45bd337e2450e549781f987c2.jpg"},
           {id:165,  nombre:"Aguacate", precio: "0.59",  lugar:"Lidl", thumbnailUrl: "https://www.merca2.es/wp-content/uploads/2018/04/aguacate.jpg"},
           {id:166,  nombre:"Cebolla", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://www.supertambo.es/web/tambo/img/productos/2975/cebolla_b_1_27.jpg"},
           {id:167,  nombre:"Pimiento", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pimiento-tricolor-de-lidl-1652284006_m.jpg"},
           {id:168,  nombre:"Coca Cola", precio: "2",  lugar:"Lidl", thumbnailUrl: "https://sortiment.lidl.ch/media/catalog/product/cache/38c728e59b3a47950872534eff8a1e63/3/4/3481_EF_PSXX.jpg"},
           {id:169,  nombre:"Queso", precio: "0.59",  lugar:"Lidl", thumbnailUrl: "https://i.pinimg.com/originals/15/62/2d/15622dece74b35593de1558b86e828c5.jpg"},
           {id:170, nombre:"Yogurt", precio: "1",  lugar:"Lidl", thumbnailUrl: "https://s1.eestatic.com/2019/04/16/ciencia/nutricion/yogur-ocu_organizacion_de_consumidores_y_usuarios-seguridad_alimentaria_391472797_120594008_1706x960.jpg"},
           {id:171, nombre:"Chocolate", precio: "0.55",  lugar:"Lidl", thumbnailUrl: "https://m.media-amazon.com/images/I/51Q58TYqZZL._PIbundle-5,TopRight,0,0_SX500SY333SH20_.jpg"},
           {id:172, nombre:"Ajo", precio: "1.15",  lugar:"Lidl", thumbnailUrl: "https://a1.soysuper.com/5acbf6e383554ddebb063abce9bbd19c.1500.0.0.0.wmark.de9136ae.jpg"},
           {id:173, nombre:"Naranja", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://www.moncloa.com/wp-content/webpc-passthru.php?src=https://www.moncloa.com/wp-content/uploads/2022/04/Captura-de-pantalla-2022-04-18-a-las-18.49.39.jpg&nocache=1"},
           {id:174, nombre:"Pera", precio: "1.49",  lugar:"Lidl", thumbnailUrl: "https://pt.cat-ret.assets.lidl/catalog5media/pt/article/81580/gallery/zoom/81580_01.jpg"},
           {id:175, nombre:"Aceite girasol 1 Litro", precio: "2.50",  lugar:"Lidl", thumbnailUrl: "https://m.media-amazon.com/images/I/31BS6mb+K3L.jpg"},
           {id:176, nombre:"Patata", precio: "3.29",  lugar:"Lidl", thumbnailUrl: "https://www.lidl.es/media/product/0/0/0/7/2/2/1/patata-nueva-5-kg-zoom--2.jpg"},
           {id:177, nombre:"Azucar", precio: "1.29",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/az/azucar-fino-de-lidl0-1648789629_m.jpg"},
           {id:178, nombre:"Papel", precio: "6.49",  lugar:"Lidl", thumbnailUrl: "https://www.lidl.es/media/product/0/0/2/4/1/3/3/papel-higienico-doble-rollo-zoom.jpg"},
           {id:179, nombre:"Pimienta", precio: "0.75",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pimienta-negra-2-de-lidl0-1647677433_m.jpg"},
           {id:180, nombre:"Comino", precio: "0.75",  lugar:"Lidl", thumbnailUrl: "https://lh3.googleusercontent.com/-SkQa0mI9kHg/YW3FUaOt_sI/AAAAAAAADgg/u7txR2yBK9QMxB8Ll6ZuCZP1He3EqZHXwCMAFEAEYAw/s0/comino-molido-hacendado-mercadona-1.jpg"},
           {id:181, nombre:"Lechuga", precio: "0.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/le/lechuga-batavia-10-de-lidl0-1647692633_m.jpg"},
           {id:182, nombre:"Cola Cao", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/co/cola-cao-cacao-soluble-de-lidl0-1650433880_m.jpg"},
           {id:183, nombre:"Platano", precio: "1.49",  lugar:"Lidl", thumbnailUrl: "https://www.lidl.es/media/product/0/0/0/5/9/2/7/banana-zoom--7.jpg"},
           {id:184, nombre:"Zanahoria", precio: "0.49",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/za/zanahoria-3-de-lidl-1652284453_m.jpg"},
           {id:185, nombre:"Pollo", precio: "5,69",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/po/pollo-limpio-de-lidl0-1647678944_m.jpg"},
           {id:186, nombre:"Tomate", precio: "1.95",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/to/tomate-malla-1-5-kg-de-lidl0-1647683015_m.jpg"},
           {id:187, nombre:"Fanta", precio: "1.44",  lugar:"Lidl", thumbnailUrl: "https://www.bolinchelidrinkstore.com/2899-thickbox_default/fanta-naranja-botella-2l.jpg"},
           {id:188, nombre:"Nutela", precio: "2.79",  lugar:"Lidl", thumbnailUrl: "http://2.bp.blogspot.com/-OwCqIzcamNE/VCqwWRoklpI/AAAAAAAAZYI/W48nXxbTE6o/s1600/choco_nussa_avellanas_lidl.jpg"},
           {id:189, nombre:"Donut", precio: "0.19",  lugar:"Lidl", thumbnailUrl: "https://s3.eu-west-1.amazonaws.com/cdn.spydeals.nl/images/uploads/JtSIps2Wiluta7CubMSmnNnmRZTlXnwwmxfrO75D.jpeg"},
           {id:190, nombre:"Aceite de Oliva", precio: "2.95",  lugar:"Lidl", thumbnailUrl: "https://www.economiadigital.es/wp-content/uploads/2020/12/aceite-peores-3.jpeg"},
           {id:191, nombre:"Legumbre", precio: "0.78",  lugar:"Lidl", thumbnailUrl: "https://offers.kd2.org/pics/38/6b/386bfd654d9df74942740f05521aff2e3d5ea12f.jpg"},
           {id:192, nombre:"Aquarius", precio: "1.55",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/aq/aquarius-limn-zero-de-lidl0-1647687129_m.jpg"},
           {id:193, nombre:"Lejia", precio: "0.89",  lugar:"Lidl", thumbnailUrl: "https://www.lidl.es/media/product/0/0/4/1/1/5/4/lejia-amarilla-zoom.jpg"},
           {id:194, nombre:"Amoniaco", precio: "0.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/am/amoniaco-con-detergente-3-de-lidl0-1647681523_m.jpg"},
           {id:195, nombre:"Suavizante", precio: "1.69",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/fo/formil-suavizante-concentrado-nutrive-de-lidl0-1647687929_m.jpg"},
           {id:196, nombre:"Toallitas bebé frescas", precio: "0.89",  lugar:"Lidl", thumbnailUrl: "https://www.lidl.es/media/product/0/0/0/5/2/3/1/toallitas-para-bebe-zoom--4.jpg"},
           {id:197, nombre:"Quitagrasas KH-7", precio: "3.10",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/kh/kh-7-quitagrasas-liquido-de-lidl0-1647677222_m.jpg"},
           {id:198, nombre:"Escoba", precio: "1.15",  lugar:"Lidl", thumbnailUrl: "https://www.cleanupsolutions.es/wp-content/uploads/3987-1-768x768.jpg"},
           {id:199, nombre:"Fregona Microfibra", precio: "1.50",  lugar:"Lidl", thumbnailUrl: "https://www.cleanupsolutions.es/wp-content/uploads/3987-1-768x768.jpg"},
           {id:200, nombre:"Recogedor", precio: "1.25",  lugar:"Lidl", thumbnailUrl: "https://www.ferreteriaferrosol.com/24870-large_default/recogedor-c-mango-plegable-23690.jpg"},
           {id:201, nombre:"Salchichas cocidas", precio: "1.90",  lugar:"Lidl", thumbnailUrl: "https://www.supermercadosmas.com/media/catalog/product/cache/d91bc430dbe2e3d899436802c7aa5233/i/m/import_catalog_images_01_44_014432_v5.jpg"},
           {id:202, nombre:"Vinagre de vino blanco", precio: "0.62",  lugar:"Lidl", thumbnailUrl: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/22/00120902000338____4__1200x1200.jpg"},
           {id:203, nombre:"Palo fregona / escoba universal gris", precio: "0.69 ",  lugar:"Lidl", thumbnailUrl: "https://a2.soysuper.com/c7f0e276665e70ca1a9fad5a337657d9.1500.0.0.0.wmark.5e81af5b.jpg"},
           {id:204, nombre:"Desatascador goma Zeppilin", precio: "1.90",  lugar:"Lidl", thumbnailUrl: "https://www.missupermercados.com/images/d/desatascador-plastico-negro-zeppilin-u-pid-6392162.jpg"},
           {id:205, nombre:"Cepillo para lavar", precio: "1.20",  lugar:"Lidl", thumbnailUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_677320-MLA44016482112_112020-F.webp"},
           {id:206, nombre:"Cubo de basura mediano 30L", precio: "8.50",  lugar:"Lidl", thumbnailUrl: "https://limpialotodo.com/856-large_default/productos-de-limpieza-plastiken-cubo-basura-25-litros-con-pedal-cubos.jpg"},
           {id:207, nombre:"Barra de pan sin sal", precio: "0.34",  lugar:"Lidl", thumbnailUrl: "https://offers.kd2.org/pics/c0/e3/c0e3ecbb8cc0a9aebbb80139c630b674e89d9221.jpg"},
           {id:208, nombre:"Patatas fritas al punto de sal Lay's", precio: "1.75",  lugar:"Lidl", thumbnailUrl: "https://static.carrefour.es/hd_350x_/img_pim_food/593705_00_1.jpg"},
           {id:209, nombre:"Jabon manos pastilla", precio: "2.10",  lugar:"Lidl", thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7hjktsJs1BVoRDfZtQpgtvxuILqiNeb_kg&usqp=CAU"},
           {id:210, nombre:"Agua mineral grande Bezoya", precio: "0.69",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/be/bezoya-agua-mineral-natural-de-lidl0-1651643447_m.jpg"},
           {id:211, nombre:"Pipas girasol tostadas", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/gr/grefusa-pipas-con-sal-de-lidl0-1647692657_m.jpg"},
           {id:212, nombre:"Bebida energética Red Bull", precio: "1.49",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/re/red-bull-8-de-lidl0-1653910472_m.jpg"},
           {id:213, nombre:"Bebida energética Energy Ultra zero Monster", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/mo/monster-bebida-energetica-green-de-lidl0-1652849979_m.jpg"},
           {id:214, nombre:"Ketchup Heinz", precio: "0.79",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ka/kania-ketchup-de-lidl0-1647691619_m.jpg"},
           {id:215, nombre:"Salsa ligera Ligeresa", precio: "2.10",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/li/ligeresa-mayonesa-salsa-fina-de-lidl0-1650433895_m.jpg"},
           {id:216, nombre:"Mostaza dulce", precio: "0.80",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/mu/musa-mostaza-de-lidl0-1651643624_m.jpg"},
           {id:217, nombre:"Pizza atún y bacón Hacendado", precio: "2.29",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-fresca-atun-y-bacon-de-lidl-1647679357_m.jpg"},
           {id:218, nombre:"Pizza atún", precio: "3.69",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/dr/dr-oetker-pizza-de-atun-de-lidl0-1651643489_m.jpg"},
           {id:219, nombre:"Atún claro en aceite de girasol ", precio: "1.79",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ni/nixe-atn-claro-en-aceite-de-girasol-de-lidl0-1647689086_m.jpg"},
           {id:220, nombre:"Dentífrico Triple Acción Colgate con flúor menta original", precio: "1.95",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/co/colgate-dentifrico-total-original-de-lidl0-1654263272_m.jpg"},
           {id:221, nombre:"Champú Repara & Protege Pantene cabello débil y dañado", precio: "1.15",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ch/champu-provitamina-repara-y-protege-de-lidl0-1647682521_m.jpg"},
           {id:222, nombre:"Champú anticaspa Citrus Fresh H&S cabello graso", precio: "1.15",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ch/champao-anticaspa-manzana-de-lidl0-1647684452_m.jpg"},
           {id:223, nombre:"Zumo de piña y uva", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/zu/zumo-de-pina-manzana-uva-1-de-lidl0-1651643265_m.jpg"},
           {id:224, nombre:"Pañuelos de papel Extra Suaves Bosque Verde 2 capas", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/panuelos-bolsillo-4-capas-pocket-de-lidl0-1647679040_m.jpg"},
           {id:225, nombre:"Pan de molde blanco familiar", precio: "1.19",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/la/la-cestera-pan-de-molde-blanco-de-lidl0-1647691541_m.jpg"},
           {id:226, nombre:"Pan de molde 100% integral", precio: "1.19",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/la/la-cestera-pan-de-molde-integral-de-lidl0-1647692455_m.jpg"},
           {id:227, nombre:"Cheetos", precio: "1.09",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ch/cheetos-pelotazos-3-de-lidl0-1651813750_m.jpg"},
           {id:228, nombre:"Huevos grandes L", precio: "2.10",  lugar:"Lidl", thumbnailUrl: "https://s1.eestatic.com/2020/04/17/actualidad/actualidad_483212670_150474002_1706x1280.jpg"},
           {id:229, nombre:"Brocoli", precio: "1.19",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/br/brocoli-12-de-lidl-1651813770_m.jpg"},
           {id:230, nombre:"Gelatina sabor fresa Hacendado Gellytina", precio: "0.89",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ge/gelatina-de-fresa-7-de-lidl0-1647682497_m.jpg"},
           {id:231, nombre:"Miel de flores ", precio: "3.55",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/maribel-miel-de-flores-de-lidl0-1651813904_m.jpg"},
           {id:232, nombre:"Bayeta suave multiusos", precio: "1.59",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ba/bayeta-microfibra-multiusos-pequena-1-de-lidl0-1647680496_m.jpg"},
           {id:233, nombre:"Uva roja sin semillas", precio: "2.29",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/uv/uva-roja-500-g-de-lidl-1654059602_m.jpg"},
           {id:234, nombre:"Manzana Evelina", precio: "1.95",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/manzana-envy-en-bolsa-de-lidl-1654101049_m.jpg"},
           {id:235, nombre:"Cereales copos de maíz Corn Flakes Kellogg's", precio: "2.49",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ce/cereales-con-fruta-y-fibra-de-lidl-1651643545_m.jpg"},
           {id:236, nombre:"Cerveza especial Mahou", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/mahou-cerveza-clsica-de-lidl0-1647686996_m.jpg"},
           {id:237, nombre:"Papel de Aluminio", precio: "2.09",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pa/papel-aluminio-12u-30m-de-lidl0-1647680619_m.jpg"},
           {id:238, nombre:"Film Transparente", precio: "0.99",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ar/aromata-film-transparente-de-lidl0-1647690049_m.jpg"},
           {id:239, nombre:"Maiz dulce", precio: "1.19",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/ma/maiz-dulce-8-de-lidl0-1647679141_m.jpg"},
           {id:240, nombre:"Bolsa de basura Bosque Verde 30L cubo mediano", precio: "1.49",  lugar:"Lidl", thumbnailUrl: "https://d2ohdpvxj0yo9f.cloudfront.net/products/pu/purio-bolsas-de-basura-de-lidl0-1647688208_m.jpg"},
           
           {id:251,  nombre:"Arroz ", precio: "0.98",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h94/h9d/10759164133406.jpg"},
           {id:252,  nombre:"Harina", precio: "0.70",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h51/h5e/10492524527646.jpg"},
           {id:253,  nombre:"Leche", precio: "0.77",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/h27/h17/10674086281246.jpg"},
           {id:254,  nombre:"Macarron", precio: "0.83",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h20/h56/11062165569566.jpg"},
           {id:255,  nombre:"Aguacata", precio: "1.89",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h95/h8c/10360143413278.jpg"},
           {id:256,  nombre:"Cebolla", precio: "1.45",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h94/hb8/8846777090078.png"},
           {id:257,  nombre:"Pimiento", precio: "1.75",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h35/he7/8833624637470.png"},
           {id:258,  nombre:"Coca Cola", precio: "1.84",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/he8/h34/11107223076894.jpg"},
           {id:259,  nombre:"Queso", precio: "2.05",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h59/h9a/11100149317662.jpg"},
           {id:260, nombre:"Yogurt", precio: "1.79",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/h32/h64/9705617326110.jpg"},
           {id:261, nombre:"Chocolate", precio: "1.15",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/hcd/h61/11102804770846.jpg"},
           {id:262, nombre:"Ajo", precio: "1.99",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/hd4/hd6/10508958826526.jpg"},
           {id:263, nombre:"Nararnja", precio: "0.60",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h69/h37/10375381745694.jpg"},
           {id:264, nombre:"Pera", precio: "0,43",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h2e/h3e/10375385350174.jpg"},
           {id:265, nombre:"Aceite girasol 1 Litro", precio: "2.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hc1/hb1/10815694667806.jpg"},
           {id:266, nombre:"Patata", precio: "1.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h1f/ha9/10590740480030.jpg"},
           {id:267, nombre:"Azucar", precio: "0.99",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h60/hc7/10981162844190.jpg"},
           {id:268, nombre:"Papel", precio: "3.49",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h9e/ha2/10660651237406.jpg"},
           {id:269, nombre:"Pimienta", precio: "0.75",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h63/hf7/9076084998174.jpg"},
           {id:270, nombre:"Comino", precio: "0.75",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h28/h72/8848173826078.png"},
           {id:271, nombre:"Lechuga", precio: "0.99",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/hcb/h52/10972920217630.jpg"},
           {id:272, nombre:"Cola Cao", precio: "14.95",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/h54/hb9/11051773231134.jpg"},
           {id:273, nombre:"Platano", precio: "2.39",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/h29/hd3/10806535061534.jpg"},
           {id:274, nombre:"Zanahoria", precio: "0.75",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/hf4/h46/10721498005534.jpg"},
           {id:275, nombre:"Pollo", precio: "7.49",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/he8/he5/10594417639454.jpg"},
           {id:276, nombre:"Tomate", precio: "1.19",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/hb6/he8/11084783321118.jpg"},
           {id:277, nombre:"Fanta", precio: "1.69",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/h1a/h57/11107204399134.jpg"},
           {id:278, nombre:"Nutela", precio: "2.95",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/h46/h71/10941842882590.jpg"},
           {id:279, nombre:"Donut", precio: "2.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hdf/h5d/10674084970526.jpg"},
           {id:280, nombre:"Aceite de Oliva", precio: "5.75",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/h64/hb2/11037844078622.jpg"},
           {id:281, nombre:"Legumbre", precio: "0.79",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h46/h2a/10978731032606.jpg"},
           {id:282, nombre:"Aquarius", precio: "1.55",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/h0f/h73/11107190898718.jpg"},
           {id:283, nombre:"Lejia", precio: "0.80",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/hc6/ha3/9592241717278.jpg"},
           {id:284, nombre:"Amoniaco", precio: "0.72",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h5b/hb5/10097026629662.jpg"},
           {id:285, nombre:"Suavizante", precio: "2.39",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/hac/hf9/11056323428382.jpg"},
           {id:286, nombre:"Toallitas bebé frescas", precio: "1",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h15/hd9/8910935261214.jpg"},
           {id:287, nombre:"Quitagrasas KH-7", precio: "2.95",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h5d/h82/10872749686814.jpg"},
           {id:288, nombre:"Escoba", precio: "4.65",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/hab/hb8/11097403359262.jpg"},
           {id:289, nombre:"Fregona Microfibra", precio: "3.89",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h91/hef/8874648535070.png"},
           {id:290, nombre:"Recogedor", precio: "2.25",  lugar:"Dia", thumbnailUrl: "https://m.media-amazon.com/images/I/41uOYOjw1aL._AC_SL1024_.jpg"},
           {id:291, nombre:"Salchichas cocidas", precio: "1.95",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/h6a/h4d/10956965904414.jpg"},
           {id:292, nombre:"Vinagre de vino blanco", precio: "1.09",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h20/he1/10658684076062.jpg"},
           {id:293, nombre:"Palo fregona / escoba universal gris", precio: "0.69 ",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h6b/h8a/10844405891102.jpg"},
           {id:294, nombre:"Desatascador goma Zeppilin", precio: "1.90",  lugar:"Dia", thumbnailUrl: "https://m.media-amazon.com/images/I/61R73zwbwUL._AC_SL1500_.jpg"},
           {id:295, nombre:"Cepillo para lavar", precio: "1.20",  lugar:"Dia", thumbnailUrl: "https://cms.grupoferrepat.net/assets/img/productos/57006.jpg"},
           {id:296, nombre:"Cubo de basura mediano 30L", precio: "8.50",  lugar:"Dia", thumbnailUrl: "https://www.menajejuypal.es/2333-thickbox_default/cubo-de-basura-con-pedal-30l.jpg"},
           {id:297, nombre:"Barra de pan sin sal", precio: "0.65",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h03/h39/10624311230494.jpg"},
           {id:298, nombre:"Patatas fritas al punto de sal Lay's", precio: "1.89",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/hde/he0/10997770125342.jpg"},
           {id:299, nombre:"Jabon manos pastilla", precio: "2.49",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/ha2/hd3/10335744851998.jpg"},
           {id:300, nombre:"Agua mineral grande Bezoya", precio: "0.69",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h4a/he0/11033717014558.jpg"},
           {id:301, nombre:"Pipas girasol tostadas", precio: "1.59",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/hb3/h4b/10973016260638.jpg"},
           {id:302, nombre:"Bebida energética Red Bull", precio: "1.12",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h5e/h6f/10908046131230.jpg"},
           {id:303, nombre:"Bebida energética Energy Ultra zero Monster", precio: "1.59",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/h72/hb4/10803178176542.jpg"},
           {id:304, nombre:"Ketchup Heinz", precio: "2.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hf4/hb7/11107300802590.jpg"},
           {id:305, nombre:"Salsa ligera Ligeresa", precio: "1.15",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/hb3/h67/11074514190366.jpg"},
           {id:306, nombre:"Mostaza dulce", precio: "1.15",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/hf4/hab/11055076278302.jpg"},
           {id:307, nombre:"Pizza atún y bacón Hacendado", precio: "2.89",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/h59/hd5/10870043213854.jpg"},
           {id:308, nombre:"Pizza atún", precio: "2.67",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/hde/h61/9684110147614.jpg"},
           {id:309, nombre:"Atún claro en aceite de girasol ", precio: "3.25",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h2e/h89/10837615443998.jpg"},
           {id:310, nombre:"Dentífrico Triple Acción Colgate con flúor menta original", precio: "1.69",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/he5/h79/10996207452190.jpg"},
           {id:311, nombre:"Champú Repara & Protege Pantene cabello débil y dañado", precio: "3.19",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/h9e/h6a/11003254571038.jpg"},
           {id:312, nombre:"Champú anticaspa Citrus Fresh H&S cabello graso", precio: "5.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hb7/h5c/11023293775902.jpg"},
           {id:313, nombre:"Zumo de piña y uva", precio: "0.99",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hfd/ha7/11063563943966.jpg"},
           {id:314, nombre:"Pañuelos de papel Extra Suaves Bosque Verde 2 capas", precio: "1.29",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h2c/hd2/10659044098078.jpg"},
           {id:315, nombre:"Pan de molde blanco familiar", precio: "1.25",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/hec/h29/10567167148062.jpg"},
           {id:316, nombre:"Pan de molde 100% integral", precio: "1.79",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/hb5/h87/11060757168158.jpg"},
           {id:317, nombre:"Cheetos", precio: "0.50",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/hfe/h68/10943970639902.jpg"},
           {id:318, nombre:"Huevos grandes L", precio: "2.15",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/h6d/h4f/11074772828190.jpg"},
           {id:319, nombre:"Brocoli", precio: "1.25",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h87/h09/10362016989214.jpg"},
           {id:320, nombre:"Gelatina sabor fresa Hacendado Gellytina", precio: "0.89",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/hdc/hf3/10672772415518.jpg"},
           {id:321, nombre:"Miel de flores ", precio: "4.95",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/h59/h79/10895688171550.jpg"},
           {id:322, nombre:"Bayeta suave multiusos", precio: "1.15",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/h52/h1d/8957643948062.png"},
           {id:323, nombre:"Uva roja sin semillas", precio: "2.49",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/h1e/hc9/10141057122334.jpg"},
           {id:324, nombre:"Manzana Evelina", precio: "0.66",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/h5c/h38/10375383056414.jpg"},
           {id:325, nombre:"Cereales copos de maíz Corn Flakes Kellogg's", precio: "2.70",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/productimages/h67/hd0/11076215439390.jpg"},
           {id:326, nombre:"Cerveza especial Mahou", precio: "0.89",  lugar:"Dia", thumbnailUrl: "https://s3.dia.es/medias/productimages/h53/h76/10902573482014.jpg"},
           {id:327, nombre:"Papel de Aluminio", precio: "3.10",  lugar:"Dia", thumbnailUrl: "https://s0.dia.es/medias/h9e/ha2/9528932925470.jpg"},
           {id:328, nombre:"Film Transparente", precio: "1.29",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/hf8/h4c/10895688826910.jpg"},
           {id:329, nombre:"Maiz dulce", precio: "1.29",  lugar:"Dia", thumbnailUrl: "https://s2.dia.es/medias/productimages/h03/h17/10979977560094.jpg"},
           {id:330, nombre:"Bolsa de basura Bosque Verde 30L cubo mediano", precio: "1.85",  lugar:"Dia", thumbnailUrl: "https://s1.dia.es/medias/productimages/he2/h07/10979984113694.jpg"},
            


           ],   hipers=["General"];
           var lis=[];
           if (ls.getItem("dataTotal")!==null) {
            totalProduc=js.parse(ls.getItem("dataTotal"));
           }

           ls.setItem("dataTotal",JSON.stringify(totalProduc));
         
             if (ls.getItem("dataSup")!==null){
             hipers=js.parse(ls.getItem("dataSup"));
           }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function load_list(){
 if(ls.getItem("dataForm")!==null){
   formulario=js.parse(ls.getItem("dataForm"));
   for (let i=0;i<1;i++) {
          Object.values(formulario).forEach(producto => {
          templetcar.querySelector("#e").value = producto.id
          templetcar.querySelectorAll("td")[0].textContent = producto.nombre
          templetcar.querySelectorAll("td")[1].textContent = producto.cantidad
          templetcar.querySelector("#me").textContent = producto.lugar
          templetcar.querySelector(".btn-info").dataset.id = producto.id
          templetcar.querySelector(".btn-danger").dataset.id = producto.id
          templetcar.querySelector("#span").value = producto.cantidad * producto.precio;
          const clone = templetcar.cloneNode(true)
          fragment.appendChild(clone)
    })}
        items.appendChild(fragment)
        footer.innerHTML =""
  const ncantidad = Object.values(formulario).reduce((acc,{cantidad}) => acc + cantidad,0)
  const nprecio = Object.values(formulario).reduce((acc,{cantidad,precio}) => acc + cantidad * precio,0)
  templetfooter.querySelectorAll("td")[0].textContent = ncantidad
  templetfooter.querySelector("span").textContent = nprecio
  const clone = templetfooter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)  

ls.setItem("dataForm",js.stringify(formulario));

}}
 load_list();




function load_free(){
  if (ls.getItem("dataFree")!==null){
    prodFrec=js.parse(ls.getItem("dataFree"));
    resultado1.innerHTML="";

        for(let i=0;i<prodFrec.length;i++){ 
          let li = document.createElement("li")
          let h1 = document.createElement("p")
          let h2 = document.createElement("h6")
          let h3 = document.createElement("h4")
          let btn = document.createElement("button")
          let inpu = document.createElement("input")
          inpu.setAttribute("type","number")
          inpu.setAttribute("class","prec")
          btn.setAttribute("class","botonAnadirA-LaLista")
          h1.textContent = prodFrec[i].nombre;
          h2.textContent = prodFrec[i].precio;
          h3.textContent = prodFrec[i].lugar;
          btn.textContent = "Añadir"
          btn.dataset.id = prodFrec[i].id
          li.appendChild(h1);
          li.appendChild(h2);
          li.appendChild(h3);
          li.appendChild(btn);
          li.appendChild(inpu);
          resultado1.appendChild(li);

        }

  }
}
///////////////////////////////////////////registro de supermercados\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

load_free();
function addSuper(iSuper){
if (iSuper!==""){
  if (ls.getItem("dataSup")!==null){
     hipers=js.parse(ls.getItem("dataSup")); 
        if(hipers.indexOf(iSuper)==-1) {
          var numero1=0;
              for (let i = 0; i < hipers.length; i++) {
                numero1++
              }
          var newSuper=iSuper;
          hipers.push(newSuper);
          ls.setItem("dataSup",js.stringify(hipers));
          let cuadro = document.querySelector(".cuadroo");
            for(i=0;i<1;i++){
              let img = document.createElement("img");
              let botondelet = document.createElement("button");
              let caja2 = document.createElement("div");
              let caja3=document.createElement("div");
              caja2.setAttribute("class","caja2");
              caja3.setAttribute("id",iSuper)
              caja3.setAttribute("class","caja3");
              botondelet.setAttribute("class","borrarmercado" );
              botondelet.textContent="x";
              img.setAttribute("src","tienda.png");
              let opcion = document.createElement("option");
              let caja = document.createElement("div");
              let p = document.createElement("p");
                        
              caja.setAttribute("class","listaDeSupermercados"); 
              p.innerHTML = document.querySelector("#input-configuracionDeSupermercado").value;
              caja2.appendChild(img);
              caja2.appendChild(p);
              caja.appendChild(caja2);
              caja.appendChild(botondelet);
              cuadro.appendChild(caja);
              cuadro.appendChild(caja3);
              opcion.textContent = document.querySelector("#input-configuracionDeSupermercado").value;
              mercadosNombre.appendChild(opcion);
              totalPro();
      } 
     }else{
       // if (hipers.indexOf(iSuper)=-1) {}
        console.log("registrado");
        }
    }  
//tengo que buscar una condicion que me lea el Ls y me indique que ya tengo el supermercado. 
 /* else{
    ls.setItem("dataSup","")
    console.log("creo el primer element en el ls")
    var newSuper=iSuper;
    hipers.push(newSuper);
        var num=0;
        let cuadro = document.querySelector(".cuadroo");
        for(i=0;i<1;i++){
        let img = document.createElement("img");
        let botondelet = document.createElement("button");
        let caja2 = document.createElement("div");
        let caja3=document.createElement("div");
        caja2.setAttribute("class","caja2");
        caja3.setAttribute("id",hipers[0])
        caja3.setAttribute("class","caja3");
        botondelet.setAttribute("class","borrarmercado" );
        botondelet.textContent="x";
        img.setAttribute("src","tienda.png");
        let opcion = document.createElement("option");
        let caja = document.createElement("div");
        let p = document.createElement("p");
          
        caja.setAttribute("class","listaDeSupermercados");
        p.innerHTML = document.querySelector("#input-configuracionDeSupermercado").value;

        caja2.appendChild(img);
        caja2.appendChild(p);
        caja.appendChild(caja2);
        caja.appendChild(botondelet);
        cuadro.appendChild(caja);
        cuadro.appendChild(caja3);
        ///////////////////////////////////////////////////////////////////////////////////////
        let momet=hipers[0]
        console.log(momet);
        var divs=document.getElementsById(moem);
       
      console.log(divs+" agregando supermercado");    
        for (var i = 0; i < totalProduc.length; i++) {
             if (totalProduc[i].lugar.toLowerCase().includes(iSuper) == true){
                 console.log(iSuper);
                  // let ul = document.createElement("ul");
                  // let li = document.createElement("li");
                  // let imagen = document.createElement("img")
                  // let pm1 = document.createElement("p");
                  // let pm2 = document.createElement("h3";
                  // let pm3 =document.createElement("h4");
                  // let euro = document.createElement("h5");
                  // let boton = document.createElement("button")  
                }
             }   
        opcion.textContent = document.querySelector("#input-configuracionDeSupermercado").value;
        mercadosNombre.appendChild(opcion);
        ls.setItem("dataSup",js.stringify(hipers));
    }
  }*/
}else{
    alert("Introducir Un SuperMercado o Tienda");
  }
}


//tengo que buscar una condicion que me lea el Ls y me indique que ya tengo el supermercado.  
document.querySelector("#boto-guargarSupermercado").addEventListener('click',saveSuper);
  function saveSuper(){ 
    var sSuper=document.querySelector("#input-configuracionDeSupermercado").value;
    addSuper(sSuper);
  } 

////////////////////////////////////dibuja loque haya en el local store de los super mercados\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function load_hipers(){
 // js.parce(ls.getItem("dataSup"));
  for (var i = 0; i < hipers.length; i++) {
    //console.log("cargar los supermercados y crearlos en pantalla "+hipers[i])
    let cuadro = document.querySelector(".cuadroo");
        for(j=0;j<1;j++){
        let img = document.createElement("img");
        let botondelet = document.createElement("button");
        let caja2 = document.createElement("div");
        let caja3=document.createElement("div");
        caja2.setAttribute("class","caja2");
        caja3.setAttribute("id",hipers[i])
        caja3.setAttribute("class","caja3");
        botondelet.setAttribute("class","borrarmercado" );
        botondelet.textContent="x";
        img.setAttribute("src","tienda.png");
        let opcion = document.createElement("option");
        let caja = document.createElement("div");
        let p = document.createElement("p"); 
        ///////////////////lista de los productos/////////////////////////////////
        caja.setAttribute("class","listaDeSupermercados");
        p.innerHTML = hipers[i];

        caja2.appendChild(img);
        caja2.appendChild(p);
        caja.appendChild(caja2);
        caja.appendChild(botondelet);
        cuadro.appendChild(caja);
        cuadro.appendChild(caja3);
        opcion.textContent = hipers[i];
        mercadosNombre.appendChild(opcion);
        ls.setItem("dataSup",js.stringify(hipers)); 
     }
  }

}
load_hipers(hipers); 
////////////////////////////////////////////no olvidar el orden ; me pinta los productos como tal en la parte izquierda\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 function totalPro(){
          console.log(hipers);
       // console.log(ls.getItem("dataTotal"));
     if (ls.getItem("dataTotal")!==null) {
        if (hipers.length!==0) {
          var divs=document.getElementsByClassName("caja3");
         }
         console.log(divs[0].id)
         // console.log(hipers);
     for (var j = 0; j < hipers.length; j++) {  
     // console.log(divs[j]);    
        for (var i = 0; i < totalProduc.length; i++) {
               if (divs[j].id.includes("General")) {
                    var ul = document.createElement("ul");
                    let li = document.createElement("li");
                    let imagen = document.createElement("img")
                    let pm1 = document.createElement("p")
                    let pm2 = document.createElement("h3")
                    let pm3 =document.createElement("h6")
                    let euro = document.createElement("h5")
                    let boton = document.createElement("button")
                    boton.classList.add("button_agregar")
                    imagen.setAttribute("src",totalProduc[i].thumbnailUrl)
                    pm1.textContent = totalProduc[i].nombre
                    pm2.textContent = totalProduc[i].precio
                    pm3.textContent = totalProduc[i].lugar
                    euro.textContent = "$"
                    boton.textContent = "Añadir"
                    boton.dataset.id = totalProduc[i].id
                    li.classList.add("hipers1")
                    ul.classList.add("producs")
                    li.appendChild(imagen)
                    li.appendChild(pm1)
                    li.appendChild(pm2)
                    li.appendChild(pm3)
                    li.appendChild(euro)
                    li.appendChild(boton);  
                    ul.appendChild(li);
                    divs[j].appendChild(ul);
               }
             if (totalProduc[i].lugar.toLowerCase().includes(hipers[j]) == true){
                  console.log(hipers[j]);
                   var ul = document.createElement("ul");
                    let li = document.createElement("li");
                    let imagen = document.createElement("img")
                    let pm1 = document.createElement("p")
                    let pm2 = document.createElement("h3")
                    let pm3 =document.createElement("h4")
                    let euro = document.createElement("h5")
                    let boton = document.createElement("button")
                    boton.classList.add("button_agregar")
                    imagen.setAttribute("src",totalProduc[i].thumbnailUrl)
                    pm1.textContent = totalProduc[i].nombre
                    pm2.textContent = totalProduc[i].precio
                    pm3.textContent = totalProduc[i].lugar
                    euro.textContent = "$"
                    boton.textContent = "Añadir"
                    boton.dataset.id = totalProduc[i].id
                    li.classList.add("hipers1")
                    ul.classList.add("producs")
                    li.appendChild(imagen)
                    li.appendChild(pm1)
                    li.appendChild(pm2)
                    li.appendChild(pm3)
                    li.appendChild(euro)
                    li.appendChild(boton);  
                    ul.appendChild(li);
                    divs[j].appendChild(ul);
                }
             } 
               
           }
           
        }
      }
        totalPro();
///////////////////////////////////////////////////////////////////////////////////////////////////
    
//////////////////////////////////////filtro de busqueda y lo pinta///////////////////////////////////////////
    const filtrar = () => { 
          contenedor.innerHTML=""
        const texto = buscador.value.toLowerCase();
        if(buscador.value !== ""){   
            function filtro(arraydeproductos,posicion,fondodelnombredesupercado){  
                let cont = 0;
                for(let array of arraydeproductos){
                     let producto = array.nombre.toLowerCase();
            //validar que solo me muestre resultado cuando hayya escrito toda la plabra
                     if((producto.indexOf(texto) > -1 )&& (cont < 3)){
                         let div = document.createElement("div")
                         let ul = document.createElement("ul")
                         let li = document.createElement("li");
                         let imagen = document.createElement("img")
                         let pm1 = document.createElement("p")
                         let pm2 = document.createElement("h3")
                         let pm3 =document.createElement("h4")
                         let euro = document.createElement("h5")
                         let boton = document.createElement("button")
                         boton.setAttribute("class","botonAnadirA-LaLista")
                         imagen.setAttribute("src",array.thumbnailUrl)
                         pm1.textContent = array.nombre
                         pm2.textContent = array.precio
                         pm3.textContent = array.lugar
                         euro.textContent = "$"
                         boton.textContent = "Añadir"
                         boton.dataset.id = array.id
                         li.classList.add(fondodelnombredesupercado)
                         li.appendChild(imagen)
                         li.appendChild(pm1)
                         li.appendChild(pm2)
                         li.appendChild(pm3)
                         li.appendChild(euro)
                         li.appendChild(boton);  
                         ul.appendChild(li)
                         div.appendChild(ul)
                         posicion.appendChild(div);
                         fragment.appendChild(div)
                         cont++ 
                         fragment.appendChild(div)
                    }  
                }       posicion.appendChild(fragment)
            } 
            filtro(totalProduc,contenedor,"fondon");
            filtro(prodFrec,contenedor,"fondon");
        }
    } 
buscador.addEventListener("keyup", filtrar)////buscador
///////////////////////////boton azul donde se registra  y se guardan los productos/////////////////////////////  
                        //QUE NO SE PINTEN TODOS LOS PRODUCTOS SOLO LOS ULTIMOS AGREGADOS
  //var prodFrec=[];

    function frecuentes(){
        resultado1.innerHTML=""
        for(let productosf of prodFrec){
          console.log("hola");
          let li = document.createElement("li")
          let h1 = document.createElement("p")
          h1.setAttribute("class","nombre1")
          let h2 = document.createElement("h3")
          let h3 = document.createElement("h4")
          let btn = document.createElement("button")
          let inpu = document.createElement("input")
          inpu.setAttribute("type","number")
          inpu.setAttribute("class","prec")
          btn.setAttribute("class","botonAnadirA-LaLista2")
          h1.textContent = productosf.nombre;
          h2.textContent = productosf.precio;
          h3.textContent = productosf.lugar;
          btn.textContent = "Añadirrr"
          btn.dataset.id = productosf.id
          li.appendChild(h1);
          li.appendChild(h2);
          li.appendChild(h3);
          li.appendChild(btn);
          li.appendChild(inpu);
          resultado1.appendChild(li);

        }
      
    }  
    
    const addFrecuentesagregaralalista = e => {
      if(e.target.classList.contains("botonAnadirA-LaLista2")){
             console.log(e.target.classList.contains("botonAnadirA-LaLista2"))
             setfrecuentes(e.target.parentElement)
      }
   }
   setfrecuentes = objetofrecuentes => {
       console.log(objetofrecuentes)
       const productosfrecuentes ={
        id : objetofrecuentes.querySelector(".botonAnadirA-LaLista2").dataset.id,
        nombre: objetofrecuentes.querySelector(".nombre1").textContent,
        lugar:  objetofrecuentes.querySelector("h4").textContent,
        precio: objetofrecuentes.querySelector(".prec").value,
        cantidad:1
       }
       //console.log(productosfrecuentes)
       console.log(formulario)
       
       if(formulario.hasOwnProperty(productosfrecuentes.id)){
        productosfrecuentes.cantidad = formulario[productosfrecuentes.id].cantidad //lo sumo
    }

    formulario[productosfrecuentes.id] = {...productosfrecuentes}
    pintarformulario() 


   }
       

//////////////////////////////////añadir productos///////////////////////////////////////////

function addProduct(iprod,ilugar){
   let numero=0;
  //  totalProduc = js.parse(ls.getItem("dataTotal"))
   totalProduc=js.parse(ls.getItem("dataTotal"));
   for(i=0;i<totalProduc.length;i++){
            numero++
      }
        var newProduct={ 
          thumbnailUrl: "logo.png",
          id: numero,
          nombre:iprod,
          lugar:ilugar,
          cantidad: 1
        };

if (iprod!==""){
  var array=[];
//recoge todas los indices donde conincide el nombre 
  for (var i = 0; i < totalProduc.length; i++) {
          if (totalProduc[i].nombre.toLowerCase().includes(iprod) == true) { 
                array.push(i);
       }
   }

   //comprueba de los objetos donde el nombre existe
   if (array.length!==0) {
    var ex=false;
    //cmoprobamos que existe el establecimiento
   for (var i = 0; i < array.length; i++) {
     if (totalProduc[array[i]].lugar.toLowerCase().includes(ilugar) == true){
        ex=true;
        i=array.length;
     }
    }
    //aqui comprobamos que no existe en ningun establecimiento 
    if(ex==false){
      if (newProduct.lugar.toLowerCase().includes("general")!==true) {
      prodFrec.push(newProduct); 
    }else{
        alert('No se puede agregar '+ newProduct.lugar +' a la lista "General"')
      }
      totalProduc.push(newProduct);
      ls.setItem("dataFree",js.stringify(prodFrec));
      ls.setItem("dataTotal",js.stringify(totalProduc));
      totalPro();
    }
    else{
           alert("Producto Registrado")
         }
    //no existe ningun objeto con ese nombre se procede a crear el objeto
  }else{
    if (newProduct.lugar.toLowerCase().includes("general")!==true) {
    prodFrec.push(newProduct);
      }else{
        alert('No se puede agregar '+ newProduct.nombre +' a la lista "General"')
      }
    totalProduc.push(newProduct);
    ls.setItem("dataFree",js.stringify(prodFrec));
    ls.setItem("dataTotal",js.stringify(totalProduc));
    totalPro();
  }
    }else{
        alert("Ingresa un Producto");
      }  
         } 

document.querySelector("#button_Register").addEventListener("click",saveProd); 
document.querySelector("#button_Register").addEventListener("click",frecuentes);
   function saveProd(){          
     var sprod=document.querySelector('#productoo').value,
         // sprec=document.querySelector('#precio').value,
     smerca=document.querySelector('#mercado').value;
        // console.log(sprod,sprec,smerca);
        // addProduct(sprod,sprec,smerca);
    console.log(sprod,smerca);
    addProduct(sprod,smerca);
  } 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        //creo una funcion que detecte si el li lista contiene un boton con la clase (btotn1)
/ me sale error por una parte 460/
////////////////////////////////pintar en el formulario//////////////////////////////////////////////////////////////////
                const addagregaralalista = e =>{
                    if(e.target.classList.contains("botonAnadirA-LaLista")){
                            setformulario(e.target.parentElement) //creo una funcion que detecte los valore del LI lista
                    }
                    e.stopPropagation()
                }

                //creo una funcion con parametro OBJETO. esta funcion lo que hace es recolectar los valores de p , boton1 y h3 y los guarda en una variable tipo objeto
                const setformulario = objeto =>{ 
                   const producto = {
                       id: objeto.querySelector(".botonAnadirA-LaLista").dataset.id,
                       nombre : objeto.querySelector("p").textContent,
                       precio: objeto.querySelector("h3").textContent,
                       lugar : objeto.querySelector("h4").textContent,
                       cantidad: 1
                    };
                    console.log(Object.values(producto)+" setformulario");

                    if(formulario.hasOwnProperty(producto.id)){
                        producto.cantidad = formulario[producto.id].cantidad + 1 //lo sumo
                    }
                    formulario[producto.id] = {...producto}
                   pintarformulario() 
                }



                function lista(){
                    var valor = document.querySelector("#nuevoproducto").value;
                    console.log(valor);
                    document.querySelector("#p2").textContent = valor ;
                }
///////////////////lista de compras cuando se pinta
          const pintarformulario = () =>{
                    // console.log(nuevop)
                    console.log(formulario)

                    items.innerHTML =""
                    //recorro las variables y le las agrego a cada una de las lfilas dela tabla
                    if (ls.getItem("dataForm")!==null) {
                       Object.values(formulario).forEach(producto => {
                          templetcar.querySelector("#e").value = producto.id
                          templetcar.querySelectorAll("td")[0].textContent = producto.nombre
                          templetcar.querySelectorAll("td")[1].textContent = producto.cantidad
                          templetcar.querySelector("#me").textContent = producto.lugar
                          templetcar.querySelector(".btn-info").dataset.id = producto.id
                          templetcar.querySelector(".btn-danger").dataset.id = producto.id
                          templetcar.querySelector("#span").value = producto.cantidad * producto.precio;
                          const clone = templetcar.cloneNode(true)
                          fragment.appendChild(clone)
                    })
                        items.appendChild(fragment)
                        pintanfooter()
                        ls.setItem("dataForm",js.stringify(formulario));
                    }else{
                      console.log("el primer registro")
                    Object.values(formulario).forEach(producto => {
                          templetcar.querySelector("#e").value = producto.id
                          templetcar.querySelectorAll("td")[0].textContent = producto.nombre
                          templetcar.querySelectorAll("td")[1].textContent = producto.cantidad
                          templetcar.querySelector("#me").textContent = producto.lugar
                          templetcar.querySelector(".btn-info").dataset.id = producto.id
                          templetcar.querySelector(".btn-danger").dataset.id = producto.id
                          templetcar.querySelector("#span").value = producto.cantidad * producto.precio;
                          const clone = templetcar.cloneNode(true)
                          fragment.appendChild(clone)
                    })
                      items.appendChild(fragment)
                      pintanfooter()
                      ls.setItem("dataForm",js.stringify(formulario));
                  }
                }
/////////////////////////////////////////barra total\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            const pintanfooter = () => {
                 footer.innerHTML =""
                 const ncantidad = Object.values(formulario).reduce((acc,{cantidad}) => acc + cantidad,0)
                 const nprecio = Object.values(formulario).reduce((acc,{cantidad,precio}) => acc + cantidad * precio,0)
                 templetfooter.querySelectorAll("td")[0].textContent = ncantidad
                 templetfooter.querySelector("span").textContent = nprecio
                 const clone = templetfooter.cloneNode(true)
                 fragment.appendChild(clone)
                 footer.appendChild(fragment)   
            }
    
      const btnSumar = e => {
          // console.log(e.target)
          if(e.target.classList.contains("btn-info")){
               const producto = formulario[e.target.dataset.id];
               producto.cantidad =  formulario[e.target.dataset.id].cantidad + 1;
               formulario[e.target.dataset.id] = {...producto};
               pintarformulario();
         }
          if(e.target.classList.contains("btn-danger")){
              const producto = formulario[e.target.dataset.id]
              producto.cantidad =  formulario[e.target.dataset.id].cantidad - 1
                 if(producto.cantidad === 0){
                    //  delete formulario[e.target.dataset.id]
                    producto.cantidad = 1
                 }
                 pintarformulario()
             }
             e.stopPropagation()
         } 


         /////////////////////////////// que use el local store para pintar los ultimos productos\\\\\\\\\\\\\\\\\\\\\\\
         
// function load_list(){
//     if (ls.getItem("dataForm")!==null) {
//       console.log("entro localStorage")
//       lis=js.parse(ls.getItem("dataForm"));
//       for (let i = 0; i < 1; i++) {
//          Object.values(lis[i]).forEach(producto => {
//                           templetcar.querySelector("#e").value = producto.id
//                           templetcar.querySelectorAll("td")[0].textContent = producto.nombre
//                           templetcar.querySelectorAll("td")[1].textContent = producto.cantidad
//                           templetcar.querySelector("#me").textContent = producto.lugar
//                           templetcar.querySelector(".btn-info").dataset.id = producto.id
//                           templetcar.querySelector(".btn-danger").dataset.id = producto.id
//                           templetcar.querySelector("#span").value = producto.cantidad * producto.precio;
//                           const clone = templetcar.cloneNode(true)
//                           fragment.appendChild(clone)
//                     })
//        const ncantidad = Object.values(lis[i]).reduce((acc,{cantidad}) => acc + cantidad,0)
//                  const nprecio = Object.values(lis[i]).reduce((acc,{cantidad,precio}) => acc + cantidad * precio,0)
//                   templetfooter.querySelectorAll("td")[0].textContent = ncantidad
//                   templetfooter.querySelector("span").textContent = nprecio
//                   const clone = templetfooter.cloneNode(true)
//                   fragment.appendChild(clone)          
                    
//       } 
//       items.appendChild(fragment);
//       footer.appendChild(fragment)   
//     }

// }
// load_list();
