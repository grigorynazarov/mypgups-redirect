## Отказ от ответственности
Данное расширение распространяется без каких-либо гарантий по принципу "AS IS" ("КАК ЕСТЬ"). Расширение НЕ было разработано сотрудниками университета.

## Что это?
Это расширение делает переадресацию из темы "Вход на сайт через https://my.pgups.ru/" с сайта СДО на страницу входа my.pgups.ru

## Совместимость с браузерами
Расширение должно работать в любом браузере на основе Chromium и в браузере Firefox
<br/>
<br/>Протестировано в:
- Firefox (Версия 58 и выше)
- Chrome (Тестировалось на версии 92)
- Яндекс.Браузер (Тестировалось на версии 21)

<br/>

## Установка
### Firefox
Расширение для этого браузера можно [скачать из официального магазина расширений Firefox ADD-ONS](https://addons.mozilla.org/en-US/firefox/addon/mypgups-redirect/)
### Chrome, Яндекс.Браузер и другие
Для этих браузеров нет версии в магазине расширений и здесь будет рассматриваться способ ручной установки.
<br/>
- Скачать архив с расширением в формате `.zip` из страницы [Releases](https://github.com/EvilScout/MyPGUPS-Redirect/releases/tag/1.0)
- Распаковать содержимое в пустую папку с названием `mypgupsredirect`
- Для Chrome (Chromium):
  - Откройте меню расширений, набрав в строке браузера `chrome://extensions/` <br/> Либо через меню браузера перейдите в `Дополнительные инструменты > Расширения`
  - Включите `Режим разработчика` в правом верхнем углу окна.
  - Нажмите на `Загрузить распакованное расширение` и выберите папку с расширением `mypgupsredirect`
- Для Яндекс.Браузера:
  - Откройте меню дополнений, набрав в строке браузера `browser://tune/` <br/> Либо через меню браузера перейдите в `Дополнения`
  - Перетащите папку с расширением `mypgupsredirect` в окно браузера.
  - После этого расширение появится внизу в списке дополнений.

> Яндекс.Браузер может вас предупреждать при запуске о том, что у вас загружено расширение не из магазина.

## Структура репозитория
Репозиторий состоит из двух папок для разных браузеров: `Firefox` и `Chrome-and-others`.
Они содержат адаптированные файлы `manifest.json` для разных браузеров.

## Сборка расширения из исходников
> Расширения собранные в файл `.xpi` или `.crx` можно запустить только в браузерах для разработчиков, так как в обычных версиях требуется цифровая подпись, которую можно получить только при публикации расширения в магазине.

Сборка для Firefox: Скачайте файлы из папки `Firefox` и упакуйте файлы из папки как ZIP-архив с расширением `.xpi`.<br/>
Сборка для Chrome (Chromium): Скачайте файлы из папки `Chrome-and-others` и в браузере в разделе дополнений нажмите на кнопку `Упаковать расширение` и выберите папку с расширением.


## Лицензия
Отказ от авторских прав и отказ от гарантий. [Подробнее](https://ru.wikipedia.org/wiki/Unlicense)
```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
```
