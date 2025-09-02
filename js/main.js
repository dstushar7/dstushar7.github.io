(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

// Load site content dynamically from data.json
fetch("data/data.json")
    .then(res => res.json())
    .then(data => {
        renderAbout(data.about);
        renderSkills(data.skills);
        renderEducation(data.education);
        renderExperience(data.experience);
        renderServices(data.services);
        renderPortfolio(data.portfolio);
        renderTestimonials(data.testimonials);
        renderBlogs(data.blogs);

        // Update typed text dynamically from JSON
        if (data.about.tagline && data.about.tagline.length > 0) {
            var typed = new Typed('.typed-text-output', {
                strings: data.about.tagline,
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
    })
    .catch(error => console.error("Error loading data.json:", error));

// About Rendering Function
function renderAbout(about) {
    document.getElementById("about-container").innerHTML = `
    <div class="col-lg-5 pb-4 pb-lg-0">
      <img class="img-fluid rounded w-100" src="${about.aboutImage}" alt="">
    </div>
    <div class="col-lg-7">
      <h3 class="mb-4">${about.title}</h3>
      <p>${about.description}</p>
      <div class="row mb-3">
        <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">${about.name}</span></h6></div>
        <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">${about.email}</span></h6></div>
        <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">${about.birthday}</span></h6></div>
        <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">${about.freelance}</span></h6></div>
      </div>
      <a href="${about.linkedin}" target="_blank" class="btn btn-outline-primary mr-4">Hire Me</a>
    </div>
  `;
}

// Render Skills Section
function renderSkills(skills) {
    let half = Math.ceil(skills.length / 2);
    let col1 = skills.slice(0, half);
    let col2 = skills.slice(half);

    function skillMarkup(skill) {
        return `
      <div class="skill mb-4">
        <div class="d-flex justify-content-between">
          <h6 class="font-weight-bold">
            <i class="${skill.icon} mr-2"></i> ${skill.name}
          </h6>
          <h6 class="font-weight-bold">${skill.level}%</h6>
        </div>
        <div class="progress">
            <div class="progress-bar ${skill.color}" role="progressbar" 
                aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"
                style="width: ${skill.level}%">
            </div>
        </div>
      </div>
    `;
    }

    document.getElementById("skills-container").innerHTML = `
    <div class="col-md-6">${col1.map(skill => skillMarkup(skill)).join("")}</div>
    <div class="col-md-6">${col2.map(skill => skillMarkup(skill)).join("")}</div>
  `;
}

// Render Education Section
function renderEducation(education) {
    let eduHTML = `
    <h3 class="mb-4">My Education</h3>
    <div class="border-left border-primary pt-2 pl-4 ml-2">
      ${education.map(e => `
        <div class="position-relative mb-4">
          <i class="far fa-dot-circle text-primary position-absolute" 
             style="top: 2px; left: -32px;"></i>
          <h5 class="font-weight-bold mb-1">${e.degree}</h5>
          <p class="mb-2">
            <strong>
              <a href="${e.institutionLink || '#'}" target="_blank">${e.institution}</a>
            </strong> | <small>${e.period}</small>
          </p>
          <p>${e.description}</p>
        </div>
      `).join("")}
    </div>
  `;
    document.getElementById("education-container").innerHTML = eduHTML;
}

// Render Experience Section
function renderExperience(experiences) {
    let expHTML = `
    <h3 class="mb-4">My Experience</h3>
    <div class="border-left border-primary pt-2 pl-4 ml-2">
      ${experiences.map(exp => `
        <div class="position-relative mb-4">
          <i class="far fa-dot-circle text-primary position-absolute" 
             style="top: 2px; left: -32px;"></i>
          <h5 class="font-weight-bold mb-1">${exp.role}</h5>
          <p class="mb-2">
            <strong>
              <a href="${exp.companyLink || '#'}" target="_blank">${exp.company}</a>
            </strong>
            ${exp.parentCompany ?
            ` <small>(Sister concern of <a href="${exp.parentCompanyLink || '#'}" target="_blank">${exp.parentCompany}</a>)</small>`
            : ""}
            | <small>${exp.period}</small>
          </p>
          <p>${exp.description}</p>
        </div>
      `).join("")}
    </div>
  `;
    document.getElementById("experience-container").innerHTML = expHTML;
}

// Render Service Section
function renderServices(services) {
    const container = document.getElementById("services-container");
    container.innerHTML = services.map(service => `
    <div class="col-lg-4 col-md-6 text-center mb-5">
      <div class="d-flex align-items-center justify-content-center mb-4">
        <i class="fa fa-2x ${service.icon} service-icon bg-primary text-white mr-3"></i>
        <h4 class="font-weight-bold m-0">${service.title}</h4>
      </div>
      <p>${service.description}</p>
    </div>
  `).join("");
}

// Render Portfolio Section
function renderPortfolio(portfolio) {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = portfolio.map((p) => `
    <div class="col-lg-4 col-md-6 mb-4 portfolio-item ${p.category}">
      <div class="position-relative overflow-hidden mb-2">
        <img class="img-fluid rounded w-100" src="${p.image}" alt="">
        <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
          <a href="${p.image}" data-lightbox="portfolio">
            <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("");

    // re-init isotope after JS inject
    $('.portfolio-container').isotope('reloadItems').isotope();
}

// Render Testimonials Section
function renderTestimonials(testimonials) {
    const container = document.getElementById("testimonial-container");
    container.innerHTML = testimonials.map(t => `
    <div class="text-center">
      <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
      <h4 class="font-weight-light mb-4">"${t.quote}"</h4>
      <img class="img-fluid rounded-circle mx-auto mb-3" src="${t.image}" style="width:80px; height:80px;">
      <h5 class="font-weight-bold m-0">${t.client}</h5>
      <span>${t.profession}</span>
    </div>
  `).join("");

    // re-init owlCarousel since content is dynamic
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
}

// Render Blog Section
function renderBlogs(blogs) {
    const container = document.getElementById("blog-container");
    container.innerHTML = blogs.map(b => {
        const d = new Date(b.date);
        return `
      <div class="col-lg-4 mb-5">
        <div class="position-relative mb-4">
          <img class="img-fluid rounded w-100" src="${b.image}" alt="">
          <div class="blog-date">
            <h4 class="font-weight-bold mb-n1">${d.getDate().toString().padStart(2, '0')}</h4>
            <small class="text-white text-uppercase">${d.toLocaleString('default', { month: 'short' })}</small>
          </div>
        </div>
        <h5 class="font-weight-medium mb-4">${b.title}</h5>
        <a class="btn btn-sm btn-outline-primary py-2" href="${b.url}" target="_blank">Read More</a>
      </div>
    `;
    }).join("");
}