

let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		getSeries();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		getSeries();
	}
});

export const getSeries = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&language=es-ES&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let series = '';
			datos.results.forEach(serie => {
				series += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
						<h3 class="titulo">${serie.name}</h3>
						<p class="titulo">${serie.first_air_date}</p>
						<div class="overview">
						<p>${serie.overview}</p>
						</div>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = series;

		} else if(respuesta.status === 401){
			console.log('Error en la sintaxis');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error que no hemos identificado');
		}

	} catch(error){
		console.log(error);
	}

}


getSeries();