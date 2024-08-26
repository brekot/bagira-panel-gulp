<a href="https://brekot.github.io/bagira-panel-gulp/">Главная страница</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/index-warning.html">Предупреждение об отключении или уведомление об отключении</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/balance.html">Пополнить баланс</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/objects.html">Охраняемые объекты</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/request.html">Обращения / Реквизиты / Расторгнуть договор</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/application-connection.html">Заявка на подключение нового объекта</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/equipment-list.html">Оборудования и услуги</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/equipment-detail.html">Оборудования и услуги (детальная)</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/my-request.html">Мои обращения</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/support.html">Служба поддержки</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/finance-documents.html">Финансы и документы</a><br>
<a href="https://brekot.github.io/bagira-panel-gulp/profile.html">Профиль</a><br>

<hr>

Папка /docs - для разработчика. Содержит готовые файлы верски. Остальные файлы и папки служебные.

<hr>

<b>Подключены в JS:</b><br>
<ul>
    <li>Swiper - для слайдеров (https://swiperjs.com/)</li>
    <li>Fancybox - для окон (https://fancyapps.com/)</li>
</ul>

<hr>

<b>Установка</b><br>
* установите [NodeJS](https://nodejs.org/en/)
* установите глобально:
    * [Yarn](https://yarnpkg.com/getting-started): ```npm i -g yarn```
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
    * [Bem Tools](https://www.npmjs.com/package/bem-tools-core): ```npm i -g bem-tools-core```
* перейдите в скачанную папку со сборкой: ```cd bagira-panel-gulp```
* введите ```yarn set version berry```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)
* ```yarn run bem-m my-block``` - для создания БЭМ-блока