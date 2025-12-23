import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SriRamVarma.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Download Button - Top */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            download="Sri_Ram_Varma_Resume.pdf"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Two-Page PDF Viewer */}
        <Row className="resume d-flex justify-content-center">
          <Document 
            file={pdf} 
            onLoadSuccess={onDocumentLoadSuccess}
            className="pdf-document"
            loading={
              <div style={{ 
                textAlign: 'center', 
                padding: '50px', 
                fontSize: '18px',
                color: '#666'
              }}>
                Loading Resume...
              </div>
            }
          >
            <div 
              style={{ 
                display: 'flex', 
                gap: width > 786 ? '30px' : '15px',
                flexWrap: 'wrap', 
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
            >
              <Page 
                pageNumber={1} 
                scale={width > 1200 ? 1.3 : width > 786 ? 1.0 : 0.7}
                className="pdf-page"
                style={{ maxWidth: '100%' }}
              />
              {numPages && numPages >= 2 && (
                <Page 
                  pageNumber={2} 
                  scale={width > 1200 ? 1.3 : width > 786 ? 1.0 : 0.7}
                  className="pdf-page"
                  style={{ maxWidth: '100%' }}
                />
              )}
            </div>
          </Document>
        </Row>

        {/* Download Button - Bottom */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            download="SriRamVarma.pdf"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Page Info */}
        {numPages && (
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            <div style={{ 
              fontSize: "16px", 
              color: "#666", 
              fontWeight: "500"
            }}>
              Showing {Math.min(2, numPages)} of {numPages} page{numPages > 1 ? 's' : ''}
            </div>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;
