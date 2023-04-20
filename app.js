document.getElementById('boton').addEventListener('click',()=>{

    Swal.fire({
        html:`<p>Esperaaaaaa, no olvides que te amo </p><br>
        <p>Ahora si escuchala :) <p/>
        <a href="https://www.youtube.com/watch?v=Af-0_xgJlA4" target="_blank" rel="noopener noreferrer"><button class="mi_boton" id="boton"><i class="bi bi-music-note-beamed"></i><i class="bi bi-music-note"></i><i class="bi bi-music-note"></i></button></a>
        `,
        closeOnConfirm: false,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton:true,
        backdrop: `rgba(0,0,123,0.8)`
      
    })

})