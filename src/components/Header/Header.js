import React from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';
/*const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:2000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    resultArtists.innerHTML = '';

    result.forEach(element => {
        const artistElement = document.createElement('div');
        artistElement.innerHTML = `
        <div className="grid-container">
        <div className="artist-card" id="">
            <div className="card-img">
                <img src='${element.urlImg}' id="artist-img" className="artist-img"/>
                <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div className="card-text">
                <a title="Foo Fighters" className="vst" href=""></a>
                    <span className="artist-name" id="artist-name">${element.name}</span>
                    <span className="artist-categorie">Artista</span>
            </div>
        </div>
    </div>
        `;
        resultArtists.appendChild(artistElement);
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});*/

const Header = ({searchTerm, setSearchTerm}) => {
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }
    
    return(
        <nav className="header__navigation">
                <div className="navigation">
                    <div className="navigation__arrows">
                        <button className="arrow-left">
                            <img src={smallLeft} alt="Seta esquerda"/>
                        </button>
                        <button className="arrow-right">
                            <img src={smallRight} alt="Seta direita"/>
                        </button>
                    </div>
                    <div className="header__search">
                        <img src={search} alt=""/>
                        <input id="search-input" value={searchTerm} onChange={handleInputChange} type="text" maxLength="800" placeholder="O que você quer ouvir?"/>
                    </div>
                    <div className="header__login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
                </div>
            </nav>
    )
};

export default Header;





