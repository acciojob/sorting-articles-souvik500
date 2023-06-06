//your code here

//your code here
// Array of band names
let bandNames = ['The Beatles', 'Metallica', 'Red Hot Chili Peppers', 'Led Zeppelin', 'Aerosmith'];

// Function to remove articles from band names
function removeArticles(name) {
  // Regular expression to match articles at the beginning of the name
  const articleRegex = /^(a |an |the )/i;
  // Removing articles and returning the modified name
  return name.replace(articleRegex, '');
}

// Sorting band names in lexicographic order (excluding articles)
bandNames.sort(function(a, b) {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Accessing the <ul> element by its ID
const bandList = document.getElementById('band');

// Populating the <ul> with sorted band names
bandNames.forEach(function(name) {
  // Creating a new <li> element
  const listItem = document.createElement('li');
  // Setting the band name as the text content of the <li> element
  listItem.textContent = name;
  // Appending the <li> element to the <ul> element
  bandList.appendChild(listItem);
});