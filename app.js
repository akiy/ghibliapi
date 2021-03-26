const showdata = function(datas) {
    const app = document.querySelector(".app");
    datas.map( function(data) {
        let card = document.createElement('div');
        card.setAttribute('class', 'card')

        let title = document.createElement('h1');
        title.setAttribute('class', 'card__title');

        let cardModal = document.createElement('div');
        cardModal.setAttribute('class', 'card__modal');

        let cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card__content');

        let original_title = document.createElement('p');
        original_title.setAttribute('class', 'card__original-title');
        let description = document.createElement('p');
        description.setAttribute('class', 'card__description');

        let score = document.createElement('p');
        score.setAttribute('class', 'card__score');


        title.textContent = data.title;
        original_title.textContent = data.original_title;
        description.textContent = data.description;
        score.textContent = `Score: ${data.rt_score}`;

        cardContent.appendChild(original_title);
        cardContent.appendChild(description);
        cardContent.appendChild(score)

        cardModal.appendChild(cardContent);
        
        card.appendChild(title);
        card.appendChild(cardModal)
        app.appendChild(card);
    });  
}


fetch("https://ghibliapi.herokuapp.com/films/")
    .then( function(response) {
       return response.json();
    })
    .then( function(data) {

        showdata(data);

        // let modal =   document.querySelectorAll('.card__modal');

        document.querySelectorAll('.card__title').forEach(function(cardtitle){
            cardtitle.addEventListener('click', function(e){
                console.log(e.target.nextSibling.firstChild);
                e.target.nextSibling.classList.add('visible');
                e.target.nextSibling.firstChild.classList.add('show');
            });
        });

        document.addEventListener('click', function(e){
            if (e.target.getAttribute('class') === 'card__modal visible') {
                e.target.classList.remove('visible');
            }
        });

    })
    .catch( function(error) {
     console.log(error);
    });


