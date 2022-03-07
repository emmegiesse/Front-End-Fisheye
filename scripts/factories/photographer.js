function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data ;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.setAttribute('href', `./photographer.html?id=${id}`);
        const article = document.createElement( 'article' );
        article.className= 'phArticle';
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portait de ${name}`);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`
        const pTag = document.createElement( 'p' );
        pTag.textContent = tagline;
        pTag.className = 'tagline';
        const pPrice = document.createElement( 'p' );
        pPrice.textContent = `${price} euros`
        pPrice.className = 'price';
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(pTag);
        article.appendChild(pPrice);

        return (article);
    }

    function getUserInfoDOM() {
        const article = document.createElement( 'article' );
        article.className = 'phInfo';
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`
        const pTag = document.createElement( 'p' );
        pTag.textContent = tagline;
        pTag.className = 'tagline';
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(pTag);

        return (article);
    }

    function getUserPicDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portait de ${name}`);
        article.appendChild(img);

        return (article);
    }

    function likesPriceDOM() {
        const article = document.createElement( 'article' );
        const likesBox = document.createElement( 'div' );
        likesBox.textContent = 'img';

        article.appendChild(likesBox);

        return (article);
    }

    return { name, picture, getUserCardDOM, getUserInfoDOM, getUserPicDOM, likesPriceDOM}

}

