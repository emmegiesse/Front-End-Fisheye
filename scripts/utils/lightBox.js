class Lightbox {
    constructor(medias, index) {
        this.currentIndex = index;
        this.medias = medias;
        this.init();
    }
    
    display() { //fonction de display de la lightbox
        let lightBoxMedia = document.getElementById('galleryLightbox-media');
        let lightBoxName = document.getElementById('galleryLightbox-name');
        const isVideo = this.medias [this.currentIndex].video!= null;
        let media;
        if (isVideo) {
            const videoURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].video}` ;
            media = document.createElement( 'video' ); // access : image statique 
            media.setAttribute("src", videoURL);
            media.setAttribute("controls","controls");
        }
        else {
            const imageURL = `assets/images/${this.medias [this.currentIndex].photographerId}/${this.medias [this.currentIndex].image}` ;
            media = document.createElement( 'img' ); // access : image statique 
            media.setAttribute("src", imageURL);  
        }
        
        lightBoxMedia.innerHTML = "";
        lightBoxMedia.appendChild(media);
        lightBoxName.innerHTML = this.medias [this.currentIndex].title // access : texte statique 
    }
    
    // Initialization et ouverture lightbox
    init() {
        this.display();
        let pop = document.getElementById('pop');
        pop.style.display = 'none';
        
        let gallery = document.getElementById('galleryLightbox'); 
        gallery.style.display = 'block';
        
        this.previous(document.querySelector('.leftArrowLightbox')); // access : link "previous image"
        this.next(document.querySelector('.rightArrowLightbox')); // access : link "next image"
        this.close();
        return this
    }
    
    // Passage au media suivant
    next(articlePh) {
        articlePh.addEventListener('click', () => {
            this.currentIndex += 1;
            if (this.currentIndex >= this.medias.length) {this.currentIndex = 0};
            this.display()
        })
        document.addEventListener('keydown', (event) => {
            if (event.key === "ArrowRight"){
                this.currentIndex += 1;
                if (this.currentIndex >= this.medias.length) {this.currentIndex = 0};
                this.display()
            }
        })
    }
    
    // Passage au media précedent
    previous(articlePh) {
        articlePh.addEventListener('click', () => {
            this.currentIndex -= 1;
            if (this.currentIndex <= 0) {this.currentIndex = this.medias.length - 1};
            this.display()
        })
        document.addEventListener('keydown', (event) => {
            if (event.key === "ArrowLeft"){
                this.currentIndex -= 1;
                if (this.currentIndex <= 0) {this.currentIndex = this.medias.length - 1};
                this.display()
            }
        })
    }
    
    close() { //access : buton ferme le lightbox
        document.querySelector('.closeLightboxIcon').addEventListener('click', () => {
            let lightbox = document.getElementById('galleryLightbox');
            lightbox.style.display = 'none';
            
            let pop = document.getElementById('pop');
            pop.style.display = 'flex';
            
        })
    }
}

