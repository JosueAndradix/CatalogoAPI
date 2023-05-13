

const apiKey = '8iQRRld55447eki9fJyw0xESAOvOqGtxORa7DfrA';

function getCatalog() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=30`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const catalogElement = document.getElementById('catalog');
            catalogElement.innerHTML = '';

            data.forEach(item => {

                
                
                const card = document.createElement('div');
                card.style.background = 'black';
                card.style.color = '#ffffff';
                card.className = 'col-lg-4 col-md-6 mb-4'
                card.style.paddingTop = '20px';
                card.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
               
                
                
                const image = document.createElement('img');
                image.src = item.url;
                image.className = 'card-img-top';
                image.alt = item.title;
                
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                
                const title = document.createElement('h5');
                title.textContent = item.title;
                title.className = 'card-title';
                
                const explanation = document.createElement('p');
                explanation.textContent = item.explanation;
                explanation.className = 'card-text';
                explanation.style.textAlign = 'justify';
                
                cardBody.appendChild(title);
                cardBody.appendChild(explanation);
                
                card.appendChild(image);
                card.appendChild(cardBody);
                
                catalogElement.appendChild(card);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}