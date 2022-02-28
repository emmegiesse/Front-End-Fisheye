function mediaFactory(data, photographerId) {
    const { title, image, video, likes, date, id, price } = data ;
    const isVideo = video != null;

	function getMediaCardDOM() {
		const article = document.createElement( 'article' );
        article.className = "phMedia";
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${photographerId}/${video}` ;
            media = document.createElement( 'video' );
            media.setAttribute("src", videoURL);
        }
        else {
            const imageURL = `assets/images/${photographerId}/${image}` ;
            media = document.createElement( 'img' );
            media.setAttribute("src", imageURL);
        }
        media.setAttribute("alt", title);
        media.setAttribute("width", "400px");
		const pTitle = document.createElement( 'p' );
        pTitle.textContent = title;
        pTitle.className = 'pTitle';
		const pLikes = document.createElement( 'p' );
        pLikes.textContent = likes;
        pLikes.className = 'pLikes';
        const pHeart = document.createElement('button'); 
        pHeart.className = 'heartBtn';
        const iHeart = document.createElement('i');
        iHeart.className = 'fas fa-regular fa-heart';                                                                            
        article.appendChild(media);
		article.appendChild(pTitle);
		article.appendChild(pLikes);
        pLikes.appendChild(pHeart);
        pHeart.appendChild(iHeart);

        return (article);
    }

	return { getMediaCardDOM }

}
