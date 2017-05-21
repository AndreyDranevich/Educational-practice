let user = 'Andrew';

let articlesService = (function () {
    let articles = [
        {
            id: '1',
            title: 'На торгах 6 марта рубль окреп только к долларy',
            summary: 'Доллар на торгах 6 марта подешевел, евро и российский рубль подорожали. Такая информация размещена на сайте Белорусской валютно-фондовой биржи, сообщает БЕЛТА.',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Петров Пётр',
            content: 'Доллар подешевел на Br0,011 до Br1,9031 (3 марта — Br1,9141 за $1). Курс евро вырос на Br0,0072 и составляет Br2,0203 (3 марта — Br2,0131 за 1 евро). Российский рубль подорожал на Br0,0146 до Br3,2651 за 100 российских рублей (3 марта — Br3,2505 за 100 российских рублей).',
            tag: ['доллар', 'политика']
        },
        {
            id: '2',
            title: 'Лукашенко присвоил генеральские звания',
            summary: 'Воинское звание генерал-майора присвоено Александру Шкиренко, Александру Кареву, Сергею Феоктистову и Сергею Теребову.',
            createdAt: new Date('2017-02-28T22:43:00'),
            author: 'Иванов Петр',
            content: '4 марта, Минск /Корр. БЕЛТА/. Президент Беларуси Александр Лукашенко подписал указы о присвоении воинских и специальных званий. Об этом БЕЛТА сообщили в пресс-службе белорусского лидера.Воинское звание генерал-майора присвоено Александру Шкиренко, Александру Кареву, Сергею Феоктистову и Сергею Теребову.Вадиму Синявскому, Александру Ковальчуку и Ивану Подгурскому присвоено специальное звание генерал-майора милиции. Специальное звание генерал-майора юстиции присвоено Александру Рахманову и Владимиру Шалухину.',
            tag: ['Лукашенко', 'политика']
        },
        {
            id: '3',
            title: 'Тихиня о «ворах в законе»: всех держим под контролем',
            summary: 'О том, как в Беларуси не было допущено разгула организованной преступности, как документировали и пресекали деятельность лидеров преступной среды.',
            createdAt: new Date('2017-01-25T23:00:00'),
            author: 'Павлов Иван',
            content: 'Заместитель начальника главного управления по борьбе с организованной преступностью и коррупцией (ГУБОПиК) МВД Беларуси полковник милиции Владимир Тихиня рассказал Sputnik о том, как важно не допустить криминальный капитал в страну, для чего «нужны» воры в законе, а также про уголовное дело в отношении криминального авторитета Лебедя Борисовского, который никогда не был судим и сейчас скрывается в Европе».',
            tag: ['политика']
        },
        {
            id: '4',
            title: 'Лукашенко: милиция заслужила высокую оценку белорусского народа',
            summary: 'Глава государства отметил, что, сохраняя лучшие традиции и накопленный опыт, в наши дни сотрудники МВД успешно поддерживают высокий уровень правопорядка в стране.',
            createdAt: new Date('2017-02-27T21:02:00'),
            author: 'Стрелков Илья',
            content: 'МИНСК, 4 мар — Sputnik. Президент Беларуси Александр Лукашенко высоко оценил работу милиционеров и заявил, что в стране ими гордятся.В Беларуси 4 марта проходят торжественные мероприятия, посвященные 100-летию милиции.«Мы с благодарностью и глубоким уважением помним всех, кто не щадя сил стоял на страже закона и интересов граждан», — заявил глава государства в субботу в Минске перед началом торжественного милицейского марша, который проходит в центре белорусский столицы.',
            tag: ['Лукашенко', 'политика']
        },
        {
            id: '5',
            title: 'На юге Литвы из-за беспокойства об АЭС в Беларуси поставят сирены',
            summary: 'Департамент пожарной безопасности и спасения (ДПБС) намерен оборудовать на юго-востоке Литвы предупредительные сирены, которые бы информировали население',
            createdAt: new Date('2017-02-22T22:00:00'),
            author: 'Сидоров Иван',
            content: 'Сирены собираются установить в Вильнюсе и Вильнюсском районе, Ширвинтском и Шальчининкском районах, всего — в 150 местах, которые находятся от АЭС примерно в 50-ти километрах. Установка сирен включена в план действий программы правительства. Заместитель директора ДПБС Юрис Таргонскас утверждает, что сирены обойдутся в сумму до трех миллионов евро, сообщает DELFI со ссылкой на BNC.«Когда еще работала Игналинская атомная станция, у нас также вокруг была внедрена система предупреждения. Поскольку АЭС будет находиться недалеко от границы, зона воздействия будет на нашей территории, мы готовимся предупредить жителей», — сообщил Таргонскас.',
            tag: ['AЭС', 'Польша']
        },
        {
            id: '6',
            title: 'В четырех регионах Беларуси реальная зарплата в январе возросла к уровню января 2016 года',
            summary: 'в Минской области темп роста реальной заработной платы составил 101,8%, в Гомельской области — 100,8%, в Могилевской области — 100,5%, в Брестской области — 100,1%. ',
            createdAt: new Date('2017-02-27T23:00:00'),
            author: 'Планов Сергей',
            content: 'Так, в Минской области темп роста реальной заработной платы составил 101,8%, в Гомельской области — 100,8%, в Могилевской области — 100,5%, в Брестской области — 100,1%. Этот показатель в Витебской области равнялся 99,3%, в Гродненской области — 99%, в Минске — 98,5%, а в целом по республике — 99,8%.Что касается размера номинальной начисленной средней заработной платы в январе нынешнего года, то традиционно лидирует Минск — Br1027,6, на втором месте — Минская область (Br723,7), а замыкает зарплатный рейтинг Гродненская область (Br606,6).',
            tag: ['экономика', 'деньги']
        },
        {
            id: '7',
            title: 'Газпром повысил цену газа для Беларуси до $141 за тысячу кубометров',
            summary: 'Цена основана на формуле «Ямал плюс транзит», ее рост связан с ростом стоимости газа в ЯНАО, курсом российского рубля к доллару и уровнем инфляции в США.',
            createdAt: new Date('2017-02-28T13:20:00'),
            author: 'Нор Костя',
            content: 'В 2016 году стоимость газа для Беларуси на границе с РФ составляла немногим более 132 долларов за тысячу кубометров — если считать по формуле «Ямал плюс транзит». Однако Минск весь год платил за газ по собственной формуле, рассчитанной на основе нефтяных котировок, что привело к образованию газового долга в размере 660 миллионов долларов на конец февраля 2017 года. С 1 января 2017 года, как заверили в Минэнерго Беларуси, республика платит за газ по формуле «Ямал плюс транзит».',
            tag: ['экономика', 'Газпром']
        },
        {
            id: '8',
            title: 'Некоторые автобусы изменят маршруты 8 Марта в Минске',
            summary: 'Некоторые автобусные маршруты Минска изменят свое движение в Международный женский день, сообщили в понедельник на предприятии «Минсктранс».',
            createdAt: new Date('2017-02-17T13:00:00'),
            author: 'Рыбова Оля',
            content: 'На работу городского общественного транспорта в грядущую среду повлиял не только государственный праздник, но и приуроченный к нему женский забег, из-за которого часть улиц 8 марта будут перекрыты.Как сообщили в понедельник в «Минсктрансе», работа городских автобусных и троллейбусных запланирована по графику воскресных дней, трамвайных маршрутов — по графику выходного дня.',
            tag: ['Минск', 'автобусы']
        },
        {
            id: '9',
            title: 'Минтранс не будет делать МКАД-2 платной дорогой',
            summary: 'Что касается первой кольцевой автодороги, то она находится в ведении городских властей, и об их намерениях в министерстве не знают.',
            createdAt: new Date('2017-02-19T14:34:00'),
            author: 'Малахова Настя',
            content: 'Министерство транспорта и коммуникаций Беларуси не планирует вводить плату за проезд по второй Минской кольцевой автодороге (МКАД-2), сообщил глава ведомства Анатолий Сивак в понедельник на пресс-конференции в Минске.Министр отметил, что первая МКАД находится в ведении городских властей и не является республиканской автодорогой. Он также обратил внимание, что были попытки «переделать» ее в улицу. Сивак добавил, что ему пока не известны планы столичной администрации относительно введения платы за проезд по кольцевой.',
            tag: ['Мкад-2', 'дороги']
        },
        {
            id: '10',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-29T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '11',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-24T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },

        {
            id: '12',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-23T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '13',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-22T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '14',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-21T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '15',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-20T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '16',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-19T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '17',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-18T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '18',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-15T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '19',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-14T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        },
        {
            id: '20',
            title: 'Минские улицы освободят от рекламного мусора',
            summary: 'Минские улицы освободят от рекламного мусора. Для наведения порядка владельцам рекламных конструкций предлагаем в недельный срок добровольно их убрать. С 13 марта планируется провести акцию',
            createdAt: new Date('2017-01-13T17:02:03'),
            author: 'Иванов Андрей',
            content: 'С наступлением весны количество объявлений неприглядного вида значительно возросло. Владельцы торговых точек и предприятий крепят плакаты металлическими цепями к столбам, деревьям, что портит внешний облик города и препятствует уборке территорий, влияют на дорожную безопасность. Для демонтажа конструкций требуется специальное оборудование. Специалисты УП «Минскреклама» проводят рейды для выявления таких случаев, но принимаемых мер недостаточно.',
            tag: ['Минск']
        }
    ];

    let all_tags = ['доллар', 'политика', 'Лукашенко', 'AЭС', 'Польша', 'экономика', 'деньги', 'Газпром', 'Минск', 'автобусы', 'Мкад-2', 'дороги'];

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        if (articles.length < top) {
            top = articles.length;
        }

        let newArticles = [];
        if (filterConfig) {
            newArticles = getArticlesByFilter(filterConfig);
        } else {
            newArticles = articles;
        }
        newArticles.sort(compareDate);

        return newArticles.slice(skip, skip + top);
    }

    function getArticlesByFilter(filterConfig) {
        let filteredArray = [];
        for (let i = 0; i < articles.length; i++) {
            if (filterConfig.dateStart && filterConfig.dateFinish) {
                if (compareDate(filterConfig.dateStart, convertDate(articles[i].createdAt)) && compareDate(convertDate(articles[i].createdAt), filterConfig.dateFinish)) {
                    filteredArray.push(articles[i]);
                }
            }
            if (filterConfig.author) {
                if (articles[i].author === filterConfig.author) {
                    filteredArray.push(articles[i]);
                }
            }
            if (filterConfig.tag) {
                for (let j = 0; j < filterConfig.tag.length; j++) {
                    if (articles[i].tag.indexOf(filterConfig.tag[j]) != -1) {
                        filteredArray.push(articles[i]);
                    }
                }
            }
        }
        return filteredArray;
    }

    function convertDate(a) {
        return a.getFullYear() + '-' + (a.getMonth() < 10 ? '0' : '') + a.getMonth() + '-' + a.getDate();
    }

    function compareDate(a, b) {
        return a.createdAt > b.createdAt ? 1 : -1;
    }

    function getArticle(id) {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                return articles[i];
            }
        }
        return null;
    }

    function validateArticle(article) {
        if (!article) {
            return false;
        }
        if (article.id && article.title && article.title.length < 100 && article.summary && article.summary.length < 200 && article.createdAt && article.author && article.content) {
            return true;
        }
        return false;
    }

    function addArticle(article) {
        if (validateArticle(article)) {
            articles.splice(articles.length, 0, article);
            fillArticlesStorage();
            return true;
        }
        return false;
    }

    function editArticle(id, article) {
        if (!article) {
            return false;
        }
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                if (article.title && article.title.length < 100) {
                    articles[i].title = article.title;
                }
                if (article.summary && article.summary.length < 200) {
                    articles[i].summary = article.summary;
                }
                if (article.content) {
                    articles[i].content = article.content;
                }
                fillArticlesStorage();
                return true;
            }
        }
        return false;
    }


    function removeArticle(id) {
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                articles.splice(i, 1);
                fillArticlesStorage();
                return true;
            }
        }

        return false;
    }

    function addTag(tag) {
        if (all_tags.indexOf(tag) == -1) {
            all_tags.push(tag);
            return true;
        }
        return false;
    }

    function removeTag(tag) {
        if (all_tags.indexOf(tag) != -1) {
            all_tags.splice(articles.indexOf(tag), 1);
            return true;
        }
        return false;
    }

    function getArticlesSize() {
        return articles.length;
    }

    function getNullArticle() {
        return {
            id: '',
            title: '',
            summary: '',
            createdAt: '',
            tag: '',
            author: '',
            content: ''
        };
    }

    function fillArticlesStorage() {
        localStorage.clear('articlesKey');
        localStorage.setItem('articlesKey', JSON.stringify(articles));
    }

    let articlesData = JSON.parse(localStorage.getItem('articlesKey'));
    if (!articlesData)
        fillArticlesStorage();
    else {
        articles = articlesData;
        articles.forEach(function (currentElement) {
            currentElement.createdAt = new Date(currentElement.createdAt);
        });
    }

    window.beforeunload = function () {
        localStorage.setItem('articlesKey', JSON.stringify(articles));
    };

    return {
        getArticle: getArticle,
        getArticles: getArticles,
        validateArticle: validateArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag: removeTag,
        getArticlesSize: getArticlesSize,
        getNullArticle: getNullArticle
    }
}());

