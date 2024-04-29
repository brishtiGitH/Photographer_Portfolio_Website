const testimony_person = document.querySelector('.testimony-person h1')
const testimony_img = document.querySelector('.testimony-img')
const testimony_para = document.querySelector('.testimony-para p')
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const leftCounter = document.querySelector('.testimony-slider span:nth-child(1)')
const rightCounter = document.querySelector('.testimony-slider span:nth-child(3)')



// Testimonials slider
const testimonies = [
    {
        id: 1,
        name: "Ben",
        desc: "Meeting Rouisse was a pleasure from the very beginning. She is so articulate about her work and deeply motivated. She helped me choose my best profile and her attention to details is quite awe inspiring.",
        src: 'https://images.unsplash.com/photo-1517202383675-eb0a6e27775f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id: 2,
        name: "Alex",
        desc: " They don't just take pictures; they capture the essence of who you are. The shoot was fun and energetic, and the final portraits were nothing short of stunning. I couldn't be happier with the results. My friends and family are blown away by how unique and vibrant each photo is. I highly recommend them for anyone looking to make a bold statement with their portraits.",
        src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        id: 3,
        name: "Rita",
        desc: "Their creative direction and energy are infectious, turning a simple shoot into an exciting experience. I was amazed at how they managed to bring out the best in me while still keeping the shoot relaxed and fun. ",
        src: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

];

let pointer = 0;
let current;

// let current = testimonies[pointer];


/* testimony_person.textContent = current.name;
testimony_img.style.backgroundImage = `url(${current.src})`
testimony_para.textContent = current.desc
leftCounter.textContent = current.id */

function changeSlider(getId) {
    current = testimonies.find((item) => { return item.id === getId })
    testimony_person.textContent = current.name;
    testimony_img.style.backgroundImage = `url(${current.src})`
    testimony_para.textContent = current.desc
    leftCounter.textContent = current.id

}
changeSlider(testimonies[pointer].id);

rightArrow.addEventListener('click', () => {
    pointer++;
    if (pointer === 3) {
        pointer = 0;
    }
    changeSlider(testimonies[pointer].id);

})
leftArrow.addEventListener('click', () => {
    pointer--;
    if (pointer === -1) {
        pointer = 2;
    }
    changeSlider(testimonies[pointer].id);

})