function mediaFactory(data, photographerId) {
    const { title, image, video, likes, date, id, price } = data ;
    const isVideo = video != null;

	function getMediaCardDOM() {
        // création de la galerie dans la page du photographe
		const article = document.createElement( 'article' );
        article.className = "phMedia";
        // importation des images et des videos du photographe
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${photographerId}/${video}` ;
            media = document.createElement( 'video' );
            media.setAttribute("src", videoURL);
            media.className = "phMediaVideo";
        }
        else {
            const imageURL = `assets/images/${photographerId}/${image}` ;
            media = document.createElement( 'img' );
            media.setAttribute("src", imageURL);
            media.className = "phMediaImage";
        }
        media.setAttribute('href', `./photographer.html?id=${id}`);
        media.setAttribute("alt", title);
        media.setAttribute("width", "400px");
        
        const mediaText = document.createElement( 'div' );
        mediaText.className = 'mediaText';
		const mediaTitle = document.createElement( 'h2' );
        mediaTitle.textContent = title;
        mediaTitle.className = 'mediaTitle';
		const mediaLikes = document.createElement( 'div' );
        mediaLikes.className = 'mediaLikes';

        const phLikes = document.createElement( 'span' );
        phLikes.className = 'phLikes';
        const likeCounter = document.createElement( 'span' );
        likeCounter.textContent = likes;
        likeCounter.className = 'likeCounter';
        likeCounter.id = `likeCounter_${id}`;

        const phHeart = document.createElement('button'); 
        phHeart.className = 'heartBtn';
        phHeart.onclick = function(event) {
            let counter = document.getElementById("counter"); 
            let tmpLike = parseInt(counter.innerHTML); 
            tmpLike ++ ;
            counter.innerHTML = tmpLike;
            console.log(id);
            let likeCounterTmp = document.getElementById(`likeCounter_${id}`);
            let tmpLike2 = parseInt(likeCounterTmp.innerHTML);
            tmpLike2 ++ ;
            likeCounterTmp.innerHTML = tmpLike2; 
        }
        const iHeart = document.createElement('i');
        iHeart.className = 'fas fa-regular fa-heart'; 
        iHeart.setAttribute("data-value", likes);

        //hiérarchie
        article.appendChild(media);
        article.appendChild(mediaText);
        mediaText.appendChild(mediaTitle);
        mediaText.appendChild(mediaLikes);
        mediaLikes.appendChild(phLikes);
        phLikes.appendChild(likeCounter);
        mediaLikes.appendChild(phHeart);
        phHeart.appendChild(iHeart);

        return (article);
    }
    
	return { getMediaCardDOM }

}

