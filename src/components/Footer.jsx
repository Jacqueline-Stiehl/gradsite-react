//modeled after MinneGrowta
import { React, useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Modal from "react-modal";

const aboutContent = (
  <div>
    <h2>About This Site</h2>
    <p>Welcome to Danika's graduation website. Please browse through the school pictures, graduation pictures, and favorite things throughout her school years.</p>
    <p>Leave some inspirational words for Danika on the Messages page.</p>
  </div>
);

const contactContent = (
  <div>
    <h2>Contact Information</h2>
    <p>If you have any issues with this site, please contact me at:</p>
    <p>Email: salsajackie@yahoo.com</p>
    <p>Phone: +1 (651) 867-5309</p>
  </div>
);

const AboutModal = ({ isOpen, onClose, aboutContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About content"
      className="about-content"
      overlayClassName="modal-overlay"
    >
      <div>{aboutContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

const ContactModal = ({ isOpen, onClose, contactContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact content"
      className="contact-content"
      overlayClassName="modal-overlay"
    >
      <div>{contactContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

const quotes = [
  {
    text: "Success is loving life and daring to live it.",
    author: "Maya Angelou",
  },
  {
    text: "Your education is a dress rehearsal for a life that is yours to lead.",
    author: "Nora Ephron",
  },
  {
    text: "Accept no one's definition of your life, define yourself.",
    author: "Harvey Fierstein",
  },
  {
    text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    author: "Ferris Bueller, 'Ferris Bueller's Day Off'",
  },
  {
    text: "All dreams are within reach. All you have to do is keep moving towards them.",
    author: "Viola Davis",
  },
  {
    text: "You'll be on your way up! You'll be seeing great sights! You'll join the high fliers who soar to high heights.",
    author: "Dr. Suess, 'Oh, the Places You'll Go'",
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "Tonight / We are young / So, let's set the world on fire / We can burn brighter than the sun.",
    author: "Fun, 'We Are Young'",
  },
  {
    text: "It's something unpredictable, but in the end it's right / I hope you had the time of your life.",
    author: "Green Day, 'Good Riddance (Time of Your Life)'",
  },
  {
    text: "As we go on, remember / All the times we had together / And as our lives change / Come whatever / We will still be friends forever.",
    author: "Vitamin C, 'Graduation (Friends Forever)'",
  },
  {
    text: "I hope you never fear those mountains in the distance / Never settle for the path of least resistance",
    author: "Lee Ann Womack, 'I Hope You Dance'",
  },
  {
    text: "School's out for summer / School's out forever",
    author: "Alice Cooper, 'School's Out'",
  }
];

const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through quotes every 5 seconds
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [aboutModalContent, setAboutModalContent] = useState("");
  const [contactModalContent, setContactModalContent] = useState("");

  const openAboutModal = () => {
    setAboutModalContent(aboutContent);
    setIsAboutModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalContent(contactContent);
    setIsContactModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid >
        <div className="quote-container text-center">
          <p style={{ fontStyle: "italic", margin: 0 }}>"{currentQuote.text}" -{currentQuote.author}</p>
        </div>
          <div className="footer-content">
            <div className="footer-links">
              <Nav className="d-flex flex-row">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link 
                onClick={openAboutModal}
                    >About
                </Nav.Link>
                <Nav.Link 
                onClick={openContactModal} 
                    >Contact
                </Nav.Link>
              </Nav>
            </div>
          <div className="footer-info text-center">
            <span className="faded-text">&copy; Danika's Grad Site @2024</span>
          </div>
        </div>
      </Container>
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} aboutContent={aboutModalContent} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} contactContent={contactModalContent} />
    </footer>
  );
};

export default Footer;