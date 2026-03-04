# Docker Komutları ve Parametrelerin Anlamları

Sunumda hocanız "Bu parametre ne işe yarıyor?" diye sorarsa bu dosya hayatınızı kurtarır!

---

### 1. `docker build -t web-demo:1.0 .`
- `build`: Dockerfile'ı oku ve bir imaj (kalıp) oluştur.
- `-t`: "Tag" (etiket) ver. İmajın ismini ve versiyonunu belirler.
- `web-demo:1.0`: İsim ve versiyon.
- `.`: "Bu klasördeki dosyaları kullan."

### 2. `docker run -p 3000:3000 --name web-demo-basic ...`
- `run`: İmajdan bir konteyner (çalışan makine) yarat.
- `-p 3000:3000`: Port eşlemesi. Dış dünyadaki portu (sol), konteyner içindeki porta (sağ) bağlar.
- `--name`: Konteynere özel bir ad verir. Yoksa Docker rastgele bir isim verir.

### 3. `-v ${PWD}/src:/app/src` (Efsanevi "Bind Mount")
- `-v`: "Volume" (Hacim). Bilgisayarındaki bir klasörü konteyner içindeki bir klasöre bağlar.
- `${PWD}/src`: Bilgisayarındaki "src" klasörü.
- `:/app/src`: Konteynerin içindeki hedef klasör.
- **Neden?**: Kodunda bir metni değiştirdiğinde konteynerin içine anında kopyalanır ve uygulama otomatik yenilenir.

### 4. `-e DB_ENABLED=false`
- `-e`: "Environment Variable" (Ortam Değişkeni). Uygulamaya ayar gönderir.
- **Neden?**: Kodun veritabanına bağlanıp bağlanmayacağını bu anahtar ile konteyner dışından yönetiriz.

### 5. `docker compose up --build`
- `up`: [docker-compose.yml](file:///c:/fun_project/Docker_Using_for_Web_Development/docker-compose.yml) dosyasındaki bütün servisleri (app, db) aynı anda ayağa kaldır.
- `--build`: "Başlamadan önce imajları tekrar kontrol et, bi değişiklik varsa build al."

### 6. `docker compose down`
- `down`: Açılan bütün konteynerleri, ağları (networks) ve geçici dosyaları durdurup siler. "Ortalığı temizle" komutudur.

---

### 🔍 Docker Desktop Nedir?
- Bir **GUI (Görsel Arayüz)**'dür. Terminalde yaptığınız her şeyi görsellerle görmenizi sağlar.
- **Images**: Mutfaktaki tarif defteri gibidir.
- **Containers**: Tarif defterinden pişirdiğiniz yemektir (çalışan uygulama).
