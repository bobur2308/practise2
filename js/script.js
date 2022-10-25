'use strict'
document.addEventListener("DOMContentLoaded",()=>{
  const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list'),
  addForm = document.querySelector("form.add"),
  inputVal = addForm.querySelector(".adding__input"),
  checkbox = addForm.querySelector("[type='checkbox']")

  const seriesDB = {
    series: [
      'Omar',
      'The Final Legacy',
      'Ertugrul',
      'Magnificent Century',
      'The Great Seljuks: Guardians...',
    ],
  }
  addForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    let newSerie = inputVal.value;
    const box = checkbox.checked;
    if (newSerie){
      if(newSerie.length >18){
        newSerie = `${newSerie.substring(0, 18)}...`
      }
      seriesDB.series.push(newSerie)
      seriesDB.series.sort()
      if(box){
        console.log("Sevimli seriallarga qo'shildi");
      }
    }
    
    createSeriesList(seriesDB.series,seriesList)
    event.target.reset()
  })
  const deleteAdv = ()=>{
    adv.forEach((item) => {
      item.remove()
    })
  }
  const changes = ()=>{
    genre.textContent = "Hello world !"
    wrapper.style.backgroundImage = 'url("img/1.jpg")'
  }
  
  function createSeriesList(series,parent){
    parent.innerHTML = ''

    series.forEach((item, idx) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${idx + 1} ${item}
          <div class="delete"></div>
        </li>
      `
    })
    document.querySelectorAll('.delete').forEach((trash, idx) => {
      trash.addEventListener('click', () => {
        trash.parentElement.remove()
        seriesDB.series.splice(idx, 1)
        createSeriesList(series, parent)
      })
    })
  }

  seriesDB.series.sort()
  deleteAdv();
  changes()
  createSeriesList(seriesDB.series,seriesList)
})
