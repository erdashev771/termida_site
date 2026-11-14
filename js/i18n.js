'use strict';

// English is the source copy. Each entry supplies Uzbek and Russian translations.
(() => {
  const copy = {
    'Legal documents': ['Huquqiy hujjatlar', 'Правовые документы'],
    'Privacy policy · Draft': ['Maxfiylik siyosati · Loyiha', 'Политика конфиденциальности · Проект'],
    'Terms of service · Draft': ['Foydalanish shartlari · Loyiha', 'Условия использования · Проект'],
    'Privacy policy — Termida': ['Maxfiylik siyosati — Termida', 'Политика конфиденциальности — Termida'],
    'Terms of service — Termida': ['Foydalanish shartlari — Termida', 'Условия использования — Termida'],
    'All rights reserved.': ['Barcha huquqlar himoyalangan.', 'Все права защищены.'],
    'Back to home': ['Bosh sahifaga qaytish', 'На главную'],
    'Legal documents · Drafts for review': ['Huquqiy hujjatlar · Ko‘rib chiqish uchun loyihalar', 'Правовые документы · Проекты для проверки'],
    'Explore Termida': ['Termida bilan tanishing', 'Узнайте о Termida'],
    'Follow Termida': ['Termida’ni kuzatib boring', 'Следите за Termida'],
    'Termida social links': ['Termida ijtimoiy tarmoqlari', 'Социальные сети Termida'],
    'Termida developer community': ['Termida dasturchilar hamjamiyati', 'Сообщество разработчиков Termida'],
    'Our developer community on Telegram.': ['Telegram’dagi dasturchilar hamjamiyatimiz.', 'Наше сообщество разработчиков в Telegram.'],
    'Join Termida Developers': ['Termida Developers’ga qo‘shilish', 'Присоединиться к Termida Developers'],
    'Beta v1.0.0': ['Beta v1.0.0', 'Бета v1.0.0'],
    'Download the Android beta APK from MediaFire.': ['Android beta APK faylini MediaFire orqali yuklab oling.', 'Скачайте APK бета-версии для Android с MediaFire.'],
    'Download the iOS beta IPA file from MediaFire.': ['iOS beta IPA faylini MediaFire orqali yuklab oling.', 'Скачайте IPA-файл бета-версии для iOS с MediaFire.'],
    'Download Android APK': ['Android APK’ni yuklab olish', 'Скачать APK для Android'],
    'Download iOS IPA': ['iOS IPA’ni yuklab olish', 'Скачать IPA для iOS'],
    'Download links open MediaFire in a new tab.': ['Yuklab olish havolalari MediaFire’ni yangi oynada ochadi.', 'Ссылки для скачивания открывают MediaFire в новой вкладке.'],
    'Before installing on iPhone': ['iPhone’ga o‘rnatishdan oldin', 'Перед установкой на iPhone'],
    'Downloading the IPA does not install the app automatically. Installation requires a Windows computer or a separately purchased, compatible iOS signing certificate.': ['IPA faylini yuklab olish ilovani avtomatik o‘rnatmaydi. O‘rnatish uchun Windows kompyuter yoki alohida sotib olingan, mos iOS imzolash sertifikati kerak.', 'Скачивание IPA не устанавливает приложение автоматически. Для установки нужен компьютер с Windows или отдельно приобретённый совместимый сертификат подписи iOS.'],
    'Get IPA installation help on Telegram': ['IPA o‘rnatish bo‘yicha Telegram’da yordam olish', 'Помощь с установкой IPA в Telegram'],
    'Yes. The public beta is distributed as an Android APK and an iOS IPA through MediaFire. Google Play and App Store releases are coming soon.': ['Ha. Ochiq beta versiya MediaFire orqali Android APK va iOS IPA shaklida tarqatiladi. Google Play va App Store relizlari tez orada.', 'Да. Открытая бета-версия распространяется через MediaFire в виде APK для Android и IPA для iOS. Релизы в Google Play и App Store ожидаются скоро.'],
    'Choose your platform in the beta download section to open the APK or IPA download page on MediaFire.': ['Beta yuklash bo‘limida platformangizni tanlang — MediaFire’dagi APK yoki IPA yuklab olish sahifasi ochiladi.', 'Выберите платформу в разделе загрузки бета-версии, чтобы открыть страницу скачивания APK или IPA на MediaFire.'],
    'How do I install the iOS IPA?': ['iOS IPA faylini qanday o‘rnataman?', 'Как установить IPA для iOS?'],
    'How can I contact support?': ['Yordam xizmatiga qanday murojaat qilaman?', 'Как связаться с поддержкой?'],
    'Contact Termida support on Telegram for beta questions and help installing the iOS IPA.': ['Beta versiya savollari va iOS IPA o‘rnatishda yordam uchun Telegram orqali Termida yordam xizmatiga murojaat qiling.', 'По вопросам бета-версии и установки IPA для iOS обращайтесь в поддержку Termida в Telegram.'],
    'Telegram support': ['Telegram orqali yordam', 'Поддержка в Telegram'],
    'Development preview · Policies pending': ['Ishlab chiqishdagi ko‘rinish · Huquqiy hujjatlar kutilmoqda', 'Предварительная версия · Ожидаются правовые документы'],
    'Preview platform': ['Ko‘rish platformasi', 'Платформа для просмотра'],
    'Android · Dashboard': ['Android · Asosiy ekran', 'Android · Главный экран'],
    'iOS · Dashboard': ['iOS · Asosiy ekran', 'iOS · Главный экран'],
    'Enhanced screenshots · Sample nutrition data. Tap to view full resolution.': ['Tiniqlashtirilgan skrinshotlar · Ovqatlanish raqamlari namuna uchun. To‘liq sifatda ko‘rish uchun bosing.', 'Улучшенные скриншоты · Данные о питании приведены для примера. Нажмите для просмотра в полном разрешении.'],
    'Open Android preview at full resolution': ['Android skrinshotini to‘liq sifatda ochish', 'Открыть скриншот Android в полном разрешении'],
    'Open iOS preview at full resolution': ['iOS skrinshotini to‘liq sifatda ochish', 'Открыть скриншот iOS в полном разрешении'],
    'Termida Android dashboard with sample calorie and nutrition progress': ['Termida Android asosiy ekrani: kaloriya va oziq moddalar bo‘yicha namunaviy progress', 'Главный экран Termida для Android с примером прогресса по калориям и питательным веществам'],
    'Termida iOS dashboard with sample calorie and nutrition progress': ['Termida iOS asosiy ekrani: kaloriya va oziq moddalar bo‘yicha namunaviy progress', 'Главный экран Termida для iOS с примером прогресса по калориям и питательным веществам'],
    'Development preview · Download links pending': ['Ishlab chiqishdagi ko‘rinish · Yuklash havolalari kutilmoqda', 'Предварительная версия · Ожидаются ссылки для скачивания'],
    'Skip to content': ['Asosiy mazmunga o‘tish', 'Перейти к содержимому'],
    'Termida home': ['Termida bosh sahifasi', 'Главная Termida'],
    'Site preferences': ['Sayt sozlamalari', 'Настройки сайта'],
    'Language': ['Til', 'Язык'],
    'Main navigation': ['Asosiy menyu', 'Основная навигация'],
    'Open navigation': ['Menyuni ochish', 'Открыть меню'],
    'Close navigation': ['Menyuni yopish', 'Закрыть меню'],
    'Use dark theme': ['Qorong‘i rejimga o‘tish', 'Включить тёмную тему'],
    'Use light theme': ['Yorug‘ rejimga o‘tish', 'Включить светлую тему'],
    'Features': ['Imkoniyatlar', 'Возможности'],
    'How it works': ['Qanday ishlaydi', 'Как это работает'],
    'App preview': ['Ilova ko‘rinishi', 'Обзор приложения'],
    'FAQ': ['Savol-javob', 'Вопросы и ответы'],
    'Support': ['Yordam', 'Поддержка'],
    'Download beta': ['Beta versiyani olish', 'Скачать бета-версию'],
    'A healthier everyday · Public beta': ['Sog‘lomroq hayot sari · Ochiq beta', 'К здоровому образу жизни · Открытая бета'],
    'Eat smarter.': ['Ongli ovqatlaning.', 'Питайтесь осознанно.'],
    'Live healthier.': ['Sog‘lomroq yashang.', 'Живите здоровее.'],
    'A little more understanding.': ['Ovqatlanishingizni yaxshiroq tushuning.', 'Больше понимания.'],
    'A better relationship with your nutrition.': ['Ovqatlanishga ongli yondashing.', 'Более осознанный подход к питанию.'],
    'Track calories and understand your nutrition with Termida, your AI-powered nutrition companion.': ['Sun’iy intellektga asoslangan Termida yordamida kaloriyalarni hisoblang va ovqatlanishingizni yaxshiroq tushuning.', 'Считайте калории и разбирайтесь в своём питании с Termida — вашим помощником на основе ИИ.'],
    'Explore the beta': ['Beta versiya bilan tanishish', 'Узнать о бета-версии'],
    'Discover Termida': ['Termida bilan tanishing', 'Откройте для себя Termida'],
    'For Android and iOS. Currently in public beta.': ['Android va iOS uchun. Hozir ochiq beta sinovida.', 'Для Android и iOS. Сейчас в открытом бета-тестировании.'],
    'A closer look at Termida': ['Termida bilan yaqindan tanishing', 'Знакомство с Termida'],
    'Real app preview goes here': ['Bu yerda ilovaning haqiqiy ekrani bo‘ladi', 'Здесь появится настоящий экран приложения'],
    'Awaiting the official dashboard screenshot.': ['Asosiy ekranning rasmiy skrinshoti kutilmoqda.', 'Ожидается официальный скриншот главного экрана.'],
    'This is a development placeholder.': ['Bu ishlab chiqish uchun vaqtinchalik blok.', 'Это временный блок для разработки.'],
    'Your nutrition, in perspective.': ['Ovqatlanishingiz haqida aniq tasavvur.', 'Ваше питание — наглядно.'],
    'More clarity. Every day.': ['Har kuni yanada aniqroq.', 'Больше ясности. Каждый день.'],
    'Make room for': ['Foydali odatlarga', 'Дайте место'],
    'better habits.': ['yo‘l oching.', 'полезным привычкам.'],
    'A focused space for understanding what you eat.': ['Nima iste’mol qilayotganingizni tushunish uchun qulay muhit.', 'Всё для понимания того, что вы едите.'],
    '01 / TRACK': ['01 / HISOBLANG', '01 / УЧИТЫВАЙТЕ'],
    'Your calories,': ['Kaloriyalaringiz', 'Ваши калории'],
    'in focus.': ['nazoratda.', 'под контролем.'],
    'Keep track of your calorie intake with Termida.': ['Termida bilan iste’mol qilgan kaloriyalaringizni hisoblab boring.', 'Отслеживайте потребление калорий с Termida.'],
    '02 / UNDERSTAND': ['02 / TUSHUNING', '02 / ПОНИМАЙТЕ'],
    'Get to know': ['Ovqatlanishingizni', 'Узнайте больше'],
    'your nutrition.': ['yaxshiroq biling.', 'о своём питании.'],
    'Bring your nutrition information together in one place.': ['Ovqatlanish haqidagi ma’lumotlaringizni bir joyda jamlang.', 'Соберите информацию о своём питании в одном месте.'],
    '03 / DISCOVER': ['03 / TANISHING', '03 / ОТКРЫВАЙТЕ'],
    'A closer look': ['Batafsil tanishuv', 'Подробный обзор'],
    'is on its way.': ['tez orada.', 'уже готовится.'],
    'Detailed feature previews will be added after the real app screens have been reviewed.': ['Ilovaning haqiqiy ekranlari ko‘rib chiqilgach, imkoniyatlar haqida batafsil ma’lumot qo‘shiladi.', 'Подробный обзор возможностей появится после проверки реальных экранов приложения.'],
    'Preview in preparation': ['Taqdimot tayyorlanmoqda', 'Обзор готовится'],
    'Small steps.': ['Kichik qadamlar.', 'Маленькие шаги.'],
    'Everyday understanding.': ['Har kuni yaxshiroq tushunish.', 'Больше понимания каждый день.'],
    'The step-by-step app guide is being prepared using the actual Termida experience. Check back for the official walkthrough.': ['Termida ilovasining haqiqiy ishlash jarayoni asosida bosqichma-bosqich qo‘llanma tayyorlanmoqda. Rasmiy yo‘riqnoma shu yerda e’lon qilinadi.', 'Пошаговое руководство готовится на основе реального опыта использования Termida. Официальная инструкция появится здесь.'],
    'The next chapter': ['Navbatdagi bosqich', 'Следующий этап'],
    'Coming to your': ['Sevimli ilovalar do‘koningizda', 'Скоро в вашем'],
    'favorite app store.': ['tez orada.', 'любимом магазине приложений.'],
    'Termida is in public beta. Store releases are still ahead.': ['Termida ochiq beta sinovida. Ilovalar do‘konlaridagi relizlar hali oldinda.', 'Termida проходит открытое бета-тестирование. Релиз в магазинах приложений ещё впереди.'],
    'Coming soon': ['Tez orada', 'Скоро'],
    'Be part of what’s next': ['Yangi bosqichga qo‘shiling', 'Станьте частью нового этапа'],
    'Meet your next': ['Yangi foydali odatingiz', 'Ваша новая'],
    'healthy habit.': ['bilan tanishing.', 'полезная привычка.'],
    'Try Termida Beta and experience the app before its official store launch.': ['Do‘konlardagi rasmiy relizdan oldin Termida Beta’ni sinab ko‘ring.', 'Попробуйте Termida Beta до официального выхода в магазинах приложений.'],
    'Android beta · Link pending': ['Android beta · Havola kutilmoqda', 'Android Beta · Ожидается ссылка'],
    'iOS beta · Link pending': ['iOS beta · Havola kutilmoqda', 'iOS Beta · Ожидается ссылка'],
    'Official download links and the iOS installation method are awaiting confirmation.': ['Rasmiy yuklab olish havolalari va iOS’ga o‘rnatish usuli tasdiqlanishi kutilmoqda.', 'Официальные ссылки для скачивания и способ установки на iOS ожидают подтверждения.'],
    'A little more clarity': ['Yanada aniqroq', 'Немного больше ясности'],
    'Good questions.': ['Muhim savollar.', 'Хорошие вопросы.'],
    'Simple answers.': ['Oddiy javoblar.', 'Простые ответы.'],
    'What is Termida?': ['Termida nima?', 'Что такое Termida?'],
    'Termida is an AI-powered calorie tracking and nutrition management mobile app, currently in public beta.': ['Termida — sun’iy intellekt yordamida kaloriyalarni hisoblash va ovqatlanishni boshqarish uchun mobil ilova. Hozir ochiq beta sinovida.', 'Termida — мобильное приложение для подсчёта калорий и управления питанием на основе ИИ. Сейчас оно в открытом бета-тестировании.'],
    'Is Termida available for Android and iOS?': ['Termida Android va iOS uchun mavjudmi?', 'Доступна ли Termida для Android и iOS?'],
    'Termida supports Android and iOS. Official beta access instructions will appear here once the download links and distribution methods are confirmed.': ['Termida Android va iOS’ni qo‘llab-quvvatlaydi. Yuklab olish havolalari va tarqatish usullari tasdiqlangach, beta versiyaga kirish yo‘riqnomasi shu yerda paydo bo‘ladi.', 'Termida поддерживает Android и iOS. Инструкции по доступу к бета-версии появятся после подтверждения ссылок и способов распространения.'],
    'How can I download the beta?': ['Beta versiyani qanday yuklab olaman?', 'Как скачать бета-версию?'],
    'The official beta links are being prepared for this website. Download actions will be enabled when those links have been confirmed.': ['Sayt uchun rasmiy beta havolalari tayyorlanmoqda. Ular tasdiqlangach, yuklab olish tugmalari faollashadi.', 'Официальные ссылки на бета-версию готовятся. Кнопки скачивания станут активными после их подтверждения.'],
    'When will the app launch in stores?': ['Ilova do‘konlarda qachon chiqadi?', 'Когда приложение выйдет в магазинах?'],
    'Google Play and App Store releases are coming soon. A launch date has not been announced on this website.': ['Google Play va App Store relizlari tez orada. Bu saytda chiqish sanasi hali e’lon qilinmagan.', 'Релизы в Google Play и App Store ожидаются скоро. Дата запуска на этом сайте пока не объявлена.'],
    'Here to help': ['Yordam berishga tayyormiz', 'Мы рядом'],
    'A question on your mind?': ['Savolingiz bormi?', 'Есть вопросы?'],
    'Termida support will be available through the official Telegram channel.': ['Termida yordami rasmiy Telegram kanali orqali mavjud bo‘ladi.', 'Поддержка Termida будет доступна через официальный Telegram-канал.'],
    'Telegram support · Link pending': ['Telegram yordami · Havola kutilmoqda', 'Поддержка в Telegram · Ожидается ссылка'],
    'A little more clarity about your nutrition.': ['Ovqatlanishingiz haqida yanada aniqroq tasavvur.', 'Больше ясности о вашем питании.'],
    'Privacy policy · Pending': ['Maxfiylik siyosati · Kutilmoqda', 'Политика конфиденциальности · Ожидается'],
    'Terms of service · Pending': ['Foydalanish shartlari · Kutilmoqda', 'Условия использования · Ожидаются'],
    'Development preview · App screenshots pending': ['Ishlab chiqishdagi ko‘rinish · Ilova skrinshotlari kutilmoqda', 'Предварительная версия · Ожидаются скриншоты'],
    'Termida — Eat smarter. Live healthier.': ['Termida — Ongli ovqatlaning. Sog‘lomroq yashang.', 'Termida — Питайтесь осознанно. Живите здоровее.'],
    'Meet Termida, an AI-powered calorie tracking and nutrition management app for Android and iOS. Currently in public beta.': ['Termida — Android va iOS uchun sun’iy intellektga asoslangan kaloriya hisobi va ovqatlanishni boshqarish ilovasi. Hozir ochiq beta sinovida.', 'Termida — приложение на основе ИИ для подсчёта калорий и управления питанием на Android и iOS. Сейчас в открытом бета-тестировании.'],
    'Calorie tracking and nutrition management. Discover Termida public beta.': ['Kaloriyalar hisobi va ovqatlanishni boshqarish. Termida ochiq beta versiyasi bilan tanishing.', 'Подсчёт калорий и управление питанием. Откройте для себя открытую бета-версию Termida.'],
    'Page not found — Termida': ['Sahifa topilmadi — Termida', 'Страница не найдена — Termida'],
    '404 · Page not found': ['404 · Sahifa topilmadi', '404 · Страница не найдена'],
    'Let’s get you': ['Keling, sizni'],
    'back on track.': ['bosh sahifaga qaytaramiz.', 'на главную.'],
    'This page may have moved, or the address may be incorrect.': ['Bu sahifa ko‘chirilgan yoki manzil noto‘g‘ri kiritilgan bo‘lishi mumkin.', 'Возможно, страница перемещена или адрес указан неверно.'],
    'Back to Termida ↗': ['Termida’ga qaytish ↗', 'Вернуться в Termida ↗']
  };
  copy['Let’s get you'][1] = 'Давайте вернёмся';
  let language = document.documentElement.lang;
  let explicitTheme = false;
  try { explicitTheme = ['light', 'dark'].includes(localStorage.getItem('termida-theme')); } catch (_) {}
  const originalNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return !node.parentElement.closest('script, style, option, [aria-hidden="true"]') && Object.hasOwn(copy, node.textContent.trim())
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  while (walker.nextNode()) originalNodes.push([walker.currentNode, walker.currentNode.textContent]);
  const originalTitle = document.title;
  const metadata = [...document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')].map(node => [node, node.content]);
  const languageSelect = document.querySelector('#language');
  const themeButton = document.querySelector('.theme-toggle');
  const menu = document.querySelector('.menu-toggle');
  const t = (key) => language === 'en' ? key : (copy[key]?.[language === 'uz' ? 0 : 1] || key);
  function refreshControls() {
    if (themeButton) {
      const dark = document.documentElement.dataset.theme === 'dark';
      themeButton.setAttribute('aria-pressed', String(dark));
      themeButton.setAttribute('aria-label', t(dark ? 'Use light theme' : 'Use dark theme'));
      themeButton.firstElementChild.textContent = dark ? '☀' : '☾';
    }
    if (menu) menu.setAttribute('aria-label', t(menu.getAttribute('aria-expanded') === 'true' ? 'Close navigation' : 'Open navigation'));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', document.documentElement.dataset.theme === 'dark' ? '#071a12' : '#fafcf9');
  }
  function setLanguage(value) {
    language = ['en', 'uz', 'ru'].includes(value) ? value : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-legal-lang]').forEach(section => { section.hidden = section.dataset.legalLang !== language; });
    originalNodes.forEach(([node, source]) => { node.textContent = source.replace(source.trim(), t(source.trim())); });
    document.querySelectorAll('[data-i18n-label]').forEach(node => node.setAttribute('aria-label', t(node.dataset.i18nLabel)));
    document.querySelectorAll('[data-i18n-alt]').forEach(node => node.setAttribute('alt', t(node.dataset.i18nAlt)));
    document.title = t(originalTitle);
    metadata.forEach(([node, source]) => { node.content = t(source); });
    if (languageSelect) languageSelect.value = language;
    refreshControls();
  }
  languageSelect?.addEventListener('change', () => {
    setLanguage(languageSelect.value);
    try { localStorage.setItem('termida-language', language); } catch (_) {}
  });
  themeButton?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    explicitTheme = true;
    try { localStorage.setItem('termida-theme', theme); } catch (_) {}
    refreshControls();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!explicitTheme) {
      document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
      refreshControls();
    }
  });
  window.TermidaI18n = { t, setLanguage };
  setLanguage(language);
})();
