import react from './images/reacticon.png'
import vite from './images/vite.jpg'
import tailwind from './images/tailwind.png'
import php from './images/php.png'
import laravel from './images/laravel_logo.png'
import mysql from './images/mysql.png'

export default function Logo() {
  const techs = [react, vite, tailwind, php, laravel, mysql];

  return (
    <section className="logo-grid">
      {techs.map((src, index) => (
        <div key={index} className="logo-item">
          <img src={src} alt="Technology Logo" className="logo-img" />
        </div>
      ))}
    </section>
  );
}
