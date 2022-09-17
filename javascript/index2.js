
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const generoEleccion=document.getElementById('generos');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		getPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		getPeliculas();
	}
});

 export const getComedy = async() => {
	

	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=35&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
			
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&language=es-ES&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
						<p class="titulo">${pelicula.release_date}</p>
						<div class="overview">
						<p>${pelicula.overview}</p>
						</div>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}
export const getAccion = async() => {
	

	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=28&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
			

		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getAventura = async() => {
	

	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=12&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;
			

		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getCrimen = async() => {
	

	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=80&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	
}
export const getDocumental = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&page=1&with_genres=99&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getAnimacion = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=16&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getDrama = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=18&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getFamilia = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=10751&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getFantasia = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=14&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getHistoria = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=36&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getTerror = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=27&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getMusica = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=10402&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getMisterio = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=9648&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getRomance = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=10749&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getFiccion = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=878&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getPeliculaTv = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=10770&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getSuspense = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=53&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getBelica = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=10752&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}
export const getWestern = async() => {
	
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&with_genres=37&language=es-ES`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
			document.getElementById('contenedor').innerHTML = peliculas;

		
		} else if(respuesta.status === 401){
			console.log('Error');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}
	

}



export function redireccion(){
    location.href="index2.html"
}

export const getGeneros = async() => {
	try {
		const respuesta = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e8e71ccc45f226e0c6d7588ef51d0ef5&language=es-ES');
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const genre = await respuesta.json();
			
			let genero = [];
			genre.genres.forEach(gene => {
				genero += `
                <option id="opcion">${gene.name}</option>
					
				`;
				
			});

			document.getElementById('generos').innerHTML =genero;
            

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}
getPeliculas();
getGeneros();

generoEleccion.addEventListener('change',()=>{
	if (generoEleccion.value=='Comedia') {
		getComedy();
	}else if(generoEleccion.value=='Acción'){
		getAccion();
	}else if(generoEleccion.value=='Aventura'){
		getAventura()
	}else if(generoEleccion.value=='Animación'){
		getAnimacion();
	}else if(generoEleccion.value=='Crimen'){
		getCrimen()
	}else if(generoEleccion.value=='Documental'){
		getDocumental()
	}else if(generoEleccion.value=='Drama'){
		getDrama();
	}else if(generoEleccion.value=='Familia'){
		getFamilia();
	}else if(generoEleccion.value=='Fantasía'){
		getFantasia();
	}else if(generoEleccion.value=='Historia'){
		getHistoria();
	}else if(generoEleccion.value=='Terror'){
		getTerror();
	}else if(generoEleccion.value=='Música'){
		getMusica();
	}else if(generoEleccion.value=='Misterio'){
		getMisterio();
	}else if(generoEleccion.value=='Romance'){
		getRomance();
	}else if(generoEleccion.value=='Ciencia ficción'){
		getFiccion();
	}else if(generoEleccion.value=='Película de TV'){
		getPeliculaTv()
	}else if(generoEleccion.value=='Suspense'){
		getSuspense();
	}else if(generoEleccion.value=='Bélica'){
		getBelica();
	}else if(generoEleccion.value=='Western'){
		getWestern();
	}
})

