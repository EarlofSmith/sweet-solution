// const categories = document.querySelector('.categories');
const categories = document.getElementById('category-list-group');
const productDiv = document.createElement('div')

const categoryEventHandler = async (e) => {

  const categoryId = e.target.dataset.id
  const response = await fetch(`/api/category/${categoryId}`, {
    method: 'GET', 
  });
  const json = await response.json();
  console.log(json);  

  // div.innerText = product.product_name;
  
}

categories.addEventListener('click', categoryEventHandler);



