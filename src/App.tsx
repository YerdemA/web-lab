import { Fragment } from "react/jsx-runtime";
import "./App.css";

function App(){
  return (
    <Fragment>  
      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id = "hakkimda"> 
          <h2>Hakkımda</h2>
          <img src="hero.png" alt="Yusuf Erdem Aykaç'ın vesikalık fotoğrafı" />
          <p>Merhaba, ben Yusuf Erdem Aykaç. Fırat Üniversitesi, Teknoloji Fakültesi, Yazılım Mühendisliği
            3. sınıf öğrencisiyim. Yazılıma çocukluğumdan bu yana süregelen ilgim beni bu alanda eğitim görmeye
            itti. Bugün kendimi bu yoldan tanıtıyor olmak muazzam bir duygu. Öğrenmeye ve geliştirmeye devam edeceğim...
          </p>
        </section>

        <section id = "projeler">
          <h2>Projeler</h2>
            <p><strong>Projelerimin detaylarını görmek için:</strong></p>
            <a href="https://github.com/YerdemA?tab=repositories">GitHub Reposu</a>
          <article>
            <h3>Araba Kirama Otomasyonu (Rent A Car)</h3>
            <p>Windows Forms tabanlı olarak geliştirilen bu araç kiralama otomasyonu,
              araç yönetimi, müşteri yönetimi, kiralama işlemleri ve gelir-gider takibi
               gibi temel işlevleri içerir.</p>
            <p><strong>Kullanılan Teknolojiler:</strong></p>
            <ul>
              <li>C#</li>
              <li>SQL</li>
              <li>DevExpress</li>
              <li>Visual Studio</li>
            </ul>
            <img src = "rentacar.png" alt = "Rent A Car Projesinden bir ekran görüntüsü" />
          </article>

          <article>
            <h3>WebRandevu</h3>
            <p>Projenin temel amacı; berber, psikolog, özel ders öğretmeni veya pansiyon 
              işletmecisi gibi randevu ile çalışan hizmet sağlayıcıları ile bu hizmetlerden 
              faydalanmak isteyen kullanıcıları tek bir dijital platformda buluşturmaktır.
              Sistem, randevu sürecindeki iletişim problemlerini, zamanlama çakışmalarını 
              ve yönetim zorluklarını ortadan kaldırarak, hem hizmet verenler hem de hizmet 
              alanlar için verimli, şeffaf ve kullanıcı dostu bir çözüm sunar.</p>
            <p><strong>Kullanılan Teknolojiler:</strong></p>
            <ul>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Google Firebase</li>
            </ul>
            <img src = "webrandevu.png" alt = "WebRandevu Projesinden bir ekran görüntüsü" />
          </article>

          <article>
            <h3>Urfa Mutfağı</h3>
            <p>Urfa kültürene ait yemekleri, tariflerini ve (varsa) hikayelerini içeren bir web sitesi.</p>
            <p><strong>Kullanılan Teknolojiler:</strong></p>
            <ul>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Vanilla CSS</li>
            </ul>
            <img src = "urfamutfagi.png" alt = "Urfa Mutfağı Projesinden bir ekran görüntüsü" />
          </article>

        </section>

        <section id = "iletisim">
          <h2>İletişim</h2>
          <form>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className = "form-group">
                <label htmlFor = "name">Ad Soyad:</label>
                <input type = "text" id = "name"
                       required minLength = {2}
                       aria-describedby="name-error" />
                <small id = "name-error" className = "error-msg"
                        role = "alert" />
              </div>

              <div className = "form-group">
                <label htmlFor = "email">E-posta:</label>
                <input type = "email" id = "email" name = "email"
                       required aria-describedby="email-error" />
                <small id = "email-error" className = "error-msg"
                        role = "alert" />
              </div>

              <div className = "form-group">
                <label htmlFor = "subject">Konu:</label>
                <select id = "subject" name = "subject" required
                        aria-describedby = "subject-error">
                        <option value = "">-- Seciniz --</option>
                        <option value = "is">İş Teklifi</option>
                        <option value = "soru">Soru</option>
                        <option value = "oneri">Öneri</option>
                </select>
                <small id = "subject-error" className = "error-msg"
                       role = "alert" />
              </div>

              <div className = "form-group">
                <label htmlFor = "message">Mesajiniz:</label>
                <textarea id = "message" name = "message"
                          rows = {5} required minLength={10}
                          aria-describedby = "message-error" />
                <small id = "message-error" className = "error-msg"
                       role = "alert" />
              </div>

              <button type = "submit">Gönder</button>

            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Yusuf Erdem Aykaç</p>
      </footer>
    </Fragment>
  )
}

export default App;