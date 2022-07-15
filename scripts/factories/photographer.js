function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data ;

    const picture = `assets/photographers/${portrait}`;

    // création de la fiche du photographe dans la page d'acceuil
    function getUserCardDOM() {
        // article photographe
        const article = document.createElement( 'article' );
        article.className= 'phArticle';
        article.ariaLabel= 'photgrapher profile';
        
        const phLink = document.createElement('a'); // access : lien photo img + nom h2 
        phLink.setAttribute('href', `./photographer.html?id=${id}`);
        phLink.setAttribute("alt", `${name}`);
        phLink.className = 'phLink';
        const phPic = document.createElement( 'img' );
        phPic.setAttribute("src", picture);
        phPic.setAttribute("alt", `portrait de ${name}`);
        phPic.className = 'phPic';
        const phName = document.createElement( 'h2' );
        phName.textContent = name;
        phName.className = 'phName';
        
        const phText = document.createElement( 'div' ); // texte statique avec détails du photographe = ville + slogan + prix 
        phText.className = 'phText';
        const phCity = document.createElement( 'h3' );
        phCity.textContent = `${city}, ${country}`
        phCity.className = 'phCity';
        const phTagline = document.createElement( 'p' );
        phTagline.textContent = tagline;
        phTagline.className = 'phTagline';
        const phPrice = document.createElement( 'p' );
        phPrice.textContent = `${price}€/jour`
        phPrice.className = 'phPrice';

        //hiérarchie
        article.appendChild(phLink)
        phLink.appendChild(phPic);
        phLink.appendChild(phName);
        article.appendChild(phText);
        phText.appendChild(phCity);
        phText.appendChild(phTagline);
        phText.appendChild(phPrice);
        
        return (article);
    }

    // création de la fiche du photographe dans la page du photographe
    function getUserInfoDOM() {
        const pagePhInfo = document.createElement( 'div' );
        pagePhInfo.className = 'pagePhInfo';
        
        const pagePhName = document.createElement( 'h1' ); // access : texte statique nom du photographe h1
        pagePhName.textContent = name;
        pagePhName.className = 'pagePhName';
        
        const pagePhCity = document.createElement( 'p' ); // access : texte statique 
        pagePhCity.textContent = `${city}, ${country}`
        pagePhCity.className = 'pagePhCity';
        const pagePhTagline = document.createElement( 'p' );
        pagePhTagline.textContent = tagline;
        pagePhTagline.className = 'pagePhTagline';

        //hiérarchie
        pagePhInfo.appendChild(pagePhName);
        pagePhInfo.appendChild(pagePhCity);
        pagePhInfo.appendChild(pagePhTagline);

        return (pagePhInfo);
    }

    // Photo de profil du photographe dans la page du photographe 
    function getUserPicDOM() {
        const pagePhPic = document.createElement( 'img' ); // access : image statique 
        pagePhPic.setAttribute("src", picture);
        pagePhPic.setAttribute("alt", `${name}`);
        pagePhPic.className = 'pagePhPic';

        return (pagePhPic);
    }

    return { name, picture, getUserCardDOM, getUserInfoDOM, getUserPicDOM }

}

