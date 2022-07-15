function mediaFactory(data, photographerId,medias,index) {
    const { title, image, video, likes, date, id, price } = data;
    const isVideo = video != null;

	function getMediaCardDOM() {
        // création de la galerie dans la page du photographe
        const articlePh = document.createElement( 'article' );
        articlePh.className = "phMediaElement";

        // importation des images et des videos du photographe
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${photographerId}/${video}`;
            media = document.createElement( 'video' );
            media.setAttribute("src", videoURL);
            media.setAttribute("controls","controls");
        }
        else {
            const imageURL = `assets/images/${photographerId}/${image}`;
            media = document.createElement( 'img' );
            media.setAttribute("src", imageURL);  
        }
        const mediaLink = document.createElement( 'span' ); //access : lien image - ouvre la vue lightbox
        media.className = "phMedia";
        media.setAttribute("role", "button");
        media.setAttribute("alt", title);
        media.onclick = function(event) {
            (new Lightbox(medias,index))
        }
        
        const mediaText = document.createElement( 'div' ); //access : texte statique de chaque média
        mediaText.className = 'mediaText';
		const mediaTitle = document.createElement( 'h2' );
        mediaTitle.textContent = title;
        mediaTitle.className = 'mediaTitle';
 
		const mediaLikes = document.createElement( 'div' ); //access : icone likes image statique 
        mediaLikes.className = 'mediaLikes';
        const phLikes = document.createElement( 'span' );
        phLikes.className = 'phLikes';
        const likeCounter = document.createElement( 'span' );
        likeCounter.textContent = likes;
        likeCounter.className = 'likeCounter';
        likeCounter.id = `likeCounter_${id}`;

        const phHeart = document.createElement('span'); 
        phHeart.className = 'heartBtn';
        phHeart.onclick = function(event) {
            let counter = document.getElementById("counterTotalLikes"); 
            let tmpLike = parseInt(counter.innerHTML); 
            tmpLike ++ ;
            counterTotalLikes.innerHTML = tmpLike;
            let likeCounterTmp = document.getElementById(`likeCounter_${id}`);
            let tmpLike2 = parseInt(likeCounterTmp.innerHTML);
            tmpLike2 ++ ;
            likeCounterTmp.innerHTML = tmpLike2; 
        }

        const iHeart = document.createElement('i');
        iHeart.className = 'fas fa-light fa-heart'; 
        iHeart.setAttribute("data-value", likes);

        //hiérarchie
        articlePh.appendChild(media);
        articlePh.appendChild(mediaLink);
        articlePh.appendChild(mediaText);
        mediaText.appendChild(mediaTitle);
        mediaText.appendChild(mediaLikes);
        mediaLikes.appendChild(phLikes);
        phLikes.appendChild(likeCounter);
        mediaLikes.appendChild(phHeart);
        phHeart.appendChild(iHeart);

        return (articlePh);
    }

	return { getMediaCardDOM }

}

