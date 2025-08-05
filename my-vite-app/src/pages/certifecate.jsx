import React, { useState } from 'react';
import { Shield, Award, CheckCircle, ExternalLink, Download, Eye, Calendar, MapPin, ArrowLeft, Menu, X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import certifacte from '../assets/Keifna   JO300725D.pdf'; // Replace with your actual PDF file path
const KifnaCertificatePage = () => {
  const [showFullCertificate, setShowFullCertificate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pdfZoom, setPdfZoom] = useState(1);

  const certificateData = {
    company: "Keifna Food Industries",
    standard: "ISO 22000:2018",
    registrationNumber: "JO300725D",
    issuingBody: "Infinity Cert International",
    location: "Amman - Muqablain/Haram Ibn Hayyan Street / next to Khalid bin Al-Walid Mosque, JORDAN",
    initialRegistration: "30 July 2025",
    issueDate: "30 July 2025",
    expiryDate: "29 July 2026",
    recertificationBefore: "29 July 2028",
    category: "Category C - Subcategory CIV: Processing of ambient Stable Products",
    scope: "Production of Ready-Made Dough, Pastry Products, ice cream powder, Powder stabilizers, instant Cold drinks powder, Instant Hot drinks powder, Chocolate dough, Chocolate sauces, Liquid chocolate and Food Flavors.",
    verificationUrls: [
      "www.infinitycert.com",
      "www.iafcertsearch.org"
    ]
  };

  // In a real implementation, you would replace this with your actual PDF file path
  const certificatePdfUrl = certifacte; // Replace with your actual PDF path

  const handleDownloadPdf = () => {
    // In a real implementation, this would trigger the PDF download
    const link = document.createElement('a');
    link.href = certificatePdfUrl;
    link.download = 'Kifna-ISO22000-Certificate.pdf';
    link.click();
  };

  const zoomIn = () => setPdfZoom(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setPdfZoom(prev => Math.max(prev - 0.25, 0.5));

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#27001F' }}>
      
      {/* Header */}
      <header className="relative z-40">
        <nav className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <h1 
                className="text-2xl md:text-3xl font-bold"
                style={{ 
                  color: '#FFF6E4',
                  fontFamily: 'Georgia, serif'
                }}
              >
                Kifna
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                className="flex items-center text-base font-medium transition-colors duration-300 hover:opacity-80"
                style={{ color: '#F2B2A8' }}
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </button>
              <button 
                className="text-base font-medium transition-colors duration-300"
                style={{ color: '#FFF6E4' }}
                onMouseEnter={(e) => e.target.style.color = '#F2B2A8'}
                onMouseLeave={(e) => e.target.style.color = '#FFF6E4'}
              >
                About
              </button>
              <button 
                className="text-base font-medium transition-colors duration-300"
                style={{ color: '#FFF6E4' }}
                onMouseEnter={(e) => e.target.style.color = '#F2B2A8'}
                onMouseLeave={(e) => e.target.style.color = '#FFF6E4'}
              >
                Products
              </button>
              <button 
                className="text-base font-medium transition-colors duration-300"
                style={{ color: '#FFF6E4' }}
                onMouseEnter={(e) => e.target.style.color = '#F2B2A8'}
                onMouseLeave={(e) => e.target.style.color = '#FFF6E4'}
              >
                Gallery
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: '#FFF6E4' }}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div 
              className="md:hidden mt-6 py-6 px-4 rounded-lg"
              style={{ backgroundColor: 'rgba(255, 246, 228, 0.1)' }}
            >
              <div className="flex flex-col space-y-4">
                <button 
                  className="flex items-center text-base font-medium transition-colors duration-300"
                  style={{ color: '#F2B2A8' }}
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to Home
                </button>
                <button 
                  className="text-left text-base font-medium transition-colors duration-300"
                  style={{ color: '#FFF6E4' }}
                >
                  About
                </button>
                <button 
                  className="text-left text-base font-medium transition-colors duration-300"
                  style={{ color: '#FFF6E4' }}
                >
                  Products
                </button>
                <button 
                  className="text-left text-base font-medium transition-colors duration-300"
                  style={{ color: '#FFF6E4' }}
                >
                  Gallery
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span 
                className="inline-block text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-sm"
                style={{ 
                  color: '#27001F',
                  backgroundColor: '#F2B2A8',
                  letterSpacing: '0.2em'
                }}
              >
                Certifications
              </span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
              style={{ 
                color: '#FFF6E4',
                fontFamily: 'Georgia, serif'
              }}
            >
              ISO 22000:2018 Certificate
            </h1>
            
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: '#F2B2A8', opacity: 0.9 }}
            >
              Our internationally recognized food safety management system certification, validating our commitment to the highest standards of quality and safety.
            </p>
          </div>

          {/* Certificate Info Bar */}
          <div 
            className="rounded-xl p-6 mb-8 flex flex-col lg:flex-row items-center justify-between"
            style={{ 
              backgroundColor: 'rgba(255, 246, 228, 0.05)',
              border: '1px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            <div className="flex items-center mb-4 lg:mb-0">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: '#DA2917' }}
              >
                <Shield size={20} style={{ color: '#FFF6E4' }} />
              </div>
              <div>
                <h3 
                  className="text-lg font-semibold"
                  style={{ color: '#FFF6E4' }}
                >
                  Certificate Registration: {certificateData.registrationNumber}
                </h3>
                <p style={{ color: '#F2B2A8', opacity: 0.8 }}>
                  Valid until {certificateData.expiryDate}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div 
                className="flex items-center px-3 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  color: '#22c55e'
                }}
              >
                <CheckCircle size={16} className="mr-2" />
                Verified & Valid
              </div>
              
              <button
                onClick={handleDownloadPdf}
                className="flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#DA2917',
                  color: '#FFF6E4'
                }}
              >
                <Download size={16} className="mr-2" />
                Download
              </button>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ 
              backgroundColor: 'rgba(255, 246, 228, 0.02)',
              border: '2px solid rgba(255, 246, 228, 0.1)'
            }}
          >
            {/* PDF Viewer Controls */}
            <div 
              className="flex items-center justify-between p-4 border-b"
              style={{ 
                backgroundColor: 'rgba(255, 246, 228, 0.05)',
                borderColor: 'rgba(255, 246, 228, 0.1)'
              }}
            >
              <div className="flex items-center space-x-2">
                <Award size={20} style={{ color: '#DA2917' }} />
                <span 
                  className="font-medium"
                  style={{ color: '#FFF6E4' }}
                >
                  ISO 22000:2018 Food Safety Management Certificate
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={zoomOut}
                  className="p-2 rounded-lg transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 246, 228, 0.1)',
                    color: '#FFF6E4'
                  }}
                  disabled={pdfZoom <= 0.5}
                >
                  <ZoomOut size={16} />
                </button>
                
                <span 
                  className="text-sm px-3 py-1 rounded"
                  style={{ 
                    backgroundColor: 'rgba(255, 246, 228, 0.1)',
                    color: '#FFF6E4'
                  }}
                >
                  {Math.round(pdfZoom * 100)}%
                </span>
                
                <button
                  onClick={zoomIn}
                  className="p-2 rounded-lg transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 246, 228, 0.1)',
                    color: '#FFF6E4'
                  }}
                  disabled={pdfZoom >= 3}
                >
                  <ZoomIn size={16} />
                </button>
                
                <button
                  onClick={() => setShowFullCertificate(true)}
                  className="flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(255, 246, 228, 0.1)',
                    color: '#FFF6E4'
                  }}
                >
                  <Eye size={16} className="mr-2" />
                  Full Screen
                </button>
              </div>
            </div>

            {/* PDF Display Area */}
            <div 
              className="relative bg-white p-8 flex items-center justify-center"
              style={{ minHeight: '800px' }}
            >
              {/* PDF Embed - In real implementation, replace with actual PDF */}
              <div 
                className="w-full max-w-4xl transition-transform duration-300 shadow-lg"
                style={{ transform: `scale(${pdfZoom})` }}
              >
                {/* Placeholder for PDF - In real implementation, use iframe or PDF.js */}
                <iframe
                  src={`${certificatePdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="100%"
                  height="600"
                  style={{ 
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                  title="ISO 22000:2018 Certificate"
                />
                
                {/* Fallback content if PDF doesn't load */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg"
                  style={{ 
                    display: 'none' // This would show if iframe fails
                  }}
                >
                  <div className="text-center p-8">
                    <Award size={48} className="mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      Certificate Preview
                    </h3>
                    <p className="text-gray-600 mb-4">
                      To display your PDF certificate, replace the iframe src with your actual PDF file path.
                    </p>
                    <div className="text-left bg-gray-50 p-4 rounded text-sm text-gray-700">
                      <p><strong>Company:</strong> {certificateData.company}</p>
                      <p><strong>Standard:</strong> {certificateData.standard}</p>
                      <p><strong>Registration:</strong> {certificateData.registrationNumber}</p>
                      <p><strong>Valid Until:</strong> {certificateData.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Section */}
          <div 
            className="mt-12 rounded-xl p-6 lg:p-8"
            style={{ 
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 
                  className="text-xl font-semibold mb-4 flex items-center"
                  style={{ color: '#FFF6E4' }}
                >
                  <CheckCircle size={24} className="mr-3" style={{ color: '#22c55e' }} />
                  Certificate Verification
                </h3>
                <p style={{ color: '#F2B2A8', opacity: 0.9, marginBottom: '16px' }}>
                  Verify the authenticity of this certificate through official certification body websites:
                </p>
                <div className="space-y-3">
                  {certificateData.verificationUrls.map((url, index) => (
                    <button
                      key={index}
                      className="flex items-center text-sm font-medium transition-all duration-300 hover:scale-105 p-2 rounded"
                      style={{ 
                        color: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)'
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {url}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: '#FFF6E4' }}
                >
                  Certificate Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#F2B2A8', opacity: 0.8 }}>Certification Body:</span>
                    <span style={{ color: '#FFF6E4', fontWeight: '500' }}>{certificateData.issuingBody}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#F2B2A8', opacity: 0.8 }}>Issue Date:</span>
                    <span style={{ color: '#FFF6E4', fontWeight: '500' }}>{certificateData.issueDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#F2B2A8', opacity: 0.8 }}>Expiry Date:</span>
                    <span style={{ color: '#FFF6E4', fontWeight: '500' }}>{certificateData.expiryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#F2B2A8', opacity: 0.8 }}>Category:</span>
                    <span style={{ color: '#FFF6E4', fontWeight: '500' }}>C - CIV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Full Screen PDF Modal */}
      {showFullCertificate && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-95"
          onClick={() => setShowFullCertificate(false)}
        >
          <div className="h-full flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-black bg-opacity-50">
              <h3 className="text-white text-lg font-medium">
                ISO 22000:2018 Certificate - Full Screen View
              </h3>
              <button
                onClick={() => setShowFullCertificate(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff'
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Full Screen PDF */}
            <div className="flex-1 p-4">
              <iframe
                src={`${certificatePdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                width="100%"
                height="100%"
                style={{ 
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: 'white'
                }}
                title="ISO 22000:2018 Certificate - Full Screen"
              />
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default KifnaCertificatePage;