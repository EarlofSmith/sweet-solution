const categories = document.querySelector('.categories');
const productDiv = document.createElement('div')

const categoryEventHandler = async (e) => {
  // const categoryGroup = document.querySelector('#categoryGroup');
  // const categories = categoryGroup.children();
  // categories.forEach((category) => {console.log(category)})
  const categoryId = e.target.dataset.id
  const response = await fetch(`/api/category/${categoryId}`);
  console.log(response); 

  div.innerText = product.product_name;
  
}

categories.addEventListener('click', categoryEventHandler);



