document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");
  
    const projectData = {
      pos: {
        title: "Web-based POS System",
        image: "img/dummy-thumbnail.jpg",
        description: "Built with PHP, MySQL, and JavaScript. Includes user authentication, order processing, sales reports, and a kitchen display system.",
        link: "https://github.com/cristiannngrey/pos-system"
      },
      portfolio: {
        title: "Simple Portfolio Site",
        image: "img/dummy-thumbnail.jpg",
        description: "A clean and minimalist personal site to showcase projects and provide contact info.",
        link: "https://github.com/cristiannngrey/portfolio-site"
      },
      canva: {
        title: "Marketing Assets",
        image: "img/dummy-thumbnail.jpg",
        description: "Social media graphics and promotional materials designed using Canva.",
        link: "#"
      }
    };
  
    document.querySelectorAll(".project-item").forEach(item => {
      item.addEventListener("click", () => {
        const key = item.dataset.project;
        const data = projectData[key];
  
        modalBody.innerHTML = `
          <img src="${data.image}" alt="${data.title}" />
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <a href="${data.link}" target="_blank">View Project</a>
        `;
        modal.style.display = "block";
      });
    });
  
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  
  function openModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "block";
  }
  
  function closeModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "none";
  }
  
  // Optional: Close modal on outside click
  window.addEventListener("click", function (e) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

//Fix close button on Modal
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("close")) {
      const modal = e.target.closest(".modal");
      if (modal) modal.style.display = "none";
    }
  });
  
  