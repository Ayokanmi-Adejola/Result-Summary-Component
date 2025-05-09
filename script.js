document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, loading data...');

  // Hardcoded data to avoid CORS issues when opening directly from file system
  const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

  console.log('Data loaded:', data);
  const summaryItemsContainer = document.querySelector('.summary-items');

  if (!summaryItemsContainer) {
    console.error('Could not find .summary-items container');
    return;
  }

  // Create HTML for each summary item
  data.forEach(item => {
    console.log('Creating item for:', item.category);
    const itemElement = document.createElement('div');
    itemElement.className = `summary-item ${item.category.toLowerCase()}`;
    itemElement.style.backgroundColor = getCategoryColor(item.category, true);

    itemElement.innerHTML = `
      <div class="summary-item-title" style="color: ${getCategoryColor(item.category)}">
        <img src="${item.icon}" alt="${item.category} icon">
        <span>${item.category}</span>
      </div>
      <div class="summary-item-score">
        ${item.score} <span>/ 100</span>
      </div>
    `;

    summaryItemsContainer.appendChild(itemElement);
  });
});

// Helper function to get color based on category
function getCategoryColor(category, isBackground = false) {
  const colors = {
    'Reaction': isBackground ? 'var(--light-red-bg)' : 'var(--light-red)',
    'Memory': isBackground ? 'var(--orangey-yellow-bg)' : 'var(--orangey-yellow)',
    'Verbal': isBackground ? 'var(--green-teal-bg)' : 'var(--green-teal)',
    'Visual': isBackground ? 'var(--cobalt-blue-bg)' : 'var(--cobalt-blue)'
  };

  return colors[category] || '';
}
