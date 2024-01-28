import React from "react";
import { useState, useEffect } from 'react';
import './MainContent.css';
import imgCard1 from '../../assets/playlist/1.jpeg';
import imgCard2 from '../../assets/playlist/2.png';
import imgCard3 from '../../assets/playlist/3.jpeg';
import imgCard4 from '../../assets/playlist/4.jpeg';
import imgCard5 from '../../assets/playlist/5.jpeg';
import imgCard6 from '../../assets/playlist/6.jpeg';
import imgCard7 from '../../assets/playlist/7.jpeg';
import imgCard8 from '../../assets/playlist/8.jpeg';
import imgCard9 from '../../assets/playlist/9.jpeg';
import imgCard10 from '../../assets/playlist/10.jpeg';
import imgCard11 from '../../assets/playlist/11.jpeg';
import imgCard12 from '../../assets/playlist/12.jpeg';
import imgCard13 from '../../assets/playlist/13.jpeg';
import imgCard14 from '../../assets/playlist/14.jpeg';
import imgCard15 from '../../assets/playlist/15.jpeg';

const MainContent = ({searchTerm}) => {
    
    const [artists, setArtists] = useState([]);
        const [showResultArtist, setShowResultArtist] = useState(false);
        const [showResultPlaylist, setShowResultPlaylist] = useState(true);

        const requestApi = (searchTerm) => {
          const url = `http://localhost:2000/artists?name_like=${searchTerm}`;

          fetch(url)
            .then((response) => response.json())
            .then((result) => {
              setArtists(result);
              setShowResultPlaylist(false);
              setShowResultArtist(true);
            });
        };

        useEffect(() => {
          if (searchTerm === '') {
            setShowResultPlaylist(true);
            setShowResultArtist(false);
          } else {
            requestApi(searchTerm);
          }
        }, [searchTerm]);

    return (
        <div className="playlist-container">
            <div id="result-playlist" className={showResultPlaylist ? '' : 'hidden'}>
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="#" className="cards">
                                <div className="cards card1">
                                    <img src={imgCard1} alt=""/>
                                    <span>Boas festas</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card2">
                                    <img src={imgCard2} alt=""/>
                                    <span>Feitos para você</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card3">
                                    <img src={imgCard3} alt=""/>
                                    <span>Lançamentos</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card4">
                                    <img src={imgCard4} alt=""/>
                                    <span>Creators</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card5">
                                    <img src={imgCard5} alt=""/>
                                    <span>Podcasts</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card6">
                                    <img src={imgCard6} alt=""/>
                                    <span>Sertanejo</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card7">
                                    <img src={imgCard7} alt=""/>
                                    <span>Samba e pagode</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card8">
                                    <img src={imgCard8} alt=""/>
                                    <span>Funk</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card9">
                                    <img src={imgCard9} alt=""/>
                                    <span>Rock</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card10">
                                    <img src={imgCard10} alt=""/>
                                    <span>Hip Hop</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card11">
                                    <img src={imgCard11} alt=""/>
                                    <span>Indie</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card12">
                                    <img src={imgCard12} alt=""/>
                                    <span>Relax</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card13">
                                    <img src={imgCard13} alt=""/>
                                    <span>Música latina</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card14">
                                    <img src={imgCard14} alt=""/>
                                    <span>MPB</span>
                                </div>
                            </a>
                            
                            <a href="#" className="cards">
                                <div className="cards card15">
                                    <img src={imgCard15} alt=""/>
                                    <span>Para treinar</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className={showResultArtist ? '' : 'hidden'}>
                <div className="grid-container">
                    {artists.map((artist) => (
                        <div key={artist.id} className="artist-card">
                            <span className="fa fa-solid fa-play"></span>
                            <div className="card-img">
                                <img src={artist.urlImg} className="artist-img" alt={artist.name} />
                            </div>
                            <div className="card-text">
                                <a title={artist.name} className="vst" href="#"> </a>
                                    <span className="artist-name" id="artist-name">
                                    {artist.name}
                                </span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MainContent;