let filterConfig = {
    author: 'name',
    dateStart: 10,
    dateFinish: 12,
    tag: ['df', 'hello']
};

let articleRenderer = (function () {
    let ARTICLE_TEMPLATE;
    let LOG_TEMPLATE;
    let DETAILED_ARTICLE_TEMPLATE;
    let EDIT_TEMPLATE;
    let FILTER_TEMPLATE;
    let ERROR_TEMPLATE;

    let ARTICLE_LIST_NODE;
    let CONTENT;
    let controlPanel;
    let logNode;
    let blockWithSearch;
    let editOrAddArticle;

    let isOpenFilter = false;
    let isItError = false;
    let deletedFilter;
    let deletedAddButton;
    let deletedControlButtons;
    let deletedBlockSearch;
    let deletedMoreNews;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        LOG_TEMPLATE = document.querySelector('#template-log');
        DETAILED_ARTICLE_TEMPLATE = document.querySelector('#template-detailed-news');
        EDIT_TEMPLATE = document.querySelector('#template-edit');
        FILTER_TEMPLATE = document.querySelector('#template-filter');
        ERROR_TEMPLATE = document.querySelector('#template-error');

        ARTICLE_LIST_NODE = document.querySelector('.article-list');
        CONTENT = document.querySelector('.content');
        logNode = document.querySelector(".log-item");
        deletedControlButtons = document.querySelector('.control-buttons');
        controlPanel = document.querySelector('.control-panel-2');
        blockWithSearch = document.querySelector('.block-with-search');
    }

    function insertArticlesInDom(articles) {
        loadUser(user);
        let articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function insertArticleInDom(article) {
        articlesService.addArticle(article);
        ARTICLE_LIST_NODE.appendChild(renderArticle(article));
    }

    function editArticleInDom(id, article) {
        articlesService.editArticle(id, article);
        removeArticleFromDom();
        renderArticles();
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function removeArticleFromDom(id) {
        articlesService.removeArticle(id);

        removeArticlesFromDom();
        let articles = articlesService.getArticles(0, 10);
        insertArticlesInDom(articles);
    }

    function removeArticleFromDomFromDetailed(id) {
        articlesService.removeArticle(id);
        insertMain();
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        let template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-tags').textContent = article.tag;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

        let controlButtons = template.content.querySelector(".control-buttons");
        if (!user) {
            if (controlButtons) {
                deletedControlButtons = template.content.querySelector(".block-of-buttons").removeChild(controlButtons);
            }
        } else if (deletedControlButtons) {
            template.content.querySelector('.block-of-buttons').appendChild(deletedControlButtons);
        }
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

    function loadUser(user) {
        let addArticleButton = document.getElementById("add-button");
        if (user) {
            document.querySelector(".profile").textContent = "Привет, " + user + "!";
            document.querySelector(".log-in-action").textContent = "Выход";
            if (deletedAddButton) {
                controlPanel.appendChild(deletedAddButton);
                deletedAddButton = null;
            }
        } else {
            document.querySelector(".log-In").lastElementChild.src = "images/no-logo.jpg";
            document.querySelector(".profile").textContent = "Привет, гость!";
            document.querySelector(".log-in-action").textContent = "Вход";
            if (addArticleButton) {
                deletedAddButton = addArticleButton.parentNode.removeChild(addArticleButton);
            }
        }
    }

    function insertLogin() {
        removeArticlesFromDom();
        deleteFilter();
        if (user) {
            user = null;
            document.querySelector('.more-news');
            insertMain();
        } else {
            if (document.getElementById('more-news')) {
                deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
                deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
            }
            document.querySelector(".log-in-action").textContent = '';
            logNode.appendChild(LOG_TEMPLATE.content.querySelector(".log-list-item").cloneNode(true));
        }
    }

    function logIn() {
        let inputName = document.querySelector('.name-event').value;
        let inputPassword = document.querySelector('.password-event').value;

        if (isCorrectLogin(inputName, inputPassword)) {
            user = inputName;
            loadUser(user);
            logNode.removeChild(document.querySelector('.log-list-item'));
            insertMain();
        } else {
            document.querySelector('.name-event').value = "";
            document.querySelector('.password-event').value = "";
            alert('Попробуйте еще раз.');
        }
    }

    function isCorrectLogin(name, password) {
        return (name === 'admin' && password === "admin");
    }

    function insertMain() {
        if (deletedMoreNews) {
            blockWithSearch.appendChild(deletedBlockSearch);
            CONTENT.appendChild(deletedMoreNews);
        }
        if (isItError) {
            logNode.removeChild(document.querySelector('.error-img'));
            isItError = false;
        }

        deleteFilter();
        removeArticlesFromDom();
        startAppSecond();
    }

    function insertMainAfterLog() {
        insertMain();

        if (document.querySelector('.log-list-item')) {
            logNode.removeChild(document.querySelector('.log-list-item'));
        }
    }

    function deleteMain() {
        removeArticlesFromDom();
        if (document.getElementById('more-news')) {
            deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
            deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
        }
    }

    function insertDetailedArticle(articleID, flag) {
        flag = flag || 0;
        removeArticlesFromDom();
        let article = articlesService.getArticle(articleID);
        let detailedTemp = DETAILED_ARTICLE_TEMPLATE;

        detailedTemp.content.querySelector('.detailed-news').dataset.id = article.id;
        detailedTemp.content.querySelector('.header-news-detailed').textContent = article.title;
        detailedTemp.content.querySelector('.detailed-content').textContent = article.content;
        detailedTemp.content.querySelector('.detailed-author').textContent = article.author;
        detailedTemp.content.querySelector('.tags-detailed-news').textContent = article.tag;
        detailedTemp.content.querySelector('.detailed-time').textContent = formatDate(article.createdAt);

        ARTICLE_LIST_NODE.appendChild(detailedTemp.content.querySelector('.detailed-news').cloneNode(true));

        if (!user) {
            document.querySelector('.detailed-edit-del').removeChild(document.getElementById('del-edit-icon'));
        }

        deleteFilter();
        if (flag === 0) {
            deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
            deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
        }
    }

    function insertEditFormArticle(id) {
        deleteMain();
        deleteFilter();
        let editTemp = EDIT_TEMPLATE;
        let date = new Date();
        editTemp.content.querySelector('.time-edit-news').textContent = date.toLocaleString("ru");
        if (id) {
            let article = articlesService.getArticle(id);

            editTemp.content.querySelector('.id-edit-news').textContent = article.id;
            editTemp.content.querySelector('.author-edit-news').textContent = article.author;
            editTemp.content.querySelector('.title-edit-news').value = article.title;
            editTemp.content.querySelector('.tags-edit-news').value = article.tag;
            editTemp.content.querySelector('.summary-edit-news').textContent = article.summary;
            editTemp.content.querySelector('.content-edit-news').textContent = article.content;
        } else {
            editTemp.content.querySelector('.id-edit-news').textContent = Date.now().toString();
            editTemp.content.querySelector('.author-edit-news').textContent = user;
            editTemp.content.querySelector('.title-edit-news').value = '';
            editTemp.content.querySelector('.tags-edit-news').value = '';
            editTemp.content.querySelector('.summary-edit-news').textContent = '';
            editTemp.content.querySelector('.content-edit-news').textContent = '';
        }
        ARTICLE_LIST_NODE.appendChild(editTemp.content.querySelector('.edit-news-form').cloneNode(true));
    }

    function insertAddEditArticle() {
        let date = new Date();
        editOrAddArticle = articlesService.getNullArticle();

        editOrAddArticle.id = document.querySelector('.id-edit-news').textContent;
        editOrAddArticle.title = document.querySelector('.title-edit-news').value;
        editOrAddArticle.summary = document.querySelector('.summary-edit-news').value;
        editOrAddArticle.content = document.querySelector('.content-edit-news').value;
        editOrAddArticle.author = user;
        editOrAddArticle.tag = document.querySelector('.tags-edit-news').value.split(', ');
        editOrAddArticle.createdAt = date;

        let flag = false;
        if (articlesService.getArticle(editOrAddArticle.id)) {
            articlesService.editArticle(editOrAddArticle.id, editOrAddArticle);
            flag = true;
        } else {
            if (articlesService.validateArticle(editOrAddArticle)) {
                insertArticleInDom(editOrAddArticle);
                flag = true;
            } else {
                alert('Неверныый формат новости, попробуйте еще раз');
            }
        }
        if (flag) {
            ARTICLE_LIST_NODE.removeChild(document.querySelector('.edit-news-form'));
            insertDetailedArticle(editOrAddArticle.id, 1);
        }
    }

    function insertFilter() {
        deletedFilter = controlPanel.removeChild(document.getElementById('filters'));
        logNode.appendChild(FILTER_TEMPLATE.content.querySelector('.filter').cloneNode(true));
        isOpenFilter = true;
    }

    function deleteFilter() {
        if (deletedFilter) {
            controlPanel.appendChild(deletedFilter);
        }
        if (isOpenFilter) {
            logNode.removeChild(document.querySelector('.filter'));
        }
        isOpenFilter = false;
    }

    function applyFilter() {
        filterConfig.author = document.getElementById('search-author').value;
        filterConfig.dateStart = document.getElementById('search-date-with').value;
        filterConfig.dateFinish = document.getElementById('search-date-to').value;
        filterConfig.tag = document.getElementById('search-tags').value.split(', ');

        deleteFilter();

        let articles = articlesService.getArticles(0, 1000, filterConfig);
        if (articles.length - 1) {
            removeArticlesFromDom();
            articleRenderer.insertArticlesInDom(articles);
        } else {
            showError();
        }
    }

    function showError() {
        deleteFilter();
        logNode.appendChild(ERROR_TEMPLATE.content.querySelector('.error-img').cloneNode(true));
        isItError = true;
        deleteMain();
    }

    return {
        init: init,
        insertArticlesInDom: insertArticlesInDom,
        insertArticleInDom: insertArticleInDom,
        editArticleInDom: editArticleInDom,
        removeArticlesFromDom: removeArticlesFromDom,
        removeArticleFromDom: removeArticleFromDom,
        removeArticleFromDomFromDetailed: removeArticleFromDomFromDetailed,
        insertLogin: insertLogin,
        logIn: logIn,
        insertDetailedArticle: insertDetailedArticle,
        insertMain: insertMain,
        insertMainAfterLog: insertMainAfterLog,
        insertEditFormArticle: insertEditFormArticle,
        insertAddEditArticle: insertAddEditArticle,
        insertFilter: insertFilter,
        deleteFilter: deleteFilter,
        showFilter: applyFilter
    };
}());

function addEventList() {
    let mainPageElements = document.querySelector('.content');
    let logElements = document.querySelector('.header');

    mainPageElements.addEventListener('click', selectEventInArticle);
    logElements.addEventListener('click', selectEvent);
}

function selectEvent(event) {
    let elemName = event.target.className;
    if (!elemName) {
        elemName = event.target.parentNode.className;
    }

    switch (elemName) {
        case 'log-in-action':
            articleRenderer.insertLogin();
            break;
        case 'header-text':
            articleRenderer.insertMainAfterLog();
            break;
    }
}

function selectEventInArticle(event) {
    let eventClassName = event.target.className;

    switch (eventClassName) {
        case 'delete-icon':
            let articleToDelete = parseInt(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            articleRenderer.removeArticleFromDom(articleToDelete);
            break;
        case 'delete-icon-detailed':
            let articleToDeleteDet = parseInt(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            articleRenderer.removeArticleFromDomFromDetailed(articleToDeleteDet);
            break;
        case 'article-list-item-title':
            let articleToShowID = parseInt(event.target.parentElement.getAttribute('data-id'));
            articleRenderer.insertDetailedArticle(articleToShowID);
            break;
        case 'button2':
            articleRenderer.logIn();
            break;
        case 'to-main':
            articleRenderer.insertMain();
            break;
        case 'edit-icon':
            let articleToEditDet = parseInt(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            articleRenderer.insertEditFormArticle(articleToEditDet);
            break;
        case 'edit-icon-detailed':
            let articleToEditDetailed = parseInt(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            articleRenderer.insertEditFormArticle(articleToEditDetailed);
            break;
        case 'button1':
            articleRenderer.insertEditFormArticle();
            break;
        case 'button3':
            articleRenderer.insertAddEditArticle();
            break;
        case 'button5':
            articleRenderer.insertFilter();
            break;
        case 'button7':
            articleRenderer.deleteFilter();
            break;
        case 'button6':
            articleRenderer.showFilter();
            break;
    }

}

let pagination = (function () {
    let total; // всего статей
    let perPage = 10; // статей на 1-ой странице
    let currentPage = 1; // текущая страница
    let showMoreButton;
    let showMoreCallback; // функция, которую вызывать, когда произошел клик по кнопке

    /*
     Total: Всего статей в ArticleModel. (Надо будет еще учесть, что total меняется при применении фильтров)
     showMoreCb: функция, которую надо вызвать при клике на кнопку "Показать Еще"
     */

    function init(_total, showMoreCb) {
        total = _total;
        showMoreCallback = showMoreCb;
        showMoreButton = document.querySelector('.more-news');
        showMoreButton.addEventListener('click', handleShowMoreClick);


        /* Не показывать кнопку если статей нет */
        if (getTotalPages() <= currentPage) {
            //hideShowMoreButton();
        }

        /* Вернуть skip, top для начальной отрисовки статей */
        return getParams();
    }

    function handleShowMoreClick() {
        let paginationParams = nextPage();
        showMoreCallback(paginationParams.skip, paginationParams.top);
    }

    function getTotalPages() {
        return Math.ceil(total / perPage);
    }

    function nextPage() {
        currentPage++;
        if (getTotalPages() <= currentPage) {
            hideShowMoreButton();
        }

        return getParams();
    }

    function getParams() {
        return {
            top: perPage,
            skip: (currentPage - 1) * perPage
        };
    }

    function hideShowMoreButton() {
        showMoreButton.style.display = 'none';
    }

    return {
        init: init
    }

}());

document.addEventListener('DOMContentLoaded', startAppFirst);
addEventList();

function startAppFirst() {
    articleRenderer.init();
    startAppSecond();
}

function startAppSecond() {
    pagination.init(articlesService.getArticlesSize(), function (skip, top) {
        renderArticlesWithPagination(skip, top);
    });
    renderArticlesWithPagination(pagination.skip, pagination.top);
}

function renderArticlesWithPagination(skip, top) {
    let articles = articlesService.getArticles(skip, top);

    articleRenderer.insertArticlesInDom(articles);
}