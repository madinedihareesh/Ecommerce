let cartbtn=document.getElementById('cartValue').innerHTML+=0
          let productContainer=document.getElementById('product-container');
            async function fetchdata(){
                 try{
                     let response= await fetch('https://fakestoreapi.com/products')
                     let data=await response.json();
                     productContainer.innerHTML='';
                     data.forEach(col=>{
                        let card=`<div class="col-md-4 mb-4" >
                        <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length>10? col.title.slice(0,10)+'...':col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$'+col.price}</p>
                        <hr>
                        <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                        </div>`
                        productContainer.innerHTML+=card;
                         });
                 }catch{
                     throw Error('Error fetching products');
                 }
                 
            }
            document.getElementById('mens-clothing').addEventListener('click',async()=>{
                try{
                     let response= await fetch('https://fakestoreapi.com/products')
                     let data=await response.json();
                     let menData=data.filter(data=>data.category=="men's clothing");
                     productContainer.innerHTML='';
                     menData.forEach(col=>{
                        let card=`<div class="col-md-4 mb-4" >
                        <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length>10? col.title.slice(0,10)+'...':col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$'+col.price}</p>
                        <hr>
                        <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                        </div>`
                        productContainer.innerHTML+=card;
                     });

                }catch{
                     throw Error('Error fetching products');
                }
            });
            document.getElementById('womens-clothing').addEventListener('click',async()=>{
                try{
                     let response= await fetch('https://fakestoreapi.com/products')
                     let data=await response.json();
                     let womenData=data.filter(data=>data.category=="women's clothing");
                     productContainer.innerHTML='';
                     womenData.forEach(col=>{
                        let card=`<div class="col-md-4 mb-4" >
                        <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length>10? col.title.slice(0,10)+'...':col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$'+col.price}</p>
                        <hr>
                        <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                        </div>`
                        productContainer.innerHTML+=card;
                     });

                }catch{
                     throw Error('Error fetching products');
                }
            });
            document.getElementById('jewelery').addEventListener('click',async()=>{
                try{
                     let response= await fetch('https://fakestoreapi.com/products')
                     let data=await response.json();
                     let jeweleryData=data.filter(data=>data.category=="jewelery");
                     productContainer.innerHTML='';
                     jeweleryData.forEach(col=>{
                        let card=`<div class="col-md-4 mb-4" >
                        <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length>10? col.title.slice(0,10)+'...':col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$'+col.price}</p>
                        <hr>
                        <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                        </div>`
                        productContainer.innerHTML+=card;
                     });

                }catch{
                     throw Error('Error fetching products');
                }
            });
            document.getElementById('Electronics').addEventListener('click',async()=>{
                try{
                     let response= await fetch('https://fakestoreapi.com/products')
                     let data=await response.json();
                     let electronicsData=data.filter(data=>data.category=="electronics");
                     productContainer.innerHTML='';
                     electronicsData.forEach(col=>{
                        let card=`<div class="col-md-4 mb-4" >
                        <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length>10? col.title.slice(0,10)+'...':col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$'+col.price}</p>
                        <hr>
                        <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                        </div>`
                        productContainer.innerHTML+=card;
                     });

                }catch{
                     throw Error('Error fetching products');
                }
            });