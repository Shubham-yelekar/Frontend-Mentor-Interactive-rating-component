const ratingCard = document.querySelector('.rating-card');
const thankyouCard = document.querySelector('.thankyou')
const submitBtn = document.getElementById('submit')
const rateAgainBtn = document.getElementById('rate-again')
const rating = document.getElementById('rating-star')
const rates = document.querySelectorAll('.btn')

submitBtn.addEventListener('click', () => {
    thankyouCard.classList.remove('hidden');
    ratingCard.classList.add('hidden')
})

rateAgainBtn.addEventListener('click', () => {
    thankyouCard.classList.add('hidden');
    ratingCard.classList.remove('hidden')
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})