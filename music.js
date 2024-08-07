const music=document.querySelector('#music');
const musicAlbum=document.querySelector('.music-album');

musicAlbum.addEventListener('mouseover',()=>{
	const playPromise=music.play();

	if(playPromise){
		playPromise.catch(()=>{
			playPromise()
		})
	}
})
musicAlbum.addEventListener('mouseout',()=>{
	const loadPromise=music.play();

	if(loadPromise){
		loadPromise.catch(()=>{
			playPromise()
		})
	}
})