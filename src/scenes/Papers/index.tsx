const DownloadPDF = () => {
  const pdfUrl3 = '../src/assets/rewriting-group-products-with-transversals.pdf'; 
  const pdfFileName3 = 'Rewriting-Group-Products-with-Transversals.pdf'; 
  
  const pdfUrl2 = '../src/assets/preservation-of-trees-by-semidirect-products.pdf';
  const pdfFileName2 = 'Preservation-of-Trees-by-Semidirect-Products.pdf'
    
  const pdfUrl4 = '../src/assets/using-decision-problems-in-public-key-cryptography.pdf';
  const pdfFileName4 = 'Using-Decision-Problems-in-Public-Key-Cryptography.pdf';

  const pdfUrl1 = '../src/assets/combinatorial-group-theory-and-public-key-cryptography.pdf';
  const pdfFileName1 = 'Combinatorial-Group-Theory-and-Public-Key-Cryptography.pdf';

    return (
      <div>
        <div className='mb-2'>
          <a href={pdfUrl1} download={pdfFileName1} className='underline'>
            "Combinatorial Group Theory and Public Key Cryptography"
          </a>
        </div>
        <div className='mb-2'>
          <a href={pdfUrl2} download={pdfFileName2} className='underline'>
            "Preservation of Trees by Semidirect Products"
          </a>
        </div>
        <div className='mb-2'>
          <a href={pdfUrl3} download={pdfFileName3} className='underline'>
            "Rewriting Group Products with Transversals"
          </a>
        </div>
        <div>
          <a href={pdfUrl4} download={pdfFileName4} className='underline'>
            "Using Decision Problems in Public Key Cryptography"
          </a>
        </div>
      </div>
    );
  };
  
  export default DownloadPDF;