window.addEventListener('load', async()=>{
  const data = await fetch('data.json')
  const json = await data.json()
  
  const htmlServicios = document.querySelector('#servicios .fila')
  json.servicios.forEach(item => {
    htmlServicios.insertAdjacentHTML('beforeend',`
      <div class="col">
          <i class="${item.icono}"></i>
          <h2>${item.titulo}</h2>
          <p>${item.descripcion}</p>
      </div>
    `)       
  });

  const htmlProductos = document.querySelector('#productos .fila')
  json.productos.forEach(item => {
    htmlProductos.insertAdjacentHTML('beforeend',`
      <div class="col">
        <p class="nombre">${item.nombre}</p>
        <img src="${item.imagen}" alt="">
        <h3>$${item.precio}</h3>
      </div>
    `)       
  });
})

