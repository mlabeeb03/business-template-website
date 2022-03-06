const portfolio = document.querySelector('.portfolio');
for(let i=0; i<10; i++){
    portfolio.innerHTML += `<img src="https://source.unsplash.com/random/20${i}x200" alt=""></img>`;
}