document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other open dropdowns first
      document.querySelectorAll('.dropdown.active').forEach(d => {
        if (d !== dropdown) d.classList.remove('active');
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
      btn.setAttribute('aria-expanded', dropdown.classList.contains('active'));
    });
  });
  
  // Close when clicking outside
  document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdown-btn').setAttribute('aria-expanded', 'false');
    });
  });
});