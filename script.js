// script.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalForm = document.getElementById('modalForm');
  const modalTitle = document.getElementById('modalTitle');

  // Sidebar toggle
  toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('withSidebarOpen');
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      themeToggle.textContent = 'Light';
    } else {
      themeToggle.textContent = 'Dark';
    }
  });

  // Modal controls
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Form submission handler
  modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    alert(`Added: ${title} - ${content}`);
    modal.style.display = 'none';
  });

  // Navigation
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.sidebar-nav li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href').substring(1);
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });

  // Timer functionality
  const timerContainer = document.createElement('div');
  timerContainer.id = 'timer';
  timerContainer.innerHTML = '<h2>Timer</h2><p id="time">00:00:00</p>';
  document.body.appendChild(timerContainer);

  let time = 0;
  let interval = null;

  function startTimer() {
    interval = setInterval(() => {
      time++;
      updateTimeDisplay();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }

  function updateTimeDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.getElementById('time').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2,
'0')}`;
  }

  // Chart example
  const ctx = document.createElement('canvas');
  ctx.id = 'myChart';
  document.body.appendChild(ctx);

  const chartData = {
    labels: ['Math', 'Physics', 'Chemistry'],
    datasets: [{
      label: 'Marks',
      data: [85, 90, 78],
      backgroundColor: ['#4e73df', '#1cc88e', '#36b9cc'],
    }]
  };

  const config = {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, config);

  // Add dynamic tables with example data
  function addTableData(tableId, columns, rows) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    rows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  addTableData('expenseTable', ['Title', 'Amount', 'Date'], [
    ['Groceries', '$20', '2025-04-01'],
    ['Books', '$50', '2025-04-02'],
  ]);

  addTableData('noteTable', ['Title', 'Content'], [
    ['Project Plan', 'Start research and outline'],
    ['Quiz Prep', 'Review all chapters'],
  ]);

  addTableData('cgpaTable', ['Subject', 'Grade'], [
    ['Math', 'A'],
    ['Physics', 'B+'],
  ]);

  addTableData('attendanceTable', ['Subject', 'Present', 'Absent'], [
    ['Math', '20', '2'],
    ['Physics', '18', '4'],
  ]);

  // Example timer usage
  startTimer();
  setTimeout(() => {
    stopTimer();
    alert('Timer stopped after 10 seconds');
  }, 10000);
});