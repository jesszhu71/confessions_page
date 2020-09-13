var currentIndex = 0;
let data, response;
getData();
async function getData() 
{
       response = await fetch('/api');
       data = await response.json();   
      item = data[currentIndex];
      document.getElementById('title').textContent = item.title;
      document.getElementById('college').textContent = item.college;   
      document.getElementById('post').textContent = item.post;   
     }

function plusDivs(n) {
  if(currentIndex == 0 && n<0)
  { 
    //do nothing
  }
  else
  {
    currentIndex += n;
    item = data[currentIndex];
      document.getElementById('title').textContent = item.title;
      document.getElementById('college').textContent = item.college;   
      document.getElementById('post').textContent = item.post;   
  }

}

