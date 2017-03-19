var articlesService = (function () {
    var articles = [
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

    var all_tags = ['доллар', 'политика', 'Лукашенко', 'AЭС', 'Польша', 'экономика', 'деньги', 'Газпром', 'Минск', 'автобусы', 'Мкад-2', 'дороги'];

    function getArticles(skip, top, filterConfig) {
        if (!skip)
            skip = 0;
        if (!top)
            top = 10;

        var newArr = [];
        var newArrAuthors = [];
        if (filterConfig == null) {
            newArr = articles.slice(skip, top + skip);
            return newArr.sort(compareDate);
        } else if (filterConfig.author != null) {
            for (var i = 0; i < articles.length; i++) {
                if (articles[i].author === filterConfig.author)
                    newArrAuthors.push(articles[i]);
            }
            if (articles.length < top)
                top = articles.length;
            newArrAuthors.sort(compareDate);
            return newArrAuthors.slice(skip, top + skip);
        } else if (filterConfig.tag != null) {
            for (var i = 0; i < articles.length; i++) {
                if (articles[i].tag.indexOf(filterConfig.tag))
                    newArrAuthors.push(articles[i]);
            }
            if (articles.length < top)
                top = articles.length;
            newArrAuthors.sort(compareDate);
            return newArrAuthors.slice(skip, top + skip);
        } else
            return newArr;
    }

    function compareDate(a, b) {
        return a.createdAt > b.createdAt ? 1 : -1;
    }

    function getArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id)
                return articles[i];
        }
        return null;
    }

    function validateArticle(article) {
        if (article === null)
            return false;
        if (article.id && article.title && article.title.length < 100 && article.summary && article.summary.length < 200 && article.createdAt && article.author && article.content) {
            if (Object.prototype.toString.call(article.tags) !== '[object Array]' || article.tags.length == 0 || article.tags.length > 5) {
                return false;
            }
            for (var i = 0; i < articles.length; i++) {
                if (articles[i].id === article.id) {
                    return false;
                }
            }
            for (var i = 0; i < article.tags.length; i++) {
                if (all_tags.indexOf(article.tags[i]) == -1) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function addArticle(article) {
        if (validateArticle(article)) {
            articles.splice(articles.length, 0, article);
            return true;
        }
        return false;
    }

    function editArticle(id, article) {
        if (article === null)
            return false;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                if (article.title && article.title.length < 100) {
                    articles[i].title = article.title;
                }
                if (article.summary && article.summary.length < 200) {
                    articles[i].summary = article.summary;
                }
                if (article.content)
                    articles[i].content = article.content;
                return true;
            }
        }
        return false;
    }


    function removeArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                articles.splice(i, 1);
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

    return {
        getArticle: getArticle,
        getArticles: getArticles,
        validateArticle: validateArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag: removeTag
    }
}());

