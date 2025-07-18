// JavaScript for JohnMatthew's AI-Powered Resume Website

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Switch to light theme');
        } else {
            themeIcon.className = 'fas fa-sun';
            themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        }
    }
    
    // AI Chatbot functionality
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const topicButtons = document.querySelectorAll('.topic-btn');
    
    // AI Knowledge Base
    const aiKnowledge = {
        experience: {
            title: "Work Experience",
            questions: [
                "What does JohnMatthew do as a Network Engineer?",
                "Tell me about his role at UC Berkeley D-Lab",
                "What are his main responsibilities?",
                "What technologies does he work with?"
            ],
            responses: {
                "network engineer": "JohnMatthew works as a Network Engineer at UC Berkeley, where he performs hands-on network support across campus. His responsibilities include replacing switches, restoring WiFi, configuring ports and IP addresses, and troubleshooting connectivity issues. He also utilizes Python/Bash scripts and conducts preventive maintenance on equipment.",
                "d-lab": "At UC Berkeley's D-Lab, JohnMatthew serves as an Undergraduate Technician providing cross-disciplinary services. He delivers in-depth consulting, advising, and access to staff support for software or infrastructure needs. He assists graduate students, faculty, and staff in advancing world-class research in data-intensive social sciences and humanities.",
                "responsibilities": "JohnMatthew's main responsibilities include: 1) Network administration and troubleshooting, 2) Python/Bash scripting for automation, 3) Technical support and consulting, 4) Research support for data-intensive projects, 5) Equipment maintenance and configuration.",
                "technologies": "JohnMatthew works with various technologies including: Python, Bash scripting, network administration tools, WiFi systems, switch configuration, IP addressing, and data science tools for research support."
            }
        },
        projects: {
            title: "Projects",
            questions: [
                "Tell me about the KeyQuest Game project",
                "What is the WordNet & NGram Viewer?",
                "What technologies were used?",
                "What are the key features?"
            ],
            responses: {
                "keyquest": "KeyQuest is a 2D tile-based world exploration game built in Java. It features customizable tiles and avatars, random room generation algorithms, and near-sight functionality for immersive gameplay. The project demonstrates strong algorithmic thinking and game development skills.",
                "wordnet": "The WordNet & NGram Viewer is a sophisticated data structure project where JohnMatthew developed a unique graph class in Java managing 80,000+ words and 400,000+ relationships. He created an NGram Viewer that displays word occurrences in large text corpora with interactive visualization.",
                "technologies": "JohnMatthew's projects use: Java for core development, Data Structures and Algorithms, Graph Theory, Web Development for visualization, and Game Development principles.",
                "features": "Key features include: Random room generation algorithms, Interactive data visualization, Graph-based word relationships, Customizable game elements, and Near-sight gameplay mechanics."
            }
        },
        skills: {
            title: "Skills",
            questions: [
                "What programming languages does he know?",
                "What are his data science skills?",
                "What tools and platforms does he use?",
                "What are his technical strengths?"
            ],
            responses: {
                "programming": "JohnMatthew is proficient in Python, SQL, and Java. He uses Python extensively for data science and automation, SQL for database management, and Java for software development projects.",
                "data science": "His data science skills include: Data Wrangling, Exploratory Data Analysis (EDA), A/B Testing, Causal Inference, Machine Learning with Pandas, Scikit-learn, TensorFlow, and PyTorch.",
                "tools": "JohnMatthew works with: Git for version control, Docker for containerization, Tableau for data visualization, Hadoop and Spark for big data processing, and various network administration tools.",
                "strengths": "His technical strengths include: Network Engineering, Data Science, Statistical Analysis, Research Support, Technical Consulting, and Cross-disciplinary Problem Solving."
            }
        },
        education: {
            title: "Education",
            questions: [
                "Where did he go to school?",
                "What is he studying at Georgia Tech?",
                "What was his undergraduate degree?",
                "What are his academic achievements?"
            ],
            responses: {
                "schools": "JohnMatthew completed his Data Science BA at UC Berkeley in 2025, and is currently an incoming MS student in Computer Science at Georgia Tech (2026). He also has an Economics AA from Fresno City College.",
                "georgia tech": "JohnMatthew is pursuing a Master's degree in Computer Science at Georgia Tech, starting in 2026. This represents his continued commitment to advancing his technical skills and knowledge.",
                "undergraduate": "JohnMatthew earned a Bachelor's degree in Data Science from UC Berkeley, where he developed strong analytical and technical skills. His degree focused on statistics, programming, and data-driven decision making.",
                "achievements": "Academic achievements include: UC Berkeley Data Science BA, Incoming Georgia Tech MS CS, Strong foundation in statistics and programming, and ongoing commitment to continuous learning."
            }
        },
        network: {
            title: "Network Engineering",
            questions: [
                "What does network engineering involve?",
                "What specific network tasks does he perform?",
                "How does he use automation?",
                "What are his network skills?"
            ],
            responses: {
                "network engineering": "Network engineering involves designing, implementing, and maintaining network infrastructure. JohnMatthew specializes in campus network support, including WiFi systems, switch configuration, and network troubleshooting.",
                "tasks": "His specific tasks include: Replacing network switches, Restoring WiFi connectivity, Configuring ports and IP addresses, Troubleshooting connectivity issues, Conducting preventive maintenance, and Collaborating with IT teams.",
                "automation": "JohnMatthew uses Python and Bash scripting to automate network tasks, including: Configuration management, Monitoring and alerting, Maintenance scheduling, and Performance optimization.",
                "skills": "His network engineering skills include: Network administration, WiFi systems, Switch configuration, IP addressing, Network troubleshooting, Python/Bash automation, and Technical documentation."
            }
        },
        personal_statement: {
            title: "Grad School & Motivation",
            questions: [
                "Why are you pursuing graduate study?",
                "What are your goals in the GT OMSCS program?",
                "What is your background in data science and engineering?",
                "What motivates you in AI and machine learning?",
                "What are your long-term career aspirations?"
            ],
            responses: {
                "graduate study": "JohnMatthew is pursuing graduate study through the UT Austin OMSCS program to deepen his understanding of artificial intelligence and machine learning, gain hands-on experience through advanced coursework and projects, and ultimately become a machine learning engineer who can contribute to meaningful real-world solutions.",
                "ut austin": "UT Austin's OMSCS program stands out to JohnMatthew for its academic rigor, affordability, and flexible online structure. As an Austin native, UT has always been his dream school.",
                "background": "JohnMatthew holds a B.A. in Data Science from UC Berkeley, with an emphasis in business analytics and core computer science topics. He has strong exposure to applied statistics, data engineering, and machine learning, and has worked in technical roles applying these skills in real-world settings.",
                "motivation": "He is motivated by a desire to fully understand how AI models are developed, deployed, and scaled, and to work on impactful, real-world problems. He values ethical and responsible AI development and wants to contribute to communities that share these values.",
                "career": "JohnMatthew's ultimate goal is to become a machine learning engineer and AI enthusiast, working on models to solve impactful, real-world problems in domains such as infrastructure, education, or the public sector."
            }
        }
    };
    
    // Handle topic button clicks
    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const topicData = aiKnowledge[topic];
            
            if (topicData) {
                // Remove active class from all buttons
                topicButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show example questions
                const questions = topicData.questions.join('\n• ');
                addMessage('ai', `Here are some example questions about ${topicData.title}:\n\n• ${questions}\n\nFeel free to ask any of these or ask something else!`);
            }
        });
    });
    
    // Handle chat input
    function handleChatInput() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            chatInput.value = '';
            
            // Process the message and generate response
            setTimeout(() => {
                const response = generateAIResponse(message);
                addMessage('ai', response);
            }, 500);
        }
    }
    
    // Send button click
    sendBtn.addEventListener('click', handleChatInput);
    
    // Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleChatInput();
        }
    });
    
    // Add message to chat
    function addMessage(type, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (type === 'ai') {
            avatar.innerHTML = '<i class="fas fa-robot"></i>';
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>';
        }
        
        contentDiv.textContent = content;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(contentDiv);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate AI response
    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check each topic for relevant responses
        for (const [topic, data] of Object.entries(aiKnowledge)) {
            for (const [keyword, response] of Object.entries(data.responses)) {
                if (lowerMessage.includes(keyword)) {
                    return response;
                }
            }
        }
        
        // Default responses for common questions
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! I'm JohnMatthew's AI assistant. I can help you learn about his experience, projects, skills, and education. What would you like to know?";
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            return "You can reach JohnMatthew at jm.garcia@berkeley.edu. He's also available for coffee chats - just click the 'Coffee Chat' button in the navigation!";
        }
        
        if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
            return "You can download JohnMatthew's full resume as a PDF by clicking the 'Resume PDF' button in his profile section. It contains detailed information about his experience as a Network Engineer at UC Berkeley, Undergraduate Technician at D-Lab, and his upcoming MS in Computer Science at Georgia Tech.";
        }
        
        return "That's an interesting question! While I'm trained on JohnMatthew's experience, I might not have specific information about that. Try asking about his work experience, projects, skills, education, or network engineering background. You can also click the topic buttons above for example questions!";
    }
    
    // Coffee Chat functionality
    const coffeeChatBtn = document.getElementById('coffeeChatBtn');
    const coffeeChatModal = new bootstrap.Modal(document.getElementById('coffeeChatModal'));
    const coffeeChatForm = document.getElementById('coffeeChatForm');
    const meetingDate = document.getElementById('meetingDate');
    const timeSlots = document.getElementById('timeSlots');
    
    // Coffee chat button click
    coffeeChatBtn.addEventListener('click', function() {
        window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1e6nCzwDW3RyNAj8F4M4xFZtwsfVkJicDc2tR4yjun_6qV45g5XAPV-ky6NbN8jeAg93p1oIFb', '_blank');
        // coffeeChatModal.show();
        // populateTimeSlots();
    });
    
    // Populate time slots
    function populateTimeSlots() {
        const slots = [
            '9:00 AM - 10:00 AM',
            '10:00 AM - 11:00 AM',
            '11:00 AM - 12:00 PM',
            '1:00 PM - 2:00 PM',
            '2:00 PM - 3:00 PM',
            '3:00 PM - 4:00 PM',
            '4:00 PM - 5:00 PM'
        ];
        
        timeSlots.innerHTML = '';
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.className = 'time-slot';
            slotDiv.textContent = slot;
            slotDiv.addEventListener('click', function() {
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                this.classList.add('selected');
            });
            timeSlots.appendChild(slotDiv);
        });
    }
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    meetingDate.min = today;
    
    // Handle coffee chat form submission
    coffeeChatForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const selectedTimeSlot = document.querySelector('.time-slot.selected');
        if (!selectedTimeSlot) {
            alert('Please select a time slot.');
            return;
        }
        const selectedTime = selectedTimeSlot.textContent;
        const [startTime, endTime] = selectedTime.split(' - ').map(t => t.trim());
        
        const formData = {
            date: meetingDate.value,
            start_time: convertTo24Hour(startTime),
            end_time: convertTo24Hour(endTime),
            topic: document.getElementById('meetingTopic').value,
            email: document.getElementById('meetingEmail').value
        };
        
        try {
            const response = await fetch('/schedule', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                alert(`Coffee chat scheduled!\n\nA calendar invite has been created. View event: ${result.event_link}`);
            } else {
                alert('There was an error scheduling your coffee chat. Please try again.');
            }
        } catch (error) {
            alert('There was an error connecting to the server. Please try again.');
        }
        
        // Reset form and close modal
        coffeeChatForm.reset();
        coffeeChatModal.hide();
    });

    // Helper to convert 12-hour time to 24-hour format (for Google Calendar)
    function convertTo24Hour(timeStr) {
        // Example: '9:00 AM' or '1:00 PM'
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':');
        if (modifier === 'PM' && hours !== '12') {
            hours = String(parseInt(hours, 10) + 12);
        }
        if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
        return `${hours.padStart(2, '0')}:${minutes}`;
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.8)';
        }
    }
    
    window.addEventListener('scroll', updateNavbarBackground);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe cards and timeline items
    const animatedElements = document.querySelectorAll('.card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    const debouncedNavUpdate = debounce(updateActiveNavLink, 10);
    const debouncedNavbarUpdate = debounce(updateNavbarBackground, 10);
    
    window.addEventListener('scroll', debouncedNavUpdate);
    window.addEventListener('scroll', debouncedNavbarUpdate);
    
    // Initialize
    updateActiveNavLink();
    updateNavbarBackground();
    
    console.log('JohnMatthew AI-Powered Resume Website loaded successfully!');
});

// Utility functions
const Utils = {
    // Smooth scroll to element
    scrollToElement: function(elementId, offset = 0) {
        const element = document.getElementById(elementId);
        if (element) {
            const position = element.offsetTop - offset;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format date
    formatDate: function(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

// Export for potential future use
window.ResumeWebsite = {
    Utils: Utils
};
