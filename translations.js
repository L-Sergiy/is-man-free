const translations = {
    ua: {
        thesis: "Теза",
        arguments: "Аргументи",
        example: "Приклад",
        conclusion: "Висновок",
        call: "Заклик",
        mainQuestion: "Чи справді людина вільна, якщо Бог передбачив її шлях?",
        arg1: "Передбачення не дорівнює примусу. Бог знає, що станеться, але це не означає, що Він змушує людину діяти певним чином. Знання про щось не означає спричинення цього.",
        arg2: "Біблія підтверджує людську відповідальність. У Святому Письмі неодноразово сказано, що кожен відповідальний за свої вчинки.",
        bibleQuote: "Ось, Я сьогодні дав перед тобою життя і добро, і смерть та зло… Обери життя…",
        bibleSource: "(Повторення Закону 30:15-19)",
        arg3: "Любов без свободи — не любов. Бог хоче, щоб люди любили Його вільно. Примус до любові суперечить природі Бога, тому Він створив людину з вільною волею, навіть знаючи, як вона скористається нею.",
        example1: "Юда Іскаріот мав вибір не зраджувати Ісуса. Хоч Ісус передбачив зраду, це не звільняло Юду від відповідальності. Його рішення було вільним, а наслідки — справедливими.",
        conclusion1: "Людина справді має свободу, попри Боже всевідання, бо Бог дав їй здатність обирати між добром і злом, щоб любов і послух були щирими.",
        finalCall: "Скористайся даром свободи для того, щоб щодня свідомо обирати Бога, Його Слово та Його правду — бо саме в цьому полягає справжня свобода."
    },
    en: {
        thesis: "Thesis",
        arguments: "Arguments",
        example: "Example",
        conclusion: "Conclusion",
        call: "Call",
        mainQuestion: "Is man truly free if God has foreseen his path?",
        arg1: "Foreknowledge does not equal coercion. God knows what will happen, but this doesn't mean He forces people to act in certain ways. Knowledge of something doesn't cause it.",
        arg2: "The Bible confirms human responsibility. Scripture repeatedly states that everyone is responsible for their actions.",
        bibleQuote: "See, I set before you today life and prosperity, death and destruction... Now choose life",
        bibleSource: "(Deuteronomy 30:15-19)",
        arg3: "Love without freedom is not love. God wants people to love Him freely. Forced love contradicts God's nature, so He created humans with free will, even knowing how they would use it.",
        example1: "Judas Iscariot had a choice not to betray Jesus. Although Jesus foresaw the betrayal, this did not free Judas from responsibility. His decision was free, and the consequences were just.",
        conclusion1: "Humans truly have freedom, despite God's omniscience, because God gave them the ability to choose between good and evil, so that love and obedience would be genuine.",
        finalCall: "Use the gift of freedom to consciously choose God every day, His Word and His truth - because this is where true freedom lies."
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

    // Set default language
    setLanguage('ua');

    // Add smooth scrolling navigation
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

    // Add accordion functionality
    document.querySelectorAll('.bible-quote').forEach(quote => {
        quote.addEventListener('click', () => {
            const bibleText = quote.nextElementSibling;
            
            // Toggle the max-height
            if (bibleText.style.maxHeight) {
                bibleText.style.maxHeight = null;
            } else {
                bibleText.style.maxHeight = bibleText.scrollHeight + "px";
            }
            
            // Add visual feedback
            quote.classList.toggle('text-purple-700');
        });
    });
});