/*
 var articleToChange = {
 author: 1234,
 content: 'New content'
 };

 var filterConfig = {
 author: 'Иванов Андрей'
 };
 var newArticle = {
 id: '24',
 title: 'Минское «Динамо» обыграло ярославский «Зубр»',
 summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
 createdAt: new Date('2017-02-27T23:10:54'),
 tags: ['USA', 'Russia'],
 author: 'Петров Дмитрий',
 content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
 };

 var invalidTagsArticle = {
 id: '30',
 title: 'Минское «Динамо» обыграло ярославский «Зубр»',
 summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
 createdAt: new Date('2017-02-27T23:10:54'),
 tags: ['USA', 'Russia','KIA'],
 author: 'Петров Дмитрий',
 content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
 };
 var validArticle = {
 id: '30',
 title: 'Минское «Динамо» обыграло ярославский «Зубр»',
 summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
 createdAt: new Date('2017-02-27T23:10:54'),
 tags: ['USA', 'Minsk'],
 author: 'Петров Дмитрий',
 content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
 };


 function logArray(array) {
 for (var i = 0; i < array.length; i++) {
 console.log(array[i]);
 }
 }

 console.log('\n' + "------TEST:getArticles(skip?: number, top?: number, filterConfig?: Object): Array< Object>------");
 console.log("------ALL ARTICLES:-------");
 logArray(articles);
 console.log('\n' + "------getArticles(0, 5,null)-------");
 logArray(getArticles(0, 5, null));
 console.log('\n' + "------getArticles(2, 5,null)-------");
 logArray(getArticles(2, 5, null));
 console.log('\n' + "------filterConfig-------");
 console.log(filterConfig);
 console.log('\n' + "------getArticles(0, 5,filterConfig)-------");
 logArray(getArticles(0, 5, filterConfig));
 console.log('\n' + "------getArticles(2, 5,filterConfig)-------");
 logArray(getArticles(2, 5, filterConfig));



 console.log('\n' + "------TEST: getArticle(id: string): Object -------");
 console.log('\n' + "------getArticles(0)-------");
 console.log(getArticle(0));
 console.log('\n' + "------getArticles(12)-------");
 console.log(getArticle(12));
 console.log('\n' + "------getArticles('Hey!')-------");
 console.log(getArticle('Hey!'));


 console.log('\n' + "------TEST: addArticle(article: Object): boolean -------");
 console.log('\n' + "------addArticles(null)-------");
 console.log(addArticle(null));
 console.log('\n' + "------addArticles('Hey!')-------");
 console.log(addArticle('Hey!'));
 console.log('\n' + "------article-------");
 console.log(newArticle);
 console.log('\n' + "------addArticles(article)-------");
 var newArticle;
 console.log(addArticle(newArticle));
 console.log("------ALL ARTICLES:-------");
 logArray(articles);


 console.log('\n' + "------TEST: editArticle(id:string, article: Object): boolean -------");
 console.log('\n' + "------editArticle(200,articleToChange)-------");
 editArticle(200, articleToChange);
 console.log('\n' + "------editArticle(19,null)-------");
 console.log(editArticle(19, null));
 console.log(getArticle(19));
 console.log('\n' + "------editArticle(19,articleToChange)-------");
 console.log(articleToChange);
 console.log(editArticle(19, articleToChange));
 console.log(getArticle(19));

 console.log('\n' + "------TEST: removeArticle(id: string): boolean  -------");
 console.log('\n' + "------removeArticle(100500)-------");
 console.log(removeArticle(100500));
 console.log('\n' + "------removeArticle(24)-------");
 console.log(removeArticle(24));
 console.log("------ALL ARTICLES:-------");
 logArray(articles);

 console.log('\n' + "------TEST: validateArticle(article: Object): boolean   -------");
 console.log('\n' + "------validateArticle(null) -------");
 console.log(validateArticle(null));
 console.log('\n' + "------TAGS -------");
 console.log(all_tags);
 console.log('\n' + "------validateArticle(invalidTagsArticle) -------");
 console.log(validateArticle(invalidTagsArticle));
 console.log(invalidTagsArticle);
 console.log('\n' + "------validateArticle(validArticle) -------");
 console.log(validateArticle(validArticle));
 console.log(validArticle);
 */

var user = "Andrew";

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.article-list');
    }

    function insertArticlesInDom(articles) {
        var articlesNodes = renderArticles(articles);
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
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-tags').textContent = article.tag;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

        if (user == null) {
            var controlButtons = template.content.querySelector(".control-buttons");
            document.querySelector(".log-In").lastElementChild.src = "images/no-logo.jpg";
            document.querySelector(".profile").textContent = "Hello, guest!";
            var addPostButton = document.getElementById("add-button");

            if (controlButtons) {
                addPostButton.parentNode.removeChild(addPostButton);
                template.content.querySelector(".article-list-item").removeChild(controlButtons);
            }
        } else {
            document.querySelector(".profile").textContent = "Hello, " + user + "!";
        }
        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    function formatDate(d) {
        return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

    return {
        init: init,
        insertArticlesInDom: insertArticlesInDom,
        insertArticleInDom: insertArticleInDom,
        editArticlesInDom: editArticleInDom,
        removeArticlesFromDom: removeArticlesFromDom,
        removeArticleFromDom: removeArticleFromDom
    };
}());

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    articleRenderer.init();
    renderArticles(0, 20);
}

function renderArticles(skip, top) {
    var articles = articlesService.getArticles(skip, top);

    articleRenderer.insertArticlesInDom(articles);

    articleRenderer.insertArticleInDom({
        id: "21",
        title: "Добавленный пост",
        summary: "Добавленный пост из insertArticleInDom ",
        createdAt: new Date('2017-02-22T20:31:00'),
        author: "Andrew",
        content: "content",
        tag: ["Минск"]
    });

    // articleRenderer.editArticlesInDom("6",{
    //     author: 1234,
    //     content: 'New content из editArticlesInDom'
    // });


}