const translations = {
    ua: {
        thesis: "Теза",
        arguments: "Аргументи",
        example: "Приклад",
        conclusion: "Висновок",
        call: "Заклик",
        mainQuestion: "Чи справді людина вільна, якщо Бог передбачив її шлях?",
        arg1: "Передбачення не дорівнює примусу. Бог знає, що станеться, але це не означає, що Він змушує людину діяти певним чином. Знання про щось не означає спричинення цього.",
        arg2: "Біблія підтверджує людську відповідальність. У Святому Письмі неодноразово сказано: «Життя і смерть дав я перед тобою, благословення і прокляття. І вибери життя, щоб жив ти і потомство твоє». (Повторення Закону 30:19)",
        arg3: "Любов без свободи — не любов. «Ми любимо Його, бо Він перший полюбив нас» (1 Івана 4:19). Бог хоче, щоб ми любили Його вільно, а не з примусу. Наша любов — це відповідь на Його благодать.",        example1: "Юда Іскаріот мав вибір. Коли Ісус сказав: «Один із вас видасть Мене» (Івана 13:21), це було попередження, а не наказ. Юда міг змінити своє рішення, але свідомо обрав зраду.",
        conclusion1: "Боже передбачення не скасовує нашої свободи. Ми справді вільні у своєму виборі, і саме ця свобода показує, кого ми любимо насправді: себе чи Бога.",
        finalCall: "Використовуй свою свободу мудро. Щодня обирай Божий шлях не через примус, а з любові та вдячності. У цьому — справжня свобода."
    },    en: {
        thesis: "Thesis",
        arguments: "Arguments",
        example: "Example",
        conclusion: "Conclusion",
        call: "Call to Action",
        mainQuestion: "Is one truly free if God has foreseen their path?",
        arg1: "Foreknowledge does not equal compulsion. God knows what will happen, but this doesn't mean He forces us to act. Knowledge of an event doesn't cause that event.",
        arg2: "The Bible affirms human responsibility. Scripture declares: \"I have set before you life and death, blessing and curse. Choose life, that you and your offspring may live.\" (Deuteronomy 30:19)",
        arg3: "Love without freedom isn't love. \"We love Him because He first loved us\" (1 John 4:19). God wants us to love Him freely, not by compulsion. Our love is a response to His grace.",        example1: "Judas had a choice. When Jesus said, \"One of you will betray me\" (John 13:21), it was a warning, not a command. Judas could have changed his mind, but consciously chose betrayal.",
        conclusion1: "Divine foreknowledge doesn't negate our freedom. We are truly free in our choices, and this freedom reveals whom we truly love: ourselves or God.",
        finalCall: "Use your freedom wisely. Choose God's way daily not out of compulsion, but from love and gratitude. This is true freedom."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const uaBtn = document.querySelector('[data-lang="ua"]');
    const enBtn = document.querySelector('[data-lang="en"]');

    uaBtn.addEventListener('click', () => setLanguage('ua'));
    enBtn.addEventListener('click', () => setLanguage('en'));

    setLanguage('ua');

    document.querySelectorAll('[data-scroll]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    document.querySelectorAll('.bible-quote').forEach(quote => {
        quote.addEventListener('click', () => {
            const bibleText = quote.nextElementSibling;
            
            if (bibleText.style.maxHeight) {
                bibleText.style.maxHeight = null;
            } else {
                bibleText.style.maxHeight = bibleText.scrollHeight + "px";
            }
            
            quote.classList.toggle('text-purple-700');
        });
    });
});