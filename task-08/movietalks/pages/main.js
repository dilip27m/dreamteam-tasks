"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";

const API_KEY = 'd2bc73edeb149ddddfb9c2021a429224'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Home() {
  const [featuredFilms, setFeaturedFilms] = useState([]);
  const [upcomingFilms, setUpcomingFilms] = useState([]);
  const fetchFeaturedFilms = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    setFeaturedFilms(response.data.results.slice(0, 10)); 
  };
  const fetchUpcomingFilms = async () => { 
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    setUpcomingFilms(response.data.results.slice(0, 10)); 
  };
  useEffect(() => {
    fetchFeaturedFilms();
    fetchUpcomingFilms();
  }, []);

  return (
    <div >
      <header className={styles.intro}>
        <h1 className={styles.introTitle}>Welcome to Movietalks</h1>
        <p className={styles.introSubtitle}> Discover movies, create lists, and connect with TFI kattu banisa!</p>
        <Link href="/films" className={styles.button}> Explore Films </Link>
      </header>
      <div className={styles.line}><hr /></div>
      <div className={styles.main}>
        <div>
          <h2 className={styles.sectionTitle}>Featured Films</h2>
          <div className={styles.container}>
            {featuredFilms.map((film) => (
              <div key={film.id} className={styles.card}>
                <Link href={`/films/${film.id}`}>
                  <Image src={`${IMG_BASE_URL}${film.poster_path}`}  alt={`${film.title} Poster`} width={150} height={225}  className={styles.filmImage} />
                  <h3 className="text-lg font-semibold">{film.title}</h3>
                  <p className="text-sm text-gray-500">Rating: {film.vote_average}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>Upcoming Films</h2>
          <div className={styles.container}>
            {upcomingFilms.map((film) => (
              <div key={film.id} className={styles.card}>
                <Link href={`/films/${film.id}`}>
                  <Image src={`${IMG_BASE_URL}${film.poster_path}`}  alt={`${film.title} Poster`} width={150} height={225} className={styles.filmImage} />
                  <h3 className="text-lg font-semibold">{film.title}</h3>
                  <p className="text-sm text-gray-500">Release Date: {film.release_date}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.note}>
          <h2 className={styles.noteTitle}>Join the TFI kattubanisa club!</h2>
          <p className={styles.noteText}>Create lists, connect to people, and join your favourite clubs.</p>
          <Link href="/members" className={styles.button}>Meet Members</Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 Movietalks. All Rights Reserved. Under TFI kattubanisa members.</p>
      </footer>
    </div>
  );
}
