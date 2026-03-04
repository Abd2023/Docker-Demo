# Docker Sunum Akışı ve Demo Rehberi

Sunumunuzu 5 ana aşamaya bölebilirsiniz. Bu akış, Docker'ın neden kullanıldığını mantıklı bir sırayla gösterir.

---

## 🏁 1. Giriş: "Neden Docker?" (2-3 Dakika)
- **Sorun**: "Normalde bir projeyi başkasının bilgisayarında çalıştırmak zordur. Node.js yüklü mü? Sürümü ne? Veritabanı kurulu mu? Şifresi ne?"
- **Çözüm**: "Docker ile projeyi bir 'konteyner' içine paketliyoruz. Herkeste tıpatıp aynı çalışıyor."
- **Gösterilecek Dosya**: [package.json](file:///c:/fun_project/Docker_Using_for_Web_Development/package.json) (Normal bir Node.js projesi olduğunu gösterin).

---

## 🛠 2. İlk Adım: Dockerfile (Dockerfile Oluşturma)
- **Anlatım**: "Dockerfile, projemizin nasıl bir 'bilgisayar' içinde çalışacağını tarif eden yemek tarifidir."
- **Gösterilecek Dosya**: [Dockerfile](file:///c:/fun_project/Docker_Using_for_Web_Development/Dockerfile)
  - `FROM node:20-alpine`: "Küçük ve hafif bir işletim sistemiyle başlıyoruz."
  - `COPY . .`: "Kodlarımızı içine koyuyoruz."
  - `RUN npm install`: "Bağımlılıkları yüklüyoruz."
- **Komut**: `docker build -t web-demo:1.0 .`
  - *Ne yapıyor?* Tarifi okuyup bir 'Image' oluşturuyor.

---

## 🏃 3. Çalıştırma: Docker Run
- **Anlatım**: "Şu an elimizde bir paket var, şimdi onu çalıştıracağız."
- **Komut**: `docker run --name web-demo-basic -p 3000:3000 web-demo:1.0`
- **Aksiyon**: Tarayıcıda `localhost:3000`'i açın. Mesajı gösterin.
- **Kapatma**: Terminalde `Ctrl+C` yapıp konteyneri durdurun.

---

## ⚡ 4. Geliştirici Deneyimi: Bind Mount (Live Reload)
- **Anlatım**: "Docker'da kod yazarken her seferinde baştan build mi alacağız? Hayır! 'Bind Mount' ile bilgisayarımızdaki klasörü konteyner ile paylaşıyoruz."
- **Komut**: (Hile Sayfası'ndaki uzun komutu kopyalayıp yapıştırın)
- **Aksiyon**: 
  1. [src/index.js](file:///c:/fun_project/Docker_Using_for_Web_Development/src/index.js) dosyasında bir metni ("Merhaba" gibi) değiştirin ve kaydedin.
  2. Terminalde `nodemon`'un otomatik olarak yeniden başladığını gösterin.
  3. Tarayıcıyı yenileyin, değişikliğin anında yansıdığını gösterin. **(Bu sunumun en havalı anı!)**

---

## 🍱 5. Orkestrasyon: Docker Compose
- **Anlatım**: "Uygulama büyüdü, artık bir veritabanına ihtiyacımız var. İki konteyneri (App ve Postgres) beraber nasıl yönetiriz? İşte Docker Compose."
- **Gösterilecek Dosya**: [docker-compose.yml](file:///c:/fun_project/Docker_Using_for_Web_Development/docker-compose.yml) (App ve DB servislerini gösterin).
- **Komut**: `docker compose up --build`
- **Aksiyon**: 
  1. `localhost:3000/db-time` adresine gidin.
  2. Veritabanından gelen zaman bilgisini gösterin.
  3. **Kapanış**: `docker compose down` komutuyla her şeyi tek seferde temizleyin.

---

## 💡 Sunum Tüyoları
- **Kopyala-Yapıştır Kullanın**: Komutları tek tek yazmakla vakit kaybetmeyin ve hata yapma riskini azaltın. Hazırladığım "Cheat Sheet" dosyasını yanınızda açın.
- **Docker Desktop'ı Gösterin**: Komutları terminale yazınca Docker Desktop uygulamasında konteynerlerin nasıl yeşil yandığını arada bir ekrana getirin. Görsel olarak çok etkileyici durur.
- **Soru Gelirse**: "Konteyner ile Sanal Makine (VM) farkı nedir?" diye sorarlarsa; "Konteynerler çok daha hafif, saniyeler içinde açılır ve işletim sistemi çekirdeğini paylaşır" deyin.
