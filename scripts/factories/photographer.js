function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data ;

    const picture = `assets/photographers/${portrait}`;

    // création de la fiche du photographe dans la page d'acceuil
    function getUserCardDOM() {
        // article photographe
        const article = document.createElement( 'article' );
        article.className= 'phArticle';
        article.ariaLabel= 'photgrapher profile';
        // lien photo img + nom h2 (ref 3 du brief)
        const phLink = document.createElement('a');
        phLink.setAttribute('href', `./photographer.html?id=${id}`);
        phLink.className = 'phLink';
        const phPic = document.createElement( 'img' );
        phPic.setAttribute("src", picture);
        phPic.setAttribute("alt", `Portait de ${name}`);
        phPic.className = 'phPic';
        const phName = document.createElement( 'h2' );
        phName.textContent = name;
        phName.className = 'phName';
        // texte avec détails du photographe = ville + tagline + prix (ref 4 du brief)
        const phText = document.createElement( 'div' );
        phText.className = 'phText';
        const phCity = document.createElement( 'h3' );
        phCity.textContent = `${city}, ${country}`
        phCity.className = 'phCity';
        const phTagline = document.createElement( 'p' );
        phTagline.textContent = tagline;
        phTagline.className = 'phTagline';
        const phPrice = document.createElement( 'p' );
        phPrice.textContent = `${price} euros`
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
        // nom du photographe h1 (ref 2 du brief)
        const pagePhName = document.createElement( 'h1' );
        pagePhName.textContent = name;
        pagePhName.className = 'pagePhName';
        // texte avec détails du photographe = ville + tagline (ref 3 du brief)
        const pagePhCity = document.createElement( 'p' );
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

    // Photo de prfil du photographe dans la page du photographe 
    function getUserPicDOM() {
        const pagePhPic = document.createElement( 'img' );
        pagePhPic.setAttribute("src", picture);
        pagePhPic.setAttribute("alt", `Portait de ${name}`);
        pagePhPic.className = 'pagePhPic';

        return (pagePhPic);
    }

    return { name, picture, getUserCardDOM, getUserInfoDOM, getUserPicDOM }

}

