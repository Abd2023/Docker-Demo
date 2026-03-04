# Docker Demo Hile Sayfası (Cheat Sheet)

Sunum sırasında bu sayfayı yan ekranınıza veya bir not defterine açıp komutları sırayla kopyalayıp terminale yapıştırabilirsiniz.

### 📝 Hazırlık
Proje klasöründe olduğunuzdan emin olun. Terminali (PowerShell veya CMD) açın.

---

### 1) İmajı Build Etmek (Adım 2)
```bash
docker build -t web-demo:1.0 .
```

---

### 2) Konteyneri Çalıştırmak (Adım 3)
```bash
docker run --name web-demo-basic -p 3000:3000 web-demo:1.0
```
- **Durdurmak İçin**: `Ctrl + C`
- **Konteyneri Silmek İçin**: `docker rm web-demo-basic`

---

### 3) Canlı Yenileme (Live Reload) (Adım 4)
Bu komut biraz uzundur, kopyalayıp yapıştırın.

**Windows PowerShell İçin:**
```powershell
docker run --name web-demo-dev -p 3000:3000 -e DB_ENABLED=false -v "${PWD}/src:/app/src" web-demo:1.0 npm run dev -- -L
```

**Windows CMD (Komut İstemi) İçin:**
```cmd
docker run --name web-demo-dev -p 3000:3000 -e DB_ENABLED=false -v "%cd%/src:/app/src" web-demo:1.0 npm run dev -- -L
```

---

### 4) Docker Compose (Uygulama + Veritabanı) (Adım 5)
```bash
docker compose up --build
```
- **İyice Kapatmak İçin**: `docker compose down`

---

### 🛠 Docker Desktop İnceleme
Terminalde komutlar çalıştıktan sonra Docker Desktop'ta şunları görün:
- **Images**: `web-demo:1.0` imajının oluştuğunu.
- **Containers**: `web-demo-basic`, `web-demo-dev` veya compose sonrası `web-demo` grubunun yeşil yandığını.
- **Volumes**: Dosyalarınızın nasıl bağlandığını.
