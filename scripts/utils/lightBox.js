class Lightbox {
    constructor(medias, index) {
        this.currentIndex = index;
        this.medias = medias;
        this.init();
    }
     // Initialization et ouverture lightbox
     init() {
        let lightBoxMedia = document.getElementById('galleryLightbox-media');
        let lightBoxName = document.getElementById('galleryLightbox-name');
        const isVideo = this.medias [this.currentIndex].video!= null;
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].video}` ;
            media = document.createElement( 'video' );
            media.setAttribute("src", videoURL);
            media.setAttribute("controls","controls");
        }
        else {
            const imageURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].image}` ;
            media = document.createElement( 'img' );
            media.setAttribute("src", imageURL);  
        }

        lightBoxMedia.appendChild(media);
        lightBoxName.innerHTML = this.medias [this.currentIndex].title

        let gallery = document.getElementById('galleryLightbox')
        gallery.style.display = 'block';

        this.previous(document.querySelector('.leftArrowLightbox'), currentIndex, lightBoxName);
        this.next(document.querySelector('.rightArrowLightbox'), currentIndex, lightBoxName);
        this.close();
        return this
    }

    // Media précedent
    previous(articlePh, media, name) {
            articlePh.addEventListener('click', () => {
                this.currentIndex -= 1;
                let lightBoxMedia = document.getElementById('galleryLightbox-media');
                let lightBoxName = document.getElementById('galleryLightbox-name');
                if (this.currentIndex < 0) {
                    this.currentIndex = media.length - 1;
                    this.currentIndex = name.length - 1;
                }
                let currentMediaSrc = media[this.currentIndex];
                let currentMediaNameSrc = name[this.currentIndex];
                lightBoxMedia.innerHTML = `${currentMediaSrc}`;
                lightBoxName.innerHTML = `${currentMediaNameSrc}`;
            })
        }
        // Passage au media suivant
        next(articlePh, media, name) {
            articlePh.addEventListener('click', () => {
                this.currentIndex += 1;
                let lightBoxMedia = document.getElementById('galleryLightbox-media');
                let lightBoxName = document.getElementById('galleryLightbox-name');
                if (this.currentIndex > name.length - 1) {
                    this.currentIndex = 0;
                }
                let currentMediaSrc = media[this.currentIndex];
                let currentMediaNameSrc = name[this.currentIndex];
                lightBoxMedia.innerHTML = `${currentMediaSrc}`;
                lightBoxName.innerHTML = `${currentMediaNameSrc}`;
            })
    }

    close() {
        document.querySelector('.closeLightboxIcon').addEventListener('click', () => {
            let lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        })
    }
}

